"use client";
import { useState } from "react";
import Image from "next/image";
import create from "../../assets/eoa/createeoa.svg";
import check from "../../assets/eoa/checkmark.png";
import Header from "@/components/common/HeaderEOA";

export default function Eoawallet() {
  const [importWalletHovered, setImportWalletHovered] = useState(false);
  const [createWalletHovered, setCreateWalletHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className=" h-full md:px-4  py-4 flex flex-col ">
      <Header title="Create EOA Wallet" className="md:hidden block" />
      <div className=" grid place-items-center">
        <div className="text-center ">
          <h2 className="font-bold text-2xl mt-16  mb-4">
            Let&#39;s Get Started
          </h2>
          <p className="text-gray-500">
            Trusted by millions, creso is a secure wallet making the world of
            <span className="text-[#FF4085] ml-1"> web 3 </span>
            <p>accessible to all.</p>
          </p>
        </div>
        <Image alt="" src={create} className="mb-8  " />

        {/* Terms of Use */}
        <div className="flex items-center justify-center mb-8 pb-2">
          <button
            className="rounded-full p-2 border-black focus:outline-none"
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked ? (
              <div className="w-6 h-6 rounded-full border my-2 mr-1 border-black"></div>
            ) : (
              <Image alt="" src={check} className="w-8 h-8 my-1 " />
            )}
          </button>
          <span className="ml-2">
            I agree to creso
            <span className="text-[#FF4085] ml-1">Terms of Use</span>
          </span>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row my-4 justify-center items-center">
          <button
            className={`${
              importWalletHovered
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } rounded-full py-3 sm:py-5 m-2 sm:m-4 px-12  border-black ${
              importWalletHovered ? "" : "border"
            }`}
            onMouseEnter={() => setImportWalletHovered(true)}
            onMouseLeave={() => setImportWalletHovered(false)}
            onClick={() => {
              setImportWalletHovered(true);
              setCreateWalletHovered(false);
            }}
          >
            Import an existing wallet
          </button>

          <button
            className={`${
              createWalletHovered
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } rounded-full py-3 sm:py-5 m-2 sm:m-4 px-16 border-black ${
              createWalletHovered ? "" : "border"
            }`}
            onMouseEnter={() => setCreateWalletHovered(true)}
            onMouseLeave={() => setCreateWalletHovered(false)}
            onClick={() => {
              setCreateWalletHovered(true);
              setImportWalletHovered(false);
            }}
          >
            Create New Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
