import { useState, useEffect, useCallback } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingText({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypingTextProps) {
  const reduced = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      setText(current.slice(0, text.length + 1));
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(current.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
        return;
      }
    }
  }, [text, isDeleting, phraseIndex, phrases, pauseDuration]);

  useEffect(() => {
    if (reduced) {
      // just cycle phrases statically
      const id = setInterval(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 3000);
      return () => clearInterval(id);
    }
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, reduced, phrases]);

  if (reduced) {
    return (
      <span className="text-primary" aria-live="polite">
        {phrases[phraseIndex]}
      </span>
    );
  }

  return (
    <span className="text-primary" aria-live="polite">
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[3px] h-[1em] bg-primary align-middle" />
    </span>
  );
}
