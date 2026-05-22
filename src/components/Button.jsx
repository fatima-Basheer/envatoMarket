function Button({ children, className = "", variant = "primary" }) {
  const baseStyle =
    "inline-flex items-center justify-center py-1.5 px-3 rounded-full cursor-pointer transition-all duration-300";

  const variants = {
    primary:
      "bg-[#7FA628] hover:bg-[#6E8F20] text-white rounded-sm text-sm border-b-2 border-b-[#6B8E23]",
    secondary: "bg-gray-700 text-black hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-500",
    black: "bg-[#222] text-white font-semibold text-[16px] ",
    orange: "bg-orange-600 text-white font-semibold text-[16px] text-center",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
