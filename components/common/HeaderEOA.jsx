import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import creso from "../../assets/eoa/cresoblack.svg";
import creso1 from "../../assets/eoa/cresowhite.svg";
import Language from "../../assets/eoa/Language.png";
import Language1 from "../../assets/eoa/languagewhite.png";

const HeaderEOA = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between fixed top-0 md:bg-white bg-[#2100EC]  text-white mb-44  p-4 w-full ">
        <div className="flex items-center ">
          <Image
            alt=""
            src={creso}
            className="hidden md:block w-auto h-auto mr-2"
          />
          <Image
            alt=""
            src={creso1}
            className="md:hidden block w-auto h-auto mr-2"
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-3xl font-bold md:text-black hidden md:block">
            {title}
          </h1>
        </div>

        <div className="flex items-center mx-4 gap-2 sm:text-white md:text-black cursor-pointer ">
          <div className="flex items-center ">
            <Image alt="" src={Language} className="hidden md:block w-6 h-6 " />
            <Image
              alt=""
              src={Language1}
              className="md:hidden block w-6 h-6 "
            />
          </div>
          <div className="flex items-center">
            <p className="text-sm md:text-black sm:text-white mr-1">ENG</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderEOA;
