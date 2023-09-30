import { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  singInFailure,
} from "../redux/user/userSlice";
import { useColorModeValue } from "@chakra-ui/react";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    full_name: "",
    // password: "",
  });

  const { phone, full_name } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      /*  if (data.success === false) {
        dispatch(singInFailure(data));
        return;
      } */
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(singInFailure(error));
    }
  };

  return (
    <div
      className={`flex items-center justify-center h-screen max-sm:bg-center ${useColorModeValue(
        "",
        "bg-signinBg2"
      )} bg-no-repeat bg-cover`}
    >
      <div className="max-w-7xl mx-auto pt-[50px] pb-4 items-center text-sm relative font-iransans">
        <div
          className={`${useColorModeValue(
            "bg-gray-100",
            "bg-black bg-opacity-80"
          )} rounded-md w-full overflow-x-hidden sm:w-[450px] px-4 py-8 space-y-4`}
        >
          <p className="text-center font-semibold font-iransans text-2xl">
            ورود به سایت
          </p>
          <p className="text-[11px]">
            برای ورود به حساب کاربردی خود وارد شوید.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <AiOutlinePhone className="absolute right-2 w-5 h-5 text-primary" />
              <input
                required
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="شماره تماس"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[14px]"
              />
            </div>
            <div className="relative flex items-center my-4">
              <AiOutlineUser className="absolute right-2 w-5 h-5 text-primary" />
              <input
                required
                type="text"
                name="full_name"
                value={full_name}
                onChange={handleChange}
                placeholder="نام و نام خانوادگی"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[14px]"
              />
            </div>
            {/*  <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="رمز عبور خود را وارد نمایید"
                className="p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[14px] my-5"
              />
              {showPassword ? (
                <AiFillEye
                  className="absolute text-primary left-2 w-6 h-6 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute text-primary left-2 w-6 h-6 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div> */}
            <div className="flex max-sm:flex-col gap-2 items-center justify-between mt-5 mb-8 ">
              <Link
                to="/forgot-password"
                className="text-[12px] text-orange-500"
              >
                رمز عبور را فراموش کرده‌ام
              </Link>
              <p className="text-[12px]">
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
