import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Flame, Star, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface Row {
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  xp: number;
  level: number;
  stars: number;
  streak: number;
}

const SCOPES = [
  { key: "global", label: "All-time" },
  { key: "weekly", label: "This week" },
  { key: "monthly", label: "This month" },
] as const;

type Scope = (typeof SCOPES)[number]["key"];

function rankColor(rank: number) {
  if (rank === 1) return "bg-yellow-400/15 text-yellow-600 dark:text-yellow-300 border-yellow-400/30";
  if (rank === 2) return "bg-zinc-300/20 text-zinc-700 dark:text-zinc-200 border-zinc-300/40";
  if (rank === 3) return "bg-amber-700/15 text-amber-700 dark:text-amber-400 border-amber-700/30";
  return "bg-muted text-muted-foreground border-border";
}

function LeaderboardTable({ scope }: { scope: Scope }) {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    let cancel = false;
    supabase.rpc("get_leaderboard", { _scope: scope, _limit: 50 }).then(({ data, error }) => {
      if (cancel) return;
      if (error) {
        console.error(error);
        setRows([]);
        return;
      }
      setRows((data as Row[]) ?? []);
    });
    return () => {
      cancel = true;
    };
  }, [scope]);

  if (rows === null) {
    return <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">Loading rankings…</div>;
  }
  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
        <Trophy className="mx-auto h-8 w-8 text-muted-foreground" />
        <h3 className="mt-3 font-display text-lg font-bold">No entries yet</h3>
        <p className="mt-1 text-sm text-muted-foreground">Be the first — earn some XP to claim the top spot.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {rows.map((r, i) => {
        const rank = i + 1;
        const me = user?.id === r.user_id;
        return (
          <li
            key={r.user_id}
            className={cn(
              "flex items-center gap-3 rounded-2xl border bg-card p-3 sm:p-4 transition",
              me ? "border-primary/40 ring-2 ring-primary/20" : "border-border",
            )}
          >
            <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums", rankColor(rank))}>
              {rank <= 3 ? <Medal className="h-4 w-4" /> : rank}
            </div>
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={r.avatar_url ?? undefined} alt={r.display_name} />
              <AvatarFallback>{r.display_name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold sm:text-base">
                {r.display_name}
                {me && <span className="ml-2 text-xs text-primary">You</span>}
              </p>
              <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Trophy className="h-3 w-3" /> Lv {r.level}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3" /> {r.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Flame className="h-3 w-3" /> {r.streak}d
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display text-base font-bold tabular-nums sm:text-lg">{r.xp.toLocaleString()}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">XP</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Leaderboard() {
  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      <SEO
        title="Leaderboard — MathMind"
        description="See where you rank against other learners by XP, stars, and streaks."
       noindex />

      <header className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Trophy className="h-3.5 w-3.5" />
          Rankings
        </div>
        <h1 className="mt-3 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">Leaderboard</h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
          Climb the ranks by earning XP from lessons, quizzes, and practice.
        </p>
      </header>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="mb-5 grid w-full grid-cols-3 sm:w-auto">
          {SCOPES.map((s) => (
            <TabsTrigger key={s.key} value={s.key}>
              {s.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {SCOPES.map((s) => (
          <TabsContent key={s.key} value={s.key}>
            <LeaderboardTable scope={s.key} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
