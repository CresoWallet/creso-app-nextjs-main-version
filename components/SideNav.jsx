import React from "react";
import Link from "next/link";
import Image from "next/image";
import Creso3 from "../assets/Dashboard/creso3.png";
import Wallet from "../assets/Dashboard/Wallet.png";
import Discover from "../assets/Dashboard/Discover.png";
import Swap from "../assets/Dashboard/Swap.png";
import Info from "../assets/Dashboard/info.png";
import Support from "../assets/Dashboard/Support.png";
import { usePathname, useRouter } from "next/navigation";
import { root } from "postcss";
import { useMediaQuery } from 'react-responsive';

const SideNav = () => {
  const pathName = usePathname();

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="bg-[#2100EC] rounded-3xl flex flex-col pt-12 h-screen lg:h-full items-center lg:items-start relative">
      <div className="flex flex-row items-center gap-1 px-8">
        <Image alt="" src={Creso3} className="w-8 h-8" />
        <p className="uppercase text-white text-lg hidden lg:block">creso</p>
      </div>
      <div className={`flex flex-col mt-14 ${isMobile ? 'mr-5' : 'mr-10'}`}>
         <p className="text-xs text-[#B1A6F8] px-8 invisible">Menu</p>
        <Link href="/" className="group relative">
          <div className={`w-8 h-10 group-hover:bg-white absolute top-5 ${pathName==="/"?"bg-white":""} `}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/"?"bg-[#2100EC]":""}`}></div>
          <div className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${pathName==="/"?"bg-white":""}`}>
            <Image alt="" src={Wallet} className="w-6 h-6 text-[#B1A6F8]" />
            <p className={`text-[#B1A6F8] text-sm group-hover:text-black hidden lg:block ${pathName==="/"?"text-black":""}`}>
              Dashboard
            </p>
          </div>
          <div className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${pathName==="/"?"bg-white":""}`}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/"?"bg-[#2100EC]":""}`}></div>
        </Link>

        <Link href="/discover" className="group relative -mt-8">
          <div className={`w-8 h-10 group-hover:bg-white absolute top-5 ${pathName==="/discover"?"bg-white":""} `}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/discover"?"bg-[#2100EC]":""}`}></div>
          <div className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${pathName==="/discover"?"bg-white":""}`}>
            <Image alt="" src={Discover} className="w-6 h-6 text-[#B1A6F8]" />
            <p className={`text-[#B1A6F8] text-sm group-hover:text-black hidden lg:block ${pathName==="/discover"?"text-black":""}`}>
              Discover
            </p>
          </div>
          <div className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${pathName==="/discover"?"bg-white":""}`}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/discover"?"bg-[#2100EC]":""}`}></div>
        </Link>

        <Link href="/swap" className="group relative -mt-8">
          <div className={`w-8 h-10 group-hover:bg-white absolute top-5 ${pathName==="/swap"?"bg-white":""} `}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/swap"?"bg-[#2100EC]":""}`}></div>
          <div className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${pathName==="/swap"?"bg-white":""}`}>
            <Image alt="" src={Swap} className="w-6 h-6 text-[#B1A6F8]" />
            <p className={`text-[#B1A6F8] text-sm group-hover:text-black hidden lg:block ${pathName==="/swap"?"text-black":""}`}>
              Swap
            </p>
          </div>
          <div className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${pathName==="/swap"?"bg-white":""}`}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/swap"?"bg-[#2100EC]":""}`}></div>
        </Link>

        <div className="py-4">
          <hr className="text-[#B1A6F8]" />
        </div>

        <Link href="/about" className="group relative">
          <div className={`w-8 h-10 group-hover:bg-white absolute top-5 ${pathName==="/about"?"bg-white":""} `}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/about"?"bg-[#2100EC]":""}`}></div>
          <div className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${pathName==="/about"?"bg-white":""}`}>
          <Image alt="" src={Info} className="w-6 h-6 text-[#B1A6F8]" />
            <p className={`text-[#B1A6F8] text-sm group-hover:text-black hidden lg:block ${pathName==="/about"?"text-black":""}`}>
            About us
            </p>
          </div>
          <div className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${pathName==="/about"?"bg-white":""}`}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/about"?"bg-[#2100EC]":""}`}></div>
        </Link>

        <div className="group relative -mt-8">
          <div className={`w-8 h-10 group-hover:bg-white absolute top-5 ${pathName==="/support"?"bg-white":""} `}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/support"?"bg-[#2100EC]":""}`}></div>
          <div className={`flex flex-row gap-4 items-center group-hover:bg-white rounded-r-full py-4 px-8 ${pathName==="/support"?"bg-white":""}`}>
          <Image alt="" src={Support} className="w-6 h-6 text-[#B1A6F8]" />
            <p className={`text-[#B1A6F8] text-sm group-hover:text-black hidden lg:block`}>
            Support
            </p>
          </div>
          <div className={`w-8 h-10 group-hover:bg-white absolute bottom-5 ${pathName==="/support"?"bg-white":""}`}></div>
          <div className={`w-10 h-9 bg-[#2100EC] relative rounded-l-full left-[3px] lg:left-0 ${pathName==="/support"?"bg-[#2100EC]":""}`}></div>
        </div>
      </div>

      {/* <p className="text-xs text-[#B1A6F8] text-center absolute bottom-20 w-full">© Copyright 2023</p> */}

    </div>
  );
};

export default SideNav;