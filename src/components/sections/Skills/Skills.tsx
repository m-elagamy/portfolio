import AnimatedSection from "../../AnimatedSection";
import { technologiesArray } from "./data";

// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion } = framerMotionComponents;

const linkVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i: number) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
  }),
};

const Skills = () => {
  return (
    <AnimatedSection sectionId="skills">
      <h2 className="section-title">
        MY TECH STACK
        <small>TECHNOLOGIES & TOOLS I'VE BEEN WORKING WITH</small>
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {technologiesArray.map((tech, i) => (
          <motion.li
            key={tech.name}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              title={tech.name}
              className="inline-block transition duration-300 ease-in-out hover:scale-105"
            >
              <img
                className="mx-auto"
                src={tech.image}
                alt={tech.name}
                width={62}
                height={62}
                loading="lazy"
              />
              {tech.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </AnimatedSection>
  );
};
export default Skills;
