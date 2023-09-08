import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { members, statistics } from "../constants";
import { map } from "../assets/images";
import { ContactForm } from "../components";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="text-primary dark:text-slate-200">
      <div className="bg-white dark:bg-[#141414]">
        <div className="relative bg-contactPageBg bg-no-repeat bg-top bg-cover h-[450px]">
          <div className="flex items-center justify-center backdrop-brightness-[0.4] flex-col font-iransans h-full font-semibold">
            <p className="text-[3.157em] font-medium">درباره ما</p>
            <div className="flex items-center mt-2 mx-12  text-orange-500">
              <Link to={"/"} className="font-extrabold">
                صفحه اصلی
              </Link>
              <RiArrowLeftSLine className="w-5 h-5 mt-1" />
              <p className="text-sm">درباره ما</p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center py-[100px] max-w-7xl mx-auto relative font-iransans`}
        >
          <p className="tracking-tighter text-primary dark:text-slate-200 text-3xl sm:text-[3.157em]">
            تیم منحصر به فرد ما
          </p>
          <p className="text-slate-600 max-w-lg mb-10 mt-6 text-center dark:text-secondary text-sm px-4 sm:text-[14px]">
            قالب{" "}
            <span className="font-mosalas text-2xl text-orange-500">
              مووی مجیک
            </span>{" "}
            ساخته شده توسط توسعه دهندگان خوش ذوق و باتجربه می باشد.
          </p>
          <div className="grid grid-cols-1 gap-2 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-7">
            {members?.map((movie) => (
              <div
                key={movie.name}
                className="space-y-4 shadow-xl p-2 dark:shadow-black"
              >
                <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-64 h-[282px] rounded-lg">
                  <img
                    src={movie.img}
                    alt={movie.name}
                    className="absolute w-full h-full transition duration-1000 ease-out transform bg-center bg-cover bg-white hover:scale-[1.3]"
                  />
                </div>
                <div className="space-y-2 p-3">
                  <h2 className="text-lg font-semibold">{movie.name}</h2>
                  <p className="text-sm text-gray-600">{movie.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#060606]">
        <div className="flex flex-col px-5 md:flex-row gap-12 max-w-7xl mx-auto padding-y">
          <div className="sm:flex-1">
            <img src={map} alt="map" />
          </div>
          <div className="sm:flex-1 flex flex-col justify-evenly">
            <div>
              <h2 className="text-[2em] sm:text-[3.157em]">
                اینجا با ما تماس بگیرید
              </h2>
              <p className="max-w-xl dark:text-gray-300 max-sm:my-3 text-gray-700">
                جهت ارتباط، ارسال پیشنهادات، نظرات و سؤالات خود از طریق ایمیل
                <span
                  onClick={() =>
                    window.open("mailto: liebedeveloping69@gmail.com", "_blank")
                  }
                  className="text-orange-500 cursor-pointer"
                >
                  liebedeveloping69@gmail.com
                </span>{" "}
                با ما در ارتباط باشید.
              </p>
            </div>
            <div className="flex sm:flex-row items-center gap-14">
              {statistics.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center space-y-4"
                >
                  <p className="text-orange-500 text-[30px] sm:text-[50px] font-bold">
                    {stat.value}
                  </p>
                  <p className="font-iransans text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-sm:px-5 dark:bg-[#141414] border-t dark:border-t-zinc-900 border-t-slate-300">
        <div className="flex justify-center gap-12 max-w-2xl mx-auto padding-y">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
