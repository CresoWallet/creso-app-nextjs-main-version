"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import BgImage from "../../assets/auth/bgImage.png";
import { loginApi } from "@/clientApi/auth";
import { AUTH_TOKEN, BASE_URL } from "@/constants";
import { useUser } from "@/providers/UserProvider";
import { CustomTextField } from "@/components/fields/CustomTextField";
import { enqueueSnackbar } from "notistack";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import cresow from "../../assets/Dashboard/creso_logo_white.svg";
import Capcha from "@/components/Capcha";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { WalletContext } from "@/providers/WalletProvider";

import Header from "@/components/common/LoginRegister";

const LoginPage = () => {
  const router = useRouter();
  const { validCaptcha, setAuthToken, authToken } = useContext(WalletContext);

  const { user, isAuthenticated, handleAuthentication } = useUser();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState } = useForm();

  useEffect(() => {
    if (authToken) {
      router.push(`/welcome`);
    }
  }, [authToken]);
  console.log("====================================");
  console.log(authToken, "authToken");
  console.log("====================================");
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push(`/dashboard`);
  //   }
  // }, [isAuthenticated, user]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginApi(data);
      console.log(res);
      const tk = res?.data?.data?.token;
      localStorage.setItem("authToken", tk);
      console.log(tk, "<---------tokrn");
      if (tk) {
        // localStorage.setItem(AUTH_TOKEN, tk);
        // authenticate();
        // setLoading(false);
        handleAuthentication();
        router.push(`/welcome`);
      }
    } catch (err) {
      enqueueSnackbar(`${err?.response?.data?.message}`, {
        variant: "error",
      });
    } finally {
      // setLoading(false);
    }

    setLoading(false);
  };

  const handleTwitterLogin = async () => {
    window.open(BASE_URL + "/api/login/twitter");

    // const data = await axiosInstance("/twitter");
    // console.log(data);
    // const data2 = await axiosInstance("/twitter/callback");
    // console.log(data2);
  };

  const handleGoogleLogin = async () => {
    window.open(BASE_URL + "/api/login/google");
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
        <p className="font-bold md:text-2xl  hidden md:block xl:text-4xl xl:mb-8 md:mb-4 text-xl">
          Login
        </p>

        {/* mobile nav */}
        <div>
          <Header pageTitle="Login" pageLink="/" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 md:mx-0 mx-4 "
        >
          <CustomTextField
            label={"Email"}
            placeholder={"email"}
            validation={{ ...register("email", { required: true }) }}
          />
          <CustomTextField
            label={"Password"}
            placeholder={"password"}
            type={"password"}
            validation={{ ...register("password", { required: true }) }}
          />
          <span className="text-[#FF4085] text-sm cursor-pointer hover:font-bold">
            <Link href="/forgotpassword"> Forgot Password? </Link>
          </span>
          <Capcha onSubmit={onSubmit} />

          <div className="flex flex-col space-y-2">
            <button
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
                  <p className={`text-sm  xl:text-base text-white`}>Login</p>
                )}
              </div>
            </button>
          </div>
          <div className="my-4 pt-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center text-gray-400 dark:text-white">
              or
            </p>
          </div>
          <div className="flex justify-center pt-5">
            {" "}
            <div className="flex flex-col items-center max-w-sm w-full gap-3">
              <div
                onClick={handleTwitterLogin}
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
              xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaSquareXTwitter className="w-5 h-5" />
                Sign in with Twitter
              </div>

              <div
                onClick={handleGoogleLogin}
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
              xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaGoogle />
                Sign in with Google
              </div>

              <div
                className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out bg-black disabled:opacity-40
              xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full
              enabled:hover:bg-zinc-800 enabled:hover:font-semibold
              border border-solid border-undefined tracking-wider transform
              hover:-translate-y-1"
              >
                <FaApple className="w-5 h-5" />
                Sign in with Apple
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-5">
            <p className="text-sm text-[#A09FAA]">
              Don&rsquo;t have an account?{" "}
              <Link href="/register">
                <span className="text-[#FF4085] cursor-pointer hover:font-bold">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

//chatgpt
// import { loginApi } from "@/clientApi/auth";
// import { AUTH_TOKEN, BASE_URL } from "@/constants";
// import { enqueueSnackbar } from "notistack";
// import React, { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { FaApple, FaGoogle, FaSquareXTwitter } from "react-icons/fa";
// import { useUser } from "@/providers/UserProvider";
// import { WalletContext } from "@/providers/WalletProvider";
// import cresow from "../../assets/Dashboard/creso_logo_white.svg";
// import BgImage from "../../assets/auth/bgImage.png";
// import Header from "@/components/common/LoginRegister";
// import { CustomTextField } from "@/components/fields/CustomTextField";
// import Link from "next/link";
// import Image from "next/image";
// import Capcha from "@/components/Capcha";

// const LoginPage = () => {
//   const { user, isAuthenticated, handleAuthentication } = useUser();
//   const [loading, setLoading] = useState(false);
//   const { register, handleSubmit } = useForm();
//   const { validCaptcha } = useContext(WalletContext);

