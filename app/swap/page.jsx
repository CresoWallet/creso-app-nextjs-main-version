"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import SideNav from "@/components/navbar/SideNav";
import Settings from "../../assets/Swap/settings.png";
import Note from "../../assets/Swap/note.png";
import BNB from "../../assets/Swap/bnb.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Etherum from "../../assets/Swap/etherum.png";
import SwapButton from "../../assets/Swap/swap.png";
import ETHBNB from "../../assets/Swap/ethBnb.png";
import BNBUSDT from "../../assets/Swap/bnbUsdt.png";
import CustomButton3 from "@/components/CustomButton3";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Gas from "../../assets/Swap/gas.png";
import Clock from "../../assets/Swap/clock.png";
import Dollar from "../../assets/Swap/dollar.png";
import Layers from "../../assets/Swap/layers.png";
import CustomButton from "@/components/CustomButton";
import Swap2 from "../../assets/Swap/swap2.png";
import SwapFrom from "@/components/SwapFrom";
import User from "@/components/User";
import CapCard from "@/components/CapCard";
import CresoCard from "@/components/CresoCard";
import Header from "@/components/Header";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/gainers/mina.png";
import Sure from "../../assets/gainers/sure.png";
import Pepe from "../../assets/gainers/pepe.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import LeftHeader from "@/components/LeftHeader";
import { WalletContext } from "@/providers/WalletProvider";
import RightMain from "../MainLayout/RightMain";

