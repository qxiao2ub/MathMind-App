import { Badge } from "@/components/ui/badge";
import { CheckCircle2, CircleDot, HelpCircle } from "lucide-react";

interface CommunityStatusBadgeProps {
  status: string;
  className?: string;
}

export function CommunityStatusBadge({ status, className }: CommunityStatusBadgeProps) {
  switch (status) {
    case "solved":
      return (
        <Badge className={`bg-success/20 text-foreground border-success/30 gap-1 ${className}`}>
          <CheckCircle2 className="w-3 h-3" /> Solved
        </Badge>
      );
    case "no_solution_yet":
      return (
        <Badge variant="outline" className={`text-muted-foreground gap-1 ${className}`}>
          <HelpCircle className="w-3 h-3" /> No Solution Yet
        </Badge>
      );
    default:
      return (
        <Badge variant="secondary" className={`gap-1 ${className}`}>
          <CircleDot className="w-3 h-3" /> Open
        </Badge>
      );
  }
}
