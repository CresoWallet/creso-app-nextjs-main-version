"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavigationButton = ({ pathname, label, icon, isActive }) => {
  return (
    <Link href={pathname}>
      <div
        className={`${
          isActive ? "bg-white font-bold" : "font-normal"
        } rounded-full p-4 flex gap-2 place-content-start`}
      >
        <Image
          alt=""
          src={isActive ? icon.active : icon.inactive}
          className="w-6 h-6 text-[#B1A6F8]"
        />
        {label}
      </div>
    </Link>
  );
};

export default NavigationButton;
