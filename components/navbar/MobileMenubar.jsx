"use client";
import React, { useState, useEffect } from "react";
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
import { AiOutlineClose, AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import Disconnect from "../../assets/network/disconnect.png";
import Profile from "../../assets/Profile.png";
import Profile1 from "../../assets/profile1.svg";
import NavigationButton from "./Navigation";
import SocialLogin from "./SocialLogin";

const MobileMenubar = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState("auto");

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
      <div className="flex  items-center justify-between fixed top-0  bg-[#2100EC] lg:hidden text-white p-4 w-full   ">
        {/* MOBILE NAV ICON */}
        <div onClick={handleNav}>
          <Image alt="" src={menu} className="cursor-pointer " />
        </div>
        {/* menu open close functionality */}
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%]  h-screen bg-white text-black p-4 ease-in duration-500 rounded-r-3xl "
              : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
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
            <NavigationButton
              pathname="/dashboard"
              label="Dashboard"
              icon={{
                active: Wallet1,
                inactive: Wallet,
              }}
              isActive={pathname === "/dashboard"}
            />
            <hr />
            <NavigationButton
              pathname="/discover"
              label="Discover"
              icon={{
                active: Discover1,
                inactive: Discover,
              }}
              isActive={pathname === "/discover"}
            />
            <hr />
            <NavigationButton
              pathname="/swap"
              label="Swap & Bridge"
              icon={{
                active: Swap1,
                inactive: Swap,
              }}
              isActive={pathname === "/swap"}
            />
            <hr />
            <NavigationButton
              pathname="/about"
              label="About Us"
              icon={{
                active: Info1,
                inactive: Info,
              }}
              isActive={pathname === "/about"}
            />
            <hr />
            <NavigationButton
              pathname="/support"
              label="Support"
              icon={{
                active: Support1,
                inactive: Support,
              }}
              isActive={pathname === "/support"}
            />
            {/* Account page */}
            <hr />
            <NavigationButton
              pathname="/account"
              label="Account"
              icon={{
                active: Profile1,
                inactive: Profile,
              }}
              isActive={pathname === "/account"}
            />
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
            <SocialLogin />
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
