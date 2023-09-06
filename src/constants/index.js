import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay, BiSlideshow } from "react-icons/bi";
// import { TfiHeadphoneAlt } from "react-icons/tf";

const navLinks = [
  { persianLabel: "خانه", engLabel: "home", href: "/", Icon: AiOutlineHome },
  {
    persianLabel: "فیلم",
    engLabel: "movies",
    href: "/top-rated-movies",
    Icon: BiMoviePlay,
  },
  {
    persianLabel: "سریال",
    engLabel: "series",
    href: "/top-rated-series",
    Icon: BiSlideshow,
  },
  {
    persianLabel: "تماس با ما",
    engLabel: "contact",
    href: "/contact",
    Icon: AiOutlineHome,
  },
];

export { navLinks };
