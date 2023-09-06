import React from "react";
import { headerLogo } from "../assets/images";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#060606] border-t border-t-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-4xl font-mosalas font-semibold whitespace-nowrap dark:text-white">
                مووی
              </span>
              <img src={headerLogo} className="h-8 mr-3" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="font-vazir">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                لینک ها
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-500 transition ease-in-out duration-200"
                  >
                    فیلم ها
                  </Link>
                </li>
                <li className="my-4">
                  <Link
                    to="/"
                    className="hover:text-orange-500 transition ease-in-out duration-200"
                  >
                    سریال ها
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-500 transition ease-in-out duration-200"
                  >
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-vazir">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                قوانین
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="#"
                    className="hover:text-orange-500 transition ease-in-out duration-200"
                  >
                    شرایط استفاده / حریم خصوصی
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-orange-500 transition ease-in-out duration-200"
                  >
                    شرایط &amp; مقررات سرویس‌دهی
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <p className="text-sm font-vazir">
              تمامی حقوق برای مووی مجیک محفوظ می‌باشد . 2023 ©{" "}
            </p>
          </span>
          <div className="flex mt-4 gap-5 sm:justify-center sm:mt-0 text-slate-200 dark:text-slate-200">
            <FaInstagram className={styles.footerIcons} />
            <FaGithub className={styles.footerIcons} />
            <FaLinkedin className={styles.footerIcons} />
            <FaTwitter className={styles.footerIcons} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
