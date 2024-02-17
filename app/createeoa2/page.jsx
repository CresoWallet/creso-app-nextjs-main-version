"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import greenblub from "../../assets/eoa/greenblub.png";
import pinkblub from "../../assets/eoa/pinkblub.png";
import Header from "@/components/common/HeaderEOA";
import CustomButton4 from "@/components/CustomButton4";

export default function CreateEoaWalletPage() {
  const [buttonNo, setButtonNo] = useState(false);
  const [buttonI, setButtonI] = useState(false);

  return (
    <div className=" h-full md:px-4  py-4 flex flex-col ">
      <Header title="Create EOA Wallet" className="md:hidden block" />

      <div className="text-center md:mx-auto mx-4 mb-4 max-w-lg">
        <h2 className="font-bold text-2xl mt-16 mb-4">Let&#39;s Get Started</h2>
        <p className="text-gray-500 mx-auto">
          Creso would like to gather usage data to better understand how our
          users interact with Creso. This data will be used to provide the
          service, which includes improving the service based on your use.
        </p>
      </div>

      <ul className="md:w-full max-w-lg md:mx-auto mx-4 my-8 font-bold">
        <li className="border border-solid  hover:border-black rounded-full p-3 mb-2 grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 my-auto mx-auto">
            <Image alt="" src={greenblub} />
          </div>
          <div className="col-span-10 md:col-span-11 text-sm md:text-base">
            Always allow you to opt-out via Settings
          </div>
        </li>
        <li className="border border-solid  hover:border-black rounded-full p-3 mb-2 grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 my-auto mx-auto">
            <Image alt="" src={greenblub} />
          </div>
          <div className="col-span-10 md:col-span-11 text-sm md:text-base">
            Send anonymized click and pageview events
          </div>
        </li>
        <li className="border border-solid  hover:border-black rounded-full p-3 mb-2 grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 my-auto mx-auto">
            <Image alt="" src={pinkblub} />
          </div>
          <div className="col-span-10 md:col-span-11 text-sm md:text-base">
            Never collect your full IP address
          </div>
        </li>
        <li className="border border-solid  hover:border-black rounded-full p-3 mb-2 grid grid-cols-12">
          <div className="col-span-2 md:col-span-1 my-auto mx-auto">
            <Image alt="" src={pinkblub} />
          </div>
          <div className="col-span-10 md:col-span-11 text-sm md:text-base">
            Never sell data. Ever!
          </div>
        </li>
      </ul>

      <div className="text-gray-500 md:mx-auto mx-4 mb-8 max-w-lg mt-4">
        <p className="">
          This data is aggregated and is therefore anonymous for the purposes of
          General Data Protection Regulation (EU) 2016/679.
        </p>
        <p className=" ">
          When you use Infura as your default RPC provider in Creso, Infura will
          collect your IP address and your Ethereum wallet address when you send
          a transaction. We don&lsquo;s store this information in a way that
          allows our systems to associate those two pieces of data. For more
          information on our privacy practices in general, see our
          <span className="text-[#FF4085] ml-1">Privacy Policy here.</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center">
        <CustomButton4
          isHovered={buttonNo}
          onMouseEnter={() => setButtonNo(true)}
          onMouseLeave={() => setButtonNo(false)}
          onClick={() => {
            setButtonNo(true);
            setButtonI(false);
          }}
        >
          No Thanks
        </CustomButton4>

        <CustomButton4
          isHovered={buttonI}
          onMouseEnter={() => setButtonI(true)}
          onMouseLeave={() => setButtonI(false)}
          onClick={() => {
            setButtonI(true);
            setButtonNo(false);
          }}
        >
          <Link href="/createpassword3"> I Agree </Link>
        </CustomButton4>
        {/* <button
          className={`rounded-full py-4 px-24 mx-2 mb-2 border-black ${
            buttonNo ? "bg-black text-white" : "bg-transparent text-black"
          } ${buttonNo ? "" : "border"}`}
          onMouseEnter={() => setButtonNo(true)}
          onMouseLeave={() => setButtonNo(false)}
          onClick={() => {
            setButtonNo(true);
            setButtonI(false);
          }}
        >
          No Thanks
        </button>
        <button
          className={`rounded-full py-4 md:px-24 px-28 mx-2 mb-2 border-black ${
            buttonI ? "bg-black text-white" : "bg-transparent text-black"
          } ${buttonI ? "" : "border"}`}
          onMouseEnter={() => setButtonI(true)}
          onMouseLeave={() => setButtonI(false)}
          onClick={() => {
            setButtonI(true);
            setButtonNo(false);
          }}
        >
          <Link href="/createpassword3"> I Agree </Link>
        </button> */}
      </div>
    </div>
  );
}
