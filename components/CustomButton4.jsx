// CustomButton4.jsx
import React from "react";
import Link from "next/link";

const CustomButton4 = ({
  children,
  onClick,
  href,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className={`rounded-full py-3 sm:py-5 m-2 sm:m-4 px-12 md:px-16 border-black ${
        isHovered ? "bg-black text-white" : "bg-transparent text-black"
      } ${isHovered ? "" : "border"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{}}
    >
      {href ? <Link href={href}>{children}</Link> : children}
    </button>
  );
};

export default CustomButton4;
