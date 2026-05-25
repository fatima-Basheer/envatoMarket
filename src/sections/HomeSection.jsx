import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import DiscountNav from "../components/DiscountNav";
import Header from "../components/Header";
import StickyMenuButton from "../components/StickyMenuButton";
import Menu from "../components/Menu";
import Offers from "../components/Offers";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { RiFigmaFill } from "react-icons/ri";
import { TiArrowSync } from "react-icons/ti";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    src: <BsStars />,
    details: "Powered by cutting edge frontend technologies",
  },
  {
    src: <RiFigmaFill />,
    details: "Figma and Development kit included",
  },
  {
    src: <TiArrowSync />,
    details: "Weekly updates Easy to Customize",
  },
];

function HomeSection({
  menuOpen,
  setMenuOpen,
  offersOpen,
  setOffersOpen,
  setHideCursor,
}) {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".heading-letter",
        {
          x: -30,
          opacity: 0.2,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: 1.5,
          },
        },
      );
    },
    { scope: headingRef },
  );
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.delayedCall(2.2, () => {
        gsap.fromTo(
          badgeRef.current,
          { y: 0 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: badgeRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.2,
            },
          },
        );

        gsap.fromTo(
          headingRef.current,
          { y: 0 },
          {
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 1.5,
            },
          },
        );

        gsap.fromTo(
          ".badge-letter",
          {
            x: 40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.03,
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <DiscountNav />
      <Header
        openMenu={() => setOffersOpen(true)}
        setHideCursor={setHideCursor}
      />
      {offersOpen && <Offers onClose={() => setOffersOpen(false)} />}

      <StickyMenuButton
        onClick={() => setMenuOpen(true)}
        isMenuOpen={menuOpen || offersOpen}
      />
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="bg-[linear-gradient(to_right,#0d0705_0%,#0d0705_40%,#663b24_60%,#0e0603_100%)] mx-5 text-center flex flex-col items-center px-3 sm:px-6 md:px-10  lg:px-24 lg:py:12 xl:px-30  xl:py-12 2xl:py-30 pt-17 rounded-4xl pb-20 lg:pt-8">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="25%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#fdba74" />
              <stop offset="75%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#fdba74" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
          <div className="hidden md:block w-fit">
            <div className="bg-[#545453] p-3 rounded-xl inline-block group cursor-pointer">
              <video
                src="./video-1.mp4"
                className="h-36 w-[250px] lg:h-28 lg:w-[160px]  2xl:h-42 2xl:w-[260px] rounded-t-lg object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="mt-3 overflow-hidden h-6">
                <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  <div className="flex items-center justify-between h-6">
                    <span className="font-semibold text-white leading-[1.1] tracking-[-0.03em]">
                      Advanced Features
                    </span>

                    <HiArrowUpRight className="text-white text-lg" />
                  </div>

                  <div className="flex items-center justify-between h-6">
                    <span className="font-semibold text-white leading-[1.1] tracking-[-0.03em]">
                      Advanced Features
                    </span>

                    <HiArrowUpRight className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center text-center w-full">
            <div
              ref={badgeRef}
              className="flex items-center  text-black bg-[#6cf542] px-2 py-1.5 rounded-full font-medium h-fit mb-6 mt-[15px]"
            >
              <img src="./icon.jpg" alt="icon" className="h-5 mr-2" />

              <span className="badge-text flex">
                {"Top 1 featured item on ThemeForest"
                  .split("")
                  .map((char, i) => (
                    <span key={i} className="badge-letter inline-block">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
              </span>
            </div>

            <h1
              ref={headingRef}
              className="text-white text-4xl md:text-[50px] 2xl:text-[70px] font-semibold leading-[1.1] mt-2 tracking-[-0.05em]"
            >
              {"Redefine Digital Creativity".split("").map((char, i) => (
                <span key={i} className="heading-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              <br />

              {"with ".split("").map((char, i) => (
                <span
                  key={i}
                  className="heading-letter inline-block"
                  style={{ fontFamily: "Ephesis", fontWeight: 300 }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              {"Orisa template.".split("").map((char, i) => (
                <span key={i} className="heading-letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-10 md:mt-16">
              <Button
                variant="orange"
                className="px-6 py-3 group overflow-hidden"
              >
                <span className="relative flex flex-col h-6 overflow-hidden">
                  <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                    BROWSE DEMOS
                    <HiArrowUpRight className="text-lg" />
                  </span>

                  <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                    BROWSE DEMOS
                    <HiArrowUpRight className="text-lg" />
                  </span>
                </span>
              </Button>

              <p className="leading-[1.2] text-gray-400 text-left">
                New and attractive designs will <br />
                be added continuously.
              </p>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>

        <div className="mt-16 md:mt-22 flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-center w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-white w-full md:w-auto md:max-w-[300px]"
            >
              <span className="p-3 rounded-2xl text-2xl bg-[#333] shrink-0">
                {React.cloneElement(item.src, {
                  style: { fill: "url(#iconGradient)" },
                })}
              </span>

              <p className="text-left text-base leading-[1.3] bg-gradient-to-r from-orange-600 to-green-400 bg-clip-text text-transparent">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeSection;
