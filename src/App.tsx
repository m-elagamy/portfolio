import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/HeroSection";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/projects/ProjectsSwiper";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <main className="space-y-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer className="pb-8">
        <Contact />
      </footer>
      <ScrollToTop />
    </>
  );
};
export default App;
