import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';
import Link from 'next/link';
import Card from '@/app/components/Card';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/take-action/log-complaints'),
  title: {
    default: 'BlueSkies Advocates | Log Complaints',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Logging complaints is crucial for fighting aviation noise and pollution, as it provides data that can drive legislative change and enforce regulations.',
  openGraph: {
    title: 'Log Complaints',
    description: 'Logging complaints is crucial for fighting aviation noise and pollution, as it provides data that can drive legislative change and enforce regulations.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/take-action/log-complaints',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/api/og?title=log-complaints',
        alt: 'Preview image for Log Complaints',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Log Complaints',
    description: 'Logging complaints is crucial for fighting aviation noise and pollution, as it provides data that can drive legislative change and enforce regulations.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Log Complaints',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Log Complaints" />
      <ScrollToTop />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card
                faviconFolder="complaints-favicons"
                favicon="Congress favicon.png"
                altText="Congress Section Icon"
                href="https://www.govtrack.us/congress/members/map"
                title="Find your Representative"
                description="This page helps you locate your local representatives to ensure your voice is heard in the fight against aviation pollution and noise."
              />

              <Card
                faviconFolder="complaints-favicons"
                favicon="Airnoise favicon.png"
                altText="Airnoise Section Icon"
                href="https://airnoise.io/"
                title="Airnoise.io"
                description="Airnoise.io is a service that simplifies the process of filing aircraft noise complaints. There is a free and a paid version of the app."
              />

              <Card faviconFolder="complaints-favicons" favicon="Airport favicon.png" altText="Airport Section Icon" href="https://adip.faa.gov/agis/public/#/public" title="Airports Information" description="Tool provided by the FAA to find all sort of information about your local airport." />
            </div>
          </div>
        </div>
      </section>

      <BackButton />
    </>
  );
};

export default page;
