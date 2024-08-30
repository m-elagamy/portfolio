// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;
// Types
type SectionsLinksProps = {
  linkVariants: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: { duration: number; ease: string };
    };
  };
  closeMenu: () => void;
};

const sections = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: innerWidth > 767 ? 0.4 : 0,
    },
  },
};

function SectionsLinks({ linkVariants, closeMenu }: SectionsLinksProps) {
  return (
    <motion.ul
      className="absolute left-0 top-[74px] z-20 w-full flex-col items-center bg-[#121212d8] text-center tracking-[0.3em] shadow-md md:static md:flex md:w-fit md:flex-row md:gap-5 md:bg-transparent md:p-0 md:shadow-none"
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.4,
        },
      }}
      variants={menuVariants}
    >
      {sections.map((section, index) => (
        <motion.li
          key={section}
          custom={index}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          className="border-y border-[#6767671e] md:border-none"
          onClick={closeMenu}
        >
          <a
            href={`#${section.toLowerCase()}`}
            className="relative inline-block w-full py-3 transition-all duration-200 before:left-0 before:top-3/4 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:rounded before:bg-gradient-to-r before:from-[#fd47b4] before:to-[#3bb5e6] before:transition-all before:duration-200 hover:text-slate-100 hover:before:scale-x-75 md:before:absolute"
          >
            {section}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SectionsLinks;
