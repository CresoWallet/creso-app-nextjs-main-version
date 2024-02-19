"use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import check from "../../assets/eoa/checkmark.png";
// import HeaderEOA from "@/components/common/HeaderEOA";
// import { BsArrowLeft } from "react-icons/bs";

// function ImportWallet() {
//   const secretPhrase = [
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//     { word: "", required: true },
//   ];

//   const initialUserInput = Array(secretPhrase.length).fill("");
//   const [userInput, setUserInput] = useState(initialUserInput);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [error, setError] = useState("");
//   const [showSecretPhrase, setShowSecretPhrase] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false); // Define isChecked state

//   const handleInputChange = (index, value) => {
//     const newUserInput = [...userInput];
//     newUserInput[index] = value;
//     setUserInput(newUserInput);
//   };

//   const handleConfirm = () => {
//     // Check if all required fields are filled
//     for (let i = 0; i < secretPhrase.length; i++) {
//       if (secretPhrase[i].required && userInput[i] === "") {
//         setError("Please fill in all required fields.");
//         return;
//       }
//     }
//     // Check if password and confirm password match
//     if (password !== confirmPassword) {
//       setPasswordError("Passwords do not match");
//       return;
//     }
//     // Check if terms are agreed
//     if (!isChecked) {
//       setError("Please agree to the Terms of Use.");
//       return;
//     }

//     setError("");
//     setPasswordError("");
//   };

//   const toggleFieldVisibility = (fieldName) => {
//     switch (fieldName) {
//       case "secretPhrase":
//         setShowSecretPhrase(!showSecretPhrase);
//         break;
//       case "newPassword":
//         setShowNewPassword(!showNewPassword);
//         break;
//       case "confirmPassword":
//         setShowConfirmPassword(!showConfirmPassword);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="h-full md:px-4 py-4 flex flex-col">
//       <HeaderEOA title="Import Existing Wallet " className="md:hidden block" />
//       <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
//         <hr className="mt-6 w-auto" />

//         <div className="text-center mx-auto mb-12 max-w-xl">
//           <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
//             {" "}
//             <Link href="/createwallet1">
//               <BsArrowLeft />
//             </Link>
//             Import Existing Wallet
//           </h1>
//           <div className="md:hidden flex gap-4 mb-4 ml-2 font-bold text-lg items-center "></div>
//           <h2 className="text-xl text-center font-bold mb-4 mt-8">
//             Import Wallet From Secret Recovery Pharse
//           </h2>
//           <p className="mx-auto">
//             Write down this 12-word secret recovery phrase and password after
//             you can access your creso wallet.
//           </p>
//         </div>
//         <h2 className="my-4 max-w-md font-bold md:mb-2 mb-1 mx-4">
//           Secret Recovery Pharse
//           <button
//             type="button"
//             className="text-[#FF4085] m-2 justify-end items-end font-normal"
//             onClick={() => toggleFieldVisibility("secretPhrase")}
//           >
//             {showSecretPhrase ? "Hide" : "Show"}
//           </button>
//         </h2>

//         <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
//           {secretPhrase.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5 ${
//                 item.required ? "" : "bg-white"
//               } `}
//             >
//               {item.required ? (
//                 <input
//                   type={showSecretPhrase ? "text" : "password"}
//                   value={userInput[index]}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                   className="w-full outline-none text-black placeholder-black"
//                   placeholder={item.word}
//                 />
//               ) : (
//                 <span>{item.word}</span>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="items-center justify-center">
//           <form className="mx-4">
//             <div className="my-4 mx-auto max-w-md">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-bold md:mb-2 mb-1 items-center"
//               >
//                 New Password
//                 <button
//                   type="button"
//                   className="text-[#FF4085] m-2 justify-end items-end font-normal"
//                   onClick={() => toggleFieldVisibility("newPassword")}
//                 >
//                   {showNewPassword ? "Hide" : "Show"}
//                 </button>
//               </label>
//               <input
//                 type={showNewPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
//               />
//             </div>

