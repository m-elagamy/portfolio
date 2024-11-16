import HeroText from "./HeroText";
import ParticlesBackground from "./ParticlesBackground";
const Hero = ({
  heroSectionRef,
}: {
  heroSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      className="hero-section hero-theme relative z-10 flex items-center justify-center"
      ref={heroSectionRef}
    >
      <ParticlesBackground />
      <h2 className="sr-only">Hero Section</h2>
      <div className="container">
        <HeroText />
      </div>
    </section>
  );
};
export default Hero;
