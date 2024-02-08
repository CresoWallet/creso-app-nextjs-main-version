// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import creso from "../../assets/eoa/cresoblack.svg";
// import create from "../../assets/eoa/createwallet.svg";
// import check from "../../assets/eoa/checkmark.png";
// import lockpassword from "../../assets/eoa/Lockpassword.png";
// import lock from "../../assets/eoa/Lock.png";
// import phone from "../../assets/eoa/Phone.png";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Currency from "../../assets/security/dollor2.png";
// import Language from "../../assets/security/language.png";

// function CreateEOAWallet() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [newPasswordBorder, setNewPasswordBorder] = useState(
//     "border rounded-full"
//   );
//   const [confirmPasswordBorder, setConfirmPasswordBorder] = useState(
//     "border rounded-full"
//   );
//   const [newPasswordButtonHover, setNewPasswordButtonHover] = useState(false);
//   const [confirmPasswordButtonHover, setConfirmPasswordButtonHover] =
//     useState(false);

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const { value } = event.target;
//     setConfirmPassword(value);
//     if (password && value && password !== value) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleCreatePassword = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//       // Handle password creation logic here
//     }
//   };

//   const toggleShowNewPassword = () => {
//     setShowNewPassword(!showNewPassword);
//     setNewPasswordButtonHover(!showNewPassword); // Update hover state
//     setNewPasswordBorder(
//       showNewPassword
//         ? "border rounded-full"
//         : "border border-black rounded-full"
//     );
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//     setConfirmPasswordButtonHover(!showConfirmPassword); // Update hover state
//     setConfirmPasswordBorder(
//       showConfirmPassword
//         ? "border rounded-full"
//         : "border border-black rounded-full"
//     );
//   };

//   return (
//     <div className="border-black border-2 mx-4">
//       <div className="flex flex-col mx-auto max-w-xl">
//         <div className="flex">
//           <h1 className="grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
//             <Image alt="" src={creso} className="mx-auto" />
//             Create EOA Wallet
//           </h1>

//           <div className="flex items-center  gap-1 ">
//             <Image alt="" src={Language} className="w-6 h-6" />
//             <div className="font-bold ">
//               <MdKeyboardArrowDown />
//             </div>
//             <p className="text-sm text-black ">USD</p>
//             <div className="font-bold ">
//               <MdKeyboardArrowDown />
//             </div>
//           </div>
//         </div>
//         <div className="m-4 px-10 text-xl text-center font-bold mb-4">
//           <Image alt="" src={create} className="text-center" />
//         </div>
//         <div className="flex ">
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={lockpassword}
//               className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-3 "
//             />
//             <p className="text-sm font-semibold pt-3 ">Create Password</p>
//           </div>
//           <hr className="w-24 mt-7 border-black " />
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={lock}
//               className="rounded-full  border-gray-300 border-2 h-16 w-16 mx-2 p-3"
//             />
//             <p className="text-sm font-semibold text-gray-400 pt-3">
//               Secure Wallet
//             </p>
//           </div>
//           <hr className="w-24 mt-7 " />
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={phone}
//               className="rounded-full  border-gray-300 border-2 h-16 w-16 mx-2 p-3"
//             />
//             <p className="text-sm font-semibold text-gray-400 pt-3">
//               Confirm Code
//             </p>
//           </div>
//         </div>

//         <hr className="mt-6" />
//         <div className="my-10 mx-4 px-4">
//           <h2 className="text-xl text-center font-bold mb-4">
//             Create Password
//           </h2>
//           <p className="my-6">
//             This password will unlock your creso wallet only this on this
//             device. Creso can not recover this password.
//           </p>
//         </div>
//         <form onSubmit={handleCreatePassword}>
//           <div className="my-4">
//             <label
//               htmlFor="newPassword"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               New Password
//               <button
//                 type="button"
//                 className={`text-[#FF4085] m-2 justify-end items-end ${
//                   newPasswordButtonHover ? "font-bold" : "font-normal"
//                 }`}
//                 onClick={toggleShowNewPassword}
//                 onMouseEnter={() => setNewPasswordButtonHover(true)}
//                 onMouseLeave={() => setNewPasswordButtonHover(false)}
//               >
//                 Show
//               </button>
//             </label>
//             <input
//               type={showNewPassword ? "text" : "password"}
//               id="newPassword"
//               value={password}
//               onChange={handlePasswordChange}
//               className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight ${newPasswordBorder}`}
//             />
//           </div>

