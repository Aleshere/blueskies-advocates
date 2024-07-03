import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'
import { ScrollToTop } from "@/app/utils/ScrollToTop";


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weareblueskies.com/resources/videos"),
  title: {
    default: "BlueSkies Advocates | Videos",
    template: '%s | BlueSkies Advocates'
  },
  description: "Explore our collection of informative videos addressing the impacts of aviation pollution and noise. This page features expert talks, community stories, scientific explanations, and practical solutions to help you understand and combat the challenges of aircraft noise and emissions.",
  openGraph: {
    title: "Video Section",
    description: "Explore our collection of informative videos addressing the impacts of aviation pollution and noise. This page features expert talks, community stories, scientific explanations, and practical solutions to help you understand and combat the challenges of aircraft noise and emissions.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources/videos",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=Video Section",
        },
      ],
  },
}

interface Props {
    id: string,
    alt: string
}

function Favicon({ id, alt }: Props ) {
  return <Image src={`/assets/images/videos-favicons/${id}`} alt={alt} width="32" height="32" className="rounded-md" />
}

const page = async () => {
    
  return (
    <>    
      <Header title="Useful Videos" />
      <ScrollToTop />
      
        <section>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring relative"
                        href="https://fb.watch/t54hcrBgrN/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='BFPCA favicon.png' alt='BFPCA Facebook Video Link' />
                            </span>

                            <h2 className="mt-2 font-bold">BFPCA</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                This BFPCA-led survey of affected residents in December 2020 to January 2021 is a powerful and insightful summary of the community experience since the new runway and the revised airpath operations have been operating.
                            </p>
                            <div className='absolute top-0 right-1.5' >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                              </svg>
                            </div>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring relative"
                        href="https://www.youtube.com/watch?v=Y5ny2TJl3Y8&t=4s"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Climate Adam favicon.jpg' alt='Climate Adam Channel YouTube' />
                            </span>

                            <h2 className="mt-2 font-bold">Climate Adam</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Flying is worse for the climate than you think
                            </p>
                            <div className='absolute top-0 right-1.5' >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                              </svg>
                            </div>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring relative"
                        href="https://fb.watch/t54vCinAmj/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Eleanor Holmes Norton favicon.jpg' alt='Eleanor Holmes Norton Facebook Video Link' />
                            </span>

                            <h2 className="mt-2 font-bold">Eleanor Holmes Norton</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                As co-chair of the Quiet Skies Caucus representing DC, which is plagued by aircraft noise, I highlighted two provisions I got included in the House-passed FAA reauthorization to combat helicopter noise in today&apos;s Aviation hearing.
                            </p>
                            <div className='absolute top-0 right-1.5' >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                              </svg>
                            </div>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring relative"
                        href="https://fb.watch/t54nr6TVZ9/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='Jenny Jones favicon.jpg' alt='Jenny Jones Facebook Video Link' />
                            </span>

                            <h2 className="mt-2 font-bold">Jenny Jones, Green Party Member of the House of Lords</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Aviation expansion really isn&apos;t worth it. I use a NEF report to explain why bigger airports don&apos;t benefit the country economically, or in terms of jobs.
                            </p>
                            <div className='absolute top-0 right-1.5' >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                              </svg>
                            </div>
                        </a>
                        
                        <a
                        className="block border border-gray-900 p-4 rounded-md shadow-sm md:hover:shadow-md md:hover:bg-[#fff8dc] md:hover:dark:bg-gray-950 transition-colors focus:outline-none focus:ring relative"
                        href="https://fb.watch/t54aYHQxBu/"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                            <span className="inline-block rounded-lg">
                                <Favicon id='PBS favicon.png' alt='PBS Facebook Video Link' />
                            </span>

                            <h2 className="mt-2 font-bold">PBS Digital Studios</h2>

                            <p className="sm:mt-1 sm:block sm:text-sm text-gray-600 dark:text-gray-400">
                                Private jets are mostly the rarified ride of rock stars and pro athletes, but they are also a growing share of air travel. How can such small planes be damaging the environment?
                            </p>
                            <div className='absolute top-0 right-1.5' >
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                              </svg>
                            </div>
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