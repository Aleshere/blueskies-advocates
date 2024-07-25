import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/tours-and-skydiving"),
  title: {
    default: "BlueSkies Advocates | Tours and Skydiving",
    template: '%s | BlueSkies Advocates'
  },
  description: "Sightseeing tours and skydiving operations contribute to noise and pollution through frequent use of aircraft, which produce significant engine noise and emit greenhouse gases.",
  openGraph: {
    title: "Tours and Skydiving",
    description: "Sightseeing tours and skydiving operations contribute to noise and pollution through frequent use of aircraft, which produce significant engine noise and emit greenhouse gases.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/tours-and-skydiving",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=TOURS & SKYDIVING",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Tours and Skydiving" />
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