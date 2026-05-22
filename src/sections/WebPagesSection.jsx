import React, { useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Cards from "../components/Cards";
import MovingText from "../components/MovingText";

const images = [
  { id: 1, src: "/avatar-1.webp" },
  { id: 2, src: "/avatar-2.webp" },
  { id: 3, src: "/avatar-3.webp"  },
  { id: 4, src: "/avatar-4.webp"  },
  { id: 5, src: "/avatar-5.webp"  },
];

gsap.registerPlugin(ScrollTrigger);

function WebPagesSection() {
  const container = useRef();
  const textRef = useRef();
  const imageRef = useRef();


  useGSAP(() => {
    gsap.fromTo(
      ".letter",
      {
        x: -20,
        opacity: 0.7,
        color: "#9ca3af",
      },
      {
        x: 0,
        opacity: 1,
        color: "#000000",
        stagger: 0.03,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 2,
        },
      }
    );
  }, { scope: container });

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 1.5,
        },
      }
    );
  }, { scope: container });

useGSAP(() => {
  const items = gsap.utils.toArray(".img-item");

  let lastScroll = 0;

  ScrollTrigger.create({
    trigger: imageRef.current,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const direction = self.direction; 
  

      items.forEach((item, i) => {
        const isEven = i % 2 === 0;

        let y = 0;

        if (direction === 1) {
        
          y = isEven ? 5 :-5
        } else {
          
          y = isEven ? -5 : 5;
        }

        gsap.to(item, {
          y,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      });
    },
  });
}, { scope: imageRef });


  return (
    <div className="
      h-auto w-full border-b border-gray-300
      bg-[repeating-linear-gradient(to_right,#d1d5db_0px,#d1d5db_1px,transparent_1px,transparent_80px)]
      sm:bg-[repeating-linear-gradient(to_right,#d1d5db_0px,#d1d5db_1px,transparent_1px,transparent_120px)]
      lg:bg-[repeating-linear-gradient(to_right,#d1d5db_0px,#d1d5db_1px,transparent_1px,transparent_200px)]
    ">

    
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-4 px-6 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-28 xl:py-10">

      
        <div ref={container} className="w-full mt-32 ">
          <div>
            <div className="flex font-medium mb-2">
              <span className="relative flex flex-col h-6 overflow-hidden tracking-[-0.05em] group">
                <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  AWARD-WINNING DESIGN
                  <HiArrowUpRight className="text-black text-lg" />
                </span>

                <span className="flex items-center gap-2 h-6 transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  AWARD-WINNING DESIGN
                  <HiArrowUpRight className="text-black text-lg" />
                </span>
              </span>
            </div>

            <h1 className={`text-[42px] font-semibold leading-[1.1] tracking-[-0.05em] inline-block`}>

              {"Go live instantly ".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              <span  className="m">
                {"with".split("").map((char, i) => (
                  <span style={{ fontFamily: "Ephesis" }} key={i} className="letter inline-block font-light">
                    {char}
                  </span>
                ))}
              </span>

              {" 75+".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              <div className="w-full"></div>

              {"pre-designed web pages.".split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
        </div>

    
        <div ref={imageRef} className="max-w-[380px] w-full mt-15">
          <div className="flex gap-3 items-start  sm:items-end flex-wrap">

      {images.map((image, index) => (
  <div
    key={image.id}
    className="img-item bg-gray-100 p-1 will-change-transform"
    data-index={index}
  >
    <img
      src={image.src}
      alt=""
      className="h-11 w-12 md:h-12 md:w-14object-cover block"
    />
  </div>
))}
          </div>

          <p ref={textRef} className="font-medium text-[22px] mt-5 leading-[1.2]">
            Browse our stunning library of pre-made templates.
            Take full control by swapping sections and customizing
            elements to create a unique website that stands out.
          </p>
        </div>
      </div>
        <Cards />
         <MovingText/>
  
    </div>
  );
}

export default WebPagesSection;