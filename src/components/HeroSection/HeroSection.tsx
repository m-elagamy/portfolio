import HeroText from "./HeroSectionText";
import ParticlesBackground from "./ParticlesBackground";
const Hero = () => {
  return (
    <section className="hero relative z-10 min-h-screen bg-[#0F0F0F]">
      <ParticlesBackground />
      <h2 className="sr-only">Hero Section</h2>
      <div className="container">
        <div className="hero">
          <div className="hero-content p-0 text-center">
            <div className="max-w-3xl">
              <HeroText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
