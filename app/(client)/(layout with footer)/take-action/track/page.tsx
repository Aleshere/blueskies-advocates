import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';
import Link from 'next/link';
import Card from '@/app/components/Card';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/take-action/track'),
  title: {
    default: 'BlueSkies Advocates | Track Aircrafts',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Tracking planes is essential in combating aviation noise, as it helps identify the sources and frequency of disturbances, leading to more effective noise reduction strategies.',
  openGraph: {
    title: 'Track Aircrafts',
    description: 'Tracking planes is essential in combating aviation noise, as it helps identify the sources and frequency of disturbances, leading to more effective noise reduction strategies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/take-action/track',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Track Aircrafts',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Track Aircrafts',
    description: 'Tracking planes is essential in combating aviation noise, as it helps identify the sources and frequency of disturbances, leading to more effective noise reduction strategies.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Track Aircrafts',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Track Aircrafts" />
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
