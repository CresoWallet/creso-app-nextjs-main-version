"use client";
import React, { useState } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import eye from "../../assets/eoa/eye.png";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi2";

function CreateEOAWallet() {
  const secretPhrase = [
    "apple",
    "banana",
    "orange",
    "grape",
    "peach",
    "mango",
    "pine",
    "water",
    "berry",
    "blue",
    "peach",
    "kiwi",
  ];

  const [revealed, setRevealed] = useState(false);
  const [inputWords, setInputWords] = useState(secretPhrase);

  const handleRevealClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="h-full md:p-4 md:px-4 mx-2 md:mx-4 py-4 flex flex-col">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword1}
        imageSrc2={lock1}
        imageSrc3={phone}
        color1="black"
        color2="[#D0F500]"
        color3="gray-300"
        hrColor1="black"
        hrColor2="gray"
        borderColor1="black"
        borderColor2="gray-300"
        textColor1="black"
        textColor2="gray-300"
      />
      <div className=" md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto ">
        <hr className="mt-2 w-auto  " />

        <div className="text-center mx-auto mb-4 max-w-xl">
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Write down your Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>

        <div
          className={`rounded-3xl mx-auto py-3 md:py-4 border grid grid-cols-3  md:px-5 relative `}
        >
          {inputWords.map((word, index) => (
            <div
              key={index}
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${
                !revealed
                  ? "blur-sm bg-black opacity-[10%] text-white"
                  : "bg-[#A66CFF] border-black"
              }`}
              style={{ minWidth: "25%", textAlign: "center" }}
            >
              {/* {revealed ? `${index + 1}. ${word}` : "•••••"} */}
              {`${index + 1}. ${word.slice(0, 8)}`}
            </div>
          ))}
          {!revealed && (
            <div className="absolute flex flex-col justify-center items-center inset-0">
              {/* <Image src={""} alt="" /> */}
              <div className="text-4xl">
                <HiOutlineEye />
              </div>
              <p className="my-4 text-sm">Make sure nobody Looking</p>
            </div>
          )}
        </div>

        <div className="text-center mt-20 w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
          <button className="p-2.5" onClick={handleRevealClick}>
            {revealed
              ? "Hide Secret Recovery Phrase"
              : "Reveal Secret Recovery Phrase"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEOAWallet;
