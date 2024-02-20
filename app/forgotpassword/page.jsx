"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import check from "../../assets/eoa/checkmark.png";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import PasswordInput from "@/components/common/PasswordInput";

function ForgotPassword() {
  // State variables
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false); // Define isChecked state
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle confirmation of new password
  const handleNewPasswordConfirm = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (!isChecked) {
      setError("Please agree to the Terms of Use.");
      return;
    }
  };

  // Function to toggle visibility of password fields
  const toggleFieldVisibility = (fieldName) => {
    switch (fieldName) {
      case "newPassword":
        setShowNewPassword(!showNewPassword);
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
      {/* Header */}
      <HeaderEOA title="Create New Password" className="md:hidden block" />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />

        <div className="text-center mx-auto mb-12 max-w-xl">
          {/* Page title */}
          <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
            {" "}
            <Link href="">
              <BsArrowLeft />
            </Link>
            Create New Password
          </h1>
          <div className="flex gap-4 mb-4 ml-2 md:mt-6 font-bold text-lg items-center "></div>
        </div>

        {/* Form for creating or confirming password */}
        <div className="items-center justify-center">
          <form className="mx-4">
            {/* New Password field */}
            <PasswordInput
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showNewPassword}
              onToggle={() => toggleFieldVisibility("newPassword")}
            />

            {/* Confirm Password field */}
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onToggle={() => toggleFieldVisibility("confirmPassword")}
            />

            {/* Display password error if any */}
            {passwordError && <p className="text-red-500 ">{passwordError}</p>}
            {/* Display general error if any */}
            {error && <p className="text-red-500 text-center ">{error}</p>}
            {/* Terms of Use */}
            <div className="flex items-center  mt-14 pb-2">
              <button
                className="rounded-full p-2 border-black focus:outline-none"
                onClick={() => setIsChecked(!isChecked)}
              >
                {/* Checkbox or checkmark icon based on isChecked state */}
                {isChecked ? (
                  <div className="w-6 h-6 rounded-full border my-2 mr-1 border-black"></div>
                ) : (
                  <Image alt="" src={check} className="w-14 h-7 my-1 " />
                )}
              </button>
              <span className="ml-2 text-sm lg:text-base">
                I understand that Creso cannot recover this password for me.
                <span className="text-[#FF4085] ml-1">Terms of Use</span>
              </span>
            </div>

            {/* Button to confirm password or submit forgot password */}
            <div className="text-center  w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
              <button
                className="p-2.5"
                onClick={
                  isForgotPassword
                    ? handleForgotPassword
                    : handleNewPasswordConfirm
                }
              >
                {isForgotPassword ? "Submit" : "Create New Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
