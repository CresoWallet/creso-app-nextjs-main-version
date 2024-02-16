"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/common/LoginRegister";

const CommonComponent = ({
  imagesrc1,
  imagesrc2,
  imagesrc3,
  color1,
  color2,
  color3,
  hrColor1,
  hrColor2,
  borderColor1,
  borderColor2,
  borderColor3,
  textColor2,
  textColor3,
}) => {
  return (
    <>
      <Header pageTitle="Backup" pageLink="/dashboard" />
      <div className="h-full md:p-4 p-4 md:px-4 md:mx-4 md:py-4 flex flex-col ">
        <div className="flex items-center justify-center mb-4 mt-6 ">
          <div className="relative">
            <Image
              alt=""
              src={imagesrc1}
              className={`rounded-full bg-${color1} border-${borderColor1} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-4 md:-ml-6 text-black`}
              style={{ whiteSpace: "nowrap" }}
            >
              Email
            </p>
          </div>
          <div className="flex items-center">
            <hr className={`md:w-24 w-10 border-${hrColor1}`} />
          </div>
          <div className="relative">
            <Image
              alt=""
              src={imagesrc2}
              className={` rounded-full bg-${color2} border-${borderColor2} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-2 md:-ml-3 ${textColor2}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Recovery Key
            </p>
          </div>
          <hr className={`md:w-24 w-10 border-${hrColor2}`} />
          <div className="relative">
            <Image
              alt=""
              src={imagesrc3}
              className={`rounded-full bg-${color3}  border-${borderColor3} border-2 h-16 w-16 p-3`}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-2 md:-ml-3 text-${textColor3}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Backup
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonComponent;
