"use client";
import Image from "next/image";
import Header from "@/components/Header";
import LeftHeader from "@/components/LeftHeader";
import SideNav from "@/components/navbar/SideNav";
import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { CiSearch } from "react-icons/ci";
import Ham from "../../assets/Dashboard/ham.png";
import LeftSide from "./LeftSide";
import { useUser } from "@/providers/UserProvider";
import RightSide from "./RightSide";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";
import SecureWallet from "@/components/SecureWallet";

const MainLayout = () => {
  const router = useRouter();
  const [showCreateWallet, setShowCreateWallet] = useState(false);
  const [showCoinWallet, setShowCoinWallet] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [usd, setUsd] = useState(0);
  // const [wallets, setWallets] = useState([]);
  const [walletType, setWalletType] = useState("");
  const [coinData, setCoinData] = useState("");
  const { user, isAuthenticated, status } = useUser();
  const {
    secureWalletBalance,
    eoaWalletBalance,
    wallets,
    secureWalletAddress,
    eoaWalletAddress,
    fetchWallet,
    navbarTrigger,
    setNavbarTrigger,
    isMobile,
  } = useContext(WalletContext);

  useEffect(() => {
    if (status === "failed") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleCreateWallet = () => {
    setShowCreateWallet(!showCreateWallet);
    // close other models
    setShowCoinWallet(true);
    setShowWallet(true);
  };

  const handleClose = () => {
    setShowCreateWallet(false);
  };

  const handleCoinWallet = (data) => {
    setCoinData(data?.item);
    setShowCoinWallet(true);
    // close other models
    setShowCreateWallet(true);
    setShowWallet(true);
  };

  const handleShowModel = () => {
    setShowModal(true);
    // close other models
    setShowCoinWallet(false);
    setShowWallet(false);
    setShowCreateWallet(false);
  };

  const handleCloseCoinWallet = () => {
    setShowCoinWallet(false);
  };

  const handleShowWallet = (data) => {
    setWalletType(data?.walletName);
    setShowWallet(true);
    // close other models
    setShowCoinWallet(false);
    setShowCreateWallet(false);
  };

  const handleCloseShowWallet = () => {
    setShowWallet(false);
  };

  // useEffect(() => {
  //   if (navbarTrigger) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [navbarTrigger]);

  return (
    <>
      <div className="grid lg:grid-cols-10 lg:divide-x">
        {/* ------------ Leftside Main ---------- */}
        <div className="lg:col-span-6 pt-16 px-6">
          <div className="">
            <LeftHeader
              title={"Dashboard"}
              descriptionColor={""}
              icon1={<CiSearch />}
              mobileImg={Ham}
              navbarTrigger={navbarTrigger}
              setNavbarTrigger={setNavbarTrigger}
              isMobile={isMobile}
            />

            <LeftSide
              showWallet={showWallet}
              navbarTrigger={navbarTrigger}
              setNavbarTrigger={setNavbarTrigger}
              handleCreateWallet={handleCreateWallet}
              handleCoinWallet={handleCoinWallet}
              handleShowModel={handleShowModel}
              handleShowWallet={handleShowWallet}
            />
          </div>
        </div>

        <hr className="lg:hidden mt-10 lg:mt-0" />

        {/* ------------ Rightside Main ---------- */}
        <div className="lg:col-span-4 pt-14 px-4">
          <Header />
          <RightSide
            showCoinWallet={showCoinWallet}
            showModal={showModal}
            setShowModal={setShowModal}
            walletType={walletType}
            coinData={coinData}
            secureWalletBalance={secureWalletBalance}
            eoaWalletBalance={eoaWalletBalance}
            wallets={wallets}
            showCreateWallet={showCreateWallet}
            handleCloseShowWallet={handleCloseShowWallet}
            handleCloseCoinWallet={handleCloseCoinWallet}
            handleClose={handleClose}
            showWallet={showWallet}
            user={user}
          />
        </div>

      </div>
      {/* ------------ Popup Main ---------- */}
      {isMobile && <div className="">
        {showWallet && (
          <SecureWallet
            handleClose={handleCloseShowWallet}
            wallets={wallets}
            walletType={walletType}
            secureWalletBalance={secureWalletBalance}
            eoaWalletBalance={eoaWalletBalance}
          />
        )}
      </div>}
    </>
  );
};

export default MainLayout;
