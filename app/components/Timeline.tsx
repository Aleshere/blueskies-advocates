"use client"

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import TimelineElement from './TimelineElement';


const Timeline = () => {
    
    const { ref } = useInView();
    
    return (
        <div ref={ref}>
            <VerticalTimeline>
                <TimelineElement
                    position='left' 
                    title='Congress Approval'
                    date='December 2003'
                    description='Congress passes the Vision 100 - Century of Aviation Reauthorization Act, which officially starts the process of development and implementation of the Next Generation Air Transportation System (NextGen).'
                />
                <TimelineElement
                    position='right'
                    title='FAA Ground Work'
                    date='June 2007'
                    description='The Joint Planning Development Office releases The Concept of Operations for NextGen, highlighting crucial research and policy issues that need to be addressed to meet national air transportation objectives.'
                />
                <TimelineElement
                    position='left' 
                    title='First Testing'
                    date='Summer 2008'
                    description='The FAA begins introducing NextGen capabilities at the Florida NextGen Test Bed.'
                />
                <TimelineElement
                    position='right'
                    title='FAA Seeks Extra Capacity'
                    date='November 2008'
                    description='The FAA authorizes dependent instrument approaches for closely spaced parallel runways with centerline spacing of less than 2,500 feet. This procedure enhances runway capacity at major airports.'
                />
                <TimelineElement
                    position='left'
                    title='George W Bush Pushes On'
                    date='November 2008'
                    description={<>&apos;President George W Bush issues Executive Order 13479, emphasizing the importance of implementing NextGen. The order also directs the Secretary of Transportation to establish a support staff for NextGen <a href='https://nextgenrelief.org/how-did-we-get-here-a-backstory/' target='_blank' rel='noopener noreferrer' >(read more about this here)</a>.&apos;</>}
                />
                <TimelineElement
                    position='right'
                    title='Obama Sets Deadlines to Introduce NextGen'
                    date='February 2012'
                    description='President Barack Obama signs the FAA Re-authorization bill, which includes approx $11 billion towards NextGen. The law also includes establishing deadlines for adopting existing NextGen navigation and surveillance technology, and mandates the development of Performance Based Navigation procedures at the nation 35 busiest airports by 2015. It also includes a way to cut an environmental review and bypass citizen engagement on the matter.'
                />
                <TimelineElement
                    position='left'
                    title='More Capacity == More Planes'
                    date='February 2012'
                    description='Memphis Tower is the first facility to implement the new standards. Closer spacing allows aircrafts to be cleared for takeoff with less separation from the previous departure on the same runway, thereby increasing capacity and reducing taxi-out times.'
                />
                <TimelineElement
                    position='right'
                    background='rgb(233,30,99)'
                    color='#ffffff'
                    title='First Official Implementation'
                    date='18 June 2014'
                    description='Implementation of the Houston Metroplex, the first of 13 metroplex locations scheduled to switch to Performance Based Navigation (another name for NextGen procedures). North California and Chicago Metroplex would follow over the following months.'
                />
                <TimelineElement
                    position='left'
                    title='Complaints Skyrocket'
                    date='Spring 2015'
                    description={<>&apos;O&apos;Hare International Airport receives 2 million noise complaints from 44,500 addresses in the first 8 months of 2015. Santa Cruz County, CA, files over 12,000 noise complaints to San Francisco International Airport in June 2015, compared to just one complaint for the entire year of 2014. <a href='https://nqsc.org/downloads/BRIEFHISTORY.pdf' target='_blank' rel='noopener noreferrer' >(read more about this here)</a>.&apos;</>}
                />
                <TimelineElement
                    position='right'
                    title='The N/E Corridor'
                    date='April 2017'
                    description='The FAA begins to develop the roadmap for implementing NextGen in the Northeast Corridor, the airspace between Washington DC and Boston. Rollout proceeds in a speedy fashion, despite considerable push back from communities that begin to experience the inequalities and harsh nature of NextGen overflights.'
                />
                <TimelineElement
                    position='left'
                    title='ADS-B Enters the Scene'
                    date='Summer 2018'
                    description={<>&apos;ADS-B determines an aircraft position via satellite navigation or other sensors and periodically broadcasts that and other related data, enabling it to be tracked. It will soon become a very important device for communities impacted by aviation noise. <a href='https://globe.adsbexchange.com/' target='_blank' rel='noopener noreferrer' >(check our ADS-B here)</a>.&apos;</>}
                />
                <TimelineElement
                    position='right'
                    title='Cleveland-Detroit Metroplex Completed'
                    date='October 2019'
                    description='The FAA completes the re-design on the Cleveland-Detroit airspace paving the way for NextGen rollout.'
                />
                <TimelineElement
                    position='left'
                    title='Denver and South FL Metroplex Completed'
                    date='October 2020'
                    description='The FAA completes the re-design of the Colorado airspace, and of the South Central FLorida airspace (31 airports), giving the go ahead to NextGen.'
                />
                <TimelineElement
                    position='right'
                    title='DoT Says that NextGen Benefits have not materialized'
                    date='March 2021'
                    description={<>&apos;NextGen&apos;s actual and projected benefits have not kept pace with initial projections due to implementation challenges, optimistic assumptions, and other factors. FAA&apos;s most recent business case projects total NextGen benefits to be over $100 billion LESS than the original estimate, and benefits actually achieved to date have been MINIMAL and difficult to measure. FAA&apos;s projections were optimistic about traffic growth and did not account for risk factors. <a href='https://www.oig.dot.gov/sites/default/files/FAA%20NextGen%20Delivery%20Study_03.30.2021.pdf' target='_blank' rel='noopener noreferrer' >(read the full report)</a>.&apos;</>}
                />
                <TimelineElement
                    position='left'
                    title='Las Vegas Metroplex Completed'
                    date='September 2021'
                    description='The FAA completes the re-design of the Las Vegas Metroplex project, giving the go ahead to NextGen.'

                />
                <TimelineElement
                    position='right'
                    title='Bipartisan Infrastructure Law'
                    date='November 2021'
                    description='Biden signs the $1 trillion dollar bill that will effectively give the green light to countless airport expansions. Both parties long term view seems to be the one of never-ending aviation growth. Communities already struggling with aviation pollution and noise are left alone with their struggles.'

                />
                <TimelineElement
                    position='left'
                    title='N/E Corridor Coastal Routes Project Completed'
                    date='April 2023'
                    description={<>&apos;New/amended Q Routes and Y Routes replace the north-south high-altitude route structure along the east coast of the United States. In practice, 133 routes are consolidated, their altitudes changed, waypoints re-shuffled, and overall traffic shifted to cater for airlines fuel savings <a href='https://www.faa.gov/air_traffic/flight_info/aeronav/acf/media/Presentations/22-01-Northeast-Corridor-Atlantic-Coast-Routes-Tinsley.pdf' target='_blank' rel='noopener noreferrer' >(see the official status update here)</a>.&apos;</>}

                />
                <TimelineElement
                    position='right'
                    title='Noise Policy Review'
                    date='September 2023'
                    description={<>&apos;Recent neighborhood noise study <a href='https://www.airporttech.tc.faa.gov/Products/Airport-Safety-Papers-Publications/Airport-Safety-Detail/ArtMID/3682/ArticleID/2845/Analysis-of-NES' target='_blank' rel='noopener noreferrer' >(check it here)</a> forces the FAA to set up a review of their outdated noise policy. Thousands of citizens leave comments denouncing the inadequacy of the DNL metric, mentioning failures to account for the changes happened in the last decades (ie NextGen). AICA publishes a paper analyzing the issue in depth <a href='https://aviationimpactedcommunities.org/wp-content/uploads/2024/06/Noise-Policy-Paper_Noise-Con-2024_AICA.pdf' target='_blank' rel='noopener noreferrer' >(read it here)</a>. At the time of writing, results of the noise review are still to be published.&apos;</>}
                />
            </VerticalTimeline>
        </div>
      )  
      
}

export default Timeline;