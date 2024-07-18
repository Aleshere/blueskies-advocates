import React from 'react'
import Image from "next/image";

interface Props {
    favicon: string,
    altText: string,
}

const PopupIcon = ({ favicon, altText }: Props) => {
  
  return (
    <span className="inline-block rounded-lg">
        <Image src={`/assets/images/groups-favicons/${favicon}`} alt={altText} width="32" height="32" className="rounded-md" />
    </span>
  )
}

export default PopupIcon

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