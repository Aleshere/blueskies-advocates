import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/greenwashing"),
  title: {
    default: "BlueSkies Advocates | Greenwashing",
    template: '%s | BlueSkies Advocates'
  },
  description: "To falsely promote aviation services or policies as environmentally friendly to gain a positive public image. Aviation false advertising. Carbon offsets.",
  openGraph: {
    title: "Greenwashing",
    description: "To falsely promote aviation services or policies as environmentally friendly to gain a positive public image. Aviation false advertising. Carbon offsets.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/greenwashing",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Greenwashing",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Greenwashing" />
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