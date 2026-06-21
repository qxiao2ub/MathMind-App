import { BookOpen, ClipboardList, Dumbbell, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: BookOpen,
    label: "Continue Learning",
    description: "Pick up where you left off",
    path: "/learn",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    accent: "hover:border-primary/40",
  },
  {
    icon: ClipboardList,
    label: "Take a Quiz",
    description: "Test your knowledge",
    path: "/quiz",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    accent: "hover:border-blue-400/40",
  },
  {
    icon: Dumbbell,
    label: "Practice",
    description: "Unlimited questions",
    path: "/practice",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    accent: "hover:border-violet-400/40",
  },
  {
    icon: Sparkles,
    label: "Ask AI Tutor",
    description: "Get instant help",
    path: "/chat",
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-500",
    accent: "hover:border-amber-400/40",
  },
];

export function QuickActions() {
  return (
    <div className="animate-slide-up">
      <h2 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Actions</h2>

      <div className="flex sm:grid sm:grid-cols-2 gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
        {actions.map((action, i) => (
          <Link
            key={action.path}
            to={action.path}
            className={`
              group topic-card flex flex-col p-3 sm:p-4 border border-transparent
              transition-all duration-200 hover:shadow-sm active:scale-[0.98]
              shrink-0 w-[140px] min-h-[64px] snap-start sm:w-auto sm:min-h-0
              ${action.accent}
            `}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Icon + arrow row */}
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${action.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}
              >
                <action.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${action.iconColor}`} />
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground/70 group-hover:translate-x-0.5 transition-all duration-150 mt-1" />
            </div>

            {/* Label + desc */}
            <h3 className="font-semibold text-xs sm:text-sm leading-snug mb-0.5">{action.label}</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
