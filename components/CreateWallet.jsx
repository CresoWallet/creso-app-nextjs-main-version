"use client";
`  `;
import React, { useState } from "react";
import Image from "next/image";
import Ethereum from "../assets/Dashboard/etherum.png";
import Wallet from "../assets/Dashboard/walletPink.png";
import WalletPurple from "../assets/Dashboard/walletPurple.png";
import CustomButton3 from "./CustomButton3";
import { BiChevronRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import LegacyWallet from "./LegacyWallet";
import { network } from "@/utils/data/coinlist";
import { VscFeedback } from "react-icons/vsc";
import UnlockWallet from "./createWallet/UnlockWallet";
import CreateAA from "./createWallet/CreateAA";
import CreateEOA from "./createWallet/CreateEOA";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
<VscFeedback />;

const CreateWallet = ({ handleClose }) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const style = { color: "white" };
  const hoverStyle = { color: "black" };

  const [step, setStep] = useState(0);

  const handleClickEOA = () => {
    if (
      localStorage.getItem("walletPassword") &&
      localStorage.getItem("encryptedSeedPhrase")
    ) {
      setStep(1);
    } else if (
      !localStorage.getItem("walletPassword") &&
      localStorage.getItem("encryptedSeedPhrase")
    ) {
      setStep(3);
    } else if (!localStorage.getItem("encryptedSeedPhrase")) {
      router.push("/welcome");
      setStep(0);
    } else {
      enqueueSnackbar(`Couldn't create wallet at this time!`, {
        variant: "error",
      });
    }
  };

  return (
    <div className={`lg:block relative `}>
      {step === 0 && (
        <div className="grid place-items-center rounded-full bg-black h-8 w-8 absolute cursor-pointer md:-ml-4 ml-2 lg:mt-0 z-[99]">
          <IoIosClose
            className="text-white h-7 w-7 cursor-pointer"
            onClick={handleClose}
          />
        </div>
      )}

      {step === 3 && (
        <UnlockWallet
          handleBackButton={() => setStep(0)}
          handleConfirm={() => setStep(1)}
        />
      )}

      {/* {wallet && (
        <LegacyWallet
          handleClose={handleClose}
          handleBackButton={() => setWallet(false)}
          type={type}
          networks={network}
        />
      )} */}

      {step === 1 && (
        <CreateEOA
          handleClose={handleClose}
          handleBackButton={() => setStep(0)}
          type={"EOA"}
          networks={network}
        />
      )}

      {step === 2 && (
        <CreateAA
          handleClose={handleClose}
          handleBackButton={() => setStep(0)}
          type={"AA"}
          networks={network}
        />
      )}

      {step === 0 && (
        <div className="flex flex-col xl:mx-8 md:mx-4 mt-10 space-y-8">
          <p className="text-black font-bold text-xl xl:ml-0 md:ml-2">
            Create Wallet
          </p>

          <div className="flex flex-row items-center gap-2">
            <Image alt="" src={Ethereum} className="w-10 h-10" />
            <p className="font-semibold">Mumbai Testnet </p>
            {/* <NetworkSelection /> */}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="border border-solid rounded-3xl border-[#E5E5F0] xl:py-4 md:py-2 xl:px-6 md:px-1 px-4 py-2">
              <div
                className="flex flex-row items-start xl:gap-2 gap-2 md:gap-1 cursor-pointer"
                onClick={handleClickEOA}
              >
                <Image
                  alt=""
                  src={Wallet}
                  className="xl:w-12 xl:h-12 md:w-8 md:h-8"
                />
                <div className="flex flex-col xl:space-y-2 md:space-y-1  ">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-semibold md:text-xs">Legacy Wallet</p>
                      <p className="text-[#A09FAA] text-sm md:text-xs">EOA</p>
                    </div>
                    <CustomButton3
                      title="Popular"
                      buttonColor="[#EEEEF1]"
                      titleColor="black"
                    />

                    <div className="flex rounded-full bg-black xl:h-8 xl:w-8 h-6 w-6 items-center justify-center cursor-pointer">
                      <BiChevronRight className="text-white h-4 w-4 hover:translate-x-1 duration-500" />
                    </div>
                  </div>
                  <p className="text-xs text-[#A09FAA]">
                    Compatible with all Daaps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-solid rounded-3xl border-[#E5E5F0] xl:py-4 md:py-2 xl:px-6 md:px-1 px-4 py-2">
              <div
                className="flex flex-row items-start xl:gap-2 gap-2 md:gap-1 cursor-pointer"
                onClick={() => setStep(2)}
              >
                <Image
                  alt=""
                  src={WalletPurple}
                  className="xl:w-12 xl:h-12 md:w-8 md:h-8"
                />
                <div className="flex flex-col xl:space-y-2 md:space-y-1  cursor-pointer">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-semibold md:text-xs">Smart Wallet</p>
                      <p className="text-[#A09FAA] text-sm md:text-xs">AA</p>
                    </div>
                    <CustomButton3
                      title="Recommend"
                      buttonColor="[#EEEEF1]"
                      titleColor="black"
                    />
                    <div className="flex rounded-full bg-black xl:h-8 xl:w-8 h-6 w-6 items-center justify-center group cursor-pointer">
                      <BiChevronRight
                        className="text-white h-4 w-4 hover:translate-x-1 duration-500"
                        // onClick={handleAAClick}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#A09FAA]">
                    Compatible with all Daaps; lower Gas fees; only supports
                    paying gas with native token; does not support advanced
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href="https://forms.gle/GBEKLjSH7hxQiuPv8"
              target="_blank"
              className={`${hover ? "bg-white border border-[#2100EC] " : "bg-[#2100EC]"
                } fixed bottom-24 lg:bottom-12 right-12 cursor-pointer shadow-2xl z-50 h-20 w-20 grid place-items-center rounded-full `}
            >
              <div className="absolute grid place-items-center">
                <VscFeedback style={hover ? hoverStyle : style} size={30} />
              </div>
              {hover && (
                <p className="absolute p-2 rounded-lg font-semibold  -top-12 bg-black text-white ">
                  {" "}
                  Feedback
                </p>
              )}
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CreateWallet;