//   useEffect(() => {
//     if (isAuthenticated) {
//       window.location.href = "/dashboard"; // Redirect to dashboard
//     }
//   }, [user]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const res = await loginApi(data);
//       const tk = res.data.token;
//       if (tk) {
//         localStorage.setItem(AUTH_TOKEN, tk);
//         handleAuthentication();
//         window.location.href = "/dashboard"; // Redirect to dashboard
//       }
//     } catch (err) {
//       enqueueSnackbar(`${err?.response?.data?.message}`, {
//         variant: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSocialLogin = async (provider) => {
//     window.open(`${BASE_URL}/api/login/${provider}`);
//   };

//   return (
//     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen md:px-2 py-2 gap-2  xl:gap-0 md:gap-0">
//       <div className="col-span-1 flex-col justify-center items-center bg-[#2100EC] md:py-8  hidden md:block rounded-2xl">
//         <div className=" flex-row items-center justify-center md:my-16  gap-1 relative hidden md:block text-white md:mt-4 ">
//           <Image alt="creso-logo" src={cresow} className="md:h-16" />
//         </div>
//         <Image
//           alt=""
//           src={BgImage}
//           height={650}
//           className="hidden xl:flex md:flex  mx-auto "
//         />
//       </div>
//       <div className="md:col-span-1  xl:px-24 md:px-8  flex flex-col xl:py-16 md:py-8">
//         <p className="font-bold md:text-2xl  hidden md:block xl:text-4xl xl:mb-8 md:mb-4 text-xl">
//           Login
//         </p>
//         <div>
//           <Header pageTitle="Login" pageLink="/" />
//         </div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col space-y-4 md:mx-0 mx-4 "
//         >
//           <CustomTextField
//             label={"Email"}
//             placeholder={"email"}
//             validation={{ ...register("email", { required: true }) }}
//           />
//           <CustomTextField
//             label={"Password"}
//             placeholder={"password"}
//             type={"password"}
//             validation={{ ...register("password", { required: true }) }}
//           />
//           <span className="text-[#FF4085] text-sm cursor-pointer hover:font-bold">
//             <Link href="/forgotpassword"> Forgot Password? </Link>
//           </span>
//           <Capcha onSubmit={onSubmit} />
//           <div className="flex flex-col space-y-2">
//             <button
//               disabled={!validCaptcha}
//               type="submit"
//               className={`transition duration-500 ease-in-out bg-black disabled:opacity-40 xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer border border-solid border-black tracking-wider transform hover:-translate-y-1`}
//             >
//               <div className="flex flex-row gap-2 items-center">
//                 {loading ? (
//                   <>
//                     {" "}
//                     <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
//                   </>
//                 ) : (
//                   <p className={`text-sm  xl:text-base text-white`}>Login</p>
//                 )}
//               </div>
//             </button>
//           </div>
//           <div className="my-4 pt-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//             <p className="mx-4 mb-0 text-center text-gray-400 dark:text-white">
//               or
//             </p>
//           </div>
//           <div className="flex justify-center pt-5">
//             <div className="flex flex-col items-center max-w-sm w-full gap-3">
//               <div
//                 onClick={() => handleSocialLogin("twitter")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
//               xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaSquareXTwitter className="w-5 h-5" />
//                 Sign in with Twitter
//               </div>
//               <div
//                 onClick={() => handleSocialLogin("google")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
//               xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaGoogle />
//                 Sign in with Google
//               </div>
//               <div
//                 onClick={() => handleSocialLogin("apple")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out bg-black disabled:opacity-40
//               xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaApple className="w-5 h-5" />
//                 Sign in with Apple
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center pt-5">
//             <p className="text-sm text-[#A09FAA]">
//               Don&rsquo;t have an account?{" "}
//               <Link href="/register">
//                 <span className="text-[#FF4085] cursor-pointer hover:font-bold">
//                   Register Now
//                 </span>
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

//gemini
// Import the necessary modules and components
// import React, { useState, useEffect, useContext } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import BgImage from "../../assets/auth/bgImage.png";
// import { AUTH_TOKEN, BASE_URL } from "@/constants";
// import { enqueueSnackbar } from "notistack";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { FaApple, FaGoogle, FaSquareXTwitter } from "react-icons/fa";
// import { useUser } from "@/providers/UserProvider";
// import { WalletContext } from "@/providers/WalletProvider";
// import cresow from "../../assets/Dashboard/creso_logo_white.svg";
// import Capcha from "@/components/Capcha";
// import Header from "@/components/common/LoginRegister";
// import axios from 'axios'; // For API requests
// import { handleSocialLogin } from "@/clientApi/auth"; // For social login API calls

// // Define the LoginPage component
// const LoginPage = () => {
//   const { user, isAuthenticated, handleAuthentication } = useUser();
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { validCaptcha } = useContext(WalletContext);

