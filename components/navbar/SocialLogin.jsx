"use client";
// SocialLogin.js
import React from "react";
import Image from "next/image";
import Twitter from "../../assets/Dashboard/twitter.png";
import Telegram from "../../assets/Dashboard/telegram.png";
import Etherscan from "../../assets/Dashboard/etherscan.png";
import Github from "../../assets/Dashboard/github.png";
import Discord from "../../assets/Dashboard/discord.png";

const SocialLogin = () => {
  return (
    <div className="flex justify-between item-center lg:gap-2 gap-3 border-white rounded-full bg-white border border-solid md:p-2 p-0 mt-8 md:mx-5 mx-0 ">
      <a
        href="https://twitter.com/cresowallet"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transform hover:-translate-y-1"
      >
        <Image
          alt="Twitter"
          src={Twitter}
          className="  w-7 h-7  overflow-hidden"
        />
      </a>
      <a
        href="https://t.me/cresowallet"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transform hover:-translate-y-1"
      >
        <Image alt="Telegram" src={Telegram} className=" flex w-7 h-7" />
      </a>
      <a
        href="https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transform hover:-translate-y-1"
      >
        <Image alt="Etherscan" src={Etherscan} className="w-7 h-7" />
      </a>
      <a
        href="https://discord.com/invite/creso"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transform hover:-translate-y-1"
      >
        <Image alt="Discord" src={Discord} className="w-7 h-7" />
      </a>
      <a
        href="https://github.com/CresoWallet"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transform hover:-translate-y-1"
      >
        <Image alt="Github" src={Github} className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialLogin;
