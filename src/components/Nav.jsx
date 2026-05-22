import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="fixed top-0 right-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 bg-black h-15 z-[10001]">
      <div className="flex items-center h-full">
        <img
          src="./logo.png"
          alt="Logo"
          className="h-4 sm:h-5 md:h-6 lg:h-6 w-auto object-contain"
        />
      </div>
      <Button variant="primary" className="px-5 py-1">
        Buy now
      </Button>
    </div>
  );
}

export default Nav;
