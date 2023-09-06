import { useEffect, useState } from "react";
import Button from "./Button";
import { BsBoxArrowInRight } from "react-icons/bs";
import { navLinks } from "../constants";
import DarkModeButton from "./DarkModeButton";
import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`${
        scrolled ? "bg-hero bg-no-repeat bg-cover" : "bg-transparent"
      } w-full flex py-2 fixed top-0 z-20 select-none`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <p className="font-mosalas dark:text-orange-6 00 text-primary text-[40px]">
              مووی
            </p>
            <img src={headerLogo} alt="" width={80} height={90} />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <nav className="flex items-center dark:text-slate-200 text-primary gap-10 font-iransans">
            {navLinks.map((link) => (
              <div
                key={link.engLabel}
                className="flex items-center justify-center gap-1.5 cursor-pointer group"
              >
                <link.Icon className="w-6 h-6 group-hover:transition duration-500 ease-in-out transform group-hover:scale-110 text-orange-500" />
                <div className="leading-normal text-[13px]">
                  <p className="font-iransans text-primary dark:text-slate-200">
                    {link.persianLabel}
                  </p>
                  <p className="uppercase text-orange-500">{link.engLabel}</p>
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1.5">
          <DarkModeButton />
          <Button label="وارد شوید" Icon={BsBoxArrowInRight} href="/sign-in" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
