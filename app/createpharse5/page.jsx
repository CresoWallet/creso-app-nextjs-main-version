"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/securepassword.svg";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import Header from "@/components/HeaderEOA";

function CreateEOAWallet() {
  const secretPhrase = [
    "apple",
    "banana",
    "orange",
    "grape",
    "peach",
    "mango",
    "pineapple",
    "watermelon",
    "strawberry",
    "blueberry",
    "raspberry",
    "kiwi",
  ];

  const [revealed, setRevealed] = useState(false);
  const [inputWords, setInputWords] = useState(secretPhrase);

  const handleRevealClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="border-black border-2 items-center justify-center h-full p-4 px-4 mx-4 py-4 flex flex-col ">
      <Header title="Create EOA Wallet" />

      <div className="text-xl text-center font-bold mb-4 mt-8">
        <Image alt="" src={secure} className="mx-auto" />
      </div>

      <div className="flex ">
        <div className="flex flex-col">
          <Image
            alt=""
            src={lockpassword1}
            className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
          />
          <p className="text-sm font-semibold pt-3 ">Create Password</p>
        </div>
        <hr className="w-24 mt-7 border-black " />
        <div className="flex flex-col">
          <Image
            alt=""
            src={lock1}
            className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-4 "
          />
          <p className="text-sm font-semibold pt-3">Secure Wallet</p>
        </div>
        <hr className="w-24 mt-7 " />
        <div className="flex flex-col">
          <Image
            alt=""
            src={phone}
            className="rounded-full  border-gray-300 border-2 h-16 w-16 mx-2 p-4"
          />
          <p className="text-sm font-semibold text-gray-400 pt-3">
            Confirm Code
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="my-4 mx-4 px-4">
        <p className="text-xl text-center  mb-4 font-semibold my-8">
          Write down your Secret Recovery Phrase
        </p>
        <p className="font-normal text-base my-8">
          Write down this 12-word secret recovery phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>

      <div className="h-80 w-auto rounded-xl  border border-black p-2 m-4 my-6 flex justify-center items-center flex-wrap sm:gap-1 gap-4">
        {inputWords.map((word, index) => (
          <div
            key={index}
            className="rounded-full border border-black bg-[#A66CFF] p-2 md:m-1"
            style={{ minWidth: "25%", textAlign: "center" }}
          >
            {revealed ? `${index + 1}. ${word}` : "•••••"}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
          onClick={handleRevealClick}
        >
          {revealed
            ? "Hide Secret Recovery Phrase"
            : "Reveal Secret Recovery Phrase"}
        </button>
      </div>
    </div>
  );
}

export default CreateEOAWallet;
