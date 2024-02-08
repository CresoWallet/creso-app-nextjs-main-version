import React from "react";
import Image from "next/image";
import HeaderEOA from "@/components/HeaderEOA";

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
    <div className="h-full p-4 px-4 mx-4 py-4 flex flex-col ">
      <HeaderEOA title={title} />
      <div className="flex items-center justify-center mb-4 mt-6 ">
        <div className="flex flex-col">
          <Image
            alt=""
            src={imageSrc1}
            className={`rounded-full bg-${color1} border-${borderColor1} border-2 h-16 w-16 p-3 `}
          />
          <p className={`text-sm font-semibold pt-3 text-${textColor1}`}>
            Create Password
          </p>
        </div>
        <div className="flex items-center">
          <hr className={`md:w-24 w-4 mb-10 sm:w-12 border-${hrColor1}`} />
        </div>
        <div className="flex items-center flex-col">
          <Image
            alt=""
            src={imageSrc2}
            className={`rounded-full bg-${color2} border-${borderColor2} border-2 h-16 w-16 p-3 `}
          />
          <p className={`text-sm font-semibold pt-3 text-${textColor1}`}>
            Secure Wallet
          </p>
        </div>
        <hr className={`md:w-24 w-4 sm:w-12 mb-10 border-${hrColor2}`} />
        <div className="flex items-center flex-col">
          <Image
            alt=""
            src={imageSrc3}
            className={`rounded-full bg-${color3} border-gray-300 border-2 h-16 w-16 p-3`}
          />
          <p
            className={`text-sm font-semibold text-gray-400 pt-3 text-${textColor2}`}
          >
            Confirm Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonComponent;
