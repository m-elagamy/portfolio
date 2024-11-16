// Custom Components
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import SocialLinks from "./SocialLinks";

// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const linkVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
  }),
};

const Header = () => {
  return (
    <header className={`hero-theme min-h-[57px] pt-6 md:min-h-[80px]`}>
      <div className="container">
        <nav className="flex items-center justify-between text-sm text-[#fbfbfc99]">
          <Logo />
          <div className="flex flex-row-reverse items-center gap-7 md:flex-row">
            <SectionsLinks linkVariants={linkVariants} />
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: innerWidth > 767 ? 1.2 : 0.5,
                ease: "easeOut",
              }}
              className="flex items-center gap-4"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
