import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Setengah bagian elemen terlihat di viewport
    };

    const observers: IntersectionObserver[] = [];
    if(typeof window !== "undefined") {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
  
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(`#${id}`);
                window.history.replaceState(null, "", `#${id}`); // Update URL
              }
            });
          },
          observerOptions
        );
  
        observer.observe(element);
        observers.push(observer);
      });
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
