import framerMotionComponents from "../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const LoadingIndicator = () => {
  return (
    <motion.div
      className="hero-theme fixed inset-0 z-50 flex items-center justify-center opacity-100"
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="loading loading-ball size-20 bg-gradient-to-tr from-[#3bb5e6] to-[#fd47b4] md:size-28"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        exit={{ scale: 0.8, rotate: -360 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          rotate: { type: "spring", stiffness: 50 },
        }}
      />
    </motion.div>
  );
};

export default LoadingIndicator;
