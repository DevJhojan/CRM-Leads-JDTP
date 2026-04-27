import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const {pathname} = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22 }
    );

    sections.forEach((s) => {
      s.classList.remove("in-view");
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
