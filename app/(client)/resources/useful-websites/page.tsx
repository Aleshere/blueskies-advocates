import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'
import { ScrollToTop } from "@/app/utils/ScrollToTop";

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareblueskies.com/resources/useful-websites"),
  title: {
    default: "Useful Websites",
    template: '%s | BlueSkies Advocates'
  },
  description: "Connect with organizations and local groups actively working to mitigate the effects of aviation noise and advocate for better policies.",
  openGraph: {
    title: "Useful Websites",
    description: "Connect with organizations and local groups actively working to mitigate the effects of aviation noise and advocate for better policies.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources/useful-websites",
    siteName: "BlueSkies Advocates",
    images: [
        {
            url: "https://www.weareblueskies.com/api/og?title=Useful Websites",
        },
    ],
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
                        href="https://350seattle.org/aviation-team/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='350 Seattle favicon.png' alt='350 Seattle' />
                            </span>

                            <h2 className="mt-2 font-bold">350 Seattle</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Working to halt the growth of aviation pollution and support justice for communities near airports.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.aef.org.uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='AEF favicon.png' alt='Aviation Environment Federation website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">AEF - Aviation Environment Federation</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                The principal UK NGO campaigning on aviation&apos;s impacts for people and the environment.
                            </p>
                        </a>
                        
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
                                We produce position papers, advocacy letters and presentations aimed for both the general public and key-decision makers.
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
                        href="https://www.airportwatch.org.uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Airport Watch favicon.png' alt='Airport Watch website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Airport Watch</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We are an umbrella movement networking the interested environmental organizations, airport community groups, and individuals opposed to unsustainable aviation expansion, and its damaging environmental effects, including climate change, noise and air pollution.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://anima-project.eu/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Anima favicon.jpg' alt='Aviation Noise Impact Management through novel Approaches website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">ANIMA - Aviation Noise Impact Management through novel Approaches</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                ANIMA is a constantly evolving EU-funded project, which deals with a global issue affecting thousands of people living around airports - aviation noise.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://banprivatejets.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Ban Private Jets favicon.png' alt='Ban Private Jets website' />
                            </span>
                            
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
                                <Favicon id='BFPCA favicon.png' alt='Brisbane Flight Path Community Alliance website' />
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
                                <Favicon id='CAGNE favicon.png' alt='CAGNE website' />
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
                        href="https://flightfree.net.au/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Flight Free AUS favicon.png' alt='Flight Free Australia website' />
                            </span>

                            <h2 className="mt-2 font-bold">Flight Free Australia</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We are in a climate emergency and the timescale of the government&apos;s aviation emissions reduction pathway is too long.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://flightfree.co.uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Flight Free UK favicon.png' alt='Flight Free UK website' />
                            </span>

                            <h2 className="mt-2 font-bold">Flight Free UK</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Our mission is to inform people of the climate impact of aviation and inspire people to travel by other means.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://antiaero.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='GAAM favicon.jpg' alt='Global Anti Aerotropolis Movement website' />
                            </span>

                            <h2 className="mt-2 font-bold">GAAM - Global Anti Aerotropolis Movement</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                GAAM aims to support local struggles and strengthen the international &apos;campaign community&apos; against harmful aerotropolis projects.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.galba.uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='GALBA favicon.png' alt='Group for Action on Leeds Bradford Airport website' />
                            </span>

                            <h2 className="mt-2 font-bold">GALBA - Group for Action on Leeds Bradford Airport</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We say no to more planes, more noise and more climate chaos. We say YES to a clean, green, sustainable future.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.justplanewrong.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Just Plane Wrong favicon.png' alt='Just Plane Wrong website' />
                            </span>

                            <h2 className="mt-2 font-bold">Just Plane Wrong</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We are a non-political coalition of residents and business-owners from the communities of Bream Creek, Marion Bay, Boomer Bay, Dunalley, Murdunna and Connelly&apos;s Marsh, which aims to preserve and promote our peaceful coastal and rural amenity and brand.
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
                            <span className="inline-block rounded-lg">
                                <Favicon id='NextGen Relief favicon.png' alt='NextGen Relief website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">NextGen Relief</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Check the history of NextGen, myths about it, community responses, State letters sent to the FAA.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="http://www.no3rdtullarunway.net.au/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='No 3rd Tulla favicon.png' alt='No 3rd Tulla Runway website' />
                            </span>

                            <h2 className="mt-2 font-bold">No 3rd Tulla Runway</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                The No 3rd Tulla Runway coalition is a grassroots campaign of community volunteers. The coalition respects the diversity of reasons members may have for opposing a third runway at Melbourne Airport.
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
                        href="https://www.birdsnotboeings.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='RAWSA favicon.jpg' alt='Residents Against Western Sydney Airport website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">RAWSA - Residents Against Western Sydney Airport</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Our mission is to create awareness of the community and environmental impacts from the construction of a 24 hour Airport in Western Sydney.
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
                        href="https://lbsaner.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SANER favicon.jpg' alt='Long Beach Small Plane Noise Reduction Group website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">SANeR - Long Beach Small Plane Noise Reduction Group</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                 SANeR is a 501 C organization and a community group based in Long Beach, CA, dedicated to addressing the issues caused by the significant increase in general aviation small planes, primarily from flight schools, at Long Beach Airport.
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
                                <Favicon id='SOS Camarillo favicon.png' alt='Save Our Skies Camarillo website' />
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
                                <Favicon id='SOS LA favicon.png' alt='Save Our Skies LA website' />
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
                        href="https://schipholwatch.nl/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Schiphol Watch favicon.png' alt='Schiphol Watch website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Schiphol Watch</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                SchipholWatch is a foundation that fights for a better living environment and therefore against the further growth of Schiphol at its current location.
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
                                <Favicon id='Sound Defense Alliance favicon.png' alt='Sound Defense Alliance website' />
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
                        href="https://spon-newportbeach.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='SPON favicon.png' alt='Still Protecting Our Newport website' />
                            </span>

                            <h2 className="mt-2 font-bold">SPON - Still Protecting Our Newport</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                SPON has fought for our community for 40 years to ensure it&apo;s not destroyed by John Wayne Airport airport&apo;s environmental impacts by defending the landmark 1985 Settlement Agreement which limits JWA growth, noise, and operations.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.flightpathgc.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stop the ILS favicon.png' alt='Stop Flight Path Impacts website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">Stop Flight Path Impacts</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Stop Flight Path Impacts - formerly known as Stop the ILS Flight Path - remains committed to what we&apos;ve always stood for; keeping the natural beauty of the Gold Coast, and the lifestyle it offers, protected from unnecessary noise and airborne pollution associated with Gold Coast Airport.
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
                            <span className="inline-block rounded-lg">
                                <Favicon id='Stop Saratoga Airport favicon.png' alt='Stop Saratoga Airport Expansion website' />
                            </span>
                            
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
                                <Favicon id='Studio City for Quiet Skies favicon.jpg' alt='Studio City for Quiet Skies website' />
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
                        href="https://www.uecna.eu/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='UECNA favicon.jpg' alt='UECNA website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">UECNA - Union Européenne Contre les Nuisances Aériennes</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                We help people who experience nuisances from aviation and worry about the impact of noise and emissions on their health.
                            </p>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.uknoiseassociation.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='UK Noise Association favicon.jpg' alt='UK Noise Association website' />
                            </span>
                            
                            <h2 className="mt-2 font-bold">UK Noise Association</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Our focus is on solutions. Generally noise is a problem with solutions. We set out measures governments and local authorities can implement.
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
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring"
                        href="https://www.worldwildlife.org/initiatives/cutting-aviation-pollution"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='WWF favicon.png' alt='WWF website' />
                            </span>

                            <h2 className="mt-2 font-bold">WWF - World Wildlife Fund</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                WWF was established in 1961 by a group of passionate and committed individuals who sought to secure the funding necessary to protect places and species that were threatened by human development.
                            </p>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
        <ScrollToTop />
    </>
  );
}

export default page