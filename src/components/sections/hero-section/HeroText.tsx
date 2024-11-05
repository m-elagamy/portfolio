import { useState, useEffect } from "react";

// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion, AnimatePresence } = framerMotionComponents;
const HeroText = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {stage === 0 ? (
        <motion.div
          key="intro"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-live="polite"
        >
          <motion.h1
            variants={itemVariants}
            className="mx-auto mb-4 w-fit bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text font-bold tracking-widest text-transparent md:text-2xl"
          >
            HEY I AM
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-xl font-bold tracking-widest text-[#fbfbfc] md:text-4xl"
          >
            MAHMOUD ELAGAMY
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          key="details"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-live="polite"
        >
          <motion.h1
            variants={itemVariants}
            className="text-xl font-bold tracking-widest text-[#fbfbfc] md:text-4xl"
          >
            A FRONT END DEVELOPER
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroText;
