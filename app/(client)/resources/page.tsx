import Header from "@/app/components/Header";
import { Metadata } from "next";
import Link from "next/link";


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/resources"),
  title: {
    default: "BlueSkies Advocates | Resource Center",
    template: '%s | BlueSkies Advocates'
  },
  description: "The comprehensive guide for individuals and communities affected by the environmental impacts of aviation.",
  openGraph: {
    title: "Resource Center",
    description: "The comprehensive guide for individuals and communities affected by the environmental impacts of aviation.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Resources",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Resource Center" />
      
      <ul className="w-full flex flex-col justify-start content-center min-h-[50vh]">
        <li>
            <Link className="block text-center text-xl py-3" href='/resources/useful-websites' >Useful Websites</Link>
        </li>
        <li>
            <Link className="block text-center text-xl py-3" href='/resources/videos' >Useful Videos</Link>
        </li>
        <li>
            <Link className="block text-center text-xl py-3" href='/resources/timeline' >NextGen Timeline</Link>
        </li>
      </ul>
    </>
  );
}

export default page