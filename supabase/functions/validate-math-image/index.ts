import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { imageUrl } = await req.json();
    if (!imageUrl) {
      return new Response(JSON.stringify({ approved: false, reason: "No image URL provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      // Fallback: approve if no AI key configured
      return new Response(JSON.stringify({ approved: true, reason: "Validation skipped — no AI key" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content:
              "You are an image content classifier. Your job is to determine if an image contains math-related content such as equations, formulas, algebra, geometry diagrams, graphs, numbers with operators, fractions, mathematical notation, word problems, or handwritten/printed math. Respond with ONLY a JSON object: {\"is_math\": true/false, \"reason\": \"brief explanation\"}. Nothing else.",
          },
          {
            role: "user",
            content: [
              { type: "text", text: "Does this image contain math-related content?" },
              { type: "image_url", image_url: { url: imageUrl } },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ approved: true, reason: "Rate limited — validation skipped" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      // On AI error, approve to not block users
      return new Response(JSON.stringify({ approved: true, reason: "Validation service unavailable" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    try {
      // Extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const result = JSON.parse(jsonMatch[0]);
        return new Response(
          JSON.stringify({
            approved: result.is_math === true,
            reason: result.reason || (result.is_math ? "Math content detected" : "No math content detected"),
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } catch {
      // Parse failure — approve
    }

    return new Response(JSON.stringify({ approved: true, reason: "Could not parse validation result" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("validate-math-image error:", e);
    return new Response(
      JSON.stringify({ approved: true, reason: "Validation error — approved by default" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
