"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Language1 from "../../assets/eoa/languagewhite.png";
import creso1 from "../../assets/eoa/cresowhite.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

const Header = ({ pageTitle, pageLink }) => {
  return (
    <>
      {/* mobile nav */}
      <div className="flex items-center justify-between fixed top-0  bg-[#2100EC] md:hidden text-white p-4 w-full   ">
        <Image alt="" src={creso1} className=" " />
        <div className="flex items-center mx-4 gap-2 sm:text-white  cursor-pointer ">
          <Image alt="" src={Language1} className="  w-6 h-6 " />
          <div className="flex items-center">
            <p className="text-sm  sm:text-white mr-1">ENG</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="md:hidden flex gap-4 mb-4 mt-14 ml-2 font-bold text-lg items-center ">
        <Link href={pageLink}>
          <BsArrowLeft />
        </Link>
        {pageTitle}
      </div>
    </>
  );
};

export default Header;
