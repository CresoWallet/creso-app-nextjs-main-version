"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import party from "../../assets/eoa/party.jpg";

import CustomButton from "@/components/CustomButton";
import Header from "@/components/common/HeaderEOA";

function Completion() {
  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <Header />
      <div className="text-center md:mx-auto mt-16 mb-4 max-w-xl border-black border-2 p-4 rounded-xl">
        <Image
          src={party}
          alt=""
          className="h-14 w-14 justify-center mx-auto"
        />
        <h2 className="md:text-2xl text-xl text-center font-bold mb-4">
          Wallet Creation Successful
        </h2>

        <div className="h-full md:px-4 py-4 flex flex-col mx-auto  md:text-base text-sm">
          <p className="justify-start">
            You&#39;ve successfully protected your wallet. Keep your Secret
            Recovery Phrase safe and secret -- it&#39;s your responsibility!
          </p>
          <br />
          <p className="justify-center"> Remember:</p>
          <div className="ml-6">
            <ul className="list-disc">
              <li>Creso can&#39;t recover your Secret Recovery Phrase.</li>
              <li>Creso will never ask you for your Secret Recovery Phrase.</li>
              <li>
                Never share your Secret Recovery Phrase with anyone or risk your
                funds being stolen.
              </li>
              <li className="text-[#FF4085]">Learn more</li>
            </ul>
          </div>
          <p className="text-[#FF4085] md:text-base text-sm my-4">
            Advanced configuration{" "}
          </p>
          <div className=" md:px-20 px-16 ">
            <Link href="/dashboard">
              <CustomButton name="Got it!" bgColor="black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completion;
