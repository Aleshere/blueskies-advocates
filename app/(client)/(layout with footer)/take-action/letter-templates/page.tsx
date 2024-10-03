import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';
import Link from 'next/link';
import Card from '@/app/components/Card';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/take-action/letter-templates'),
  title: {
    default: 'BlueSkies Advocates | Letter Templates',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Templates streamline the process and ensure consistent, effective communication without needing to reinvent the wheel each time.',
  openGraph: {
    title: 'Letter Templates',
    description: 'Templates streamline the process and ensure consistent, effective communication without needing to reinvent the wheel each time.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/take-action/letter-templates',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Letter Templates',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Letter Templates',
    description: 'Templates streamline the process and ensure consistent, effective communication without needing to reinvent the wheel each time.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Letter Templates',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Letter Templates" />
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
