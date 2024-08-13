import { useState, useEffect, RefObject } from "react";

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  threshold: number = 0.4,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold },
    );

    const section = ref.current;

    if (section) {
      observer.observe(section);
    }

    // Cleanup on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [ref, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
