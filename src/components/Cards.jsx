import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const imagesData = [
  { status: "POPULAR", src: "/demo-7.webp", title: "Creative agency" },
  { src: "/demo-8.webp", title: "Creative agency", mode: "dark" },
  { src: "/demo-9.webp", title: "Digital Agency" },
  { src: "/demo-10.webp", title: "Digital agency", mode: "dark" },
  { src: "/demo-11.webp", title: "Digital agency" },
  { src: "/demo-12.webp", title: "Digital agency", mode: "dark" },
  { src: "/demo-13.webp", title: "AI & Tech Agency", mode: "dark" },
  { status: "POPULAR", src: "/demo-14.webp", title: "Personal Creative" },
  { src: "/demo-15.webp", title: "Personal Creative", mode: "dark" },
  { src: "/demo-15.webp", title: "Branding Studio", mode: "dark" },
  { src: "/index-6-dark.webp", title: "Branding Studio", mode: "dark" },
  { src: "/index-7.webp", title: "Branding Studio", mode: "dark" },
];

function Cards() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card) => {
        const img = card.querySelector(".card-img");

        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 20%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          img,
          {
            scale: 1.18,
          },
          {
            scale: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="
        w-full
        px-4
        sm:px-6
        md:px-26
        lg:px-26
        xl:px-26
        2xl:px-32
        py-12
        md:py-16
        lg:py-5
        
      "
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-10
        "
      >
        {imagesData.map((item, index) => (
          <div key={index} className="card">
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-gray-300
                dark:bg-[#222]
                shadow-[0_10px_35px_rgba(0,0,0,0.12)]
                hover:-translate-y-1
                duration-500
                
              "
            >
              {item.status && (
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    z-20
                    rotate-[-8deg]
                    rounded-sm
                    bg-[#f59e0b]
                    px-1.5
                    py-0.5
                    text-[12px]
                    sm:text-[11px]
                    font-semibold
                    tracking-wider
                    text-white
                  "
                >
                  {item.status}
                </div>
              )}

              <div className="overflow-hidden p-3 sm:p-4 md:p-5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    card-img
                    w-full
                    object-cover
                    rounded-xl
                    will-change-transform
               
                    h-[220px]
                    sm:h-[240px]
                    md:h-[220px]
                    lg:h-[260px]

                    xl:h-[280px]
                  
                    2xl:h-[360px]
                  "
                />
              </div>
            </div>

            <div
              className={`
    flex
    items-center
    pt-4
    px-20
    md:px-10
    ${item.mode ? "justify-between" : "justify-center"}
  `}
            >
              <h3
                className="
      text-[17px]
      sm:text-[12px]
      md:text-[13px]
      lg:text-[20px]
      2xl:text-[30px]
      font-bold
      md:ml-5
      2xl:ml-15
      tracking-[-0.03em]
      text-black
      dark:text-white
      text-center
    "
              >
                {item.title}
              </h3>

              {item.mode && (
                <div
                  className="
        rotate-[-8deg]
        rounded-sm
        bg-black
        dark:bg-white
        px-1.5
        2xl:px-3
        py-0.5
        2xl:py-1.5
        2xl:mr-15
        text-[12px]
        2xl:text-[16px]
        sm:text-[12px]
        font-medium
        md:mr-5
        uppercase
        tracking-wider
        text-white
        dark:text-black
        tracking-[-0.05em]
      "
                >
                  {item.mode}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
