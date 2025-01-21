import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const logoVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

function Logo() {
  return (
    <motion.a
      href="/"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-2"
    >
      <span className="bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text font-mono text-xl font-bold uppercase tracking-wider text-transparent md:text-2xl">
        &lt;/&gt;
      </span>
      <span className="hidden text-base tracking-widest text-[#fbfbfc] md:block">
        AGAMY DEV
      </span>
    </motion.a>
  );
}

export default Logo;
