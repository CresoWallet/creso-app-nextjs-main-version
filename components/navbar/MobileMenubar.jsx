// "use client";
// import React, { useState, useContext } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Wallet from "../../assets/Dashboard/Wallet.png";
// import Wallet1 from "../../assets/Dashboard/Wallet1.png";
// import Discover from "../../assets/Dashboard/Discover.png";
// import Discover1 from "../../assets/Dashboard/Discover1.png";
// import Swap from "../../assets/Dashboard/Swap.png";
// import Swap1 from "../../assets/Dashboard/Swap1.png";
// import Profile from "../../assets/Profile.png";
// import Profile1 from "../../assets/profile1.svg";
// import Link from "next/link";
// import { WalletContext } from "@/providers/WalletProvider";
// import { useRouter } from "next/router";

// const MobileMenubar = () => {
//   return (
//     <div className="bg-[#2100EC] rounded-full grid grid-cols-4 my-5 place-items-center mobileMenu">
//       <Link href="/dashboard">
//         <Image alt="" src={Wallet} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/discover">
//         <Image alt="" src={Discover} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/swap">
//         <Image alt="" src={Swap} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//       <Link href="/account">
//         <Image alt="" src={Profile} className="w-6 h-6 text-[#B1A6F8]" />
//       </Link>
//     </div>
//   );
// };

// export default MobileMenubar;

// const MobileMenubar = () => {
//   const pathname = usePathname();
//   const [hoveredLink, setHoveredLink] = useState(null);

//   const handleMouseEnter = (link) => {
//     setHoveredLink(link);
//   };

//   const handleMouseLeave = () => {
//     setHoveredLink(null);
//   };

//   return (
//     <div className="bg-[#2100EC] min-h-[10%] rounded-full grid grid-cols-4 my-5 place-items-center mobileMenu">
//       <Link href="/dashboard">
//         <div
//           onMouseEnter={() => handleMouseEnter("/dashboard")}
//           onMouseLeave={() => handleMouseLeave()}
//           className={`${
//             pathname === "/dashboard" ? "bg-white" : ""
//           } rounded-full p-1`}
//         >
//           <Image
//             alt=""
//             src={pathname === "/dashboard" ? Wallet1 : Wallet}
//             className="w-6 h-6 text-[#B1A6F8]"
//           />
//         </div>
//       </Link>

//       <Link href="/discover">
//         <div
//           onMouseEnter={() => handleMouseEnter("/discover")}
//           onMouseLeave={() => handleMouseLeave()}
//           className={`${
//             pathname === "/discover" ? "bg-white" : ""
//           } rounded-full p-1`}
//         >
//           <Image
//             alt=""
//             src={pathname === "/discover" ? Discover1 : Discover}
//             className="w-6 h-6 text-[#B1A6F8]"
//           />
//         </div>
//       </Link>

//       <Link href="/swap">
//         <div
//           onMouseEnter={() => handleMouseEnter("/swap")}
//           onMouseLeave={() => handleMouseLeave()}
//           className={`${
//             pathname === "/swap" ? "bg-white" : ""
//           } rounded-full p-1`}
//         >
//           <Image
//             alt=""
//             src={pathname === "/swap" ? Swap1 : Swap}
//             className="w-6 h-6 text-[#B1A6F8]"
//           />
//         </div>
//       </Link>

//       <Link href="/account">
//         <div
//           onMouseEnter={() => handleMouseEnter("/account")}
//           onMouseLeave={() => handleMouseLeave()}
//           className={`${
//             pathname === "/account" ? "bg-white" : ""
//           } rounded-full p-1`}
//         >
//           <Image
//             alt=""
//             src={pathname === "/account" ? Profile1 : Profile}
//             className="w-6 h-6 text-[#B1A6F8]"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default MobileMenubar;

