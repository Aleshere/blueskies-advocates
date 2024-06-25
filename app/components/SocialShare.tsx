'use client';

import React from 'react'
import { FacebookShareButton, RedditShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, RedditIcon, LinkedinIcon } from "react-share";

interface LayoutProps {
  title?: string;
  url?: string;
  description?: string;
}

const SocialShare: React.FC<LayoutProps> = ({ url, title }) => {
  return (
    <>
        <FacebookShareButton
            url={url!}
            className='mr-3 ml-3'
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
            title={title}
            url={url!}
            className='mr-3 ml-3'
        >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="currentColor" 
            viewBox="0 0 50 50">
            <path 
            d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
        </svg>
        </TwitterShareButton>
        <RedditShareButton
            title={`BlueSkies Advocates, Communities before Aviation: ${url}`}
            url={url!}
            className='mr-3 ml-3'
        >
            <RedditIcon size={32} round />
        </RedditShareButton>
        <LinkedinShareButton
            title={'BlueSkies Advocates, Communities before Aviation'}
            summary={title}
            url={url!}
            source={url!}
            className='mr-3 ml-3'
        >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    </>
  )
}

export default SocialShare