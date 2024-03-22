// CustomButton4.jsx
import React from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomButton4 = ({
  children,
  onClick,
  href,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  padding,
  isDisabled,
  isLoading,
}) => {
  return (
    <button
      className={`rounded-full py-3 sm:py-5 m-2 sm:m-4 ${padding} border-black ${
        isHovered ? "bg-black text-white" : "bg-transparent text-black"
      } ${isHovered ? "" : "border"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
      ) : (
        <>{href ? <Link href={href}>{children}</Link> : children}</>
      )}
      {/* {href ? <Link href={href}>{children}</Link> : children} */}
    </button>
  );
};

export default CustomButton4;
