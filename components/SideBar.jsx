import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { IoDiamond } from "react-icons/io5";
import { BsFillPersonFill, BsBagFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

const SideBar = ({ children }) => {
  return (
    <div>
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <div className="bg-purple-800 hover:bg-purple-500 text-white p-3 rounded-lg inline-block">
              <IoDiamond size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href={"/"}>
            <div className="bg-gray-100  hover:bg-gray-300 text-black border border-gray-600  p-3 rounded-lg inline-block my-4 ">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href={"/customer"}>
            <div className="bg-gray-100 hover:bg-gray-300 text-black border border-gray-600 p-3 rounded-lg inline-block my-4 ">
              <BsFillPersonFill size={20} />
            </div>
          </Link>
          <Link href={"/order"}>
            <div className="bg-gray-100  hover:bg-gray-300 text-black border border-gray-600 p-3 rounded-lg inline-block my-4 ">
              <BsBagFill size={20} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-gray-100  hover:bg-gray-300 text-black border border-gray-600 p-3 rounded-lg inline-block my-4 ">
              <AiFillSetting size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 ">{children}</main>
    </div>
  );
};

export default SideBar;
