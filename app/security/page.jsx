// "use client";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Currency from "../../assets/security/dollor2.png";
// import Language from "../../assets/security/language.png";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import SecurityImage from "../../assets/security/securityImage.png";
// import Account from "@/components/Account";
// import Lock from "../../assets/security/Lock.png";
// import { useMediaQuery } from "react-responsive";
// import Ham from "../../assets/Dashboard/ham.png";
// import Modal from "@/components/modal/Modal";
// import { useUser } from "@/providers/UserProvider";
// import AccountHeader from "@/components/AccountHeader";
// import { WalletContext } from "@/providers/WalletProvider";
// import { IoArrowBackCircle } from "react-icons/io5";
// import Header from "@/components/common/LoginRegister";

// const SecurityPage = () => {
//   const [navbarTrigger, setNavbarTrigger] = useState(false);
//   const { user, isAuthenticated, status } = useUser();
//   const [showModal, setShowModal] = useState(false);
//   const { showAccount, setShowAccount } = useContext(WalletContext);

//   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
//   useEffect(() => {
//     if (navbarTrigger) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [navbarTrigger]);

//   return (
//     <div id="modal-root">
//       {navbarTrigger && (
//         <div
//           className="navbackdrop"
//           onClick={() => setNavbarTrigger(!navbarTrigger)}
//         ></div>
//       )}
//       {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
//       <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 pb-32 lg:pb-0">
//         <AccountHeader
//           isMobile={isMobile}
//           navbarTrigger={navbarTrigger}
//           setShowModal={setShowModal}
//           user={user}
//         />

//         <div
//           className={`col-span-6 xl:mx-8 md:mx-4 mx-2 xl:mt-10 mt-4 hidden lg:block ${
//             showAccount ? "!block" : ""
//           }`}
//         >
//           <div
//             className={`${
//               showAccount ? "lg:hidden block" : "lg:block hidden"
//             } flex flex-col space-y-3`}
//           ></div>

//           <div className="flex flex-row justify-between items-center">
//             <div className="flex flex-row items-center">
//               <IoArrowBackCircle
//                 className="h-8 w-8 lg:hidden"
//                 onClick={() => setShowAccount(false)}
//               />

//               <p className="text-xl font-semibold ml-2">Security</p>
//             </div>

//             <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-6 md:gap-4 gap-4">
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Language} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black">ENG</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//               <div className="flex flex-row items-center gap-2">
//                 <Image alt="" src={Currency} className="w-6 h-6" />
//                 <div className="flex flex-row gap-1">
//                   <p className="text-sm text-black">USD</p>
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center items-center xl:py-16 py-8">
//             <Image alt="" src={SecurityImage} className="w-72" />
//           </div>
//           <div className="flex flex-col space-y-2 items-center">
//             <Image alt="" src={Lock} />
//             <p className="text-xl font-semibold">Auto-Lock</p>
//           </div>
//           <div className="text-center">
//             <p className="text-[#A09FAA] text-sm">
//               Choose the amount of time before
//               <br /> the application automatically locks
//             </p>
//           </div>
//           <div className="flex items-center justify-center xl:mt-12 mt-8">
//             <button className="text-white px-6 py-4 bg-black flex flex-row items-center justify-between gap-24 rounded-full">
//               <p>Never</p>
//               <MdKeyboardArrowDown />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecurityPage;

