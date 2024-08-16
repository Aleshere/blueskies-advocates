import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/noise"),
  title: {
    default: "BlueSkies Advocates | Noise",
    template: '%s | BlueSkies Advocates'
  },
  description: "What is noise? How is aviation treating the topic? And what can be done to offer relief to citizens impacted by aviation noise? DNL policy. FAA.",
  openGraph: {
    title: "Aviation Noise",
    description: "What is noise? How is aviation treating the topic? And what can be done to offer relief to citizens impacted by aviation noise? DNL policy. FAA.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/noise",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=AVIATION NOISE",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Noise" />
      <ScrollToTop />
      
        <section id='noise'>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4">
                  
                        <h2 className='text-lg font-bold'>The Issue of Aviation Noise</h2>
                        <p>
                          Aviation noise is a growing concern today due to its significant impact on public health and quality of life. Prolonged exposure to aircraft noise can lead to sleep disturbances, cardiovascular issues, and increased stress levels, affecting millions of people. Additionally, as the aviation industry continues to expand, the frequency and intensity of noise increase, exacerbating these health risks. Addressing aviation noise is essential for protecting community well-being.
                        </p>
                        <p>
                          To learn more about the different types of aviation noise, check out <a href="https://en.wikipedia.org/wiki/Aircraft_noise_pollution"target="_blank" rel="noopener" >Wikipedia</a>.
                        </p>
                        <p>
                          For information on the health impacts of noise, our <a href="https://www.weareblueskies.com/tag/noise"target="_blank" rel="noopener" >tag section</a> is a good start.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          That said, let&apos;s throw a couple of things out there straight away.
                        </p>
                        <ul className='list-disc' >
                          <li>First, aviation is an industry that inevitably produces noise: we use large engines or blades to lift up and carry metallic structures full of people and stuff against gravity. Until someone comes up with a different method to do that, there is no other way around it.</li>
                          <li>Second, we understand the importance that this industry has on the worldwide economy. We are not in denial, we are aware that some noise will inevitably be part of our lives, especially if we decide to purchase a house near an airport.</li>
                          <li>Third, governmental agencies around the world try to downplay the issue or throw back at you lists of &quot;mitigating techniques&quot;, because they want to keep the sector growing and they just want to tame discontent coming from impacted citizens. Growth is key here. And safety, because nobody wants planes to start falling off the sky. Growth and safety are the two most important things that drive decisions nowadays. Communities impacted by noise are seeing as nuisance. They have to deal with it, because aviation needs to grow in a safely manner.</li>
                        </ul>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          This has been the general thinking for decades, as people who grew up between 1970-2000 can confirm: noise from airplanes was part of buying a house near an airport. You either moved somewhere quiet or accepted that you had to live with the noise and pause your conversations or TV watching when needed. But those were different times. Alas, the situation changed and it began to <strong>significantly</strong> impact citizens on the ground when consolidated flight paths emerged in the 2010s in the U.S. and gradually spread to the rest of the world.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          Here&apos;s some background: Since the 1920s, airplanes have used <a href="https://simpleflying.com/aircraft-navigation-systems-explanation" target="_blank" rel="noopener" >ground-based navigation</a>, a relatively simple method of directing aircraft via radio signals from points on the ground. These flight paths were sparse and imprecise, often referred to as dispersed paths. You would notice a plane here and there because the noise was spread over a large area. Pilots had some leeway in finding the best way to move along their paths. While this technique worked, it didn&apos;t allow for much capacity increase and could lead to hazardous situations where planes were too close to each other. Eventually, it was replaced by satellite navigation as technological advances made this possible. In the United States, the use of GPS for navigation is called &quot;Performance Based Navigation (PBN)&quot; and is part of a larger project aimed at modernizing the airspace, known as NextGen. Our <a href="https://www.weareblueskies.com/resources/timeline" target="_blank" rel="noopener" >NextGen timeline</a> is a good resource to get the basics of it all. In other countries, the names might differ, but the overarching concepts are the same.
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Navaids-vs-PBN.png" width={500} height={500} alt="NAVAIDS vs PBN"/>
                        </div>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Consolidated_paths_example.png" width={500} height={500} alt="Consolidated Paths Example Phoenix"/>
                        </div>
                        
                        
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          PBN allows for more precise flight paths that <em>reduce flying time, fuel use, and emissions</em>. On paper this sounds great, but for communities under a path, this mean more frequent noise (<a href="https://www.gao.gov/products/gao-21-103933" target="_blank" rel="noopener" >source</a>). The term sacrificial communities is unofficially used to describe these areas. And there are a lot of them. In fact, the more we get to talk to each other, the more we realize that the people on the ground affected by noise (and pollution) as a direct consequence of PBN implementations is very relevant. 
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          &quot;FAA officials stated that, while predicted DNL levels did not change much as a result of PBN implementation, an increase in the number of flights across the national airspace may have contributed to community concerns about noise. However, while a general increase in the demand for air travel may be a compounding factor affecting community noise concerns, the effects of PBN mean that any increase in air traffic will be concentrated along narrower flight paths, effectively increasing the noise impact on some communities&quot; (<a href="https://www.gao.gov/assets/d21103933.pdf" target="_blank" rel="noopener" >source</a>, at page 20).
                        </p>
                        
                        <p>
                          But there is more: <a href="/assets/files/MQSC_NextGen.pdf" target="_blank" rel="noopener" >this</a> is a NextGen review prepared by advocacy group <a href="https://www.mocoquietskies.org/" target="_blank" rel="noopener" >Montgomery County Quiet Skies Coalition</a>. It underlines how the whole project went rogue at one point, pressed by airlines demands and the FAA inability to stay on track with the original mandate that was approved in Congress at the very beginning of the project. We highly recommend to read through it.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Noise Metrics</h2>
                        <p>
                          At this point we need to talk about noise. What is it? How is it measured?
                        </p>
                        <p>
                          In the US, aviation noise is managed by the FAA and it is assessed as a decibel number over the so-called DNL metric. In simple words, this number reflects cumulative exposure to sound over a 24-hour period. DNL takes into account both the amount of noise from each aircraft operation as well as the total number of operations flying throughout the day and applies an additional 10dB weighting for nighttime flights between 10pm and 7am.
                        </p>
                        <p>
                          In a very convoluted way, the FAA also decided <a href="https://www.faa.gov/regulations_policies/policy_guidance/noise/history" target="_blank" rel="noopener" >back in the 70s</a> that 65dB was the threshold below which exposure to noise was not deemed &quot;significant&quot;. And there we remain until now, 2024.
                          In the meantime, NextGen and aviation growth happened, both drastically changing the way we perceive annoyance.
                        </p>
                        <p>
                          It took the <a href="https://www.gao.gov" target="_blank" rel="noopener" >GAO</a> to force the FAA to update this 40+ years old noise policy. Apparently, a 2021 <a href="https://www.faa.gov/regulations_policies/policy_guidance/noise/survey" target="_blank" rel="noopener" >survey</a>, highlighting a substantial increase in the percentage of people who are highly annoyed by aircraft noise, was impossible to ignore anymore. Note that the FAA has attempted to downplay the issue times and times again, in hope of postponing the painful step of having to review the noise policy, with all the operational consequences that this entail.
                        </p>
                        <p>
                          Anyway, cornered by the data, the FAA <a href="https://www.faa.gov/noisepolicyreview" target="_blank" rel="noopener" >collected comments</a> from stakeholders and, as of July 2024, is still working on putting forward a new policy. We are waiting...
                        </p>
                          
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Issues with the DNL</h2>
                        <p>
                          Needless to say, there are many. First one that comes to mind is the very nature of a cumulative metric that just adds up day and night levels, without counting ambient noise or frequency.
                        </p>
                        <p><a href="https://www.gao.gov/assets/gao-21-103933.pdf" target="_blank" rel="noopener" >Here</a> you can see how 1 single flight a day at 114.4dB counts the same as 100 flights per day at 94.4dB. Both equal 65dB DNL average. You will also notice a new acronym, SEL. The Sound Exposure Level (SEL) metric represents all the acoustic energy (aka sound pressure) of an individual noise event as if that event had occurred within a one-second time period. SEL captures both the level (magnitude) and the duration of a sound event in a single numerical quantity, by &quot;squeezing&quot; all the noise energy from an event into one second. This provides a uniform way to make comparisons among noise events of various durations.
                        </p>    
                        
                        <div className="flex justify-center pt-4" >
                          <Image src="/assets/images/images/DNL-metric-issues.png" width={500} height={500} alt="DNL metric FAA"/>
                        </div>
                        <caption className="italic text-sm font-light" >Image by <a href="https://aviationimpactedcommunities.org/wp-content/uploads/2023/05/ANE-2023-Dr.-Cindy-Christiansen-Presentation-5-15-23.pdf" target="_blank" rel="noopener" >Cindy Christiansen</a></caption>
                        
                        <p>
                          Clearly this is not working.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          Consider that if you live a few miles away from the airport, the average overflight will clock about 65-75dB over your house, and that during night time there might only be a dozen flights in total. Do the math, and see how many hundreds of planes need to fly over your home to reach the 65dB average threshold: it&apos;s never-ending. At BlueSkies we speak with citizens who endure 600-700 commercial jets per day, for days and days in a row, 5am through 1am the next day. This is the case for sacrificial communities in Los Angeles, Boston and NYC, amongst others. 
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Other issues with the DNL</h2>
                        <p>
                          There are other issues with using the DNL metric for measuring aircraft noise.
                        </p>
                        <p>
                          First, the link between the number of flights overhead, the noise created by each flight, and DNL may be further obscured by changes in the nature of aircraft noise over time. DNL was established as the FAA&apos;s decision-making metric in the late 1970s and early 1980s, when individual aircraft were much noisier than they are today, and the number of aircraft operations was much lower than current traffic levels. The change to quieter but more frequent flights may result in lower DNL levels, even as the number of flights overhead increases.
                        </p>
                        <p>
                          Secondly, because the DNL metric averages flight operations over an annual average day, it can mask large swings in daily flight operations (and the associated noise) that can occur at a given location from day to day caused by traffic patterns that change depending on weather or other operational factors. For instance, according to the Maryland Department of Transportation, Baltimore Washington International Airport has two different traffic patterns that use different flight procedures depending on wind speed, direction, and weather factors: “east flow” (used about 30 percent of the time) and “west flow” (used about 70 percent of the time). Thus, the number of flights overhead may not be consistent from day to day, though the DNL would be calculated using a consistent average.
                        </p>
                        <p>
                          Third, low frequency noise is unaccounted for. This is the kind of low &quot;hum&quot; you might hear when planes coast at high altitude above your home and it is nearly impossible to block or mitigate. With GPS navigation, the amount of instances where this creates issues is growing fast (<a href="https://www.regulations.gov/comment/FAA-2023-0855-0941" target="_blank" rel="noopener" >example</a>). 
                        </p>
                        <p>
                          Fourth, the 10dB penalty applied to night time flights is arbitrary and does not give justice to people being woken up in the middle of the night. Pair that with the averaging calculations the DNL implies, and you will soon realize how night time noise needs to be tackled in a totally different way. By the way, if you are interested in knowing why we cannot have curfews in the US scroll down to the relevant section. 
                        </p>
                        <p>
                          If you want to dig deeper on the topic, read <a href="/assets/files/3.Daniel-Fink.pptx" target="_blank" rel="noopener" >this</a> and <a href="/assets/files/ANE-2023-Dr-Cindy-Christiansen-Presentation-5-15-23.pdf" target="_blank" rel="noopener" >this</a> presentations.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>The Problem with dBA</h2>
                        <p>
                          The human ear can handle an enormous range of sound levels. To measure this the decibel scale (dB) is used, which encapsulates the energy of sound with reference to the threshold of hearing using a logarithmic scale. This relates sound intensity to the smallest audible sound of 0dB. A sound 10 times more powerful is 10dB, whilst a sound 100 times more powerful than the threshold of hearing is 20dB. In practice, as you go up the scale, the sound levels go up much faster than on a linear scale.
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Linear-logarithmic-scaling.jpg" width={500} height={500} alt="Linear logarithmic scale"/>
                        </div>
                        
                        <p>
                          It is the same logic used to calculate the magnitude of earthquakes: a 4.0 earthquake on the Richter scale is considered a minor one, whereas a 6.0 is already a strong event, and a 7.0 a major one.
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Richter-scale.png" width={500} height={500} alt="Richter scale"/>
                        </div>
                        
                        <p>
                          Now, the aviation industry came to the conclusion that the human ear is more sensitive to sounds in the 2 to 4 kHz frequency range than to sound at very low or very high frequencies. Therefore, the decibel unit used to express human response to loudness or annoyance includes a weighting that varies with both intensity and frequency, and the result is the A-weighted sound level (known as dBA): in other words, A-weighted sound is a sound pressure level, which has been filtered to reduce the influence of the low and high extremes. This is a problem, because dBA hides the impacts of the low-frequencies which are abundant in aviation noise, especially in helicopters and propeller planes. And low-frequency noise from aviation is extraordinarily difficult to silence. &quot;Soundproofing&quot; usually means &quot;some sound reduction&quot;. dBA isn&apos;t a real pressure unit. You don&apos;t get dBA when you convert from real pressure unit like Pascals to decibels... you get raw decibels (SPL = sound pressure level).
                        </p>
                        <p>
                          The inner ear not only hosts the cochlea (hearing organ) which everyone seems to only focus on, but also the vestibule organ (balance, dizziness, migraines) which is more sensitive to low-frequency noise. Low-frequency at 100Hz (which is still higher frequency than an important portion of aviation noise) but not high frequency noise at the same DB SPL has been shown to cause vestibule organ damage and imbalance in mice (<a href="https://pubmed.ncbi.nlm.nih.gov/22768129/" target="_blank" rel="noopener" >source</a>). 70 DB SPL at 100Hz corresponds to about 51dBA using the frequency weighing curves (<a href="https://www.nti-audio.com/en/support/know-how/frequency-weightings-for-sound-level-measurements" target="_blank" rel="noopener" >source</a>).
                        </p>
                        <h2 className='font-bold'>dBA vs dBC</h2>
                        <p>
                          dBA is not the only way to measure frequency. There are other ways to do that: dBC, for example, is an alternative way, not masking low frequencies in the way dBA does. But that is not the only other option. Take some time to check out this image and see what different types of weighting can do to noise measurements:
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/dBC.jpg" width={500} height={500} alt="Noise weighting techniques"/>
                        </div>
                        
                        <p>
                          If you have a sound pressure level meter, and it has settings where you can set it to dBC, instead of dBA, you will find that the decibel reading will go up due to the fact dBC is a measurement with less filtering of the low frequencies from the noise you are experiencing. dBC is closer to the noise and vibration people impacted by aviation experience. The rumbling and vibration you experience when planes fly overhead is due to low frequencies. You feel them more than hear them. Their impact is extremely disturbing. No hi-fi speaker, musical instrument or sound reproduction system is manufactured to comply with dBA.  Otherwise the high and low frequency of music and sound would be negated, and it would sound like a gramophone record from the 1920&apos;s or 1930&apos;s. Listen to <a href="https://www.youtube.com/watch?v=UJxVDYXaFzs" target="_blank" rel="noopener" >this video</a>, especially between 1:05-1:15: if you have low-frequencies it may barely if at all raise the dBA reading. On the other hand, it will raise the dBC reading.
                        </p>
                        
                        <p>
                          Anyone who tries to tell you that low-frequency noise (motorized noises/equipment/machines) can&apos;t travel 1, 2, 3+ miles, or through all the walls in your home, show them this.
                         </p>
                         <p> 
                          Rocket Launch: 111 decibels at 20 miles away. <a href="https://www.faa.gov/sites/faa.gov/files/space/environmental/nepa_docs/spacex_texas_eis/FEIS_SpaceX_Texas_Launch_Site_Vol_I.pdf" target="_blank" rel="noopener" >Source</a> (page 229): SpaceX Environmental Impact Statement.
                         </p>
                         <p> 
                          They used real decibel sound pressure here, not dBA, which is good.
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Space-X-Unweighted-Sound-Chart-Over-Distance.png" width={500} height={500} alt="Space X Unweighted Sound Chart Over Distance"/>
                        </div>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold' id='curfews' >Measuring noise: How then?</h2>
                        <p>
                          We have already learned that the loudness of sound is typically quantified in decibels (dB). Near total silence would be represented by 0dB, while a normal conversation is around 60dB. A heavy truck passing by about 15 meters away would be about 80dB, and a jet aircraft taking off 300 meters away comes out to around 100dB. Measuring noise is not just about isolated dB levels, though. Different types of noise require different metrics. 
                        </p>
                        <p>
                          <strong>LAeq metric</strong>: Continuous noise is often assessed using LAeq, which represents the average sound level over a specified period. It is an A-Weighted measure. The number of aircraft passing over an area during a 16 hour day is counted. The noise of each plane is measured in decibels (db). The noise is then averaged out for the day. This is then turned into an annual average. There are three criticisms made of the LAeq metric:
                        </p>
                        
                        <ul className='list-disc'>
                          <li>It includes periods, even days, when there may be no aircrafts</li>
                          <li>It gives too much weight to the noise of each aircraft (which has gone down over the years) and insufficient weight to the number of aircraft (which has risen)</li>
                          <li>The A weighting which is used doesn&apos;t fully capture the low-frequency noise emitted by aircraft. A number of acousticians argue that for aircraft noise which contains a lot of low-frequency noise C weighting is preferable. Certainly where C weighting has been used, the noise recorded from each plane goes up.</li>
                        </ul>
                        
                        <p>
                          <strong>Lden metric</strong>: Lden (Day Evening Night Sound Level) averages the noise out over an 8 hour day, a 4 hour evening and an 8 hour night, with 5 and 10 decibels added to the evening and night figures respectively to account for generally lower background levels at those times. The World Health Organization (WHO) has started using Lden, as does the European Commission, as they believe it is more meaningful than LAeq. Lnight averages the noise only during the night period and is also used by WHO.
                        </p>
                        
                        <p>
                          <strong>N metric</strong>: This measures the number of planes going over a house which are above a given decibel level. So, for example, N60 would show the number of planes over 60 decibels which fly over a home during a given period.
                        </p>
                        
                        <p>
                          <strong>Lmax</strong>: The highest noise level reached during a noise event is called the Maximum Noise Level, or Lmax. For example, as an aircraft approaches, the sound of the aircraft begins to rise above ambient noise levels. The closer the aircraft gets, the louder it is until the aircraft is at its closest point directly overhead. Then as the aircraft passes, the noise level decreases until the sound level again settles to ambient levels. It is this metric to which people generally instantaneously respond when an aircraft flyover occurs.
                        </p>
                        
                        <p>
                          <strong>SEL</strong>: Another metric that is reported for aircraft flyovers is the Sound Exposure Level (SEL). It is computed from dBA sound levels. It is the total A weighted energy of a noise event over its entire duration but compressed to one second. SEL will typically be higher than Lmax.
                        </p>
                        
                        <p>
                          <strong>DNL</strong>: We have already discussed this above, but here is a quick recap: a 24-hour time A weighted, time-weighted energy average noise level, with a 10 dB penalty between 10pm to 7am to account for the higher sensitivity to noise at night due to lower background noise. The term &quot;time-weighted&quot; refers to the penalties attached to noise events occurring during certain sensitive time periods. This the current official metric the FAA uses.
                        </p>
                        
                        <p>
                          <strong>CNEL</strong>: same as DNL but adds a 5 dB penalty between 7pm and 10pm. California adopted the use of CNEL prior to FAA adopting DNL, hence the FAA accepts its use by California to assess noise effects.
                        </p>
                        
                        <p>
                          Agencies worldwide face significant challenges in identifying the most accurate and fair metric to measure aviation noise. The complexity of this task stems from the need to balance technical accuracy with the lived experiences of communities affected by airport operations. Traditional metrics, like the Day-Night Average Sound Level (DNL), are widely used but have been criticized for oversimplifying the impact of noise. These metrics often fail to capture the nuances of how noise affects people at different times of day, or how cumulative exposure impacts health and well-being.
                        </p>
                        <p>  
                          Moreover, the variation in how noise is perceived—depending on factors like background noise levels, the frequency of overflights, and even the type of aircraft—makes it difficult to establish a one-size-fits-all standard. As a result, some agencies are exploring alternative metrics, such as the Number Above (NA) or the Sound Exposure Level (SEL), which may provide more detailed insights but are also more complex to implement and understand.
                        </p>
                        <p>  
                          The struggle to find the right metric is not just a technical issue; it also has significant policy implications. The chosen metric influences everything from airport operations and expansion plans to community compensation and health studies. As a result, agencies must carefully consider both the scientific validity of the metrics and their social acceptance, as communities increasingly demand more accurate assessments of the noise pollution they endure.
                        </p>
                        <p>
                          If you are interested in a deeper dive into the subject, we can recommend <a href="https://flyquietoak.com/wp-content/uploads/2022/04/aircraft_noise_fundamentals.pdf" target="_blank" rel="noopener" >this</a> and <a href="https://www.skypossepaloalto.org/wp-content/uploads/2016/02/Noise-primer-20160124.pdf" target="_blank" rel="noopener" >this</a> documents.  
                        </p>
                        
                        <p>
                          The reality of aircraft flying overhead can be difficult to describe. Typically aircraft noise is given in the context of certain types of aircraft flying at certain levels. However, this can be difficult to understand in practice. To help with this, the table at <a href="https://www.nats.aero/environment/noise-and-emissions/measuring-noise/" target="_blank" rel="noopener" >here</a> link provides links to video clips of aircraft of different types at different heights.
                        </p>
                        <p>
                          The aim of those clips is to be illustrative rather than scientific, as the noise experienced from an overflight will depend on a range of factors including how directly overhead the flight is, the weather, background noise and local environment. The absolute level of noise from these clips will depend on your volume setting; most clips do however have some background noise such as birdsong, wind in trees and road/rail noise which should allow you to set the noise from the aircraft in a recognizable context.
                        </p>
                                                
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Monitoring Noise Levels</h2>
                        <p>
                          For individuals interested in monitoring aviation sound levels, a range of resources and tools are available to help track, measure, and understand the noise impact from nearby airports or flight paths. These resources can empower communities to advocate for noise mitigation measures and contribute to discussions on aviation noise pollution.
                        </p>
                        
                        <h2 className='font-bold'>Noise Monitoring Apps</h2>
                        <ul className='list-disc'>
                          <li><strong>WebTrak</strong>: This is an online tool provided by many airports that allows users to track aircraft movements and view noise levels recorded by monitoring stations. WebTrak provides real-time data and historical records, enabling users to see which flights are generating noise and at what levels.</li>
                          <li><strong><a href="https://globe.adsbexchange.com/" target="_blank" rel="noopener" >Globe ADS-B</a></strong>: This is a website that provides real-time flight tracking data by utilizing the ADS-B (Automatic Dependent Surveillance-Broadcast) system. ADS-B is a technology that allows aircraft to broadcast their position, speed, altitude, and other data, which can be received by ground stations and displayed on tracking platforms.</li>
                          <li><strong><a href="https://www.flightradar24.com/" target="_blank" rel="noopener" >Flightradar24</a></strong>: While primarily a flight tracking app, Flightradar24 can be used to monitor aircraft movements in real-time. By identifying flights overhead, users can correlate this data with noise levels experienced on the ground.</li>
                          <li><strong><a href="https://www.soundprint.co/" target="_blank" rel="noopener" >SoundPrint</a></strong>: This app allows users to measure noise levels using their smartphones. While it&apos;s not specific to aviation, it can be used to record noise levels at specific times and locations, helping users document their experiences.</li>
                          <li><strong><a href="https://airnoise.io/" target="_blank" rel="noopener" >AirNoise</a></strong>: Airnoise.io is a service designed to help individuals easily and efficiently file noise complaints related to aircraft noise. The platform provides a user-friendly tool that allows people to quickly report noise disturbances to relevant authorities, such as local airports or aviation regulators. The service is often used by residents living near airports or under flight paths who experience frequent noise disruptions. It comes with a free plan, and also a paid plan.</li>
                        </ul>
                        
                        <h2 className='font-bold'>Personal Noise Monitoring Devices</h2>
                        <ul className='list-disc'>
                          <li><strong>Decibel Meters</strong>: Portable decibel meters can be purchased relatively inexpensively and provide accurate readings of sound levels. These handheld devices allow users to measure the noise from aircraft directly and can be useful for gathering evidence of noise pollution.</li>
                          <li><strong>Smartphone Decibel Meter Apps</strong>: Apps like <a href="https://apps.apple.com/us/app/decibel-x-db-sound-level-meter/id448155923" target="_blank" rel="noopener" >Decibel X</a>, <a href="https://apps.apple.com/us/app/splnfft-noise-meter/id355396114" target="_blank" rel="noopener" >SPLnFFT</a> and <a href="https://apps.apple.com/us/app/niosh-sound-level-meter/id1096545820" target="_blank" rel="noopener" >Niosh</a> can turn a smartphone into a noise monitoring device, allowing users to measure and record sound levels on the go. These apps offer a convenient way to monitor noise without needing specialized equipment.</li>
                        </ul>
                        
                        <h2 className='font-bold'>Online Noise Mapping Tools</h2>
                        <ul className='list-disc'>
                          <li><strong>Noise Maps</strong>: Some governments and environmental agencies offer online noise maps that show average noise levels in different areas, including those affected by aviation. These maps are usually based on data from noise monitoring stations, but we found them to be quite outdated most of the times. For the sake of reporting, examples are <a href="https://howloud.com/" target="_blank" rel="noopener" >How Loud</a>, <a href="https://noise-planet.org/map.html" target="_blank" rel="noopener" >Noise Planet</a>, <a href="https://maps.dot.gov/BTS/NationalTransportationNoiseMap/" target="_blank" rel="noopener" >the DOT map</a>, and the <a href="https://interactive.wearepossible.org/noisycities/#/?city=nyc&language=en" target="_blank" rel="noopener" >Noisy Cities</a> project.</li>
                          <li><strong>Aviation Noise Complaint Portals</strong>: Airports and aviation authorities often provide online platforms where residents can submit noise complaints. These platforms sometimes include tools for monitoring noise and tracking the impact of specific flights or times of day.</li>
                        </ul>
                        
                        <h2 className='font-bold'>Bonus Tip</h2>
                        <p>
                          Advocacy group <a href="https://safeskiesutah.com/" target="_blank" rel="noopener" >Safe Skies Utah</a> recommends the following noise reading options. They deal with military jet noise, with decibel readings that most often top 100-110 dB.
                        </p>
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Sound_meters_options.jpg" width={500} height={500} alt="Military Jets Sound Meters Options"/>
                        </div>

                        <h2 className='font-bold'>Custom Sound Measuring Systems</h2>
                        <p>
                          A more accurate method of measuring noise is employed by the advocacy group Safe Skies Clean Water Wisconsin. This approach involves setting up physical sound monitoring systems, which require a little more preparation. The collected sound data is then cross-referenced with publicly available aircraft information in the area to ensure precision.
                        </p>
                        <p>  
                          <a href="https://www.safeskiescleanwaterwi.org/air-traffic-and-sound-meter-readings-in-the-madison-wisconsin-area/" target="_blank" rel="noopener" >Here</a> you can find full information about how to set this up.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold' id='curfews' >Can We Have Curfews?</h2>
                        <p>
                          For large aircrafts, (i.e. jet-powered civil aircraft over 75,000 pounds) the simple answer is no.
                          The explanation that follows is a word to word extract from <a href="https://seatacnoise.info/why-cant-we-have-a-curfew/" target="_blank" rel="noopener" >here</a>, and it explains why we cannot have curfews in a very clear way.
                        </p>
                        <p>
                          Blame it on one very simple Federal law: ANCA, the Airport Noise And Capacity Act Of 1990.
                          We keep trying to write a brief history of how all airport law regarding noise and pollution got subsumed from where it was (the EPA) into the FAA, but all people seem to really care about these days is WHY CAN&apos;T WE SLEEP AT NIGHT! So we borrowed from some other posts to give it to you in 700 words. ANCA explicitly forbids airports from implementing any rules to limit the take-off or landing of any Stage 3 or greater aircraft at any time of day. So forget &quot;night time&quot;. The law says that you can never place limits on flights. That is the &quot;capacity&quot; part of the law. (A Stage 3 type of aircraft is basically any form of modern commercial jet or turbo-prop. So from here out just forget that term).
                        </p>
                        <h2 className='font-bold'>History In One Paragraph</h2>
                        <p>
                          What people need to understand about ANCA is that it is one of those laws where the title is actually the opposite of its main function (like those lobbying groups “Americans For Environmental Progress” that are actually pro-fossil fuel.) The law was implemented because before 1990 there were a zillion law suits throughout the U.S. where communities were suing airports to stop all the noise. And those lawsuits worked. The industry was unable to expand because each airport seemed to have its own set of scheduling constraints based on local restrictions. So the industry lobbied hard for ANCA, which was sponsored by a Senator from Kentucky (not coincidentally, Louisville was the largest aviation cargo hub in America at the time.) ANCA sets up all the basics of modern airport noise law which can be boiled down to one seemingly innocuous idea: Communities can do whatever they feel necessary to control noise, so long as they do not interfere with commerce. Really unpack that one sentence and then you have a good understanding of ANCA.
                        </p>
                        <h2 className='font-bold'>The Four Commandments</h2>
                        <p>
                          ANCA is a bit like the Ten Commandments in that it&apos;s a remarkably short text. But from it springs millions of pages of regulations concerning how noise mitigation programs can be set up. And almost everybody gets confused and overwhelmed by all that stuff to the point that they feel the need to hire expensive consultants to help make sense of it. However at the end of the day, again, ANCA is simple. The important points to know can actually be boiled down to four simple notions:
                        </p>
                        <ul className='list-disc' >
                          <li>The FAA ultimately controls all noise mitigation and environmental rules concerning the airplanes, not EPA or any local government.</li>
                          <li>The airport has no enforcement capability on any noise or pollution violations. Again, that is left to the FAA and the public has no direct access to the FAA. All public complaints about noise and/or pollution are routed to the FAA.</li>
                          <li>The airport operator and the tenant airlines decide what noise mitigation to implement at the airport within FAA rules. The community has no role in decision-making (except to provide public comment).</li>
                          <li>No limitations may be placed on commerce except where passenger safety is concerned. Community safety (health) has no bearing. At all.</li>
                        </ul>
                        <p>
                          ANCA has been tested in court, time and again. Because it is so simple and unambiguous, it has never been successfully challenged. And no sane attorney will go near it because you&apos;d need to find a court that would be willing to consider a completely different form of legal argument, namely that its fundamental ignorance of community health was unconstitutional. There are attorneys working on this form of legal argument in other contexts (Eg. Public Trust Doctrine), but so far no one in airport law has taken a shot at it. So don&apos;t hold your breath.
                        </p>
                        <h2 className='font-bold'>Runway Use Agreements</h2>
                        <p>
                          This also explains why any Runway Use Agreement (limiting usage based on certain conditions) isn&apos;t worth the paper its printed on. An airport operator might sign such a document, but it has no legal force because it is the FAA (the guys in the control tower) who determine when and where planes take off and land. And the FAA must take into account what the airlines want to do - it says so in ANCA. Just keep repeating: <strong>Any limits on take-offs and landings are 100% voluntary until ANCA is changed by an act of Congress</strong>.
                        </p>
                        <h2 className='font-bold'>Process And Incentives</h2>
                        <p>
                          Faced with this frustration, virtually every activist movement has taken a &quot;process&quot; approach: attempting to work with governments at every level to create change. This has never been effective because with the hard limitations of ANCA, the airlines and governments have no incentives to change. And in the case of Sea-Tac Airport, no municipal government has been willing to publicly criticize the airport operator (The Port Of Seattle) or the airlines since the Third Runway lawsuit of the 1990s.
                        </p>
                        <p>
                          ANCA makes sure that the only channels available to protesters are within a closed system where all activists can really do is complain to airport operators and the FAA for better treatment. Without broader public support, stronger advocacy from local governments, or at least a modicum of media scrutiny, this state of affairs is unlikely to change any time soon.
                        </p>
                        <p>
                          If you are interested in reading more about what is being done to enact policy changes, read through <a href="https://aviationimpactedcommunities.org/" target="_blank" rel="noopener" >AICA</a>&apos;s work and resources.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold' id='curfews' >What About Smaller Planes?</h2>
                        <p>
                          ANCA has provisions for larger aircrafts, but there are areas where <strong>propeller planes</strong> are the source of noise. This is a total different issue. And in simple words, no, there is no legislation that prevents curfews for planes that weight less than 12500lb. As there are no provisions that prohibit airports from adding landing fees or limits on touch and go operations. Communities impacted by those should read <a href="https://www.oregonaviationwatch.org/articles/OAW-GAAirportsCanRestrictOps.php?fbclid=IwY2xjawEfPL1leHRuA2FlbQIxMAABHU_xpxsNWffHmrOh27MYAmmfAH_kwJxUvDnpe1qXUHcIdS68MPZeiUrcTQ_aem_Y7s4DneT1XY8PiOxV6PuCA" target="_blank" rel="noopener" >this</a> page and also this <a href="https://oregonaviationwatch.org/docs/jFlC6ssT-2023.12.22%20Taber%20Jeffco%20Commrs%20ltr%20tr%20Response%20Letter%20to%20Jefferson%20County.pdf" target="_blank" rel="noopener" >letter</a> which clarifies the current legislation in place when dealing with small aircraft noise.
                        </p>
                        <p>
                          As a matter of fact, Torrance Municipal Airport has recently introduced 
                          strict regulations about noise curfews and landing fees, amongst other things. Check it out <a href="https://www.torranceca.gov/government/city-departments/general-services/torrance-airport" target="_blank" rel="noopener" >here</a> if you are interested in knowing more. But nothing is ever straightforward with aviation, unfortunately there is a caveat to add here: airport grants.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Grant Assurances</h2>
                        <p>
                          When airport owners or sponsors, planning agencies, or other organizations accept funds from FAA-administered airport financial assistance programs, they must agree to certain obligations (or assurances). These obligations require the recipients to maintain and operate their facilities safely and efficiently and in accordance with specified conditions. The assurances may be attached to the application or the grant for Federal assistance and become part of the final grant offer or in restrictive covenants to property deeds. The duration of these obligations depends on the type of recipient, the useful life of the facility being developed, and other conditions stipulated in the assurances.
                        </p>
                        <p>
                          In other words, whenever an airport accepts FAA money, it also ties itself to specific limitations. Torrance Airport had no grants, hence it could manage its own general aviation traffic in ways that most airports cannot do. If you are interested in the full list of the FAA grant assurances, you can visit it <a href="https://www.faa.gov/airports/aip/grant_assurances" target="_blank" rel="noopener" >here</a>. 
                        </p>
                        <p>
                          Otherwise, aviation attorneys at Stone LLP created a very useful, compact list of such assurances, in a more <a href="https://stonellp.com/ga/#:~:text=Grant%20Assurance%2022%3A%20Economic%20Nondiscrimination,the%20public%20at%20the%20airport" target="_blank" rel="noopener" >readable format</a>. And there, at point 22, you can see how airports tied to FAA grants can have a really hard time in justifying limits on touch and go operations, or night time curfews. Here it is:
                        </p>
                        <p>
                          &quot;Grant Assurance 22: <strong>Economic Nondiscrimination</strong>. The airport will be available as an airport for public use on reasonable terms and without unjust discrimination to all types, kinds and classes of aeronautical activities, including commercial aeronautical activities offering services to the public at the airport.&quot;
                        </p>
                        <p>
                          We cannot offer advise on how to deal with these assurances when they get in the way of limiting general aviation operations to protect communities. This is very much a work in progress with multiple lawsuits being filed across the Country. Hopefully we will be able to update this section with positive news soon enough. In the meantime, if you are part of a community willing to consider accepting FAA grants, be warned of the possible consequences of doing so.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>How is Aviation Noise Managed in Other Countries?</h2>
                        <p>
                          <strong>United Kingdom</strong>
                        </p>
                        <p>
                          The current situation regarding aviation noise in the United Kingdom is increasingly contentious as residents and advocacy groups voice their concerns over the health and environmental impacts. While aviation is a crucial part of the economy, the noise pollution associated with it, particularly around major airports like Heathrow, is a growing issue. Studies and reports have highlighted the adverse effects on health, including sleep disruption, increased risk of heart disease, and reduced quality of life for those living near flight paths.
                        </p>
                        <p>
                          The UK government, through the Department for Transport (DfT), holds overall responsibility for aviation noise regulation, though local authorities manage noise issues at most airports. In fact, aviation noise management involves several key organizations, each with specific roles and responsibilities:
                        </p>
                        <ul className='list-disc' >
                          <li><strong>Department for Transport (DfT)</strong>: The DfT is responsible for the overall aviation policy, including noise. They set national guidelines and regulations that airports must follow to manage and reduce noise impacts. The DfT directly regulates noise at the three largest airports: Heathrow, Gatwick, and Stansted.</li>
                          <li><strong>Civil Aviation Authority (CAA)</strong>: The CAA is the UK&apos;s aviation regulator and plays a significant role in overseeing how airports and airlines manage noise. However, its authority is somewhat limited as aircraft noise is not classified as a statutory nuisance under UK law, meaning the CAA cannot take direct action against noise disturbances.</li>
                          <li><strong>Airport Operators</strong>: Individual airports have a major role in managing noise through the implementation of noise abatement procedures, monitoring noise levels, and working with airlines to encourage the use of quieter aircraft. They are also responsible for engaging with local communities affected by noise.</li>
                          <li><strong>Local Authorities</strong>: Local authorities manage noise issues for most airports, except for the three largest ones regulated by the DfT. They can influence planning decisions and work with airport operators to address community concerns related to noise.</li>
                        </ul>
                        <p>
                          The UK government has attempted to address noise concerns through policy frameworks that aim to balance the the needs of aviation with its social and health implications. For example, the &quot;Balanced Approach to Aircraft Noise Management&quot; seeks to mitigate noise impacts while still supporting the aviation sector&apos;s growth. However, the effectiveness of these policies is often questioned, especially as night flights and the expansion of airports continue to provoke strong opposition from affected communities.
                        </p>
                        <p>
                          Despite ongoing consultations and noise action plans, many residents feel that the current measures are insufficient, and there is a push for stricter regulations, including potential bans or reductions in night flights. The debate continues as the government plans to release further noise policy updates, indicating that the issue remains a significant and unresolved challenge in the UK. Campaigns by groups such as the Aviation Communities Forum (ACF) and the Aviation Environment Federation (check <a href="https://www.aef.org.uk/2023/06/21/raising-visibility-of-those-impacted-by-aircraft-noise/" target="_blank" rel="noopener" >this</a>) are raising awareness and pushing for stricter regulations to mitigate the noise impact, including advocating for bans on night flights and calling for better enforcement of noise limits.
                        </p>
                        <p>
                          Noise limits are primarily managed through a combination of regulations, guidelines, and airport-specific noise abatement procedures. Here is an overview of the key aspects:
                        </p>
                        <ul className='list-disc' >
                          <li><strong>Thresholds</strong>: The UK commonly uses the 57 dB LAeq (daytime equivalent continuous sound level) contour as the threshold for &quot;significant&quot; community annoyance. Areas within this contour are considered to be &quot;significantly&quot; affected by aircraft noise.</li>
                          <li><strong>Night Regulations</strong>: Specific limits are placed on noise during the night (11 pm to 7 am). The UK has a night noise policy that applies to the three largest airports (Heathrow, Gatwick, and Stansted). These airports have specific quotas for the number of flights that can operate at night and noise limits that they must adhere to. The noise limit for night flights is typically set lower than for daytime operations. It is worth mentioning that night regulations might require aircrafts to establish holding patterns while waiting for the OK to land, meaning that other communities will be impacted by the noise.</li>
                          <li><strong>Noise Action Plans</strong>: Airports in the UK are required to produce Noise Action Plans, which outline how they will manage and reduce noise impacts. These plans are reviewed and approved by the Secretary of State for Transport.</li>
                        </ul>
                        
                        <p>
                          Here are some key airports with curfews in place in the UK:
                        </p>
                        
                        <ul className='list-disc' >
                          <li><strong>Heathrow Airport (LHR)</strong>: Curfew hours between 11:30 pm and 6:00 am. There is a restriction on the number of flights allowed during these hours, with a very limited number of take-offs and landings permitted. The airport operates under a &quot;Night Quota&quot; system that limits the number of aircraft movements and noise levels during the curfew. You can find more information about the curfew <a href="https://simpleflying.com/london-heathrow-airport-airport-curfews-guide/" target="_blank" rel="noopener" >here</a>.</li>
                          <li><strong>Gatwick Airport (LGW)</strong>: Curfew hours between 11:00 pm and 7:00 am. Like Heathrow, Gatwick operates a night quota system to control the number and noise level of aircraft.</li>
                          <li><strong>London City Airport (LCY)</strong>: Closed between 12:30 pm on Saturday and 12:30 pm on Sunday (for 24 hours). Nightly closure from 10:00 pm to 6:30 am on weekdays. The airport strictly enforces its curfew to minimize noise in the densely populated areas surrounding it.</li>
                        </ul>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          <strong>Australia</strong>
                        </p>
                        <p>
                          Australia has no modern technical standards or mandated regulations controlling aircraft noise pollution. In fact, aircraft noise standards apply before an aircraft is allowed to operate, rather than in the course of its day-to-day flying activities. Before an aircraft begins operating in Australia it is required to meet international noise standards that specify the amount of noise that may be emitted by that type or model of aircraft. Once an aircraft passes this certification process, there is no legislation or regulation that enables any agency, including Airservices, to police its noise levels (read more about this <a href="/assets/files/Aircraft_Noise_Australia.pdf" target="_blank" rel="noopener" >here</a>). Noise management is primarily handled by several key organizations:
                        </p>
                        
                        <ul className='list-disc' >
                          <li><strong>Airservices Australia</strong>: This government-owned organization is responsible for managing air traffic control, navigation, and aviation rescue and firefighting services. It also monitors and reports on aircraft noise through the Noise and Flight Path Monitoring System (NFPMS), which operates around major Australian airports.</li>
                          <li><strong>Department of Infrastructure, Transport, Regional Development, and Communications</strong>: This department is responsible for the overarching policy and regulatory framework related to aviation noise, including the implementation of noise abatement procedures and curfews.</li>
                          <li><strong>Aircraft Noise Ombudsman (ANO)</strong>: The ANO provides an independent review of aircraft noise-related complaints and inquiries. The ANO works to improve the way complaints are handled by Airservices Australia and ensures transparency in noise management practices. Unfortunately, its efficacy has been deemed <a href="https://www.justplanewrong.org/aircraft-noise-ombudsman" target="_blank" rel="noopener" >doubtful</a> by many advocacy groups.</li>
                        </ul>
                        
                        <p>
                          In Australia, aviation noise remains a significant issue, especially for communities living near major airports like Sydney, Melbourne, and Brisbane. The current situation can be summarized as follows:
                        </p>
                        
                        <ul className='list-disc' >
                          <li><strong>Noise Monitoring and Regulation</strong>: The management of aviation noise in Australia is governed by the Department of Infrastructure, Transport, Regional Development, and Communications, with Airservices Australia responsible for operational aspects such as air traffic management. Noise monitoring is conducted at major airports through a network of permanent noise monitoring terminals. These terminals provide real-time data on aircraft noise levels.</li>
                          <li><strong>Curfews and Noise Abatement</strong>: Several airports, including Sydney and Adelaide, operate under night curfews that limit the number of flights during late night and early morning hours to reduce noise disturbance.</li>
                          <li><strong>Community Concerns</strong>: There has been ongoing concern and opposition from communities living near airports regarding noise pollution. The introduction of new flight paths, especially with the opening of the new runway at Brisbane Airport in 2020 and the planned opening of Sydney&apos;s new international airport, has led to increased noise complaints and outrage. Residents have expressed concerns about the health impacts of noise, such as sleep disturbances and increased stress levels.</li>
                        </ul>
                        
                        <p>
                          Several major airports have curfews in place to manage aviation noise and limit the impact on surrounding communities during late-night and early-morning hours. Here are some examples:
                        </p>
                        
                        <ul className='list-disc' >
                          <li><strong>Sydney Kingsford Smith Airport (SYD)</strong>: Curfew from 11:00 pm to 6:00 am. Exceptions are allowed for emergency flights, certain low-noise operations, and a limited number of landings between 5:00 am and 6:00 am under strict conditions.</li>
                          <li><strong>Adelaide Airport (ADL)</strong>: Curfew from 11:00 pm to 6:00 am. Exceptions include emergency services, medical evacuations, and certain low-noise aircraft.</li>
                          <li><strong>Gold Coast Airport (OOL)</strong>: Curfew from 11:00 pm to 6:00 am. There are exceptions for certain small aircraft and emergency flights.</li>
                          <li><strong>Brisbane Airport (BNE)</strong>: No formal curfew.</li>
                          <li><strong>Melbourne Airport (MEL)</strong>: No formal curfew.</li>
                        </ul>
                        
                        <p>
                          We recommend reading <a href="https://bfpca.org.au/14-noise/" target="_blank" rel="noopener" >this</a> webpage, by advocacy group Brisbane Flight Path COmmunity Alliance, to understand more about the way Australian noise is assessed.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          <strong>European Union</strong>
                        </p>
                        <p>
                          The EU <a href="https://environment.ec.europa.eu/topics/noise/environmental-noise-directive_en" target="_blank" rel="noopener" >Environmental Noise Directive</a> (END), formally known as Directive 2002/49/EC, is a piece of European Union legislation aimed at assessing and managing environmental noise. It focuses on noise from various sources, including road traffic, railways, industrial sites, and, importantly, airports. The directive sets some basic rules in hope to reduce the harmful effects of noise on human health and the environment. For airports, the directive specifically requires noise mapping and the creation of action plans for airports with over 50,000 movements (take-offs and landings) per year. The noise maps must consider both day and night periods, and action plans must address how to manage and reduce noise impacts on nearby communities. While the directive has been successful in many respects, challenges remain in its implementation, including the need for consistent enforcement across member states, the complexity of noise modeling, and ensuring meaningful public participation.
                        </p>
                                                
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          <strong>Germany and Switzerland</strong>
                        </p>
                        <p>
                          Communities in Germany, particularly those located near major airports like Frankfurt, Munich, and Berlin, face several significant issues related to aviation noise. These concerns revolve around the impact of constant aircraft noise on health, quality of life, and the environment. In many areas, there has been significant public opposition to airport expansions, increased flight frequencies, or the introduction of new flight paths that bring aircraft closer to residential areas. Communities have organized protests, petitions, and campaigns to voice their concerns.
                        </p>
                        <p>
                          Some communities and local governments have taken legal action against airport authorities or the government, challenging the approval of new flight paths, night flight regulations, or airport expansions on the grounds of excessive noise and inadequate consideration of the impact on residents. Despite regulations and noise abatement procedures, many residents feel that the measures in place are insufficient. For instance, night flight restrictions often come with exceptions, and noise insulation programs may not fully mitigate the impact on residents. 
                        </p>
                        <p>
                          A comprehensive list of night curfews in German and Swiss airports can be found <a href="https://www.uecna.eu/night-flight-bans-or-restrictions-at-european-airports/" target="_blank" rel="noopener" >here</a> and <a href="https://simpleflying.com/germany-major-airports-night-flight-restrictions/" target="_blank" rel="noopener" >here</a>.
                        </p>
                        <p>
                          Most major airports in Switzerland, including Zurich and Geneva, have strict night flight restrictions. Typically, no flights are allowed between 11:00 pm and 6:00 am, with very few exceptions. This helps minimize noise disturbances during nighttime hours, although no official noise threshold is in place. Zurich has a noise <a href="https://www.flughafen-zuerich.ch/en/company/responsibility/noise-and-sound-insulation/noise-charges" target="_blank" rel="noopener" >charging system</a> in place, with charges which are levied per aircraft depending on the time of operations. An overview of the current regulatory framework can be found in <a href="https://aviationimpactedcommunities.org/wp-content/uploads/2024/05/Martin-Roosli-Noise_Swiss_regulatory_limit.pdf" target="_blank" rel="noopener" >this</a> presentation.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          <strong>Belgium, Netherlands and Luxembourg</strong>
                        </p>
                        <p>
                          Brussels has some of the strictest noise regulations in Belgium due to its densely populated areas near Brussels Airport (Zaventem). The noise limits are defined by regional laws and are particularly stringent during nighttime.
                        </p>
                        
                        <ul className="list-disc">
                          <li><strong>Daytime (7 am - 7 pm)</strong>: The maximum noise level is generally set around 65 dB(A) near residential areas.</li>
                          <li><strong>Evening (7 pm - 11 pm)</strong>: Noise limits are set around 60 dB(A).</li>
                          <li><strong>Nighttime (11 am - 7 am)</strong>: The most restrictive limits apply, often below 50 dB(A) in residential areas. Specific penalties or fines are imposed on airlines that exceed these limits.</li>
                        </ul>
                        
                        <p>
                          The Flemish and Walloon regions have their own noise regulations, which also consider the proximity of airports to residential areas. Noise limits in these regions are similar but can vary slightly depending on local policies and the characteristics of the airports.
                        </p>
                        
                        <ul className="list-disc">
                          <li><strong>Flanders - Antwerp Airport</strong>: closed to all air traffic between 11 pm and 6.30 am, with the exception of urgent medical flights and landing aircraft in delay, the landing of which is planned at the latest at 10.30 pm. Very interesting is their policy about <strong>General Aviation</strong> operations: in order to limit the nuisance for the people living in the neighborhood of the Airport, only two aircraft can be in a holding pattern at the same time. On working days (from Monday to Friday) and on Saturdays, training flights are allowed from 9 am to 7 pm (to 8 pm during winter hour), local time. On Sundays and holidays, no touch-and-go flights (circuit flying) are allowed. Each individual touch-and-go is regarded as two flights. For touch-and-go flights (circuit flying), aircraft with a MTOW (maximum take-off weight) of less than 2000 kg must have a maximum noise level of 76 dBA, certified by the Aviation Directorate-General of the Federal Public Service for Mobility.</li>
                          <li><strong>Flanders - Ostend-Bruges Airport</strong>: Training flights are permitted between 9:00 am and 10:00 pm local time. No training flights are allowed on Sundays and public holidays. Military aircraft may not perform more than three training flights per day. In the spirit of good neighborliness, training flights with aircraft weighing more than 6 tons MTOW are prohibited during the months of July and August. There is also a robust fees system in place.</li>
                          <li><strong>Wallonia - Charleroi Airport</strong>: Has a curfew between 11 pm and 6:30 am, including an annual quota count system per aircraft based on arrival times after 11 pm. Noise issues exacerbated at the beginning of 2000s when budget airline Ryanair started operating from here. You can read more <a href="https://www.brusselstimes.com/belgium/251194/residents-to-receive-e1-million-in-charleroi-airport-noise-compensation?utm_term=Autofeed&utm_medium=Social&utm_source=Facebook#Echobox=1657202758" target="_blank" rel="noopener" >here</a> or <a href="https://www.brusselstimes.com/belgium-news/210237/wallonia-to-refine-tool-for-measuring-airport-noise?utm_term=Autofeed&utm_medium=Social&utm_source=Facebook#Echobox=1646978663" target="_blank" rel="noopener" >here</a>, or just contact advocacy group <a href="https://www.facebook.com/profile.php?id=100063497045275" target="_blank" rel="noopener" >Stop aux nuisances de l&apos;aéroport de Charleroi</a>, which is very active in the matter.</li>
                          <li><strong>Wallonia - Liege Airport</strong>: Liege Airport is one of the few airports in Europe that operates 24 hours a day, 7 days a week. This is primarily due to its role as a major hub for cargo operations. Flight movements are somewhat <a href="https://www.aircargonews.net/cargo-airport/liege-airport-limits-are-set/" target="_blank" rel="noopener" >restricted</a>, although there has been a lot of <a href="https://www.aircargonews.net/cargo-airport/liege-remains-resilient-on-flight-limits/" target="_blank" rel="noopener" >friction</a> between the airport and the Walloon Government recently. Advocacy group <a href="https://www.facebook.com/stopalibaba" target="_blank" rel="noopener" >Stop Alibaba</a> (Alibaba being a large Chinese online marketplace with robust operations carried at the airport) is the point of contact for communities impacted by pollution and noise.</li>
                        </ul>
                        
                        <p>
                          In the Netherlands, flight paths are managed and designed by Air Traffic Control and established by the Minister, following a process very similar to that in the United States. The design not only takes into account safety and flyability, but also the environment. The routes avoid built-up areas where possible. For example, the departure route along Schiedam (Rotterdam) has a bend in it near a residential area. Air Traffic Control only allows air traffic to deviate from the routes if this is unavoidable for technical reasons related to the flight. This may be the case in adverse weather conditions (to avoid a thunderstorm, for example) or because of other air traffic in the vicinity of the routes.
                        </p>
                        
                        <p>
                          <strong>Amsterdam</strong> is home to one of Europe&apos;s largest airports, hub of Dutch national airline KLM. It is also arguably Eu&apos;s focal point where discussions about the airport&apos;s noise and pollution have intensified in recent years.
                        </p>
                        <p>
                          Daytime noise has been contentious, as relentless aircrafts move all day along the flight paths leading to the airport. <a href="https://schipholwatch.nl/" target="_blank" rel="noopener" >Communities</a> have been fighting consolidated flight paths for years, to no avail so far. Noise limits are set by the Government and apply to areas adjacent airports. There have been <a href="https://nltimes.nl/2024/03/03/schiphol-exceeded-sound-limit-last-year-near-uithoorn" target="_blank" rel="noopener" >instances</a> of airlines exceeding them. Until now, the airport solutions to noise have been ineffective ones such as preferential runway usages and path shifts on approaches. Nothing we haven&apos;t already seen in the US, with no noticeable effects.
                          On May 24th, 2024, the Dutch government <a href="https://apnews.com/article/schiphol-airport-noise-pollution-amsterdam-b51a6b14c81c1239bc74c98579da08e0" target="_blank" rel="noopener" >announced</a> its intention to reduce the number of night flights operating out of Amsterdam Schiphol Airport (AMS) due to concerns about excessive noise pollution. The Minister for Infrastructure, Mark Harbers, has proposed addressing the issue by banning some of the loudest aircraft from flying in and out of Schiphol during evening hours.
                        </p>
                        <p>
                          In a letter sent to the Dutch parliament, Minister Harbers outlined a new initiative aimed at significantly restricting traffic at one of Europe&apos;s largest transportation hubs. By reducing the number of night flights, Harbers believes this measure will greatly diminish noise pollution during the hours when it most affects the quality of life for local residents.
                        </p>
                        <p>
                          Night flights pose an equal threat in terms of noise pollution. These nighttime operations are primarily conducted by cargo airlines, which rely on late-night flights to connect with their major hubs as part of their extensive next-day delivery networks. The issue isn&apos;t merely that these flights carry cargo; it&apos;s the type of aircraft used that contributes most to the noise pollution. Cargo carriers often operate older generation wide body aircraft, many of which are dedicated freighters or converted models. These older aircraft are typically much louder than their modern counterparts.
                        </p>
                        <p>
                          The Dutch government&apos;s efforts to create a quieter Schiphol Airport aren&apos;t new. Similar operational restrictions were attempted in <a href="https://www.reuters.com/business/environment/schiphol-flights-be-limited-11-below-2019-levels-cut-noise-emissions-2022-06-24/" target="_blank" rel="noopener" >2019</a>, reducing the airport&apos;s operations by around 10%. Additionally, the airport has significantly increased fees for noisy aircraft to encourage the use of quieter, next-generation planes. There are also reports that regulators may consider a complete nighttime closure of Schiphol, potentially starting in November 2026.
                        </p>
                        <p>
                          <strong>Rotterdam The Hague Airport</strong> is open 24 hours a day, 7 days a week, 365 days a year, with <a href="https://www.rotterdamthehagueairport.nl/en/environment-and-quality-of-life/laws-and-regulations/" target="_blank" rel="noopener" >limited</a> regulations in place to manage nighttime activities. For daytime noise, they have their own noise zones, with limits set by the Government that cannot be exceeded, but no other specific restrictions (<a href="https://anima-project.eu/noise-platform/anima-intervention-rotterdam" target="_blank" rel="noopener" >source</a>). 
                        </p>
                        <p>
                          <strong>Eindhoven Airport</strong> has experienced a high number of <a href="https://eindhovennews.com/news/2022/11/more-complaints-about-noise-pollution-eindhoven-airport/" target="_blank" rel="noopener" >complaints</a> and <a href="https://www.dutchnews.nl/2023/03/100-plus-arrests-at-eindhoven-airport-as-climate-campaigners-protest/" target="_blank" rel="noopener" >protests</a>, but so far has failed to address them in a resolutive manner. <a href="https://eindhovennews.com/news/2024/05/noise-reduction-plans-of-eindhoven-airport/" target="_blank" rel="noopener" >Attempts</a> to decrease noise pollution have been labeled as techniques aimed at procrastinating a solution to the problem, rather than actual initiatives. Nevertheless, the airport recently <a href="https://www.dutchnews.nl/2023/11/eindhoven-airport-to-ban-private-jets-from-2026/" target="_blank" rel="noopener" >proposed</a> a total ban on private jets from 2026, and a new take-off procedure, which takes planes up to their cruising height more quickly. 
                        </p>
                        
                        <p>
                          Aviation noise in Luxembourg is regulated by the Air Navigation Administration (ANA). Noise complaints have been steadily <a href="https://ana.gouvernement.lu/en/actualites/mes-actualites/2023/nuisances-sonores.html" target="_blank" rel="noopener" >increasing</a> since 2019. The agency&apo;s approach is the one of altering paths as needed, with limited to no success for most citizens.
                        </p>
                        <p>
                          Luxembourg <strong>Findel Airport</strong> is situated in close proximity to Luxembourg City. Officially, the airport is closed between 11 pm and 6 am. However, current regulations permit aircraft scheduled during opening hours to land or take off outside these times if delayed. In 2023, there were a record 2,553 night flights. Based on data from the first few months, it is likely that 2024 will also set a new record. Currently, between 230 and 280 aircraft take off and land at Findel Airport each day. And there are even more worrying plans ahead, as according to LuxAirport the airport&apos;s capacity is much greater, allowing for up to 16 landings and 16 take-offs per hour, nearly one every two minutes (<a href="https://today.rtl.lu/news/luxembourg/a/2206990.html" target="_blank" rel="noopener" >source</a>). 
                        </p>
                        <p>
                          Moreover, a recent shift in one of the paths <a href="https://today.rtl.lu/news/luxembourg/a/2016318.html" target="_blank" rel="noopener" >exacerbated</a> the noise problem for more communities. The shift was needed following security measures imposed by military airspace in Saarland, Germany, where the US military uses a restricted area for aircraft training.
                        </p>
                        <p>
                          General Aviation training: Weak measures in place.
                          A charter between the clubs, local residents and the authorities has defined a training circuit dedicated to non-standard laps (&quot;touch and go&quot;), to avoid flying over villages as much as possible. In order to sensitize pilots, ANA has been analyzing all the routes used by these aircraft on a regular basis since January 2023 and sends its observations to the sport aviation clubs when the circuit trajectory is not respected.
                        </p>
                        
                    
                        
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page