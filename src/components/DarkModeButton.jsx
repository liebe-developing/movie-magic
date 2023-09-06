import React, { useEffect, useState } from "react";
import { styles } from "../styles";

const DarkModeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.darkModeContainer} onClick={handleThemeSwitch}>
      <div className={styles.darkModeIcon}>🌙</div>
      <div className={styles.darkModeIcon}>🔆</div>
      <div
        className={styles.darkModeBall}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeButton;
