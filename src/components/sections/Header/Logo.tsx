import headerImg from "../../../assets/images/profile-pic.jpg";

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
      className="ml-[2px] flex items-center gap-1"
    >
      <span className="bg-gradient-to-r from-[#fd47b4] to-[#3bb5e6] bg-clip-text font-mono font-bold text-transparent">
        &lt;/&gt;
      </span>
      <img
        src={headerImg}
        alt="Mahmoud Elagamy Image"
        width={640}
        height={640}
        className={`size-8 rounded-full border border-[#fbfbfc99] bg-gradient-to-r from-[#2d2d2d] to-[#4a5568] p-[1px] shadow-lg`}
      />
    </motion.a>
  );
}

export default Logo;
