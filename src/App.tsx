import { lazy } from "react";

// Custom Components
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/HeroSection";
import ScrollToTop from "./components/ScrollToTop";
import LoadingIndicator from "./components/LoadingIndicator";
import LazySection from "./components/LazySection";

// Lazy Loaded Components
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(
  () => import("./components/sections/projects/ProjectsSwiper"),
);
const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  return (
    <>
      <Header />
      <main className="space-y-16">
        <Hero />
        <LazySection component={About} fallback={<LoadingIndicator />} />
        <LazySection component={Skills} fallback={<LoadingIndicator />} />
        <LazySection component={Projects} fallback={<LoadingIndicator />} />
      </main>
      <footer className="pb-8">
        <LazySection component={Contact} fallback={<LoadingIndicator />} />
      </footer>
      <ScrollToTop />
    </>
  );
};
export default App;
