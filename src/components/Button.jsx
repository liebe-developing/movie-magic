import { Link } from "react-router-dom";

const Button = ({ label, Icon, href }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-6 py-3 font-medium  rounded-full dark:text-slate-200 font-iransans text-sm">
      <Link to={href}>{label}</Link>
      <Icon className="w-5 h-5 text-orange-500" />
    </button>
  );
};

export default Button;