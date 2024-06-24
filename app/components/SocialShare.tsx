'use client';

import React from 'react'
import { FacebookShareButton, RedditShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, RedditIcon, LinkedinIcon } from "react-share";

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
            <TwitterIcon size={32} round />
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