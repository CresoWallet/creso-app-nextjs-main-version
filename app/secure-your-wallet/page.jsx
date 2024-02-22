"use client";

import React, { useState } from "react";
import Image from "next/image";
import play from "../../assets/eoa/playbutton.png";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import CustomButton4 from "@/components/CustomButton4";

function SecureYourWallet() {
  const [buttonNo, setButtonNo] = useState(false);
  const [buttonI, setButtonI] = useState(true);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlayed(true);
  };

  return (
    <div className=" h-full md:px-4  py-4 flex flex-col ">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword1}
        color1="black"
        hrColor1="black"
        borderColor1="black"
        imageSrc2={lock1}
        color2="[#D0F500]"
        borderColor2="black"
        textColor2="text-black"
        hrColor2="black"
        imageSrc3={phone}
        color3="white"
        textColor3="gray-300"
        borderColor3="grey-300"
      />
      <hr className="mt-6 w-auto  " />

      <div className="text-center md:mx-auto  mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Secure Your Wallet
        </h2>
        <p className="mx-auto ">
          Before getting started, watch this short video to learn about your
          Secret Recovery Phrase and how to keep your wallet safe.
        </p>
        <div className="relative md:h-80 md:w-auto h-48 w-80 sm:w-96 mx-auto px-2 md:bg-slate-200 bg-[#D0F500] rounded-xl md:my-16 my-4 ">
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
            } rounded-full py-4  my-2   mx-2 md:px-16 px-20  border-black ${
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
            } rounded-full py-4 md:px-16 px-20 mx-2  border-black ${
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
          {/* <CustomButton4
            onClick={() => {
              setButtonNo(true);
              setButtonI(false);
            }}
            selected={buttonNo}
            padding="px-16 py-4"
          >
            Remind Me later
          </CustomButton4>
          <CustomButton4
            onClick={() => {
              setButtonI(true);
              setButtonNo(false);
            }}
            selected={buttonI}
            padding="px-16  py-4"
          >
            Secure My Wallet
          </CustomButton4> */}
        </div>
      </div>
    </div>
  );
}

export default SecureYourWallet;
