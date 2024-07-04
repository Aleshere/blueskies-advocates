import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Link from "next/link";
import Card from "@/app/components/Card";


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/take-action/legislation"),
  title: {
    default: "BlueSkies Advocates | Legislation",
    template: '%s | BlueSkies Advocates'
  },
  description: "A page that lists relevant legislation essential for combating aviation pollution and noise.",
  openGraph: {
    title: "Legislation",
    description: "A page that lists relevant legislation essential for combating aviation pollution and noise.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/take-action/legislation",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=legislation",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Legislation" />
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