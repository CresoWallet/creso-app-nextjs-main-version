"use client";
import React, { useState, useEffect } from "react";

const WalletComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupRef = React.createRef();

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 lg:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-24"
      >
        Create Wallet
      </button>
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={togglePopup}
          ></div>
          <div
            ref={popupRef}
            className="fixed bottom-0 left-0 w-full h-auto border-black border-2 bg-white shadow-lg px-6  rounded-t-3xl z-50 lg:hidden transition-all duration-1000"
          >
            <div className="flex justify-center mt-1">
              <div
                onClick={togglePopup}
                className="w-14 h-1 bg-gray-400 cursor-pointer rounded-full"
              ></div>
            </div>
            <p className="text-center mt-4">
              This is the wallet creation popup content.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletComponent;
