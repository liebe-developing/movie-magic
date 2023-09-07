import { BsFillPersonFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { SectionMovieCard } from "../components";
import { useEffect } from "react";

const ActorDetails = () => {
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={`h-auto w-full bg-white dark:bg-primary shadow-black`}>
      <div className="flex flex-col max-w-7xl mx-auto pt-[100px] pb-4 text-sm relative font-iransans dark:text-white max-sm:pr-10">
        <div className="flex items-center mb-10">
          <Link to={"/"}>مووی مجیک</Link>
          <RiArrowLeftSLine className="w-4 h-4" />
          <Link to={"#"}>بازیگرها</Link>
          <RiArrowLeftSLine className="w-4 h-4" />
          <p>{state.name}</p>
        </div>
        <div className="flex gap-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${state.profile_path}`}
            alt=""
            className="h-[400px] w-[350px] rounded-lg"
          />
          <div className="flex flex-col gap-6 pt-5 font-iransanstext-primary dark:text-slate-100">
            <h2 className="text-2xl mb-4">اطلاعات شخصی</h2>
            <div className="flex items-center gap-1">
              <h3 className="text-[16px]">نام :</h3>
              <p className="text-primary dark:text-slate-200 ">{state.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-[16px]">حرفه :</h3>
              <p className="text-primary dark:text-slate-200 ">بازیگر</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-[16px]">تعداد آثار :</h3>
              <p className="text-primary dark:text-slate-200 ">
                {state.known_for.length}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-[16px]">تولد :</h3>
              <p className="text-primary dark:text-slate-200 ">
                1964-1-7 در United States
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white via-gray-500 to-white dark:from-black dark:via-slate-400 dark:to-black w-full h-[1px] my-8" />
        <div className="flex flex-col">
          <h4 className="text-center text-lg ">آثار این هنرمند</h4>
          <div className="flex justify-center items-center mt-3">
            <div className="w-[1px] h-[1px] min-w-[80px] bg-orange-500" />
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 lg:px-0 lg:grid-cols-3 xl:grid-cols-4 md:gap-7 my-14">
            {state.known_for.map((movie) => (
              <SectionMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorDetails;