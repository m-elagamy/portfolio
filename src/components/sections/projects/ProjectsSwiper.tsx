import { SetStateAction, useState } from "react";

// Swiper Library
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom Components
import ProjectSlide from "./ProjectSlide";
import AnimatedSection from "../../AnimatedSection";
import SwiperNavigationControls from "./SwiperNavigationControls";
import SwiperPagination from "./SwiperPagination";

// Data
import { projects } from "./projectsData";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <AnimatedSection sectionId="projects">
      <h2 className="mx-auto mb-16 flex w-fit flex-col-reverse bg-gradient-to-r from-[#3bb5e6] to-[#fd47b4] bg-clip-text text-3xl font-bold tracking-widest text-transparent lg:text-5xl">
        PROJECTS
        <small className="text-base font-medium text-[#727272]">
          HIGHLIGHTING MY EXPERTISE
        </small>
      </h2>
      <Swiper
        className="rounded-lg"
        modules={[Navigation, Pagination, Keyboard]}
        navigation={{ nextEl: "#nav-right", prevEl: "#nav-left" }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            // Access the slide's data-title attribute
            const slides = document.querySelectorAll(".swiper-slide");
            const title = slides[index]?.getAttribute("data-title") || "";
            return `<span class="${className}" data-tooltip="${title}"></span>`;
          },
        }}
        speed={innerWidth > 768 ? 1200 : 600}
        keyboard
        onSlideChange={handleSlideChange}
        lazyPreloadPrevNext={2}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} data-title={project.title}>
            <ProjectSlide
              project={project}
              activeIndex={activeIndex}
              index={index}
            />
          </SwiperSlide>
        ))}
        <SwiperNavigationControls />
        <SwiperPagination />
      </Swiper>
    </AnimatedSection>
  );
};
export default Projects;
