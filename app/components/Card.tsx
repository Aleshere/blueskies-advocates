import React from 'react'
import Image from "next/image";

interface Props {
    faviconFolder: string,
    favicon: string,
    altText: string,
    href: string,
    title: string,
    description: string,
}

const Card = ({ favicon, altText, href, title, description, faviconFolder  }: Props) => {
  
  return (
    <a  className={cardStyle}
        href={href}
    >
        <span className="inline-block rounded-lg">
            <Image src={`/assets/images/${faviconFolder}/${favicon}`} alt={altText} width="32" height="32" className="rounded-md" />
        </span>

        <h2 className="mt-2 font-bold">{title}</h2>

        <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
            {description}
        </p>
    </a>
  )
}

export default Card

const cardStyle = `
block 
border
border-gray-900
p-4
rounded-md
shadow-sm
md:hover:shadow-md
md:hover:bg-[#f1f5f9]
md:hover:dark:bg-gray-950
transition-colors
focus:outline-none
focus:ring
relative
`