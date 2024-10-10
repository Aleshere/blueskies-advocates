import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import '@/app/(client)/(layout with footer)/globals.css';
import { Provider } from '@/app/utils/Provider';
import Script from 'next/script';
import OriginTracker from '@/app/components/OriginTracker';
import { GoogleAnalytics } from '@next/third-parties/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/map'),
  title: {
    default: 'BlueSkies Advocates | Communities Before Aviation',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Map of current aviation battlegrounds.',
  openGraph: {
    title: 'BlueSkies Advocates | Communities Before Aviation',
    description: 'Map of current aviation battlegrounds.',
    type: 'website',
    locale: 'en_US',
    url: 'https://weareblueskies.com/map',
    siteName: 'Map | BlueSkies Advocates',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content={process.env.FACEBOOK_APP_ID} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
        <Script src="/assets/scripts/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/scripts/translation.js" strategy="beforeInteractive" />
        <Script src="//translate.google.com/translate_a/element.js?cb=TranslateInit" strategy="afterInteractive" />
        <link rel="apple-touch-icon-precomposed" href="/assets/favicons/favicon-180.png" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-TileImage" content="/assets/favicons/favicon-144.png" />
        <link rel="icon" href="/assets/favicons/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/assets/favicons/favicon-57.png" sizes="57x57" />
        <link rel="icon" href="/assets/favicons/favicon-76.png" sizes="76x76" />
        <link rel="icon" href="/assets/favicons/favicon-96.png" sizes="96x96" />
        <link rel="icon" href="/assets/favicons/favicon-120.png" sizes="120x120" />
        <link rel="icon" href="/assets/favicons/favicon-144.png" sizes="144x144" />
        <link rel="icon" href="/assets/favicons/favicon-152.png" sizes="152x152" />
        <link rel="icon" href="/assets/favicons/favicon-180.png" sizes="180x180" />
        <link rel="shortcut icon" href="/assets/favicons/favicon-196.png" sizes="196x196" />
      </head>
      <body className={`${roboto.className} h-full bg-neutral-50 text-indigo-950 dark:bg-[#1F2937] dark:text-[#ECEFF1] dark:selection:bg-purple-500`}>
        <OriginTracker>
          <Provider>
            <Navbar />
            <main className="">{children}</main>
          </Provider>
        </OriginTracker>
      </body>
    </html>
  );
}
