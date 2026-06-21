/**
 * Scroll the dashboard content area (and the window) back to the top.
 * Tries the explicitly-tagged container first, then <main>, then window.
 */
export function scrollToPageTop(behavior: ScrollBehavior = "smooth") {
  const run = () => {
    const container =
      document.querySelector<HTMLElement>("[data-dashboard-scroll-container]") ||
      document.querySelector<HTMLElement>("main");
    try {
      container?.scrollTo({ top: 0, behavior });
    } catch {
      if (container) container.scrollTop = 0;
    }
    try {
      window.scrollTo({ top: 0, behavior });
    } catch {
      window.scrollTo(0, 0);
    }
  };
  if (typeof requestAnimationFrame !== "undefined") {
    requestAnimationFrame(run);
  } else {
    setTimeout(run, 0);
  }
}
