/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IMDBLogo } from "../assets/icons";

const HeroMovieCard = ({ movie }) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <Link to={`/${title}`} state={movie}>
      <div className="relative w-full h-full rounded-xl drop-shadow-2xl group">
        <img
          src={
            poster_path !== "N/A"
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt="Poster"
          className="w-full h-full rounded-xl transition ease-in-out duration-500 brightness-75"
        />
        <p className="line-clamp-1 absolute bottom-8 left-8 rounded-lg text-2xl font-bold text-zinc-50">
          {title}
        </p>
        <div className="absolute bottom-16 left-8 flex flex-col items-end justify-end">
          <p className="text-slate-300 group-hover:text-white text-sm">
            <span className="text-[#ffc107] font-bold text-[24px]">
              {vote_average.toFixed(1)}
            </span>
            /10
          </p>
          <img src={IMDBLogo} alt="IMDB Logo" width={60} height={60} />
        </div>
      </div>
    </Link>
  );
};

export default HeroMovieCard;
