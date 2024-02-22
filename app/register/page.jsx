"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import BgImage from "../../assets/auth/bgImage.png";
import CustomButton from "@/components/CustomButton";
import Apple from "../../assets/auth/Apple.png";
import X from "../../assets/auth/x.png";
import Link from "next/link";
import MobileImage from "../../assets/auth/Group.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signUpAPI } from "@/clientApi/auth";
import { CustomTextField } from "@/components/fields/CustomTextField";
import { enqueueSnackbar } from "notistack";
import cresow from "../../assets/Dashboard/creso_logo_white.svg";
import Capcha from "@/components/Capcha";
import { WalletContext } from "@/providers/WalletProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Header from "@/components/common/LoginRegister";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { validCaptcha } = useContext(WalletContext);
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const validatePassword = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const username = generateUsername(data.firstName, data.lastName);
    const signUpData = {
      email: data.email.toLowerCase(),
      username: username,
      password: data.password,
    };
    try {
      const res = await signUpAPI(signUpData);
      if (res) {
        // console.log(res);
        router.push("/otp");
        enqueueSnackbar(`User successfully registered`, {
          variant: "success",
        });
      }
      setLoading(false);
    } catch (error) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateUsername = (firstName, lastName) => {
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
    return username;
  };

  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen md:px-2 py-2 gap-2  xl:gap-0 md:gap-0">
      <div className="col-span-1 flex-col justify-center items-center bg-[#2100EC] md:py-8  hidden md:block rounded-2xl">
        <div className=" flex-row items-center justify-center md:my-16  gap-1 relative hidden md:block text-white md:mt-4 ">
          <Image alt="creso-logo" src={cresow} className="md:h-16" />
        </div>
        <Image
          alt=""
          src={BgImage}
          height={650}
          className="hidden xl:flex md:flex  mx-auto "
        />
      </div>

      <div className="md:col-span-1  xl:px-24 md:px-8  flex flex-col xl:py-16 md:py-8">
        {/* Registration form */}
        <p className="font-bold md:text-2xl  hidden md:block xl:text-4xl xl:mb-8 md:mb-4 text-xl">
          Register
        </p>
        {/* mobile nav */}
        <div>
          <Header pageTitle="Signup" pageLink="/" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 md:mx-0 mx-4 "
        >
          <div className="flex flex-col gap-2">
            {/* First Name and Last Name */}
            <CustomTextField
              label={"First Name "}
              placeholder={"first name"}
              validation={{ ...register("firstName", { required: true }) }}
            />
            <CustomTextField
              label={"Last Name"}
              placeholder={"last name"}
              validation={{ ...register("lastName", { required: true }) }}
            />
          </div>

          {/* Email */}
          <CustomTextField
            label={"Email"}
            placeholder={"email"}
            validation={{ ...register("email", { required: true }) }}
          />

          <div className="flex flex-col gap-2">
            {/* Password and Confirm Password */}
            <CustomTextField
              label={"Password"}
              placeholder={"password"}
              type={"password"}
              validation={{ ...register("password", { required: true }) }}
            />
            <CustomTextField
              label={"Confirm Password"}
              placeholder={"confirm password"}
              validation={{
                ...register("confirmPassword", {
                  required: true,
                  validate: validatePassword,
                }),
              }}
              type="password"
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
          </div>

          {/* <Capcha onSubmit={onSubmit} />

          <OTP /> */}

          <div className="flex flex-col space-y-2 !mt-10">
            {/* Sign-up button */}
            <CustomButton
              isLoading={loading}
              hoverColor={"zinc-800"}
              name="Sign up"
              bgColor="black"
              type={"submit"}
            />

            {/* <button
              disabled={!validCaptcha}
              type="submit"
              className={`transition duration-500 ease-in-out bg-black disabled:opacity-40 xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer border border-solid border-black tracking-wider transform hover:-translate-y-1`}
            >
              <div className="flex flex-row gap-2 items-center">
                {loading ? (
                  <>
                    {" "}
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
                  </>
                ) : (
                  <p className={`text-sm xl:text-base text-white`}>Sign up</p>
                )}
              </div>
            </button> */}

            {/* Social buttons (Apple, X) */}
            {/* Uncomment and customize as needed */}
            {/* <CustomButton
            isDisabled={true}
            bgColor="white"
            name="Continue With Apple "
            nameColor="black"
            img={Apple}
          />
          <CustomButton
            bgColor="white"
            name="Continue With X"
            nameColor="black"
            img={X}
          /> */}
          </div>

          {/* Login link */}
          <div className="flex justify-center">
            <p className="text-sm text-[#A09FAA]">
              Already have an account?{" "}
              <Link href="/">
                <span className="text-[#FF4085] cursor-pointer hover:font-bold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

