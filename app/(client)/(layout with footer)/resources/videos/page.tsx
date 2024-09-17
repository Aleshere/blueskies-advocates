import Header from "@/app/components/Header";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import VideoCard from "@/app/components/VideoCard";


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
          url: "https://www.weareblueskies.com/api/og?title=VIDEO SECTION",
        },
      ],
  },
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
                      
                      <VideoCard 
                        favicon='APHA favicon.jpg'
                        altText='APHA YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=2WM0328Z34I'
                        title='The Urgent Need to Phase Out Leaded Aviation Fuel'
                        description='Members of Earth Justice and Quiet Communities make a call to action to urge the government and private sector stakeholders to work together to phase out leaded avgas now.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Arline Bronzaft favicon.jpg'
                        altText='Arline Bronzaft podcast Video Link'
                        href='https://www.apa.org/news/podcasts/speaking-of-psychology/noise-pollution'
                        title='Speaking of Psychology: How noise pollution harms our health'
                        description='Arline Bronzaft, PhD, talks about how noise affects health and well-being, how it can harm kids&apos; learning and why it&apos;s not just a problem in big cities in her 5 decades of advocacy combating noise pollution.'
                        source='podcast'
                      />
                      
                      <VideoCard 
                        favicon='BFPCA favicon.png'
                        altText='BFPCA Facebook Video Link'
                        href='https://fb.watch/t54hcrBgrN/'
                        title='Flight Paths, the BFPCA Survey'
                        description='This BFPCA-led survey of affected residents in December 2020 to January 2021 is a powerful and insightful summary of the community experience since the new runway and the revised airpath operations have been operating.'
                        source='facebook'
                      />
                      
                      <VideoCard 
                        favicon='Burien favicon.jpg'
                        altText='Burien B-Town YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=yzbHNHteP9w'
                        title='The Briefing #1: The Briefing You Should Have Had'
                        description='Steve Edmiston is taking on the Port of Seattle, one public comment at a time. This is Episode 1: The Briefing You Should Have Had, from Jan. 30, 2018.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Cagelfa favicon.jpg'
                        altText='Cagelfa YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=QDdw8dECodE'
                        title='Propeller planes dump 467 tons of lead into our breathable air every year'
                        description='In the US, hundreds of millions of gallons of highly toxic tetraethyl lead-formulated gasoline are consumed annually by piston-engine powered propeller airplanes releasing more than one million pounds of airborne lead into our environment each year on average.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='CBS Colorado favicon.jpg'
                        altText='CBS Colorado YouTube Channel'
                        href='https://www.youtube.com/watch?v=VQjx3sYxgVw'
                        title='CBS Colorado about leaded fuel'
                        description='Airplanes have been coming in and out of the Rocky Mountain Metropolitan Airport at an increasing rate and now homes under the paths of these planes are testing for high levels of lead.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Climate Adam favicon.jpg'
                        altText='Climate Adam Channel YouTube'
                        href='https://fb.watch/t54hcrBgrN/'
                        title='Climate Adam'
                        description='Flying is worse for the climate than you think.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Peaceful Chiricahua Skies favicon.jpg'
                        altText='Deborah Gordon on the environmental effects YouTube Video Link'
                        href='https://www.youtube.com/watch?v=Pnu779ZCrLA'
                        title='Deborah Gordon on the effects of Military Jets on wildlife'
                        description='Deborah Gordon, ecologist and a professor at Stanford University, talks about the effects of the USAF&apos;s proposal actions on unique environment in the Chiricahuas.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Eleanor Holmes Norton favicon.jpg'
                        altText='Eleanor Holmes Norton Facebook Video Link'
                        href='https://fb.watch/t54vCinAmj/'
                        title='Eleanor Holmes Norton'
                        description='As co-chair of the Quiet Skies Caucus representing DC, which is plagued by aircraft noise, I highlighted two provisions I got included in the House-passed FAA reauthorization to combat helicopter noise in today&apos;s Aviation hearing.'
                        source='facebook'
                      />
                      
                      <VideoCard 
                        favicon='GALBA favicon.jpg'
                        altText='GALBA YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=rPdmGr8WUbY'
                        title='Say YES to a good night os sleep - say NO to Leeds Bradford Airport expansion'
                        description='Animation provided by Christopher Harry https://christopheranimation.com/'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='Gareth Dennis favicon.jpg'
                        altText='Gareth Dennis YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=MzglQeMVbvo'
                        title='#RailNatter | Episode 180: Ban Private Jets, Make The World Better'
                        description='Guest Hannah Lawrence from Stay Grounded, talking about the legitimacy of flights, the inequality of flying, and campaigning against the worst excesses of aviation (infographics galore!)'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='James Hingham Air NZ Not Sustainable.png'
                        altText='James Hingham Air NZ Not Sustainable Podcast Link'
                        href='https://jameshigham.com/air-new-zealand-no-longer-a-sustainability-leader/'
                        title='Air New Zealand - no longer a sustainability leader. '
                        description='In this second episode of Checking In, I reflect on Air New Zealand&apos;s recent abandonment of its science-based targets. This has been an embarrassing and uncomfortable announcement for the country&apos;s flagship carrier to make, after putting a lot of emphasis on the importance of climate leadership and action in recent years.'
                        source='podcast'
                      />
                      
                      <VideoCard 
                        favicon='Jenny Jones favicon.jpg'
                        altText='Jenny Jones Facebook Video Link'
                        href='https://fb.watch/t54nr6TVZ9/'
                        title='Jenny Jones, Green Party Member of the House of Lords'
                        description='Aviation expansion really isn&apos;t worth it. I use a NEF report to explain why bigger airports don&apos;t benefit the country economically, or in terms of jobs.'
                        source='facebook'
                      />
                      
                      <VideoCard 
                        favicon='NEF favicon.jpg'
                        altText='NEF YouTube Video Link'
                        href='https://www.youtube.com/watch?v=1DFEylc5lu8'
                        title='Bigger airports and more flights are not good for the economy'
                        description='Bigger airports and more flights are not good for the economy or ordinary families. The only people they benefit are wealthy executives and shareholders who are wrecking our planet to make a profit.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='PBS favicon.png'
                        altText='PBS Facebook Video Link'
                        href='https://fb.watch/t54aYHQxBu/'
                        title='PBS Digital Studios'
                        description='Private jets are mostly the rarified ride of rock stars and pro athletes, but they are also a growing share of air travel. How can such small planes be damaging the environment?'
                        source='facebook'
                      />
                      
                      <VideoCard 
                        favicon='Quiet Communities.png'
                        altText='Quiet Communities YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=i7JHi3WqRn8'
                        title='Scientific Panel from "Aviation Noise, Pollution, and Health": Connecting the Dots'
                        description='Presentations from leading international researchers describe the scientific rationale for the adverse impacts being experienced by communities affected by excessive aviation operations.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='SeaTac YT favicon.jpg'
                        altText='STNI: Sea-Tac Airport Noise and Pollution YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=n8Q1UYbypqI&t=31s'
                        title='Performance Based Navigation'
                        description='Explanation of NextGen: the reasoning behind it, the implementation of a national strategy, the priorities pursued. Communities are secondary, not as important as fuel efficiency and expanding capacity in a safe manner.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='UC Davis favicon.jpg'
                        altText='UC Davis Symposium 2023 YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=B9NaeKiLBiw'
                        title='ANE Symposium 2023: Understanding and Addressing Noise Beyond 65 DNL'
                        description='Session Chairs: Darlene Yaplee, Aviation-Impacted Communities Alliance and Concerned Residents of Palo Alto, Kallie Glover, Delta'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='TE favicon.jpg'
                        altText='TE Channel YouTube'
                        href='https://www.youtube.com/watch?v=Y5ny2TJl3Y8&t=4s'
                        title='Transport &amp; Environment (T&amp;E)'
                        description='We spoke to residents near some of these airports to see what it is like living with the noise and pollution from planes every day.'
                        source='youtube'
                      />
                      
                      <VideoCard 
                        favicon='The Independent favicon.jpg'
                        altText='The Independent YouTube Video Channel'
                        href='https://www.youtube.com/watch?v=GH-db5xhUDI'
                        title='How airlines greenwash the skies | Behind The Headlines'
                        description='The Independent&apos;s Travel Editor goes behind the headlines to look at how airlines are greenwashing the skies..'
                        source='youtube'
                      />
                        
                    </div>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page