import profilePicture from "./../../assets/images/profile-pic.jpg";
import AnimatedSection from "../AnimatedSection";

// Utils
import framerMotionComponents from "../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const About = () => {
  return (
    <AnimatedSection sectionId="about">
      <h2 className="mx-auto mb-16 flex w-fit flex-col-reverse bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text text-3xl font-bold tracking-widest text-transparent lg:text-5xl">
        ABOUT ME
        <small className="text-base font-medium text-[#727272] lg:text-lg">
          AGAMY
        </small>
      </h2>
      <figure>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={profilePicture}
          alt="Mahmoud Elagamy Image"
          loading="lazy"
          width={640}
          height={640}
          className="mx-auto mb-5 size-80 rounded-full border-2 bg-gradient-to-r from-slate-400 to-slate-500 p-1 shadow-2xl lg:size-96"
        />
      </figure>
      <div className="mx-auto max-w-2xl space-y-4 lg:text-lg">
        <p>
          Hello! I'm Mahmoud Elagamy, a front end developer with a strong
          passion for creating engaging and user-friendly web applications.
        </p>
        <p>
          My expertise lies in translating complex ideas into simple, elegant
          solutions. Whether it's crafting responsive designs or optimizing
          performance, I enjoy the challenge of continuous learning and
          improvement.
        </p>
      </div>
    </AnimatedSection>
  );
};
export default About;
