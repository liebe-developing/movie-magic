import { Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { useState } from "react";
import Footer from "../components/Footer";

const RootLayout = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`relative ${theme ? "dark" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
