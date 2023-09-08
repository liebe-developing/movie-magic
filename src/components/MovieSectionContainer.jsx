import { Link } from "react-router-dom";

const MovieSectionContainer = ({ label, linkLabel, path, stateArr }) => {
  return (
    <div>
      <div className="max-sm:px-2 max-sm:text-sm flex items-center justify-between font-iransans font-semibold">
        <p className="sm:text-lg text-primary dark:text-slate-200 ">{label}</p>
        <Link to={path} state={stateArr} className="text-orange-500">
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default MovieSectionContainer;
