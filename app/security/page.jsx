"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import SecurityImage from "../../assets/security/securityImage.png";
import Account from "@/components/Account";
import Lock from "../../assets/security/Lock.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";
import { WalletContext } from "@/providers/WalletProvider";
import { IoArrowBackCircle } from "react-icons/io5";
import Header from "@/components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const SecurityPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const { showAccount, setShowAccount } = useContext(WalletContext);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0 pt-6 md:pt-14">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />

        <div
          className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 hidden lg:block ${
            showAccount ? "!block" : ""
          }`}
        >
          <div
            className={`${
              showAccount ? "lg:hidden block" : "lg:block hidden"
            } flex flex-col space-y-3`}
          ></div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <BsArrowLeft
                className="h-6 w-6 lg:hidden"
                onClick={() => setShowAccount(false)}
              />

              <p className="text-xl font-semibold ml-2">Security</p>
            </div>

            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-6 md:gap-4 gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Language} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">ENG</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Currency} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">USD</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center xl:py-16 py-8">
            <Image alt="" src={SecurityImage} className="w-72" />
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col space-y-2 items-center">
              <Image alt="" src={Lock} />
              <p className="text-xl font-semibold">Auto-Lock</p>
            </div>
            <div className="text-center">
              <p className="text-[#A09FAA] text-sm">
                Choose the amount of time before
                <br /> the application automatically locks
              </p>
            </div>
            <div className="flex items-center justify-center xl:mt-12 mt-8">
              <button className="text-white px-6 py-4 bg-black flex flex-row items-center justify-between gap-24 rounded-full">
                <p>Never</p>
                <MdKeyboardArrowDown />
              </button>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex flex-row space-y-2 items-center justify-between px-4">
              <span
                className="text-xl 
                font-semibold flex gap-2"
              >
                <Image alt="" src={Lock} className="h-8 w-8" />
                Auto-Lock
              </span>

              <button className="  flex flex-row   rounded-full items-center">
                <p className="text-[#2100EC]">Never</p>
                <RiArrowRightSLine />
              </button>
            </div>
            <div className="pt-4 flex gap-4 px-6">
              <AiTwotoneInfoCircle className="h-8 w-8" />
              <p className="text-[#A09FAA] text-sm">
                Choose the amount of time before the application automatically
                locks
              </p>
            </div>
            <div className="flex items-center justify-center xl:mt-12 mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
