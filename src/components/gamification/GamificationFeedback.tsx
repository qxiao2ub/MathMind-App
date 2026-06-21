import { useEffect, useState } from "react";
import { onXpAward, type AwardResult } from "@/lib/gamification/awardXp";
import { BADGE_MAP } from "@/lib/gamification/badges";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, Star, Trophy } from "lucide-react";
import { toast } from "sonner";

/**
 * Global gamification feedback: floating "+XP" pop-ups, badge toasts,
 * and a level-up celebration dialog. Mount once near the app root.
 */
export function GamificationFeedback() {
  const [pops, setPops] = useState<{ id: number; xp: number; stars: number }[]>([]);
  const [levelUp, setLevelUp] = useState<AwardResult | null>(null);

  useEffect(() => {
    const off = onXpAward((result) => {
      if (result.awarded > 0 || result.stars_awarded > 0) {
        const id = Date.now() + Math.random();
        setPops((prev) => [...prev, { id, xp: result.awarded, stars: result.stars_awarded }]);
        setTimeout(() => setPops((prev) => prev.filter((p) => p.id !== id)), 1700);
      }
      result.unlockedBadges.forEach((key) => {
        const b = BADGE_MAP[key];
        if (b) {
          toast.success(`Badge unlocked: ${b.name}`, {
            description: `${b.emoji} ${b.description}`,
          });
        }
      });
      if (result.leveled_up) {
        setLevelUp(result);
      }
    });
    return () => {
      off();
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed bottom-24 right-4 z-[100] flex flex-col items-end gap-2 sm:bottom-8 sm:right-8">
        {pops.map((p) => (
          <div
            key={p.id}
            className="animate-xp-pop rounded-2xl border border-primary/30 bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg"
          >
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              {p.xp > 0 && <>+{p.xp} XP</>}
              {p.stars > 0 && (
                <>
                  <Star className="ml-2 h-4 w-4 fill-current" />+{p.stars}
                </>
              )}
            </span>
          </div>
        ))}
      </div>

      <Dialog open={!!levelUp} onOpenChange={(o) => !o && setLevelUp(null)}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary animate-scale-in">
              <Trophy className="h-10 w-10" />
            </div>
            <DialogTitle className="text-2xl">Level up!</DialogTitle>
            <DialogDescription className="text-base">
              You reached <span className="font-bold text-foreground">Level {levelUp?.level}</span>. Keep going!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
