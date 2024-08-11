import HeroText from "./HeroSectionText";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#0F0F0F]">
      <div className="container">
        <div className="hero">
          <div className="hero-content p-0 text-center">
            <div className="max-w-3xl">
              <HeroText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
