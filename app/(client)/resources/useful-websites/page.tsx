import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareblueskies.com/resources/useful-websites"),
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
    url: "https://www.weareblueskies.com/resources/useful-websites",
    siteName: "BlueSkies Advocates"
  },
}

interface Props {
    id: string,
    alt: string
}

function Favicon({ id, alt }: Props ) {
  return <Image src={`/assets/images/groups-favicons/${id}`} alt={alt} width="32" height="32" className="rounded-md" />
}

const page = async () => {
       
  return (
    <>    
        <Header title="Useful Websites" />
        
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://aviationimpactedcommunities.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='AICA favicon.png' alt='AICA' />
                            </span>

                            <h2 className="mt-2 font-bold">AICA</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                They produce position papers, advocacy letters and presentations aimed for the both the general public and key-decision makers.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://airportimpactreliefinc.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='AIR Inc favicon.jpg' alt='Airport Impact Relief website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Airport Impact Relief</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                East Boston environmental group working on mitigating the noise, air quality and traffic impacts of Boston Logan Airport.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.airspaceforall.net/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Airspace for All</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Tell City Council that we do not need a 179-acre hobbyist airport on public land for private planes bringing noise and pollution to Boulder CO.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.aireform.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">AiReform</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Valuable blog and information about the need to reform the FAA and aviation.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://banprivatejets.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Ban Private Jets</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                BanPrivateJets.org is an initiative aiming at discussing realistic policies to massively reduce flying.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://bfpca.org.au/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='BFPCA favicon.png' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Brisbane Flight Path Community Alliance</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                BFPCA brings together Brisbane communities adversely affected by Brisbane Airport&apos;s flight paths - including noise pollution and human health impacts.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://bristolairportactionnetwork.wordpress.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='BAAN favicon.jpg' alt='Bristol Airport Action Network website' />
                            </span>

                            <h2 className="mt-2 font-bold">Bristol Airport Action Network</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We were a group of campaigners, made up of members from Extinction Rebellion groups in the south-west region, twenty-seven North Somerset parishes (Bristol Airport is based in North Somerset), Stop Bristol Airport Expansion (SBAx) and aviation scientists and academics.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://cagne.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='CAGNE favicon.png' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">CAGNE</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                CAGNE was at the forefront in opposing the expansion of Gatwick Airport (London UK) with a second runway for sound reasons and will object strongly to the emergency runway being used as an interim measure.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://quietskiesgoodyear.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Citizens 4 Quiet Skies Goodyear Arizona</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We strive to provide information to our community about the effects of aircraft noise, air pollution, and airport growth.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.fairchicago.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='FAIR Chicago favicon.jpg' alt='FAIR Allocation in Runways website' />
                            </span>

                            <h2 className="mt-2 font-bold">FAIR Allocation in Runways</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A non-profit organization whose vision is to improve the quality of life in Chicagoland and NW Indiana neighborhoods negatively impacted by aviation changes.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.farnboroughnoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Farnborough Noise favicon.png' alt='Farnborough Noise website' />
                            </span>

                            <h2 className="mt-2 font-bold">Farnborough Noise Group</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We aim to raise issues resulting from Farnborough Airport&apos;s operations and changes to its airspace for the public in West Surrey and East Hampshire and we engage with the hundred or so parish, borough and county councils and nine regional MPs.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://ladacan.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Ladacan favicon.jpg' alt='Ladacan website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Ladacan</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                LADACAN - the Luton And District Association for the Control of Aircraft Noise - is a constituted community group pursuing noise and environmental impact mitigation of Luton Airport.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.mocoquietskies.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Montgomery County Quiet Skies favicon.png' alt='Montgomery County Quiet Skies Coalition website' />
                            </span>

                            <h2 className="mt-2 font-bold">Montgomery County Quiet Skies Coalition</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A dedicated group of community members who were spurred to action by illegitimate FAA actions in shifting and concentrating air traffic over our communities with no notice or environmental review.
                            </p>
                        </a>
                                                
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.nextgennoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='NextGen Noise favicon.png' alt='NextGen Noise website' />
                            </span>

                            <h2 className="mt-2 font-bold">NextGen Noise</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Real life stories from citizens and articles about health impacts of NextGen.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://nextgenrelief.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">NextGen Relief</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Check the history of NextGen, myths about it, community responses, State letters sent to the FAA.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.aviation-noise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='NOISE favicon.png' alt='N.O.I.S.E. website' />
                            </span>

                            <h2 className="mt-2 font-bold">N.O.I.S.E.</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                National Organization to Insure a Sound Controlled Environment: a community-based association composed of local elected officials committed to reducing the impact of aviation noise on local communities.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://oharenoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='O Hare Noise favicon.png' alt='O Hare Noise Compatibility Commissions website' />
                            </span>

                            <h2 className="mt-2 font-bold">O&apos;Hare Noise Compatibility Commission</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                42 communities and 19 school districts dedicated to reducing aircraft noise in the communities around O&apos;Hare International Airport since 1996.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://oregonaviationwatch.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Oregon Aviation Watch</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Valuable blog and information about the need to research, educate and advocate on behalf of the public interest and public welfare about aviation issues.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.pacoimabeautiful.org/programs/shutdown-whiteman-airport"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Pacoima Beautiful favicon.png' alt='Pacoima Beautiful website' />
                            </span>

                            <h2 className="mt-2 font-bold">Pacoima Beautiful - Shutdown Whiteman Airport</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Calling on the Los Angeles County Board of Supervisors to Shutdown Whiteman Airport and prioritize the public safety of Pacoima residents living under the flightpath.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://peskyplanes.weebly.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Pesky Planes favicon.jpg' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Pesky Planes - Residents Against Pesky Flying Schools</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Flying Schools are taking over regional airports in Australia, and destroying the amenity of the local residents.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.quietcommunities.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Quiet Communities favicon.png' alt='Quiet Communities website' />
                            </span>

                            <h2 className="mt-2 font-bold">Quiet Communities</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Quiet Communities is a consortium of scientific, medical, and legal professionals - from the United States and abroad - concerned with the adverse impacts of noise and related pollution on health and the environment.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://sites.google.com/view/quietskiesoverarapahoecountyco/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Quiet Skies over Arapahoe County</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Grassroots organization formed by residents due to the 78% increase of flight training over our community.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="http://quietskiesovergoldcanyon.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Quiet Skies over Gold Canyon</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                That aircraft should enjoy an absolutely unfettered right to make as much noise as they want, anytime they want, anywhere they want, is a right unparalleled in history.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.socalsfv.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='QSWH favicon.jpg' alt='Quiet Skies WH website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Quiet Skies Woodland Hills</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Action to Preserve Quality of Life, Health and our Ecosystems on both a Local and National level.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.quietparks.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Quiet Parks favicon.png' alt='Quiet Parks website' />
                            </span>

                            <h2 className="mt-2 font-bold">Quiet Parks</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Quiet Parks International is a non-profit committed to saving quiet for the benefit of all life. Formerly known as the One Square Inch of Silence Foundation.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://safe-landing.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Safe Landing favicon.png' alt='Safe Landing website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Safe Landing</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We are a global community of aviation workers who act from within the sector to rapidly reduce the climate impact of aviation.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://safeskiesutah.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Safe Skies Utah favicon.png' alt='Safe Skies Utah website' />
                            </span>

                            <h2 className="mt-2 font-bold">Safe Skies Utah</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Safe Skies Utah represents a group of American citizens seeking a collaborative solution to safeguard hearing, cognitive and mental health from F35 noise levels from Hill Air Force Base while supporting Air Force operational readiness.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.saveourskiesalliance.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOS Alliance CO favicon.png' alt='Save Our Skies Alliance CO website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Save Our Skies Alliance</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                 Alliance of grassroots groups fighting general aviation noise and lead pollution.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://saveourskiescamarillo.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOs Camarillo favicon.png' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Save Our Skies Camarillo</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                 A group of citizens that are concerned over the negative effects expansion and increased jet traffic at Camarillo Airport will have on the quality of life for Camarillo residents.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://soseastbay.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOS East Bay CA favicon.png' alt='Save Our Skies East Bay website' />
                            </span>

                            <h2 className="mt-2 font-bold">Save Our Skies East Bay</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A volunteer group formed in 2016 by residents of the East Bay, who noticed that the frequency and volume of airplane traffic over their tranquil homes had seemingly exploded overnight.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://saveourskiesvt.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOS Vermont favicon.jpg' alt='Save Our Skies from the F-35 website' />
                            </span>

                            <h2 className="mt-2 font-bold">Save Our Skies from the F-35</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Our mission is to cancel the basing of the F-35A Joint Strike Fighter at the Vermont Air National Guard Station located at the Burlington, Vermont International Airport.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://sosla.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SOSLA favicon.png' alt='Save Our Skies LA website' />
                            </span>

                            <h2 className="mt-2 font-bold">Save Our Skies LA</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A coalition of LA residents that fight for their homes, parks, and the environment by suing the FAA in federal court.
                            </p>
                        </a>
                                                
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.airplanenoise.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Scana favicon.jpg' alt='SCANA website' />
                            </span>

                            <h2 className="mt-2 font-bold">SCANA</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Citizens working to restore the quiet and peaceful skies that existed in Scottsdale before the FAA arbitrarily moved flight paths over heavily populated communities.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.quietskiesnow.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Sherman Oaks Encino favicon.png' alt='Sherman Oaks and Encino for Quiet Skies website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Sherman Oaks and Encino for Quiet Skies</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Since January 2019, we advocate for a solution to the FAA&apos;s disruptive aviation routes across new communities including noise-sensitive, protected open spaces, high elevations and Fire Hazard Severity Zone-designated areas of the foothills and Santa Monica Mountains. 
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.skypossepaloalto.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Sky Posse Palo Alto</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Advocacy group the the California mid peninsula. Informative archive of information and history of letters sent to representatives.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.sounddefensealliance.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Sound Defense Alliance favicon.png' alt='Vliegerplein website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Sound Defense Alliance</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Sound Defense Alliance works to protect communities and the natural environment from harmful Navy Growler jet activity around the Salish Sea, Puget Sound, and Olympic Peninsula.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://stanstedairportwatch.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stansted Airport Watch favicon.png' alt='Stansted Airport Watch website' />
                            </span>

                            <h2 className="mt-2 font-bold">Stansted Airport Watch</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Stansted Airport Watch was launched in May 2021 as the successor to Stop Stansted Expansion, which was established in 2002 in response to Government proposals for expanding a number of UK airports, including Stansted.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://stay-grounded.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stay Grounded favicon.png' alt='Stay Grounded website' />
                            </span>

                            <h2 className="mt-2 font-bold">Stay Grounded</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Stay Grounded aims to exchange experiences, support each other, and campaign together for a reduction of aviation and its negative impacts on climate and health.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.stopoakexpansion.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stop Oak Expansion favicon.jpg' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Stop Oakland Expansion Coalition</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Oakland Airport is planning an expansion to add up to 16 new gates putting the community and climate at risk. More flights = more global warming, more pollution, more noise. We are organizing for a healthier future.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="http://www.stopairport.com/info/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg bg-blue-500 p-4"></span>

                            <h2 className="mt-2 font-bold">Stop Saratoga Airport Expansion</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We are uniformly opposed to any expansion of the runways at the Saratoga County Airport and this includes the no build option. We vote no to all proposals.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://stoptheairport53702.wixsite.com/stoptheairport"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stop the Airport favicon.jpg' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Stop the Airport</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Concerned citizens from Thurston County (WA) who say no to airport noise, traffic and pollution.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://stopthechopnynj.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stop The Chop favicon.jpg' alt='Stop The Chop website' />
                            </span>

                            <h2 className="mt-2 font-bold">Stop The Chop</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A grassroots organization formed to reduce helicopter noise and ban nonessential flights over the NYC Metropolitan Area.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.studiocityforquietskies.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Studio City for Quiet Skies favicon.jpg' alt='Pesky Planes website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Studio City for Quiet Skies</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                A group of Studio City volunteers who want to save their community, wildlife preserves, and quality of life from the current, focused, NextGen-like flight paths that moved in late 2016 over the protected Santa Monica Mountains.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://trentonthreatenedskies.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Trenton favicon.png' alt='Vliegerplein website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Trenton Threatened Skies</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Trenton-Mercer Airport&apos;s expanded flight schedule, using larger planes and altered flight paths, has suddenly disrupted our quality of life and threatened our health.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://vifs.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Vashon Island Fair Skies favicon.png' alt='Vashon Island Fair Skies website' />
                            </span>

                            <h2 className="mt-2 font-bold">Vashon Island Fair Skies</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Bringing fairness to ongoing FAA airspace redesign efforts, and justice to those who woke up one day to find a razor sharp superhighway of hundreds of low flying jets a day laser focused over their previously peaceful homes and farms.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://vliegerplein.be/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Vliegerplein favicon.jpg' alt='Vliegerplein website' />
                            </span>

                            <h2 className="mt-2 font-bold">Vliegerplein</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Through dialogue and substantiated study we advocate for socially, economically, ecologically and socially responsible alternatives for Deurne airport.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.uproarla.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Uproar LA favicon.png' alt='Uproar LA website' />
                            </span>

                            <h2 className="mt-2 font-bold">Uproar LA</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
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