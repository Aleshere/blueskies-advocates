import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/helicopters"),
  title: {
    default: "BlueSkies Advocates | Helicopters",
    template: '%s | BlueSkies Advocates'
  },
  description: "Police departments, news outlets, sightseeing tours. In certain cities, all add up creating non-stop disturbance to many citizens.",
  openGraph: {
    title: "Helicopters",
    description: "Police departments, news outlets, sightseeing tours. In certain cities, all add up creating non-stop disturbance to many citizens.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/helicopters",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=HELICOPTERS",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Helicopters" />
      <ScrollToTop />
      
        <section id='helicopters'>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4">
                  
                        <p>
                          First of all let us discuss about the nature of helicopter flights: the distinction between essential and non-essential helicopter flights lies in the purpose and necessity of the flight. Essential helicopter flights are operations that are crucial for public safety, emergency response, or the delivery of critical services. These flights are necessary and often have a direct impact on protecting lives, property, or maintaining essential functions in society. Examples include Medical Evacuations (Medevac), Search and Rescue (SAR), Law Enforcement, Firefighting and Disaster Response. Essential flights are mission-critical and often life-saving, cannot be postponed or substituted without significant consequences, and are generally more accepted by the public due to their necessity. We understand that and totally agree.
                        </p>
                       
                        
                        <h2 className='text-lg font-bold'>Non-essential Flights</h2>
                        <p>
                          Non-essential helicopter flights are the ones that often contribute the most to noise pollution, and community disturbance, particularly in densely populated or environmentally sensitive areas. They are those that do not serve a critical or urgent need.
                        <p>
                        </p>
                          Because they are not critical to public safety or essential services, these flights are often the focus of some sort of regulatory efforts aimed at reducing noise and minimizing environmental impact. In some areas such as New York City, New Jersey and Los Angeles, local communities are advocating for stricter regulations on non-essential helicopter flights to mitigate their negative effects. For example, a good example of robust and successful advocacy is the group <a href="https://stopthechopnynj.org/" target="_blank" rel="noopener" >Stop the Chop</a>. Non-essential flights are typically recreational, commercial, or convenience-based and do not serve an immediate or necessary function. Examples of non-essential helicopter flights include:
                        </p>
                        
                        <h3 className='underline'>Sightseeing and Tourist Flights</h3>
                        <p>
                          <em>- Scenic Tours</em>
                        </p>
                        <p>
                          Helicopter tours that offer aerial views of cities, natural landmarks, or other attractions. These flights are primarily for entertainment and are a common feature in tourist-heavy areas.
                        </p>
                        <p>
                          <em>- Photography and Filming</em>
                        </p>
                        <p>
                          Helicopter flights used for capturing aerial photographs or videos, often for commercial purposes such as advertisements, movies, or promotional materials.
                        </p>
                        
                        <h3 className='underline'>Private and Corporate Travel</h3>
                        <p>
                          <em>- VIP Transport</em>
                        </p>
                        <p>
                          Helicopter services used by individuals or corporations for private travel, often to avoid ground traffic or reduce travel time. These flights are typically for convenience rather than necessity.
                        </p>
                        <p>
                          <em>- Commutes</em>
                        </p>
                        <p>
                          Helicopter commutes for executives or other individuals traveling between their homes, offices, or other locations, particularly in congested urban areas.
                        </p>
                        
                        <h3 className='underline'>Recreational Activities</h3>
                        <p>
                          <em>- Helicopter Charters</em>
                        </p>
                        <p>
                          Flights chartered for personal enjoyment, such as taking a helicopter to a remote location for a picnic, fishing trip, or other leisure activities.
                        </p>
                        <p>
                          <em>- Helicopter Skiing</em>
                        </p>
                        <p>
                          Helicopter flights that transport skiers to remote, untouched slopes for skiing, commonly known as &quot;heli-skiing.&quot;
                        </p>
                        
                        <h3 className='underline'>Promotional and Demonstration Flights</h3>
                        <p>
                          <em>- Advertising</em>
                        </p>
                        <p>
                          Helicopters used for aerial advertising, such as flying banners or creating noise to draw attention to an event or brand.
                        </p>
                        <p>
                          <em>- Product Demonstrations</em>
                        </p>
                        <p>
                          Flights conducted to showcase the capabilities of a helicopter, often for sales or promotional purposes.
                        </p>
                        
                        <h3 className='underline'>Filming and Media Coverage</h3>
                        <p>
                          <em>- News Coverage</em>
                        </p>
                        <p>
                          Helicopters used by media organizations to cover events, such as traffic reports, live news coverage, or major public events. While some of these flights may be considered important for information dissemination, they are often viewed as non-essential in terms of public safety.
                        </p>
                        
                        <h3 className='underline'>Real Estate Tours</h3>
                        <p>
                          <em>- Property Viewings</em>
                        </p>
                        <p>
                          Helicopters used to give potential buyers or investors aerial tours of large properties or developments. These flights are more about convenience and marketing than necessity.
                        </p>
                        
                        <h3 className='underline'>Non-urgent Charters</h3>
                        <p>
                          <em>- Luxury Experiences</em>
                        </p>
                        <p>
                          Helicopter charters offering luxury experiences, such as wine tours, gourmet dinners at remote locations, or other exclusive events.
                        </p>
                        
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>How are Helicopters Producing Noise</h2>
                        <p>
                          They produce noise primarily due to the interaction between their rotor blades and the air, which creates various types of sounds.
                        </p>
                        <p>
                          The primary source of noise in helicopters comes from the main rotor blades. As these blades spin rapidly, they slice through the air, causing turbulence and generating noise. The faster the rotor spins, the louder the noise. Additionally, when a blade tip exceeds the speed of sound, it creates a shock wave, leading to a phenomenon known as &quot;blade slap,&quot; which is a distinctive, loud noise.
                        </p>
                        <p>
                          The tail rotor, which stabilizes the helicopter by counteracting the torque produced by the main rotor, also contributes to noise. The interaction of the tail rotor blades with the air generates a high-pitched whine or buzzing sound.
                        </p>
                        <p>
                          Helicopters are powered by engines, usually <a href="https://en.wikipedia.org/wiki/Turboshaft" target="_blank" rel="noopener" >turboshaft</a> engines, which produce noise as they burn fuel and exhaust gases. The noise from the engine is less significant than that from the rotors but still contributes to the overall sound level.
                        </p>
                        <p>
                          <a href="https://en.wikipedia.org/wiki/Blade-vortex_interaction" target="_blank" rel="noopener" >Blade Vortex Interaction</a>: this occurs when a rotor blade passes through the vortex created by the preceding blade. BVI can lead to a sharp, repetitive noise, especially during certain maneuvers like descending or hovering.
                        </p>
                        <p>
                          Lastly, when a helicopter is flying close to the ground, the rotor wash interacts with the ground, reflecting noise back up and potentially increasing the perceived noise level.
                        </p>
                        <p>
                          <a href="https://www.youtube.com/watch?v=lwLFz6WxGII" target="_blank" rel="noopener" >This video</a> is a good resource to understand how helicopter noise is produced.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>How do helicopters impact those on the ground?</h2>
                        <p>
                          They produce noise primarily due to the interaction between their rotor blades and the air, which creates various types of sounds.
                        </p>

                        <div className="flex justify-center pt-4" >
                          <Image src="/assets/images/images/DNL-metric-issues.png" width={500} height={500} alt="DNL metric FAA"/>
                        </div>
                        <caption className="italic text-sm font-light" >Image by <a href="https://stopthechopnynj.org/" target="_blank" rel="noopener" >Cindy Christiansen</a></caption>
                        
                        <p>
                          Clearly this is not working.
                        </p>

                        
   
                </div>
            </div>
        </section>
        
        
        
        <a href="https://www.youtube.com/watch?v=lwLFz6WxGII" target="_blank" rel="noopener" >this report</a>
        <a href="assets/files/NEF_Losing_altitude.pdf" target="_blank" rel="noopener" >this report</a>
        <BackButton />
    </>
  );
}

export default page