import React from "react";
import Image from "next/image";
import arrowdown from "../../assets/Dashboard/arrowdown.png";
import Header from "../../components/common/LoginRegister";

const Transaction = () => {
  return (
    <div className="mt-20">
      <Header pageTitle="Transaction & History" className="px-4 mb-[60px]" pageLink="/" />
      <div className=" block  justify-center flex-row items-center md:hidden gap-2 mx-4  ">
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div className="w-full">
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className="flex justify-between w-full text-[#A09FAA]">
                <p> Sender: 0fa..887 </p>
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className="flex justify-between !text-[10px] w-full text-[#A09FAA]">
                <p> 2024-01-10 | 16:54 </p>
                <p className="text-[#FF4085]">Pending</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div className="w-full">
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className="flex justify-between w-full text-[#A09FAA]">
                <p> Sender: 0fa..887 </p>
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className="flex justify-between !text-[10px] w-full text-[#A09FAA]">
                <p> 2024-01-10 | 16:54 </p>
                <p className="text-[#14B195] text-nowrap">Successful Transaction</p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div className="w-full">
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className="flex justify-between w-full text-[#A09FAA]">
                <p> Sender: 0fa..887 </p>
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className="flex justify-between !text-[10px] w-full text-[#A09FAA]">
                <p> 2024-01-10 | 16:54 </p>
                <p className="text-[#14B195] text-nowrap">Successful Transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
