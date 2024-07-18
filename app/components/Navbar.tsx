'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeSwitch from './ThemeSwitch';
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti"
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => { 
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState('transparent');
  
  const navHandler = () => {
    setNavbar(!navbar);
  };
  
  useEffect(() => {

    const changeColor = () => {
      if(window.scrollY >= 90)
       {
        setColor('rgb(2 6 23 / var(--tw-bg-opacity))')
      } else {
        setColor('transparent')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])
  

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-[499]" >
        <div className="mx-auto max-w-5xl m-auto flex justify-between items-center py-2.5 px-6">
            {/* logo */}
            <Link href='/'>
              <div className={`${font.className} text-3xl text-blue-500 dark:text-amber-50`}>
                Blue
                <span className="text-blue-500">Skies</span>
              </div>
            </Link>
            
            {/* nav links */}
            <ul className="hidden sm:flex text-zinc-950">
                <div className="flex ">
                    <li className="dropdown-link">
                        <Link className="text-gray-500 dark:text-gray-400 mr-8" href='/resources'>Resources</Link>
                    </li>
                    <li className="dropdown-link">
                        <Link className="text-gray-500 dark:text-gray-400 mr-8" href='/map'>Map</Link>
                    </li>
                    <li className="dropdown-link">
                        <Link className="text-gray-500 dark:text-gray-400 mr-8" href='/issues'>Issues</Link>
                    </li>
                </div>
            </ul>  

            {/* Mobile Button */}
            <div className="flex" >
              <div onClick={navHandler} className="block z-10 mt-[7px] mr-2.5">
                {navbar ? (
                  <AiOutlineClose size={30} className="text-white cursor-pointer" />
                ) : (
                  <TiThMenu size={30} fill="rgb(59 130 246 / var(--tw-text-opacity))" className="dark:text-gray-400 cursor-pointer" />
                )}
              </div>
              
              <div>
                <ThemeSwitch />
              </div>
            </div>
            
            {/* Mobile Menu */}
            <div
              className={
                navbar
                  ? "absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200 "
                  : "absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6  w-full h-screen bg-black ease-in duration-200"
              }
            >
              <ul className="w-full flex flex-col justify-center content-center ">
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/' >Home</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/tag' >Blog Tags</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/resources' >Resources</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/issues' >Issues</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/take-action'>Take Action</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/map'>Map</Link>
                </li>
                <li onClick={navHandler} className="pl-0 pr-4 pt-3 pb-3 text-4xl text-center text-white hover:text-gray-500">
                    <Link className="block" href='/faq' >FAQ</Link>
                </li>
              </ul>
            </div>
        </div>
        <div className='mx-auto max-w-5xl m-auto md:flex hidden justify-center items-center' >
          <Link className="text-gray-500 dark:text-gray-400 mr-6" href='https://www.govtrack.us/congress/members/map'>Find Your Representative (USA)</Link>
          <Link className="text-gray-500 dark:text-gray-400 mr-6" href='https://members.parliament.uk/FindYourMP'>Find Your MP (UK)</Link>
          <Link className="text-gray-500 dark:text-gray-400" href='https://electorate.aec.gov.au/'>Find Your Electorate (AUS)</Link>
        </div>
    </div>
  );
};

export default Navbar;
