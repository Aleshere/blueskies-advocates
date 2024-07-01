import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./../components/Navbar";
import "./globals.css";
import { Provider } from "./../utils/Provider";
import Footer from "../components/Footer";
import Script from "next/script";
import OriginTracker from "../components/OriginTracker";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/"),
  title: {
    default: "BlueSkies Advocates | Communities Before Aviation",
    template: '%s | BlueSkies Advocates'
  },
  description: "We care about communities and the environment. We share information and resources about aviation pollution and noise.",
  openGraph: {
    title: "BlueSkies Advocates | Communities Before Aviation",
    description: "We care about communities and the environment. We share information and resources about aviation pollution and noise.",
    type: "website",
    locale: "en_US",
    url: "https://weareblueskies.com/",
    siteName: "BlueSkies Advocates"
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
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${roboto.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}>
        <OriginTracker>
          <Provider>
            <Navbar />
            <main className="mx-auto max-w-5xl px-6" >
              {children}
            </main>
            <Footer />
          </Provider>
        </OriginTracker>
      </body>
    </html>
  );
}
