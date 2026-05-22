import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Stairs = ({ children }) => {
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.set(stairParentRef.current, { display: "block" });
    gsap.set(".stair", { yPercent: 0 });

    gsap.delayedCall(1, () => {
      gsap.to(".stair", {
        yPercent: -100,
        duration: 1.9,
        ease: "power3.inOut",
        stagger: {
          each: 0.05,
          from: "start",
        },
      });

      gsap.to(".logo", {
        opacity: 0,
        duration: 1.6,
        delay: 0.6,
        ease: "power2.inOut",
      });

      gsap.delayedCall(1.9 + 1, () => {
        gsap.set(stairParentRef.current, {
          display: "none",
        });
      });
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      
      <div
        ref={stairParentRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
      >
        <div className="flex h-full w-full absolute inset-0">
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
          <div className="stair flex-1 bg-black"></div>
        </div>

        <div className="logo absolute inset-0 flex items-center justify-center opacity-100 gap-2">
          <img src="./cube.svg" className="h-10 mb-2" />
          <span className="text-white text-xl font-bold">Orisa</span>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
