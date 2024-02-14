"use client";
import CapCard from "@/components/CapCard";
import CresoCard from "@/components/CresoCard";
import CustomButton from "@/components/CustomButton";
import CustomButton2 from "@/components/CustomButton2";
// import Header from "@/components/Header";
import SideNav from "@/components/navbar/SideNav";
import User from "@/components/User";
import React, { useContext, useEffect, useState } from "react";
import Sure from "../../assets/Dashboard/gainers/sure.png";
import Vector from "../../assets/AboutUs/Vector.png";
import Image from "next/image";
import Info from "../../assets/AboutUs/info.png";
import Arrow from "../../assets/AboutUs/Arrow.2.png";
import CFX from "../../assets/AboutUs/gainers/cfx.png";
import MINA from "../../assets/AboutUs/gainers/mina.png";
import { useMediaQuery } from "react-responsive";
import Ham from "../../assets/Dashboard/ham.png";
import LeftHeader from "@/components/LeftHeader";
import RightMain from "../MainLayout/RightMain";
import { WalletContext } from "@/providers/WalletProvider";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { CgTrash } from "react-icons/cg";

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const isAccordionActive = (accordionId) => {
    return (
      accordionId === activeAccordion ||
      (activeAccordion === 1 && accordionId === 1)
    );
  };

  const { navbarTrigger, setNavbarTrigger, isMobile } =
    useContext(WalletContext);

  useEffect(() => {
    if (navbarTrigger) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navbarTrigger]);

  return (
    <>
      <div className="lg:grid lg:grid-cols-10 divide-x">
        {/* ------------ Leftside Main ---------- */}
        <div className="lg:col-span-6 pt-16 md:px-12 px-6">
          <div className="">
            <LeftHeader
              title={"About us"}
              // navbarTrigger={navbarTrigger}
              // setNavbarTrigger={setNavbarTrigger}
              // isMobile={isMobile}
            />
          </div>

          <div className="col-span-6 space-y-6 ">
            <div className="flex flex-col gap-10  ">
              <div className="flex items-center justify-start gap-5 space-y-10  ">
                <Image src={Vector} alt="" className="cursor-pointer mt-10  " />
                <div>
                  <p className="text-black text-3xl font-semibold ">creso</p>
                  <p className="text-gray-600 text-sm">Beta Version 1.0.0</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-2">
                <AiTwotoneInfoCircle className="sm:h-10 sm:w-10 h-14 w-14" />
                <p className="text-gray-600 text-sm">
                  This is the Beta Version of Creso Wallet Ecosystem. To keep up
                  to date with all the upcoming updates of the Beta please join
                  our community.
                </p>
              </div>
              <div className=" justify-center items-end my-2 bottom-0 block md:hidden w-full">
                <button className="flex flex-row gap-2 items-center cursor-pointer hover:scale-105 justify-center py-4 border rounded-full w-full border-solid border-black bg-[#D0F500]">
                  <p className="text-black text-sm hover:font-bold ">Update</p>
                </button>
              </div>
            </div>

            {/* accordion */}
            <div className="flex flex-col gap-10">
              <div
                className="hover:translate-y-1"
                onClick={() => toggleAccordion(1)}
                aria-expanded={isAccordionActive(1)}
              >
                <div className="flex items-center justify-between mb-2 cursor-pointer">
                  <p className="text-xl font-semibold ">User Agreement</p>
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
                <hr />
              </div>
              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(1) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black">
                  User Agreement will be Launched soon. Stay connected.
                </p>
              </div>

              <div
                className="hover:translate-y-1"
                onClick={() => toggleAccordion(2)}
                aria-expanded={isAccordionActive(2)}
              >
                <div className="flex items-center justify-between mb-2 cursor-pointer ">
                  <p className="text-xl font-semibold ">Privacy Policy</p>
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
                <hr />
              </div>

              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(2) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black ">
                  Your tokens are secure. Detailed privacy policy will be
                  launched by end of January, 2024.
                </p>
              </div>
              <div className="hover:translate-y-1">
                <div
                  className="flex items-center justify-between mb-2 cursor-pointer"
                  onClick={() => toggleAccordion(3)}
                  aria-expanded={isAccordionActive(3)}
                >
                  <p className="text-xl font-semibold ">Official Website</p>
                  <MdOutlineKeyboardArrowDown size={20} />
                </div>
                <hr />
              </div>
              <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-stale-200 rounded-3xl mb-2 shadow-2xl ${
                  isAccordionActive(3) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black ">
                  Creso ecosystem&#39;s official website is https://creso.io .
                  All other website claiming same are total scame. Please check
                  domain authority before onboarding funds.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="lg:hidden mt-10 lg:mt-0 hidden md:block" />

        {/* ------------ Rightside Main ---------- */}
        <div className="pt-14 col-span-4 md:px-10 sm:px-6 hidden md:block">
          {/* <Header /> */}
          <RightMain />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
