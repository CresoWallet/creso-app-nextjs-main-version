import React from "react";
import Image from "next/image";
import Header from "@/components/common/LoginRegister";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
const CommonComponent = ({
  title,
  imageB1,
  imageB2,
  imageB3,
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
      <Header />
      <div className="h-full md:p-4 p-4 md:px-4 md:mx-4 md:py-4 flex flex-col ">
        <div className="flex items-center pt-10">
          <Link href="/backup1">
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
              src={imageB1}
              className={`rounded-full bg-${color1} border-${borderColor1} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-4 md:-ml-6 text-${textColor1}`}
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
              src={imageB2}
              className={` rounded-full bg-${color2} border-${borderColor2} border-2 h-16 w-16 p-3 `}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold pt-3 -ml-2 md:-ml-3 text-${textColor1}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Recovery Key
            </p>
          </div>
          <hr className={`md:w-24 w-10 border-${hrColor2}`} />
          <div className="relative">
            <Image
              alt=""
              src={imageB3}
              className={`rounded-full bg-${color3} border-gray-300 border-2 h-16 w-16 p-3`}
            />
            <p
              className={`absolute text-xs md:text-sm font-semibold text-gray-400 pt-3 -ml-2 md:-ml-3 text-${textColor2}`}
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