//chatgpt
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { enqueueSnackbar } from "notistack";
// import { CustomTextField } from "@/components/fields/CustomTextField";
// import { signUpAPI, verifyEmailAPI, resendOTPAPI } from "@/clientApi/auth"; // Import necessary API functions

// const RegisterPage = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const signUpRes = await signUpAPI(data); // Call sign-up API
//       if (signUpRes) {
//         enqueueSnackbar(`User successfully registered`, {
//           variant: "success",
//         });
//         // After successful sign-up, call email verification API
//         const verifyEmailRes = await verifyEmailAPI(data.email, data.otp);
//         if (verifyEmailRes) {
//           // Handle success
//           // Redirect or show a success message
//         }
//       }
//     } catch (error) {
//       enqueueSnackbar(`${error?.response?.data?.message}`, {
//         variant: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = async (email) => {
//     try {
//       const resendOTPRes = await resendOTPAPI(email); // Call resend OTP API
//       if (resendOTPRes) {
//         enqueueSnackbar(`OTP resent successfully`, {
//           variant: "success",
//         });
//       }
//     } catch (error) {
//       enqueueSnackbar(`${error?.response?.data?.message}`, {
//         variant: "error",
//       });
//     }
//   };

//   return (
//     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen md:px-2 py-2 gap-2  xl:gap-0 md:gap-0">
//       {/* Your left side content */}
//       <div className="col-span-1 flex-col justify-center items-center bg-[#2100EC] md:py-8  hidden md:block rounded-2xl">
//         {/* Your left side content */}
//       </div>

//       {/* Your right side content */}
//       <div className="md:col-span-1  xl:px-24 md:px-8  flex flex-col xl:py-16 md:py-8">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <CustomTextField
//             label={"Email"}
//             placeholder={"email"}
//             validation={{ ...register("email", { required: true }) }}
//           />
//           {errors.email && <span>Email is required</span>}

//           <CustomTextField
//             label={"Password"}
//             placeholder={"password"}
//             type={"password"}
//             validation={{ ...register("password", { required: true }) }}
//           />
//           {errors.password && <span>Password is required</span>}

//           <CustomTextField
//             label={"OTP"}
//             placeholder={"OTP"}
//             validation={{ ...register("otp", { required: true }) }}
//           />
//           {errors.otp && <span>OTP is required</span>}

//           <button type="submit" disabled={loading}>
//             {loading ? "Loading..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Resend OTP button */}
//         <button onClick={() => handleResendOTP(email)}>Resend OTP</button>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

//gemini
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function RegisterPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const signupUrl = "/api/signup"; // Replace with your signup API endpoint
//   const emailVerificationUrl = "/api/verify_email"; // Replace with your email verification API endpoint

//   const onSubmit = async (data) => {
//     setLoading(true);

//     try {
//       const signupData = {
//         email: data.email.toLowerCase(),
//         password: data.password,
//       };

//       const response = await axios.post(signupUrl, signupData);

//       if (response.data.success) {
//         await axios.post(emailVerificationUrl, { email: signupData.email });
//         console.log("Signup successful! Please verify your email.");
//         // Redirect the user or show a success message
//       } else {
//         setErrorMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       setErrorMessage("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen md:px-2 py-2 gap-2  xl:gap-0 md:gap-0">
//       <div className="col-span-1 flex-col justify-center items-center bg-[#2100EC] md:py-8  hidden md:block rounded-2xl">
//         {/* Your image and content */}
//       </div>

//       <div className="md:col-span-1  xl:px-24 md:px-8  flex flex-col xl:py-16 md:py-8">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex flex-col gap-2">
//             <input
//               type="text"
//               placeholder="First Name"
//               {...register("firstName", { required: true })}
//             />
//             {errors.firstName && <span>First Name is required</span>}
//             <input
//               type="text"
//               placeholder="Last Name"
//               {...register("lastName", { required: true })}
//             />
//             {errors.lastName && <span>Last Name is required</span>}
//           </div>

//           <input
//             type="email"
//             placeholder="Email"
//             {...register("email", { required: true })}
//           />
//           {errors.email && <span>Email is required</span>}

//           <div className="flex flex-col gap-2">
//             <input
//               type="password"
//               placeholder="Password"
//               {...register("password", { required: true })}
//             />
//             {errors.password && <span>Password is required</span>}
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               {...register("confirmPassword", {
//                 required: true,
//                 validate: (value) =>
//                   value === data.password || "The passwords do not match",
//               })}
//             />
//             {errors.confirmPassword && (
//               <span>{errors.confirmPassword.message}</span>
//             )}
//           </div>

//           <button type="submit" disabled={isSubmitting || loading}>
//             {isSubmitting || loading ? "Loading..." : "Sign Up"}
//           </button>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;
