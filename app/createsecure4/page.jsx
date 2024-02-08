"use client";

import React, { useState } from "react";
import Image from "next/image";
import play from "../../assets/eoa/playbutton.png";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/commonEOA";

function CreateWallet() {
  const [buttonNo, setButtonNo] = useState(false);
  const [buttonI, setButtonI] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlayed(true);
  };

  return (
    <div className="border-black border-2 h-full p-4 px-4 mx-4 py-4 flex flex-col ">
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
      <hr className="mt-6 w-auto  " />

      <div className="text-center mx-auto mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Secure Your Wallet
        </h2>
        <p className="mx-auto">
          Before getting started, watch this short video to learn about your
          Secret Recovery Phrase and how to keep your wallet safe.
        </p>
        <div className="relative h-80 w-auto bg-slate-200 rounded-xl my-16">
          {!videoPlayed && (
            <button
              onClick={handlePlayVideo}
              className="absolute inset-0 flex items-center justify-center bg-transparent border-none outline-none"
            >
              <Image src={play} alt="Play button" width={64} height={64} />
            </button>
          )}
          {videoPlayed && (
            <iframe
              width="100%"
              height="100%"
              src=""
              allowFullScreen
              title="Demo Video"
            ></iframe>
          )}
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row">
          <button
            className={`${
              buttonNo ? "bg-black text-white" : "bg-transparent text-black"
            } rounded-full py-4  my-2   mx-2 px-9 border-black ${
              buttonNo ? "" : "border"
            }`}
            onMouseEnter={() => setButtonNo(true)}
            onMouseLeave={() => setButtonNo(false)}
            onClick={() => {
              setButtonNo(true);
              setButtonI(false);
            }}
          >
            Remind Me later
          </button>
          <button
            className={`${
              buttonI ? "bg-black text-white" : "bg-transparent text-black"
            } rounded-full py-4 px-9 mx-2  border-black ${
              buttonI ? "" : "border"
            }`}
            onMouseEnter={() => setButtonI(true)}
            onMouseLeave={() => setButtonI(false)}
            onClick={() => {
              setButtonI(true);
              setButtonNo(false);
            }}
          >
            Secure My Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateWallet;
