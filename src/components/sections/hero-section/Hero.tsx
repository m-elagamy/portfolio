import HeroText from "./HeroText";
import ParticlesBackground from "./ParticlesBackground";
const Hero = ({
  heroSectionRef,
}: {
  heroSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="hero relative z-10 bg-[#0F0F0F]" ref={heroSectionRef}>
      <ParticlesBackground />
      <h2 className="sr-only">Hero Section</h2>
      <div className="container">
        <div className="mx-auto min-h-24 min-w-[288px] text-center md:w-[527px]">
          <HeroText />
        </div>
      </div>
    </section>
  );
};
export default Hero;
