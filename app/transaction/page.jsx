import React from "react";
import Image from "next/image";
import arrowdown from "../../assets/Dashboard/arrowdown.png";
import Header from "../../components/common/LoginRegister";

const Transaction = () => {
  return (
    <div className="mt-20">
      <Header pageTitle="Transaction & History" pageLink="/" />
      <div className=" block  justify-center flex-row items-center md:hidden gap-2 mx-4  ">
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div flex flex-col>
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className=" flex justify-between text-[#A09FAA]">
                Sender: 0fa..887
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className=" flex justify-between text-[#A09FAA]">
                2024-01-10 | 16:54{" "}
                <p className="text-[#FF4085] ml-16">Pending</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div flex flex-col>
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className="flex justify-between text-[#A09FAA]">
                Sender: 0fa..887
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className=" flex justify-between text-[#A09FAA]">
                2024-01-10 | 16:54
                <p className="text-[#14B195] ml-3">Successful Transaction</p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="my-8 flex gap-4">
          <Image alt="" src={arrowdown} className="h-10 w-10  " />
          <div flex flex-col>
            <p className="font-semibold">Account Deposit</p>
            <div className="text-xs">
              <div className="flex justify-between text-[#A09FAA]">
                Sender: 0fa..887
                <p className="font-semibold text-black">+$15.00</p>
              </div>
              <div className=" flex justify-between text-[#A09FAA]">
                2024-01-10 | 16:54
                <p className="text-[#14B195] ml-3">Successful Transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
