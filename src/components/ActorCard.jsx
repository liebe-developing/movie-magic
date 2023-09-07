import React from "react";

const ActorCard = ({ profile_path, name }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt=""
        className="rounded-sm w-full h-[200px]"
      />
      <h3 className="dark:text-white text-primary tracking-tighter text-center mt-3 font-bold text-[17px] group-hover:text-orange-500 transition ease-in-out duration-200">
        {name}
      </h3>
    </div>
  );
};

export default ActorCard;
