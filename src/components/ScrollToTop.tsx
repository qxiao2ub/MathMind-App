import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top
    window.scrollTo(0, 0);

    // Safety: clear any lingering scroll/interaction locks left over
    // from dialogs, sheets, drawers, or mobile menus that didn't
    // unmount cleanly. This prevents "page can't scroll" after closing
    // a modal.
    const body = document.body;
    body.style.overflow = "";
    body.style.paddingRight = "";
    body.style.pointerEvents = "";
    document.documentElement.style.overflow = "";
  }, [pathname]);

  return null;
}
