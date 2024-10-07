import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues'),
  title: {
    default: 'BlueSkies Advocates | Issues',
    template: '%s | BlueSkies Advocates',
  },
  description: 'A webpage discusses current issues in aviation, including pollution, noise, the use of leaded fuel and the impacts on human health of mismanaged capacity growth.',
  openGraph: {
    title: 'Aviation Issues',
    description: 'A webpage discusses current issues in aviation, including pollution, noise, the use of leaded fuel and the impacts on human health of mismanaged capacity growth.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for Aviation Issues',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Aviation Issues',
    description: 'A webpage discusses current issues in aviation, including pollution, noise, the use of leaded fuel and the impacts on human health of mismanaged capacity growth.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Aviation Issues',
      },
    ],
  },
};

interface Props {
  id: string;
  alt: string;
}

function Favicon({ id, alt }: Props) {
  return <Image src={`/assets/images/resources-favicons/${id}`} alt={alt} width="32" height="32" className="rounded-md" />;
}

const page = async () => {
  return (
    <>
      <Header title="Current Issues" />
      <ScrollToTop />

      <section>
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/flight-paths">
                <span className="inline-block rounded-lg">
                  <Favicon id="Flight Path.png" alt="Flight Path page icon" />
                </span>

                <h2 className="mt-2 font-bold">Flight Paths</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">A review of how consolidated flight paths impact those who have the misfortune to be placed under or near them.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/general-aviation">
                <span className="inline-block rounded-lg">
                  <Favicon id="General Aviation.png" alt="General Aviation page icon" />
                </span>

                <h2 className="mt-2 font-bold">General Aviation</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">How and why turboprops and piston engine planes are disrupting the lives of citizens.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/noise">
                <span className="inline-block rounded-lg">
                  <Favicon id="Noise.png" alt="Noise page icon" />
                </span>

                <h2 className="mt-2 font-bold">Noise</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">What is noise? How is aviation treating the topic? And what can be done to offer relief to citizens impacted by aviation noise?</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/pollution">
                <span className="inline-block rounded-lg">
                  <Favicon id="Pollution.png" alt="Pollution page icon" />
                </span>

                <h2 className="mt-2 font-bold">Pollution</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">Aviation is one of the fastest growing polluters out there. Let&apos;s find out why and how.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/economy-and-airports">
                <span className="inline-block rounded-lg">
                  <Favicon id="Economy.png" alt="Economic Impacts of Airports page icon" />
                </span>

                <h2 className="mt-2 font-bold">Economic Impacts</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">We often see reports and claims of how much every airport contributes to the economy. We will show you how that is not always the case.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/greenwashing">
                <span className="inline-block rounded-lg">
                  <Favicon id="Greenwashing.png" alt="Greenwashing page icon" />
                </span>

                <h2 className="mt-2 font-bold">Greenwashing</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">To falsely promote aviation services or policies as environmentally friendly to gain a positive public image.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/myth-busters">
                <span className="inline-block rounded-lg">
                  <Favicon id="Myths.png" alt="Myth-busters page icon" />
                </span>

                <h2 className="mt-2 font-bold">Myth-Busters</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">Debunking common myths in aviation debates, exposing fallacies and providing fact-based explanations to clarify misconceptions surrounding aviation's environmental, economic, and operational impacts.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/helicopters">
                <span className="inline-block rounded-lg">
                  <Favicon id="Helicopters.png" alt="Helicopters page icon" />
                </span>

                <h2 className="mt-2 font-bold">Helicopters</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">Police departments, news outlets, sightseeing tours. In certain cities, all add up creating non-stop disturbance to many citizens.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/military-jets">
                <span className="inline-block rounded-lg">
                  <Favicon id="Military.png" alt="Military Jets page icon" />
                </span>

                <h2 className="mt-2 font-bold">Military Jets</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">These jets achieve extreme noise levels. To the detriment of communities placed in one of their training grounds around the Country.</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/private-jets">
                <span className="inline-block rounded-lg">
                  <Favicon id="Private Jets.png" alt="Private Jets page icon" />
                </span>

                <h2 className="mt-2 font-bold">Private Jets</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">How the wealthy manage to have such a gigantic carbon footprint. Private flying is the worst means of transportation out there...</p>
              </a>

              <a className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring" href="/issues/tours-and-skydiving">
                <span className="inline-block rounded-lg">
                  <Favicon id="Tours.png" alt="Tours page icon" />
                </span>

                <h2 className="mt-2 font-bold">Tours, Shows and Sky-Diving</h2>

                <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">Sightseeing tours and skydiving operations contribute to noise and pollution through frequent use of aircraft, which produce significant engine noise and emit greenhouse gases.</p>
              </a>
            </div>
          </div>
        </div>

        <BackButton />
      </section>
    </>
  );
};

export default page;
