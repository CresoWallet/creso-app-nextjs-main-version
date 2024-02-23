"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import check from "../../assets/eoa/checkmark.png";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import PasswordInput from "@/components/common/PasswordInput";
import { createEOAWalletApi } from "@/clientApi/auth";

function ImportWallet() {
  const seedPhraseLength = 12;
  const [userInput, setUserInput] = useState(Array(seedPhraseLength).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleInputChange = (index, value) => {
    const newUserInput = [...userInput];
    newUserInput[index] = value;
    setUserInput(newUserInput);
  };

  const handleVerify = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const res = await createEOAWalletApi({ walletName: "EOA" });
      const generatedPhrase = res?.data?.data?.seedPhrase || "";
      const userInputPhrase = userInput.join(" ");
      if (generatedPhrase === userInputPhrase) {
        setVerificationStatus("Success");
      } else {
        setVerificationStatus("Failure");
      }
    } catch (err) {
      console.error("Error verifying recovery phrase:", err);
      setVerificationStatus("Error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // This function will be called when the user clicks the "Confirm" button
  };

  const toggleFieldVisibility = (fieldName) => {
    switch (fieldName) {
      case "seedPhrase":
        setShowSeedPhrase(!showSeedPhrase);
        break;
      case "newPassword":
        setShowPassword(!showPassword);
        break;
      case "confirmPassword":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <HeaderEOA title="Import Existing Wallet " className="md:hidden block" />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />

        <div className="text-center mx-auto mb-12 max-w-xl">
          <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
            {" "}
            <Link href="/welcome">
              <BsArrowLeft />
            </Link>
            Import Existing Wallet
          </h1>
          <div className="md:hidden flex gap-4 mb-4 ml-2 font-bold text-lg items-center "></div>
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Import Wallet From Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and password after
            you can access your creso wallet.
          </p>
        </div>
        <h2 className="my-4 max-w-md font-bold md:mb-2 mb-1 mx-4">
          Secret Recovery Phrase
          <button
            type="button"
            className="text-[#FF4085] m-2 justify-end items-end font-normal"
            onClick={() => toggleFieldVisibility("seedPhrase")}
          >
            {showSeedPhrase ? "Hide" : "Show"}
          </button>
        </h2>

        <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
          {userInput.map((value, index) => (
            <input
              key={index}
              type={showSeedPhrase ? "text" : "password"}
              className="rounded-full border text-center text-sm md:text-base break-words m-1 p-1 lg:p-2"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="items-center justify-center">
          <form className="mx-4" onSubmit={handleSubmit}>
            <div className="my-4 mx-auto max-w-md">
              <PasswordInput
                label=" New Password"
                value={password}
                onChange={handlePasswordChange}
                showPassword={showPassword}
                onToggle={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
              <PasswordInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                showPassword={showConfirmPassword}
                onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            {passwordError && <p className="text-red-500 ">{passwordError}</p>}
            {error && <p className="text-red-500 text-center ">{error}</p>}
            {/* Terms of Use */}
            <div className="flex items-center   pb-2">
              <button
                className="rounded-full p-2 border-black focus:outline-none"
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked ? (
                  <div className="w-6 h-6 rounded-full border my-2 mr-1 border-black"></div>
                ) : (
                  <Image alt="" src={check} className="w-8 h-8 my-1 " />
                )}
              </button>
              <span className="ml-2">
                I agree to creso
                <span className="text-[#FF4085] ml-1">Terms of Use</span>
              </span>
            </div>

            <div className="text-center  w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
              <button className="p-2.5" onClick={handleVerify}>
                Verify
              </button>
            </div>
            {verificationStatus && (
              <p
                className={
                  verificationStatus === "Success"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {verificationStatus === "Success"
                  ? "Recovery phrase verified successfully."
                  : "Failed to verify recovery phrase."}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImportWallet;
