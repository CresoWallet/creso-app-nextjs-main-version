// pages/index.js
"use client";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]); // Assuming 4 OTP fields
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value !== "" && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputPaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData("text");
    for (let i = 0; i < Math.min(pastedValue.length, otpValues.length); i++) {
      handleInputChange(i, pastedValue[i]);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold">OTP Input</h1>
        <div className="flex items-center justify-center">
          {otpValues.map((value, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              value={value}
              maxLength={1}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handleInputPaste}
              className="h-12 w-12 border border-gray-300 rounded-full mx-1 text-center focus:outline-none focus:ring focus:border-blue-300"
            />
          ))}
          <button className="btn btn-blue  ">Submit</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
