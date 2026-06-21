import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LogOut, PanelLeftClose, PanelLeft, LogIn, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { sidebarGroups, type NavItem } from "@/config/nav";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MathMindLogo } from "@/components/MathMindLogo";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, profile, user } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOut();
      toast.success("Logged out");
      navigate("/");
    } catch {
      toast.error("Failed to log out");
    } finally {
      setLoggingOut(false);
    }
  };

  const isItemActive = (item: NavItem) =>
    location.pathname === item.path ||
    (item.path !== "/dashboard" && location.pathname.startsWith(item.path + "/"));

  const renderLink = (item: NavItem) => {
    const active = isItemActive(item);
    const isAI = item.variant === "ai";
    const link = (
      <NavLink
        to={item.path}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group relative flex items-center gap-3 rounded-xl font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          collapsed ? "px-0 py-2.5 justify-center" : "px-3 py-2.5",
          active
            ? isAI
              ? "bg-primary/10 text-primary"
              : "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        {active && !collapsed && (
          <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-primary" />
        )}
        {isAI ? (
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg transition-colors",
              collapsed ? "h-8 w-8" : "h-7 w-7",
              active ? "bg-primary text-primary-foreground" : "bg-accent/15 text-accent-foreground dark:text-accent"
            )}
          >
            <Sparkles className="h-4 w-4" />
          </span>
        ) : (
          <item.icon
            className={cn("h-5 w-5 shrink-0", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}
            strokeWidth={active ? 2.4 : 2}
          />
        )}
        {!collapsed && <span className="text-sm">{item.label}</span>}
      </NavLink>
    );

    if (!collapsed) return link;
    return (
      <Tooltip delayDuration={120}>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent side="right" sideOffset={10}>{item.label}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-full flex-col border-r border-border bg-sidebar-background backdrop-blur-xl",
        "transition-[width] duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      {/* Brand / collapse */}
      <div
        className={cn(
          "flex h-14 shrink-0 items-center border-b border-border/60 sm:h-16",
          collapsed ? "justify-center px-2" : "justify-between px-4"
        )}
      >
        {!collapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <MathMindLogo size="sm" />
            <span className="font-display text-base font-bold text-foreground">MathMind</span>
          </div>
        )}
        <button
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>
      </div>

      {/* Groups */}
      <nav
        className={cn("flex-1 overflow-y-auto py-3", collapsed ? "px-2" : "px-3")}
        aria-label="Main navigation"
      >
        {sidebarGroups.map((group, gi) => (
          <div key={group.label} className={cn(gi > 0 && "mt-4")}>
            {!collapsed && (
              <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                {group.label}
              </p>
            )}
            {collapsed && gi > 0 && (
              <div className="mx-3 my-3 h-px bg-border/60" aria-hidden="true" />
            )}
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.path}>{renderLink(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Account footer */}
      <div className={cn("border-t border-border/60 p-3", collapsed && "px-2")}>
        {!user ? (
          collapsed ? (
            <Tooltip delayDuration={120}>
              <TooltipTrigger asChild>
                <NavLink
                  to="/login"
                  aria-label="Sign in"
                  className="flex h-10 w-full items-center justify-center rounded-xl text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <LogIn className="h-5 w-5" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>Sign in</TooltipContent>
            </Tooltip>
          ) : (
            <div className="space-y-2">
              <NavLink
                to="/login"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-button)] transition-all hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <LogIn className="h-4 w-4" /> Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className="block text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Create account
              </NavLink>
            </div>
          )
        ) : (
          <div className={cn("flex", collapsed ? "flex-col items-center gap-2" : "items-center gap-2")}>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {profile?.display_name || user.email}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">Signed in</p>
              </div>
            )}
            {collapsed ? (
              <Tooltip delayDuration={120}>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    aria-label="Log out"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>Log out</TooltipContent>
              </Tooltip>
            ) : (
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                aria-label="Log out"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
