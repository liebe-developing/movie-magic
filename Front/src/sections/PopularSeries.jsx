import { Swiper, SwiperSlide } from "swiper/react";
import { MovieSectionContainer, SectionMovieCard } from "../components";
import { Navigation } from "swiper/modules";

const PopularSeries = ({ popularSeries }) => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <MovieSectionContainer
        label="سریال های محبوب"
        linkLabel="همه سریال ها"
        path="http://localhost:5173/popular-series"
        stateArr={popularSeries}
      />
      <Swiper
        grabCursor={true}
        navigation={true}
        loop
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 17,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }}
        modules={[Navigation]}
        className="flex items-center justify-center py-[30px] max-sm:mx-2"
      >
        {popularSeries?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SectionMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularSeries;
