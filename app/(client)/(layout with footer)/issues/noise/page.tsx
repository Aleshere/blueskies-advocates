import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/noise"),
  title: {
    default: "BlueSkies Advocates | Noise",
    template: '%s | BlueSkies Advocates'
  },
  description: "What is noise? How is aviation treating the topic? And what can be done to offer relief to citizens impacted by aviation noise? DNL policy. FAA.",
  openGraph: {
    title: "Noise",
    description: "What is noise? How is aviation treating the topic? And what can be done to offer relief to citizens impacted by aviation noise? DNL policy. FAA.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/noise",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Noise",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Noise" />
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