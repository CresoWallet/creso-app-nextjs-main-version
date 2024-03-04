"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/Dashboard/creso2.png";
import creso1 from "../../assets/Dashboard/cresopurple.png";
import Header from "../../components/common/LoginRegister";
import Send from "../../assets/Dashboard/send.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AccountHeader from "@/components/AccountHeader";
import { CustomTextField } from "@/components/fields/CustomTextField";
import CustomButton from "@/components/CustomButton";

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
    <div className="mt-20  ">
      <Header
        pageTitle="Transfer Token"
        pageLink="/dashboard"
        className="px-4"
      />
      <div className="   justify-center flex-row items-center  gap-2 mx-4 ">
        <div className="my-8 gap-4">
          <p className="ml-5 my-2">From</p>
          <div className="rounded-full px-5 py-4 border border-solid cursor-pointer ">
            <div className="rounded-full border-solid flex justify-between gap-2 items-center text-xs">
              <Image alt="" src={creso} className="h-7 w-7  " />
              <p className="flex font-semibold">ETH-1</p>
              <span className="rounded-full bg-[#EEEEF1] p-3 mx-2">EQA</span>
              <p className=" flex items-center">
                0x53A...e4af
                <MdOutlineKeyboardArrowDown size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 gap-4 mx-4">
        <p className="ml-5 my-2">To</p>
        <div className="rounded-full px-5 py-4 border border-solid cursor-pointer ">
          <div className="rounded-full border-solid flex justify-between gap-2 items-center text-xs">
            <Image alt="" src={creso1} className="h-7 w-7  " />
            <p className="flex font-semibold">ETH-2</p>
            <span className="rounded-full bg-[#EEEEF1] p-3 mx-2">AA</span>
            <p className=" flex items-center">
              0x53A...e4af
              <MdOutlineKeyboardArrowDown size={20} />
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between mx-9
       my-2"
      >
        <p>Amount</p>
        <p>Balance:0ETH</p>
      </div>
      <div className="rounded-full  pl-2  pr-2  py-1 flex flex-row justify-between border border-solid cursor-pointer mx-4 ">
        <input
          type="number"
          className="rounded-full p-3 border-solid w-full"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      {/* <div className=" pl-2 pr-2 py-1 flex flex-row justify-between  cursor-pointer mx-4  ">
        <CustomTextField
          placeholder="Enter amount"
          type="number"
          validation={{
            onChange: handleAmountChange,
          }}
          error={error}
        />
      </div> */}
      {error && <p className="text-red-500 mx-4 text-center">{error}</p>}
      <div className=" mt-16  mx-4">
        <CustomButton
          name="Send"
          img={Send}
          bgColor="black"
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default TransferToken;
