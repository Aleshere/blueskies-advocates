import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "@/app/(client)/(layout with footer)/globals.css";
import { Provider } from "@/app/utils/Provider";
import Script from "next/script";
import OriginTracker from "@/app/components/OriginTracker";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/map"),
  title: {
    default: "BlueSkies Advocates | Communities Before Aviation",
    template: '%s | BlueSkies Advocates'
  },
  description: "Map of current aviation battlegrounds.",
  openGraph: {
    title: "BlueSkies Advocates | Communities Before Aviation",
    description: "Map of current aviation battlegrounds.",
    type: "website",
    locale: "en_US",
    url: "https://weareblueskies.com/map",
    siteName: "Map | BlueSkies Advocates"
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
            <main className="" >
              {children}
            </main>
          </Provider>
        </OriginTracker>
      </body>
    </html>
  );
}
