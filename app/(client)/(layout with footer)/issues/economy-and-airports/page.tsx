import Header from "@/app/components/Header";
import { ScrollToTop } from "@/app/utils/ScrollToTop";
import { Metadata } from "next";
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image'


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/issues/economy-and-airports"),
  title: {
    default: "BlueSkies Advocates | Airports and Economy",
    template: '%s | BlueSkies Advocates'
  },
  description: "Airports do not always provide economic benefits to communities as they can impose significant costs in terms of pollution, lost tourism, infrastructure and maintenance.",
  openGraph: {
    title: "Economic Impacts",
    description: "Airports do not always provide economic benefits to communities as they can impose significant costs in terms of pollution, lost tourism, infrastructure and maintenance.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/issues/economy-and-airports",
    siteName: "BlueSkies Advocates",
      images: [
        {
          url: "https://www.weareblueskies.com/api/og?title=AIRPORTS & ECONOMY",
        },
      ],
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Airports and Economy" />
      <ScrollToTop />
      
        <section id='airports-and-economy'>
            <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-4">
                  
                        <h2 className='text-lg font-bold'>Aviation: Negative Environmental Impacts</h2>
                        <p>
                          Airports often play an important role in the economy by acting as gateways for travel, trade, and tourism. But that is just one side of the story. Airports always bring a mix of positive and <strong>negative</strong> impacts, which can vary depending on factors such as the size of the airport, its location, and the level of connectivity it provides. Usually, the first step implemented by those advocating to build new airports (or expand existing ones) is to produce documents that underline to economic benefits that will derive from such actions.
                        </p>
                        <p>  
                          These documents include tables listing vague mitigating steps, biased no action alternatives, million of dollars in gains, jobs that will be created and multiplier effects. What you never see are the negative externalities that come along with all of that. More often than not there is a small paragraph dedicated to those. So, in order to understand better, let us start the journey and go through some of those documents, starting from the consequences impacting the environment, hence the so-called <a href="https://www.faa.gov/air_traffic/environmental_issues/ared_documentation"target="_blank" rel="noopener" >Environmental Reviews</a>.
                        </p>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Enters NEPA</h2>
                        <p>
                          The National Environmental Policy Act (NEPA) is a landmark environmental statute, signed into law under Nixon in 1970. This law requires analysis of potential impacts to the environment and when there are, considering alternatives and mitigation before approving federal actions. It was enacted in response to federal decision-making that did not adequately consider environmental impacts.
                        </p>
                        <p>
                          NEPA, requires environmental impact analyses of proposed airport actions that are subject to FAA decision. The environmental review process must be completed before a project commences. Most airport environmental documents are prepared by airport sponsors. However, depending on the funding arrangement and level of impact, states that receive block grants for airport development or the FAA may prepare some documentation.
                        </p>
                        <p>
                          In other words, the NEPA process is triggered when a federal agency, such as the FAA, decides to take an action. Here is the breakdown of the steps required when that happens:
                        </p>
                        
                        <div className="flex justify-center py-4" >
                          <Image src="/assets/images/images/NEPA.png" width={500} height={500} alt="NEPA FAA"/>
                        </div>
                        
                        <p>
                          If you are interested in understanding in detail each of those steps, you can read <a href="https://www.faa.gov/sites/faa.gov/files/space/legislation_regulation_guidance/Guidelines_Compliance_EPA_AST.pdf" target="_blank" rel="noopener" >this</a> document produced by the FAA itself. It is important to understand that each of the steps have <span className="underline" >strict timeframes</span>, in the order of few weeks. This is a caveat that in the past (especially with NextGen implementations) have resulted in States, Cities and local communities missing out on the opportunity to challenge FAA decisions. And this is the first issue we want to highlight in this whole process: the amount of money and organization needed to prepare a challenge to most FAA decision-making efforts is a hard blocker that needs to be removed (or considerably extended).
                        </p>
                        <p>
                           Now let&apos;s go back to the image above. You can see three there are three possibilities at the top: Categorical Exclusion (CE or also CatEx) Environmental Assessment (EA), and Environmental Impact Statement (EIS). Let&apos;s explain each one of them in detail. 
                        </p>
                        <ul className='list-disc' >
                          <li><strong>Categorical Exclusion</strong>: an action taken by a federal agency that is routine and does not have a significant effect on the environment. Each federal agency establishes a list of CATEXs, and must document its decision not to prepare an EA or an EIS on the basis of one or more CATEXs. CATEXs, however, are applicable only if the proposed action that is a listed exemption would not otherwise cause a significant impact on the environment. It is a very broad topic. For instance, Congress included provisions in the FAA Modernization and Reform Act of 2012 to expedite environmental review of certain air traffic procedures implemented as part of NextGen: in practice, PBN and RNAV procedures (both active parts of NextGen) were both given a <a href="https://www.faa.gov/sites/faa.gov/files/about/office_org/headquarters_offices/apl/catex-memo.pdf" target="_blank" rel="noopener" >CATEX</a>. The use of a categorical exclusion for Phoenix PBN implementation, one of the first of its kind, resulted in a <a href="https://nap.nationalacademies.org/read/25219/chapter/2#9" target="_blank" rel="noopener" >significant adverse</a> public response. </li>
                          <li><strong>Environmental Assessment</strong>: The purpose of an EA is to determine if FAA&apos;s proposed action has the potential to result in significant environmental effects. If there are no significant impacts, then the proposed action may proceed under a categorical exclusion if one applies, or, following the completion of an environmental assessment, a Finding of No Significant Impact (FONSI). The EA process allows the public to comment on the Proposed Action. The EA helps the public understand what the FAA is proposing and the potential environmental consequences associated with a proposed action. The NEPA process requires the FAA to disclose to the public actions that may have environmental effects. Public comments periods are 60 days. If you miss the deadline, you are out of luck. We invite anyone interested in researching EAs produced by the FAA and check for yourselves the degree of approximation they have. In practice, an EA briefly provides sufficient evidence and analysis for determining whether to prepare an EIS. If you are interested in seeing one example, you can read <a href="/assets/files/Tweed_FONSI_ROD_signed.pdf" target="_blank" rel="noopener" >this one</a> recently signed by the FAA, regarding the runway extension and terminal expansion at Tweed Airport New Haven, CT. To demonstrate how such reports are contentious and facetious, that EA has been <a href="https://insideinvestigator.org/east-haven-save-the-sound-appealing-faa-decision-on-tweed-airport-expansion/" target="_blank" rel="noopener" >appealed</a> by the town of Eat Haven and Save The Sound advocacy group, and we are waiting to see the results of such appeal.</li>
                          <li><strong>Environmental Impact Statement</strong>: a detailed document required for major federal actions that requires an evaluation and review of environmental impacts from the proposed action. Provides a clear basis for choice by the decision maker with input from the public and <span className="underline" >other agencies</span>. Few projects require an EIS from the start: if EA shows significant impacts that can not be mitigated below significance thresholds (???), then an EIS is required.</li>
                        </ul>
                        
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

                        <h2 className='text-lg font-bold'>Costs of Ineffective Assessments</h2>
                        <p>
                          Many communities have sued the FAA over the years, arguing that the agency failed to adequately consider the environmental and noise impacts of new flight paths. Many of the lawsuits challenge the FAA&apos;s environmental assessments, alleging that the agency failed to fully consider the noise and environmental impacts of the new flight paths. Plaintiffs often argue that the FAA&apos;s reviews under NEPA were rushed or incomplete. 
                        </p>
                        
                        <p>
                          The economic costs of ineffective environmental assessments conducted by the FAA can be substantial and multifaceted, affecting various stakeholders, including local communities, government agencies, and the aviation industry. Ineffective assessments can lead to unintended consequences, such as environmental degradation, legal challenges, and delays in infrastructure projects, all of which carry significant financial implications. 
                        </p>
                        
                        <h3 className='font-bold'>Legal Costs</h3>
                        <p>
                          Ineffective environmental assessments often result in lawsuits from affected communities, environmental groups, or local governments. These legal battles can be lengthy and costly for both the FAA and the aviation industry.
                        </p>
                        <ul className='list-disc' >
                          <li>Litigation Expenses: Legal fees, court costs, and the expenses of defending against multiple lawsuits can add up quickly.</li>
                          <li>Settlements and Fines: In cases where the FAA or airport operators lose or settle the lawsuits, they may be required to pay significant fines or settlements to the plaintiffs.</li>
                          <li>Delays in Projects: Legal challenges can delay airport expansions or the implementation of new flight paths, leading to increased project costs and lost revenue opportunities.</li>
                        </ul>
                        
                        <h3 className='font-bold'>Environmental Remediation Costs</h3>
                        <p>
                          If an environmental assessment fails to identify or mitigate significant impacts, the resulting environmental damage can be costly to address.
                        </p>
                        <ul className='list-disc' >
                          <li>Cleanup and Restoration: Remediating environmental damage, such as pollution or habitat destruction, can require substantial investment in cleanup efforts, restoration projects, and ongoing monitoring.</li>
                          <li>Public Health Costs: Ineffective assessments may overlook air and noise pollution, leading to public health issues such as respiratory problems, cardiovascular diseases, and stress-related illnesses. The economic burden of treating these health issues often falls on public health systems and taxpayers.</li>
                          <li>Loss of Ecosystem Services: Environmental degradation can lead to a loss of ecosystem services, such as water purification, flood control, and carbon sequestration. Replacing or compensating for these services can be expensive and, in some cases, impossible.</li>
                        </ul>
                        
                        <h3 className='font-bold'>Economic Impact on Local Communities</h3>
                        <p>
                          Communities affected by noise pollution, air quality degradation, or other negative environmental impacts may experience economic costs in several ways.
                        </p>
                        <ul className='list-disc' >
                          <li>Property Value Decline: Increased noise levels or pollution can lower property values in affected areas, leading to financial losses for homeowners and reduced tax revenues for local governments.</li>
                          <li>Quality of Life Costs: Diminished quality of life due to environmental impacts can lead to increased healthcare costs, reduced productivity, and higher rates of absenteeism from work or school.</li>
                          <li>Tourism and Local Business Impact: In areas where tourism or local businesses rely on environmental quality, such as near national parks or scenic areas, environmental degradation can lead to a decline in visitors and economic losses for businesses.</li>
                        </ul>
                        
                        <h3 className='font-bold'>Reputational Damage and Loss of Trust</h3>
                        <p>
                          Ineffective environmental assessments can damage the reputation of the FAA and the aviation industry, leading to broader economic consequences.
                        </p>
                        <ul className='list-disc' >
                          <li>Public Opposition: Loss of public trust can result in stronger opposition to future projects, making it more difficult and costly to implement necessary infrastructure improvements or expansions.</li>
                          <li>Investor Confidence: Perceived environmental risks or ongoing legal disputes can reduce investor confidence in airport projects or related developments, potentially leading to higher borrowing costs or difficulty securing funding.</li>
                        </ul>
                        
                        <h3 className='font-bold'>Opportunity Costs</h3>
                        <p>
                          Delays or modifications to projects due to inadequate environmental assessments can lead to significant opportunity costs.
                        </p>
                        <ul className='list-disc' >
                          <li>Delayed Benefits: Airport expansions or new flight paths intended to improve efficiency and capacity may be delayed, resulting in lost economic benefits, such as job creation, increased trade, and tourism growth.</li>
                          <li>Increased Costs of Delayed Projects: Construction costs can escalate over time, and the longer a project is delayed due to legal or environmental challenges, the more expensive it becomes.</li>
                        </ul>
                        
                        <h3 className='font-bold'>Regulatory and Compliance Costs</h3>
                        <p>
                          If ineffective environmental assessments lead to regulatory scrutiny or the need to comply with additional requirements, the FAA and aviation stakeholders may incur extra costs.
                        </p>
                        <ul className='list-disc' >
                          <li>Revised Assessments and Studies: The FAA may be required to conduct new or revised environmental assessments, which can be time-consuming and costly.</li>
                          <li>Compliance with New Regulations: In response to legal challenges or public pressure, new regulations may be introduced, requiring further investment in compliance measures, such as noise mitigation technologies or environmental monitoring systems.</li>
                        </ul>
                             
                        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                        
                        <h2 className='text-lg font-bold'>Lawsuits for Ineffective Assessments</h2>  
                        <p>
                          Across the United States, a wave of lawsuits has been filed against the FAA in response to contentious environmental assessments linked to the agency&apos;s NextGen program and airport expansion projects. Communities from coast to coast have challenged the FAA&apos;s evaluations, arguing that they inadequately accounted for the noise pollution, air quality issues, and overall environmental impact on densely populated neighborhoods. These legal actions have been driven by concerns that the FAA&apos;s assessments often downplay the significant disruptions to residents&apos; quality of life and fail to engage meaningfully with the public during the decision-making process. The lawsuits reflect widespread dissatisfaction with the perceived disregard for environmental and public health considerations, leading to protracted legal battles aimed at forcing the FAA to conduct more thorough and transparent environmental reviews.
                        </p>
                                         
                        <h3 className='font-bold'>Las Vegas, 2001</h3>
                        <p>
                          In 2001, the Federal Aviation Administration (FAA) approved a plan to expand Las Vegas McCarran International Airport, which included the construction of a new terminal and additional runways to accommodate increased air traffic. The expansion was part of a broader effort to manage the growing number of flights to and from Las Vegas, a major tourist destination. The National Parks Conservation Association (NPCA), along with other environmental groups, filed a lawsuit against the FAA in 2006. They contended that the FAA&apos;s Environmental Impact Statement (EIS) for the airport expansion was insufficient. They argued that the FAA failed to properly analyze the cumulative noise and pollution impacts that increased air traffic would have on the surrounding national parks, which are protected areas with sensitive ecosystems. The US Court of Appeals for the District of Columbia Circuit ruled in favor of the NPCA, finding that the FAA had not sufficiently addressed the environmental concerns raised by the airport expansion. The court held that the FAA&apos;s EIS did not adequately evaluate the cumulative impacts of the project, particularly in relation to the national parks.
                        </p>
                        
                        <h3 className='font-bold'>Phoenix, 2014</h3>
                        <p>
                          One of the most prominent lawsuits was <a href="https://law.justia.com/cases/federal/appellate-courts/cadc/15-1158/15-1158-2017-08-29.html" target="_blank" rel="noopener" >filed</a> by the City of Phoenix after the FAA implemented new flight paths at Phoenix Sky Harbor International Airport in 2014. Residents experienced a dramatic increase in noise levels, leading to widespread complaints. The US Court of Appeals for the DC Circuit ruled in favor of Phoenix, finding that the FAA had failed to adequately engage with the city and its residents before implementing the changes. The court ordered the FAA to review and revise the flight paths, marking a significant victory for the city and affected communities. As a result of the ruling, the FAA entered into negotiations with the city to redesign the flight paths, and some routes were modified to reduce the noise impact.
                        </p>
                                                
                        <h3 className='font-bold'>San Francisco Area, 2015</h3>
                        <p>
                          In the San Francisco Bay Area, cities such as Palo Alto, Menlo Park, and Portola Valley have filed <a href="https://www.aero-news.net/index.cfm?do=main.textpost&id=2c917a8d-efdc-4cbe-8580-7b792e735364" target="_blank" rel="noopener" >lawsuits</a> against the FAA over changes to flight paths at San Francisco International Airport (SFO). Residents argued that the FAA did not properly assess the noise and environmental impacts and failed to adequately engage with local communities. These lawsuits have had mixed results, with some cases being dismissed and others leading to ongoing negotiations between the FAA and local governments to explore noise reduction strategies.
                        </p>
                        
                        <h3 className='font-bold'>Newport Beach, 2016</h3>
                        <p>
                          Newport Beach filed a lawsuit in federal court challenging the accuracy and efficacy of the FAA&apos; environmental assessment of a proposal to reroute flights at John Wayne and 20 other Southern California airports. They opposed the FAA plan on the grounds that the environmental assessment appeared to have been lifted from one prepared for East Coast cities, without taking Southern California&apos;s specific air pollution and noise issues into account. A settlement was reached shortly after. Under the terms of the agreement, the departure paths continued to be located between existing noise monitors while the FAA developed a curved departure procedure that would avoid residential areas to the greatest extent possible. In a statement, City Attorney Aaron Harp said that the settlement was a better outcome that the city could have expected had the case gone to trial, which would have been limited to the adequacy of the environmental assessment.
                        </p>
                        
                        <h3 className='font-bold'>Laguna Beach, 2016</h3>
                        <p>
                          In the same week Newport Beach sued the Federal Aviation Administration, the city of Laguna Beach filed its own lawsuit also challenging the agency&apos;s plan to change jet arrival and departure patterns at several Southern California airports. In their complaint, Laguna officials allege that FAA&apos;s environmental assessment for its Metroplex project lacks enough explanation and quantifiable information to conclude that Metroplex will result in no significant environmental impacts.
                        </p>
                        
                        <h3 className='font-bold'>Burien WA, 2017-2019</h3>
                        <p>
                          In 2017, the City of Burien, along with community groups, filed a <a href="https://law.justia.com/cases/federal/appellate-courts/ca9/18-71705/18-71705-2019-11-27.html" target="_blank" rel="noopener" >lawsuit</a> against the FAA. The lawsuit contended that the FAA had made the flight path changes without proper environmental review and public consultation, which they argued was a violation of the National Environmental Policy Act (NEPA). NEPA requires federal agencies to conduct thorough environmental impact assessments and engage with the public before making decisions that could significantly affect the environment. The plaintiffs argued that the FAA had failed to consider the environmental and noise impacts of the new flight paths on the community and had not adequately informed or involved the public in the decision-making process. In 2019, the US Court of Appeals for the Ninth Circuit ruled in favor of the City of Burien. The court found that the FAA had indeed failed to comply with NEPA&apos;s requirements. Specifically, the court determined that the FAA had improperly categorized the flight path changes as a &quot;categorical exclusion&quot; from NEPA review, which is reserved for actions that do not have a significant environmental impact. The court ruled that the FAA should have conducted a more comprehensive environmental review, including public consultations, before implementing the new flight paths.
                        </p>
                        
                        <h3 className='font-bold'>State of Maryland, 2019</h3>
                        <p>
                          State of Maryland <a href="https://www.aero-news.net/index.cfm?do=main.textpost&id=08b32732-771b-461b-8354-a87ea092f835" target="_blank" rel="noopener" >files</a> a lawsuit against FAA And NextGen In The US Court Of Appeals for the District Of Columbia Circuit. The DC Court Of Appeals dismisses the State of Maryland vs. FAA stating that the State of Maryland failed to file its petition after the 60-day filing deadline set forth in the statute. Despite the dismissal, the Court stated that the FAA displays a &quot;pattern&quot; of &quot;serial promises&quot; that the agency is considering community noise concerns. The Court also recognized the FAA&apos;s lack of environmental analyses. The Court said the FAA appears to have &quot;given short shrift to the required environmental analyses&quot; but only the City of Phoenix filed a &quot;timely&quot; petition. Additionally, the Court recognized that the 60-day window is short &quot;especially for local governments and citizens groups&quot; and cautioned the FAA that &quot;the short review period is a shield, not a sword&quot; and &quot;does not authorize the FAA to lull potential petitioners into believing that its actions remain non-final in order to ward off a timely challenge.&quot; The Court refused to hear the case on the merits.
                        </p>
                        
                        <h3 className='font-bold'>Southern California, 2020</h3>
                        <p>
                          In Southern California, several cities, including Los Angeles and Culver City, <a href="https://nqsc.org/downloads/LOSANGELESPFR.pdf" target="_blank" rel="noopener" >sued</a> the FAA over new flight paths at Los Angeles International Airport (LAX) that were implemented under NextGen. The plaintiffs argued that the FAA&apos;s environmental assessment was flawed and that the agency had not adequately addressed the noise impacts on local communities. The US Court of Appeals for the Ninth Circuit ruled in favor of the FAA, stating that the agency had followed proper procedures under NEPA. However, the court also acknowledged the significant noise issues raised by the communities. While the FAA won the case, ongoing public pressure has led to continued discussions between the FAA and local governments to address noise concerns and explore possible adjustments to flight paths.
                        </p>
                        
                        <h3 className='font-bold'>Flushing NY, 2021</h3>
                        <p>
                          In 2021, Flushing and other affected communities in Queens filed a lawsuit against the FAA. The lawsuit centered on several key issues: The plaintiffs argued that the FAA had failed to conduct a thorough environmental review as required under the National Environmental Policy Act (NEPA). They contended that the FAA had not fully considered the cumulative environmental impacts of the new flight paths, including noise pollution and air quality degradation. The communities claimed that the FAA had implemented the flight path changes without adequate public consultation. They argued that the FAA did not properly inform or involve the local residents and stakeholders in the decision-making process, which they believed was a violation of NEPA and other federal regulations. The case is currently ongoing.
                        </p>
                        
                        <h3 className='font-bold'>City of Dallas and North Texas Communities, 2022</h3>
                        <p>
                          The plaintiffs contended that the FAA failed to conduct a comprehensive environmental impact assessment as required by the National Environmental Policy Act (NEPA). They argued that the FAA&apos;s environmental review did not adequately consider the cumulative effects of the new flight paths, particularly regarding noise pollution and its impact on residents&apos; health and well-being. The case is similar to the one filed in Flushing. This case is also ongoing.
                        </p>
                        
                        <h3 className='font-bold'>Burbank CA, 2023</h3>
                        <p>
                          In 2023 the City of Los Angles had <a href="https://law.justia.com/cases/federal/appellate-courts/ca9/21-71170/21-71170-2023-03-29.html" target="_blank" rel="noopener" >challenged</a> the FAA&apos;s decision approving the new terminal complex, parking structure, fire station, and maintenance and cargo buildings on two grounds. First, the City challenged the Environmental Impact Statement (EIS) based on fundamental flaws in the study. The second argument was that the FAA did not consider all reasonable alternatives such that the outcome was predetermined. The court rejected the second argument but found in favor of the City in the first argument. Accordingly, the court remanded the case back to the FAA panel since the plan failed to comply with the National Environmental Policy Act (NEPA). The court determined that the FAA had a fundamental flaw in the EIS because it failed to consider the reasonable possibility that equipment running simultaneously would have increased noise levels beyond the acceptable thresholds.
                        </p>
                        
                        <h3 className='font-bold'>City of Queens NY, 2023</h3>
                        <p>
                          The case was brought before the US Court of Appeals for the Second Circuit. The plaintiffs sought a court order requiring the FAA to conduct a more thorough environmental review of the flight path changes and to engage in proper public consultations with the affected communities. Additionally, they aimed to have the FAA explore alternative flight paths or implement noise mitigation measures to alleviate the impact on Queens&apos; neighborhoods. This case is also ongoing.
                        </p>

                </div>
            </div>
        </section>
      
        <BackButton />
    </>
  );
}

export default page