"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import creso1 from "../../assets/eoa/cresowhite.svg";
import { usePathname } from "next/navigation";
import Language from "../../assets/Dashboard/language.png";
import Dollar from "../../assets/Dashboard/dollor2.png";
import Wallet from "../../assets/Dashboard/Wallet.png";
import Wallet1 from "../../assets/Dashboard/Wallet1.png";
import Discover from "../../assets/Dashboard/Discover.png";
import Discover1 from "../../assets/Dashboard/Discover1.png";
import Swap from "../../assets/Dashboard/Swap.png";
import Swap1 from "../../assets/Dashboard/Swap1.png";
import menu from "../../assets/Dashboard/menu.png";
import Support from "../../assets/Dashboard/Support.png";
import Support1 from "../../assets/Dashboard/Support.svg";
import Info from "../../assets/Dashboard/info.png";
import Info1 from "../../assets/Dashboard/info1.png";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import Disconnect from "../../assets/network/disconnect.png";
import Twitter from "../../assets/Dashboard/twitter.png";
import Telegram from "../../assets/Dashboard/telegram.png";
import Etherscan from "../../assets/Dashboard/etherscan.png";
import Github from "../../assets/Dashboard/github.png";
import Discord from "../../assets/Dashboard/discord.png";
import Profile from "../../assets/Profile.png";
import Profile1 from "../../assets/profile1.svg";
import { WalletContext } from "@/providers/WalletProvider";

