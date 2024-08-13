import { motion } from "framer-motion";

// Types
type SectionsLinksProps = {
  linkVariants: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: { duration: number; ease: string; delay: number };
    };
  };
  closeMenu: () => void;
};

function SectionsLinks({ linkVariants, closeMenu }: SectionsLinksProps) {
  const sections = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.ul
      className="absolute left-0 top-[74px] z-20 w-full flex-col items-center bg-[#121212d8] text-center tracking-[0.3em] *:py-3 md:static md:flex md:w-fit md:flex-row md:gap-5 md:bg-transparent md:p-0 md:shadow-none"
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
            className="relative transition-all duration-200 before:absolute before:top-full before:h-[2px] before:w-full before:scale-x-0 before:rounded before:bg-gradient-to-r before:from-[#fd47b4] before:to-[#3bb5e6] before:transition-all before:duration-200 hover:text-slate-100 hover:before:scale-x-100"
          >
            {section}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SectionsLinks;
