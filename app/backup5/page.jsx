"use client";
import React, { useState } from "react";
import Link from "next/link";
import mail from "../../assets/backup/mail1.png";
import key from "../../assets/backup/Key2.png";
import wallet from "../../assets/backup/Wallet1.png";
import CommonComponent from "@/components/common/CommonBackup";
import { BsArrowLeft } from "react-icons/bs";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import device2 from "../../assets/backup/device2.png";

const backup5 = () => {
  return (
    <div>
      <div className=" h-full md:px-4 md:pt-6  pt-4 mx-4 py-4  flex flex-col ">
        <div className="sm:block hidden  gap-4 mb-4 mt-14 ml-2 font-bold text-lg items-center ">
          <Link href="/dashboard" className="flex items-center gap-4">
            <BsArrowLeft />
            Backup
          </Link>
        </div>
        <CommonComponent
          imagesrc1={mail}
          color1="black"
          borderColor1="white"
          hrColor1="black"
          imagesrc2={key}
          color2="black"
          borderColor2="white"
          textColor2="black"
          hrColor2="black"
          imagesrc3={wallet}
          color3="[#D0F500]"
          textColor3="black"
          borderColor3="black"
        />
      </div>
      <div className="text-center md:mx-auto mx-4 mb-4 max-w-lg">
        <p className="text-2xl font-extrabold my-4 ">
          Back Up Personal Key Share
        </p>
        <p className="text-gray-400 my-6">
          Encrypted your key share with Recovery Key and store the encrypted
          data in Creso Server.
        </p>
        <Image alt="" src={device2} className=" mx-auto  " />
      </div>
      <div className=" md:mb-4 md:mt-8 my-2 mx-auto max-w-md mt-10">
        <CustomButton
          name="Next"
          // onClick={handleBackup}
          bgColor="black"
          nameColor="white"
        />
      </div>
    </div>
  );
};

export default backup5;
