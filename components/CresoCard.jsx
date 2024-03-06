import React, { useContext, useState } from "react";
import Image from "next/image";
import Coin from "../assets/Dashboard/Coin.png";
import Custom from "../assets/AboutUs/custom.png";
import Creso from "../assets/Dashboard/creso2.svg";
import card_creso from "../assets/AboutUs/card_custom.png";
import TotalAsserts from "../assets/Dashboard/totalAsserts.png";
import View from "../assets/Dashboard/eye.png";
// import PurpleRectangle from "../assets/Dashboard/purpleRectangle.png";
import SimIcon from "../assets/Dashboard/SimIcon.png";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { WalletContext } from "@/providers/WalletProvider";

const CresoCard = ({ balance }) => {
  const { totalBalance } = useContext(WalletContext);
  const [eye, setEye] = useState(true);
  return (
    <div
      className="flex flex-col relative md:mb-8 mb-4"
      style={{ userSelect: "none" }}
    >
      <div className="">
        <div
          className="flex justify-center md:h-72 lg:h-60 h-60 lg:w-full xl:h-full"
          style={{ pointerEvents: "none" }}
        >
          <Image alt="" src={Custom} className="md:h-auto h-56 md:w-full  " />
        </div>
        <div className="absolute flex flex-row items-center top-20 left-10 gap-1 ">
          <Image alt="" src={Creso} className="md:h-6 h-5 md:w-6 w-5" />
          <p className="font-bold md:text-2xl text-xl ">creso</p>
        </div>
        <div className="absolute bottom-12 pl-10">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image alt="" src={card_creso} className="h-14" />
            </div>
            <div className="flex flex-col">
              <p className="text-base  text-black">Total Assets:</p>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-semibold  xl:text-2xl text-base xl:mr-3">
                  {`${eye ? totalBalance.toFixed(3) : "XXXX"} ETH`}
                </p>
                <div className="cursor-pointer" onClick={() => setEye(!eye)}>
                  {eye ? <GoEyeClosed size={22} /> : <GoEye size={22} />}
                </div>
                {/* <Image alt="" src={View} onClick={() => setEye(!eye)} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CresoCard;
