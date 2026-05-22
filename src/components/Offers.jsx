import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { RxCross1 } from "react-icons/rx";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from './Button'
const navlinks = ["ONLINE DOCUMENTATION", "SUPPORT CENTER", "OUR PORTFOLIO"];

function Offers({ onClose }) {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      },
    );

  
    gsap.fromTo(
      menuRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
    );

    const moveCursor = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>

      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/40  z-40"
      >

        <div
          className="fixed pointer-events-none z-[60] transition-transform duration-75"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <RxCross1 className="text-white text-3xl z-[9999]" />
        </div>
      </div>

    
      <div
        ref={menuRef}
        className="fixed top-15 right-0 w-full md:w-[34%]  bg-white z-50 shadow-2xl h-full overflow-y-auto no-scrollbar z-50"
      >
        <div className="py-12 pb-28 pl-12 pr-12 flex flex-col gap-6">
      
          <div className="flex justify-between items-center">
            <div className="flex items-center text-xl font-bold gap-2">
              <img src="./cube.svg" className="h-10" />
              <span>Orisa</span>
            </div>

            <button onClick={onClose}>
              <RxCross1 className="text-3xl font-extralight transition-transform duration-300 hover:rotate-[-90deg]" />
            </button>
          </div>

      
          <div className="mt-10 flex flex-col gap-8">
            {navlinks.map((link, index) => (
              <div key={index} className="flex flex-col">
                <a
                  href="#"
                  onClick={onClose}
                  className="text-lg font-semibold text-black/90 hover:opacity-60"
                >
                  {link}
                </a>

                <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
              </div>
            ))}
          </div>

          <div className="py-10 flex justify-center w-full">
            <img src="/banner-sidebar.png" />
          </div>
          <div className="">
            <h4 className="text-3xl text-[#444] font-semibold mb-5">
              Other versions
            </h4>

            <div className="flex flex-col gap-2 mb-30">
              <div className="flex justify-between">
                <p className="flex gap-4 font-semibold">
                  <img src="/images.png" className="h-7" />
                  NextJS Template
                </p>{" "}
                <HiArrowUpRight />
              </div>
              <div className="w-full h-[1px] bg-gray-400 my-3"></div>
              <div className="flex justify-between">
                <p className="flex gap-4 font-semibold">
                  <img src="/reactlogo.png" className="h-7" />
                  React Template
                </p>{" "}
                <HiArrowUpRight />
              </div>
              <div className="w-full h-[1px] bg-gray-400 my-3"></div>
              <div className="flex justify-between">
                <p className="flex gap-4 font-semibold">
                  <img src="/framerlogo.png" className="h-7" />
                  Framer Template
                </p>{" "}
                <HiArrowUpRight />
              </div>
              <div className="w-full h-[1px] bg-gray-400 my-3"></div>
            </div>
            <Button
                variant="orange"
                className="px-6 py-3 group overflow-hidden w-full"
              >
                <span className="relative flex flex-col h-6 overflow-hidden">
                  <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                    ONLY $15-GET IT NOW
                    <HiArrowUpRight className="text-lg" />
                  </span>

                  <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                        ONLY $15-GET IT NOW
                    <HiArrowUpRight className="text-lg" />
                  </span>
                </span>
              </Button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
