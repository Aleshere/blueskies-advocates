import Header from '@/app/components/Header';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { Metadata } from 'next';
import BackButton from '@/app/utils/BackButton';

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL('http://www.weareblueskies.com/issues/general-aviation'),
  title: {
    default: 'General Aviation',
    template: '%s | BlueSkies Advocates',
  },
  description: 'How and why turboprops and piston engine planes are disrupting the lives of citizens. Flight schools noise. Leaded fuel.',
  openGraph: {
    title: 'General Aviation',
    description: 'How and why turboprops and piston engine planes are disrupting the lives of citizens. Flight schools noise. Leaded fuel.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weareblueskies.com/issues/general-aviation',
    siteName: 'BlueSkies Advocates',
    images: [
      {
        url: 'https://www.weareblueskies.com/opengraph-image.png',
        alt: 'Preview image for General Aviation',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@weAreBlueskies',
    title: 'General Aviation',
    description: 'How and why turboprops and piston engine planes are disrupting the lives of citizens. Flight schools noise. Leaded fuel.',
    creator: '@weAreBlueskies',
    images: [
      {
        url: 'https://www.weareblueskies.com/twitter-image.png',
        alt: 'Preview image for General Aviation',
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Header title="General Aviation" />
      <ScrollToTop />

      <section id="general-aviation">
        <div className="max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8">
            <div className="">
              General aviation is non-commercial flight{' '}
              <a href="https://en.wikipedia.org/wiki/General_aviation" target="_blank" rel="noopener">
                as per ICAO
              </a>
              . This includes personal flight, flight training, aerobatics, private jets, helicopter flight, gliders, etc.. See detailed definition{' '}
              <a href="https://skybrary.aero/articles/general-aviation-ga" target="_blank" rel="noopener">
                here
              </a>
              . FAA&apos;s airport categories can be found{' '}
              <a href="https://www.faa.gov/airports/planning_capacity/categories" target="_blank" rel="noopener">
                here
              </a>
              .
            </div>

            <h2 className="text-lg font-bold">Identify planes - airport information - pilot information:</h2>
            <ul className="list-disc">
              <li>
                To identify aircraft flight tracking sites such as{' '}
                <a href="https://globe.adsbexchange.com" target="_blank" rel="noopener">
                  ADS-B exchange
                </a>
              </li>
              <li>
                Get your own ADS-B station to track aircraft:{' '}
                <a href="https://flightaware.store/products/1090mhz-piaware-ads-b-kitli" target="_blank" rel="noopener">
                  https://flightaware.store/products/1090mhz-piaware-ads-b-kitli
                </a>
              </li>
              <li>
                Look up aircraft at:{' '}
                <a href="https://registry.faa.gov/aircraftinquiry/search/nnumberinquiry" target="_blank" rel="noopener">
                  https://registry.faa.gov/aircraftinquiry/search/nnumberinquiry
                </a>
              </li>
              <li>
                Look up aircraft FAA tower counts (towered airports):{' '}
                <a href="https://aspm.faa.gov/opsnet/sys/airport.asp" target="_blank" rel="noopener">
                  https://aspm.faa.gov/opsnet/sys/airport.asp
                </a>
              </li>
              <li>
                Look up airmen:{' '}
                <a href="https://amsrvs.registry.faa.gov/airmeninquiry" target="_blank" rel="noopener">
                  https://amsrvs.registry.faa.gov/airmeninquiry
                </a>
              </li>
              <li>
                Look up FAA grants paid to airports:{' '}
                <a href="https://aspm.faa.gov/opsnet/sys/airport.asp" target="_blank" rel="noopener">
                  https://aspm.faa.gov/opsnet/sys/airport.asp
                </a>
              </li>

              <li>
                FAA&apos;s LADD program that allows pilots to block tracking:{' '}
                <a href="https://www.faa.gov/pilots/ladd" target="_blank" rel="noopener">
                  https://www.faa.gov/pilots/ladd
                </a>
              </li>
              <li>
                FAA&apos;s PIS program for ADS-B privacy:{' '}
                <a href="https://www.faa.gov/air_traffic/technology/equipadsb/privacy" target="_blank" rel="noopener">
                  https://www.faa.gov/air_traffic/technology/equipadsb/privacy
                </a>
              </li>
              <li>
                File a FOIA with FAA:{' '}
                <a href="https://www.faa.gov/foia" target="_blank" rel="noopener">
                  https://www.faa.gov/foia
                </a>
              </li>
              <li>
                Airport Data:{' '}
                <a href="https://airnav.com" target="_blank" rel="noopener">
                  https://airnav.com
                </a>
              </li>
              <li>
                Waypoints for navigation - used by visual and instrument flyers:{' '}
                <a href="https://opennav.com" target="_blank" rel="noopener">
                  https://opennav.com
                </a>
              </li>
              <li>
                File noise complaints automatically (ask to see if your airport is eligible):{' '}
                <a href="https://airnoise.io" target="_blank" rel="noopener">
                  https://airnoise.io
                </a>
              </li>
              <li>
                Aviation database:{' '}
                <a href="https://aviationdb.net/aviationdb/AircraftDetailPage" target="_blank" rel="noopener">
                  https://aviationdb.net/aviationdb/AircraftDetailPage
                </a>
              </li>
            </ul>

            <h2 className="text-lg font-bold">Aircraft ownership:</h2>
            <div className="">
              Flight tracking apps and Airnoise buttons can only ID the aircraft&apos;s N-number, make and model, registration, and owner. The owner is not necessarily the same person as the pilot. When the plane is owned by a corporation or LLC, it gets harder to narrow down who the pilot might be.
              Some aircraft owners lease their aircraft to flight schools for a discounted storage rate at the airport, or other mutually beneficial arrangement. Some flight schools lease aircraft from large institutional aircraft lease companies such as{' '}
              <a href="https://christiansenaviation.com/aircraft-leasing" target="_blank" rel="noopener">
                Christiansen Aviation
              </a>
              .
            </div>

            <h2 className="text-lg font-bold">FAA FARs (federal air regulations) related to flight training and recreational flying:</h2>
            <ul className="list-disc">
              <li>
                Minimum safe altitudes FAR 91.13:{' '}
                <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.13" target="_blank" rel="noopener">
                  https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.13
                </a>
              </li>
              <li>
                Aerobatic flight - FAR 91.303:{' '}
                <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-D/section-91.303" target="_blank" rel="noopener">
                  https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-D/section-91.303
                </a>
              </li>
              <li>
                Reckless Endangerment:{' '}
                <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.13" target="_blank" rel="noopener">
                  https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.13
                </a>
              </li>
            </ul>

            <h2 className="text-lg font-bold">Voluntary Initiatives:</h2>
            <ul className="list-disc">
              <li>
                Noise Sensitive Areas - Advisory Circular 91-36D:{' '}
                <a href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-36D.pdf" target="_blank" rel="noopener">
                  https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_91-36D.pdf
                </a>
              </li>
              <li>
                “Fly Neighborly”:{' '}
                <a href="https://www.faasafety.gov/gslac/ALC/course_content.aspx?pf=1&amp;preview=true&amp;cID=500" target="_blank" rel="noopener">
                  https://www.faasafety.gov/gslac/ALC/course_content.aspx?pf=1&amp;preview=true&amp;cID=500
                </a>
              </li>
              <li>
                “Fly Friendly”:{' '}
                <a href="https://www.aopa.org/-/media/Files/AOPA/Home/Supporting-General-Aviation/Get-Involved/Airport-Support-Network/AOPA-Resources-for-You/120112asn-airport-noise-compatible-land-use.pdf" target="_blank" rel="noopener">
                  https://www.aopa.org/-/media/Files/AOPA/Home/Supporting-General-Aviation/Get-Involved/Airport-Support-Network/AOPA-Resources-for-You/120112asn-airport-noise-compatible-land-use.pdf
                </a>
              </li>
              <li>
                Aircraft Incident reporting:{' '}
                <a href="https://asrs.arc.nasa.gov/search/database.html" target="_blank" rel="noopener">
                  https://asrs.arc.nasa.gov/search/database.html
                </a>
              </li>
              <li>
                FAA Rogue Pilot webinar:{' '}
                <a href="https://www.youtube.com/watch?v=IHA9Mmb2VK4&amp;t=4441s" target="_blank" rel="noopener">
                  https://www.youtube.com/watch?v=IHA9Mmb2VK4&amp;t=4441s
                </a>
              </li>
            </ul>

            <h2 className="text-lg font-bold">Airspace Information:</h2>
            <div className="">
              The airspace around the country&apos;s 30 busiest is{' '}
              <a href="https://en.wikipedia.org/wiki/List_of_Class_B_airports_in_the_United_States" target="_blank" rel="noopener">
                Class B
              </a>
              . These airports are surrounded by the{' '}
              <a href="https://en.wikipedia.org/wiki/Mode_C_veil" target="_blank" rel="noopener">
                Mode C Veil
              </a>{' '}
              where ADS-B out is required. Airspace looks like{' '}
              <a href="https://www.faa.gov/air_traffic/technology/equipadsb/research/airspace" target="_blank" rel="noopener">
                upside down wedding cake
              </a>
              .
            </div>

            <h2 className="text-lg font-bold">Noise and Airports:</h2>
            <div className="">
              FAA has embarked on a Noise Policy Review that will not be applied retroactively. Public response comments submitted can be read{' '}
              <a href="https://www.regulations.gov/document/FAA-2023-0855-0001" target="_blank" rel="noopener">
                here
              </a>
              .
              <a href="https://aviationimpactedcommunities.org/" target="_blank" rel="noopener">
                AICA
              </a>
              &apos;s comprehensive{' '}
              <a href="https://www.regulations.gov/comment/FAA-2023-0855-2206" target="_blank" rel="noopener">
                comment
              </a>{' '}
              encompasses concerns and impacts for all types of aviation impacted communities.
            </div>
            <div className="link-wrap">
              FAA accepts noise complaints at FAA Noise Portal. Only expect 1 response from FAA using this system even if multiple complaints are submitted. Per FAA&apos;s policy regarding the noise portal, FAA should release collected data quarterly. No data has been released since its inception
              which was FAA Reauthorization 2018:{' '}
              <a href="https://ancir.faa.gov/ancir?id=ancir_sc_cat_item&amp;sys_id=6149ade187a1f550b0d987b9cebb357e" target="_blank" rel="noopener">
                https://ancir.faa.gov/ancir?id=ancir_sc_cat_item&amp;sys_id=6149ade187a1f550b0d987b9cebb357e
              </a>
              .
            </div>
            <div className="link-wrap">
              FAA Noise Ombudsman - it very difficult for communities to interact with FAA and few report receiving responses from FAA&apos;s ombudsman:{' '}
              <a href="https://www.faa.gov/about/office_org/headquarters_offices/apl/noise_emissions/airport_aircraft_noise_issues/n" target="_blank" rel="noopener">
                https://www.faa.gov/about/office_org/headquarters_offices/apl/noise_emissions/airport_aircraft_noise_issues/noise_ombudsman
              </a>
              .
            </div>
            <div className="link-wrap">
              FAA also accepts safety complaints to its Hotline:{' '}
              <a href="https://www.faa.gov/about/office_org/headquarters_offices/aae/programs_services/faa_hotlines" target="_blank" rel="noopener">
                https://www.faa.gov/about/office_org/headquarters_offices/aae/programs_services/faa_hotlines
              </a>
              .
            </div>
            <div className="link-wrap">
              FAA Part 150 - an expensive noise mapping process that can only establish voluntary suggestions for airports to use in order to alleviate noise:{' '}
              <a href="https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentnumber/150_5020-1" target="_blank" rel="noopener">
                https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentnumber/150_5020-1
              </a>
              .
            </div>
            <div className="link-wrap">An “airport community” is generally within 5 miles of an airport. Communities impacted by aviation outside of 5 miles is often called an “overflight community.”</div>
            <div className="link-wrap">
              National Parks on Noise:{' '}
              <a href="https://www.nps.gov/subjects/sound/overflights.htm" target="_blank" rel="noopener">
                https://www.nps.gov/subjects/sound/overflights.htm
              </a>
              .
            </div>

            <h2 className="text-lg font-bold">Points of Information:</h2>
            <div className="">
              <a href="https://en.wikipedia.org/wiki/Touch-and-go_landing" target="_blank" rel="noopener">
                Touch and Go landings
              </a>{' '}
              are not required for a PPL (private pilot&apos;s license).{' '}
              <a href="https://www.law.cornell.edu/cfr/text/14/61.109" target="_blank" rel="noopener">
                Take-offs and landings
              </a>{' '}
              are required (10 of each). Touch and gos are an industry practice used by flight schools or by pilots maintaining their flight certificate or building hours.
            </div>

            <div className="">
              FAA does not police the piloting community. FAA has a{' '}
              <a href="https://www.faa.gov/about/initiatives/cp" target="_blank" rel="noopener">
                compliance
              </a>{' '}
              program based on a “
              <a href="https://www.faa.gov/sites/faa.gov/files/Compliance%20Program%20Brochure.pdf" target="_blank" rel="noopener">
                just culture
              </a>
              ” that favors pilot education over penalties and enforcement. There is heavy reliance on the piloting community to self-report to FAA.
            </div>

            <div>FAA considers itself a “service provider” managing industry demand of the NAS (national airspace). Operators determine number of operations, not FAA. A touch and go landing session consisting of passes is counted as ONE operation.</div>

            <div className="">
              Part 135/Charter Cos. “
              <a href="https://www.faa.gov/hazmat/air_carriers/operations/part_121" target="_blank" rel="noopener">
                Scheduled Service
              </a>
              ” generally refers to commercial airport operations, whereas private jet charter companies may offer a “
              <a href="https://www.nata.aero/data/files/gia/0707nata_interp.pdf" target="_blank" rel="noopener">
                scheduled flight
              </a>
              ”. Commercial operators (Part 120) have different requirements than charter operations (Part 135). Airports capitalize on the public&apos;s understanding of the term schedule vs. the FAA&apos;s use of the term schedule:
            </div>
            <div className="link-wrap">
              <a href="https://www.stratosjets.com/blog/what-you-need-to-know-about-part-135" target="_blank" rel="noopener">
                https://www.stratosjets.com/blog/what-you-need-to-know-about-part-135
              </a>
            </div>
            <div className="link-wrap">
              <a href="https://www.faa.gov/about/officeorg/headquartersoffices/avs/faa-certificated-aircraft-operators-legal-part-135-holders" target="_blank" rel="noopener">
                https://www.faa.gov/about/officeorg/headquartersoffices/avs/faa-certificated-aircraft-operators-legal-part-135-holders
              </a>
            </div>

            <div className="">
              Student Pilot drop out rate in 2010 (the most recent released data) was{' '}
              <a href="https://download.aopa.org/epilot/2011/AOPA_Research-The_Flight_Training_Experience.pdf" target="_blank" rel="noopener">
                70-80%
              </a>
            </div>

            <div className="">
              The{' '}
              <a href="https://www.lawa.org/-/media/lawa-web/noise-management/files/airport_noise_and_capacity_act_of_1990.ashx" target="_blank" rel="noopener">
                Airport Noise and Capacity Act
              </a>{' '}
              of 1990 applies to aircraft weighing 12,500lbs or more, not to lighter aircraft such as single engine piston aircraft. Although airports often point to ANCA as the reason airports cannot impose restrictions on aircraft operations such a touch and go landings, it is FAAs grant assurance
              program (namely #22) that governs an airport&apos;s ability to impose these types of “access” restrictions. Only grandfathered airports (ones with noise policies and access policies in place before ANCA) can levy fines such as nighttime landing fees, or limit touch and go landings.
              There is a strong need to de-couple aviation funding for local control at general aviation airports that mainly serve private aviation.
            </div>

            <div className="">
              No{' '}
              <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-I/part-161" target="_blank" rel="noopener">
                Part 161
              </a>{' '}
              requests, also known as waivers, have been approved by FAA since ANCA of 1990. Ex. Curfews or caps.{' '}
            </div>

            <div>
              On the issue of leaded fuel and its demise:{' '}
              <a href="https://mailchi.mp/adcbd07a22fb/the-time-is-now-ban-leaded-aviation-fuel-without-further-delay?e=9b75ea11d0" target="_blank" rel="noopener">
                this
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <BackButton />
    </>
  );
};

export default page;
