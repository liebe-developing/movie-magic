import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center h-screen max-sm:bg-center bg-signinBg2 bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto pt-[50px] pb-4 items-center text-sm relative font-iransans dark:text-white">
        <div className="bg-black bg-opacity-80 rounded-md w-full overflow-x-hidden sm:w-[450px] px-4 py-8 space-y-4">
          <p className="text-center font-semibold font-iransans text-3xl text-slate-200">
            ورود به سایت
          </p>
          <p className="text-[12px]">
            برای ورود به حساب کاربردی خود وارد شوید.
          </p>

          <form>
            <div className="relative flex items-center">
              <MdOutlineEmail className="absolute right-2 w-6 h-6 text-primary" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="ایمیل خود را وارد نمایید"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[16px] "
              />
            </div>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="رمز عبور خود را وارد نمایید"
                className="p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[16px] my-5"
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
            <div className="flex max-sm:flex-col gap-2 items-center justify-between mt-5 mb-8 ">
              <Link
                to="/forgot-password"
                className="text-[12px] text-orange-500"
              >
                رمز عبور را فراموش کرده‌ام
              </Link>
              <p className="text-[12px] text-white">
                حساب ندارید؟{" "}
                <Link to="/sign-up" className="text-orange-500">
                  ثبت نام{" "}
                </Link>
              </p>
            </div>
            <button className="px-10 py-3.5 rounded-full bg-orange-500 text-slate-200 w-full font-iransans text-[16px] font-semibold">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
