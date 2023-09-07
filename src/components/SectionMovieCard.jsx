import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { TbHeartPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const SectionMovieCard = ({ movie }) => {
  const { poster_path, backdrop_path, name, title } = movie;
  return (
    <Link to={`http://localhost:5173/${name || title}`} state={movie}>
      <div className="relative rounded-xl group transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-110">
        <img
          src={
            poster_path !== "N/A"
              ? `https://image.tmdb.org/t/p/original/${
                  poster_path || backdrop_path
                }`
              : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg?size=626&ext=jpg"
          }
          alt="Poster"
          className="rounded-sm w-full h-[200px] brightness-[0.6] group-hover:brightness-[0.2]"
        />
        <div className="absolute text-white inset-0 p-5 space-y-2 font-vazir font-semibold">
          <p className="text-lg line-clamp-1">{name || title}</p>
          <p>یک ساعت و ۵۰ دقیقه</p>
          <button className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-md ">
            <BsFillPlayCircleFill className="w-[18px] h-[18px]" />
            تماشا کنید
          </button>
        </div>
        <div className="gap-2 absolute right-[50%] bottom-[-15px] max-sm:flex sm:hidden sm:group-hover:flex">
          <AiOutlineShareAlt className="movie-page-icons" />
          <TbHeartPlus className="movie-page-icons" />
        </div>
      </div>
    </Link>
  );
};

export default SectionMovieCard;
