import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { primaryNavItems } from "@/config/nav";

export function MobileNav() {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2 lg:hidden",
        "w-[calc(100%-20px)] max-w-[480px]",
        "bottom-[max(10px,env(safe-area-inset-bottom))]",
        "rounded-[1.75rem] border border-border/60",
        "bg-background/80 supports-[backdrop-filter]:bg-background/65",
        "backdrop-blur-2xl backdrop-saturate-150",
        "shadow-[var(--shadow-lift)]",
        "p-1.5",
        "animate-in fade-in slide-in-from-bottom-3 duration-300"
      )}
      aria-label="Main navigation"
    >
      <ul className="flex items-stretch gap-0.5">
        {primaryNavItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/dashboard" && location.pathname.startsWith(item.path + "/"));
          const isAI = item.variant === "ai";

          return (
            <li key={item.path} className="flex flex-1">
              <NavLink
                to={item.path}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
                className={cn(
                  "relative touch-manipulation flex min-h-[54px] w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5",
                  "transition-all duration-200 ease-out active:scale-[0.97]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive && !isAI
                    ? "bg-primary/10 text-primary"
                    : !isAI && "text-muted-foreground hover:text-foreground"
                )}
              >
                {isAI ? (
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                        : "bg-accent text-accent-foreground shadow-[var(--shadow-xs)]"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                ) : (
                  <>
                    <item.icon className="h-[20px] w-[20px]" strokeWidth={isActive ? 2.4 : 2} />
                    <span
                      className={cn(
                        "text-[10px] font-semibold leading-none mt-0.5",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
