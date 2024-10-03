import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues/private-jets'),
  title: {
    default: 'BlueSkies Advocates | Private Jets',
    template: '%s | BlueSkies Advocates',
  },
  description: 'How the wealthy manage to have such a gigantic carbon footprint. Private flying is the worst means of transportation out there.',
  openGraph: {
    title: 'Private Jets',
    description: 'How the wealthy manage to have such a gigantic carbon footprint. Private flying is the worst means of transportation out there.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues/private-jets',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Private Jets',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Private Jets',
    description: 'How the wealthy manage to have such a gigantic carbon footprint. Private flying is the worst means of transportation out there.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Private Jets',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Private Jets" />
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
