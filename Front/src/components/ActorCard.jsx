import { Link } from "react-router-dom";

const ActorCard = ({ actor }) => {
  const { profile_path, name } = actor;
  return (
    <Link to={`/actor/${name}`} state={actor}>
      <div className="flex flex-col group cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          alt=""
          className="rounded-sm w-full h-[200px]"
        />
        <h3 className=" tracking-tighter text-center mt-3 font-bold text-[17px] group-hover:text-orange-500 transition ease-in-out duration-200">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default ActorCard;
