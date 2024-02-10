import React from "react";
import Image from "next/image";
import arrowdown from "../../assets/Dashboard/arrowdown.png";
import Header from "../../components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";

const BackupAccount = () => {
  return (
    <>
      <Header pageTitle="Transaction & History" pageLink="/" />
      <div className=" block  justify-center flex-row items-center md:hidden gap-2 mx-4  ">
        <div className="my-8 ">
          <Image alt="" src={arrowdown} className="  " />
          <div flex flex-col>
            <p className="">Account Deposite</p>
            <p className="text-sm">Sender:0fa..887</p>
            <p className="text-sm">2024-01-10 | 16:54 </p>
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <Image alt="" src={arrowdown} className="  " />
          <p className="text-sm">Create Encrypted Backup</p>
          <RiArrowRightSLine />
        </div>
        <hr className="my-6" />
        <div className="flex gap-2 my-4">
          <Image alt="" src={arrowdown} className="  " />
          <p className="text-sm">Restore Wallet From A Backup</p>
          <RiArrowRightSLine />
        </div>
      </div>
    </>
  );
};

export default BackupAccount;
