import { lazy, useState, useEffect } from "react";

import framerMotionComponents from "./utils/framerMotionComponents";
const { AnimatePresence } = framerMotionComponents;

// Custom Components
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/HeroSection";
import ScrollToTop from "./components/ScrollToTop";
import SectionLoadingIndicator from "./components/SectionLoadingIndicator";
import LazySection from "./components/LazySection";
import LoadingIndicator from "./components/LoadingIndicator";

// Lazy Loaded Components
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(
  () => import("./components/sections/projects/ProjectsSwiper"),
);
const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumDelay = 400; // The minimum delay ensures that the loading indicator is shown for at least 400ms.

    const contentLoadPromise = new Promise((resolve) => {
      setTimeout(resolve, 300); // The minimum delay works in conjunction with the actual content loading time. If the content takes longer to load than the minimum delay, the indicator will be shown until the content is ready.
    }); // If the content loads faster than the minimum delay, the loading indicator will still be displayed for the full duration of the minimum delay.

    const timer = setTimeout(() => {
      contentLoadPromise.then(() => setIsLoading(false));
    }, minimumDelay);

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
          <main className="space-y-16">
            <Hero />
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
          <footer className="pb-8">
            <LazySection
              component={Contact}
              fallback={<SectionLoadingIndicator />}
            />
          </footer>
          <ScrollToTop />
        </>
      )}
    </>
  );
};
export default App;
