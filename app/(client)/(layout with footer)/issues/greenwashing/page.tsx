import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';
import Image from 'next/image';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues/greenwashing'),
  title: {
    default: 'BlueSkies Advocates | Greenwashing',
    template: '%s | BlueSkies Advocates',
  },
  description: 'To falsely promote aviation services or policies as environmentally friendly to gain a positive public image. Aviation false advertising. Carbon offsets.',
  openGraph: {
    title: 'Greenwashing',
    description: 'To falsely promote aviation services or policies as environmentally friendly to gain a positive public image. Aviation false advertising. Carbon offsets.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues/greenwashing',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/api/og?title=GREENWASHING',
        alt: 'Preview image for Greenwashing',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'Greenwashing',
    description: 'To falsely promote aviation services or policies as environmentally friendly to gain a positive public image. Aviation false advertising. Carbon offsets.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for Greenwashing',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="Greenwashing" />
      <ScrollToTop />

      <section id="greenwashing">
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4">
            <h2 className="text-lg font-bold">What is Greenwashing?</h2>
            <p>
              The aviation industry faces growing pressure to reduce its environmental impact as public awareness of climate change intensifies. In response, airlines, manufacturers, and aviation bodies have increasingly turned to sustainability initiatives, prominently featuring new technologies,
              cleaner fuels, and carbon offsetting programs. While some progress is genuine, many of these initiatives fall under the banner of &quot;greenwashing&quot;, a marketing strategy that exaggerates or misrepresents environmental benefits.
            </p>
            <p>
              <a href="https://www.greenpeace.org.uk/news/what-is-greenwashing/" target="_blank" rel="noopener">
                Greenwashing
              </a>{' '}
              refers to deceptive tactics used by companies to present their products or practices as more environmentally friendly than they actually are. In aviation, greenwashing often involves overstating the environmental benefits of sustainable aviation fuels, carbon offset programs, or new
              aircraft technologies. This practice allows companies to maintain a public image of environmental responsibility while continuing business practices that are harmful to the planet.
            </p>
            <p>
              <a href="https://www.aef.org.uk/2022/10/28/the-truth-about-flying-greenwashing-in-the-aviation-industry/" target="_blank" rel="noopener">
                Aviation greenwashing
              </a>{' '}
              has come under scrutiny, especially over the last few years, with example of crackdown attempts performed by Governmental Regulators in{' '}
              <a href="https://www.ft.com/content/adec5d6d-24ed-4723-942a-d94d0aa53b8a" target="_blank" rel="noopener">
                the EU
              </a>
              ,{' '}
              <a href="https://www.edo.org.au/2023/03/23/etihad-airways-accused-of-climate-greenwashing-in-accc-complaint/" target="_blank" rel="noopener">
                Australia
              </a>{' '}
              and also{' '}
              <a href="https://globallitigationnews.bakermckenzie.com/2024/07/31/united-states-navigating-the-new-rise-of-greenwashing-litigation/" target="_blank" rel="noopener">
                the United States
              </a>
              .
            </p>
            <p>So, how is greenwashing performed in practice? When does a sustainable claim become &quot;greenwashing&quot;?</p>
            <p>Greenwashing can manifest in several ways:</p>

            <ul className="list-disc">
              <li>
                <strong>
                  <a href="https://www.bbc.com/news/business-67625200" target="_blank" rel="noopener">
                    False Claims
                  </a>
                </strong>
                : Making unsubstantiated or outright false statements about environmental efforts.
              </li>
              <br />
              <li>
                <strong>Selective Disclosure</strong>: Highlighting only the positive aspects of a company&apos;s environmental record while ignoring ongoing pollution or emissions.
              </li>
              <br />
              <li>
                <strong>Vague Language</strong>: Using terms like &quot;eco-friendly,&quot; &quot;green,&quot; or &quot;carbon-neutral&quot; without providing concrete definitions or data to back up these claims.
              </li>
            </ul>

            <div className="flex justify-center pt-4">
              <Image src="/assets/images/images/Alternative_Aviation_Fuel_Pollution.jpg" width={500} height={200} alt="Alternative Aviation Fuel Pollution" />
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Alternative Aviation Fuels</h2>
            <p>
              One of the most common areas where greenwashing occurs in aviation is through the promotion of alternative fuels, especially Sustainable Aviation Fuel (SAF). SAF is touted as a low-carbon alternative to traditional jet fuel, made from renewable resources such as waste oils, fats, and
              agricultural residues. Airlines claim that SAF can reduce greenhouse gas emissions by up to 80% compared to conventional fuels, depending on its production method and supply chain. However, this promising narrative often overshadows several critical limitations:
            </p>

            <ul className="list-disc">
              <li>
                <strong>Availability</strong>: SAF production remains limited. In 2022, SAF accounted for less than 0.1% of the global jet fuel market. Even the most optimistic projections suggest it will be difficult to scale SAF production to meet the global demand for jet fuel in the near future.
              </li>
              <br />
              <li>
                <strong>Cost</strong>: SAF is currently significantly more expensive than conventional jet fuel, making it financially unsustainable for airlines to adopt at scale without government subsidies.
              </li>
              <br />
              <li>
                <strong>Carbon Emissions</strong>: While SAF can reduce carbon emissions, these reductions are often overestimated or framed without considering the lifecycle emissions of SAF, including those from production, transportation, and land-use changes.
              </li>
            </ul>

            <p>
              Despite these challenges, airlines often promote SAF as a key solution to decarbonizing aviation, using it as a tool for greenwashing by suggesting that SAF alone can make flying sustainable. Such claims often fail to address the broader environmental issues associated with air travel,
              including non-CO2 emissions, noise pollution, and biodiversity impacts.
            </p>

            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Greenwashing in Carbon Offsetting Programs</h2>
            <p>
              Another common greenwashing strategy in aviation involves carbon offset programs. Airlines offer passengers the option to purchase offsets, which theoretically counterbalance the carbon emissions from their flight by funding projects such as tree planting, renewable energy initiatives,
              or forest preservation. However, these programs are fraught with problems:
            </p>

            <ul className="list-disc">
              <li>
                <strong>Lack of Accountability</strong>: One of the main criticisms of carbon offsets in aviation is the lack of proper oversight. Airlines often rely on third-party carbon offset programs to claim environmental responsibility. However, there is no unified global standard ensuring
                that these offsets genuinely reduce emissions. Many of the projects funded by carbon offsets, such as reforestation or renewable energy initiatives, are difficult to track and verify in terms of their long-term effectiveness. In some cases, airlines may invest in projects that would
                have occurred anyway, meaning the offset doesn&apos;t actually reduce emissions beyond what was already planned.
              </li>
              <br />
              <li>
                <strong>Temporary Solutions</strong>: Offsets often provide only short-term solutions. For instance, tree planting projects, which are a popular form of carbon offsetting, only sequester carbon over time. Furthermore, the carbon stored in trees is vulnerable to being released again
                due to wildfires, deforestation, or degradation. Since aviation emissions happen immediately upon burning fossil fuels, relying on these slow or reversible processes does not address the urgency of reducing emissions today.
                <br />
                <br />
                Moreover, offsets can&apos;t keep up with the rapid growth of the aviation industry. As air traffic continues to expand, the sheer volume of emissions far outpaces what offsets are capable of compensating for. This mismatch reveals that offsets are a band-aid solution, rather than a
                fundamental change in how emissions are produced and managed.
              </li>
              <br />
              <li>
                <strong>False Sense of Security</strong>: Carbon offsets can create a false sense of security for both airlines and consumers. By purchasing offsets, airlines can market themselves as &quot;carbon-neutral&quot; or environmentally friendly, even though they are not making meaningful
                reductions in their operational emissions. This misrepresentation can lead consumers to believe that their flights are sustainable, when in reality, the flights are still contributing significantly to climate change.
                <br />
                <br />
                The perception that flying can be made &quot;green&quot; through offsets may deter more serious actions to reduce emissions, such as increasing fuel efficiency, transitioning to sustainable aviation fuels, or reducing the number of flights. As a result, carbon offsetting schemes may
                slow the transition to genuinely lower-carbon aviation.
              </li>
            </ul>

            <div className="flex justify-center pt-4">
              <Image src="/assets/images/images/CORSIA.png" width={500} height={200} alt="CORSIA Scheme" />
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">
              The Shortcomings of{' '}
              <a className="link" href="https://en.wikipedia.org/wiki/Carbon_Offsetting_and_Reduction_Scheme_for_International_Aviation" target="_blank" rel="noopener">
                CORSIA
              </a>
            </h2>
            <p>
              CORSIA is a global market-based measure designed to cap and offset the growth of carbon emissions from international aviation at 2020 levels. The primary goal of the scheme is to enable airlines to compensate for their emissions by purchasing carbon offsets from projects that
              supposedly reduce or capture greenhouse gas emissions, such as reforestation or renewable energy programs. Airlines offer passengers the option to purchase offsets, which theoretically counterbalance the carbon emissions from their flight by funding projects such as tree planting,
              renewable energy initiatives, or forest preservation. While CORSIA was hailed as a groundbreaking initiative aimed at reducing the carbon footprint of the aviation industry, its implementation has been fraught with shortcomings and failures that prevent it from being an effective
              solution. The program is currently voluntary until 2027, after which it will become mandatory for many countries.
            </p>
            <p>CORSIA&apos;s structure is based on three phases:</p>

            <ul className="list-disc">
              <li>
                <strong>Pilot Phase (2021-2023)</strong>: Voluntary participation by countries.
              </li>
              <br />
              <li>
                <strong>First Phase (2024-2026)</strong>: Still voluntary but with increased participation.
              </li>
              <br />
              <li>
                <strong>Second Phase (2027-2035)</strong>: Mandatory for all participating countries, with certain exemptions for least developed nations and small emitters.
              </li>
            </ul>

            <p>
              One of the most glaring weaknesses of CORSIA is its limited scope. The program only targets international flights, which represent about 60% of global aviation emissions. This leaves a substantial portion of domestic flights - particularly in major aviation markets like the United
              States, China, and the European Union - completely unregulated under CORSIA. Without addressing domestic emissions, the program ignores a significant part of aviation&apos;s carbon footprint, severely limiting its overall effectiveness.
            </p>
            <p>
              Moreover, CORSIA only addresses emissions growth beyond 2020 levels. It does not require airlines to take action on the substantial emissions that were already occurring before 2020. This means that even if the program is fully implemented, the aviation industry will continue to
              contribute heavily to global warming.
            </p>
            <p>
              CORSIA&apos;s reliance on carbon offsets is another major problem. Instead of directly reducing their emissions, airlines are allowed to purchase credits from carbon-offset projects to &quot;neutralize&quot; their excess emissions. While carbon offsets can theoretically help balance
              emissions by funding projects that remove or prevent CO₂ from entering the atmosphere, their effectiveness is highly contested. Several issues plague the carbon offset market:
            </p>

            <ul className="list-disc">
              <li>
                <strong>Questionable Integrity</strong>: Many offset projects, such as tree planting initiatives, are difficult to verify. Trees may take decades to capture the amount of carbon they are credited for, and forests are vulnerable to fires or logging, which can release stored carbon
                back into the atmosphere. This makes carbon offsetting a temporary and unreliable solution to a long-term problem.
              </li>
              <br />
              <li>
                <strong>Additionality</strong>: A key principle of carbon offsetting is additionality—the idea that a project must only count as an offset if it would not have occurred without the offset funding. In many cases, projects that receive offset payments were already planned or underway,
                meaning that the funds do not result in any additional carbon reduction.
              </li>
              <br />
              <li>
                <strong>Permanence</strong>: Many carbon sequestration methods, especially those based on natural solutions like reforestation, face risks of impermanence. A forest planted to offset carbon may be destroyed by fires, pests, or deforestation, rendering the original offset ineffective.
              </li>
            </ul>

            <p>
              CORSIA, as it currently operates, gives airlines the ability to greenwash their operations by marketing themselves as environmentally friendly without making substantial reductions in their emissions. By relying heavily on carbon offsets, airlines can claim to be taking climate action
              while continuing to operate high-emission flights. This creates a false sense of security for consumers and stakeholders who believe the aviation industry is moving toward sustainability.
            </p>
            <p>
              Moreover, there is little transparency around the quality of offsets being purchased. Airlines may buy low-quality or unverified credits, further undermining the scheme&apos;s environmental credibility. Without rigorous oversight, there is no guarantee that the offsets purchased
              through CORSIA are leading to real, verifiable reductions in greenhouse gas emissions.
            </p>

            <p>
              <strong>Why CORSIA is Not Working in Reality</strong>
            </p>
            <ul className="list-disc">
              <li>
                <strong>Voluntary Nature</strong>: During the initial phases of CORSIA, participation is largely voluntary, and only a fraction of countries have opted in. This reduces the effectiveness of the program, as many major emitters may choose to delay or completely forgo participation.
                Even when CORSIA becomes mandatory in 2027, exemptions for certain countries and operators will still leave many emissions unregulated. The voluntary nature of CORSIA has also led to a lack of ambition. Because participation is not compulsory, airlines and governments have little
                incentive to pursue aggressive emission reduction strategies. This leaves the program toothless in the face of the rapidly growing aviation sector.
              </li>
              <br />
              <li>
                <strong>Weak Environmental Standards</strong>: CORSIA&apos;s environmental standards have been widely criticized for being too lenient. The program allows airlines to purchase offsets from a wide variety of sources, many of which have questionable climate benefits. Furthermore,
                CORSIA does not set any requirement for airlines to directly reduce their operational emissions. This means that airlines can continue business as usual while buying their way out of climate responsibility. The lack of stringent environmental criteria within CORSIA undermines its
                ability to drive real decarbonization within the aviation sector. Without strong regulations that mandate direct emissions reductions, airlines will likely continue to depend on carbon offsets rather than investing in cleaner technologies and operational improvements.
              </li>
              <br />
              <li>
                <strong>Permanence</strong>: Many carbon sequestration methods, especially those based on natural solutions like reforestation, face risks of impermanence. A forest planted to offset carbon may be destroyed by fires, pests, or deforestation, rendering the original offset ineffective.
              </li>
            </ul>

            <p>
              <strong>CORSIA and the Illusion of &quot;Net Zero&quot; Aviation</strong>
            </p>
            <p>
              CORSIA is often touted as a key step toward achieving net-zero emissions in aviation by 2050. However, the scheme&apos;s design and reliance on offsets make this goal highly improbable. Offsetting alone will not bring the aviation industry to net zero. The aviation sector needs to
              invest in technological innovations, such as electric or hydrogen-powered planes, and improved operational efficiency to truly reduce its emissions footprint.
            </p>
            <p>CORSIA&apos;s net-zero aspirations are also undermined by its lack of a robust compliance mechanism. Without strict enforcement and a focus on real emissions reductions, CORSIA risks becoming a symbolic gesture rather than a meaningful climate action plan.</p>

            <div className="flex justify-center pt-4">
              <Image src="/assets/images/images/Airport_Certifications.jpg" width={500} height={200} alt="Airport Green Certifications" />
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Carbon-neutral airports don&apos;t equate to carbon-neutral flights</h2>
            <p>
              As the aviation industry faces increasing scrutiny over its significant contribution to global carbon emissions, many airports are taking steps to mitigate their environmental impact. Some are even achieving carbon-neutral status, a milestone that seems to represent significant
              progress toward greener aviation. However, while carbon-neutral airports play an important role in reducing localized emissions, they do not equate to carbon-neutral flights, which are far more complex and impactful in terms of climate change.
            </p>
            <p>
              A carbon-neutral airport refers to an airport that has achieved net-zero emissions within its own operations. This can be accomplished by reducing emissions through energy efficiency, renewable energy use, and improved operational processes, and by offsetting the remaining emissions
              through various mechanisms, such as purchasing carbon credits.
            </p>
            <p>
              Airports Council International (ACI), a global association of airports, developed the Airport Carbon Accreditation (ACA) program to recognize airports that reduce their carbon emissions. Under the program, airports can achieve several levels of accreditation, with the highest being
              Level 3+ (Neutrality), meaning that the airport has offset all emissions from its operations under its direct control. To reach carbon-neutral status, airports employ a variety of strategies, including:
            </p>

            <ul className="list-disc">
              <li>
                <strong>Energy Efficiency</strong>: Improving lighting systems, upgrading heating and cooling infrastructure, and using more efficient vehicles for ground operations.
              </li>
              <br />
              <li>
                <strong>Renewable Energy</strong>: Installing solar panels or wind turbines, or purchasing renewable energy from local utilities.
              </li>
              <br />
              <li>
                <strong>Carbon Offsetting</strong>: Offsetting residual emissions through purchasing carbon credits from projects such as reforestation, renewable energy development, or carbon capture initiatives.
              </li>
              <br />
              <li>
                <strong>Sustainable Ground Operations</strong>: Electrifying ground support vehicles, reducing energy consumption in terminal buildings, and using alternative fuels for airport shuttles.
              </li>
            </ul>
            <p>
              These measures are commendable, but they only address emissions from ground-based operations at the airport, not the emissions generated by aircraft during flights. While carbon-neutral airports may have reduced or offset their ground-based emissions, the overwhelming majority of
              aviation&apos;s carbon footprint comes from airborne activities, particularly the burning of fossil fuels by aircraft. Jet fuel combustion releases CO₂, water vapor, and other greenhouse gases directly into the atmosphere at high altitudes, where they can have a more potent warming
              effect.
            </p>
            <p>
              Airports, in their entirety, are responsible for a relatively small portion of aviation&apos;s total emissions. According to the International Air Transport Association (IATA), less than 10% of aviation-related CO₂ emissions come from ground operations, including airport activities
              like ground handling, terminal energy use, and auxiliary services. The remaining 90% come from aircraft in flight. This means that even if every airport in the world were to achieve carbon neutrality, the global aviation industry would still be responsible for significant emissions.
              The focus on making airports carbon-neutral can, therefore, obscure the larger problem of flight emissions.
            </p>
            <p>
              Many carbon-neutral airports achieve their status through offsetting, which allows them to compensate for their own emissions by investing in projects that reduce or capture carbon elsewhere. While offsetting can help balance emissions in theory, it does not address the core issue:
              aviation&apos;s ongoing dependency on fossil fuels.
            </p>
            <p>
              Carbon-neutral airport initiatives focus on CO₂ emissions, but the climate impact of aviation goes beyond just carbon dioxide. Aircraft produce water vapor, nitrogen oxides (NOₓ), and particulate matter that contribute to the formation of contrails and cirrus clouds, which can trap
              heat in the atmosphere and enhance the greenhouse effect. Studies suggest that these non-CO₂ emissions may have an even greater warming effect than CO₂ itself. These high-altitude emissions are not accounted for in the carbon neutrality frameworks of airports, meaning that the full
              climate impact of aviation remains unaddressed by current mitigation strategies.
            </p>

            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Legal Actions Against Greenwashing in Aviation</h2>
            <p>
              Over the last years, governments and regulatory bodies have begun to crack down on greenwashing practices across various industries, including aviation. Several legal actions and court rulings have brought to light the deceptive nature of some sustainability claims, offering a clearer
              view of the challenges aviation faces in becoming truly environmentally responsible.
            </p>
            <p>
              - Ryanair&apos;s Low-Emission Claims (2020)
              <br /> The UK Advertising Standards Authority (ASA){' '}
              <a href="https://news.sky.com/story/ryanair-adverts-banned-for-making-misleading-co2-emissions-claims-11926471" target="_blank" rel="noopener">
                banned
              </a>{' '}
              advertisements from Ryanair that claimed the airline was &quot;Europe&apos;s lowest-emission airline.&quot; The ASA found that Ryanair&apos;s comparison was based on selective data and omitted important context, such as the fact that it was only marginally less polluting than other
              airlines. This case highlighted the misleading use of environmental claims to attract eco-conscious travelers.
            </p>
            <p>
              - KLM&apos;s &quot;Fly Responsibly&quot; Campaign (2021)
              <br /> Dutch airline KLM faced scrutiny for its &quot;Fly Responsibly&quot; campaign, which encouraged passengers to offset their carbon emissions and claimed that KLM was leading the way in making aviation more sustainable. Environmental groups argued that KLM&apo;s marketing misled
              the public by suggesting that flying could be environmentally friendly, when in reality, aviation&apos;s overall carbon footprint remains substantial. In 2023, a{' '}
              <a href="https://www.ft.com/content/5169410d-427e-4156-ba08-f17284c477ca" target="_blank" rel="noopener">
                lawsuit
              </a>{' '}
              was filed in a Dutch court against KLM, marking one of the first legal actions of its kind aimed at an airline for greenwashing practices.
            </p>
            <p>
              - Lufthansa&apos;s &quot;green&quot; adverts (2023)
              <br /> The UK&apos;s Advertising Standards Authority (ASA){' '}
              <a href="https://www.theguardian.com/business/2023/mar/01/airline-green-adverts-banned-uk-lufthansa-asa" target="_blank" rel="noopener">
                banned
              </a>{' '}
              a Lufthansa ad campaign that claimed the airline&apos;s green initiatives were &quot;protecting the world,&quot; ruling it as misleading. The ASA found that the ad implied Lufthansa had already made significant environmental progress, which was not the case. While Lufthansa argued the
              slogan was open to interpretation and based on future aspirations like achieving carbon neutrality by 2050, the ASA ruled the ad gave a false impression that current flying practices were environmentally friendly. The ASA emphasized that claims about green initiatives must be clearly
              substantiated and not mislead consumers.
            </p>
            <p>
              - Etihad&apos;s &quot;misleading&quot; environmental claims (2023)
              <br /> In the same year, ASA also{' '}
              <a href="https://www.standard.co.uk/news/uk/etihad-ads-banned-misleading-environmental-claims-asa-b1073510.html" target="_blank" rel="noopener">
                banned
              </a>{' '}
              two Etihad Facebook ads that made exaggerated claims about the airline&apos;s &quot;sustainable aviation&quot; efforts. The ads highlighted Etihad&apos;s initiatives such as reducing single-use plastics and using fuel-efficient planes. However, the ASA ruled that these efforts were not
              enough to justify the term &quot;sustainable aviation,&quot; noting that air travel still produces significant emissions contributing to climate change. Etihad argued that &quot;sustainable aviation&quot; was part of a long-term strategy rather than an immediate solution, but the ASA
              concluded that the ads overstated the environmental benefits and violated advertising rules. Etihad expressed disappointment with the decision, emphasizing its commitment to sustainability through investments in modern aircraft, sustainable fuels, and reforestation projects.
            </p>
            <p>
              - Delta&apos;s &quot;carbon neutral&quot; claims (2023)
              <br /> In the United States, Delta Air Lines is facing a{' '}
              <a href="https://www.bloomberg.com/news/articles/2023-06-13/a-greenwashing-lawsuit-against-delta-aims-to-set-a-precedent" target="_blank" rel="noopener">
                class-action lawsuit
              </a>{' '}
              accusing the company of misleading consumers by claiming to be the &quot;world&apos;s first carbon-neutral airline.&quot; Filed in May 2023, the lawsuit centers on Delta&apos;s use of carbon offsets to support its carbon-neutrality pledge. However, the lawsuit claims Delta overstated
              the benefits of these offsets and their actual impact on reducing emissions. It also highlights issues with the effectiveness and credibility of carbon offset projects in general, such as deforestation and renewable energy efforts that may not meet critical standards like
              &quot;additionality&quot; — meaning the projects may have happened even without the offsets.
            </p>
            <p>
              Plaintiffs argue that Delta&apos;s marketing creates a false impression for consumers that the company has fully addressed its environmental impact. In response, Delta maintains that the lawsuit is without merit and states that since 2022, it has shifted its focus away from offsets
              toward more direct decarbonization efforts, such as investing in sustainable aviation fuels and more efficient aircraft.
            </p>

            <div className="flex justify-center pt-4">
              <Image src="/assets/images/images/Climate_Change.png" width={500} height={200} alt="Climate Change and Aviation" />
            </div>
            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Why Greenwashing is Prevalent in the Aviation Industry</h2>
            <p>
              <strong>Pressure to Address Climate Change</strong>
            </p>
            <p>
              Aviation is one of the most carbon-intensive industries, and the public, regulators, and environmental advocates are demanding significant reductions in emissions. In response, airlines feel compelled to showcase their sustainability efforts, often exaggerating or overstating the
              impact of these initiatives to meet the growing expectations of eco-conscious consumers.
            </p>
            <p>
              <strong>Limited Technological Solutions</strong>
            </p>
            <p>
              Unlike other industries, aviation has fewer immediate solutions to drastically reduce emissions. Electric, hydrogen, and solar-powered planes are still far from being commercially viable and are{' '}
              <a href="/assets/files/eurocontrol-decarbonizing-long-haul.pdf" target="_blank" rel="noopener">
                unlikely to be ready
              </a>{' '}
              for widespread use for several decades. Anyone claiming otherwise is not providing an accurate picture of current technological progress. SAF and carbon offsets provide some emissions reductions, but they fall far short of making air travel sustainable. This gap between the
              industry&apos;s environmental impact and the available solutions encourages companies to overstate the benefits of their green initiatives.
            </p>
            <div className="flex justify-center pt-4">
              <Image src="/assets/images/images/Electric_Planes_Are_Decades_Away.png" width={300} height={300} alt="Electric Planes Are Decades Away" />
            </div>

            <caption className="italic text-sm font-light">
              Image by{' '}
              <a href="https://www.eurocontrol.int/publication/eurocontrol-think-paper-21-long-haul-flight-decarbonisation-when-can-cutting-edge" target="_blank" rel="noopener">
                Eurocontrol
              </a>
              , Think Paper #21
            </caption>

            <p>
              <strong>Financial Incentives</strong>
            </p>
            <p>
              Greenwashing helps airlines attract a growing base of eco-conscious travelers, who may be willing to pay a premium for flights they perceive as being less harmful to the environment. By promoting themselves as &quot;green&quot; or &quot;sustainable,&quot; airlines can capture this
              market segment and enhance their corporate image, even if their actual practices don&apos;t align with their marketing messages.
            </p>
            <p>
              <strong>Complex Supply Chains</strong>
            </p>
            <p>
              Aviation involves complex supply chains that make it difficult to measure and verify the true environmental impact of various green initiatives. Airlines often outsource certain sustainability efforts, such as carbon offsets or SAF production, to third parties, allowing them to
              distance themselves from the actual outcomes and sidestep accountability.
            </p>

            <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h2 className="text-lg font-bold">Long-Term Solutions: What Can Be Done?</h2>
            <p>
              <strong>Stricter Regulations on Green Claims</strong>
            </p>
            <p>
              Governments and regulatory bodies must continue to crack down on false or misleading environmental claims. Initiatives like the European Union&apos;s Green Claims Directive aim to ensure that companies substantiate their environmental claims with reliable evidence. By holding airlines
              accountable for their sustainability promises, regulators can deter greenwashing and encourage more genuine efforts to reduce emissions.
            </p>
            <p>
              <strong>Investment in Real Emission-Reduction Technologies</strong>
            </p>
            <p>
              While SAF and carbon offsets have some limited role to play, the aviation industry needs to invest more heavily in long-term solutions, such as electric and hydrogen-powered aircraft. Additionally, improvements in air traffic management, aircraft design, and airport infrastructure can
              further reduce aviation&apos;s environmental impact. Until these technologies are fully developed and adopted, airlines must be transparent about the limitations of their current sustainability efforts.
            </p>
            <p>
              <strong>Implement More Aggressive Carbon Pricing</strong>
            </p>
            <p>
              Governments and regulators should impose stronger carbon pricing mechanisms that reflect the true environmental cost of aviation emissions. By making it more expensive to burn fossil fuels, carbon pricing can encourage airlines to adopt cleaner technologies and push citizens to demand
              investments in greener means of transportation such as high speed regional rail networks.
            </p>
            <p>
              <strong>Public Awareness and Consumer Pressure</strong>
            </p>
            <p>
              Consumers play a crucial role in holding airlines accountable for their environmental claims. Increased public awareness of greenwashing practices can lead to greater scrutiny of airlines&apos; sustainability programs. Consumers should be encouraged to research the true impact of their
              flights and support airlines that are making genuine efforts to reduce emissions.
            </p>
            <p>
              Many airlines tend to avoid addressing climate issues in their marketing. The challenges of reducing aviation emissions and the uncertainty surrounding new technologies make it difficult for airlines to promote themselves as environmentally friendly. It&apos;s possible that airlines
              also don&apos;t perceive decarbonization as a top priority for their customers. Although public concern about climate change has reached unprecedented levels, there remains limited awareness about how carbon-intensive air travel truly is.
            </p>
            <p>
              This lack of awareness isn&apos;t surprising since airlines aren&apos;t required to disclose CO2 emissions data to passengers. This must change, not only to raise awareness, but also to empower consumers to make informed decisions about whether to fly, which mode of travel to choose,
              and even which airline to use. Providing clear information about the environmental impact of flying is essential before booking tickets.
            </p>
            <p>
              <strong>A Broader Shift in How We Think About Travel</strong>
            </p>
            <p>
              Ultimately, the most effective way to reduce aviation&apos;s environmental impact may be to reduce the demand for air travel altogether. Governments and businesses can promote alternatives such as high-speed rail for short-haul travel and encourage virtual meetings instead of business
              flights. Reducing air travel demand would not only cut emissions but also diminish the industry&apos;s reliance on greenwashing to maintain a positive public image.
            </p>
          </div>
        </div>
      </section>

      <BackButton />
    </>
  );
};

export default page;
