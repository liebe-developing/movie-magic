import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center h-screen bg-signinBg2 bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto pt-[50px] pb-4 items-center text-sm relative font-iransans dark:text-white max-sm:pr-10">
        <div className="bg-black bg-opacity-80 rounded-md w-[450px] px-4 py-8 space-y-4">
          <p className="text-center font-semibold font-iransans text-3xl">
            عضویت در سایت
          </p>
          <p className="text-[12px]">
            برای ورود ابتدا حساب خود را ایجاد نمایید.
          </p>

          <form>
            <div className="relative flex items-center">
              <AiOutlineUser className="absolute right-2 w-6 h-6 text-primary" />
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="نام خود را وارد نمایید"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[16px]"
              />
            </div>
            <div className="relative flex items-center my-4">
              <MdOutlineEmail className="absolute right-2 w-6 h-6 text-primary" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="ایمیل خود را وارد نمایید"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[16px]"
              />
            </div>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="رمز عبور خود را وارد نمایید"
                className="p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[16px]"
              />
              {showPassword ? (
                <AiFillEye
                  className="absolute text-primary left-2 w-7 h-7 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute text-primary left-2 w-7 h-7 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex items-center justify-between mt-5 mb-8">
              <Link
                to="/forgot-password"
                className="text-[12px] text-orange-500"
              >
                رمز عبور را فراموش کرده‌ام
              </Link>
              <p className="text-[12px] ">
                حساب دارید؟{" "}
                <Link to="/sign-in" className="text-orange-500">
                  وارد شوید{" "}
                </Link>
              </p>
            </div>
            <button className="px-10 py-3.5 rounded-full bg-orange-500 text-slate-200 w-full font-iransans text-[16px] font-semibold">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
