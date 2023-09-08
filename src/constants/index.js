import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay, BiSlideshow } from "react-icons/bi";
import { abbas, aliRazmjue } from "../assets/images";
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

const members = [
  {
    name: "علی رزمجویی",
    role: "توسعه دهنده فرانت",
    img: aliRazmjue,
  },

  {
    name: "عباس اعرفی",
    role: "توسعه دهنده فرانت",
    img: abbas,
  },
  {
    name: "فاطمه قادری",
    role: "توسعه دهنده بکند",
    img: "https://as1.ftcdn.net/v2/jpg/06/17/13/26/1000_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.webp",
  },
  {
    name: "سید سجاد موسوی",
    role: "توسعه دهنده بکند",
    img: "https://as2.ftcdn.net/v2/jpg/05/72/89/47/1000_F_572894761_8wMuqxg1tNsTHumskB46LatjHalhQaxL.jpg",
  },
];

const statistics = [
  { value: "1", label: "شعبه" },
  { value: "5+", label: "کارمند" },
  { value: "50+", label: "کاربر" },
];

export { navLinks, members, statistics };