const MobileMenubar = () => {
  const { user } = useUser();
  // const [isOpen, setIsOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState("auto");
  const { setMenuOpen, menuOpen, setIsOpen, isOpen } =
    useContext(WalletContext);

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bodyOverflow]);

  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };
  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setBodyOverflow(menuOpen ? "auto" : "hidden");
  };
  const handleDisconnect = async () => {
    try {
      const res = await logOut();
      if (res) {
        window.location.href = "/";
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  function getInitials(username) {
    return username.substring(0, 2).toUpperCase();
  }
  return (
    <>
      {/* mobile nav */}
      <div className="flex  items-center justify-between fixed top-0  bg-[#2100EC] lg:hidden text-white p-4 w-full ">
        {/* MOBILE NAV ICON */}
        <div onClick={handleNav}>
          <Image alt="" src={menu} className="cursor-pointer " />
        </div>
        {/* menu open close functionality */}
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[70%] md:w-[50%] h-screen overflow-y-auto bg-white text-black p-4 ease-in duration-500 rounded-r-3xl "
              : "fixed left-[-100%]  top-0 p-4 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-start">
            <div onClick={handleNav} className="cursor-pointer">
              {/*close button of menu*/}
              <AiOutlineClose size={25} className="rounded-full" />
            </div>
          </div>
          {/* user name incials */}
          <div className="flex flex-col space-y-1 justify-center items-center pb-8">
            <div className=" bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              <p className=" font-semibold text-xs">
                {user ? getInitials(user.username) : ""}
              </p>
            </div>
            <p className="font-bold text-lg">{user?.username}</p>
            <p className="text-xs text-[#A09FAA]">{user?.email}</p>
            <p className="text-xs text-[#A09FAA]"></p>
            Last Backup:
            <p className="text-xm text-black">28 OCT 2023 </p>{" "}
          </div>
          {/* ENG and USD*/}
          <div className="flex mx-auto justify-center gap-4">
            <div className="flex flex-row items-center cursor-pointer group">
              <Image alt="" src={Language} className="h-7 w-7" />
              <div className="flex flex-row  items-center ">
                <p className="uppercase text-xs font-semibold group-hover:font-bold">
                  ENG
                </p>
                <AiOutlineDown className="w-3 h-3 " />
              </div>
            </div>
            <div className="flex flex-row items-center  cursor-pointer group">
              <Image alt="" src={Dollar} className="h-7 w-7" />
              <div className="flex flex-row items-center">
                <p className="uppercase text-xs font-semibold group-hover:font-bold">
                  USD
                </p>
                <AiOutlineDown className="w-3 h-3" />
              </div>
            </div>
          </div>
          {/* all pages */}
          <div className=" flex flex-col mt-4">
            <Link href="/dashboard">
              <div
                onMouseEnter={() => handleMouseEnter("/dashboard")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/dashboard"
                    ? "bg-white font-bold"
                    : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/dashboard" ? Wallet1 : Wallet}
                  className="w-6 h-6 text-[#B1A6F8] "
                />
                Dashboard
              </div>
            </Link>
            <hr />

            <Link href="/discover">
              <div
                onMouseEnter={() => handleMouseEnter("/discover")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/discover"
                    ? "bg-white font-bold"
                    : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/discover" ? Discover1 : Discover}
                  className="w-6 h-6 text-[#B1A6F8]"
                />
                Discover
              </div>
            </Link>
            <hr />

            <Link href="/swap">
              <div
                onMouseEnter={() => handleMouseEnter("/swap")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/swap" ? "bg-white font-bold" : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/swap" ? Swap1 : Swap}
                  className="w-6 h-6 text-[#B1A6F8]"
                />
                Swap & Bridge
              </div>
            </Link>
            <hr />

            <Link href="/about">
              <div
                onMouseEnter={() => handleMouseEnter("/about")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/about" ? "bg-white font-bold" : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/about" ? Info1 : Info}
                  className="w-6 h-6 text-[#B1A6F8]"
                />
                About Us
              </div>
            </Link>
            <hr />
            <Link href="/support">
              <div
                onMouseEnter={() => handleMouseEnter("/support")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/support"
                    ? "bg-white font-bold"
                    : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/support" ? Support1 : Support}
                  className="w-6 h-6 text-[#B1A6F8]"
                />
                Support
              </div>
            </Link>
            {/* Account page */}
            <hr />
            <Link href="/account">
              <div
                onMouseEnter={() => handleMouseEnter("/account")}
                onMouseLeave={() => handleMouseLeave()}
                className={`${
                  pathname === "/account"
                    ? "bg-white font-bold"
                    : " font-normal"
                } rounded-full p-4 flex gap-2 place-content-start `}
              >
                <Image
                  alt=""
                  src={pathname === "/account" ? Profile1 : Profile}
                  className="w-6 h-6 text-[#B1A6F8]"
                />
                Account
              </div>
            </Link>
          </div>
          {/* disconnect button */}
          <hr />
          <div
            onClick={handleDisconnect}
            className="flex flex-row gap-2 pl-2 items-center py-4 disconnect"
          >
            <Image alt="" src={Disconnect} />
            <p className="text-[#FF4085] hover:font-bold">Disconnect </p>
          </div>

          {/* Social icon */}
          <div className="flex justify-center gap-3 my-8">
            <a
              href="https://twitter.com/cresowallet"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:-translate-y-1"
            >
              <Image
                alt="Twitter"
                src={Twitter}
                className="  w-7 h-7  overflow-hidden"
              />
            </a>
            <a
              href="https://t.me/cresowallet"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:-translate-y-1"
            >
              <Image alt="Telegram" src={Telegram} className=" flex w-7 h-7" />
            </a>
            <a
              href="https://etherscan.io/token/0x41ea5d41eeacc2d5c4072260945118a13bb7ebce"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:-translate-y-1"
            >
              <Image alt="Etherscan" src={Etherscan} className="w-7 h-7" />
            </a>
            <a
              href="https://discord.com/invite/creso"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:-translate-y-1"
            >
              <Image alt="Discord" src={Discord} className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/CresoWallet"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transform hover:-translate-y-1"
            >
              <Image alt="Github" src={Github} className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="lg:hidden block top-4 right-8 fixed">
          <button
            aria-label="navigation"
            type="button"
            className="lg:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            onClick={toggleMenu}
          ></button>
        </div>

        <Image alt="" src={creso1} className=" " />
        <div className="flex items-center mx-4 gap-2 ">
          <div className=" bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center ">
            <p className="font-semibold text-xs items-center">
              {user ? getInitials(user.username) : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenubar;
