import Link from 'next/link'
import React from 'react'
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-6">
        <div className="container pt-9">
            <div className="mb-9 flex justify-center">
                <a href="https://www.facebook.com/aviationpollutes" className="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                </a>
                <a href="https://x.com/weAreBlueskies" className="text-neutral-800 dark:text-neutral-200">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8" 
                    fill="currentColor" 
                    viewBox="0 0 50 50">
                    <path 
                    d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
                </svg>
                </a>
            </div>
        </div>

        {/* <!--Copyright section--> */}
        <div
        className="text-center bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500 mb-20">
        © Copyright 2023-{new Date().getFullYear()} - All rights reserved
            <Link href='/'>
                <div className={`${font.className} text-3xl dark:text-amber-50 mt-10`}>
                Blue
                <span className="text-blue-500">Skies</span>
                </div>
            </Link>
        </div>
    </footer>
  )
}

export default Footer

