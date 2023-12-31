import { useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setemail] = useState("");

  const handleSubmit = () => {};

  return (
    <div
      className={`flex items-center justify-center h-screen max-sm:bg-center ${useColorModeValue(
        "",
        "bg-signinBg2"
      )} bg-no-repeat bg-cover`}
    >
      <div className="max-w-7xl mx-auto pt-[50px] pb-4 items-center text-sm relative font-iransans dark:text-white">
        <div
          className={`${useColorModeValue(
            "bg-gray-100",
            "bg-black bg-opacity-80"
          )} rounded-xl w-full overflow-x-hidden sm:w-[450px] p-10 space-y-4`}
        >
          <p className="text-center font-semibold font-iransans text-2xl">
            بازیابی رمز عبور
          </p>
          <p className="text-[11px]">
            برای بازیابی رمز عبور ایمیل خود را وارد نمایید.
          </p>

          <form>
            <div className="relative flex items-center my-4">
              <MdOutlineEmail className="absolute right-2 w-5 h-5 text-primary" />
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
                className="pr-10 p-4 rounded-md w-full border-none focus:border-none outline-none focus:ring-1 focus:ring-sky-500 bg-white bg-opacity-70 text-primary placeholder-primary text-[14px]"
              />
            </div>
            <div className="flex items-center justify-between mt-5 mb-8">
              <Link to="/sign-in" className="text-[12px]">
                وارد شوید
              </Link>
              <p className="text-[12px]">
                حساب ندارید؟{" "}
                <Link to="/sign-up" className="text-orange-500">
                  ثبت نام{" "}
                </Link>
              </p>
            </div>
            <button className="px-10 py-3.5 rounded-full bg-orange-500 text-slate-200 w-full font-iransans text-[16px] font-semibold">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
