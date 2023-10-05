import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SectionMovieCard } from "../components";
import { RiArrowLeftSLine } from "react-icons/ri";

const TopRatedMoviesList = () => {
  const { state } = useLocation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white relative dark:bg-[#060606] text-primary dark:text-slate-200">
      <div className="relative bg-moviePageBg bg-no-repeat bg-center bg-cover h-[450px]">
        <div className="flex items-center justify-center backdrop-brightness-[0.3] flex-col font-iransans h-full font-semibold">
          <p className="text-[3.157em] font-medium">همه فیلم ها</p>
          <div className="flex items-center mt-2 mx-12 text-sm text-orange-500">
            <Link to={"/"}>صفحه اصلی</Link>
            <RiArrowLeftSLine className="w-5 h-5 mt-1" />
            <p>همه فیلم ها</p>
          </div>
        </div>
      </div>
      <div className={`py-[70px] max-w-7xl mx-auto relative font-iransans`}>
        <p className="mb-4 px-4 lg:px-0 text-lg">ژانر فیلم ها</p>
        <div className="grid grid-cols-2 gap-2 px-4 lg:px-0 lg:grid-cols-3 xl:grid-cols-4 md:gap-7">
          {state?.map((movie) => (
            <SectionMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMoviesList;
