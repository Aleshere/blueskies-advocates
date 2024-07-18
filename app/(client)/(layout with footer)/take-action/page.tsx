import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Card from "@/app/components/Card";


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/take-action"),
  title: {
    default: "BlueSkies Advocates | Take Action",
    template: '%s | BlueSkies Advocates'
  },
  description: "Our Take Action page offers tools and resources to help you combat aviation pollution and noise. Join us in logging complaints, contacting officials, and supporting legislation to create a quieter, healthier community.",
  openGraph: {
    title: "Take Action",
    description: "Our Take Action page offers tools and resources to help you combat aviation pollution and noise. Join us in logging complaints, contacting officials, and supporting legislation to create a quieter, healthier community.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/take-action",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=take-action",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Take Action" />
      <ScrollToTop />
      
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      
                      <Card 
                        faviconFolder='action-favicons'
                        favicon='Complaint favicon.png'
                        altText='Complaints Section Icon'
                        href='/take-action/log-complaints'
                        title='Log Complaints'
                        description='Complaints are crucial as they provide data that can drive legislative change and enforce regulations.'
                      />
                      
                      <Card 
                        faviconFolder='action-favicons'
                        favicon='Track Flights favicon.png'
                        altText='Track Flights Section Icon'
                        href='/take-action/track'
                        title='Track'
                        description='Tracking planes is essential in combating aviation noise, as it helps identify the sources and frequency of disturbances, leading to more effective noise reduction strategies.'
                      />
                      
                      <Card 
                        faviconFolder='action-favicons'
                        favicon='Letter favicon.png'
                        altText='Letter Templates Section Icon'
                        href='/take-action/letter-templates'
                        title='Letter Templates'
                        description='Templates streamline the process and ensure consistent, effective communication without needing to reinvent the wheel each time.'
                      />    
                      
                      <Card 
                        faviconFolder='action-favicons'
                        favicon='Legislation favicon.png'
                        altText='Relevant Legislation Section Icon'
                        href='/take-action/legislation'
                        title='Legislation'
                        description='A page that lists relevant legislation essential for combating aviation pollution and noise.'
                      />    
                      
                      <Card 
                        faviconFolder='action-favicons'
                        favicon='Groups favicon.png'
                        altText='Join a Group Section Icon'
                        href='/resources/useful-websites'
                        title='Join a Group'
                        description='Ready to jump in and give a hand? Join a local group. And join our Facebook page.'
                      />        
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page