import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true);
    else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`group/arrow fixed bottom-4 right-4 z-50 transition-all duration-700 ${
        isVisible ? "-translate-y-4 opacity-100" : "translate-y-0 opacity-0"
      }`}
      aria-label="Scroll to top"
      title="Scroll to Top"
    >
      <svg
        className="transition duration-300 group-hover/arrow:hover:fill-[#fd47b4]"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#3bb5e6"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
