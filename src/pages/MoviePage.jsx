import { Link, useLocation } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  MdOutlineHighQuality,
  MdOutlineRecentActors,
  MdOutlineAccessTime,
} from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { IoMdFolderOpen } from "react-icons/io";
import { LiaUserTieSolid } from "react-icons/lia";
import { BsPen } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { ageIcon, IMDBLogo } from "../assets/icons";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActorCard } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const movieInfo = [
  { label: "کیفیت : 1080p HC WEB-DL Full HD", Icon: MdOutlineHighQuality },
  { label: "ژانر : فانتزی , کمدی , ماجراجویی", Icon: IoMdFolderOpen },
  { label: "کارگردان : 1080p HC WEB-DL Full HD", Icon: LiaUserTieSolid },
  { label: "نویسنده : Noah Baumbach", Icon: BsPen },
  {
    label: "ستارگان : margot robbie,will ferrell,helen mirren",
    Icon: MdOutlineRecentActors,
  },
  { label: "زمان : ۱۰۹ دقیقه", Icon: MdOutlineAccessTime },
  { label: "رده سنی : PG-۱۳", img: ageIcon },
  { label: "محصول کشور : آمریکا , انگلستان", Icon: GiWorld },
];

const MoviePage = () => {
  const API_KEY = "a7a2cb2c7b592a825c26e90bd568c352";

  const { data: actors } = useQuery({
    queryKey: "popular-series",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US`
      );
      return data.results;
    },
  });
  console.log(actors);

  const { state } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  let convert = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  return (
    <section
      className={`h-auto w-full bg-white dark:bg-hero bg-bottom bg-cover bg-no-repeat opacity-90 shadow-black`}
    >
      <div className="flex max-w-7xl mx-auto pt-[100px] pb-4 items-center text-sm relative font-iransans dark:text-white max-sm:pr-10">
        <Link to={"/"}>مووی مجیک</Link>
        <RiArrowLeftSLine className="w-4 h-4" />
        <p>
          {" "}
          {state.title
            ? `فیلم ${state.title} `
            : state.name && `سریال ${state.name} `}
        </p>
      </div>
      <div
        className={`max-sm:flex flex-col sm:h-[700px] bg-no-repeat w-full bg-center bg-cover`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${state?.backdrop_path})`,
        }}
      >
        <div className="flex flex-col md:flex-row px-[119px] h-auto pt-8 sm:h-[700px] backdrop-brightness-[0.4] gap-7">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${state?.poster_path}`}
              alt=""
              width={345}
              className="rounded-lg border-t-[3px] border-x-[1.5px] border-x-orange-500 border-t-orange-500 shadow-lg shadow-orange-500/40"
            />
          </div>
          <div className="flex flex-col gap-16 font-iransans py-1">
            <div className="sm:flex sm:justify-between justify-center items-center">
              <p className="text-white text-[24px]">
                {state.title
                  ? `فیلم ${state.title} `
                  : state.name && `سریال ${state.name} `}
              </p>
              <div className="flex gap-5 max-sm:justify-between max-sm:mt-6">
                <div className="flex gap-2">
                  <AiOutlineShareAlt className="movie-page-icons" />
                  <TbHeartPlus className="movie-page-icons" />
                </div>
                <div className="flex flex-col items-center w-[85px]">
                  <p className="text-slate-300 group-hover:text-white text-sm  border-b-2 border-b-orange-500 text-center pb-1 w-[65px]">
                    <span className="text-orange-500 font-bold text-[23px]">
                      {state.vote_average.toFixed(1)}
                    </span>
                    /10
                  </p>
                  <p className="text-white text-sm ltr pt-1 pb-2">
                    {convert(state.vote_count)} Votes
                  </p>
                  <img src={IMDBLogo} alt="IMDB Logo" width={50} height={50} />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-28 sm:gap-y-7 text-[13px]">
              {movieInfo.map((item, index) => (
                <p
                  key={index}
                  className={`flex items-center gap-2 text-white ${
                    item.img && "flex-row-reverse justify-end"
                  }`}
                >
                  {item.Icon && (
                    <item.Icon className="w-5 h-5 text-orange-500" />
                  )}
                  <span>{item.label}</span>
                  {item.img && (
                    <img src={item.img} alt="icon" className="w-5 h-5 ltr" />
                  )}
                </p>
              ))}
            </div>
            <p className="text-white text-[13px] text-justify">
              جاش و دالتون لمبرت برای اینکه بتوانند شیاطین را یکبار برای همیشه
              ساکت کنند، باید به خانه‌ی قدیمی خود بازگردند و با گذشته‌ی تاریک
              خانواده خود روبه‌رو شوند.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#060606] pt-16 ">
          <h2 className="text-white font-semibold sm:px-[119px] text-2xl ">بازیگران</h2>
          <Swiper
            navigation={true}
            loop
            breakpoints={{
              375: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 17,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 17,
              },
            }}
            modules={[Navigation]}
            className="flex items-center justify-center py-[30px] sm:mx-[119px]"
          >
            {actors?.map((actor) => (
              <SwiperSlide key={actor.id}>
                <ActorCard {...actor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
