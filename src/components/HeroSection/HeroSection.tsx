import HeroText from "./HeroSectionText";
const Hero = () => {
  return (
    <section className="hero min-h-screen bg-[#0F0F0F]">
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
