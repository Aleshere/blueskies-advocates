import Link from 'next/link';
import React from 'react';
import { Lilita_One } from 'next/font/google';

const font = Lilita_One({ weight: '400', subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-6">
      {/* <!--Copyright section--> */}
      <div className="text-center bg-neutral-50 text-indigo-950 dark:bg-[#1F2937] dark:text-[#ECEFF1] dark:selection:bg-purple-500 mb-3">
        © Copyright 2023-{new Date().getFullYear()} - All rights reserved
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-[#ECEFF1] mt-10`}>
            Blue
            <span className="text-blue-500">Skies</span>
          </div>
        </Link>
      </div>

      <div className="container pt-9 mb-20">
        <div className="mb-9 flex justify-center">
          <a href="https://www.facebook.com/aviationpollutes" className=" text-neutral-800 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="https://x.com/weAreBlueskies" className="ml-8 mr-8 text-neutral-800 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 50 50">
              <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
            </svg>
          </a>
          <a href="https://www.reddit.com/user/IllDrop8822/" className="text-neutral-800 dark:text-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
              <circle cx={128} cy={128} r={128} fill="#FF4500" />
              <path
                fill="#FFF"
                d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981 27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667 7.324 0 13.275-5.95 13.275-13.278 0-7.324-5.95-13.275-13.275-13.275-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617 0 7.629 4.577 14.037 10.988 16.939a33.598 33.598 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036 41.202 0 74.622-23.196 74.622-52.036a35.29 35.29 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093ZM85.272 142.495c0-7.324 5.95-13.275 13.278-13.275 7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278Zm74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768-5.188 0-22.584-.765-31.59-9.768-1.371-1.373-1.371-3.51 0-4.883 1.374-1.371 3.51-1.371 4.884 0 5.8 5.8 18.008 7.782 26.706 7.782 8.699 0 21.058-1.983 26.704-7.782 1.374-1.371 3.51-1.371 4.884 0 1.22 1.373 1.22 3.51 0 4.883Zm-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275 0 7.17-5.95 13.275-13.277 13.275Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
