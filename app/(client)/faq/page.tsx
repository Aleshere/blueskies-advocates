import FAQ from "@/app/components/FAQ";
import Header from "@/app/components/Header";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/faq"),
  title: {
    default: "BlueSkies Advocates | FAQ",
    template: '%s | BlueSkies Advocates'
  },
  description: "Find answers to the most frequently asked questions on our comprehensive FAQ page. Get help with common issues, learn more about aviation myths, and find quick solutions to your doubts.",
  openGraph: {
    title: "BlueSkies Advocates | FAQ",
    description: "Find answers to the most frequently asked questions on our comprehensive FAQ page. Get help with common issues, learn more about aviation myths, and find quick solutions to your doubts.",
    type: "website",
    locale: "en_US",
    url: "http://www.weareblueskies.com/faq",
    siteName: "BlueSkies Advocates"
  },
}

const page = async () => {
    
    const questionsClimate = [
        {
            question: "Isn't aviation only a small part of global emissions?",
            answer: "While aviation contributes approximately 2% of global CO2 emissions, this figure underestimates its true climate impact. High-altitude emissions and non-CO2 effects increase aviation’s contribution to about 3.5% of global climate change emissions. Moreover, the industry's growth trajectory suggests its share of emissions will rise significantly if unchecked."
        },
        {
            question: 'Why focus on aviation emissions?',
            answer: 'Aviation is responsible for about 3.5% of global climate change emissions when considering radiative forcing and non-CO2 effects like water vapour contrails. Despite this seemingly small percentage, the impact is significant because a relatively small proportion of the global population flies. In regions like the UK, for example, flights account for 8% of total emissions, and for frequent flyers, these trips can comprise over half of their annual carbon footprint.'
        },
        {
            question: 'What are radiative forcing and non-CO2 effects?',
            answer: "Radiative forcing refers to the change in energy balance in the Earth's atmosphere due to factors like CO2 emissions. Non-CO2 effects from aviation include emissions of water vapor, nitrogen oxides, and particulate matter at high altitudes, which have a disproportionately large warming effect compared to ground-level emissions."
        },
        {
            question: 'How do electric flights and green fuels fit into reducing aviation emissions?',
            answer: 'Technological solutions such as electric and hydrogen-powered flights are promising but not yet viable on a large scale. These innovations are not expected to be commercially available until at least 2035, and even then, will mainly be suitable for short-haul travel. Additionally, the production of batteries and electricity for electric aircraft has its own environmental impact. Sustainable Aviation Fuel (SAF) is another proposed solution, but it often involves bio-fuels, which can drive deforestation, or synthetic fuels, which still rely on fossil fuels for production. Therefore, while these technologies are part of the solution, they are not a quick fix, and we need immediate action to reduce emissions.',
        },
        {
            question: 'What immediate actions can individuals take to reduce aviation emissions?',
            answer: '1. Fly Less. The most effective way to reduce your aviation footprint is to fly less frequently. Consider alternatives like trains, buses, or virtual meetings. 2. Support Policies. Advocate for policies that reduce aviation emissions, such as increased taxation on frequent flyers and investments in sustainable transportation infrastructure. 3. Raise Awareness. Educate others about the environmental impact of flying and encourage them to take similar steps to reduce their aviation emissions. 4. Fly with Consciousness. Consider the necessity of each flight. Ask yourself if the trip is essential or if there are alternative ways to achieve the same goal without flying.',
        },
        {
            question: 'What policies should be implemented to curb aviation emissions?',
            answer: '1. Frequent Flyer Levy. Taxing frequent flyers more heavily to discourage excessive air travel. 2. Investment in Alternatives. Funding and development of high-speed rail and other low-emission travel options. 3. Regulation of Emissions. Implementing stricter regulations on aviation emissions and encouraging the development and adoption of greener technologies.',
        },
        {
            question: 'How can I support your advocacy group?',
            answer: '1. Get Informed. Stay updated on the latest research and policies related to aviation emissions. 2. Spread the Word. Share information about the impact of aviation emissions with your network. 3. Participate in Campaigns. Join our campaigns and advocacy efforts to push for stronger regulations and sustainable alternatives.',
        }
    ]
    
    const questionsPrivateJets = [
        {
            question: "How do private jets contribute to pollution?",
            answer: "Private jets emit significantly higher amounts of greenhouse gases per passenger compared to commercial flights. They burn large quantities of fuel, contributing to CO2 emissions, and are often used for short trips, making them less efficient."
        },
        {
            question: 'How much more polluting are private jets compared to commercial flights?',
            answer: 'On a per passenger basis, private jets can be up to 14 times more polluting than commercial airliners. This is because they often carry fewer passengers, leading to higher emissions per person.'
        },
        {
            question: 'What are the environmental impacts of using private jets?',
            answer: "The environmental impacts include higher CO2 emissions, increased air pollution from other harmful gases, and greater noise pollution. The luxury of private jet travel comes at a significant environmental cost."
        },
        {
            question: 'How significant is the contribution of private jets to global emissions?',
            answer: 'While private jets make up a small percentage of total aviation traffic, their contribution to aviation emissions is disproportionately high. They account for about 2% of total aviation emissions, despite representing a tiny fraction of total flights.',
        },
        {
            question: 'Can private jet travel be justified environmentally?',
            answer: 'Justifying private jet travel environmentally is challenging given the high per-passenger emissions. However, for critical business or medical reasons, where time is of the essence, it may be justified. Efforts have to be made to minimize their use to just journeys essential to our society.',
        }
    ]
    
    const questionsFlightPaths = [
        {
            question: "What are the health impacts of living under flight paths?",
            answer: "Living under flight paths can lead to several health issues due to constant exposure to noise pollution and air pollution. These impacts include increased stress levels, sleep disturbances, cardiovascular problems, respiratory issues, and in severe cases, an increased risk of heart disease and stroke."
        },
        {
            question: 'How does aircraft noise affect sleep?',
            answer: 'Aircraft noise can disrupt sleep patterns by causing frequent awakenings and reducing the quality of sleep. Chronic sleep disruption can lead to fatigue, decreased cognitive function, and long-term health problems such as hypertension and cardiovascular diseases.'
        },
        {
            question: 'Can noise pollution from aircraft cause cardiovascular problems?',
            answer: "Yes, studies have shown that long-term exposure to high levels of aircraft noise can increase the risk of hypertension (high blood pressure), heart attacks, and other cardiovascular issues. The stress caused by constant noise pollution triggers physiological responses that negatively impact heart health."
        },
        {
            question: 'What respiratory issues are associated with living near flight paths?',
            answer: 'Aircraft emissions contribute to air pollution, releasing particulate matter (PM), nitrogen oxides (NOx), and volatile organic compounds (VOCs) into the air. These pollutants can exacerbate respiratory conditions such as asthma, bronchitis, and other chronic obstructive pulmonary diseases (COPD).',
        },
        {
            question: 'Are there specific groups more vulnerable to these health impacts?',
            answer: 'Yes, certain groups such as children, the elderly, and individuals with pre-existing health conditions are more vulnerable to the adverse health impacts of living near flight paths. Children, in particular, can experience developmental and behavioral issues due to prolonged exposure to noise and air pollution.',
        },
        {
            question: 'How far from an airport do these health impacts extend?',
            answer: "Research indicates that the adverse health impacts of aircraft emissions can extend up to 15 miles from an airport and beyond. Noise pollution and air pollution can spread over a wider area, affecting more distant communities than just those placed directly under a path."
        },
        {
            question: 'Is there a difference in health impacts between daytime and nighttime flights?',
            answer: 'Yes, nighttime flights can have more severe health impacts due to the disruption of sleep. Chronic sleep deprivation caused by nighttime noise pollution is associated with higher risks of cardiovascular diseases, cognitive impairment, and overall reduced quality of life. It is a striking fact that in the USA, since the introduction of ANCA, there are no examples of airports successfully limiting night operations.',
        },
        {
            question: 'Where can I find more information on this topic?',
            answer: 'For more information, you can consult studies from health and environmental organizations, such as the World Health Organization (WHO), the Environmental Protection Agency (EPA), and local health departments. Additionally, advocacy groups focusing on aviation emissions and community health often provide valuable resources and updates on this issue. We are one those groups and will be happy to answer any doubts you may have about the topic.',
        }
    ]
    
    const questionsLivingNearAirport = [
        {
            question: "What types of toxic pollutants are emitted by aircraft?",
            answer: "Aircraft emit a range of toxic pollutants including particulate matter (PM), nitrogen oxides (NOx), volatile organic compounds (VOCs), carbon monoxide (CO), sulfur oxides (SOx), and heavy metals such as lead, barium, and cadmium. These pollutants are released during takeoff, landing, and taxiing, as well as from ground support equipment and airport operations."
        },
        {
            question: 'How does particulate matter (PM) from aircraft affect health?',
            answer: 'Particulate matter, especially ultrafine particles (UFPs) smaller than 100 nanometers, can penetrate deep into the lungs and enter the bloodstream, causing respiratory and cardiovascular problems. Long-term exposure to PM is associated with chronic respiratory diseases, heart disease, stroke, and even premature death.'
        },
        {
            question: 'What are the health effects of nitrogen oxides (NOx) emitted by aircraft?',
            answer: "Nitrogen oxides contribute to the formation of ground-level ozone and fine particulate matter, both of which are harmful to respiratory health. Exposure to NOx can lead to inflammation of the airways, reduced lung function, and increased susceptibility to respiratory infections. Chronic exposure can worsen asthma and other chronic respiratory conditions."
        },
        {
            question: 'Are there specific health risks associated with heavy metals from aircraft emissions?',
            answer: 'Yes, heavy metals such as lead, barium, and cadmium are toxic and can have severe health impacts even at low concentrations. Lead exposure is particularly harmful to children, affecting cognitive development and causing neurological damage. Barium and cadmium can damage the kidneys, liver, and bones, and increase the risk of cancer.',
        },
        {
            question: 'How does living near an airport increase exposure to these pollutants?',
            answer: 'Proximity to an airport increases exposure to toxic pollutants due to higher concentrations of emissions from aircraft and ground operations. Areas downwind of airports are particularly affected, as prevailing winds can carry pollutants over long distances, impacting air quality in nearby communities.',
        },
        {
            question: 'What are the long-term health impacts of exposure to airport pollution?',
            answer: "Long-term exposure to airport pollution can lead to chronic health issues such as asthma, bronchitis, cardiovascular diseases, cancer, and neurological disorders. Continuous exposure to high levels of toxic pollutants increases the risk of developing serious health conditions and reduces overall life expectancy."
        },
        {
            question: 'So, is living near an airport the only problem? Why not just move?',
            answer: 'No, that is just one of the issues citizens face. As discussed above, the impacts of aviation pollution are distributed over a wide radius. Moreover, moving is not necessarily something people can easily do, for a variety of reasons. Reducing the whole discourse to such a diminutive statement is pure gaslighting. ',
        }
    ]

  return (
    <>    
      <Header title="FAQ Section" />
      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500" >Aviation & Climate</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsClimate} />
      </div>
      
      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500" >Ban Private Jets</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsPrivateJets} />
      </div>
      
      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500" >Flight Paths</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsFlightPaths} />
      </div>
      
      <h2 className="pt-6 px-6 md:pt-6 md:px-12 text-xl font-bold text-blue-500" >Living near an Airport</h2>
      <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
        <FAQ questions={questionsLivingNearAirport} />
      </div>
    </>
  );
}

export default page