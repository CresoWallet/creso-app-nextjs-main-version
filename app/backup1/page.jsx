"use client";
import React from "react";
import Link from "next/link";
import mail from "../../assets/backup/mail.png";
import key from "../../assets/backup/Key.png";
import wallet from "../../assets/backup/Wallet.png";
import CommonComponent from "@/components/common/CommonBackup";
import { CustomTextField } from "@/components/fields/CustomTextField";
import { BsArrowLeft } from "react-icons/bs";
import CustomButton from "@/components/CustomButton";

const Backup1 = () => {
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
          color1="[#D0F500]"
          borderColor1="black"
          hrColor1="black"
          imagesrc2={key}
          color2="white"
          borderColor2="gray-300"
          textColor2="text-gray-300"
          hrColor2="gray-300"
          imagesrc3={wallet}
          color3="white"
          textColor3="gray-300"
          borderColor3="gray-300"
        />
        <div className="justify-center mt-6 ">
          <div className=" max-w-lg text-center justify-center gap-4 mb-4 mt-14 ml-2 font-bold text-lg mx-4 md:mx-auto items-center ">
            <p className="justify-center my-2 px-4"> Email</p>
            <CustomTextField
              placeholder={"email"}
              validation={{ email: true, required: true }} // Corrected validation prop
            />
          </div>
          <div className=" md:mb-4  my-2 mx-auto max-w-md mt-28">
            <CustomButton
              name="Next"
              // onClick={handleBackup}
              bgColor="black"
              nameColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backup1;
