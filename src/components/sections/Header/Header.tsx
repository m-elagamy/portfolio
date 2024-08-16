import { useState, useEffect } from "react";

// Custom Components
import SocialLink from "./SocialLink";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import ScrollIndicator from "./ScrollIndicator";

// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion, AnimatePresence } = framerMotionComponents;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const position = window.scrollY;
        if (position > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = totalHeight ? (position / totalHeight) * 100 : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 shadow-xl backdrop-blur-sm" : "bg-[#0F0F0F]"}`}
    >
      <ScrollIndicator scrollProgress={scrollProgress} />
      <div className="container">
        <nav className="flex items-center justify-between py-4 text-[#fbfbfc99]">
          <Logo />
          <div className="links-menu flex items-center gap-7">
            <AnimatePresence>
              {(isMenuOpen || isLargeScreen) && (
                <SectionsLinks
                  linkVariants={linkVariants}
                  closeMenu={() => setMenuOpen(false)}
                />
              )}
            </AnimatePresence>
            <motion.div
              variants={linkVariants}
              initial="hidden"
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: innerWidth > 767 ? 1.2 : 0.3,
                ease: "easeOut",
              }}
              className="flex items-center gap-4"
            >
              <div>
                <SocialLink
                  link={"https://github.com/Mahmoud-ElAgamy"}
                  title={"Github"}
                  icon={
                    <svg
                      className="transition group-hover/item:fill-slate-100"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#fbfbfc99"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1728 18.8175 16.8979 17.5417 18.12 15.8397C19.3421 14.1377 19.9997 12.0953 20 10C20 4.475 15.525 0 10 0Z"></path>
                    </svg>
                  }
                />
                <SocialLink
                  link={"#"}
                  title="Linked In"
                  icon={
                    <svg
                      className="transition group-hover/item:fill-slate-100"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="#fbfbfc99"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.82306 6.29663H0.315552V18.9689H4.82306V6.29663Z"></path>
                      <path d="M4.06529 0.382998C3.6357 0.133278 3.13083 7.59623e-06 2.6144 3.24029e-10C2.2698 -5.0636e-06 1.92862 0.0593443 1.61045 0.174636C1.29227 0.289926 1.0034 0.458883 0.760439 0.671792C0.517474 0.884699 0.325217 1.13736 0.19472 1.41523C0.0642237 1.69311 -0.00193725 1.99071 4.31803e-05 2.29094C0.00301166 2.7409 0.15886 3.18 0.447928 3.55287C0.736994 3.92575 1.14633 4.21566 1.6243 4.38606C2.10226 4.55647 2.62744 4.5997 3.13358 4.51035C3.63973 4.42098 4.10415 4.20301 4.46827 3.88392C4.8324 3.56485 5.0799 3.15896 5.17956 2.71745C5.27922 2.27595 5.22659 1.81863 5.02828 1.40316C4.82996 0.987701 4.49488 0.632718 4.06529 0.382998Z"></path>
                      <path d="M10.2851 6.16159H5.94287L5.92786 18.86H10.4354V12.5894C10.4354 10.9399 10.796 9.34273 13.1399 9.34273C15.4838 9.34273 15.4838 11.241 15.4838 12.7072V18.8338H19.9913V11.8824C19.9913 8.46564 19.0748 5.8474 14.5672 5.8474C13.7081 5.81811 12.856 5.99262 12.1019 6.35228C11.3477 6.71196 10.7198 7.24332 10.2851 7.88963V6.16159Z"></path>
                    </svg>
                  }
                />
              </div>
              <label className="btn btn-circle swap swap-rotate btn-sm bg-transparent md:hidden">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  checked={isMenuOpen}
                  onClick={toggleMenu}
                  readOnly
                />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </motion.div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
