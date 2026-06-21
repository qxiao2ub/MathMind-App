// Level curve: level = floor(sqrt(xp / 50)) + 1 (matches DB calc_level).
export function levelForXp(xp: number): number {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(xp, 0) / 50)) + 1);
}

export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.pow(level - 1, 2) * 50;
}

export function progressToNext(xp: number) {
  const level = levelForXp(xp);
  const currentBase = xpForLevel(level);
  const nextBase = xpForLevel(level + 1);
  const into = xp - currentBase;
  const span = nextBase - currentBase;
  return {
    level,
    nextLevel: level + 1,
    into,
    span,
    needed: Math.max(0, nextBase - xp),
    percent: Math.min(100, Math.round((into / span) * 100)),
  };
}
