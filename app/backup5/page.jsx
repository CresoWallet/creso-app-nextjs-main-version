"use client";
import React, { useState } from "react";
import Link from "next/link";
import mail from "../../assets/backup/mail1.png";
import key from "../../assets/backup/Key2.png";
import wallet from "../../assets/backup/Wallet1.png";
import CommonComponent from "@/components/common/CommonBackup";
import { BsArrowLeft } from "react-icons/bs";
import CustomButton from "@/components/CustomButton";

const backup = () => {
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
      <div className=" justify-center items-center mt-40">
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

export default backup;
