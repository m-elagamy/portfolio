// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;
import { CodeXml } from "lucide-react";

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
    >
      <CodeXml className="size-6 text-[#3bb5e6] md:size-8" />
    </motion.a>
  );
}

export default Logo;
