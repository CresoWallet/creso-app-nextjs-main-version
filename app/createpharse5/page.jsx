"use client";
import React, { useState } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import eye from "../../assets/eoa/eye.png";

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
    <div className=" h-full md:px-4  py-4  flex flex-col ">
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
      <hr className="mt-2 w-auto  " />

      <div className="text-center mx-auto mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Write down your Secret Recovery Phrase
        </h2>
        <p className="mx-auto">
          Write down this 12-word secret recovery phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>

      <div className="relative h-80 w-auto rounded-xl  my-16  border border-black flex justify-center items-center flex-wrap sm:gap-1 gap-2">
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
