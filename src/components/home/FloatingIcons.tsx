import { useEffect, useRef, useState } from "react";
import { Sigma, Calculator, Pi, Brain, Sparkles, BookOpen, Divide, Plus } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const icons = [Sigma, Calculator, Pi, Brain, Sparkles, BookOpen, Divide, Plus];

interface Particle {
  Icon: typeof Sigma;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateParticles(): Particle[] {
  return icons.map((Icon, i) => ({
    Icon,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    size: 18 + Math.random() * 14,
    delay: i * 0.4,
    duration: 6 + Math.random() * 4,
    opacity: 0.08 + Math.random() * 0.1,
  }));
}

export function FloatingIcons() {
  const reduced = usePrefersReducedMotion();
  const [particles] = useState(generateParticles);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      if (containerRef.current) {
        const items = containerRef.current.children;
        for (let i = 0; i < items.length; i++) {
          const el = items[i] as HTMLElement;
          const factor = parseFloat(el.dataset.factor || "1");
          const dx = (mouse.current.x - 0.5) * factor * 30;
          const dy = (mouse.current.y - 0.5) * factor * 30;
          el.style.transform = `translate(${dx}px, ${dy}px)`;
        }
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          data-factor={((i % 3) + 1) * 0.5}
          className="absolute transition-transform duration-300 ease-out"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: reduced
              ? "none"
              : `float-drift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        >
          <p.Icon
            size={p.size}
            className="text-primary"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
}
