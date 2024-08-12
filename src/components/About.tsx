import profilePicture from "../assets/images/profile-pic.jpg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const sectionTop = sectionRef.current?.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Check if the section is in the viewport
    if (sectionTop && sectionTop <= viewportHeight * 0.3) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll); // Remove event listener after animation triggers
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Starts off the screen below
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Slides up into place when visible
      transition={{ duration: 1, ease: "easeOut" }} // Controls the speed and easing
      id="about"
      className="my-12 grid min-h-screen text-center text-[#676767] lg:my-0"
    >
      <motion.div
        className="container flex flex-wrap items-center justify-center lg:justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mb-3 lg:mb-0">
          <h2 className="mx-auto mb-10 flex w-fit flex-col-reverse bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text text-3xl font-bold tracking-widest text-transparent lg:text-5xl">
            ABOUT ME
            <small className="text-base font-medium text-[#727272]">
              AGAMY
            </small>
          </h2>
          <div className="mx-auto max-w-2xl space-y-4 text-lg">
            <p>
              Hello! I'm Mahmoud Elagamy, a front end developer with a strong
              passion for creating engaging and user-friendly web applications.
            </p>
            <p>
              My expertise lies in translating complex ideas into simple,
              elegant solutions. Whether it's crafting responsive designs or
              optimizing performance, I enjoy the challenge of continuous
              learning and improvement.
            </p>
          </div>
        </div>
        <figure>
          <motion.img
            src={profilePicture}
            alt="Mahmoud Elagamy"
            loading="lazy"
            className="size-80 rounded-full border-2 border-white bg-gradient-to-l from-[#fd47b4] to-[#3bb5e6] p-1 shadow-2xl lg:size-96"
          />
        </figure>
      </motion.div>
    </motion.section>
  );
};
export default About;
