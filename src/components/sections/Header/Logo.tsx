// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

function Logo() {
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <motion.a
      href="/"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-2 text-xl font-bold md:text-2xl"
    >
      <span className="bg-gradient-to-r from-[#fd47b4] to-[#3bb5e6] bg-clip-text font-mono font-bold text-transparent">
        &lt;/&gt;
      </span>
      <h2 className="hidden text-lg tracking-widest text-slate-300 md:block">
        AGAMY
      </h2>
    </motion.a>
  );
}

export default Logo;
