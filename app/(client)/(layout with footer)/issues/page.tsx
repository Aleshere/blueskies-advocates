import Header from "@/app/components/Header";
import { Metadata } from "next";
import { ScrollToTop } from "@/app/utils/ScrollToTop";

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues"),
  title: {
    default: "BlueSkies Advocates | Issues",
    template: '%s | BlueSkies Advocates'
  },
  description: "A webpage discusses current issues in aviation, including pollution, noise, the use of leaded fuel and the impacts on human health of mismanaged capacity growth.",
  openGraph: {
    title: "Issues",
    description: "A webpage discusses current issues in aviation, including pollution, noise, the use of leaded fuel and the impacts on human health of mismanaged capacity growth.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Current Issues",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Current Issues" />
      <ScrollToTop />
      

    </>
  );
}

export default page