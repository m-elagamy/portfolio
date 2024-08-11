import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        delayChildren: 0.5,
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 0 ? (
          <motion.div
            key="intro"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-live="polite"
          >
            <motion.h1
              variants={itemVariants}
              className="mb-2 text-lg font-bold tracking-widest text-gray-100 lg:text-2xl"
            >
              HEY I AM
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="bg-gradient-to-r from-[#fd47b4] to-[#3bb5e6] bg-clip-text text-2xl font-bold tracking-widest text-transparent lg:text-5xl"
            >
              MAHMOUD ELAGAMY
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-live="polite"
          >
            <motion.h1
              variants={itemVariants}
              className="bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text text-xl font-bold tracking-widest text-transparent lg:text-5xl"
            >
              A FRONT END DEVELOPER
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroText;
