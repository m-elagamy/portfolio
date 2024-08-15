import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const technologyArray = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
  },

  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Framer Motion",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "DaisyUI",
    image:
      "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png",
    link: "https://daisyui.com/",
  },
];

const Skills = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
  };

  return (
    <AnimatedSection sectionId="skills">
      <h2 className="mx-auto mb-16 flex w-fit flex-col-reverse bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text text-3xl font-bold tracking-widest text-transparent lg:text-5xl">
        MY TECH STACK
        <small className="text-base font-medium text-[#727272] lg:text-lg">
          TECHNOLOGIES & TOOLS I'VE BEEN WORKING WITH
        </small>
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {technologyArray.map((tech, i) => (
          <li key={tech.name}>
            <a href={tech.link} target="_blank">
              <motion.img
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="size-24 lg:size-32"
                src={tech.image}
                alt={tech.name}
                title={tech.name}
                width={128}
                height={128}
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
};
export default Skills;
