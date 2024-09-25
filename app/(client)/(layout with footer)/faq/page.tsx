import FAQ from '@/app/components/FAQ';
import Header from '@/app/components/Header';
import { Metadata } from 'next';
import { questionsClimate } from '@/app/json/faqQuestions/climate.json';
import { questionsPrivateJets } from '@/app/json/faqQuestions/privateJets.json';
import { questionsFlightPaths } from '@/app/json/faqQuestions/flightPaths.json';
import { questionsLivingNearAirport } from '@/app/json/faqQuestions/livingNearAirport.json';
import { ScrollToTop } from '@/app/utils/ScrollToTop';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/faq'),
  title: {
    default: 'BlueSkies Advocates | FAQ',
    template: '%s | BlueSkies Advocates',
  },
  description: 'Find answers to the most frequently asked questions on our comprehensive FAQ page. Get help with common issues, learn more about aviation myths, and find quick solutions to your doubts.',
  openGraph: {
    title: 'FAQ',
    description: 'Find answers to the most frequently asked questions on our comprehensive FAQ page. Get help with common issues, learn more about aviation myths, and find quick solutions to your doubts.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/faq',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/api/og?title=FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'FAQ',
    description: 'Find answers to the most frequently asked questions on our comprehensive FAQ page. Get help with common issues, learn more about aviation myths, and find quick solutions to your doubts.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for FAQ',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="FAQ Section" />
      <ScrollToTop />

      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500">Aviation & Climate</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsClimate} />
      </div>

      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500">Ban Private Jets</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsPrivateJets} />
      </div>

      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500">Flight Paths</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsFlightPaths} />
      </div>

      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500">Living near an Airport</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsLivingNearAirport} />
      </div>
    </>
  );
};

export default page;
