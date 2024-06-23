import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch';
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center h-16 w-full" >
            <Link href='/'>
              <div className={`${font.className} text-3xl dark:text-amber-50`}>
                Blue
                <span className="text-blue-500">Skies</span>
              </div>
            </Link>
            <div className="flex justify-between items-center" >
              <Link href='/tag' className='mr-10 font-bold'>
                Tags
              </Link>
              <ThemeSwitch />
            </div>
        </div>
    </div>
  )
}

export default Navbar