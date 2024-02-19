"use client";
import Image from "next/image";
import React from "react";
import SecurityImage from "../../assets/security/securityImage.png";
import Lock from "../../assets/security/Lock.png";
import Header from "@/components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";
import Info from "../../assets/Dashboard/info.png";
import LockPassword from "../../assets/eoa/Lockpassword.png";
import Crypto from "../../assets/Dashboard/Crypto.png";
import Bell from "../../assets/Dashboard/Bell.png";

const SecurityPage = () => {
  return (
    <div className="mt-20">
      <Header pageTitle="Security" pageLink="/" className="px-4" />
      <div className=" block justify-center flex-row items-center md:hidden gap-2 mx-4  ">
        <div className="block md:hidden mx-2">
          <div className="flex justify-center items-center xl:py-16 py-8">
            <Image alt="" src={SecurityImage} className="w-72" />
          </div>
          <div className="flex items-center my-4">
            <Image alt="" src={Lock} className="h-6 w-6 " />
            <p className="flex text-base font-medium items-center justify-between w-full gap-2 ">
              <h3>Auto - Lock</h3>
              <div className="flex items-center gap-2">
                <p className="text-[#2100EC]">Never</p>
                <RiArrowRightSLine />
              </div>
            </p>
          </div>
          <div className="flex gap-2 my-4">
            <Image alt="" src={Info} className="h-4 w-4 " />
            <p className="text-[#A09FAA] text-xs">
              Choose the amount of time before the application automatically
              locks
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex gap-2 items-center my-2">
            <Image alt="" src={LockPassword} className="h-6 w-6 " />
            <p className="text-sm">Manage Authentication Methods</p>
            <RiArrowRightSLine />
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <Image alt="" src={Crypto} className="h-6 w-6 " />
            <p className="text-sm">Encrupted Backups</p>
            <RiArrowRightSLine />
          </div>
          <hr className="my-6" />
          <div className="flex mt-6 gap-2 items-center">
            <Image alt="" src={Bell} className="h-6 w-6 " />
            <p className="text-sm">Push Notification</p>
            <p className="text-[#2100EC]  text-sm">Disabled</p>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
