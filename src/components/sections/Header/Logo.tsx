// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const logoVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

function Logo() {
  return (
    <motion.a
      href="/"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-[#fd47b4] to-[#3bb5e6] bg-clip-text font-mono text-xl font-bold text-transparent"
    >
      &lt;/&gt;
    </motion.a>
  );
}

export default Logo;
