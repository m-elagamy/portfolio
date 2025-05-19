import profilePicture from "./../../assets/images/profile-pic.jpg";
import AnimatedSection from "../AnimatedSection";

// Utils
import framerMotionComponents from "../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const About = () => {
  return (
    <AnimatedSection sectionId="about" className="md:mt-32">
      <h2 className="section-title">
        ABOUT ME <small>AGAMY</small>
      </h2>
      <figure>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={profilePicture}
          alt="Mahmoud Elagamy Image"
          width={640}
          height={640}
          className="mx-auto mb-5 size-64 rounded-full border-2 bg-gradient-to-r from-slate-400 to-slate-500 p-1 shadow-2xl lg:size-80"
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
