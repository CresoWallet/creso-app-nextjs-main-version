"use client";
import React from "react";
import Image from "next/image";
import Backup from "../../assets/Dashboard/backup.svg";
import Circle from "../../assets/Dashboard/Circles.png";
import Round from "../../assets/Dashboard/Roundes.png";
import Header from "../../components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";

const BackupAccount = () => {
  return (
    <div className="mt-20">
      <Header pageTitle="Backup & Restore" pageLink="/account" />
      <div className=" block  justify-center items-center md:hidden gap-2 mx-4  ">
        <div className="my-8 ">
          <Image alt="" src={Backup} className="  " />
        </div>
        <div className="flex gap-2 my-4">
          <Image alt="" src={Circle} className="  " />
          <p className="text-sm">Create Encrypted Backup</p>
          <RiArrowRightSLine />
        </div>
        <hr className="my-6" />
        <div className="flex gap-2 my-4">
          <Image alt="" src={Round} className="  " />
          <p className="text-sm">Restore Wallet From A Backup</p>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default BackupAccount;
