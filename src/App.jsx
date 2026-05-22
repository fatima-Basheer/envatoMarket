import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HomeSection from "./sections/HomeSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WebPagesSection from "./sections/WebPagesSection";
import TemplatesSection from "./sections/TemplatesSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
        
  return (
    <>

      <div id="cursor" ref={cursorRef}></div>
  
      <HomeSection
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        offersOpen={offersOpen}
        setOffersOpen={setOffersOpen}
      />
        
      <WebPagesSection />
    <TemplatesSection />
    </>
  );
}

export default App;
