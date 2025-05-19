import { lazy, useState, useEffect, useRef } from "react";

import framerMotionComponents from "./utils/framerMotionComponents";
const { AnimatePresence } = framerMotionComponents;

// Custom Components
import Header from "./components/sections/header-section/Header";
import Hero from "./components/sections/hero-section/Hero";
import ScrollToTop from "./components/ScrollToTop";
import SectionLoadingIndicator from "./components/SectionLoadingIndicator";
import LazySection from "./components/LazySection";
import LoadingIndicator from "./components/LoadingIndicator";
import ScrollIndicator from "./components/ScrollIndicator";

// Lazy Loaded Components
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(
  () => import("./components/sections/skills-section/Skills"),
);
const Projects = lazy(
  () => import("./components/sections/projects-section/ProjectsSwiper"),
);
const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingIndicator key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main className="flex flex-col gap-24 md:gap-16">
            <Hero heroSectionRef={heroSectionRef} />
            <LazySection
              component={About}
              fallback={<SectionLoadingIndicator />}
            />
            <LazySection
              component={Skills}
              fallback={<SectionLoadingIndicator />}
            />
            <LazySection
              component={Projects}
              fallback={<SectionLoadingIndicator />}
            />
          </main>
          <footer className="pb-4">
            <LazySection
              component={Contact}
              fallback={<SectionLoadingIndicator />}
            />
          </footer>
          <ScrollIndicator />
          <ScrollToTop />
        </>
      )}
    </>
  );
};
export default App;
