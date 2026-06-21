import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "mathmind-sidebar-collapsed";
const LG_BREAKPOINT = 1024;

export function useSidebarState() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= LG_BREAKPOINT
  );
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "true";
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track breakpoint
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
      if (e.matches) setMobileOpen(false); // close drawer when going to desktop
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Persist desktop collapsed state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  const toggleCollapsed = useCallback(() => setCollapsed((c) => !c), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return {
    isDesktop,
    collapsed,
    toggleCollapsed,
    mobileOpen,
    openMobile,
    closeMobile,
  };
}
