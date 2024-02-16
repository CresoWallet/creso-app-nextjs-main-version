"use client";
import React, { useState } from "react";

import mail from "../../assets/backup/mail1.png";
import key from "../../assets/backup/Key1.png";
import wallet from "../../assets/backup/Wallet.png";
import CommonComponent from "@/components/common/CommonBackup";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
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
          color2="[#D0F500]"
          borderColor2="gray-300"
          textColor2="black"
          hrColor2="gray-300"
          imagesrc3={wallet}
          color3="white"
          textColor3="gray-300"
          borderColor3="gray-300"
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
