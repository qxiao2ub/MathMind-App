import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { AppHeader } from "./AppHeader";
import { useSidebarState } from "@/hooks/useSidebarState";
import { cn } from "@/lib/utils";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { collapsed, toggleCollapsed } = useSidebarState();

  return (
    <div className="relative min-h-screen bg-background">
      {/* Ambient background wash — extremely subtle, theme-aware */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-70 dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(800px 600px at 0% -10%, hsl(var(--primary) / 0.08), transparent 60%), radial-gradient(700px 500px at 100% 110%, hsl(var(--accent) / 0.05), transparent 60%)",
        }}
      />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} onToggle={toggleCollapsed} />
      </div>

      {/* Main */}
      <main
        data-dashboard-scroll-container
        className={cn(
          "min-h-screen pb-[var(--nav-height-mobile)] lg:pb-0 transition-[margin] duration-300 ease-in-out",
          collapsed ? "lg:ml-[72px]" : "lg:ml-64"
        )}
      >
        <AppHeader />
        <div className="dashboard-container w-full max-w-7xl mx-auto px-4 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      </main>

      {/* Bottom nav */}
      <MobileNav />
    </div>
  );
}
