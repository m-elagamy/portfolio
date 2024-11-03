import { ExternalLink } from "lucide-react";

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
};

const ProjectSlide = ({ project }: ProjectSlideProps) => {
  return (
    <article className="flex min-h-[470px] cursor-grab flex-col items-center justify-between overflow-hidden rounded-2xl border bg-white shadow-md active:cursor-grabbing">
      <h2 className="sr-only">Project Details - {project.title}</h2>
      <figure>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          width={1440}
          height={777}
          className="w-full transform rounded-tl-2xl rounded-tr-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </figure>
      <div className="flex flex-col gap-8 p-4 text-start">
        <div>
          <h3 className="mb-2 text-2xl font-semibold text-[#1c2022]">
            {project.title}
          </h3>
          <p className="text-[#737373] shadow-neutral">{project.description}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-1">
          {project.techs.map((tech) => (
            <li
              className="flex cursor-help items-center gap-1 rounded-full border border-gray-300 p-2 shadow-lg"
              key={tech.techName}
              title={tech.techName}
            >
              <img
                src={tech.techImage}
                alt={tech.techName}
                className="size-4"
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.previewLink}
            className="btn btn-sm border-none bg-[#3bb5e6] px-2 tracking-wider text-white hover:bg-[#3399cc]"
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Demo"
          >
            <ExternalLink size={16} />
            Preview
          </a>
          <a
            href={project.codeLink}
            className="btn btn-sm border-none bg-gray-800 tracking-wider text-white hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
          >
            <svg
              className="transition group-hover/item:fill-slate-100"
              width="16"
              height="16"
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
    </article>
  );
};
export default ProjectSlide;
