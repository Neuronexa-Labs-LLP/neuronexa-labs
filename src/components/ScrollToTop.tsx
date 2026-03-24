import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        // Retry after a short delay to allow for component mounting/rendering
        setTimeout(() => scrollToElement(), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
