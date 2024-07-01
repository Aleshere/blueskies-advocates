import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareblueskies.com/resources/useful-links"),
  title: {
    default: "BlueSkies Advocates | Resource Center",
    template: '%s | BlueSkies Advocates'
  },
  description: "Connect with organizations and local groups actively working to mitigate the effects of aviation noise and advocate for better policies.",
  openGraph: {
    title: "BlueSkies Advocates | Useful Links",
    description: "Connect with organizations and local groups actively working to mitigate the effects of aviation noise and advocate for better policies.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources/useful-links",
    siteName: "BlueSkies Advocates"
  },
}

interface Props {
    id: string,
    alt: string
}

function Favicon({ id, alt }: Props ) {
  return <Image src={`/assets/images/${id}`} alt={alt} width="32" height="32" className="rounded-md" />
}

const page = async () => {
       
  return (
    <>    
        <Header title="Useful Links" />
        
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://aviationimpactedcommunities.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='AICA favicon.png' alt='AICA' />
                            </span>

                            <h2 className="mt-2 font-bold">AICA</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                They produce position papers, advocacy letters and presentations aimed for the both the general public and key-decision makers.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://airportimpactreliefinc.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">AIR Inc.</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                East Boston environmental group working on mitigating the noise, air quality and traffic impacts of Boston Logan Airport.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.aireform.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">AiReform</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Valuable blog and information about the need to reform the FAA and aviation.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.fairchicago.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='FAIR Chicago favicon.jpg' alt='FAIR Allocation in Runways website' />
                            </span>

                            <h2 className="mt-2 font-bold">FAIR Allocation in Runways</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                A non-profit organization whose vision is to improve the quality of life in Chicagoland and NW Indiana neighborhoods negatively impacted by aviation changes.
                            </p>
                        </a>
                                                
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.nextgennoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='NextGen Noise favicon.png' alt='NextGen Noise website' />
                            </span>

                            <h2 className="mt-2 font-bold">NextGen Noise</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Real life stories from citizens and articles about health impacts of NextGen.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://nextgenrelief.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">NextGen Relief</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Check the history of NextGen, myths about it, community responses, State letters sent to the FAA.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.aviation-noise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='NOISE favicon.png' alt='N.O.I.S.E. website' />
                            </span>

                            <h2 className="mt-2 font-bold">N.O.I.S.E.</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                National Organization to Insure a Sound Controlled Environment: a community-based association composed of local elected officials committed to reducing the impact of aviation noise on local communities.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://oharenoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='O Hare Noise favicon.png' alt='O Hare Noise Compatibility Commissions website' />
                            </span>

                            <h2 className="mt-2 font-bold">O&apos;Hare Noise Compatibility Commissions</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                42 communities and 19 school districts dedicated to reducing aircraft noise in the communities around O&apos;Hare International Airport since 1996.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://oregonaviationwatch.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Oregon Aviation Watch</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Valuable blog and information about the need to research, educate and advocate on behalf of the public interest and public welfare about aviation issues.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://sosla.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOSLA favicon.png' alt='Save Our Skies LA website' />
                            </span>

                            <h2 className="mt-2 font-bold">Save Our Skies LA</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                A coalition of LA residents that fight for their homes, parks, and the environment by suing the FAA in federal court.
                            </p>
                        </a>
                                                
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.airplanenoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Scana favicon.jpg' alt='SCANA website' />
                            </span>

                            <h2 className="mt-2 font-bold">SCANA</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Citizens working to restore the quiet and peaceful skies that existed in Scottsdale before the FAA arbitrarily moved flight paths over heavily populated communities.
                            </p>
                        </a>
                        
                        <a
                        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="https://www.uproarla.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Uproar LA favicon.png' alt='Uproar LA website' />
                            </span>

                            <h2 className="mt-2 font-bold">Uproar LA</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                UproarLA fights the FAA&apos;s &quot;Nextgen&quot; low altitude airplane flight paths at Hollywood Burbank Airport.
                            </p>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page