const SwapPage = () => {
  const [showSwapForm, setShowSwapForm] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup1, setOpenPopup1] = useState(false);
  const [showAllTokens, setShowAllTokens] = useState(false);
  const [showAllTokens1, setShowAllTokens1] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);
  const [selectedToken1, setSelectedToken1] = useState(null);

  const { navbarTrigger, setNavbarTrigger, isMobile, originalData } =
    useContext(WalletContext);
  const handleShowSwap = () => {
    setShowSwapForm(!showSwapForm);
  };

  const handleClose = () => {
    setShowSwapForm(false);
  };

  const handleSeeMore = () => {
    setShowAllTokens(true);
    setOpenPopup(true);
  };

  const handleSeeMore1 = () => {
    setShowAllTokens1(true);
    setOpenPopup1(true);
  };

  const popupRef = useRef();
  const popupRef1 = useRef();

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenPopup(false);
      setOpenPopup1(false);
    }
  };

  const handleBackgroundClick1 = (e) => {
    if (popupRef1.current === e.target) {
      setOpenPopup1(false);
    }
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleTokenClick = (token) => {
    // Update the selectedToken state when a token is clicked
    setSelectedToken(token);
    setOpenPopup(false);
    setOpenPopup1(false);
  };

  const handleTokenClick1 = (token) => {
    // Update the selectedToken state when a token is clicked in openPopup1
    setSelectedToken1(token);
    setOpenPopup1(false);
  };

  return (
    <>
      {/* ------------ Popup Main ---------- */}
      {isMobile && (
        <div className="lg:hidden block">
          {showSwapForm && <SwapFrom handleClose={handleClose} />}
        </div>
      )}
      <div
        className={`${
          isMobile && showSwapForm ? "hidden" : "lg:grid-cols-10"
        } lg:grid  lg:divide-x`}
      >
        <div className="lg:col-span-6 pt-16  px-10 relative">
          <div className="">
            <LeftHeader
              title={"Swap & Bridge "}
              mobileImg={Ham}
              navbarTrigger={navbarTrigger}
              setNavbarTrigger={setNavbarTrigger}
              isMobile={isMobile}
              iconImg1={Settings}
              iconImg2={Note}
            />
          </div>
          <div className="flex flex-col py-7 px-2">
            <div className="flex flex-col space-y-1">
              <p className="px-4 font-semibold  text-xs xl:text-sm md:text-sm">
                From
              </p>
              <div
                className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid cursor-pointer"
                onClick={handleSeeMore}
              >
            

                {selectedToken ? (
                  <div className="flex flex-row gap-2 items-center ">
                    <Image
                      alt=""
                      src={selectedToken.image}
                      width={40} // replace with your desired width
                      height={40}
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center ">
                        <p className="font-semibold xl:text-lg text-sm">
                          {selectedToken.symbol.toUpperCase()}
                        </p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                      <p className="text-xs text-[#6F6E7A]">
                        {selectedToken.name}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row gap-2 items-center">
                    <Image alt="" src={BNB} />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center ">
                        <p className="font-semibold xl:text-lg text-sm">BCB</p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                      <p className="text-xs text-[#6F6E7A]">Binance Coin</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-row gap-2 items-center">
                  <p className="font-semibold text-sm">0x53A...e4af</p>
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
              </div>
            </div>

            {openPopup && (
              <div
                className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
                ref={popupRef}
                onClick={handleBackgroundClick}
              >
                <div className="bg-white rounded-3xl p-5   ">
                  <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 items-center overflow-y-auto max-h-[50vh]">
                    {originalData.map((item, index) => (
                      <div
                        className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
                        key={index}
                        onClick={() => handleTokenClick(item)}
                      >
                        <div className="grid place-items-center">
                          <img
                            alt={item.symbol}
                            src={item?.image}
                            className="xl:h-12 xl:w-12 w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-center xl:text-sm text-xs md:text-xs">
                            {item.symbol.toUpperCase()}
                          </p>
                          <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                            <span>$</span> {item?.current_price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <button
                    className="text-[#FF4085] cursor-pointer mt-4 top-1 right-1"
                    onClick={handleClosePopup}
                  >
                    X
                  </button> */}
                </div>
              </div>
            )}

            {openPopup1 && (
              <div
                className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
                ref={popupRef1}
                onClick={handleBackgroundClick1}
              >
                <div className="bg-white rounded-3xl p-5 ">
                  <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 items-center max-h-[50vh]  overflow-y-auto">
                    {originalData.map((item, index) => (
                      <div
                        className="md:flex flex-col space-y-1 items-center cursor-pointer hover:-translate-y-1 duration-500"
                        key={index}
                        onClick={() => handleTokenClick1(item)}
                      >
                        <div className="grid place-items-center">
                          <img
                            alt={item.symbol}
                            src={item?.image}
                            className="xl:h-12 xl:w-12 w-8 h-8 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-center xl:text-sm text-xs md:text-xs">
                            {item.symbol.toUpperCase()}
                          </p>
                          <p className="text-[#A09FAA] flex gap-1 xl:text-sm text-xs md:text-xs">
                            <span>$</span> {item?.current_price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="text-[#FF4085] cursor-pointer mt-4 top-1 right-1"
                    onClick={handleClosePopup}
                  >
                    X
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-center xl:-mt-6 xl:-mb-12 -mt-2 -mb-7 z-10">
              <Image
                alt=""
                src={SwapButton}
                className="w-14 h-14 xl:w-24 xl:h-24"
              />
            </div>

            <div className="flex flex-col cursor-pointer">
              <p className="px-6 pt-2 font-semibold  text-xs xl:text-sm md:text-sm">
                To
              </p>

              <div
                className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid"
                onClick={handleSeeMore1}
              >
                {selectedToken1 ? (
                  <div className="flex flex-row gap-2 items-center ">
                    <Image
                      alt=""
                      src={selectedToken1.image}
                      width={40} // replace with your desired width
                      height={40}
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center ">
                        <p className="font-semibold xl:text-lg text-sm">
                          {selectedToken1.symbol.toUpperCase()}
                        </p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                      <p className="text-xs text-[#6F6E7A]">
                        {selectedToken1.name}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row gap-2 items-center">
                    <Image alt="" src={Etherum} />
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 items-center">
                        <p className="font-semibold xl:text-lg text-sm">ETH</p>
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                      <p className="text-xs text-[#6F6E7A]">Ethereum</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-row gap-2 items-center">
                  <p className="font-semibold text-sm">0x53A...e4af</p>
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1 mt-6">
              <div className="flex flex-row justify-between items-center">
                <p className="px-4 pt-2 font-semibold  text-xs xl:text-sm md:text-sm">
                  You Pay
                </p>
                <p className="text-xs px-4 text-[#6F6E7A]">
                  Balance: 7,432 USD
                </p>
              </div>
              <div className="rounded-full xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-row justify-between border border-solid">
                <div className="flex flex-row gap-2 items-center">
                  <Image alt="" src={ETHBNB} />
                  <div className="flex flex-col">
                    <p className="font-semibold xl:text-lg text-sm">800.23</p>
                    <p className="text-xs text-[#6F6E7A]">$23.02</p>
                  </div>
                </div>
                <CustomButton3 title="Max" buttonColor="[#EEEEF1]" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 mt-2 mb-8">
              <div className="flex flex-row justify-between items-center pt-3">
                <p className="px-4  pt-2 font-semibold text-xs xl:text-sm md:text-sm">
                  You Get
                </p>
                <p className="text-[#FF4085] px-4 text-xs xl:text-sm md:text-sm">
                  Show all
                </p>
              </div>
              <div className="rounded-3xl xl:pl-4 pl-2 xl:pr-8 pr-2 xl:py-2 py-1 flex flex-col  border border-solid ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row xl:gap-2 gap-1 items-center">
                    <Image alt="" src={BNBUSDT} />
                    <div className="flex flex-col">
                      <p className="font-semibold xl:text-lg text-sm">
                        270.6598
                      </p>
                      <div className="flex flex-row justify-center gap-2">
                        <p className="text-xs text-[#6F6E7A]">$23.02</p>
                        <p className="text-xs text-[#6F6E7A]">Across</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <CustomButton3
                      title="Recommended"
                      buttonColor="[#EEEEF1]"
                    />
                    <div className="flex rounded-full bg-[#EEEEF1] h-10 w-10 items-center justify-center">
                      <MdOutlineKeyboardArrowUp className="text-black h-5 w-5" />
                    </div>
                  </div>
                </div>
                <hr className="my-4" />

                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col space-y-1 items-center   ">
                    <Image alt="" src={Gas} />
                    <p className="font-semibold text-sm xl:text-base">$0.37</p>
                  </div>
                  <div className="border"></div>

                  <div className="flex flex-col space-y-1 items-center ">
                    <Image alt="" src={Dollar} />
                    <p className="font-semibold xl:text-base">$0.00</p>
                  </div>
                  <div className="border"></div>

                  <div className="flex flex-col space-y-1 items-center">
                    <Image alt="" src={Clock} />
                    <p className="font-semibold xl:text-base">3 min</p>
                  </div>
                  <div className="border"></div>

                  <div className="flex flex-col space-y-1 items-center">
                    <Image alt="" src={Layers} />
                    <p className="font-semibold xl:text-base">1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <CustomButton
                name="Swap"
                img={Swap2}
                onClick={handleShowSwap}
                bgColor="black"
                nameColor="white"
              />
            </div>
          </div>
        </div>
        {/* </div> */}

        <hr className="lg:hidden mt-10 lg:mt-0" />

        {/* ------------ Rightside Main ---------- */}
        <div className={`lg:col-span-4 ${!showSwapForm ? "pt-14 px-10" : ""}`}>
          {showSwapForm ? (
            <SwapFrom handleClose={handleClose} />
          ) : (
            <>
              <Header />
              <RightMain />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SwapPage;
