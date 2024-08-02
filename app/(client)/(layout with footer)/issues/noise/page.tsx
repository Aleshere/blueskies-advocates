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
                  
                        <h2 className='text-lg font-bold'>How We Got Here</h2>
                        <p>
                          Aircraft noise is a type of pollution and it can have health impacts on people, depending on how much and long they are exposed to it. To learn more about the different types of noise associated to aviation, check out <a href="https://en.wikipedia.org/wiki/Aircraft_noise_pollution"target="_blank" rel="noopener" >Wikipedia</a>. To learn more about the health impacts of noise on our health, our <a href="https://www.weareblueskies.com/tag/noise"target="_blank" rel="noopener" >tag section</a> is a good start.
                        </p>
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
                          That has been the general thinking for decades, as people growing up over the last century can confirm. Noise coming from airplanes was part of buying a house near an airport: you either moved somewhere quiet, or just accepted the fact that you had to learn to live with the noise and stop your conversations / watching tv if needed. But those were different times. The whole setup started to really weigh on citizens on the ground as consolidated flight paths made their appearance in the 2010s (in the US) and after that, little by little, in the rest of the world.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          A bit more of a background: since the 1920s, airplanes were using <a href="https://simpleflying.com/aircraft-navigation-systems-explanation" target="_blank" rel="noopener" >ground-based navigation</a>, a relatively simple way of directing aircrafts through points on the ground via radio signals. Flight paths were sparse, imprecise. People refer to those as dispersed paths because that&apos;s what they are: you would notice a plane here and there because the noise was shared over a large area. Pilots has some kind of leeway in finding the best way to move along their path. This technique was fine, but did not have much room to increase capacity, plus it could lead to hazardous situations where planes were to close to each other. It eventually was replaced by satellite navigation as technological advances offered opportunities to do so. In the US, the process of using GPS to navigate the skies is also called &quot;Performance Based Navigation (PBN)&quot; and is part of a larger project aimed at &quot;modernizing&quot; the airspace (the project itself is named NextGen). Our <a href="https://www.weareblueskies.com/resources/timeline" target="_blank" rel="noopener" >NextGen timeline</a> is a good start to get the basics of it all. In other Countries the names might differ, but the overarching concepts are exactly the same.
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/Navaids-vs-PBN.png" width={500} height={500} alt="NAVAIDS vs PBN"/>
                        </div>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          PBN allows for more precise flight paths that <em>reduce flying time, fuel use, and emissions</em>. On paper this sounds great, but for communities under a path, this mean more frequent noise (<a href="https://www.gao.gov/products/gao-21-103933" target="_blank" rel="noopener" >source</a>). The term sacrificial communities is unofficially used to describe these areas. And there are a lot of them. In fact, the more we get to talk to each other, the more we realize that the people on the ground affected by noise (and pollution) as a direct consequence of PBN implementations is very relevant. 
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <p>
                          &quot;FAA officials stated that, while predicted DNL levels did not change much as a result of PBN implementation, an increase in the number of flights across the national airspace may have contributed to community concerns about noise. However, while a general increase in the demand for air travel may be a compounding factor affecting community noise concerns, the effects of PBN mean that any increase in air traffic will be concentrated along narrower flight paths, effectively increasing the noise impact on some communities&quot; (<a href="https://www.gao.gov/assets/d21103933.pdf" target="_blank" rel="noopener" >source</a>, at page 20).
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
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/DNL-metric-issues.png" width={500} height={500} alt="DNL metric FAA"/>
                        </div>
                        
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
                          dBC is just an alternative way to measure sound noise, not masking low frequencies in the way dBA does. Take some time to check out this image and see what different types of weighting can do to noise measurements:
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/dBC.jpg" width={500} height={500} alt="Noise weighting techniques"/>
                        </div>
                        
                        <p>
                          If you have a sound pressure level meter, and it has settings where you can set it to dBC, instead of dBA, you will find that the decibel reading will go up due to the fact dBC is a measurement with less filtering of the low frequencies from the noise you are experiencing. dBC is closer to the noise and vibration people impacted by aviation experience. The rumbling and vibration you experience when planes fly overhead is due to low frequencies. You feel them more than hear them. Their impact is extremely disturbing. No hi-fi speaker, musical instrument or sound reproduction system is manufactured to comply with dBA.  Otherwise the high and low frequency of music and sound would be negated, and it would sound like a gramophone record from the 1920&apos;s or 1930&apos;s. Listen to <a href="https://www.youtube.com/watch?v=UJxVDYXaFzs" target="_blank" rel="noopener" >this video</a>, especially between 1:05-1:15: if you have low-frequencies it may barely if at all raise the dBA reading. On the other hand, it will raise the dBC reading.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold' id='curfews' >Can We Have Curfews?</h2>
                        <p>
                          Below explanation is a word to word extract from <a href="https://seatacnoise.info/why-cant-we-have-a-curfew/" target="_blank" rel="noopener" >here</a>.
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
                        
                        <h2 className='text-lg font-bold'>How is Noise Measured in Other Countries?</h2>
                        <p>
                          Coming Soon...
                        </p>
                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page