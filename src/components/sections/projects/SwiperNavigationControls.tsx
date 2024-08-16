import { ChevronLeft, ChevronRight } from "lucide-react";

const SwiperNavigationControls = () => {
  return (
    <div className="absolute left-0 top-1/2 z-[1] hidden w-full -translate-y-1/2 items-center justify-between px-2 *:bg-black/50 *:shadow-md md:flex">
      <button
        id="nav-left"
        className="btn btn-sm border-none hover:scale-105 hover:bg-black/70"
        type="button"
        title="Previous Slide"
        aria-label="Previous slide"
        aria-controls="swiper-wrapper-3cdf3931242651dd"
      >
        <ChevronLeft color="white" />
      </button>
      <button
        id="nav-right"
        className="btn btn-sm border-none hover:scale-105 hover:bg-black/70"
        type="button"
        title="Next Slide"
        aria-label="Next slide"
        aria-controls="swiper-wrapper-3cdf3931242651dd"
      >
        <ChevronRight color="white" />
      </button>
    </div>
  );
};
export default SwiperNavigationControls;
