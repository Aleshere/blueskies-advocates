import Map from '@/app/components/Map';
import { Metadata } from 'next';

import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/map'),
  title: {
    default: 'Informational Map',
    template: '%s | BlueSkies Advocates',
  },
  description: 'A webpage featuring a map lists all groups fighting aviation pollution and noise.',
  openGraph: {
    title: 'BlueSkies Informational Map',
    description: 'A webpage featuring a map lists all groups fighting aviation pollution and noise.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/map',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for BlueSkies Map of Groups',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'BlueSkies Informational Map',
    description: 'A webpage featuring a map lists all groups fighting aviation pollution and noise.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for BlueSkies Map of Groups',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Map />
    </>
  );
};

export default page;
