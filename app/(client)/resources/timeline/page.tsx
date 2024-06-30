import Header from "@/app/components/Header";
import Timeline from "@/app/components/Timeline";
import { Metadata } from "next";


export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("http://www.weareblueskies.com/resources/timeline"),
  title: {
    default: "BlueSkies Advocates | NextGen Timeline",
    template: '%s | BlueSkies Advocates'
  },
  description: "Timeline of the events that led to the current noise and pollution problems for communities around the USA: nextgen from its inception to today.",
  openGraph: {
    title: "BlueSkies Advocates | NextGen Timeline",
    description: "Timeline of the events that led to the current noise and pollution problems for communities around the USA: nextgen from its inception to today.",
    type: "website",
    locale: "en_US",
    url: "https://www.weareblueskies.com/resources/timeline",
    siteName: "BlueSkies Advocates"
  },
}

const page = async () => {
    
  return (
    <>    
      <Header title="Timeline" />
      
      <p>
        The origins of NextGen trace back to the &quot;Vision 100 - A Century Of Aviation Reauthorization Act,&quot; passed by Congress in December 2003. This bill aimed to shift from radar-based guidance systems to GPS positioning, allowing for more direct flight routes to save fuel, time, money, and - allegedly - reduce carbon emissions. In practice, NextGen intended to increase airport throughput by guiding aircraft more precisely into airports, benefiting airlines with fuel savings and higher profits.
        <hr className="mt-6 mb-6" />
        However, achieving these goals required aircraft to fly at significantly lower elevations in congested airspace, resulting in a dramatic increase in low-altitude flights over communities. This shift has led to a significant rise in noise and air pollution for many communities, contradicting the FAA&apos;s assurances of &quot;no new or significant&quot; impacts from NextGen.
        <hr className="mt-6 mb-6" />
        Promises of decreased carbon emissions from more efficient routing have not materialized as expected, with studies showing minimal fuel savings and a net increase in emissions due to the overall goal of increasing air traffic.
        <hr className="mt-6 mb-6" />
      </p>

      <Timeline />
    </>
  );
}

export default page