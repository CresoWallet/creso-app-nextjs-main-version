"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/Dashboard/creso2.png";
import creso1 from "../../assets/Dashboard/cresopurple.png";
import Header from "../../components/common/LoginRegister";
import Send from "../../assets/Dashboard/send.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TransferToken = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Regular expression to allow only numbers
    if (/^\d+$/.test(value) || value === "") {
      setAmount(value);
      setError("");
    } else {
      setError("Please enter numbers only");
    }
  };

  const handleSend = () => {
    if (amount === "") {
      setError("Please enter amount");
    } else {
      // Your logic to handle sending here
      console.log("Sending amount:", amount);
    }
  };

  return (
    <div className="mt-20 block md:hidden">
      <Header pageTitle="Transfer Token" pageLink="/" />
      <div className=" block  justify-center flex-row items-center md:hidden gap-2 mx-4  ">
        <div className="my-8 gap-4">
          <p>From</p>
          <div className="rounded-full   py-1 border border-solid cursor-pointer ">
            <div className="rounded-full flex flex-row gap-2  border-solid ">
              <Image alt="" src={creso} className="h-10 w-10  " />
              <p>ETH-1</p>
              <span className=" rounded-full bg-[#EEEEF1] p-3 mx-2">EQA</span>
              <p className=" flex items-center">
                0x53A...e4af
                <MdOutlineKeyboardArrowDown size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 gap-4 mx-4">
        <p>To</p>
        <div className="rounded-full  pl-2  pr-2  py-1 flex flex-row justify-between border border-solid cursor-pointer ">
          <div className="rounded-full border-solid flex flex-row gap-2 items-center">
            <Image alt="" src={creso1} className="h-10 w-10  " />
            <p className="flex">ETH-2</p>
            <span className="rounded-full bg-[#EEEEF1] p-3 mx-2">AA</span>
            <p className=" flex items-center">
              0x53A...e4af
              <MdOutlineKeyboardArrowDown size={20} />
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-6">
        <p>Amount</p>
        <p>Balance:0ETH</p>
      </div>
      <div className="rounded-full  pl-2  pr-2  py-1 flex flex-row justify-between border border-solid cursor-pointer mx-4 ">
        <input
          type="text"
          className="rounded-full p-3 border-solid w-full"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      {error && <p className="text-red-500 mx-4">{error}</p>}
      <div className="text-center justify-center mt-20 mx-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer ">
        <button
          className="p-3 flex justify-center items-center "
          onClick={handleSend}
        >
          <Image alt="" src={Send} className="  " /> Send
        </button>
      </div>
    </div>
  );
};

export default TransferToken;
