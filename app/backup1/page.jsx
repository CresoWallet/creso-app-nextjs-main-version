"use client";
import React, { useState } from "react";

import mail from "../../assets/backup/mail.png";
import key from "../../assets/backup/Key.png";
import wallet from "../../assets/backup/Wallet.png";
import Common from "@/components/common/CommonBackup";

const backup = () => {
  return (
    <div>
      <div className=" h-full md:px-4  py-4  flex flex-col ">
        <Common
          title="Create EOA Wallet"
          imageB1={mail}
          imageB2={key}
          imageB3={wallet}
          color1="[#D0F500]"
          color2="gray-300"
          color3="gray-300"
          hrColor1="black"
          hrColor2="gray-300"
          borderColor1="gray-300"
          borderColor2="gray-300"
          textColor1="gray-300"
          textColor2="gray-300"
        />
      </div>
    </div>
  );
};

export default backup;
