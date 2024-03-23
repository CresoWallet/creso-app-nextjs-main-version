"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { LiaGoogleDrive } from "react-icons/lia";
import mail from "../../assets/backup/mail1.png";
import key from "../../assets/backup/Key2.png";
import wallet from "../../assets/backup/Wallet1.png";
import loop from "../../assets/backup/loop.png";
import CommonComponent from "@/components/common/CommonBackup";
import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/Customcheckbox";

const Backup4 = () => {
  const [selectStorage, setSelectStorage] = useState("iCloud Drive");

  const handleStorageChange = (storage) => {
    setSelectStorage(storage);
  };

  return (
    <div>
      <div className="h-full md:px-4 md:pt-6 pt-4 mx-4 py-4 flex flex-col">
        <div className="sm:block hidden gap-4 mb-4 mt-14 ml-2 font-bold text-lg items-center">
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
        <p className="text-2xl font-extrabold ">Save Recovery Key</p>
        <p className="text-gray-400">
          Sync the Recovery Key to your personal cloud storage
        </p>

        <div className="my-8 gap-4 mx-4">
          <p className="text-gray-400">Personal Clould Storage</p>
          <div className="rounded-full p-2 border border-solid cursor-pointer">
            <div className="rounded-full border-solid flex justify-between gap-2 items-center text-xs">
              <p className="flex font-semibold select-none items-center gap-2">
                <CiCloudOn className="h-8 w-8" />
                iCloud Drive
              </p>
              <div className="my-4 gap-4 items-center">
                <CustomCheckbox
                  checked={selectStorage === "iCloud Drive"}
                  onChange={() => handleStorageChange("iCloud Drive")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 gap-4 mx-4">
          <div className="rounded-full p-2 border border-solid cursor-pointer">
            <div className="rounded-full border-solid flex justify-between gap-2 items-center text-xs">
              <p className="flex font-semibold select-none items-center gap-2">
                <LiaGoogleDrive className="h-8 w-8" />
                Google Drive
              </p>
              <div className="my-4 gap-4 items-center">
                <CustomCheckbox
                  checked={selectStorage === "Google Drive"}
                  onChange={() => handleStorageChange("Google Drive")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 gap-4 mx-4">
          <div className="rounded-full p-2 border border-solid cursor-pointer">
            <div className="rounded-full border-solid flex justify-between gap-2 items-center text-xs">
              <p className="flex font-semibold select-none items-center gap-2">
                <Image alt="" src={loop} className="h-9 w-9" />
                Baidu Netdisk
              </p>
              <div className="my-4 gap-4 items-center">
                <CustomCheckbox
                  checked={selectStorage === "Baidu Netdisk"}
                  onChange={() => handleStorageChange("Baidu Netdisk")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:mb-4 md:mt-8 my-2 mx-auto max-w-md mt-10">
        <CustomButton
          name="Enable Device Lock"
          // onClick={handleBackup}
          bgColor="black"
          nameColor="white"
        />
      </div>
    </div>
  );
};

export default Backup4;
