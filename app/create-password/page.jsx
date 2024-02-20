"use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import check from "../../assets/eoa/checkmark.png";
// import lockpassword from "../../assets/eoa/Lockpassword.png";
// import lock from "../../assets/eoa/Lock.png";
// import phone from "../../assets/eoa/Phone.png";
// import CommonComponent from "@/components/common/CommonEOA";

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
//     <div className=" h-full md:px-4  py-4  flex flex-col ">
//       <CommonComponent
//         title="Create EOA Wallet"
//         imageSrc1={lockpassword}
//         imageSrc2={lock}
//         imageSrc3={phone}
//         color1="[#D0F500]"
//         color2="gray-300"
//         color3="gray-300"
//         hrColor1="black"
//         hrColor2="gray-300"
//         borderColor1="gray-300"
//         borderColor2="gray-300"
//         textColor1="gray-300"
//         textColor2="gray-300"
//       />

//       <hr className=" mt-4  w-auto  " />
//       <div className="text-center hidden sm:block mx-auto mb-4 max-w-xl">
//         <h2 className="text-xl  text-center font-bold mb-4 mt-8">
//           Create Password
//         </h2>
//         <p className=" mx-auto mt-2 ">
//           This password will unlock your Creso wallet only on this device. Creso
//           cannot recover this password.
//         </p>
//       </div>
//       <div className="items-center justify-center">
//         <form onSubmit={handleCreatePassword} className="mx-4">
//           <div className="my-4 mx-auto max-w-md">
//             <label
//               htmlFor="newPassword"
//               className="block text-gray-700 font-bold md:mb-2 mb-1 items-center"
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
//               placeholder="Please Enter Your New Password"
//               className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight ${newPasswordBorder}`}
//             />
//           </div>

//           <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-gray-700 font-bold md:mb-2 items-center"
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
//               placeholder="Please Enter Your Confirm Password"
//               className={`shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border ${confirmPasswordBorder}`}
//             />
//           </div>
//           {passwordError && <p className="text-red-500 ">{passwordError}</p>}
//           {/* Terms of Use */}
//           <div className="flex items-center md:mb-8 md:mt-2 mt-20 mb-2 mx-auto max-w-md">
//             <button
//               className="rounded-full p-2 border-black focus:outline-none"
//               onClick={() => setIsChecked(!isChecked)}
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               {isChecked ? (
//                 <Image alt="" src={check} className="w-8 h-8  " />
//               ) : (
//                 <div className="w-6 h-6 rounded-full border border-black"></div>
//               )}
//             </button>
//             <span className="md:ml-2 ">
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

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import check from "../../assets/eoa/checkmark.png";
import lockpassword from "../../assets/eoa/Lockpassword.png";
import lock from "../../assets/eoa/Lock.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import PasswordInput from "@/components/common/PasswordInput";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        color2="gray-300"
        borderColor2="gray-300"
        textColor2="text-gray-300"
        hrColor2="gray-300"
        imageSrc3={phone}
        color3="gray-300"
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
      <div className="items-center justify-center">
        <form onSubmit={handleCreatePassword} className="mx-4">
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
          {passwordError && <p className="text-red-500 ">{passwordError}</p>}
          {/* Terms of Use */}
          <div className="flex items-center md:mb-8 md:mt-2 mt-20 mb-2 mx-auto max-w-md">
            <button
              className="rounded-full p-2 border-black focus:outline-none"
              onClick={() => setIsChecked(!isChecked)}
              disabled={passwordError || !password || !confirmPassword}
            >
              {isChecked ? (
                <Image alt="" src={check} className="w-8 h-8" />
              ) : (
                <div className="w-6 h-6 rounded-full border border-black"></div>
              )}
            </button>
            <span className="md:ml-2 ">
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

export default CreatePassword;
