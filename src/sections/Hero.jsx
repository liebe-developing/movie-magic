// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
// import required modules

import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import { HeroMovieCard, Spinner } from "../components";

const Hero = ({ trendingMovies, isLoading, error }) => {
  return (
    <div className={`py-[50px] max-w-7xl mx-auto relative`}>
      {isLoading && (
        <h1 className="text-white flex items-center justify-between text-center">
          <Spinner />
        </h1>
      )}
      {trendingMovies && !isLoading && !error && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="w-full py-[50px]"
        >
          <p className="absolute left-0 top-20 border border-orange-500 rounded-full font-iransans px-4 py-2 text-sm text-orange-500 z-10">
            فیلم های برگزیده
          </p>
          {trendingMovies?.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="bg-center bg-cover w-[700px] h-[590px]"
            >
              <HeroMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
