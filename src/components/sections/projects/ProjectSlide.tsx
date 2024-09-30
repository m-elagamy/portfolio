// Utils
import framerMotionComponents from "../../../utils/framerMotionComponents";
const { motion, AnimatePresence } = framerMotionComponents;

// Types
type ProjectSlideProps = {
  project: {
    id: number;
    image: string;
    title: string;
    description: string;
    techs: { techName: string; techImage: string }[];
    previewLink: string;
    codeLink: string;
  };
  activeIndex: number;
  index: number;
};

const ProjectSlide = ({ project, activeIndex, index }: ProjectSlideProps) => {
  const swiperVariants = {
    initial: { x: 100, scale: 0.8, opacity: 0 },
    animate: { x: 0, scale: 1, opacity: 1, transition: { duration: 0.6 } },
    exit: { x: -100, scale: 0.8, opacity: 0, transition: { duration: 0.6 } },
  };
  return (
    <AnimatePresence>
      {activeIndex === index && (
        <motion.section
          className="flex min-h-[616px] cursor-grab flex-wrap items-center rounded-lg bg-black/40 p-4 backdrop-blur-[2px] active:cursor-grabbing md:min-h-[450px] md:flex-nowrap md:gap-20"
          layout
          initial="initial"
          animate={activeIndex === index ? "animate" : "initial"}
          exit="exit"
          variants={swiperVariants}
        >
          <h2 className="sr-only">Project</h2>
          <figure className="mb-4 max-w-lg md:mb-0">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={1440}
              height={777}
              className="w-full transform rounded-lg object-cover shadow-md"
            />
          </figure>
          <div className="flex flex-col gap-8 text-start">
            <div>
              <h3 className="mb-2 text-3xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 shadow-neutral">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-2">
              {project.techs.map((tech) => (
                <li
                  className="flex items-center gap-1 rounded-lg bg-gray-700/50 p-2 text-sm text-gray-200"
                  key={tech.techName}
                >
                  <img
                    src={tech.techImage}
                    alt={tech.techName}
                    className="size-5"
                  />
                  {tech.techName}
                </li>
              ))}
            </ul>
            <div className="mb-12 flex items-center justify-center gap-4 md:justify-end lg:mb-0">
              <a
                href={project.previewLink}
                className="btn btn-sm border-none bg-[#3bb5e6] tracking-wider text-white hover:bg-[#3399cc]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.75113 5.5H4.25C3.40462 5.5 2.59387 5.81607 1.9961 6.37868C1.39832 6.94129 1.0625 7.70435 1.0625 8.5C1.0625 9.29565 1.39832 10.0587 1.9961 10.6213C2.59387 11.1839 3.40462 11.5 4.25 11.5H7.4375C7.94758 11.5003 8.45027 11.3853 8.90335 11.1648C9.35644 10.9442 9.74667 10.6246 10.0413 10.2327C10.3359 9.84079 10.5262 9.38806 10.5964 8.91255C10.6665 8.43703 10.6144 7.95262 10.4444 7.5H9.5625C9.47112 7.5 9.38187 7.51 9.29688 7.531C9.47607 7.83551 9.56771 8.17876 9.56275 8.52681C9.55779 8.87487 9.4564 9.21569 9.2686 9.51556C9.0808 9.81543 8.8131 10.064 8.49195 10.2366C8.17081 10.4093 7.80735 10.5001 7.4375 10.5H4.25C3.68641 10.5 3.14591 10.2893 2.7474 9.91421C2.34888 9.53914 2.125 9.03043 2.125 8.5C2.125 7.96957 2.34888 7.46086 2.7474 7.08579C3.14591 6.71071 3.68641 6.5 4.25 6.5H5.88094C6.11256 6.124 6.40688 5.786 6.75219 5.5H6.75113Z"></path>
                  <path d="M9.56246 5.5C9.05238 5.49975 8.54969 5.61471 8.09661 5.83524C7.64353 6.05576 7.25329 6.3754 6.95869 6.76731C6.66409 7.15921 6.47372 7.61194 6.40357 8.08745C6.33343 8.56297 6.38556 9.04738 6.55559 9.5H7.72221C7.53571 9.19597 7.43752 8.85108 7.43752 8.50001C7.43751 8.14894 7.5357 7.80406 7.7222 7.50002C7.9087 7.19599 8.17695 6.94351 8.49998 6.76797C8.82302 6.59243 9.18945 6.50001 9.56246 6.5H12.75C13.3135 6.5 13.854 6.71071 14.2526 7.08579C14.6511 7.46086 14.875 7.96957 14.875 8.5C14.875 9.03043 14.6511 9.53914 14.2526 9.91421C13.854 10.2893 13.3135 10.5 12.75 10.5H11.119C10.8879 10.8754 10.5936 11.2131 10.2478 11.5H12.75C13.1686 11.5 13.583 11.4224 13.9698 11.2716C14.3565 11.1209 14.7079 10.8999 15.0039 10.6213C15.2999 10.3427 15.5346 10.012 15.6948 9.64805C15.855 9.28407 15.9375 8.89397 15.9375 8.5C15.9375 8.10604 15.855 7.71593 15.6948 7.35195C15.5346 6.98797 15.2999 6.65726 15.0039 6.37868C14.7079 6.1001 14.3565 5.87913 13.9698 5.72836C13.583 5.5776 13.1686 5.5 12.75 5.5H9.56246Z"></path>
                </svg>
                Preview
              </a>
              <a
                href={project.codeLink}
                className="btn btn-sm border-none bg-gray-600 tracking-wider text-white hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="transition group-hover/item:fill-slate-100"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#fbfbfc99"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1728 18.8175 16.8979 17.5417 18.12 15.8397C19.3421 14.1377 19.9997 12.0953 20 10C20 4.475 15.525 0 10 0Z"></path>
                </svg>
                Code
              </a>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
export default ProjectSlide;