"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import SecurityImage from "../../assets/security/securityImage.png";
import Account from "@/components/Account";
import Lock from "../../assets/security/Lock.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import AccountHeader from "@/components/AccountHeader";
import { WalletContext } from "@/providers/WalletProvider";
import { IoArrowBackCircle } from "react-icons/io5";
import Header from "@/components/common/LoginRegister";
import { RiArrowRightSLine } from "react-icons/ri";
import Info from "../../assets/Dashboard/info.png";
import LockPassword from "../../assets/eoa/Lockpassword.png";
import Crypto from "../../assets/Dashboard/Crypto.png";
import Bell from "../../assets/Dashboard/Bell.png";
import Backup from "@/components/common/BackupAccount";
const SecurityPage = () => {
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const { user, isAuthenticated, status } = useUser();
  const [showModal, setShowModal] = useState(false);
  const { showAccount, setShowAccount } = useContext(WalletContext);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <div id="modal-root">
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}
      {showModal && <Modal onClose={() => setShowModal(false)} user={user} />}
      <div className="grid lg:grid-cols-10 md:grid-cols-2 grid-cols-1 md:pb-32 lg:pb-0">
        <AccountHeader
          isMobile={isMobile}
          navbarTrigger={navbarTrigger}
          setShowModal={setShowModal}
          user={user}
        />

        <div
          className={`col-span-6 xl:mx-8 md:mx-4  xl:mt-10 md:mt-4 hidden lg:block ${
            showAccount ? "!block" : ""
          }`}
        >
          <div
            className={`${
              showAccount ? "lg:hidden block" : "lg:block hidden"
            } flex flex-col space-y-3`}
          ></div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <IoArrowBackCircle
                className="h-8 w-8 lg:hidden hidden md:block"
                onClick={() => setShowAccount(false)}
              />
              {/* mobile nav */}
              <div>
                <Header pageTitle="Security" pageLink="/account" />
              </div>

              <p className="text-xl hidden md:block font-semibold ml-2">
                Security
              </p>
            </div>

            <div className="xl:flex xl:flex-row md:flex md:flex-row hidden items-center xl:gap-6 md:gap-4 gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Language} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">ENG</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image alt="" src={Currency} className="w-6 h-6" />
                <div className="flex flex-row gap-1">
                  <p className="text-sm text-black">USD</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center xl:py-16 py-8">
            <Image alt="" src={SecurityImage} className="w-72" />
          </div>

          {/*mobile view*/}
          <div className=" block   md:hidden mx-2">
            <div className="flex items-center my-4 ">
              <Image alt="" src={Lock} className="h-6 w-6 " />
              <p className=" flex text-base font-medium items-center  gap-2 ">
                Auto - Lock
                <p className="text-[#2100EC] ">Never</p>
                <RiArrowRightSLine />
              </p>
            </div>
            <div className="flex gap-2 my-4">
              <Image alt="" src={Info} className="h-4 w-4 " />
              <p className="text-[#A09FAA] text-xs">
                Choose the amount of time before
                <br /> the application automatically locks
              </p>
            </div>
            <hr className="my-6" />
            <div className="flex gap-2 items-center my-2">
              <Image alt="" src={LockPassword} className="h-6 w-6 " />
              <p className="text-sm">Manage Authentication Methods</p>
              <RiArrowRightSLine />
            </div>
            <div className="flex mt-6 gap-2 items-center">
              <Image alt="" src={Crypto} className="h-6 w-6 " />
              <p className="text-sm">Encrupted Backups</p>
              <RiArrowRightSLine />
            </div>
            <hr className="my-6" />
            <div className="flex mt-6 gap-2 items-center">
              <Image alt="" src={Bell} className="h-6 w-6 " />
              <p className="text-sm">Push Notification</p>
              <p className="text-[#2100EC]  text-sm">Disabled</p>
              <RiArrowRightSLine />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex flex-col space-y-2 items-center">
              <Image alt="" src={Lock} />
              <p className="text-xl font-semibold">Auto-Lock</p>
            </div>
            <div className="text-center">
              <p className="text-[#A09FAA] text-sm">
                Choose the amount of time before
                <br /> the application automatically locks
              </p>
            </div>
            <div className="flex items-center justify-center xl:mt-12 mt-8">
              <button className="text-white px-6 py-4 bg-black flex flex-row items-center justify-between gap-24 rounded-full">
                <p>Never</p>
                <MdKeyboardArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
