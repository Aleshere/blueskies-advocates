import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/resources/videos"),
  title: {
    default: "BlueSkies Advocates | Videos",
    template: '%s | BlueSkies Advocates'
  },
  description: "Explore our collection of informative videos addressing the impacts of aviation pollution and noise. This page features expert talks, community stories, scientific explanations, and practical solutions to help you understand and combat the challenges of aircraft noise and emissions.",
  openGraph: {
    title: "BlueSkies Advocates | Videos",
    description: "Explore our collection of informative videos addressing the impacts of aviation pollution and noise. This page features expert talks, community stories, scientific explanations, and practical solutions to help you understand and combat the challenges of aircraft noise and emissions.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources/videos",
    siteName: "BlueSkies Advocates"
  },
}

interface Props {
    id: string,
    alt: string
}

function Favicon({ id, alt }: Props ) {
  return <Image src={`/assets/images/videos-favicons/${id}`} alt={alt} width="32" height="32" className="rounded-md" />
}

const page = async () => {
    
  return (
    <>    
      <Header title="Useful Videos" />
      
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.youtube.com/watch?v=Y5ny2TJl3Y8&t=4s"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Climate Adam favicon.jpg' alt='Climate Adam Channel YouTube' />
                            </span>

                            <h2 className="mt-2 font-bold">Climate Adam</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Flying is worse for the climate than you think
                            </p>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page