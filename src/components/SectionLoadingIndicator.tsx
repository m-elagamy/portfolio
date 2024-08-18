import AnimatedSection from "./AnimatedSection";

const SectionLoadingIndicator = () => {
  return (
    <AnimatedSection sectionId="section-loading-indicator">
      <span className="loading loading-ring loading-lg size-24 bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4]"></span>
    </AnimatedSection>
  );
};
export default SectionLoadingIndicator;
