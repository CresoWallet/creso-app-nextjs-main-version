"use client";
import React, { useContext, useState } from "react";
import OTPInput from "react-otp-input";
import "./OTP.css";
import { enqueueSnackbar } from "notistack";
import { sendOTPMail, verifyEmailApi, resendOTPApi, verifyOTP } from "@/clientApi/auth";
import CustomButton from "../CustomButton";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";

const OTP = () => {
  const [otp, setOtp] = useState("");
  console.log("🚀 ~ OTP ~ otp:", otp)
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const { userEmail } = useContext(WalletContext);
  console.log("🚀 ~ OTP ~ userEmail:", userEmail)

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleVerifyOTP = async () => {
    if (!userEmail) {
      enqueueSnackbar(`Please enter OTP`, {
        variant: "error",
      });
    } else {
      setLoading(true);
      try {
        const res = await verifyEmailApi({
          email: userEmail,
          otp: Number(otp),
        });
        console.log("🚀 ~ handleVerifyOTP ~ res:", res)
        if (res?.status === 200) {
          enqueueSnackbar(`Email verified`, {
            variant: "success",
          });
          setLoading(false);
          router.push(`/`);
        }
      } catch (err) {
        console.log("err : ", err);
        enqueueSnackbar(`${err.response.data.message}`, {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };
  const handleSendOTPMail = async () => {

    setLoading(true);

    try {
      const res = await resendOTPApi({
        email: userEmail,
      });
      console.log("🚀 ~ handleSendOTPMail ~ res:", res)
      if (res?.status === 200) {
        enqueueSnackbar(`otp resed successfully`, {
          variant: "success",
        });
        setLoading(false);
      }
    } catch (err) {
      console.log("err : ", err);
      // enqueueSnackbar(`${err.response.data.message}`, {
      //   variant: "error",
      // });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col ">
        <hr className="w-full mt-3" />
      </div>

      <div className="flex items-center justify-center w-full flex-col">
        <p className="text-sm font-bold mb-3 ">
          An email with a verication code was just sent to
        </p>
        <p className="px-3 py-1 bg-blue-700 text-sm text-white rounded-full mb-5">
          {userEmail}
        </p>
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

        <button
          onClick={() => handleVerifyOTP()}
          className="bg-[#FF4085] rounded-full p-2 m-5"
        >
          verifyOTP
        </button>
        <div className="flex justify-start text-sm text-black mt-2 ">
          <p>Not received?</p>
          &nbsp;
          <p
            className="text-[#FF4085] cursor-pointer"
            onClick={() => {
              handleSendOTPMail();
            }}
          >
            Resend
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