//             <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-gray-700 font-bold md:mb-2 items-center"
//               >
//                 Confirm Password
//                 <button
//                   type="button"
//                   className="text-[#FF4085] m-2 justify-end items-end font-normal"
//                   onClick={() => toggleFieldVisibility("confirmPassword")}
//                 >
//                   {showConfirmPassword ? "Hide" : "Show"}
//                 </button>
//               </label>
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
//               />
//             </div>
//             {passwordError && <p className="text-red-500 ">{passwordError}</p>}
//             {error && <p className="text-red-500 text-center ">{error}</p>}
//             {/* Terms of Use */}
//             <div className="flex items-center   pb-2">
//               <button
//                 className="rounded-full p-2 border-black focus:outline-none"
//                 onClick={() => setIsChecked(!isChecked)}
//               >
//                 {isChecked ? (
//                   <div className="w-6 h-6 rounded-full border my-2 mr-1 border-black"></div>
//                 ) : (
//                   <Image alt="" src={check} className="w-8 h-8 my-1 " />
//                 )}
//               </button>
//               <span className="ml-2">
//                 I agree to creso
//                 <span className="text-[#FF4085] ml-1">Terms of Use</span>
//               </span>
//             </div>

//             <div className="text-center  w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
//               <button className="p-2.5" onClick={handleConfirm}>
//                 Confirm
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImportWallet;

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import check from "../../assets/eoa/checkmark.png";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import PasswordInput from "@/components/common/PasswordInput";

function ImportWallet() {
  const secretPhrase = [
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
    { word: "", required: true },
  ];

  const initialUserInput = Array(secretPhrase.length).fill("");
  const [userInput, setUserInput] = useState(initialUserInput);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showSecretPhrase, setShowSecretPhrase] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Define isChecked state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // Proceed with password submission
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleInputChange = (index, value) => {
    const newUserInput = [...userInput];
    newUserInput[index] = value;
    setUserInput(newUserInput);
  };

  const handleConfirm = () => {
    // Check if all required fields are filled
    for (let i = 0; i < secretPhrase.length; i++) {
      if (secretPhrase[i].required && userInput[i] === "") {
        setError("Please fill in all required fields.");
        return;
      }
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    // Check if terms are agreed
    if (!isChecked) {
      setError("Please agree to the Terms of Use.");
      return;
    }

    // All fields are filled correctly, navigate to dashboard or handle password logic
    // For now, just log the password
    console.log("Password:", password);

    // Clear password fields and errors
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setError("");
  };

  const toggleFieldVisibility = (fieldName) => {
    switch (fieldName) {
      case "secretPhrase":
        setShowSecretPhrase(!showSecretPhrase);
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
      <HeaderEOA title="Import Existing Wallet " className="md:hidden block" />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />

        <div className="text-center mx-auto mb-12 max-w-xl">
          <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
            {" "}
            <Link href="/createwallet1">
              <BsArrowLeft />
            </Link>
            Import Existing Wallet
          </h1>
          <div className="md:hidden flex gap-4 mb-4 ml-2 font-bold text-lg items-center "></div>
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Import Wallet From Secret Recovery Pharse
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and password after
            you can access your creso wallet.
          </p>
        </div>
        <h2 className="my-4 max-w-md font-bold md:mb-2 mb-1 mx-4">
          Secret Recovery Pharse
          <button
            type="button"
            className="text-[#FF4085] m-2 justify-end items-end font-normal"
            onClick={() => toggleFieldVisibility("secretPhrase")}
          >
            {showSecretPhrase ? "Hide" : "Show"}
          </button>
        </h2>

        <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
          {secretPhrase.map((item, index) => (
            <div
              key={index}
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5 ${
                item.required ? "" : "bg-white"
              } `}
            >
              {item.required ? (
                <input
                  type={showSecretPhrase ? "text" : "password"}
                  value={userInput[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full outline-none text-black placeholder-black"
                  placeholder={item.word}
                />
              ) : (
                <span>{item.word}</span>
              )}
            </div>
          ))}
        </div>
        <div className="items-center justify-center">
          <form className="mx-4">
            <div className="my-4 mx-auto max-w-md">
              <PasswordInput
                label=" New Password"
                value={password}
                onChange={handlePasswordChange}
                showPassword={showPassword}
                onToggle={toggleShowPassword}
              />
            </div>

            <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
              <PasswordInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                showPassword={showConfirmPassword}
                onToggle={toggleShowConfirmPassword}
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
              <button className="p-2.5" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImportWallet;
