'use client'

import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from './ThemeSwitch';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbartest = () => { 
  const [navbar, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10" >
        <div className="mx-auto max-w-5xl m-auto flex justify-between items-center py-2.5 px-6">
            {/* logo */}
            <Link href='/'>
              <div className={`${font.className} text-3xl dark:text-amber-50`}>
                Blue
                <span className="text-blue-500">Skies</span>
              </div>
            </Link>
            
            {/* nav links */}
            <ul className="hidden sm:flex text-zinc-950">
                <div className="flex ">
                    <li className="dropdown-link">
                        <Link className="dark:text-gray-400" href='/'>Home</Link>
                    </li>
                    <li className="dropdown-link">
                        <Link className="dark:text-gray-400" href='/faq'>FAQ</Link>
                    </li>
                    <li className="dropdown-link">
                        <Link className="dark:text-gray-400 mr-8" href='/tag'>Tags</Link>
                    </li>
                    <li>
                        <ThemeSwitch />
                    </li>
                </div>
            </ul>

            {/* Mobile Button */}
            <div onClick={navHandler} className="block sm:hidden z-10">
              {navbar ? (
                <AiOutlineClose size={30} className="text-white cursor-pointer" />
              ) : (
                <AiOutlineMenu size={30} className="dark:text-gray-400 cursor-pointer" />
              )}
            </div>
            
            {/* Mobile Menu */}
            <div
              className={
                navbar
                  ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200 "
                  : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6  w-full h-screen bg-black ease-in duration-200"
              }
            >
              <ul className="w-full flex flex-col justify-center content-center ">
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/' >Home</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/faq' >FAQ</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/tag' >Tags</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <ThemeSwitch />
                </li>
              </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbartest;
