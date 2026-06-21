import { cn } from "@/lib/utils";
import mathmindLogo from "@/assets/mathmind-logo.png";

interface MathMindLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-9 h-9",
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-24 md:w-32 lg:w-40",
};

export function MathMindLogo({ size = "md", className }: MathMindLogoProps) {
  return (
    <img
      src={mathmindLogo}
      alt="MathMind logo"
      className={cn(sizeMap[size], "object-contain shrink-0", className)}
    />
  );
}
