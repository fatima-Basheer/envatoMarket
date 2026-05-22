// import React, { useRef } from "react";
// import { IoAddCircle } from "react-icons/io5";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const data = [
//   "Creative Agency & Portfolio Layouts",
//   "High-End GSAP Animations",
//   "Developed with Gulp & SASS",
//   "Figma Design File Included",
//   "Optimized for Core Web Vitals",
//   "Premium Typography & Assets",
//   "Dark & Light Mode Ready",
//   "W3C Validated & Clean Code",
//   "Free Lifetime Updates",
// ];

// const icons = [
//   { icon: "/html.png", name: "HTML" },
//   { icon: "/html.png", name: "GULP TALK" },
//   { icon: "/html.png", name: "SCSS" },
//   { icon: "/html.png", name: "CSS 3" },
//   { icon: "/html.png", name: "Bootstrap" },
//   { icon: "/html.png", name: "Browser Sync" },
//   { icon: "/html.png", name: "Google Fonts" },
// ];

// function TemplatesSection() {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const iconsRef = useRef(null);
//   const dataRef = useRef(null);

//   const iconRefs = useRef([]);

//   useGSAP(
//     () => {
    
//   gsap.fromTo(
//   ".letter",
//   { x: -30, opacity: 0.5 },
//   {
//     x: 0,
//     opacity: 1,
//     stagger: 0.03,
//     duration: 1,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top 80%",
//       toggleActions: "play none none reset",
//       invalidateOnRefresh: true,
//     },
//   }
// );

      
//       gsap.to(imageRef.current, {
//         y: -140,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "bottom top",
//           scrub: 1.2,
//         },
//       });

  
//       const sectionHeight = sectionRef.current.offsetHeight;

//       iconRefs.current.forEach((el, i) => {
//         if (!el) return;

//         const randomX = Math.random() * window.innerWidth * 0.7;

//         gsap.set(el, {
//           x: randomX,
//           y: -300 - Math.random() * 200, 
//           opacity: 0,
//           scale: 0.8,
//           rotation: Math.random() * 60 - 30,
//         });

//         gsap.to(el, {
//           y: sectionHeight - 100, 
//           opacity: 1,
//           scale: 1,
//           rotation: 0,
//           duration: 5, 
//           delay: i * 2,
//           ease: "power3.inOut",
//         });
//       });


//       gsap.fromTo(
//         ".data-item",
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.08,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: dataRef.current,
//             start: "top 85%",
//           },
//         }
//       );
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen w-full bg-red-900 overflow-hidden relative"
//     >

//       <div className="icons-wrapper relative w-full py-6">
//         <div className="absolute inset-0 z-10 pointer-events-none" />

//         <div ref={iconsRef} className="relative w-full">
//           {icons.map((icon, i) => (
//             <div
//               key={i}
//               ref={(el) => (iconRefs.current[i] = el)}
//               className="absolute z-20 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full border border-white/10"
//             >
//               <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
//               <span className="text-sm font-medium">{icon.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

  
//       <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-14 md:py-20 flex flex-col gap-16">
    
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
//           <h1 className="text-white text-[54px] sm:text-[64px] lg:text-[80px] font-semibold tracking-[-0.05em] leading-[1.05] w-full lg:w-[60%]">
//             {"Launch Your Vision".split("").map((char, i) => (
//               <span key={i} className="letter inline-block">
//                 {char === " " ? "\u00A0" : char}
//               </span>
//             ))}

//             <br />

//             {"with".split("").map((char, i) => (
//               <span
//                 key={i}
//                 className="letter inline-block"
//                 style={{ fontFamily: "Ephesis", fontWeight: 300 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </span>
//             ))}

//             {" Templates.".split("").map((char, i) => (
//               <span key={i} className="letter inline-block">
//                 {char}
//               </span>
//             ))}
//           </h1>

//           <img
//             ref={imageRef}
//             src="/demo-screen.webp"
//             alt="Demo"
//             className="w-full max-w-[350px] object-contain"
//           />
//         </div>

//                 <div ref={dataRef} className="flex flex-col gap-4">
//           {data.map((title, i) => (
//             <div key={i} className="data-item flex items-start gap-2">
//               <IoAddCircle className="text-white text-xl mt-1 shrink-0" />
//               <p className="text-white text-[16px] leading-[1.6]">
//                 {title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TemplatesSection;