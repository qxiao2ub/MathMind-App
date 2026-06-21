import { useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { X, LogOut, Sparkles } from "lucide-react";
import { MathMindLogo } from "@/components/MathMindLogo";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { allNavItems } from "@/config/nav";

interface MobileSidebarDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileSidebarDrawer({ open, onClose }: MobileSidebarDrawerProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, profile, user } = useAuth();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus trap – focus drawer when opened
  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      onClose();
      navigate("/");
    } catch {
      toast.error("Failed to log out");
    }
  };

  const mainItems = allNavItems.filter((i) => i.variant !== "ai");

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-card border-r border-border/50 z-50 flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          "focus-visible:outline-none",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border/40">
          <div className="flex items-center gap-3">
            <MathMindLogo size="md" />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">MathMind</h1>
              <p className="text-xs text-muted-foreground">AI Math Tutor</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto" aria-label="Main navigation">
          <ul className="space-y-1">
            {mainItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/dashboard" && location.pathname.startsWith(item.path + "/"));
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                      "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive && "bg-primary/10 text-primary border border-primary/20"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* AI Tutor */}
        <div className="p-4">
          <NavLink
            to="/chat"
            onClick={onClose}
            aria-label="Open AI Tutor chat"
            className={cn(
              "flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200",
              "bg-muted/50 border-border/50 hover:bg-muted/80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              location.pathname === "/chat" && "bg-primary/10 border-primary/20"
            )}
          >
            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground">AI Tutor</p>
              <p className="text-xs text-muted-foreground">Ask anything!</p>
            </div>
          </NavLink>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-border/50">
          {(profile?.display_name || user?.email) && (
            <p className="text-xs text-muted-foreground mb-2 px-4 truncate">
              {profile?.display_name || user?.email}
            </p>
          )}
          <button
            onClick={handleLogout}
            aria-label="Log out"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl w-full font-medium transition-all duration-200",
              "text-muted-foreground hover:text-destructive hover:bg-destructive/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
