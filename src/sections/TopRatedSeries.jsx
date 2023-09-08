import { MovieSectionContainer, SectionMovieCard } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TopRatedSeries = ({ topRatedSeries }) => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <MovieSectionContainer
        label="سریال های پرطرفدار"
        linkLabel="همه سریال ها"
        path="/top-rated-series"
        stateArr={topRatedSeries}
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
        className="flex items-center justify-center py-[30px] max-sm:mx-2"
      >
        {topRatedSeries?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SectionMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedSeries;
