"use client";
import React from "react";
import Image from "next/image";
import add from "../../assets/Dashboard/adduser.png";
import user1 from "../../assets/Dashboard/user1.png";
import user2 from "../../assets/Dashboard/user2.png";
import email from "../../assets/Dashboard/mail.png";
import password from "../../assets/Dashboard/password.png";
import Header from "../../components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";

const AccountSetting = () => {
  return (
    <div className="mt-20   ">
      <Header pageTitle="Account Setting" pageLink="/account" />
      <div className=" block md:hidden mx-4">
        <div className="  flex  flex-row  gap-4  my-6 overflow-x-auto  ">
          <Image alt="" src={user1} className=" h-24 w-24 " />

          <Image alt="" src={user2} className=" h-24 w-24 " />

          <Image alt="" src={add} className=" h-24 w-24 " />
        </div>
        <p className="mt-4 mb-2 ml-4">Name</p>
        <div className="rounded-full   py-1 border border-solid cursor-pointer ">
          <p className="p-4 text-base font-medium"> Samuel Hawking</p>
        </div>

        <hr className="my-6" />
        <div className="flex flex-col gap-2 mx-4 ">
          <div className="flex flex-row items-center justify-between font-semibold my-6">
            <span className="justify-start flex ">
              <Image alt="" src={email} className=" " />
              <p>Email</p>
            </span>
            <span className="justify-end items-center flex ">
              <p className="text-sm text-[#2100EC]">samhawking@gmail.com</p>
              <RiArrowRightSLine />
            </span>
          </div>
          <div className="flex flex-row items-center justify-between font-semibold">
            <span className="justify-start flex ">
              <Image alt="" src={password} />
              <p>Password</p>
            </span>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
