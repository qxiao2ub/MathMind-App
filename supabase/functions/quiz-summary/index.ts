import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface QuestionPayload {
  question: string;
  wasCorrect: boolean;
  chosenAnswer: string;
  correctAnswer: string;
  skillTags?: string[];
}

interface RequestBody {
  quizType: string;
  topicName: string;
  topicId?: string;
  score: number;
  total: number;
  questions: QuestionPayload[];
  timeTakenSeconds?: number;
}

function deriveErrorType(q: QuestionPayload): string | null {
  if (q.wasCorrect) return null;
  const chosen = (q.chosenAnswer || "").toLowerCase();
  const correct = (q.correctAnswer || "").toLowerCase();
  // Sign error heuristic
  if (chosen === `-${correct}` || correct === `-${chosen}`) return "sign_error";
  // Fraction/decimal mismatch
  if ((chosen.includes("/") && correct.includes(".")) || (chosen.includes(".") && correct.includes("/"))) return "fraction_decimal";
  // Distribution error if parentheses in question
  if (q.question.includes("(") && q.question.includes(")")) return "distribution_error";
  return "concept_gap";
}

function computeMastery(oldMastery: number | undefined, scoreRatio: number): number {
  const old = oldMastery ?? 0.5;
  return Math.round((0.7 * old + 0.3 * scoreRatio) * 100) / 100;
}

