import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import About from "./components/About";

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};
export default App;
