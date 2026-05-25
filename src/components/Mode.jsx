import React, { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

function Mode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="text-2xl cursor-pointer" onClick={toggleTheme}>
      {darkMode ? <IoMdSunny /> : <IoMdMoon />}
    </div>
  );
}

export default Mode;
