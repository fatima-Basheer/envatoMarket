import React, { useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";
function StickyMenuButton({ onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed top-25 right-6 z-50 bg-white text-black px-6 py-3.5 rounded-2xl shadow-lg tracking-wide flex font-medium  transition border-1 border-gray-300"
    >
      MENU <ImMenu className="ml-2 text-xl " />
    </button>
  );
}

export default StickyMenuButton;
