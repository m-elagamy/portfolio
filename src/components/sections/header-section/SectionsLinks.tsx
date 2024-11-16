// Utils
import { useRef, useState } from "react";
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

// Types
type SectionsLinksProps = {
  linkVariants?: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: { duration: number; ease: string };
    };
  };
};

const sections = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

function SectionsLinks({ linkVariants }: SectionsLinksProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (drawerRef.current) setIsDrawerOpen((drawerRef.current.checked = false));
  };

  const handleToggle = () => {
    if (drawerRef.current) {
      setIsDrawerOpen(drawerRef.current.checked);
    }
  };

  return (
    <>
      <ul className="menu menu-horizontal hidden text-base md:flex">
        {sections.map((section, index) => (
          <motion.li
            key={section}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href={`#${section.toLowerCase()}`}
              className="transition duration-300 before:left-1/2 before:top-[80%] before:h-[2px] before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded before:bg-gradient-to-r before:from-[#fd47b4] before:to-[#3bb5e6] before:transition before:duration-300 hover:text-slate-100 hover:before:scale-x-75 md:before:absolute"
            >
              {section}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Drawer */}
      <motion.div
        className="drawer-end"
        variants={linkVariants}
        custom={2.4}
        initial="hidden"
        animate="visible"
      >
        <input
          ref={drawerRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          onChange={handleToggle}
        />
        <label
          htmlFor="my-drawer"
          className="btn drawer-button btn-sm border-white/5 px-1 md:hidden"
          aria-label={`${isDrawerOpen ? "Close" : "Open"} sidebar`}
          aria-expanded={isDrawerOpen}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-current"
            animate={isDrawerOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.path
              d={
                isDrawerOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </motion.svg>
        </label>
        <div className="drawer-side top-16 z-20">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay !bg-transparent"
          ></label>
          <ul className="menu w-full rounded-lg border border-white/5 bg-gradient-to-r from-[#0A0A0F]/25 to-[#1A1A24]/25 backdrop-blur-sm">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="py-3 text-center transition duration-300 before:left-1/2 before:top-[80%] before:h-[2px] before:w-full before:-translate-x-1/2 before:scale-x-0 before:rounded before:bg-gradient-to-r before:from-[#fd47b4] before:to-[#3bb5e6] before:transition before:duration-300 hover:text-slate-100 hover:before:scale-x-75 md:before:absolute"
                  onClick={closeDrawer}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default SectionsLinks;
