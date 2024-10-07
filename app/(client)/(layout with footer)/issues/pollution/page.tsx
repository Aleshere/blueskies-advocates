import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues/pollution'),
  title: {
    default: 'Pollution',
    template: '%s | BlueSkies Advocates',
  },
  description: "Aviation is one of the fastest growing polluters out there. Let's find out why and how. CO2 and GHG. Greenhouse gases. Climate impacts and targets.",
  openGraph: {
    title: 'Pollution',
    description: "Aviation is one of the fastest growing polluters out there. Let's find out why and how. CO2 and GHG. Greenhouse gases. Climate impacts and targets.",
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues/pollution',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Pollution',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Pollution',
    description: "Aviation is one of the fastest growing polluters out there. Let's find out why and how. CO2 and GHG. Greenhouse gases. Climate impacts and targets.",
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Pollution',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Pollution" />
      <ScrollToTop />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="text-center ">Work in Progress</div>
              <div className="text-center ">Work in Progress</div>
              <div className="text-center ">Work in Progress</div>
            </div>
          </div>
        </div>
      </section>

      <BackButton />
    </>
  );
};

export default page;
