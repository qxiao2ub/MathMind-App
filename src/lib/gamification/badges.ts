export interface BadgeDef {
  key: string;
  name: string;
  description: string;
  emoji: string;
}

export const BADGES: BadgeDef[] = [
  { key: "first_lesson", name: "First Steps", description: "Complete your first lesson", emoji: "📘" },
  { key: "first_quiz", name: "Quiz Rookie", description: "Complete your first quiz", emoji: "📝" },
  { key: "perfect_quiz", name: "Perfect Quiz", description: "Score 100% on any quiz", emoji: "🎯" },
  { key: "speed_solver", name: "Speed Solver", description: "Finish a quiz in under 2 minutes", emoji: "⚡" },
  { key: "streak_7", name: "7-Day Streak", description: "Study 7 days in a row", emoji: "🔥" },
  { key: "xp_1000", name: "1,000 XP Reached", description: "Earn 1,000 total XP", emoji: "📈" },
  { key: "xp_5000", name: "5,000 XP Reached", description: "Earn 5,000 total XP", emoji: "🚀" },
  { key: "algebra_master", name: "Algebra Master", description: "Master an algebra chapter", emoji: "🧠" },
  { key: "top_10_weekly", name: "Top 10 Weekly", description: "Reach the weekly leaderboard top 10", emoji: "🏆" },
];

export const BADGE_MAP: Record<string, BadgeDef> = Object.fromEntries(BADGES.map((b) => [b.key, b]));
