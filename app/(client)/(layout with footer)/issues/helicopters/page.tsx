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
                          Non-essential helicopter flights are the ones that often contribute the most to noise pollution, and community disturbance, particularly in densely populated or environmentally sensitive areas. They are those that do not serve a critical or urgent need. Because they are not critical to public safety or essential services, these flights are often the focus of some sort of regulatory efforts aimed at reducing noise and minimizing environmental impact. In some areas such as New York City, New Jersey and Los Angeles, local communities are advocating for stricter regulations on non-essential helicopter flights to mitigate their negative effects. For example, a good example of robust and successful advocacy is the group <a href="https://stopthechopnynj.org/" target="_blank" rel="noopener" >Stop the Chop</a>. Non-essential flights are typically recreational, commercial, or convenience-based and do not serve an immediate or necessary function. Examples of non-essential helicopter flights include:
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
        
        
        
        <a href="assets/files/NEF_Losing_altitude.pdf" target="_blank" rel="noopener" >this report</a>
        <BackButton />
    </>
  );
}

export default page