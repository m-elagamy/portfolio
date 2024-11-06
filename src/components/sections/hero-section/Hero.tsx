import HeroText from "./HeroText";
import ParticlesBackground from "./ParticlesBackground";
const Hero = ({
  heroSectionRef,
}: {
  heroSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section
      className="hero-section relative z-10 flex items-center justify-center bg-[#0F0F0F]"
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
