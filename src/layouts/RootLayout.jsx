import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Navbar } from "../components";
import { useState } from "react";
import Footer from "../components/Footer";

import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`relative ${theme ? "dark" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Outlet />
      </main>
      <Footer />

      <ToastContainer
        style={{ fontFamily: "iransans", fontSize: "18px" }}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default RootLayout;
