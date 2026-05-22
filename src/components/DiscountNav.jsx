import React from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

function DiscountNav() {
  return (
    <div className="h-10 md:mx-2 lg:mx-5 mx-5  bg-gradient-to-r from-[#0d0705] via-[#663b24] to-[#0e0603] rounded-b-xl mt-15 px-23 hidden md:block">
      <div className="h-full flex justify-between items-center text-white">
        <p className="font-medium flex items-center">
          <MdElectricBolt className="mr-2" />
          Free life time update
        </p>
        <p className="uppercase text-xs leading-tight">
          <span className="text-black bg-amber-300 rounded-full font-medium px-2 py-1 mr-1.5">
            Get 40% off
          </span>{" "}
          Hurry up! Price will soon increase
        </p>
        <p className="hidden lg:flex items-center text-md">
          <RiHeadphoneFill className="mr-2" />6 months off free support
        </p>
      </div>
    </div>
  );
}

export default DiscountNav;
