import React from 'react'
import Image from "next/image";

interface Props {
    favicon: string,
    altText: string,
    href: string,
    title: string,
    description: string,
    source: string
}

const YouTube = () => {
  return (
    <div className='absolute top-0 right-1.5' >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
    </div>
  )
}

const Facebook = () => {
  return (
    <div className='absolute top-0 right-1.5' >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
      </svg>
    </div>
  )
}

const Podcast = () => {
  return (
    <div className='absolute top-0 right-1.5' >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000"
      className="icon flat-color"
      data-name="Flat Color"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          fill="#2ca9bc"
          d="M14 22h-4a1 1 0 010-2h1v-7a1 1 0 012 0v7h1a1 1 0 010 2z"
        ></path>
        <path
          fill="#000"
          d="M20.29 11.58l-7.51-5.74A5 5 0 007 2.09 5 5 0 003.78 4.2a5 5 0 001.35 7 5 5 0 003.53.78h.19l8 4.75a1.93 1.93 0 001 .28 2 2 0 001.7-1.01l1.18-1.75a2 2 0 00-.44-2.67z"
        ></path>
        <path
          fill="#2ca9bc"
          d="M8 12.77a1 1 0 01-.56-.17 1 1 0 01-.27-1.39l4.43-6.63a1 1 0 111.66 1.12l-4.47 6.63a1 1 0 01-.79.44z"
          data-name="secondary"
        ></path>
      </g>
    </svg>
    </div>
  )
}

const Default = () => {
  return (
    <div className='absolute top-0 right-1.5' >
      <svg viewBox="0 0 1024 1024" className="icon" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M759.3 352h84.3c15.5 0 28.1 9.2 28.1 20.5v277.3c0 11.3-12.6 20.5-28.1 20.5h-70.3" fill="#8CAAFF"></path><path d="M843.5 695h-70.2v-49.5h70.2c1.4 0 2.5-0.2 3.3-0.4v-268c-0.9-0.2-2-0.4-3.3-0.4h-84.2v-49.5h84.3c29.6 0 52.8 19.9 52.8 45.3v277.3c0 25.4-23.3 45.2-52.9 45.2z" fill="#333333"></path><path d="M203.5 258h531c13.7 0 24.7 11.1 24.7 24.7v457.8c0 13.7-11.1 24.7-24.7 24.7h-531c-13.7 0-24.7-11.1-24.7-24.7V282.7c-0.1-13.6 11-24.7 24.7-24.7z" fill="#FFFFFF"></path><path d="M734.5 790h-531c-27.3 0-49.5-22.2-49.5-49.5V282.7c0-27.3 22.2-49.5 49.5-49.5h531c27.3 0 49.5 22.2 49.5 49.5v457.8c0 27.3-22.2 49.5-49.5 49.5z m-531-507.3v457.8h531V282.7h-531z" fill="#333333"></path><path d="M595.8 521.2L407 656c-5.6 4-13.3 2.7-17.3-2.9-1.5-2.1-2.3-4.6-2.3-7.2V376.3c0-6.8 5.5-12.4 12.4-12.4 2.6 0 5.1 0.8 7.2 2.3L595.8 501c5.6 4 6.9 11.7 2.9 17.3-0.8 1.1-1.8 2.1-2.9 2.9z" fill="#8CAAFF"></path><path d="M399.9 683c-2.1 0-4.1-0.2-6.2-0.5-9.8-1.6-18.4-7-24.1-15.1-4.5-6.3-6.9-13.8-6.9-21.6V376.3c0-20.5 16.6-37.1 37.1-37.1 7.8 0 15.2 2.4 21.6 6.9l188.8 134.8c8.1 5.8 13.4 14.3 15 24.1 1.6 9.8-0.6 19.6-6.4 27.7-2.4 3.4-5.3 6.3-8.7 8.7L421.3 676.2c-6.3 4.5-13.8 6.8-21.4 6.8z m12.2-282.6v221.5l155.1-110.7-155.1-110.8zM581.4 501s0 0.1 0 0z" fill="#333333"></path></g></svg>
    </div>
  )
}

const VideoCard = ({ favicon, altText, href, title, description, source  }: Props) => {
  
  return (
    <a  className={cardStyle}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
    >
        <span className="inline-block rounded-lg">
            <Image src={`/assets/images/videos-favicons/${favicon}`} alt={altText} width="32" height="32" className="rounded-md" />
        </span>

        <h2 className="mt-2 font-bold">{title}</h2>

        <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
            {description}
        </p>
        {(() => {
          switch (source) {
            case 'youtube':
              return <YouTube />
            case 'facebook':
              return <Facebook />
              case 'podcast':
              return <Podcast />
            default:
              return < Default />
          }
        })()}
    </a>
  )
}

export default VideoCard

const cardStyle = `
block 
border
border-gray-900
p-4
rounded-md
shadow-sm
md:hover:shadow-md
md:hover:bg-[#fff8dc]
md:hover:dark:bg-gray-950
transition-colors
focus:outline-none
focus:ring
relative
`