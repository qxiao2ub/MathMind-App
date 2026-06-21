import { ChevronRight } from "lucide-react";

interface PracticeBreadcrumbProps {
  parts: string[];
}

export function PracticeBreadcrumb({ parts }: PracticeBreadcrumbProps) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap animate-fade-in">
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />}
          <span className={i === parts.length - 1 ? "text-foreground font-medium" : ""}>
            {part}
          </span>
        </span>
      ))}
    </div>
  );
}
