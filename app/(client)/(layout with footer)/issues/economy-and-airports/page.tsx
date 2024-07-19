import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/economy-and-airports"),
  title: {
    default: "BlueSkies Advocates | Airports and Economy",
    template: '%s | BlueSkies Advocates'
  },
  description: "Airports do not always provide economic benefits to communities as they can impose significant costs in terms of pollution, lost tourism, infrastructure and maintenance.",
  openGraph: {
    title: "Economic Impacts",
    description: "Airports do not always provide economic benefits to communities as they can impose significant costs in terms of pollution, lost tourism, infrastructure and maintenance.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/economy-and-airports",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Airports and Economy",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Airports and Economy" />
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