import Header from "@/app/components/Header";
import Timeline from "@/app/components/Timeline";
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
    title: "BlueSkies Advocates | Resource Center",
    description: "The comprehensive guide for individuals and communities affected by the environmental impacts of aviation.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources",
    siteName: "BlueSkies Advocates"
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Resource Center" />
      
      <ul className="w-full flex flex-col justify-start content-center min-h-[50vh]">
        <li>
            <Link className="block text-center text-xl" href='/resources/timeline' >NextGen Timeline</Link>
        </li>
      </ul>
    </>
  );
}

export default page