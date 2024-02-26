"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoWalletOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Disconnect from "../assets/network/disconnect.png";
import { useUser } from "@/providers/UserProvider";
import { logOut } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import Wallet from "./Wallet";
import {
  getUserInformationApi,
  updateUserInformationApi,
} from "@/clientApi/auth";

const UserDetails = () => {
  const router = useRouter();

  const { user, isAuthenticated, status } = useUser();
  const [openPopup, setOpenPopup] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const popupRef = useRef();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Fetch user information when the component mounts
    async function fetchUserInformation() {
      try {
        const res = await getUserInformationApi();
        setUserInfo(res.data); // Update user information state
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    }

    fetchUserInformation();
  }, []);

  const handleButton = () => {
    setOpenPopup(true);
  };

  const handleopenwallet = () => {
    setOpenPopup(false);
    setOpenWallet(true);
  };
  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      setOpenPopup(false);
    }
  };

  const handleDisconnect = async () => {
    // localStorage.removeItem(AUTH_TOKEN);
    // window.location.reload();

    try {
      const res = await logOut();
      if (res) {
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  function getInitials(username) {
    return username.substring(0, 2).toUpperCase();
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className=" bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
        onClick={handleButton}
      >
        <p className=" font-semibold text-xs  " onClick={handleButton}>
          {user ? getInitials(user.username) : ""}
        </p>
      </div>

      {openPopup && (
        <div
          className="fixed top-0 right-0 w-full h-full flex xl:items-start items-center  z-10 xl:justify-center md:justify-center justify-center bg-gray-800 bg-opacity-75"
          ref={popupRef}
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-3xl px-12 py-12 xl:mr-10 mr-0 md:mr-5 md:mt-32 xl:mt-32 mt-0  w-80">
            <div
              className="flex flex-row items-center -between cursor-pointer hover:scale-105 py-4 hover:font-bold"
              onClick={handleopenwallet}
            >
              <div className="flex flex-row gap-2 pl-2 items-center">
                <IoWalletOutline />

                <p className="hover:font-bold">Wallet </p>
              </div>
              <MdKeyboardArrowRight />
            </div>

            <hr />
            <div
              onClick={handleDisconnect}
              className="flex flex-row gap-2 pl-2 items-center py-4 disconnect"
            >
              <Image alt="" src={Disconnect} />
              <p className="text-[#FF4085] hover:font-bold">Disconnect </p>
            </div>
          </div>
        </div>
      )}

      {openWallet && <Wallet setOpenWallet={setOpenWallet} />}

      {/* <Image alt="" src={User} /> */}
      <div className="flex flex-col space-y-2">
        <p className="font-bold text-xl">{userInfo?.username}</p>
        <p className="text-sm text-[#A09FAA]">{userInfo?.email}</p>
        <p className="text-xs text-[#A09FAA] mr-xside">
          Last Backup test:{" "}
          <span className="text-sm text-black">28 OCT 2023 </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
