import { motion, AnimatePresence } from "framer-motion";
import { useRef, ReactNode } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type AnimatedSectionProps = {
  children: ReactNode;
  sectionId: string;
};

const AnimatedSection = ({ children, sectionId }: AnimatedSectionProps) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="grid min-h-[60vh] scroll-mt-6 place-items-center text-center text-[#676767] lg:min-h-[80vh]"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnimatedSection;
