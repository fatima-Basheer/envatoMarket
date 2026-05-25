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
      className="fixed top-25 right-6 z-50 bg-white dark:bg-black/75 text-black dark:text-white px-6 py-4 rounded-2xl shadow-lg tracking-wide flex font-medium transition border-1 border-gray-300 dark:border-white/10 text-[16px]"
    >
      MENU <ImMenu className="ml-2 text-xl dark:text-white" />
    </button>
  );
}

export default StickyMenuButton;
