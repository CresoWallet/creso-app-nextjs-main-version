"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import PasswordInput from "@/components/common/PasswordInput";
import CustomCheckbox from "@/components/customcheckbox";
import CustomButton from "@/components/CustomButton";
import { changePasswordApi } from "@/clientApi/auth";
// import { useRouter } from "next/router";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const router = useRouter();

  const handleNewPasswordConfirm = async (authToken) => {
    setError("");
    setCurrentPasswordError("");
    setPasswordError("");

    if (!currentPassword || !password || !confirmPassword) {
      setError("Please fill all required fields.");
    } else if (password.length < 8) {
      setError("New password must be at least 8 characters long.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (!isChecked) {
      setError("Please agree to the Terms of Use.");
    } else {
      setError("");
      router.push(`/`);
    }

    try {
      const passwords = {
        currentPassword: currentPassword,
        newPassword: password,
      };
      const res = await changePasswordApi(passwords);
      console.log(res.data);
      // Handle success message, redirection, or any other action as needed
    } catch (error) {
      console.error("Error changing password:", error);
      setError("Failed to change password. Please try again.");
    }
  };

  const toggleFieldVisibility = (fieldName) => {
    switch (fieldName) {
      case "currentPassword":
        setShowCurrentPassword(!showCurrentPassword);
        break;
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
      <HeaderEOA title="Create New Password" className="md:hidden block" />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />
        <div className="text-center mx-auto mb-12 max-w-xl">
          <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
            <Link href="">
              <BsArrowLeft />
            </Link>
            Create New Password
          </h1>
          <div className="flex gap-4 mb-4 ml-2 md:mt-6 font-bold text-lg items-center "></div>
        </div>
        <div className="items-center justify-center">
          <form className="mx-4">
            <PasswordInput
              label="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              showPassword={showCurrentPassword}
              onToggle={() => toggleFieldVisibility("currentPassword")}
            />
            <PasswordInput
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showNewPassword}
              onToggle={() => toggleFieldVisibility("newPassword")}
            />
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onToggle={() => toggleFieldVisibility("confirmPassword")}
            />
            {currentPasswordError && (
              <p className="text-red-500 ">{currentPasswordError}</p>
            )}
            {passwordError && <p className="text-red-500 ">{passwordError}</p>}
            {error && <p className="text-red-500 text-center ">{error}</p>}
            <div className="flex items-center  mt-14 pb-2">
              <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
              <span className="ml-2 text-sm lg:text-base">
                I understand that Creso cannot recover this password for me.
                <span className="text-[#FF4085] ml-1">Terms of Use</span>
              </span>
            </div>
            <div className="text-center w-full mt-6">
              <CustomButton
                name="Create New Password"
                onClick={handleNewPasswordConfirm}
                bgColor="black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
