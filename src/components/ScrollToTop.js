// Library Imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  // Scrolling to top whenever a component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
