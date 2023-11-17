"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Backup from "@/components/Backup";
import CoinList from "@/components/CoinList";
import Mainnet from "@/components/Mainnet";
import Header from "@/components/Header";
import CapCard from "@/components/CapCard";
import CustomButton2 from "@/components/CustomButton2";
import User from "@/components/User";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import CresoCard from "@/components/CresoCard";
import SideNav from "@/components/SideNav";
import Search from "../../assets/Dashboard/Search.png";
import Ham from "../../assets/Dashboard/ham.png";
import CreateWallet from "@/components/CreateWallet";
import CoinWallet from "@/components/CoinWallet";
import CFX from "../../assets/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import SecureWallet from "@/components/SecureWallet";
import { useMediaQuery } from "react-responsive";
import Modal from "@/components/modal/Modal";
import { useUser } from "@/providers/UserProvider";
import { getUserWallets } from "@/clientApi/wallet";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { AUTH_TOKEN } from "@/constants";

const Dashboard = () => {
  const router = useRouter();
  const [showWallet, setShowWallet] = useState(false);
  const [showCoinWallet, setShowCoinWallet] = useState(false);
  const [secure, setSecure] = useState(false);
  const [navbarTrigger, setNavbarTrigger] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [wallets, setWallets] = useState([]);

  const { user, isAuthenticated, status } = useUser();

  useEffect(() => {
    if (status === "failed") {
      router.push("/login");
    }
  }, [status]);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const handleWallet = () => {
    setShowWallet(!showWallet);
  };

  const handleClose = () => {
    setShowWallet(false);
  };

  const handleCoinWallet = () => {
    setShowCoinWallet(!showCoinWallet);
  };

  const handleCloseCoinWallet = () => {
    setShowCoinWallet(false);
  };

  const handleCreateSecureWallet = () => {
    setSecure(!secure);
  };

  const handleCloseSecureWallet = () => {
    setSecure(false);
  };

  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  useEffect(() => {
    const computeWallet = async (data) => {
      let walletsEOA = await Promise.all(
        data.wallets.map(async (wallet, index) => {
          const provider = new ethers.JsonRpcProvider(
            "https://ethereum-goerli.publicnode.com"
          );

          const balanceInWei = await provider.getBalance(wallet.address);
          const balance = ethers.formatEther(balanceInWei);
          return {
            walletName: wallet.walletName,
            address: wallet.address,
            type: "EOA",
            balance: balance,
          };
        })
      );

      let smartWallet = await Promise.all(
        data.smartWallets.map(async (sWallet, index) => {
          const provider = new ethers.JsonRpcProvider(
            "https://ethereum-goerli.publicnode.com"
          );

          const balanceInWei = await provider.getBalance(sWallet.address);
          const balance = ethers.formatEther(balanceInWei);
          return {
            walletName: sWallet.walletName,
            address: sWallet.address,
            type: "AA",
            balance: balance,
          };
        })
      );

      let wallets = [...walletsEOA, ...smartWallet];

      return wallets;
    };
    async function fetchWallet() {
      try {
        if (isAuthenticated && localStorage.getItem(AUTH_TOKEN)) {
          const res = await getUserWallets();
          console.log(res.data);
          const walletsArr = await computeWallet(res.data);
          setWallets(walletsArr);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchWallet();
  }, [user]);

  if (status !== "authenticated") {
    return <div>{/* {<Loader/>} */}</div>;
  }

  return (
    <div>
      {navbarTrigger && (
        <div
          className="navbackdrop"
          onClick={() => setNavbarTrigger(!navbarTrigger)}
        ></div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 px-2 xl:pt-2 md:pt-2 mb-2">
        <div className="col-span-2">
          <div className="grid h-full responsivemb-cols">
            {isMobile && navbarTrigger && (
              <div className={`col-span-1 h-full responsivemb-nav `}>
                <SideNav />
              </div>
            )}

            {!isMobile && (
              <div className={`col-span-1 h-full`}>
                <SideNav />
              </div>
            )}

            <div className="col-span-3 xl:space-y-6 md:space-y-6 space-y-2 xl:mx-10 md:mx-4 xl:py-8 md:py-8">
              <div className="flex xl:hidden md:hidden">
                {showWallet && <CreateWallet handleClose={handleClose} />}
              </div>
              <div className="flex xl:hidden md:hidden">
                {/* {showCoinWallet && ( */}
                <CoinWallet
                  handleClose={handleCloseCoinWallet}
                  wallets={wallets}
                />
                {/* // )} */}
              </div>
              <div className="flex xl:hidden md:hidden">
                {/* {secure && ( */}
                <SecureWallet
                  handleClose={handleCloseSecureWallet}
                  wallets={wallets}
                  show={secure}
                />
                {/* // )} */}
              </div>
              <div className="block xl:hidden md:hidden">
                <Header />
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-1">
                  <p className="text-black text-3xl font-bold">Dashboard</p>
                  <p className="text-[#6F6E7A] text-xs">
                    Last Backup:
                    <span className="uppercase text-[#2100EC]">
                      28 OCT 2023
                    </span>
                  </p>
                </div>

                <div className="navhams">
                  <Image alt="" src={Search} className="navico" />
                  {isMobile && (
                    <Image
                      alt=""
                      className="navico"
                      src={Ham}
                      onClick={() => setNavbarTrigger(!navbarTrigger)}
                    />
                  )}
                </div>
              </div>
              <Backup onClick={() => setShowModal(true)} />
              <CoinList
                handleCreateWallet={handleWallet}
                handleCoinWallet={handleCoinWallet}
              />
              <Mainnet handleCreateSecureWallet={handleCreateSecureWallet} />
            </div>
          </div>
        </div>
        <div className="cols-span-1 relative">
          <div className="hidden xl:flex md:flex">
            {showWallet && <CreateWallet handleClose={handleClose} />}
          </div>
          <div className="hidden xl:flex md:flex">
            {showCoinWallet && (
              <CoinWallet
                handleClose={handleCloseCoinWallet}
                wallets={wallets}
              />
            )}
          </div>

          <div className="hidden xl:flex md:flex">
            {secure && (
              <SecureWallet
                handleClose={handleCloseSecureWallet}
                wallets={wallets}
              />
            )}
          </div>
          {showModal && <Modal onClose={() => setShowModal(false)} />}

          <div className="flex flex-col xl:pt-8 md:pt-8 space-y-4">
            <div className="hidden xl:block md:block">
              <Header />
            </div>

            <CresoCard />
            <div className="grid grid-cols-2 gap-2">
              <CapCard
                name="Market Cap"
                amount="$1,312.6B"
                icon="up"
                iconColor="[#FF4085]"
                percentageColor="[#FF4085]"
                percentage="9.39%"
              />
              <CapCard
                name="NFT Cap"
                amount="$2.16B"
                icon="down"
                iconColor="[#14B195]"
                percentageColor="[#14B195]"
                percentage="2.91%"
              />
              <CapCard
                name="24H Volume"
                amount="$125.6B"
                icon="up"
                iconColor="[#FF4085]"
                percentageColor="[#FF4085]"
                percentage="9.39%"
              />
              <CapCard
                name="Gas Burn Leaderboard"
                amount="$2.16B"
                icon="up"
                // iconColor="[#FF4085]"
                // percentageColor="[#FF4085]"
                percentage="386.58 ETH"
              />
            </div>
            <div className="flex flex-row items-center gap-2 mt-8">
              <CustomButton2
                name="Top Gainers"
                bgColor="[#D0F500]"
                borderColor="black"
                textColor="black"
              />
              <CustomButton2
                name="Top Losers"
                bgColor="white"
                borderColor="[#E5E5F0]"
                textColor="black"
              />
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-1">
                <User
                  name="SURE"
                  description="240 inSure DeFi"
                  image={Sure}
                  amount="$0,0041.66"
                  icon="down"
                  iconColor="[#FF4085]"
                  percentageColor="[#FF4085]"
                  percentage="0.23%"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <User
                  name="CFX"
                  description="76 Conflux"
                  image={CFX}
                  amount="$0.159046"
                  icon="up"
                  iconColor="[#14B195]"
                  percentageColor="[#14B195]"
                  percentage="44.91%"
                />
                <hr />
              </div>
              <div className="flex flex-col gap-1">
                <User
                  name="MINA"
                  description="51 Mina Protocol"
                  image={MINA}
                  amount="$0,8366.21"
                  icon="up"
                  iconColor="[#14B195]"
                  percentageColor="[#14B195]"
                  percentage="101.91%"
                />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