const fallbackSummary = {
  overview: "We couldn't generate detailed AI feedback right now, but your results have been saved.",
  trend: { recentAveragePercent: 0, topicMasteryEstimate: 0, improving: false },
  strengths: [],
  weakAreas: [],
  nextSteps: [
    { action: "Review the questions you got wrong and redo them", durationMinutes: 10, successCheck: "Get them right on retry" },
    { action: "Practise similar questions from the same topic", durationMinutes: 15, successCheck: "Score 80%+ on retry" },
  ],
  recommendedTopics: [],
  practiceQuestions: [],
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const startTime = Date.now();

  try {
    // --- Auth ---
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    // Verify user
    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userError } = await authClient.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userId = user.id;

    // Service role client for DB ops
    const db = createClient(supabaseUrl, serviceRoleKey);

    // --- Validate payload ---
    const body: RequestBody = await req.json();
    const { quizType, topicName, topicId, score, total, questions, timeTakenSeconds } = body;

    if (!quizType || !topicName || total == null || total <= 0 || score == null || !Array.isArray(questions)) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (score < 0 || score > total) {
      return new Response(JSON.stringify({ error: "Score out of range" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const percentage = Math.round((score / total) * 100);

    // --- Rate limit: max 10 AI calls per 5 minutes ---
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { count: recentCalls } = await db
      .from("ai_feedback_logs")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("created_at", fiveMinAgo);

    if ((recentCalls ?? 0) >= 10) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a few minutes." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // --- Persist attempt ---
    const { data: attemptRow, error: attemptErr } = await db
      .from("quiz_attempts")
      .insert({
        user_id: userId,
        quiz_type: quizType,
        topic_id: topicId || null,
        topic_name: topicName,
        score,
        total,
        percentage,
        time_taken_seconds: timeTakenSeconds || null,
      })
      .select("id")
      .single();

    if (attemptErr) {
      console.error("Insert quiz_attempts error:", attemptErr);
      throw new Error("Failed to save attempt");
    }

    const attemptId = attemptRow.id;

    // Persist question rows
    const questionRows = questions.map((q) => ({
      attempt_id: attemptId,
      user_id: userId,
      question_text: q.question,
      chosen_answer: q.chosenAnswer || null,
      correct_answer: q.correctAnswer,
      was_correct: q.wasCorrect,
      skill_tags: q.skillTags || null,
      error_type: deriveErrorType(q),
    }));

    const { error: qErr } = await db.from("quiz_attempt_questions").insert(questionRows);
    if (qErr) console.error("Insert quiz_attempt_questions error:", qErr);

    // --- Fetch history context ---
    const { data: recentTopicAttempts } = await db
      .from("quiz_attempts")
      .select("score, total, percentage, created_at")
      .eq("user_id", userId)
      .eq("topic_name", topicName)
      .order("created_at", { ascending: false })
      .limit(10);

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const { data: recentAllAttempts } = await db
      .from("quiz_attempts")
      .select("topic_name, percentage, created_at")
      .eq("user_id", userId)
      .gte("created_at", thirtyDaysAgo)
      .order("created_at", { ascending: false })
      .limit(50);

    // Fetch recent wrong answers for error patterns
    const { data: recentErrors } = await db
      .from("quiz_attempt_questions")
      .select("error_type, skill_tags")
      .eq("user_id", userId)
      .eq("was_correct", false)
      .order("created_at", { ascending: false })
      .limit(30);

    // Fetch or create skill profile
    let { data: skillProfile } = await db
      .from("student_skill_profile")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (!skillProfile) {
      await db.from("student_skill_profile").insert({ user_id: userId });
      skillProfile = {
        user_id: userId,
        mastery_by_topic: {},
        weak_skills: [],
        strength_skills: [],
        streak_days: 0,
        last_activity_at: null,
        updated_at: new Date().toISOString(),
      };
    }

    // --- Update skill profile deterministically ---
    const masteryByTopic = { ...(skillProfile.mastery_by_topic as Record<string, any>) };
    const topicEntry = masteryByTopic[topicName] || { mastery: 0.5, last10: [], common_errors: [] };
    topicEntry.mastery = computeMastery(topicEntry.mastery, score / total);
    topicEntry.last10 = [percentage, ...(topicEntry.last10 || [])].slice(0, 10);

    // Aggregate error types for this topic
    const errorFreq: Record<string, number> = {};
    (recentErrors || []).forEach((e: any) => {
      if (e.error_type) errorFreq[e.error_type] = (errorFreq[e.error_type] || 0) + 1;
    });
    topicEntry.common_errors = Object.entries(errorFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([e]) => e);

    masteryByTopic[topicName] = topicEntry;

    // Compute weak/strong skills
    const topicEntries = Object.entries(masteryByTopic) as [string, any][];
    const weakSkills = topicEntries.filter(([, v]) => v.mastery < 0.5).map(([k]) => k);
    const strengthSkills = topicEntries.filter(([, v]) => v.mastery >= 0.75).map(([k]) => k);

    // Streak
    let streakDays = skillProfile.streak_days || 0;
    const lastActivity = skillProfile.last_activity_at ? new Date(skillProfile.last_activity_at) : null;
    const today = new Date();
    if (lastActivity) {
      const diffDays = Math.floor((today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) streakDays += 1;
      else if (diffDays > 1) streakDays = 1;
      // same day: no change
    } else {
      streakDays = 1;
    }

    await db
      .from("student_skill_profile")
      .update({
        mastery_by_topic: masteryByTopic,
        weak_skills: weakSkills,
        strength_skills: strengthSkills,
        streak_days: streakDays,
        last_activity_at: today.toISOString(),
        updated_at: today.toISOString(),
      })
      .eq("user_id", userId);

    // --- Build AI prompt with personalization ---
    const questionSummary = questions
      .map(
        (q, i) =>
          `Q${i + 1}: "${q.question}" — ${q.wasCorrect ? "✅ Correct" : `❌ Wrong (chose: "${q.chosenAnswer}", correct: "${q.correctAnswer}")`}`
      )
      .join("\n");

    const recentAttemptsSummary = (recentTopicAttempts || [])
      .map((a: any) => `${a.percentage}% on ${new Date(a.created_at).toLocaleDateString()}`)
      .join(", ");

    const commonMistakes = topicEntry.common_errors.join(", ") || "none detected";

    const topicMasterySnapshot = Object.entries(masteryByTopic)
      .map(([k, v]: [string, any]) => `${k}: ${Math.round(v.mastery * 100)}%`)
      .join(", ");

    const systemPrompt = `You are a friendly, encouraging maths tutor for Australian high school students.
You have access to the student's historical performance. Generate personalised, specific, actionable feedback.

Return ONLY valid JSON (no markdown fences) with this EXACT structure:
{
  "overview": "1-2 sentences with % and trend vs recent attempts",
  "trend": { "recentAveragePercent": number, "topicMasteryEstimate": number, "improving": boolean },
  "strengths": [{ "label": "...", "evidence": "Reference 1-2 questions or history signals" }],
  "weakAreas": [{ "label": "...", "why": "Concrete reason", "evidence": "Reference wrong Qs/pattern" }],
  "nextSteps": [{ "action": "Do X", "durationMinutes": number, "successCheck": "How to know you got it" }],
  "recommendedTopics": [{ "topic": "...", "reason": "Based on errors + mastery trend" }],
  "practiceQuestions": [{ "question": "...", "hint": "...", "answer": "..." }]
}

Rules:
- No generic advice unless tied to a specific error pattern
- practiceQuestions must target top 1-2 weak areas
- If perfect score: weakAreas=[], practiceQuestions are extension questions one level harder, nextSteps focus on enrichment
- Use Australian spelling (maths, practise)
- 2-5 practiceQuestions, 2-4 nextSteps`;

    const userPrompt = `Quiz Type: ${quizType}
Topic: ${topicName}
Score: ${score}/${total} (${percentage}%)
Time taken: ${timeTakenSeconds ? `${timeTakenSeconds}s` : "not recorded"}

Results:
${questionSummary}

--- Student History ---
Recent attempts on this topic: ${recentAttemptsSummary || "first attempt"}
Topic mastery snapshot: ${topicMasterySnapshot || "no prior data"}
Common mistake patterns: ${commonMistakes}
Weak skills: ${weakSkills.join(", ") || "none"}
Strong skills: ${strengthSkills.join(", ") || "none yet"}
Current streak: ${streakDays} days`;

    // --- Call AI ---
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    let aiStatus = 0;
    let summary: any;

    try {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        }),
      });

      aiStatus = response.status;

      if (!response.ok) {
        if (response.status === 429) {
          await response.text();
          summary = { ...fallbackSummary, overview: "AI feedback temporarily unavailable due to rate limiting. Your results have been saved." };
        } else if (response.status === 402) {
          await response.text();
          summary = { ...fallbackSummary, overview: "AI feedback credits exhausted. Your results have been saved." };
        } else {
          await response.text();
          summary = fallbackSummary;
        }
      } else {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || "";
        try {
          const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
          summary = JSON.parse(cleaned);
        } catch {
          summary = { ...fallbackSummary, overview: content || fallbackSummary.overview };
        }
      }
    } catch (aiErr) {
      console.error("AI call failed:", aiErr);
      aiStatus = 500;
      summary = fallbackSummary;
    }

    const latencyMs = Date.now() - startTime;

    // Log AI call
    await db.from("ai_feedback_logs").insert({
      user_id: userId,
      source: "quiz_summary",
      topic_name: topicName,
      attempt_id: attemptId,
      model: "google/gemini-3-flash-preview",
      status: aiStatus,
      latency_ms: latencyMs,
    });

    // Return enriched response
    return new Response(
      JSON.stringify({ ...summary, attemptId, percentage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("quiz-summary error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
