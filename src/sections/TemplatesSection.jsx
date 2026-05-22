import React, { useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../components/Button";
gsap.registerPlugin(ScrollTrigger);

const data = [
  "Creative Agency & Portfolio Layouts",
  "High-End GSAP Animations",
  "Developed with Gulp & SASS",
  "Figma Design File Included",
  "Optimized for Core Web Vitals",
  "Premium Typography & Assets",
  "Dark & Light Mode Ready",
  "W3C Validated & Clean Code",
  "Free Lifetime Updates",
];

const icons = [
  { icon: "/html.png", name: "HTML" },
  { icon: "/html.png", name: "GULP TALK" },
  { icon: "/html.png", name: "SCSS" },
  { icon: "/html.png", name: "CSS 3" },
  { icon: "/html.png", name: "Bootstrap" },
  { icon: "/html.png", name: "Browser Sync" },
  { icon: "/html.png", name: "Google Fonts" },
  { icon: "/html.png", name: "SCSS" },
  { icon: "/html.png", name: "CSS 3" },
  { icon: "/html.png", name: "Bootstrap" },
  { icon: "/html.png", name: "Browser Sync" },
  { icon: "/html.png", name: "Google Fonts" },
];

function TemplatesSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const dataRef = useRef(null);
  const iconRefs = useRef([]);
  const headRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".letter",
      { x: -40, opacity: 0.2 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1.5,
        },
      },
    );
  });

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -160,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1.2,
        },
      });

      iconRefs.current.forEach((el, i) => {
        if (!el) return;

        const spacing = window.innerWidth / icons.length;

        gsap.set(el, {
          x: spacing * i,
          y: -120,
          opacity: 0,
          scale: 0.8,
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,

        onEnter: () => {
          const bottomY = sectionRef.current.offsetHeight - 60;

          setTimeout(() => {
            iconRefs.current.forEach((el, i) => {
              if (!el) return;

              gsap.to(el, {
                y: bottomY,
                opacity: 1,
                scale: 1,
                rotation: Math.random() * 25 - 12,
                duration: 2.4 + Math.random() * 0.8,
                delay: i * 0.08,
                ease: "power3.in",
              });
            });
          });
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full bg-orange-600 overflow-hidden relative"
    >
      <div
        className="
  h-auto w-full border-b border-gray-300
  bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_80px)]
  sm:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_120px)]
  lg:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_200px)]
"
      >
        <div className="relative w-full">
          {icons.map((icon, i) => (
            <div
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
              className="absolute z-20 inline-flex items-center gap-2 bg-black text-white px-8 py-5 rounded-full border border-white/10"
            >
              <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
              <span className="text-sm font-medium">{icon.name}</span>
            </div>
          ))}
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-14 md:py-20 flex flex-col gap-16">
          <div
            ref={headRef}
            className="flex flex-col lg:flex-row justify-between items-center gap-10 "
          >
            <h1 className="text-white text-[54px] sm:text-[64px] lg:text-[90px] font-semibold tracking-[-0.05em] leading-[1.05] w-full lg:w-[60%]">
              {"Launch Your Vision".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              <br />

              {"with ".split("").map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block"
                  style={{ fontFamily: "Ephesis", fontWeight: 300 }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              {"Premium".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char}
                </span>
              ))}
              <br></br>
              {" Templates.".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char}
                </span>
              ))}
            </h1>

            <img
              ref={imageRef}
              src="/demo-screen.webp"
              alt="Demo"
              className="w-full max-w-[350px] object-contain mt-20"
            />
          </div>
          <div ref={dataRef} className="flex flex-col gap-3">
            {data.map((title, i) => (
              <div key={i} className="data-item flex items-center gap-2">
                <IoAddCircle className="text-white text-xl" />
                <p className="text-white text-[20px] leading-[0.9] font-semibold tracking-[-0.05em]">
                  {title}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden sm:block py-10">
            {" "}
            <Button variant="black" className="px-6 py-4 group overflow-hidden">
              {" "}
              <span className="relative flex flex-col h-6 overflow-hidden">
                {" "}
                <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  {" "}
                  Purchase Now{" "}
                  <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
                </span>{" "}
                <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  {" "}
                  Purchase Now{" "}
                  <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
                </span>{" "}
              </span>{" "}
            </Button>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default TemplatesSection;
