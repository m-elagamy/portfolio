import { useRef, ReactNode } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Utils
import framerMotionComponents from "../utils/framerMotionComponents";
const { motion, AnimatePresence } = framerMotionComponents;

// Types
type AnimatedSectionProps = {
  children: ReactNode;
  sectionId: string;
  className?: string;
};

const AnimatedSection = ({
  children,
  sectionId,
  className,
}: AnimatedSectionProps) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`flex scroll-mt-6 place-items-center text-center text-[#676767] md:grid lg:min-h-[60vh] ${className}`}
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
