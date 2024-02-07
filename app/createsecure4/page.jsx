"use client";

import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/securepassword.svg";
import play from "../../assets/eoa/playbutton.png";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import Header from "@/components/HeaderEOA";

function CreateWallet() {
  const [buttonNo, setButtonNo] = useState(false);
  const [buttonI, setButtonI] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlayed(true);
  };

  return (
    <div className="border-black border-2 items-center justify-center h-full p-4 px-4 mx-4 py-4 flex flex-col ">
      <Header title="Create EOA Wallet" />
      <div className="text-xl text-center font-bold mb-4 mt-8">
        <Image alt="" src={secure} className="mx-auto" />
      </div>

      <div className="flex justify-between mb-8 max-w-lg ">
        <div className="flex items-center flex-col">
          <Image
            alt=""
            src={lockpassword1}
            className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
          />
          <p className="text-sm font-semibold pt-3 ">Create Password</p>
        </div>
        <hr className="md:w-24 w-4  mb-10 sm:w-12 border-black" />
        <div className="flex flex-col">
          <Image
            alt=""
            src={lock1}
            className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-4 "
          />
          <p className="text-sm font-semibold pt-3">Secure Wallet</p>
        </div>
        <hr className="md:w-24 w-4  sm:w-12 mb-10  " />
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

      <div className="my-10 mx-4 px-4">
        <h2 className="text-xl text-center font-bold mb-4">
          Secure Your Wallet
        </h2>
        <p className="my-6">
          Before getting started, watch this short video to learn about your
          Secret Recovery Phrase and how to keep your wallet safe.
        </p>
        <div className="relative h-80 w-auto bg-slate-200 rounded-xl p-2 m-4 my-6">
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
              src="https://www.youtube.com/embed/OF1Apg3cH9Y"
              frameBorder="0"
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
