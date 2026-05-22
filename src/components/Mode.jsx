import React from 'react'
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { useState,useEffect } from 'react';
function Mode() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setDarkMode((prev) => !prev);
    };
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [darkMode]);
  return (
        <div className="text-xl cursor-pointer" onClick={toggleTheme}>
              {darkMode ? <IoMdSunny /> : <IoMdMoon />}
            </div>
  )
}

export default Mode