import React, { useRef } from "react";
import Button from "./Button";
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MovingText() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      y: window.innerWidth < 768 ? -120 : -220,
      ease: "none",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32  overflow-hidden">
      <div ref={contentRef} className="will-change-transform">
        <div className="flex justify-center gap-4 text-black/90">
          <PiStarFourFill className="text-[55px]" />

          <div className="text-[40px] xl: text-[42px] font-semibold tracking-[-0.05em] leading-[1.3]">
            <p>
              Elevate your web <br />
              <span>
                presence
                <img
                  src="/imagephone.webp"
                  alt="phone"
                  className="inline-block mx-2 -rotate-12"
                />
              </span>
              <br />
              to the next <br />
              dimension
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-5 mr-2">
          <Button
            variant="orange"
            className="px-6 py-3 group overflow-hidden rounded-full"
          >
            <span className="relative flex flex-col h-6 overflow-hidden">
              <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                Purchase Now
                <HiArrowUpRight className="text-lg" />
              </span>

              <span className="flex items-center gap-2 h-6 transition-transform duration-300 group-hover:-translate-y-6 tracking-[-0.05em]">
                Purchase Now
                <HiArrowUpRight className="text-lg" />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MovingText;