//   // Handle redirection if user is already authenticated
//   useEffect(() => {
//     if (isAuthenticated) {
//       window.location.href = "/dashboard";
//     }
//   }, [user]);

//   // Function to handle form submission
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       const loginData = {
//         email: data.email.toLowerCase(),
//         password: data.password,
//       };

//       const isVerified = await checkEmailVerificationStatus(loginData.email);
//       if (!isVerified) {
//         setErrorMessage('Your email address is not verified. Please verify your email first.');
//         return;
//       }

//       const response = await axios.post('/api/login', loginData);

//       if (response.data.success) {
//         localStorage.setItem(AUTH_TOKEN, response.data.token);
//         handleAuthentication();
//         window.location.href = "/dashboard";
//       } else {
//         setErrorMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('An error occurred. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to handle social login clicks
//   const handleSocialLoginClick = async (provider) => {
//     try {
//       const loginUrl = await handleSocialLogin(provider);
//       window.open(loginUrl);
//     } catch (error) {
//       console.error('Social login error:', error);
//       setErrorMessage('Social login failed. Please try again.');
//     }
//   };

//   // Return JSX for the login page
//   return (
//     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 h-screen md:px-2 py-2 gap-2  xl:gap-0 md:gap-0">
//       <div className="col-span-1 flex-col justify-center items-center bg-[#2100EC] md:py-8  hidden md:block rounded-2xl">
//         <div className=" flex-row items-center justify-center md:my-16  gap-1 relative hidden md:block text-white md:mt-4 ">
//           <Image alt="creso-logo" src={cresow} className="md:h-16" />
//         </div>
//         <Image
//           alt=""
//           src={BgImage}
//           height={650}
//           className="hidden xl:flex md:flex  mx-auto "
//         />
//       </div>
//       <div className="md:col-span-1  xl:px-24 md:px-8  flex flex-col xl:py-16 md:py-8">
//         <p className="font-bold md:text-2xl  hidden md:block xl:text-4xl xl:mb-8 md:mb-4 text-xl">
//           Login
//         </p>
//         <div>
//           <Header pageTitle="Login" pageLink="/" />
//         </div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col space-y-4 md:mx-0 mx-4 "
//         >
//           {/* Custom input fields for email and password */}
//           <input
//             type="email"
//             placeholder="Email"
//             {...register("email", { required: true })}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             {...register("password", { required: true })}
//           />
//           {/* Forgot password link */}
//           <span className="text-[#FF4085] text-sm cursor-pointer hover:font-bold">
//             <Link href="/forgotpassword"> Forgot Password? </Link>
//           </span>
//           {/* Captcha component */}
//           <Capcha onSubmit={onSubmit} />
//           {/* Submit button */}
//           <div className="flex flex-col space-y-2">
//             <button
//               disabled={!validCaptcha}
//               type="submit"
//               className={`transition duration-500 ease-in-out bg-black disabled:opacity-40 xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer border border-solid border-black tracking-wider transform hover:-translate-y-1`}
//             >
//               <div className="flex flex-row gap-2 items-center">
//                 {loading ? (
//                   <>
//                     {" "}
//                     <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
//                   </>
//                 ) : (
//                   <p className={`text-sm  xl:text-base text-white`}>Login</p>
//                 )}
//               </div>
//             </button>
//           </div>
//           {/* Social login options */}
//           <div className="my-4 pt-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//             <p className="mx-4 mb-0 text-center text-gray-400 dark:text-white">
//               or
//             </p>
//           </div>
//           <div className="flex justify-center pt-5">
//             <div className="flex flex-col items-center max-w-sm w-full gap-3">
//               {/* Social login buttons */}
//               <div
//                 onClick={() => handleSocialLoginClick("twitter")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
//               xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaSquareXTwitter className="w-5 h-5" />
//                 Sign in with Twitter
//               </div>
//               <div
//                 onClick={() => handleSocialLoginClick("google")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out  disabled:opacity-40
//               xl:py-4 py-2 text-black px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold cursor-pointer
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaGoogle />
//                 Sign in with Google
//               </div>
//               <div
//                 onClick={() => handleSocialLoginClick("apple")}
//                 className=" gap-2  items-center  hover:border-black hover:text-bold  text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   transition duration-500 ease-in-out bg-black disabled:opacity-40
//               xl:py-4 py-2 text-white px-12 flex justify-center rounded-full w-full
//               enabled:hover:bg-zinc-800 enabled:hover:font-semibold
//               border border-solid border-undefined tracking-wider transform
//               hover:-translate-y-1"
//               >
//                 <FaApple className="w-5 h-5" />
//                 Sign in with Apple
//               </div>
//             </div>
//           </div>
//           {/* Register link */}
//           <div className="flex justify-center pt-5">
//             <p className="text-sm text-[#A09FAA]">
//               Don&rsquo;t have an account?{" "}
//               <Link href="/register">
//                 <span className="text-[#FF4085] cursor-pointer hover:font-bold">
//                   Register Now
//                 </span>
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Export the LoginPage component
// export default LoginPage;
