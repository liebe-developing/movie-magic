import { MovieSectionContainer, SectionMovieCard } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TopRatedMovies = ({ topRatedMovies }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <MovieSectionContainer
        label="فیلم های پرطرفدار"
        linkLabel="همه فیلم ها"
        path="/top-rated-movies"
        stateArr={topRatedMovies}
      />
      <Swiper
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
        className="flex items-center justify-center py-[30px]"
      >
        {topRatedMovies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SectionMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedMovies;
