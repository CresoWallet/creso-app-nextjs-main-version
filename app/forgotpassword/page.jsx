// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import HeaderEOA from "@/components/common/HeaderEOA";
// import { BsArrowLeft } from "react-icons/bs";
// import PasswordInput from "@/components/common/PasswordInput";
// import CustomCheckbox from "@/components/customcheckbox";
// import CustomButton from "@/components/CustomButton";

// function ForgotPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [error, setError] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const passwords = {
//     currentPassword: "123", // Provide current password here
//     newPassword: password,
//   };
//   // Function to handle confirmation of new password
//   const handleNewPasswordConfirm = () => {
//     try {
//       const forgetData = changePasswordApi(passwords);
//       let adn = forgetData?.data?.data
//       srtetState(adn)

//       state?.map((e)=>(
//         <>sfsfdd</>
//       ))
//       console.log("====================================");
//       console.log("forgetData", forgetData);
//       console.log("====================================");
//     } catch (error) {}
//     if (!password || !confirmPassword) {
//       setError("Please fill all required fields.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setPasswordError("Passwords do not match");
//       return;
//     }
//     if (!isChecked) {
//       setError("Please agree to the Terms of Use.");
//       return;
//     }
//   };

//   // Function to toggle visibility of password fields
//   const toggleFieldVisibility = (fieldName) => {
//     switch (fieldName) {
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
//       {/* Header */}
//       <HeaderEOA title="Create New Password" className="md:hidden block" />
//       <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
//         <hr className="mt-6 w-auto" />

//         <div className="text-center mx-auto mb-12 max-w-xl">
//           {/* Page title */}
//           <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
//             {" "}
//             <Link href="">
//               <BsArrowLeft />
//             </Link>
//             Create New Password
//           </h1>
//           <div className="flex gap-4 mb-4 ml-2 md:mt-6 font-bold text-lg items-center "></div>
//         </div>

//         <div className="items-center justify-center">
//           <form className="mx-4">
//             {/* New Password field */}
//             <PasswordInput
//               label="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               showPassword={showNewPassword}
//               onToggle={() => toggleFieldVisibility("newPassword")}
//             />

//             {/* Confirm Password field */}
//             <PasswordInput
//               label="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               showPassword={showConfirmPassword}
//               onToggle={() => toggleFieldVisibility("confirmPassword")}
//             />

//             {/* Display password error if any */}
//             {passwordError && <p className="text-red-500 ">{passwordError}</p>}
//             {/* Display general error if any */}
//             {error && <p className="text-red-500 text-center ">{error}</p>}
//             {/* Terms of Use */}
//             <div className="flex items-center  mt-14 pb-2">
//               <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
//               <span className="ml-2 text-sm lg:text-base">
//                 I understand that Creso cannot recover this password for me.
//                 <span className="text-[#FF4085] ml-1">Terms of Use</span>
//               </span>
//             </div>

//             {/* Button to confirm password or submit forgot password */}

//             <div className="text-center w-full mt-6">
//               <CustomButton
//                 name={isForgotPassword ? "Submit" : "Create New Password"}
//                 onClick={
//                   isForgotPassword
//                     ? handleForgotPassword
//                     : handleNewPasswordConfirm
//                 }
//                 bgColor="black"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;

//chatgpt api integrate changepasswordapi
"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import PasswordInput from "@/components/common/PasswordInput";
import CustomCheckbox from "@/components/customcheckbox";
import CustomButton from "@/components/CustomButton";
import { changePasswordApi } from "@/clientApi/auth";

function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle confirmation of new password
  const handleNewPasswordConfirm = async () => {
    setError(""); // Reset error state

    // Validate password fields
    if (!password || !confirmPassword) {
      setError("Please fill all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (!isChecked) {
      setError("Please agree to the Terms of Use.");
      return;
    }

    // Call API to change password
    try {
      const passwords = {
        currentPassword: "",
        newPassword: password,
      };
      const res = await changePasswordApi(passwords);
      console.log(res.data); // Log the response for debugging
      // Handle success message, redirection, or any other action as needed
    } catch (error) {
      console.error("Error changing password:", error);
      // Handle error, display error message, etc.
      setError("Failed to change password. Please try again.");
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
              <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
              <span className="ml-2 text-sm lg:text-base">
                I understand that Creso cannot recover this password for me.
                <span className="text-[#FF4085] ml-1">Terms of Use</span>
              </span>
            </div>

            {/* Button to confirm password or submit forgot password */}
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

export default ForgotPassword;
