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

// Data
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <AnimatedSection sectionId="projects">
      <h2 className="section-title">
        PROJECTS <small>HIGHLIGHTING MY EXPERTISE</small>
      </h2>
      <Swiper
        modules={[Navigation, Keyboard, Pagination]}
        navigation={{ nextEl: "#nav-right", prevEl: "#nav-left" }}
        keyboard
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={32}
        pagination={{ clickable: true }}
        className="!pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} data-title={project.title}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
        <SwiperNavigationControls />
      </Swiper>
    </AnimatedSection>
  );
};
export default Projects;
