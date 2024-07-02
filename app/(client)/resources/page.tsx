import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'


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

interface Props {
    id: string,
    alt: string
}

function Favicon({ id, alt }: Props ) {
  return <Image src={`/assets/images/resources-favicons/${id}`} alt={alt} width="32" height="32" className="rounded-md" />
}

const page = async () => {
    
  return (
    <>    
      <Header title="Resource Center" />
      <ScrollToTop />
      
      <section>
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8" >
          <div className="grid grid-cols-1 gap-y-8" >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3" >
              
              <a
                className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                href='/resources/useful-websites'
                >
                    <span className="inline-block rounded-lg">
                        <Favicon id='Websites.png' alt='Useful websites page icon' />
                    </span>

                    <h2 className="mt-2 font-bold">Useful Websites</h2>

                    <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                        Connect with organizations and local groups actively working to mitigate the effects of aviation noise and advocate for better policies.
                    </p>
                </a>
                
                              <a
                className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                href='/resources/videos'
                >
                    <span className="inline-block rounded-lg">
                        <Favicon id='Videos.png' alt='Videos page icon' />
                    </span>

                    <h2 className="mt-2 font-bold">Useful Videos</h2>

                    <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                        Explore a curated collection of videos addressing the impacts of aviation pollution and noise.
                    </p>
                </a>
                
                              <a
                className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                href='/resources/timeline'
                >
                    <span className="inline-block rounded-lg">
                        <Favicon id='Timeline.png' alt='Timeline page icon' />
                    </span>

                    <h2 className="mt-2 font-bold">NextGen Timeline</h2>

                    <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                        Timeline of the events that led to the current problems for communities impacted by consolidated flight paths: NextGen from its inception to today.
                    </p>
                </a>
                
            </div>
          </div>
        </div>
        
        <BackButton />
      </section>
    </>
  );
}

export default page