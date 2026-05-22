import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
// import { IoMdMoon } from "react-icons/io";
// import { IoMdSunny } from "react-icons/io";
import { ImMenu } from "react-icons/im";
import { useEffect, useState } from "react";
import Mode from './Mode'
import Button from "./Button";
const navlinks = ["Home", "Page", "Portfolio", "Shop", "News", "Contact"];
function Header({ openMenu }) {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setDarkMode((prev) => !prev);
  // };
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [darkMode]);
  return (
//     <div
//   className={`m-5 mt-20 sm:mt-18 md:mt-5 lg:m-5 rounded-2xl flex justify-between items-center h-23 border px-2 sm:px-4 md:px-12 lg:px-24 ${
//     darkMode ? "border-gray-700" : "border-gray-300"
//   }`}
// >
    <div
  className={`m-5 mt-20 sm:mt-18 md:mt-5 lg:m-5 rounded-2xl flex justify-between items-center h-23 border px-2 sm:px-4 md:px-12 lg:px-24 `}
>
      {" "}
      <div className="flex justify-between items-center lg:gap-15 xl: justify-between">
        {" "}
        <div className=" flex items-center text-xl font-bold gap-2">
          {" "}
          <img src="./cube.svg" className="h-10" /> <span>Orisa</span>{" "}
        </div>{" "}
        <div className="hidden items-center gap-3 lg:flex">
          {" "}
          {navlinks.map((link, index) => (
<a
  key={index}
  href="#"
  className="group relative font-semibold text-[16px] text-[#222] flex justify-between items-end cursor-pointer pl-3 pr-2"
>
  {link} <RiArrowRightSFill />


  <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300"></div>
</a>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center gap-8">
        {" "}
      <Mode/>
        <div className="text-xl cursor-pointer" onClick={openMenu}>
          {" "}
          <ImMenu />{" "}
        </div>{" "}
        <div className="hidden sm:block">
          {" "}
          <Button variant="black" className="px-6 py-4 group overflow-hidden">
            {" "}
            <span className="relative flex flex-col h-6 overflow-hidden">
              {" "}
              <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                {" "}
                Get It Now{" "}
                <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
              </span>{" "}
              <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                {" "}
                Get It Now{" "}
                <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
              </span>{" "}
            </span>{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Header;
