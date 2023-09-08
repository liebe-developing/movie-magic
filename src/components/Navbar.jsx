import { useEffect, useState } from "react";
import Button from "./Button";
import { BsBoxArrowInRight } from "react-icons/bs";
import { navLinks } from "../constants";
import DarkModeButton from "./DarkModeButton";
import { Link, useLocation } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <header
      className={`${
        scrolled
          ? "bg-white dark:bg-[#060606] dark:shadow-sm dark:shadow-zinc-900"
          : "bg-transparent"
      } w-full flex py-2 fixed top-0 z-20 select-none max-lg:px-5`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <p
              className={`font-mosalas dark:text-orange-600  text-[40px] ${
                pathMatchRoute("/sign-in") ||
                pathMatchRoute("/sign-up") ||
                pathMatchRoute("/forgot-password")
                  ? "text-orange-500"
                  : "text-primary"
              }`}
            >
              مووی
            </p>
            <img src={headerLogo} alt="" width={80} height={90} />
          </Link>
        </div>
        <div className="flex items-center justify-between max-lg:hidden">
          <nav className="flex items-center dark:text-slate-200 text-primary gap-10 font-iransans">
            {navLinks.map((link) => (
              <Link to={link.href} key={link.engLabel}>
                <div className="flex items-center justify-center gap-1.5 cursor-pointer group">
                  <link.Icon className="w-6 h-6 group-hover:transition duration-500 ease-in-out transform group-hover:scale-110 text-orange-500" />
                  <div className="leading-normal text-[13px]">
                    <p
                      className={`${
                        pathMatchRoute("/sign-in") ||
                        pathMatchRoute("/sign-up") ||
                        pathMatchRoute("/forgot-password")
                          ? "text-slate-200"
                          : "text-primary"
                      } font-iransans dark:text-slate-200`}
                    >
                      {link.persianLabel}
                    </p>
                    <p className="uppercase text-orange-500">{link.engLabel}</p>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1.5 max-lg:hidden">
          {/* <DarkModeButton theme={theme} setTheme={setTheme} /> */}
          <Button label="وارد شوید" Icon={BsBoxArrowInRight} href="/sign-in" />
        </div>

        {/* Mobile navbar */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <AiOutlineClose
              className="text-slate-200 w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="text-slate-200 w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex flex-col gap-10 p-6 black-gradient absolute top-20 left-0 mx-4 my-2 min-w-[250px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <Link to={link.href} key={link.engLabel}>
                  <div
                    key={link.engLabel}
                    className="flex items-center justify-center gap-1.5 cursor-pointer group"
                  >
                    <link.Icon className="w-6 h-6 group-hover:transition duration-500 ease-in-out transform group-hover:scale-110 text-orange-500" />
                    <div
                      className="leading-normal text-[13px]"
                      onClick={() => setToggle(!toggle)}
                    >
                      <p
                        className={`${
                          pathMatchRoute("/sign-in") ||
                          pathMatchRoute("/sign-up") ||
                          pathMatchRoute("/forgot-password")
                            ? "text-slate-200"
                            : "text-primary"
                        } font-iransans dark:text-slate-200`}
                      >
                        {link.persianLabel}
                      </p>
                      <p className="uppercase text-orange-500">
                        {link.engLabel}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Button
                label="وارد شوید"
                Icon={BsBoxArrowInRight}
                href="/sign-in"
                btnFn={() => setToggle(!toggle)}
              />
              {/* <DarkModeButton theme={theme} setTheme={setTheme} /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