//           <div className="mb-4 mt-8">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Confirm Password
//               <button
//                 type="button"
//                 className={`text-[#FF4085] m-2 justify-end items-end ${
//                   confirmPasswordButtonHover ? "font-bold" : "font-normal"
//                 }`}
//                 onClick={toggleShowConfirmPassword}
//                 onMouseEnter={() => setConfirmPasswordButtonHover(true)}
//                 onMouseLeave={() => setConfirmPasswordButtonHover(false)}
//               >
//                 Show
//               </button>
//             </label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border ${confirmPasswordBorder}`}
//             />
//           </div>
//           {passwordError && <p className="text-red-500">{passwordError}</p>}
//           {/* Terms of Use */}
//           <div className="flex items-center mb-8">
//             <button
//               className="rounded-full p-2 border-black focus:outline-none"
//               onClick={() => setIsChecked(!isChecked)}
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               {isChecked ? (
//                 <Image alt="" src={check} className="w-8 h-8 " />
//               ) : (
//                 <div className="w-6 h-6 rounded-full border border-black"></div>
//               )}
//             </button>
//             <span className="ml-2">
//               I understand that Creso cannot recover this password for me.
//               <span className="text-[#FF4085] ml-1">Learn more</span>
//             </span>
//           </div>

//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               Create New Password
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateEOAWallet;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import check from "../../assets/eoa/checkmark.png";
import lockpassword from "../../assets/eoa/Lockpassword.png";
import lock from "../../assets/eoa/Lock.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/CommonEOA";

function CreateEOAWallet() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [newPasswordBorder, setNewPasswordBorder] = useState(
    "border rounded-full"
  );
  const [confirmPasswordBorder, setConfirmPasswordBorder] = useState(
    "border rounded-full"
  );
  const [newPasswordButtonHover, setNewPasswordButtonHover] = useState(false);
  const [confirmPasswordButtonHover, setConfirmPasswordButtonHover] =
    useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (password && value && password !== value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleCreatePassword = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // Handle password creation logic here
    }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
    setNewPasswordButtonHover(!showNewPassword); // Update hover state
    setNewPasswordBorder(
      showNewPassword
        ? "border rounded-full"
        : "border border-black rounded-full"
    );
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setConfirmPasswordButtonHover(!showConfirmPassword); // Update hover state
    setConfirmPasswordBorder(
      showConfirmPassword
        ? "border rounded-full"
        : "border border-black rounded-full"
    );
  };

  return (
    <div className="border-black border-2 h-full p-4 px-4 mx-4 py-4 flex flex-col ">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword}
        imageSrc2={lock}
        imageSrc3={phone}
        color1="[#D0F500]"
        color2="gray-300"
        color3="gray-300"
        hrColor1="black"
        hrColor2="gray-300"
        borderColor1="gray-300"
        borderColor2="gray-300"
        textColor1="gray-300"
        textColor2="gray-300"
      />

      <hr className="mt-6 w-auto  " />
      <div className="text-center mx-auto mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Create Password
        </h2>
        <p className=" mx-auto ">
          This password will unlock your Creso wallet only on this device. Creso
          cannot recover this password.
        </p>
      </div>
      <div className="items-center justify-center">
        <form onSubmit={handleCreatePassword} className="mx-4">
          <div className="my-4 mx-auto max-w-md">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-bold mb-2 items-center"
            >
              New Password
              <button
                type="button"
                className={`text-[#FF4085] m-2 justify-end items-end ${
                  newPasswordButtonHover ? "font-bold" : "font-normal"
                }`}
                onClick={toggleShowNewPassword}
                onMouseEnter={() => setNewPasswordButtonHover(true)}
                onMouseLeave={() => setNewPasswordButtonHover(false)}
              >
                Show
              </button>
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={password}
              onChange={handlePasswordChange}
              className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight ${newPasswordBorder}`}
            />
          </div>

          <div className="mb-4 mt-8 mx-auto max-w-md">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2 items-center"
            >
              Confirm Password
              <button
                type="button"
                className={`text-[#FF4085] m-2 justify-end items-end ${
                  confirmPasswordButtonHover ? "font-bold" : "font-normal"
                }`}
                onClick={toggleShowConfirmPassword}
                onMouseEnter={() => setConfirmPasswordButtonHover(true)}
                onMouseLeave={() => setConfirmPasswordButtonHover(false)}
              >
                Show
              </button>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border ${confirmPasswordBorder}`}
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          {/* Terms of Use */}
          <div className="flex items-center mb-8 mx-auto max-w-md">
            <button
              className="rounded-full p-2 border-black focus:outline-none"
              onClick={() => setIsChecked(!isChecked)}
              disabled={passwordError || !password || !confirmPassword}
            >
              {isChecked ? (
                <Image alt="" src={check} className="w-8 h-8  " />
              ) : (
                <div className="w-6 h-6 rounded-full border border-black"></div>
              )}
            </button>
            <span className="ml-2">
              I understand that Creso cannot recover this password for me.
              <span className="text-[#FF4085] ml-1">Learn more</span>
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
              disabled={passwordError || !password || !confirmPassword}
            >
              Create New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEOAWallet;
