import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const position = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = totalHeight ? (position / totalHeight) * 100 : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[51] h-[3px] rounded bg-[#3bb5e6]"
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
};
export default ScrollIndicator;
