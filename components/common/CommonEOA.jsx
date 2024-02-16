import React from "react";
import Image from "next/image";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const CommonComponent = ({
  title,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  color1,
  color2,
  color3,
  hrColor1,
  hrColor2,
  borderColor1,
  borderColor2,
  textColor1,
  textColor2,
}) => {
  return (
    <>
      <HeaderEOA title={title} />
      <div className="h-full md:p-4 p-4 md:px-4 md:mx-4 md:py-4 flex flex-col ">
        <div className="flex items-center pt-10">
          <Link href="createwallet1">
            <h1 className="flex items-center gap-2  text-xl font-bold md:text-black md:hidden ">
              <BsArrowLeft />
              {title}
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-4 mt-6 ">
          <div className="relative">
            <Image
              alt=""
              src={imageSrc1}
              className={`rounded-full bg-${color1} border-${borderColor1} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-4 md:-ml-6 text-${textColor1}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Create Password
            </p>
          </div>
          <div className="flex items-center">
            <hr className={`md:w-24 w-10 border-${hrColor1}`} />
          </div>
          <div className="relative">
            <Image
              alt=""
              src={imageSrc2}
              className={` rounded-full bg-${color2} border-${borderColor2} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-2 md:-ml-3 text-${textColor1}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Secure Wallet
            </p>
          </div>
          <hr className={`md:w-24 w-10 border-${hrColor2}`} />
          <div className="relative">
            <Image
              alt=""
              src={imageSrc3}
              className={`rounded-full bg-${color3} border-gray-300 border-2 h-16 w-16 p-3`}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold text-gray-400 pt-3 -ml-2 md:-ml-3 text-${textColor2}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Confirm Code
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonComponent;
