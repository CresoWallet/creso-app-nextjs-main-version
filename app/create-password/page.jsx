"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import check from "../../assets/eoa/checkmark.png";
import lockpassword from "../../assets/eoa/Lockpassword.png";
import lock from "../../assets/eoa/Lock.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import PasswordInput from "@/components/common/PasswordInput";
import CustomButton4 from "@/components/CustomButton4";
import CustomCheckbox from "@/components/TestCustomcheckbox";
import { createEOAWalletApi } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";
import { enqueueSnackbar } from "notistack";
// import {
//   encryptData,
//   decryptData,
//   storeEncryptedDataInLocalStorage,
//   retrieveEncryptedDataFromLocalStorage,
// } from "@/utils/encryption";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonI, setButtonI] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedError, setCheckedError] = useState("");
  const [walletName, setWalletName] = useState("");
  const router = useRouter();
  const { seedPhrase, setSeedPhrase } = useContext(WalletContext);

  const handleCreatePassword = async (event) => {
    event.preventDefault();
    if (!walletName) {
      setPasswordError("Please enter a wallet name.");
    } else if (!password || !confirmPassword) {
      setPasswordError("Please enter both password and confirm password.");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (!isChecked) {
      setCheckedError("Please agree to the Terms of Use.");
    } else {
      try {
        setIsLoading(true);
        const createWalletRes = await createEOAWalletApi({ walletName });
        if (createWalletRes) {
          localStorage.setItem("walletName", walletName);
          localStorage.setItem("walletPassword", password);
          localStorage.setItem(
            "seedPhrase",
            createWalletRes?.data?.data?.seedPhrase
          );
          router.push(`/review-recovery-pharse`);
          enqueueSnackbar(`Wallet Successfully Created`, {
            variant: "success",
          });
        }
      } catch (error) {
        if (error?.response?.data?.message) {
          enqueueSnackbar(`${error?.response?.data?.message}`, {
            variant: "error",
          });
        } else {
          enqueueSnackbar(`Error Creating ${walletName} wallet`, {
            variant: "error",
          });
        }
      }
      setIsLoading(false);
    }
  };
  const toggleShowNewPassword = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  const handleWalletNameChange = (event) => {
    setWalletName(event.target.value);
  };

  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword}
        color1="[#D0F500]"
        hrColor1="black"
        borderColor1="black"
        imageSrc2={lock}
        color2="white"
        borderColor2="gray-300"
        textColor2="gray-400"
        hrColor2="gray-300"
        imageSrc3={phone}
        color3="white"
        textColor3="gray-300"
        borderColor3="grey-300"
      />

      <hr className="mt-4 w-auto" />
      <div className="text-center hidden sm:block mx-auto mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Create Password
        </h2>
        <p className="mx-auto mt-2">
          This password will unlock your Creso wallet only on this device. Creso
          cannot recover this password.
        </p>
      </div>
      <div className="items-center justify-center mx-4">
        <form onSubmit={handleCreatePassword} className="">
          <div className="my-4 mx-auto max-w-md">
            <span
              htmlFor="walletName"
              className="block text-gray-700 font-bold md:mb-2 mb-1"
            >
              Wallet Name
            </span>
            <input
              type="text"
              id="walletName"
              value={walletName}
              onChange={handleWalletNameChange}
              placeholder="Enter Wallet Name"
              className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
            />
          </div>
          <div className="my-4 mx-auto max-w-md">
            <PasswordInput
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showNewPassword}
              onToggle={toggleShowNewPassword}
            />
          </div>

          <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onToggle={toggleShowConfirmPassword}
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-center ">{passwordError}</p>
          )}

          {/* Terms of Use */}
          <div className="flex items-center md:mb-8 md:mt-2 mt-20 mb-2 mx-auto max-w-md">
            <CustomCheckbox
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                setCheckedError("");
              }}
            />

            <span className="ml-2 ">
              I understand that Creso cannot recover this password for me.
              <span className="text-[#FF4085] ml-1">Learn more</span>
            </span>
          </div>

          {checkedError && (
            <p className="text-red-500 text-center ">{checkedError}</p>
          )}

          <div className="flex items-center justify-center">
            <CustomButton4
              onMouseEnter={() => setButtonI(true)}
              onMouseLeave={() => setButtonI(false)}
              isHovered={buttonI}
              onClick={handleCreatePassword}
              padding="px-14 py-4"
              className={`${buttonI ? "bg-black text-white" : "border-black"}`}
              disabled={
                passwordError ||
                !password ||
                !confirmPassword ||
                !walletName ||
                !isChecked
              }
              isLoading={isLoading}
            >
              Create New Password
            </CustomButton4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
