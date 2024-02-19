"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import Modal from "@/components/modal/Modal";
import AccountHeader from "@/components/AccountHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { useUser } from "@/providers/UserProvider";
import { WalletContext } from "@/providers/WalletProvider";
import { BsArrowLeft } from "react-icons/bs";
import CustomCheckbox from "@/components/customcheckbox";

const LanguagePage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const { showAccount, setShowAccount } = useContext(WalletContext);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

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
                className="h-6 w-6 lg:hidden items-center"
                onClick={() => setShowAccount(false)}
              />

              <p className="text-xl font-semibold ml-2">Language</p>
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

          <div className="">
            <div className="flex flex-col m-4 justify-center">
              <div className="my-4 gap-4 items-center ">
                <span className="text-black gap-2 flex items-center">
                  <CustomCheckbox
                    checked={selectedLanguage === "English"}
                    onChange={() => handleLanguageChange("English")}
                  />
                  English
                </span>
              </div>
              <hr />
              <div className="my-4 gap-4 items-center ">
                <span className="text-black gap-2 flex items-center">
                  <CustomCheckbox
                    checked={selectedLanguage === "Arabic"}
                    onChange={() => handleLanguageChange("Arabic")}
                  />
                  Arabic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
