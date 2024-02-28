"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import otppopup from "../../assets/Dashboard/otppopup.png";
import CustomButton from "@/components/CustomButton";

const WalletComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Your useEffect code here
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
      >
        Create Wallet
      </button>
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"
            onClick={togglePopup}
          ></div>
          <div className="fixed bottom-0 left-0 w-full  bg-white shadow-lg px-6  rounded-t-3xl z-50 transition-all duration-1000 h-[60%] lg:h-auto overflow-y-auto">
            <div className="flex justify-center mt-1">
              <div
                onClick={togglePopup}
                className="w-14 h-1 bg-gray-400 cursor-pointer rounded-full"
              ></div>
            </div>
            <div>
              <Image
                alt=""
                src={otppopup}
                className="m-10 justify-center items-center"
              />
              <p className="font-bold justify-center items-center m-4">
                Email Verification Complete
              </p>
              <Link href="/">
                <CustomButton name="Go to Home Screen" bgColor="black" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletComponent;
