import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxCross1 } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import Button from "./Button";
import { HiArrowUpRight } from "react-icons/hi2";
const navlinks = ["Home", "Page", "Portfolio", "Shop", "News", "Contact"];

function Menu({ isOpen, onClose }) {
  const panelRef = useRef();
  const linksRef = useRef([]);
  const headerRef = useRef();

  useGSAP(() => {
    const cleanLinks = linksRef.current.filter(Boolean);

    if (!isOpen) {
      const tl = gsap.timeline();

      tl.to(cleanLinks, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.inOut",
        stagger: 0.04,
      });

      tl.to(
        headerRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "-=0.1",
      );

      tl.to(
        panelRef.current,
        {
          clipPath: "circle(0% at 92% 8%)",
          scale: 0.98,
          duration: 1.2,
          ease: "expo.inOut",
        },
        "-=0.05",
      );

      return;
    }

    const tl = gsap.timeline();

    gsap.set(panelRef.current, {
      clipPath: "circle(0% at 92% 8%)",
      scale: 0.96,
    });

    gsap.set(headerRef.current, {
      opacity: 0,
      y: -10,
    });

    gsap.set(cleanLinks, {
      opacity: 0,
      y: -6,
    });

    tl.to(panelRef.current, {
      clipPath: "circle(140% at 92% 8%)",
      duration: 1.4,
      ease: "expo.inOut",
    });

    tl.to(
      headerRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.7",
    );

    tl.to(
      cleanLinks,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "expo.out",
        stagger: 0.08,
        force3D: true,
      },
      "-=0.3",
    );
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed top-20 right-6 bottom-5 w-full  md:w-[42%] rounded-2xl bg-white z-50 shadow-2xl overflow-hidden"
      style={{
        clipPath: "circle(0% at 92% 8%)",
      }}
    >
      <div className="pt-15 pl-10 pr-12 flex flex-col gap-6">
        <div ref={headerRef} className="flex justify-between items-center">
          <div className="flex items-center text-xl font-bold gap-2">
            <img src="./cube.svg" className="h-10" />
            <span>Orisa</span>
          </div>

          <button onClick={onClose}>
            <RxCross1 className="text-3xl transition-transform duration-300 hover:rotate-[-90deg]" />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {navlinks.map((link, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              className="flex justify-between"
            >
              <a
                href="#"
                onClick={onClose}
                className="text-[42px] leading-[0.5] tracking-[-0.05em] font-semibold text-black/90 hover:opacity-60"
              >
                {link}
              </a>

              <IoAdd className="text-[28px]" />
            </div>
          ))}
        </div>
<Button
  variant="orange"
  className="px-6 py-3 group overflow-hidden w-full sm:block lg:hidden 2xl:block"
>
  <span className="relative block h-10 w-full overflow-hidden">


    <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-full tracking-[-0.05em]">
      ONLY $15 - GET IT NOW
      <HiArrowUpRight className="text-xl" />
    </span>


    <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0 tracking-[-0.05em]">
      ONLY $15 - GET IT NOW
      <HiArrowUpRight className="text-xl" />
    </span>

  </span>
</Button>
      </div>
    </div>
  );
}

export default Menu;
