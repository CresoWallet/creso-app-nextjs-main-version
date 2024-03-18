"use client";
import React, { useContext, useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import "./OTP.css";
import { enqueueSnackbar } from "notistack";
import {
  sendOTPMail,
  verifyEmailApi,
  resendOTPApi,
  verifyOTP,
} from "@/clientApi/auth";
import CustomButton from "../CustomButton";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const OTP = () => {
  const [otp, setOtp] = useState("");
  console.log("🚀 ~ OTP ~ otp:", otp);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [sendOtpLoading, setOtpLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const { handleAuthentication } = useUser();
  const router = useRouter();

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      router.push("/");
    }
  }, []);

  const handleVerifyOTP = async () => {
    setVerifyLoading(true);
    try {
      const res = await verifyEmailApi({
        email: userEmail,
        otp: Number(otp),
      });
      console.log("🚀 ~ handleVerifyOTP ~ res:", res);
      if (res?.status === 200) {
        await handleAuthentication();
        router.push(`/welcome`);
        enqueueSnackbar(`Email verified`, {
          variant: "success",
        });
        setVerifyLoading(false);
      }
    } catch (err) {
      console.log("err : ", err);
      if (err?.response?.data?.message) {
        enqueueSnackbar(`${err.response.data.message}`, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(`Something went wrong!`, {
          variant: "error",
        });
      }
    } finally {
      setVerifyLoading(false);
    }
  };
  const handleSendOTPMail = async () => {
    setOtpLoading(true);
    try {
      const res = await resendOTPApi({
        email: userEmail,
      });
      console.log("🚀 ~ handleSendOTPMail ~ res:", res);
      if (res?.status === 200) {
        enqueueSnackbar(`OTP has been sent to your email.`, {
          variant: "success",
        });
        setOtpLoading(false);
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        enqueueSnackbar(`${err.response.data.message}`, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(`Something went wrong!`, {
          variant: "error",
        });
      }
    } finally {
      setOtpLoading(false);
    }
  };
  return (
    <div className=" h-[100vh] w-full  flex flex-col justify-center items-center ">
      {/* <Image src={wizzLogo} className="w-32 mb-10" alt="wizzLogo" /> */}
      <div className="!bg-[#FFC8DC] border-[#FF4085] border px-4 lg:px-14 py-16 w-[350px] md:w-[500px] rounded-2xl flex flex-col gap-6 ">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl">OTP Verification</h1>
          <p className=" tracking-wide">Enter the OTP you received at Email</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-5">
            <OTPInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              inputStyle="otp-style-input outline-none  caret-regal-blue py-1 rounded mx-3 text-black"
              containerStyle={"otp-container"}
              className="flex justify-center items-center"
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    width: "50px",
                    height: "60px",
                    fontSize: "25px",
                    textAlign: "center",
                    borderRadius: "6px",
                    borderWidth: "2px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    color: "black",
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <button
            className={`px-14 py-2 w-fit bg-[#FF4085] rounded-full text-white font-semibold`}
            onClick={() => !verifyLoading && handleVerifyOTP()}
          >
            {verifyLoading ? (
              <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
            ) : (
              "Verify"
            )}
          </button>
        </div>
        <div className="flex justify-center text-lg text-black mt-2 ">
          <p>Not received?</p>
          &nbsp;
          {sendOtpLoading ? (
            <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
          ) : (
            <p
              className="text-[#FF4085] cursor-pointer"
              onClick={() => {
                handleSendOTPMail();
              }}
            >
              Resend
            </p>
          )}
        </div>
      </div>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};

export default OTP;
