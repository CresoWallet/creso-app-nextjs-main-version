"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Account from "@/components/Account";
import { MdKeyboardArrowDown } from "react-icons/md";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import SessionImage from "../../assets/security/image.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";
import { WalletContext } from "@/providers/WalletProvider";
import { IoArrowBackCircle } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";

const SessionPage = () => {
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

        {/* 
        <div className="col-span-4">
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
            <div className="flex xl:hidden md:hidden justify-center gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Language} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black hover:font-bold">ENG</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Currency} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black hover:font-bold">USD</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>

            <div
              className={`col-span-4 ${
                isMobile ? "mt-2" : "mt-16"
              } xl:mx-8 md:mx-4 mx-2`}
            > 
              <Account user={user} setShowModal={setShowModal} />
            </div>
          </div>
        </div>*/}
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

          <div className="flex flex-row justify-between items-center  ">
            {/* <p className="xl:text-xl md:text-xl text-lg  font-semibold">
              V1 Sessions cccc
            </p> */}

            <div className="flex flex-row items-center">
              <BsArrowLeft
                className="h-6 w-6 lg:hidden"
                onClick={() => setShowAccount(false)}
              />
              <p className="text-xl font-semibold ml-2"> V1 Sessions</p>
            </div>
            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center  xl:gap-6 md:gap-4 gap-4">
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
          <div className="flex justify-center items-center xl:py-24 py-16">
            <Image alt="" src={SessionImage} className="w-48 h-64" />
          </div>
          <div className="text-center">
            <p className="text-[#A09FAA]">
              No Active Wallet Connect motive
              <br /> Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionPage;
