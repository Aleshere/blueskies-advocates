import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/flight-paths"),
  title: {
    default: "BlueSkies Advocates | Flight Paths",
    template: '%s | BlueSkies Advocates'
  },
  description: "A review of how consolidated flight paths impact those who have the misfortune to be placed under or near them.",
  openGraph: {
    title: "Flight Paths",
    description: "A review of how consolidated flight paths impact those who have the misfortune to be placed under or near them.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/flight-paths",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=FLIGHT PATHS",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Flight Paths" />
      <ScrollToTop />
      
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        
                        <div className='text-center ' >Work in Progress</div>
                        <div className='text-center ' >Work in Progress</div>
                        <div className='text-center ' >Work in Progress</div>
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page