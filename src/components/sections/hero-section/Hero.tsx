import HeroText from "./HeroText";
import ParticlesBackground from "./ParticlesBackground";
const Hero = ({
  heroSectionRef,
}: {
  heroSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      className="hero relative z-10 min-h-screen bg-[#0F0F0F]"
      ref={heroSectionRef}
    >
      <ParticlesBackground />
      <h2 className="sr-only">Hero Section</h2>
      <div className="container">
        <div className="hero">
          <div className="hero-content min-h-24 p-0 text-center">
            <HeroText />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
