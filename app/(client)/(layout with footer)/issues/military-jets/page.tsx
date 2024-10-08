import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues/military-jets'),
  title: {
    default: 'Military Jets',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Military Jets achieve extreme noise levels. To the detriment of communities placed in one of their training grounds around the Country.',
  openGraph: {
    title: 'Military Jets',
    description: 'Military Jets achieve extreme noise levels. To the detriment of communities placed in one of their training grounds around the Country.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues/military-jets',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Military Jets',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Military Jets',
    description: 'Military Jets achieve extreme noise levels. To the detriment of communities placed in one of their training grounds around the Country.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Military Jets',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Military Jets" />
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
