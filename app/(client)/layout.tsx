import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "./../components/Navbar";
import "./globals.css";
import { Provider } from "./../utils/Provider";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  // metadataBase: new URL("/"),
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
    url: "/",
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
      <body className={`${roboto.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}>
        <Provider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6" >
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
