import { LatLngExpression } from 'leaflet'

import { Category } from './MarkerCategories'

export interface PlaceValues {
  id: number
  position: LatLngExpression
  category: Category
  title: string
  information: string
  website: string,
  favicon: string
  altText: string
}
export type PlacesType = PlaceValues[]
export type PlacesClusterType = Record<string, PlaceValues[]>

export const Places: PlacesType = [
  {
    id: 1,
    position: [42.37166518, -71.036833186],
    category: Category.CAT1,
    title: 'AIR Inc',
    information: 'East Boston environmental group working on mitigating the noise, air quality and traffic impacts of Boston Logan Airport',
    website: 'airportimpactreliefinc.org',
    favicon: 'AIR Inc favicon.jpg',
    altText: 'AIR Inc'
  },
  {
    id: 2,
    position: [40.01499, -105.27054],
    category: Category.CAT1,
    title: 'Airspace for All',
    information: 'Tell City Council that we do not need a 179-acre hobbyist airport on public land for private planes bringing noise and pollution to Boulder',
    website: 'www.airspaceforall.net',
    favicon: 'Default favicon.png',
    altText: 'Airspace for All'
  },
  {
    id: 3,
    position: [47.28684, -120.21261],
    category: Category.CAT1,
    title: 'aiREFORM',
    information: 'A resource to support and empower citizen activists who seek to reduce aviation impacts and reclaim local control of airports',
    website: 'www.aireform.com/',
    favicon: 'Default favicon.png',
    altText: 'aiREFORM'
  },
  {
    id: 4,
    position: [-27.46897, 153.02350],
    category: Category.CAT1,
    title: 'BFPCA',
    information: "BFPCA brings together Brisbane communities adversely affected by Brisbane Airport's flight paths",
    website: 'bfpca.org.au',
    favicon: 'BFPCA favicon.png',
    altText: 'Brisbane Flight Path Community Alliance website'
  },
  {
    id: 5,
    position: [51.45380, -2.59730],
    category: Category.CAT1,
    title: 'Bristol Airport Action Network',
    information: 'We were a group of campaigners, made up of members from Extinction Rebellion groups in the south-west region, twenty-seven North Somerset parishes (Bristol Airport is based in North Somerset), Stop Bristol Airport Expansion (SBAx) and aviation scientists and academics',
    website: 'bristolairportactionnetwork.wordpress.com',
    favicon: 'BAAN favicon.jpg',
    altText: 'Bristol Airport Action Network website'
  },
  {
    id: 6,
    position: [51.15411, -0.18231],
    category: Category.CAT1,
    title: 'CAGNE',
    information: 'CAGNE was at the forefront in opposing the expansion of Gatwick Airport (London UK) with a second runway for sound reasons and will object strongly to the emergency runway being used as an interim measure',
    website: 'cagne.org',
    favicon: 'CAGNE favicon.png',
    altText: 'CAGNE website'
  },
  {
    id: 7,
    position: [33.40735, -112.39348],
    category: Category.CAT1,
    title: 'Citizens 4 Quiet Skies Goodyear',
    information: 'We strive to provide information to our community about the effects of aircraft noise, air pollution, and airport growth.',
    website: 'quietskiesgoodyear.org',
    favicon: 'Default favicon.png',
    altText: 'Citizens 4 Quiet Skies Goodyear'
  },
  {
    id: 8,
    position: [41.87556, -87.62442],
    category: Category.CAT1,
    title: 'FAIR Allocation in Runways',
    information: 'A non-profit organization whose vision is to improve the quality of life in Chicagoland and NW Indiana neighborhoods negatively impacted by aviation changes',
    website: 'www.fairchicago.org',
    favicon: 'FAIR Chicago favicon.jpg',
    altText: 'FAIR Allocation in Runways website'
  },
  {
    id: 9,
    position: [51.29187, -0.75398],
    category: Category.CAT1,
    title: 'Farnborough Noise Group',
    information: "We aim to raise issues resulting from Farnborough Airport's operations and changes to its airspace for the public in West Surrey and East Hampshire and we engage with the hundred or so parish, borough and county councils and nine regional MPs",
    website: 'www.farnboroughnoise.org',
    favicon: 'Farnborough Noise favicon.png',
    altText: 'Farnborough Noise website'
  },
  {
    id: 10,
    position: [-24.77611, 134.75500],
    category: Category.CAT1,
    title: 'Flight Free Australia',
    information: "We are in a climate emergency and the timescale of the government's aviation emissions reduction pathway is too long",
    website: 'flightfree.net.au',
    favicon: 'Flight Free AUS favicon.png',
    altText: 'Flight Free Australia website'
  },
  {
    id: 11,
    position: [54.70235, -3.27658],
    category: Category.CAT1,
    title: 'Flight Free UK',
    information: "Our mission is to inform people of the climate impact of aviation and inspire people to travel by other means",
    website: 'flightfree.co.uk',
    favicon: 'Flight Free UK favicon.png',
    altText: 'Flight Free UK website'
  },
  {
    id: 12,
    position: [26.87036, 90.48558],
    category: Category.CAT1,
    title: 'GAAM - Global Anti Aerotropolis Movement',
    information: "GAAM aims to support local struggles and strengthen the international campaign community against harmful aerotropolis projects",
    website: 'antiaero.org',
    favicon: 'GAAM favicon.jpg',
    altText: 'Global Anti Aerotropolis Movement website'
  },
  {
    id: 13,
    position: [53.86665, -1.65678],
    category: Category.CAT1,
    title: 'GALBA - Group for Action on Leeds Bradford Airport',
    information: "We say no to more planes, more noise and more climate chaos. We say YES to a clean, green, sustainable future",
    website: 'www.galba.uk',
    favicon: 'GALBA favicon.png',
    altText: 'Group for Action on Leeds Bradford Airport website'
  },
  {
    id: 14,
    position: [-42.88251, 147.32812],
    category: Category.CAT1,
    title: 'Just Plane Wrong',
    information: "We are a non-political coalition of residents and business-owners from the communities of Bream Creek, Marion Bay, Boomer Bay, Dunalley, Murdunna and Connelly's Marsh, which aims to preserve and promote our peaceful coastal and rural amenity and brand",
    website: 'www.justplanewrong.org',
    favicon: 'Just Plane Wrong favicon.png',
    altText: 'Just Plane Wrong website'
  },
  {
    id: 15,
    position: [51.49793, -0.04984],
    category: Category.CAT1,
    title: 'Hacan East',
    information: "We are a campaign group made up of concerned residents from east and south-east London, campaigning primarily against the expansion of London City Airport",
    website: 'www.hacaneast.org.uk/home',
    favicon: 'HE favicon.jpg',
    altText: 'Hacan East website'
  },
  {
    id: 16,
    position: [38.58939, -119.83450],
    category: Category.CAT1,
    title: 'HELPP - Help Eliminate Loud Planes Practicing Over Alpine',
    information: "HELPP Over Alpine is steadfast in its mission to proactively halt the targeted practice of small planes over the Greater Alpine area",
    website: 'helppalpine.org',
    favicon: 'HELPP Over Alpine favicon.png',
    altText: 'HELPP Over Alpine website'
  },
  {
    id: 17,
    position: [51.87810, -0.36643],
    category: Category.CAT1,
    title: 'Ladacan',
    information: "LADACAN - the Luton And District Association for the Control of Aircraft Noise - is a constituted community group pursuing noise and environmental impact mitigation of Luton Airport",
    website: 'ladacan.org',
    favicon: 'Ladacan favicon.jpg',
    altText: 'Ladacan website'
  },
  {
    id: 18,
    position: [38.85342, -77.04404],
    category: Category.CAT1,
    title: 'Montgomery County Quiet Skies Coalition',
    information: "A dedicated group of community members who were spurred to action by illegitimate FAA actions in shifting and concentrating air traffic over our communities with no notice or environmental review",
    website: 'www.mocoquietskies.org',
    favicon: 'Montgomery County Quiet Skies favicon.png',
    altText: 'Montgomery County Quiet Skies website'
  },
  {
    id: 19,
    position: [-37.81425, 144.96317],
    category: Category.CAT1,
    title: 'No 3rd Tulla Runway',
    information: "The No 3rd Tulla Runway coalition is a grassroots campaign of community volunteers. The coalition respects the diversity of reasons members may have for opposing a third runway at Melbourne Airport",
    website: 'www.no3rdtullarunway.net.au',
    favicon: 'No 3rd Tulla favicon.png',
    altText: 'No 3rd Tulla website'
  },
  {
    id: 20,
    position: [41.91866, -87.69290],
    category: Category.CAT1,
    title: "O'Hare Noise Compatibility Commission",
    information: "42 communities and 19 school districts dedicated to reducing aircraft noise in the communities around O'Hare International Airport since 1996",
    website: 'oharenoise.org',
    favicon: 'O Hare Noise favicon.png',
    altText: 'O Hare Noise Compatibility Commissions website'
  },
  {
    id: 21,
    position: [34.26134, -118.41440],
    category: Category.CAT1,
    title: 'Pacoima Beautiful - Shutdown Whiteman Airport',
    information: "Calling on the Los Angeles County Board of Supervisors to Shutdown Whiteman Airport and prioritize the public safety of Pacoima residents living under the flightpath",
    website: 'www.pacoimabeautiful.org/programs/shutdown-whiteman-airport',
    favicon: 'Pacoima Beautiful favicon.png',
    altText: 'Pacoima Beautiful website'
  },
  {
    id: 22,
    position: [-34.23072, 142.08921],
    category: Category.CAT1,
    title: 'Pesky Planes - Residents Against Pesky Flying Schools',
    information: "Flying Schools are taking over regional airports in Australia, and destroying the amenity of the local residents",
    website: 'peskyplanes.weebly.com',
    favicon: 'Pesky Planes favicon.jpg',
    altText: 'Pesky Planes website'
  },
  {
    id: 23,
    position: [39.64168, -104.36286],
    category: Category.CAT1,
    title: 'Quiet Skies over Arapahoe County',
    information: "Grassroots organization formed by residents due to the 78% increase of flight training over our community",
    website: 'sites.google.com/view/quietskiesoverarapahoecountyco',
    favicon: 'Default favicon.png',
    altText: 'Quiet Skies over Arapahoe County'
  },
  {
    id: 24,
    position: [33.37107, -111.42618],
    category: Category.CAT1,
    title: 'Quiet Skies over Gold Canyon',
    information: "That aircraft should enjoy an absolutely unfettered right to make as much noise as they want, anytime they want, anywhere they want, is a right unparalleled in history",
    website: 'quietskiesovergoldcanyon.com',
    favicon: 'Default favicon.png',
    altText: 'Quiet Skies over Gold Canyon website'
  },
  {
    id: 25,
    position: [34.16844, -118.60584],
    category: Category.CAT1,
    title: 'Quiet Skies Woodland Hills',
    information: "Action to Preserve Quality of Life, Health and our Ecosystems on both a Local and National level",
    website: 'www.socalsfv.com',
    favicon: 'QSWH favicon.jpg',
    altText: 'Quiet Skies WH website'
  },
  {
    id: 26,
    position: [-33.87744, 150.82932],
    category: Category.CAT1,
    title: 'RAWSA - Residents Against Western Sydney Airport',
    information: "Our mission is to create awareness of the community and environmental impacts from the construction of a 24 hour Airport in Western Sydney",
    website: 'www.birdsnotboeings.com',
    favicon: 'RAWSA favicon.jpg',
    altText: 'RAWSA - Residents Against Western Sydney Airport website'
  },
  {
    id: 27,
    position: [39.42252, -111.71436],
    category: Category.CAT1,
    title: 'Safe Skies Utah',
    information: "Safe Skies Utah represents a group of American citizens seeking a collaborative solution to safeguard hearing, cognitive and mental health from F35 noise levels from Hill Air Force Base while supporting Air Force operational readiness",
    website: 'safeskiesutah.com',
    favicon: 'Safe Skies Utah favicon.png',
    altText: 'Safe Skies Utah website'
  },
  {
    id: 28,
    position: [33.76902, -118.19160],
    category: Category.CAT1,
    title: 'SANeR - Long Beach Small Plane Noise Reduction Group',
    information: "SANeR is a 501 C organization and a community group based in Long Beach, CA, dedicated to addressing the issues caused by the significant increase in general aviation small planes, primarily from flight schools, at Long Beach Airport",
    website: 'lbsaner.org',
    favicon: 'SANER favicon.jpg',
    altText: 'Long Beach Small Plane Noise Reduction Group website'
  },
  {
    id: 29,
    position: [34.21764, -119.03835],
    category: Category.CAT1,
    title: 'Save Our Skies Camarillo',
    information: "A group of citizens that are concerned over the negative effects expansion and increased jet traffic at Camarillo Airport will have on the quality of life for Camarillo residents",
    website: 'saveourskiescamarillo.com',
    favicon: 'SOS Camarillo favicon.png',
    altText: 'Save Our Skies Camarillo website'
  },
  {
    id: 30,
    position: [37.80446, -122.27136],
    category: Category.CAT1,
    title: 'Save Our Skies East Bay',
    information: "A volunteer group formed in 2016 by residents of the East Bay, who noticed that the frequency and volume of airplane traffic over their tranquil homes had seemingly exploded overnight",
    website: 'soseastbay.org',
    favicon: 'SOS East Bay CA favicon.png',
    altText: 'Save Our Skies East Bay website'
  },
  {
    id: 31,
    position: [44.47397, -73.14592],
    category: Category.CAT1,
    title: 'Save Our Skies from the F-35',
    information: "Our mission is to cancel the basing of the F-35A Joint Strike Fighter at the Vermont Air National Guard Station located at the Burlington, Vermont International Airport",
    website: 'saveourskiesvt.org',
    favicon: 'SOS Vermont favicon.jpg',
    altText: 'Save Our Skies from the F-35 website'
  },
  {
    id: 32,
    position: [33.99115, -118.15792],
    category: Category.CAT1,
    title: 'Save Our Skies LA',
    information: "A coalition of LA residents that fight for their homes, parks, and the environment by suing the FAA in federal court",
    website: 'sosla.org',
    favicon: 'SOS LA favicon.png',
    altText: 'Save Our Skies LA website'
  },
  {
    id: 33,
    position: [33.49422, -111.92602],
    category: Category.CAT1,
    title: 'SCANA',
    information: "Citizens working to restore the quiet and peaceful skies that existed in Scottsdale before the FAA arbitrarily moved flight paths over heavily populated communities",
    website: 'www.airplanenoise.org',
    favicon: 'Scana favicon.jpg',
    altText: 'Scana website'
  },
  {
    id: 34,
    position: [52.32698, 4.74151],
    category: Category.CAT1,
    title: 'Schiphol Watch',
    information: "SchipholWatch is a foundation that fights for a better living environment and therefore against the further growth of Schiphol at its current location",
    website: 'schipholwatch.nl',
    favicon: 'Schiphol Watch favicon.png',
    altText: 'Schiphol Watch website'
  },
  {
    id: 35,
    position: [34.15087, -118.44899],
    category: Category.CAT1,
    title: 'Sherman Oaks and Encino for Quiet Skies',
    information: "Since January 2019, we advocate for a solution to the FAA's disruptive aviation routes across new communities including noise-sensitive, protected open spaces, high elevations and Fire Hazard Severity Zone-designated areas of the foothills and Santa Monica Mountains",
    website: 'www.quietskiesnow.org',
    favicon: 'Sherman Oaks Encino favicon.png',
    altText: 'Sherman Oaks and Encino for Quiet Skies website'
  },
  {
    id: 36,
    position: [37.36333, -121.92934],
    category: Category.CAT1,
    title: 'Sky Posse Palo Alto',
    information: "Advocacy group the the California mid peninsula. Informative archive of information and history of letters sent to representatives",
    website: 'www.skypossepaloalto.org',
    favicon: 'Default favicon.png',
    altText: 'Sky Posse Palo Alto website'
  },
  {
    id: 37,
    position: [48.34617, -122.65881],
    category: Category.CAT1,
    title: 'Sound Defense Alliance',
    information: "Sound Defense Alliance works to protect communities and the natural environment from harmful Navy Growler jet activity around the Salish Sea, Puget Sound, and Olympic Peninsula",
    website: 'www.sounddefensealliance.org',
    favicon: 'Sound Defense Alliance favicon.png',
    altText: 'Sound Defense Alliance website'
  },
  {
    id: 38,
    position: [51.88697, 0.24419],
    category: Category.CAT1,
    title: 'Stansted Airport Watch',
    information: "Stansted Airport Watch was launched in May 2021 as the successor to Stop Stansted Expansion, which was established in 2002 in response to Government proposals for expanding a number of UK airports, including Stansted",
    website: 'stanstedairportwatch.com',
    favicon: 'Stansted Airport Watch favicon.png',
    altText: 'Stansted Airport Watch website'
  },
  {
    id: 39,
    position: [33.61701, -117.92944],
    category: Category.CAT1,
    title: 'SPON - Still Protecting Our Newport',
    information: "SPON has fought for our community for 40 years to ensure it's not destroyed by John Wayne Airport airport's environmental impacts by defending the landmark 1985 Settlement Agreement which limits JWA growth, noise, and operations",
    website: 'spon-newportbeach.org',
    favicon: 'SPON favicon.png',
    altText: 'SPON - Still Protecting Our Newport website'
  },
  {
    id: 40,
    position: [-28.16756, 153.50994],
    category: Category.CAT1,
    title: 'Stop Flight Path Impacts',
    information: "Stop Flight Path Impacts - formerly known as Stop the ILS Flight Path - remains committed to what we've always stood for; keeping the natural beauty of the Gold Coast, and the lifestyle it offers, protected from unnecessary noise and airborne pollution associated with Gold Coast Airport",
    website: 'www.flightpathgc.com',
    favicon: 'Stop the ILS favicon.png',
    altText: 'Stop Flight Path Impacts website'
  },
  {
    id: 41,
    position: [37.71748, -122.21465],
    category: Category.CAT1,
    title: 'Stop Oakland Expansion Coalition',
    information: "Oakland Airport is planning an expansion to add up to 16 new gates putting the community and climate at risk. More flights = more global warming, more pollution, more noise. We are organizing for a healthier future",
    website: 'www.stopoakexpansion.org',
    favicon: 'Stop Oak Expansion favicon.jpg',
    altText: 'Stop Oakland Expansion Coalition website'
  },
  {
    id: 42,
    position: [42.49173, -71.28179],
    category: Category.CAT1,
    title: 'Stop Private Jet Expansion',
    information: "We are a coalition of state and local organizations. The name of the coalition reflects our objective: Stop Private Jet Expansion at Hanscom or Anywhere",
    website: 'www.stopprivatejetexpansion.org',
    favicon: 'Stop Private Jet Expansion favicon.jpg',
    altText: 'Stop Private Jet Expansion website'
  },
  {
    id: 43,
    position: [43.08218, -73.78539],
    category: Category.CAT1,
    title: 'Stop Saratoga Airport Expansion',
    information: "We are uniformly opposed to any expansion of the runways at the Saratoga County Airport and this includes the no build option. We vote no to all proposals",
    website: 'www.stopairport.com/info',
    favicon: 'Stop Saratoga Airport favicon.png',
    altText: 'Stop Saratoga Airport Expansion website'
  },
  {
    id: 44,
    position: [46.93200, -122.88552],
    category: Category.CAT1,
    title: 'Stop the Airport',
    information: "Concerned citizens from Thurston County (WA) who say no to airport noise, traffic and pollution",
    website: 'stoptheairport53702.wixsite.com/stoptheairport',
    favicon: 'Stop the Airport favicon.jpg',
    altText: 'Stop the Airport website'
  },
  {
    id: 45,
    position: [40.71273, -74.00602],
    category: Category.CAT1,
    title: 'Stop The Chop',
    information: "A grassroots organization formed to reduce helicopter noise and ban nonessential flights over the NYC Metropolitan Area",
    website: 'stopthechopnynj.org',
    favicon: 'Stop The Chop favicon.jpg',
    altText: 'Stop The Chop website'
  },
  {
    id: 46,
    position: [34.11576, -118.42233],
    category: Category.CAT1,
    title: 'Studio City for Quiet Skies',
    information: "A group of Studio City volunteers who want to save their community, wildlife preserves, and quality of life from the current, focused, NextGen-like flight paths that moved in late 2016 over the protected Santa Monica Mountains",
    website: 'www.studiocityforquietskies.com',
    favicon: 'Studio City for Quiet Skies favicon.jpg',
    altText: 'Studio City for Quiet Skies website'
  },
  {
    id: 47,
    position: [40.22031, -74.76590],
    category: Category.CAT1,
    title: 'Trenton Threatened Skies',
    information: "Trenton-Mercer Airport's expanded flight schedule, using larger planes and altered flight paths, has suddenly disrupted our quality of life and threatened our health",
    website: 'trentonthreatenedskies.com',
    favicon: 'Trenton favicon.png',
    altText: 'Trenton Threatened Skies website'
  },
  {
    id: 48,
    position: [47.42088, -122.47371],
    category: Category.CAT1,
    title: 'Vashon Island Fair Skies',
    information: "Bringing fairness to ongoing FAA airspace redesign efforts, and justice to those who woke up one day to find a razor sharp superhighway of hundreds of low flying jets a day laser focused over their previously peaceful homes and farms",
    website: 'vifs.org',
    favicon: 'Vashon Island Fair Skies favicon.png',
    altText: 'Vashon Island Fair Skies website'
  },
  {
    id: 49,
    position: [51.18896, 4.46305],
    category: Category.CAT1,
    title: 'Vliegerplein',
    information: "Through dialogue and substantiated study we advocate for socially, economically, ecologically and socially responsible alternatives for Deurne airport",
    website: 'vliegerplein.be',
    favicon: 'Vliegerplein favicon.jpg',
    altText: 'Vliegerplein website'
  },
  {
    id: 50,
    position: [34.18121, -118.30720],
    category: Category.CAT1,
    title: 'Uproar LA',
    information: "UproarLA fights the FAA's Nextgen low altitude airplane flight paths at Hollywood Burbank Airport",
    website: 'www.uproarla.org',
    favicon: 'Uproar LA favicon.png',
    altText: 'Uproar LA website'
  },
  {
    id: 51,
    position: [40.64295, -73.77937],
    category: Category.CAT1,
    title: 'Plane Sense 4 Long Island',
    information: "Public forum to give information on the constant flight paths that are arriving & departing from JFK & LGA over our homes that have affected our health & well being",
    website: 'www.facebook.com/groups/662573981369661',
    favicon: 'Plane Sense favicon.jpg',
    altText: 'Plane Sense 4 Long Island website'
  },
  {
    id: 52,
    position: [39.18283, -76.66983],
    category: Category.CAT1,
    title: 'BWI Quiet',
    information: "The purpose of BWI Quiet is to coordinate the surrounding communities' response to increased BWI airport noise",
    website: 'www.facebook.com/groups/1500338156945389',
    favicon: 'BWI favicon.jpg',
    altText: 'BWI Quiet website'
  },
  {
    id: 53,
    position: [47.10511, -122.28889],
    category: Category.CAT1,
    title: 'Coalition Against Graham and Eatonville-Roy Airports',
    information: "This a community group to discuss, come together and share information about the two proposed greenfield sites for a new commercial airport with a larger footprint than Sea Tac in the county. This is not a formalized group but simply a meeting spot for concerned citizens",
    website: 'www.facebook.com/groups/656084869279006/',
    favicon: 'Graham favicon.jpg',
    altText: 'Coalition Against Graham and Eatonville-Roy Airports website'
  },
  {
    id: 54,
    position: [40.02762, -105.22978],
    category: Category.CAT1,
    title: 'Quiet Skies - Boulder County CO',
    information: "We are citizens who advocate for regulations to reduce aviation noise and exhaust pollution. This group serves the community of Boulder County, Colorado",
    website: 'www.facebook.com/groups/quietskiescobouldercounty',
    favicon: 'Quiet Skies Boulder CO favicon.jpg',
    altText: 'Quiet Skies - Boulder County CO website'
  },
  {
    id: 55,
    position: [49.62318, 6.20868],
    category: Category.CAT1,
    title: 'Findel+',
    information: "Findel+ est un groupe public ouvert à tous et ayant pour but d'échanger des informations sur le développement de l'aéroport de Luxembourg et ses conséquences sur la vie des riverains",
    website: 'www.facebook.com/groups/1947354755452379/',
    favicon: 'Findel favicon.jpg',
    altText: 'Findel+ website'
  },
  {
    id: 56,
    position: [39.90779, -105.11331],
    category: Category.CAT1,
    title: 'RMMA JeffCO',
    information: "This group is for residents of the 80027(6) zip code, i.e. Louisville, Superior and Lafayette, who are interested in issues related to Rocky Mountain Municipal Airport and associated noise and pollution issues. It is also open to residents of Broomfield and Westminster who are impacted by RMMA flights and concerned about its future growth",
    website: 'www.facebook.com/groups/287038050472856/',
    favicon: 'RMMA favicon.jpg',
    altText: 'RMMA JeffCO website'
  },
  {
    id: 57,
    position: [34.02112, -118.39647],
    category: Category.CAT1,
    title: 'Culver City for Quiet Skies',
    information: "Residents uniting to keep our skies quiet and peaceful. This is a place to give and share useful information on a national scale",
    website: 'www.facebook.com/groups/culvercityforquietskies',
    favicon: 'Culver City favicon.jpg',
    altText: 'Culver City for Quiet Skies website'
  },
  {
    id: 58,
    position: [51.87819, -0.37543],
    category: Category.CAT1,
    title: 'RELAS',
    information: "Reject Luton Airport stacking. It;s time to be heard",
    website: 'www.facebook.com/groups/relas.ad6/',
    favicon: 'RELAS favicon.jpg',
    altText: 'RELAS website'
  },
  {
    id: 59,
    position: [34.01652, -118.45070],
    category: Category.CAT1,
    title: 'SMO Future',
    information: "We are a network of people and organizations from Santa Monica and the adjacent Westside of Los Angeles advocating for less airport pollution, noise, dangers, and costs and a better future use of our Santa Monica Airport land",
    website: 'smofuture.weebly.com',
    favicon: 'SMO Future favicon.jpg',
    altText: 'SMO Future website'
  },
  {
    id: 60,
    position: [39.16741, -77.16269],
    category: Category.CAT1,
    title: 'Citizens for Airpark Safety',
    information: "Citizens for Airpark Safety represents a group of community associations and concerned citizens in Montgomery County , Maryland who have committed to addressing the untenable, recurring, levels of airport noise, air pollution and flight safety risks imposed by the operations at Montgomery County Airpark",
    website: 'www.facebook.com/groups/citizensforairparksafety',
    favicon: 'Culver City favicon.jpg',
    altText: 'Citizens for Airpark Safety website'
  },
  {
    id: 61,
    position: [27.75677, -81.46398],
    category: Category.CAT1,
    title: 'Quiet Florida',
    information: "Working to preserve peace and quiet in our neighborhoods",
    website: 'www.facebook.com/groups/912277166352933/',
    favicon: 'Quiet Florida favicon.jpg',
    altText: 'Quiet Florida website'
  },
  {
    id: 62,
    position: [47.55855, -122.63629],
    category: Category.CAT1,
    title: 'Quiet Skies Puget Sound',
    information: "Quiet Skies for Puget Sound is a grass roots organization of committed, well-organized community members who are concerned about the newly added flight paths and increased noise levels over the residents and businesses of the puget sound region",
    website: 'www.facebook.com/groups/QuietSkiesPugetSound',
    favicon: 'Quiet Skies Puget Sound favicon.jpg',
    altText: 'Quiet Skies Puget Sound website'
  },
  {
    id: 63,
    position: [33.80257, -118.15863],
    category: Category.CAT1,
    title: 'Quiet Skies Long Beach',
    information: "A meeting place for those impacted by pilot training flights over Long Beach, Signal Hill and Lakewood. To discuss and implement strategies aimed at reducing or eliminating the adverse affects of these training flights on our physical and mental well being",
    website: 'www.facebook.com/groups/954981729036880',
    favicon: 'Quiet Skies Long Beach favicon.jpg',
    altText: 'Quiet Skies Long Beach website'
  },
  {
    id: 64,
    position: [-34.79631, 138.62955],
    category: Category.CAT1,
    title: 'Parafield Airport Noise',
    information: "Welcome. Are you affected by aircraft noise caused by pilots training at Parafield Airport? Do you need info on how to make an aircraft noise complaint? New members are welcome. Please answer the few questions to join. No blank profiles.",
    website: 'www.facebook.com/groups/parafieldairportnoise',
    favicon: 'Parafield favicon.png',
    altText: 'Parafield Airport Noise website'
  },
  {
    id: 65,
    position: [32.22288, -110.97485],
    category: Category.CAT1,
    title: 'Quiet Tucson',
    information: "If you hate the F 35 you don't hate the military. If you hate the F35 you don't hate Davis Monthan. If you hate the F35 you don't hate our veterans. No. If you hate the F35 you just HATE the F35. It is too loud. It is too dangerous. And it should NOT be flying over our city",
    website: 'www.facebook.com/groups/1548037071939266',
    favicon: 'Quiet Tucson favicon.jpg',
    altText: 'Quiet Tucson website'
  },
  {
    id: 66,
    position: [28.24515, -80.72820],
    category: Category.CAT1,
    title: 'Quiet Skies Brevard County',
    information: "We are citizens who support reasonable regulations of aircraft noise and exhaust pollution. Aircraft noise can be reduced by restricting non-essential flight operations over residential neighborhoods and adopting stricter noise regulations. Leaded aviation gasoline that is used in small piston-engine planes should be replaced with a safer alternative",
    website: 'www.facebook.com/groups/QuietSkiesFLBrevard',
    favicon: 'Quiet Skies Brevard favicon.jpg',
    altText: 'Quiet Skies Brevard County website'
  },
  {
    id: 67,
    position: [36.12262, -86.67698],
    category: Category.CAT1,
    title: 'BNA Runway Extension Group',
    information: "Share information, concerns regarding the runway extension across Murfreesboro Road through the Genesco property and into Seven Oaks",
    website: 'www.facebook.com/groups/280851944300619',
    favicon: 'BNA favicon.jpg',
    altText: 'BNA Runway Extension Group website'
  },
  {
    id: 68,
    position: [19.71380, -155.06637],
    category: Category.CAT1,
    title: 'Quiet Skies Hawaii',
    information: "Stop tour helicopter + aircraft noise from damaging quality of life for Hawaii's people. Join us!",
    website: 'www.facebook.com/QuietSkiesHawaii',
    favicon: 'Quiet Skies Hawaii favicon.jpg',
    altText: 'Quiet Skies Hawaii website'
  },
  {
    id: 69,
    position: [42.36400, -71.00721],
    category: Category.CAT1,
    title: 'Boston Fair Skies',
    information: "Boston area residents request the FAA to work with our communities to reduce harmful plane emissions and noise pollution",
    website: 'www.facebook.com/Bostonfairskies',
    favicon: 'Boston Fair Skies favicon.jpg',
    altText: 'Boston Fair Skies website'
  },
  {
    id: 70,
    position: [32.82686, -116.98213],
    category: Category.CAT1,
    title: 'CAGELFA',
    information: "Our goal is to seek out, provide information and ask questions regarding the viability of the airport",
    website: 'www.facebook.com/CAGELFA',
    favicon: 'Cagelfa favicon.jpg',
    altText: 'CAGELFA website'
  },
  {
    id: 71,
    position: [42.61122, -71.57454],
    category: Category.CAT1,
    title: 'Groton Ayer Buzz',
    information: "Rep Trahan's office-ask 4 aviation noise help. 978-459-0101. MassPort Noise Line 781-869-8050 Receipt",
    website: 'www.facebook.com/GeneralAviationBuzz',
    favicon: 'GA Buzz favicon.jpg',
    altText: 'Groton Ayer Buzz website'
  },
  {
    id: 72,
    position: [40.96147, -72.24989],
    category: Category.CAT1,
    title: 'Say No To East Hampton Airport',
    information: "Advocating transformation of East Hampton Airport (JPX), to sustainable, safe uses benefiting all residents. We represent communities from Long Island to NYC, where safety, health and quality of life are endangered by noisy, polluting private aviation",
    website: 'www.saynotokhto.com',
    favicon: 'No East Hampton favicon.jpg',
    altText: 'Say No To East Hampton Airport website'
  },
  {
    id: 73,
    position: [-33.88167, 150.74416],
    category: Category.CAT1,
    title: 'Badgerys Creek Airport Hills Shire Opposition Group',
    information: "Badgerys Creek airport - Hills Shire opposition group to Badgerys Creek Airport and fly overs to and from Sydney Airport",
    website: 'www.facebook.com/badgerys.creek.airport.opposition.group',
    favicon: 'Badgerys Creek favicon.jpg',
    altText: 'Badgerys Creek Airport Hills Shire Opposition Group website'
  },
  {
    id: 74,
    position: [41.26464, -72.88674],
    category: Category.CAT1,
    title: '10000 Hawks',
    information: "10,000 Hawks honors the numbers of raptors in the annual hawk migration that takes place over Tweed airspace & our neighborhoods of the East Shore, Annex, Momaguin, Morgan Point, Fair Haven Heights -- East Haven, New Haven, and the East Shore",
    website: 'www.facebook.com/10000hawks',
    favicon: '10000 Hawks favicon.jpg',
    altText: '10000 Hawks website'
  },
  {
    id: 75,
    position: [36.44285, -105.66894],
    category: Category.CAT1,
    title: 'TAOS Airport Expansion Alert',
    information: "Information about Actions we can take Today!",
    website: 'www.facebook.com/profile.php?id=100085373943920',
    favicon: 'TAOS Airport favicon.jpg',
    altText: 'TAOS Airport Expansion Alert website'
  },
  {
    id: 76,
    position: [41.28610, 1.98242],
    category: Category.CAT1,
    title: 'Prou Soroll',
    information: "Plataforma ciudadana que lucha contra la contaminación acústica y química de los aviones",
    website: 'www.facebook.com/PlataformaProuSoroll',
    favicon: 'Prou Soroll favicon.jpg',
    altText: 'Prou Soroll website'
  },
  {
    id: 77,
    position: [49.45432, 2.11167],
    category: Category.CAT1,
    title: 'Haulte au Tarmac',
    information: "Nous luttons pour un plafonnement du trafic aérien sur l'aéroport de Beauvais-Tillé",
    website: 'www.facebook.com/profile.php?id=61558385908854',
    favicon: 'Haulte au Tarmac favicon.jpg',
    altText: 'Haulte au Tarmac website'
  },
  {
    id: 78,
    position: [45.45760, -73.75085],
    category: Category.CAT1,
    title: 'Montreal DB',
    information: "MONTRÉAL-dB a été créé pour aider les Montréalais à lutter contre la POLLUTION PAR LE BRUIT DES AÉRONEFS provenant de l'Aéroports de Montréal",
    website: 'www.facebook.com/MTLdb',
    favicon: 'Montreal DB favicon.png',
    altText: 'Montreal DB website'
  },
  {
    id: 79,
    position: [50.46364, 4.46617],
    category: Category.CAT1,
    title: "Stop aux nuisances de l'aéroport de Charleroi",
    information: "MONTRÉAL-dB a été créé pour aider les Montréalais à lutter contre la POLLUTION PAR LE BRUIT DES AÉRONEFS provenant de l'Aéroports de Montréal",
    website: 'www.facebook.com/profile.php?id=100063497045275',
    favicon: "Stop Charleroi favicon.png",
    altText: "Stop aux nuisances de l'aéroport de Charleroi website"
  },
  {
    id: 80,
    position: [51.19420, 4.45289],
    category: Category.CAT1,
    title: 'Doe Deurne Dicht',
    information: "De luchthaven maakt verlies, kost veel geld en dient vooral privéjets. Sluit je bij ons aan",
    website: 'www.facebook.com/doedeurnedicht',
    favicon: 'Doe Deurne Dicht favicon.jpg',
    altText: 'Doe Deurne Dicht website'
  },
  {
    id: 81,
    position: [42.69770, 23.32174],
    category: Category.CAT1,
    title: 'Stop Low Flying Planes Over Sofia',
    information: "Има проблем със самолетите, които прелитат ниско над жилищните квартали в София и създават много шум",
    website: 'www.facebook.com/SofiaStopNoise',
    favicon: 'Stop Planes Sofia favicon.jpg',
    altText: 'Stop Low Flying Planes Over Sofia website'
  },
  {
    id: 82,
    position: [59.32512, 18.07109],
    category: Category.CAT1,
    title: 'Flygskatt Ja Tack',
    information: "Flyg står för 10% av Sveriges klimatpåverkan, och ökar trots löften om motsatsen. Vi stödjer förslaget om flygskatt och att gynna hållbarare sätt att resa",
    website: 'www.facebook.com/flygskatt.ja.tack',
    favicon: 'Flygskatt Ja Tack favicon.png',
    altText: 'Flygskatt Ja Tack website'
  },
  {
    id: 83,
    position: [32.26651, -109.22706],
    category: Category.CAT1,
    title: 'Peaceful Chiricahua Skies',
    information: "A local coalition of organizations, businesses, and individuals in the Chiricahua-Peloncillo and surrounding areas opposed to expanded military training flights in the Tombstone MOA",
    website: 'www.facebook.com/peacefulchiricahuaskies',
    favicon: 'Peaceful Chiricahua Skies favicon.jpg',
    altText: 'Peaceful Chiricahua Skies website'
  },
  {
    id: 84,
    position: [50.63839, 5.44106],
    category: Category.CAT1,
    title: 'Stop Alibaba & CO',
    information: "Front contre l'extension de Liège Airport",
    website: 'www.facebook.com/stopalibaba',
    favicon: 'Stop Alibaba & CO favicon.png',
    altText: 'Stop Alibaba & CO website'
  },
  {
    id: 85,
    position: [48.35685, -123.17329],
    category: Category.CAT1,
    title: "Citizens of the Ebey's Reserve",
    information: "COER's mission is to defend the health and wellbeing of Salish Sea communities, both human and animal, that are under threat from Navy jet warfare training",
    website: 'www.facebook.com/CitizensOfTheEbeysReserve',
    favicon: "Ebey's Reserve favicon.jpg",
    altText: "Citizens of the Ebey's Reserve website"
  },
  {
    id: 86,
    position: [43.14208, -89.33775],
    category: Category.CAT1,
    title: 'No F-35 Jets in Madison',
    information: "Providing a forum for opposition to F35 fighter jets at Truax Field in Madison, WI. It's not a page for swearing (even the mildest), name-calling, hurling insults, or general nastiness",
    website: 'www.facebook.com/nof35sinMadison',
    favicon: 'No F35 Madison favicon.jpg',
    altText: 'No F-35 Jets in Madison website'
  },
  {
    id: 87,
    position: [51.51110, -0.59407],
    category: Category.CAT1,
    title: 'Slough District Against Runway 3',
    information: "Offering residents of Slough and surrounding villages in South Bucks and East Berkshire an opportunity",
    website: 'www.facebook.com/SloughADAR3',
    favicon: 'Slough District favicon.jpg',
    altText: 'Slough District Against Runway 3 website'
  },
  {
    id: 88,
    position: [34.20756, -118.49031],
    category: Category.CAT1,
    title: 'FumeFighters VNY',
    information: "This group is for those concerned about noise & air pollution, health issues & climate change as a result of the proliferation of private & charter jets out of Van Nuys Airport",
    website: 'www.facebook.com/groups/fumefightersunitedvny',
    favicon: 'Fumefighters VNY favicon.jpg',
    altText: 'FumeFighters VNY website'
  },
  {
    id: 89,
    position: [33.77203, -118.19515],
    category: Category.CAT1,
    title: 'Long Beach Neighborhood First',
    information: "We are a grassroots group founded by residents who are concerned with the increase of small aircraft noise that is consistently circling our neighborhoods everyday at all times of the day impacting the following areas: Signal Hill, California Heights, Bixby Terrace, Bixby Highland, Ridgewood Triangle, Los Altos, and Signal Hill",
    website: 'www.longbeachneighborhoodsfirst.com',
    favicon: 'Long Beach Neighborhood First favicon.png',
    altText: 'Long Beach Neighborhood First website'
  },
  {
    id: 90,
    position: [29.30049, -81.11251],
    category: Category.CAT1,
    title: 'Citizens Against Runway Extensions',
    information: "Ormond Cares is a grassroots group of citizens who care about the quality of life in our community. Working with C.A.R.E (Citizens against runway extensions) we are against the Proposed Ormond Beach Airport Runway 9-27 West-East Extension",
    website: 'ormondcares.com',
    favicon: 'CARE favicon.png',
    altText: 'Citizens Against Runway Extensions website'
  },
  {
    id: 91,
    position: [41.06802, -73.70833],
    category: Category.CAT1,
    title: 'Coalition to Prevent Westchester Airport Expansion',
    information: "Our coalition brings together community and environmental organizations, families, individuals, and businesses who all make Westchester County and the surrounding area their home and care about its long-term health and well-being",
    website: 'www.coalition-to-prevent-westchester-airport-expansion.org',
    favicon: 'Westchester favicon.png',
    altText: 'Coalition to Prevent Westchester Airport Expansion website'
  },
  {
    id: 92,
    position: [26.14220, -81.79429],
    category: Category.CAT1,
    title: 'Reduce Jet Noise Naples',
    information: "The overhead jet noise in our community is overwhelming. Help us keep the Naples community peaceful and safe",
    website: 'reducejetnoisenaples.org',
    favicon: 'Reduce Jet Noise Naples favicon.png',
    altText: 'Reduce Jet Noise Naples website'
  },
  {
    id: 93,
    position: [20.75806, -156.31052],
    category: Category.CAT1,
    title: 'Quiet Skies Maui',
    information: "We want to save our formerly tranquil communities and quality of life from the new FAA flight paths and regulate helicopter tours that ignore State of Hawaii's DOT mandated noise abatement zones. Returning Maui arrivals/departures to over the ocean",
    website: 'www.facebook.com/Quietskiesmaui',
    favicon: 'Quiet Skies Maui favicon.jpg',
    altText: 'Quiet Skies Maui website'
  },
  {
    id: 94,
    position: [32.96588, -108.57665],
    category: Category.CAT1,
    title: 'Peaceful Gila Skies',
    information: "Peaceful Gila Skies is a coalition of business owners, community leaders, sportsmen and concerned citizens, united in our opposition to the expansion of Holloman Air Force Base's military training over the Gila region in Southwest New Mexico",
    website: 'peacefulgilaskies.com',
    favicon: 'Peaceful Gila Skies favicon.jpg',
    altText: 'Peaceful Gila Skies website'
  },
  {
    id: 95,
    position: [37.36883, -122.03635],
    category: Category.CAT1,
    title: 'Save My Sunny Sky',
    information: "This is a Airplane Noise group by Sunnyvale & Cupertino",
    website: 'www.savemysunnysky.org',
    favicon: 'Save My Sunny Sky favicon.png',
    altText: 'Save My Sunny Sky website'
  },
  {
    id: 96,
    position: [33.90924, -118.17724],
    category: Category.CAT1,
    title: 'LAAHNC',
    information: "Los Angeles Area Helicopter Noise Coalition",
    website: 'lahelicopternoise.us12.list-manage.com/subscribe?u=2d2a5cfdd0e3ae441a0e09e95&id=a544e56e4d',
    favicon: 'Default favicon.png',
    altText: 'Los Angeles Area Helicopter Noise Coalition website'
  },
  {
    id: 97,
    position: [38.66228, -76.99103],
    category: Category.CAT1,
    title: 'South Maryland Fair Skies Coalition',
    information: "We pursue a timely implementation of a fair and equitable air traffic plan for DCA that minimizes aircraft noise and pollution affecting the residents of Southern Maryland",
    website: 'www.southernmarylandfairskiescoalition.com',
    favicon: 'Default favicon.png',
    altText: 'South Maryland Fair Skies Coalition website'
  },
  {
    id: 98,
    position: [44.88275, -93.22260],
    category: Category.CAT1,
    title: 'SMAAC',
    information: "South Metro Airport Action Council",
    website: 'www.smaacmn.org/2024_news_blog',
    favicon: 'SMAAC favicon.png',
    altText: 'SMAAC website'
  },
  {
    id: 99,
    position: [40.96147, -72.24989],
    category: Category.CAT1,
    title: 'Coalition to Transform East Hampton Airport',
    information: "We support closing the East Hampton Airport. Led by full time resident and former local public school teacher Barry Raebeck Ph.D., we are a nonpartisan group of friends and neighbors who care deeply about this issue",
    website: 'www.transformeasthamptonairport.com',
    favicon: 'Transform East Hampton favicon.png',
    altText: 'Coalition to Transform East Hampton Airport website'
  },
  {
    id: 100,
    position: [43.97928, -120.73726],
    category: Category.CAT1,
    title: 'Oregon Aviation Watch',
    information: "The primary purpose of Oregon Aviation Watch is to research, educate and advocate on behalf of the public interest and public welfare about aviation issues",
    website: 'www.oregonaviationwatch.org/index.php',
    favicon: 'Default favicon.png',
    altText: 'Oregon Aviation Watch website'
  },
  {
    id: 101,
    position: [40.26641, -74.89173],
    category: Category.CAT1,
    title: 'BRAAM - Bucks Residents For Responsible Airport Management',
    information: "An incorporated, volunteer, non-profit organization formed by a group of Bucks County, PA citizens concerned about past, proposed, and foreseeable future expansion of the Trenton-Mercer Airport (TTN)",
    website: 'www.transformeasthamptonairport.com',
    favicon: 'Default favicon.png',
    altText: 'BRAAM - Bucks Residents For Responsible Airport Management website'
  },
  {
    id: 102,
    position: [30.67752, -97.67841],
    category: Category.CAT1,
    title: 'ACC - Airport Concerned Citizens',
    information: "A group of friends, neighbors and fellow citizens who believe strongly in the need of a viable, vigorous airport for service to the growing economy of the city, but are opposed to the expansion of our airport's aviation operations in the airport's current location which is the geographic and cultural heart of our growing city and totally atop the Edwards Recharge Zone",
    website: 'georgetownairportconcernedcitizens.com',
    favicon: 'Default favicon.png',
    altText: 'ACC - Airport Concerned Citizens website'
  },
  {
    id: 103,
    position: [44.59907, -72.50026],
    category: Category.CAT1,
    title: 'Save Vermont Airspace',
    information: "We are a group of citizens and neighbors responding to the dramatic increase in demand for private airstrips and helipads in Vermont",
    website: 'www.savevtairspace.org',
    favicon: 'Default favicon.png',
    altText: 'Save Vermont Airspace website'
  },
  {
    id: 104,
    position: [38.89504, -77.03654],
    category: Category.CAT1,
    title: 'Washington DC Fair Skies Coalition',
    information: "A group of citizens in Washington, DC working to make sure we all have a say on airplane noise, air pollution, and flight safety in our neighborhoods",
    website: 'www.facebook.com/dcfairskies',
    favicon: 'Washington DC Fair Skies favicon.jpg',
    altText: 'Washington DC Fair Skies Coalition website'
  },
  {
    id: 105,
    position: [47.46992, -122.34853],
    category: Category.CAT1,
    title: 'Quiet Skies Coalition',
    information: "Our mission is to restore the quiet skies over the greater Burien area",
    website: 'www.facebook.com/QSCBurien',
    favicon: 'Quiet Skies Coalition favicon.jpg',
    altText: 'Quiet Skies Coalition website'
  },
  {
    id: 106,
    position: [41.85108, -70.68325],
    category: Category.CAT1,
    title: 'Community Land and Water Coalition',
    information: "Our mission is to protect, preserve and steward the land and water resources of Southeastern Massachusetts. We are losing them fast",
    website: 'communitylandandwater.org',
    favicon: 'Community Land Water Coalition favicon.png',
    altText: 'Community Land and Water Coalition website'
  },
  {
    id: 107,
    position: [42.29121, -71.12450],
    category: Category.CAT1,
    title: 'Boston South Fair Skies',
    information: "This is a discussion group focused on advocating for the health of City of Boston neighborhoods under Runway 27 flight paths over the commercial interests of the airlines. All residents of these neighborhoods are welcome",
    website: 'www.facebook.com/groups/BostonSouthFairSkies',
    favicon: 'Boston South Fair Skies favicon.jpg',
    altText: 'Boston South Fair Skies website'
  },
  {
    id: 108,
    position: [42.46052, -71.34890],
    category: Category.CAT1,
    title: 'Quiet Communities',
    information: "Quiet Communities, a nonprofit 501(c)(3) organization, promotes quiet as a valuable natural resource and works to reduce harmful noise and related pollution. We take a collaborative, evidence-based, and solutions-driven approach aimed at engaging diverse stakeholders and finding common ground. At the core is a proven model of behavior change",
    website: 'www.quietcommunities.org',
    favicon: 'Quiet Communities favicon.png',
    altText: 'Quiet Communities website'
  },
  {
    id: 109,
    position: [41.38355, -72.50567],
    category: Category.CAT1,
    title: 'Chester Airport Should Be Shut Down',
    information: "Irresponsible pilots at Chester Airport are going to cause another fatal crash, maybe this time taking innocent life. The FAA needs to be at private airports and ensure pilots follow the fight rules",
    website: 'www.facebook.com/profile.php?id=100047026513946',
    favicon: 'Chester Airport favicon.jpg',
    altText: 'Chester Airport Should Be Shut Down website'
  },
  {
    id: 110,
    position: [47.60324, 7.52435],
    category: Category.CAT1,
    title: 'ADRA - Association for the Defense of Residents around Basel-Mulhouse Airport',
    information: "Moins d'avions, c'est moins de bruit et de pollution",
    website: 'www.adra-bale-mulhouse.fr',
    favicon: 'ADRA favicon.png',
    altText: 'ADRA website'
  },
  {
    id: 111,
    position: [48.42985, 6.67933],
    category: Category.CAT1,
    title: 'Air Quotas',
    information: "How to reduce CO2 with social justice? Let's start with the plane. One account with the same plane quota for everyone. Those who do not have enough will buy surplus. Those, more numerous not taking the plane, will be able to cash in their points which will be renewed each year with 6% less: avoiding the plane will be rewarded!",
    website: 'air-quotas.eu',
    favicon: 'Air Quotas favicon.png',
    altText: 'Air Quotas website'
  },
  {
    id: 112,
    position: [48.10500, 16.58490],
    category: Category.CAT1,
    title: 'Aviation Reset',
    information: "The concept of unbridled growth as a motor for the economy - the credo of aviation for decades, hyped by politicians and the media - has had its day. The dream of cheap flights for everyone is not feasible. It is time for a reset, for a new beginning with a balanced approach that meets the challenges of our time",
    website: 'aviationreset.at',
    favicon: 'Aviation Reset favicon.jpg',
    altText: 'Aviation Reset website'
  },
  {
    id: 113,
    position: [50.95192, -1.35610],
    category: Category.CAT1,
    title: 'AXO - Airport eXpansion Opposition Southampton',
    information: "Airport eXpansion Opposition accepts the need for a small regional airport at Southampton, whilst acknowledging that the Climate Crisis means we must all fly less",
    website: 'axosouthampton.wordpress.com',
    favicon: 'AXO favicon.png',
    altText: 'AXO website'
  },
  {
    id: 114,
    position: [45.64909, 12.19668],
    category: Category.CAT1,
    title: 'Comitato Aeroporto Treviso',
    information: "Ognuno di noi è importante, ognuno di noi vale la battaglia che portiamo avanti con la forza della ragione, contro la ragione della forza!",
    website: 'www.facebook.com/ComitatoAeroportoTv',
    favicon: 'CAT favicon.jpg',
    altText: 'Comitato Aeroporto Treviso website'
  },
  {
    id: 115,
    position: [50.90090, 4.48096],
    category: Category.CAT1,
    title: 'Free Air Brussels North',
    information: "Stop au survol excessif de la Région bruxelloise! Stop excessief luchtverkeer boven Brussels Gewest!",
    website: 'www.facebook.com/FreeAirBrusselsNorth',
    favicon: 'Free Air Brussels North favicon.jpg',
    altText: 'Free Air Brussels North website'
  },
  {
    id: 116,
    position: [45.32204, -75.66726],
    category: Category.CAT1,
    title: 'Land over Landings',
    information: "To persuade Ottawa to preserve the Pickering Federal Lands, long earmarked as the site of a future airport, as a secure source of food and fresh water for Canada’s largest urban centre",
    website: 'landoverlandings.com',
    favicon: 'Land over Landings favicon.png',
    altText: 'Land over Landings website'
  },
  {
    id: 117,
    position: [43.62806, -79.39800],
    category: Category.CAT1,
    title: 'Parks not Planes',
    information: "Members of Parks not Planes are your neighbors. Join us in the effort to turn the Island Airport lands into a magnificent park",
    website: 'www.parksnotplanes.com',
    favicon: 'Parks not Planes favicon.png',
    altText: 'Parks not Planes website'
  },
  {
    id: 118,
    position: [51.46774, -0.45878],
    category: Category.CAT1,
    title: 'Vote NO To Heathrow',
    information: "We are a grassroots group campaigning against a third runway at Heathrow; currently pressuring progressive political parties to stand by their morals & oppose June's vote on Heathrow expansion. New runways hasten climate breakdown, killing millions",
    website: 'www.facebook.com/votenoheathro',
    favicon: 'Vote No To Heathrow favicon.png',
    altText: 'Vote NO To Heathrow website'
  },
  {
    id: 119,
    position: [43.43752, 5.21303],
    category: Category.CAT1,
    title: 'Stop Extension Aeroport Marseille-Provence',
    information: "The airport intends to align itself with the global growth of the sector, and expand to allow more passenger traffic. However, if we look more closely, this headlong rush, claimed by the promoter, will lead to a considerable increase in greenhouse gas emissions and global warming. In total contradiction with the Paris Agreement",
    website: 'alternatibamarseille.org/stop-extension-aeroport-mp',
    favicon: 'Stop Marseille Extension favicon.png',
    altText: 'Stop Extension Aeroport Marseille-Provence website'
  },
  {
    id: 120,
    position: [41.29694, 2.07905],
    category: Category.CAT1,
    title: 'Zero Port',
    information: "Plataforma pel decreixement del port i l'aeroport de BCN",
    website: 'twitter.com/zeroportbcn',
    favicon: 'Zero Port favicon.jpg',
    altText: 'Zero Port website'
  },
  {
    id: 121,
    position: [51.51423, 7.46528],
    category: Category.CAT1,
    title: 'Giulio Mattioli X Channel',
    information: "Transport researcher with views on + than 1 topic - citizen with views on + than 1 country. Used to be in 🇬🇧. Now at @TU_Dortmund. Views my own",
    website: 'x.com/giulio_mattioli',
    favicon: 'Giulio Mattioli favicon.jpg',
    altText: 'Giulio Mattioli X Channel'
  },
  {
    id: 122,
    position: [36.21011, -115.19605],
    category: Category.CAT1,
    title: 'Aviation Disaster',
    information: "Our neighborhood, peace and tranquility is BEING 'CONFISCATED' and Sold to become aviation playground",
    website: 'x.com/NutritionBee',
    favicon: 'Aviation Disaster favicon.jpg',
    altText: 'Aviation Disaster X Channel'
  },
  {   
    id: 123,
    position: [52.132633, 5.291266],
    category: Category.CAT1,
    title: 'Maria X Channel',
    information: "News and studies on the health effects of air pollution. Favicon image source: The American Lung Association in California",
    website: 'x.com/Duin46473580',
    favicon: 'Maria Twitter favicon.jpg',
    altText: 'Maria X Channel'
  },
  {   
    id: 124,
    position: [41.82399, -71.41283],
    category: Category.CAT1,
    title: 'Providence Noise Project',
    information: "Addressing the culture of #noise in one of America's oldest cities. #Noisepollution is a #publichealth & #environmentaljustice issue. Noise is the New Smoking",
    website: 'x.com/NotSoLoudPVD',
    favicon: 'Providence Noise Project favicon.jpg',
    altText: 'Providence Noise Project X Channel'
  },
  {   
    id: 125,
    position: [36.70146, -118.75600],
    category: Category.CAT1,
    title: 'How The West Was Saved',
    information: "Our current direction isn't left or right, it's forward towards progress. RTs/Likes ≠ endorsement. Blog UC.",
    website: 'x.com/HowTheWestWS',
    favicon: 'How The West Was Saved favicon.jpg',
    altText: 'How The West Was Saved X Channel'
  },
  {   
    id: 126,
    position: [54.10080, -1.86158],
    category: Category.CAT1,
    title: 'No Airport Expansion',
    information: "More flights mean more emissions, more noise pollution, and more air pollution. In response to the climate crisis, we should be reducing flight levels, for the health of local residents, the wider UK and global community, and for planetary health",
    website: 'www.noairportexpansion.org',
    favicon: 'No Airport Expansion favicon.jpg',
    altText: 'No Airport Expansion website'
  },
  {   
    id: 127,
    position: [51.34653, 1.34747],
    category: Category.CAT1,
    title: "Don't Save Manston Airport",
    information: "This group has been set up for the primary reason. We don't want an airport back at Manston. We do not wish to talk about supporting the former airfield, it failed numerous times",
    website: 'www.facebook.com/groups/1513910555578401',
    favicon: 'No Manston Airport favicon.jpg',
    altText: "Don't Save Manston Airport website"
  },
  {   
    id: 128,
    position: [43.65348, -79.38393],
    category: Category.CAT1,
    title: 'No Jets T.O.',
    information: "Save Toronto's waterfront. Say no to jets and an expanded Island Airport. Mission accomplished, let's keep it that way!",
    website: 'x.com/NoJetsTO',
    favicon: 'No Jets TO favicon.png',
    altText: 'No Jets TO X Channel'
  },
  {   
    id: 129,
    position: [51.47064, -0.47010],
    category: Category.CAT1,
    title: 'HACAN - Heathrow Association for the Control of Aircraft Noise',
    information: "HACAN is a campaigning organization. We were formed in the 1970s to give a voice to residents under the Heathrow flight paths. We are a regional body covering London and part of the Home Counties with several thousand members",
    website: 'hacan.org.uk',
    favicon: 'Hacan favicon.png',
    altText: 'HACAN website'
  },
  {   
    id: 130,
    position: [43.63042, 1.35981],
    category: Category.CAT1,
    title: 'Aeroport de Toulouse STOP Pollutions Aériennes',
    information: "Ci-gisent la vie & la santé des victimes de l'aeroport de #Toulouse NOT PROUD OF @Airbus",
    website: 'x.com/Airport_Tlse',
    favicon: 'Stop Toulouse Airport favicon.jpg',
    altText: 'Aeroport de Toulouse STOP Pollutions Aériennes X Channel'
  },
  {   
    id: 131,
    position: [43.60967, 1.40104],
    category: Category.CAT1,
    title: "Pas d'Avions à l'Hôpital Purpan #BRUIT",
    information: "Association pour que cesse la honte du passage des avions d'@aeroport_tls sur le @CHUdeToulouse #Purpan",
    website: 'x.com/Stop_Avions_CHU',
    favicon: 'Hospital Toulouse favicon.jpg',
    altText: "Pas d'Avions à l'Hôpital Purpan #BRUIT X Channel"
  },
  {   
    id: 132,
    position: [43.44744, -79.66667],
    category: Category.CAT1,
    title: "Quiet Skies Oakville",
    information: "1 of many communities blindsided by NavCanada/GTAA/TC in 2012 w/low,loud,concentrated noise sewers any time of day &night stealing away quality of life & health",
    website: 'x.com/Whyuflylow_loud',
    favicon: 'Quiet Skies Oakville favicon.jpg',
    altText: "Quiet Skies Oakville X Channel"
  },
  {   
    id: 133,
    position: [38.88756, -77.09880],
    category: Category.CAT1,
    title: "Unsuck DCA Noise",
    information: "DCA is a great airport but a bad neighbor. This feed is dedicated to fixing the increasing noise problem that is plaguing surrounding communities in DC, VA",
    website: 'x.com/UnsuckDCAnoise',
    favicon: 'Unsuck DCA Noise favicon.jpg',
    altText: "Unsuck DCA Noise X Channel"
  },
  {   
    id: 134,
    position: [41.31005, -72.90080],
    category: Category.CAT1,
    title: "SOS Connecticut",
    information: "Save Our Shoreline, Connecticut",
    website: 'www.facebook.com/profile.php?id=100086399211567',
    favicon: 'SOS Connecticut favicon.jpg',
    altText: "SOS Connecticut website"
  },
  {   
    id: 135,
    position: [-37.10418, 174.92521],
    category: Category.CAT1,
    title: "Fly Less Kiwis",
    information: "Fly-less Kiwis is a New Zealand based forum for groups and individuals committed to reducing air travel in response to the threat posed by climate change. Like our native Kiwi bird, we too are endangered unless we better protect our environment",
    website: 'www.facebook.com/groups/352684145282681',
    favicon: 'Fly Less Kiwis favicon.jpg',
    altText: "Fly Less Kiwis website"
  },
  {   
    id: 136,
    position: [51.57023, 0.69661],
    category: Category.CAT1,
    title: "Southend Airport Group against Expansion",
    information: "A FB group of like minded residents who are worried by the pollution and sleep deprivation caused by Southend Airport operations",
    website: 'www.facebook.com/groups/70888463942',
    favicon: 'Default favicon.png',
    altText: "Southend Airport Group against Expansion website"
  },
    {   
    id: 137,
    position: [50.64489, 5.46056],
    category: Category.CAT1,
    title: "CLAP - Comité Liège Air Propre",
    information: "Le CLAP est un comité de citoyens subissant les nuisances sonores ou environnementales générées par le développement anarchique de l'aéroport de Liège",
    website: 'www.facebook.com/groups/602631233740799',
    favicon: 'CLAP favicon.jpg',
    altText: "CLAP - Comité Liège Air Propre website"
  },
  {   
    id: 138,
    position: [-33.97121, 150.69155],
    category: Category.CAT1,
    title: "Silverdale & Warragamba Residents against SEPP Aerotropolis",
    information: "We as residents are seeking consultation of SEPP and the reversal thereon until proper community consultation and community input",
    website: 'www.facebook.com/groups/346724037269702',
    favicon: 'SEPP favicon.jpg',
    altText: "Silverdale & Warragamba Residents against SEPP Aerotropolis website"
  },
  {   
    id: 139,
    position: [32.73336, -117.19225],
    category: Category.CAT1,
    title: "San Diego Air Route Forum",
    information: "This is a neighborhood where residents can post and discuss ideas and information regarding airplane flights San Diego",
    website: 'www.facebook.com/groups/plairroute',
    favicon: 'San Diego Air Route Forum favicon.jpg',
    altText: "San Diego Air Route Forum website"
  },
  {   
    id: 140,
    position: [41.27161, -72.85669],
    category: Category.CAT1,
    title: "Keep Tweed Small",
    information: "Residents against Tweed Airport Expansion through East Haven",
    website: 'www.facebook.com/groups/367366328087334',
    favicon: 'Keep Tweed Small favicon.jpg',
    altText: "Keep Tweed Small website"
  },
  {   
    id: 141,
    position: [51.87983, -0.37689],
    category: Category.CAT1,
    title: "SLAE - Stop Luton Airport Expansion",
    information: "Stop Luton Airport Expansion (SLAE) has been formed by members of the steering committee of local campaign group, Friends Of Wigmore Park",
    website: 'stoplae.org',
    favicon: 'SLAE favicon.jpg',
    altText: "SLAE - Stop Luton Airport Expansion website"
  },
  {   
    id: 142,
    position: [38.37295, -81.59422],
    category: Category.CAT1,
    title: "Save Coonskin Park",
    information: "Yeager Airport in Charleston has proposed a runway extension that would destroy over 400 acres of Coonskin park, including all the upper shelters and hiking trails",
    website: 'www.facebook.com/groups/1780457215659935',
    favicon: 'Save Coonskin Park favicon.jpg',
    altText: "Save Coonskin Park website"
  },
  {   
    id: 143,
    position: [55.95013, -3.35951],
    category: Category.CAT1,
    title: "Edinburgh Airport Watch",
    information: "Monitoring developments at Edinburgh Airport",
    website: 'www.facebook.com/groups/1104147722941069',
    favicon: 'Edinburgh Airport Watch favicon.jpg',
    altText: "Edinburgh Airport Watch website"
  },
  {   
    id: 144,
    position: [55.88257, -3.51439],
    category: Category.CAT1,
    title: "Livi Quiet Skies",
    information: "",
    website: 'www.facebook.com/profile.php?id=61560466064591',
    favicon: 'Livi Quiet Skies favicon.jpg',
    altText: "Livi Quiet Skies website"
  },
  {   
    id: 145,
    position: [53.42736, -6.24833],
    category: Category.CAT1,
    title: "FORUM - Fingal Organised Residents United Movement",
    information: "Our goal is to raise awareness about the devastating affects of the unapproved flight paths from the North Runway at Dublin Airport and the affects the roaring jets are having on our health",
    website: 'www.wrongwaydaa.com',
    favicon: 'Fingal favicon.jpg',
    altText: "Fingal Organised Residents United Movement website"
  },
  {   
    id: 146,
    position: [36.58706, -121.84194],
    category: Category.CAT1,
    title: "Monterey Fly Safe Coalition",
    information: "A group of residents concerned about airplane noise",
    website: 'www.facebook.com/profile.php?id=61557077052162',
    favicon: 'Monterey Coalition favicon.jpg',
    altText: "Monterey Fly Safe Coalition website"
  },
  {   
    id: 147,
    position: [40.64659, -73.79303],
    category: Category.CAT1,
    title: "JFK Noise Watch",
    information: "Account to keep a record of possible noise abatement missed opportunities by the JFK Tower and N90 on the disproportionately used ILS 22L",
    website: 'x.com/JFKNoiseWatch',
    favicon: 'JFK Noise Watch favicon.jpg',
    altText: "JFK Noise Watch X channel"
  },
  {   
    id: 148,
    position: [48.73006, 2.36783],
    category: Category.CAT1,
    title: "DRAPO - Défense Riverains Aéroport Paris Orly",
    information: "Défense Riverains Aéroport Paris Orly. 40 communes et 30 associations rassemblées contre les pollutions de l'aéroport de Paris-Orly",
    website: 'x.com/DRAPOORLY',
    favicon: 'DRAPO favicon.jpg',
    altText: "DRAPO X channel"
  },
  {   
    id: 149,
    position: [51.49661, -0.36938],
    category: Category.CAT1,
    title: "Brentford Noise",
    information: "Norwood Green, Osterley Park, Isleworth,  Southall and Ealing (N.O.I.S.E.) will be RIGHT under the  screaming approach paths to Heathrow's third runway. HAPPY?",
    website: 'x.com/BrentfordI',
    favicon: 'Brentford Noise favicon.jpg',
    altText: "Brentford Noise X channel"
  },
  {   
    id: 150,
    position: [51.50745, -0.12777],
    category: Category.CAT1,
    title: "John Stewart",
    information: "Transport and Noise campaigner. Tweets in a personal capacity. johnstewart2@btconnect.com",
    website: 'x.com/JohnJohnStewart',
    favicon: 'John Stewart favicon.jpg',
    altText: "John Stewart X channel"
  },
  {   
    id: 151,
    position: [52.30914, 4.63695],
    category: Category.CAT1,
    title: "FloriandeTegenGeluid",
    information: "A Vinex district sacrificed by the government to limit air traffic disruption. Half of the 18,000 residents are not included and the measure has not limited any nuisance",
    website: 'x.com/Fl_TegenGeluid',
    favicon: 'Tegen favicon.png',
    altText: "FloriandeTegenGeluid X channel"
  },
  {   
    id: 152,
    position: [52.45489, 5.52051],
    category: Category.CAT1,
    title: "SATL-Lelystad",
    information: "Collaborating Action Groups Against Low Flying (SATL) unites 24 action groups of concerned citizens against harmful low-level flight routes over large parts of the Netherlands",
    website: 'satl-lelystad.nl',
    favicon: 'SATL-Lelystad favicon.jpg',
    altText: "SATL-Lelystad X channel"
  },
  {   
    id: 153,
    position: [52.45329, 5.49521],
    category: Category.CAT1,
    title: "Lelystad Airport NEE",
    information: "Article 21 of the Constitution: The government's concern is aimed at the habitability of the country and the protection and improvement of the environment",
    website: 'x.com/NeeAirportLEY',
    favicon: 'Lelystad Airport NEE favicon.jpg',
    altText: "Lelystad Airport NEE X channel"
  },
  {   
    id: 154,
    position: [52.72128, 4.82067],
    category: Category.CAT1,
    title: "Vlieghinder",
    information: "Against low flight routes throughout the Netherlands. Against night flights. You are more likely to die under a noise trough. #Schiphol250k is healthy size. donderdorp.nl eldwekker.nl",
    website: 'x.com/Vlieghindernl',
    favicon: 'Vlieghinder favicon.jpg',
    altText: "Vlieghinder X channel"
  },
  {   
    id: 155,
    position: [52.31098, 4.74472],
    category: Category.CAT1,
    title: "Vondelparkbaan",
    information: "We have been experiencing nuisance from the megalomaniac Schiphol since the 1970s",
    website: 'x.com/vondelparkbaan',
    favicon: 'Vondelparkbaan favicon.jpg',
    altText: "Vondelparkbaan X channel"
  },
  {   
    id: 156,
    position: [52.15625, 5.38969],
    category: Category.CAT1,
    title: "Stop4deroute",
    information: "Say no to the fourth route across the provinces of Gelderland, Utrecht and North Holland; do not enable the growth of aviation",
    website: 'www.stop4deroute.nl',
    favicon: 'Stop4deroute favicon.jpg',
    altText: "Stop4deroute X channel"
  },
  {   
    id: 157,
    position: [49.01885, 2.53972],
    category: Category.CAT1,
    title: "Collectif NON AU T4",
    information: "Collectif contre le Terminal 4 et pour la réduction du trafic aérien à Roissy pour protéger le climat et la santé. For air traffic reduction at Roissy airport",
    website: 'x.com/NonAuTerminal4',
    favicon: 'Collectif NON AU T4 favicon.png',
    altText: "Collectif NON AU T4 X channel"
  },
  {   
    id: 158,
    position: [48.86098, 2.34618],
    category: Category.CAT1,
    title: "Taxis-Volants Non Merci",
    information: "Collectif de lutte contre les taxis-volants : expérimentation prévue à partir de l'été 2024 à Paris",
    website: 'x.com/Taxis_Volants',
    favicon: 'Taxis-Volants Non Merci favicon.jpg',
    altText: "Taxis-Volants Non Merci X channel"
  },
  {   
    id: 159,
    position: [48.82144, 2.62530],
    category: Category.CAT1,
    title: "ARALE - Association Des Riverains De L'Aerodrome De Lognes-Emerainville",
    information: "Compte officiel de l'#ARALE (Association des Riverains de l'Aérodrome de Lognes-Emerainville) qui rassemble les riverains victimes de ces #nuisances aériennes",
    website: 'arale.fr',
    favicon: 'ARALE favicon.jpg',
    altText: "ARALE X channel"
  },
  {   
    id: 160,
    position: [46.54515, 6.61735],
    category: Category.CAT1,
    title: "ADRB - Association de Défense des Riverains de la Blécherette",
    information: "L'Association de Défense des Riverains de la Blécherette lutte contre les nuisances de l'aéroport de Lausanne",
    website: 'adrb.ch/home',
    favicon: 'ADRB Lausanne favicon.jpg',
    altText: "ADRB Lausanne X channel"
  },
  {   
    id: 161,
    position: [50.00123, 8.27625],
    category: Category.CAT1,
    title: "Flight-Shame",
    information: "Initiative for climate, environmental and noise protection in air traffic",
    website: 'x.com/KlimaUmweltLuft',
    favicon: 'Flight-Shame favicon.png',
    altText: "Flight-Shame X channel"
  },
  {   
    id: 162,
    position: [42.63843, 12.67430],
    category: Category.CAT1,
    title: "Jet Dei Ricchi",
    information: "Stimiamo l'impatto ambientale dei jet privati. Tassi elevati d'ingiustizia e greenwashing",
    website: 'x.com/jetdeiricchi',
    favicon: 'Jet Dei Ricchi favicon.jpg',
    altText: "Jet Dei Ricchi X channel"
  },
  {   
    id: 163,
    position: [51.15800, -1.14851],
    category: Category.CAT1,
    title: "StopFlying",
    information: "Advocating a world of less air travel and lower emissions",
    website: 'x.com/stopflying',
    favicon: 'StopFlying favicon.jpg',
    altText: "StopFlying X channel"
  },
  {   
    id: 164,
    position: [47.21864, -1.55414],
    category: Category.CAT1,
    title: "COCETA - COllectif des Citoyens Exposés au Trafic Aérien",
    information: "Laïque et transpartisane, l'association mobilise des citoyens comme les autres engagés pour l'intérêt général",
    website: 'coceta.org',
    favicon: 'COCETA favicon.jpg',
    altText: "COCETA X channel"
  },
  {   
    id: 165,
    position: [48.77113, 2.52213],
    category: Category.CAT1,
    title: "OYE 349",
    information: "Association de protection des riverains de l'aéroport d'Orly contre les nuisances sonores et chimiques du transport aérien",
    website: 'oye349.com',
    favicon: 'OYE 349 favicon.png',
    altText: "OYE 349 X channel"
  },
  {   
    id: 166,
    position: [55.03842, -1.69640],
    category: Category.CAT1,
    title: "Aircraft noise - Newcastle Airport ",
    information: "A campaign to make Newcastle Airport @NCLairport a better neighbour",
    website: 'www.aircraftnoiseaction.com',
    favicon: 'Aircraft noise - Newcastle Airport favicon.jpg',
    altText: "Aircraft noise - Newcastle Airport X channel"
  },
  {   
    id: 167,
    position: [37.60903, -121.89914],
    category: Category.CAT1,
    title: "NOMBY - Not Over My Back Yard",
    information: "Alameda County Against Drones (ACAD) coalition says NO to drones in our skies. Our allies fight for privacy",
    website: 'x.com/nomby',
    favicon: 'NOMBY favicon.png',
    altText: "NOMBY X channel"
  },
  {   
    id: 168,
    position: [51.45349, -1.03187],
    category: Category.CAT1,
    title: "RAAN - Residents Against Aircraft Noise",
    information: "Berks, Surrey, North Hants etc. Bliss until June 2014 when LHR & their aviational accomplices decided2 change Flight Ops for ££",
    website: 'x.com/RAAN_BERKS',
    favicon: 'RAAN favicon.png',
    altText: "RAAN X channel"
  },
  {   
    id: 169,
    position: [32.71436, 35.09548],
    category: Category.CAT1,
    title: "No Izrael Airport",
    information: "No to INTL airport in Jezreel Valley",
    website: 'x.com/noizraelairport',
    favicon: 'No Izrael Airport favicon.jpg',
    altText: "No Izrael Airport X channel"
  },
  {   
    id: 170,
    position: [42.83221, 0.61959],
    category: Category.CAT1,
    title: "Les Braises - Non a l'Aéroport du St-Emilionnais",
    information: "Lutte pour le vivant, contre aéroport de jets privés aux Artigues et contre méga plateforme logistique à Coutras",
    website: 'les-braises.fr',
    favicon: "Les Braises - Non a l'Aéroport du St-Emilionnais favicon.jpg",
    altText: "Les Braises - Non a l'Aéroport du St-Emilionnais X channel"
  },
  {   
    id: 171,
    position: [48.86619, 2.34284],
    category: Category.CAT1,
    title: "Laviondebernard",
    information: "Suivi de jets privés par @memoirevive_ Estimation des émissions de CO2. Données publiques",
    website: 'linktr.ee/laviondebernard_sources',
    favicon: "laviondebernard favicon.png",
    altText: "Laviondebernard X channel"
  },
  {   
    id: 172,
    position: [43.65982, 7.21375],
    category: Category.CAT1,
    title: "Stop Extension Aéroport Nice",
    information: "Collectif d'organisations et de citoyens luttant contre l'extension de l'aéroport de Nice et ses impacts environnementaux, sanitaires et sociaux désastreux",
    website: 'x.com/StopExtAeroNICE',
    favicon: "Stop Extension Aéroport Nice favicon.jpg",
    altText: "Stop Extension Aéroport Nice X channel"
  },
  {   
    id: 173,
    position: [43.60446, 1.44425],
    category: Category.CAT1,
    title: "Virons Airbus et soyons heureux Toulouse",
    information: "Toulouse sans @Airbus, ce serait tellement chouette",
    website: 'x.com/Stop_Airbus',
    favicon: "Virons Airbus et soyons heureux Toulouse favicon.jpg",
    altText: "Virons Airbus et soyons heureux Toulouse X channel"
  },
  {   
    id: 174,
    position: [52.53032, 4.70904],
    category: Category.CAT1,
    title: "ir B van Marlen",
    information: "Critical Citizen Scientist, MSc. TU-Delft, Analysis of aircraft noise using own developed models. Blog 'Schiphollen-liegenenbedriegen'. Father and grandfather",
    website: 'x.com/BobVanmarlen',
    favicon: "ir B van Marlen favicon.jpg",
    altText: "ir B van Marlen X channel"
  },
  {   
    id: 175,
    position: [52.14059, 4.78670],
    category: Category.CAT1,
    title: "SOS Groene Hart",
    information: "Stop Nuisance Schiphol, Residents of the Green Heart who are more than fed up with the enormous nuisance caused by air traffic over their villages and the Natura 2000 area",
    website: 'x.com/NieuwkoopSos',
    favicon: "SOS Groene Hart favicon.jpg",
    altText: "SOS Groene Hart X channel"
  },
  {   
    id: 176,
    position: [43.54456, 6.95313],
    category: Category.CAT1,
    title: "ADNA06_STOP Nuisances Aéroport Cannes",
    information: "L'association ADNA regroupe 1600 adhérents et a pour objectif de lutter contre les nuisances générées par l'aéroport de Cannes Mandelieu",
    website: 'x.com/Adna06C',
    favicon: "ADNA06_STOP Nuisances Aéroport Cannes favicon.jpg",
    altText: "ADNA06_STOP Nuisances Aéroport Cannes X channel"
  },
  {   
    id: 177,
    position: [52.50898, 6.09438],
    category: Category.CAT1,
    title: "HoogOverijssel",
    information: "Against low flying over Zwolle, the Vechtdal, Salland, the Lemelerberg, the Holterberg and the Weerribben",
    website: 'x.com/HoogOverijssel',
    favicon: "HoogOverijssel favicon.jpg",
    altText: "HoogOverijssel X channel"
  },
  {   
    id: 178,
    position: [51.51243, -0.10522],
    category: Category.CAT1,
    title: "Planes Over London",
    information: "Planes Over London/Windsor is a free service provided to anyone impacted by or interested in air traffic heading for Heathrow over the capital",
    website: 'x.com/planeslondon',
    favicon: "Planes Over London favicon.png",
    altText: "Planes Over London X channel"
  },
  {   
    id: 179,
    position: [53.63636, 9.99455],
    category: Category.CAT1,
    title: "BIG-Fluglarm Hamburg",
    information: "As a non-profit organization, we want to work towards sustainable protection from aircraft noise and the legal anchoring of undisturbed nighttime rest",
    website: 'x.com/BIGFluglaermHH',
    favicon: "BIG-Fluglarm Hamburg favicon.jpg",
    altText: "BIG-Fluglarm Hamburg X channel"
  },
  {   
    id: 180,
    position: [51.38297, -2.71862],
    category: Category.CAT1,
    title: "Eyes On Bristol Airport",
    information: "Community Watch Bristol Airport. Watching BAL don't exceed planning conditions. Tweet noise/early or late flights/pollution/traffic/parking",
    website: 'x.com/EyesOnBAL',
    favicon: "Eyes On Bristol Airport favicon.jpg",
    altText: "Eyes On Bristol Airport X channel"
  },
  {   
    id: 181,
    position: [38.78095, -9.13190],
    category: Category.CAT1,
    title: "ZERO - Associação Sistema Terrestre Sustentável",
    information: "Intervimos na sociedade pela defesa da sustentabilidade para construir um mundo mais coeso, em respeito pelos limites do planeta",
    website: 'zero.ong',
    favicon: "ZERO favicon.jpg",
    altText: "ZERO website"
  },
  {   
    id: 182,
    position: [-41.32710, 174.80797],
    category: Category.CAT1,
    title: "Plane Sense Wellington",
    information: "A group for residents experiencing increased aircraft noise from Wellington Airport, following the flight path change over Johnsonville, Broadmeadows and Khandallah",
    website: 'www.planesensewellington.com/home',
    favicon: "Plane Sense Wellington favicon.jpg",
    altText: "Plane Sense Wellington website"
  },
  {   
    id: 183,
    position: [42.22162, -83.74572],
    category: Category.CAT1,
    title: "Stop A2 Airport",
    information: "Join the Movement to Stop THE UNsafe Ann Arbor Airport runway extension!!",
    website: 'stopa2airport.com',
    favicon: "StopA2 favicon.png",
    altText: "Stop A2 Airport website"
  },
  {   
    id: 184,
    position: [38.92511, -77.10137],
    category: Category.CAT1,
    title: "Palisades Airplane Noise",
    information: "Standing against airplane noise over DC. Ward 3 rep on MWAA Community Workgroup. CWG",
    website: 'twitter.com/PalisadesN',
    favicon: "Palisades favicon.jpg",
    altText: "Palisades Airplane Noise X account"
  },
  {   
    id: 185,
    position: [47.44591, -122.30152],
    category: Category.CAT1,
    title: "SeaTac Noise Info",
    information: "Since 2016, we have been working to reduce the noise. Reduce the pollution. Improve public health. Obtain compensation. Strengthen our communities",
    website: 'twitter.com/SeaTacNoiseInfo',
    favicon: "SeaTac Noise favicon.jpg",
    altText: "SeaTac Noise Info X account"
  },
  {   
    id: 186,
    position: [37.69344, -121.81872],
    category: Category.CAT1,
    title: "No LVK Expansion",
    information: "Help us reduce airplane noise and increase safety in our communities by joining us against the Airport and Livermore City Expansion plan",
    website: 'www.livermoreairportnoise.org',
    favicon: "Livermore favicon.jpg",
    altText: "No LVK Expansion website"
  },
  {   
    id: 187,
    position: [38.03552, -84.60623],
    category: Category.CAT1,
    title: "Citizens for Bourbon County",
    information: "No to Bluegrass Station Airport expansion: learn more about the state's secret land grab of 2000-4000 acres using eminent domain under the false guise of 'National Security'",
    website: 'citizensforbourboncounty.org',
    favicon: "Citizens Bourbon County favicon.jpg",
    altText: "Citizens for Bourbon County website"
  },
  {   
    id: 188,
    position: [51.15642, -0.16771],
    category: Category.CAT1,
    title: "APCAG - Association of Parish Councils Aviation Group",
    information: "We want a constructive engagement with Gatwick Airport and all those with an interest that allows Gatwick to be a sustainable business, crucially one that protects those who live close to the airport. Most importantly our aim is to minimise the burden of noise on all of our communities by sharing it fairly.",
    website: 'www.apcag.org',
    favicon: "APCAG.png",
    altText: "APCAG website"
  },
  {   
    id: 189,
    position: [54.62033, -5.86982],
    category: Category.CAT1,
    title: "Belfast City Airport Watch",
    information: "We are an umbrella residents' group fighting for robust and properly enforced controls on aircraft noise.",
    website: 'www.belfastcityairportwatch.co.uk',
    favicon: "Belfast City Airport Watch favicon.png",
    altText: "Belfast City Airport Watch website"
  },
  {   
    id: 190,
    position: [54.62033, -5.86982],
    category: Category.CAT1,
    title: "Belfast City Airport Watch",
    information: "We are an umbrella residents' group fighting for robust and properly enforced controls on aircraft noise.",
    website: 'www.belfastcityairportwatch.co.uk',
    favicon: "Belfast City Airport Watch favicon.jpg",
    altText: "Belfast City Airport Watch website"
  },
  {   
    id: 191,
    position: [53.33605, -2.84943],
    category: Category.CAT1,
    title: "Save Oglet Shore Greenbelt",
    information: "We are a group campaigning to save Oglet, its surrounding greenbelt land and access to the shore in Speke from being destroyed by the proposed development of Liverpool Airport.",
    website: 'speke8.wixsite.com/oglet',
    favicon: "Save Oglet Shore Greenbelt favicon.jpg",
    altText: "Save Oglet Shore Greenbelt website"
  },
  {   
    id: 192,
    position: [51.15480, -0.16393],
    category: Category.CAT1,
    title: "GACC - Gatwick Area Conservation Campaign",
    information: "The Gatwick Area Conservation Campaign seeks to protect and improve the environment in the area affected by Gatwick Airport's operations with particular regard to noise, congestion, air quality and light pollution.",
    website: 'www.gacc.org.uk',
    favicon: "GACC.jpg",
    altText: "GACC website"
  },
  {   
    id: 193,
    position: [51.16105, -0.18316],
    category: Category.CAT1,
    title: "Gatwick Obviously Not",
    information: "New flightpaths implemented by Gatwick Airport in 2013/14 are destroying lives in Kent, Sussex & Surrey as we know it. Make your voices heard #OneVoice.",
    website: 'gatwickobviouslynot.org/index.html',
    favicon: "Gatwick Obviously Not favicon.png",
    altText: "Gatwick Obviously Not website"
  },
  {   
    id: 194,
    position: [51.75305, -0.33797],
    category: Category.CAT1,
    title: "STAND - St Albans Aircraft Noise Defense",
    information: "Representing residents of historic St Albans and surrounding areas who are concerned about London Heathrow and London Luton flight operations over the area.",
    website: 'stand.city',
    favicon: "STAND favicon.jpg",
    altText: "STAND website"
  },
  {   
    id: 195,
    position: [51.33050, 0.03236],
    category: Category.CAT1,
    title: "Flight Path Watch",
    information: "Flightpath Watch was formed 25 years ago by a group of residents to represent the many thousands affected by operations at Biggin Hill Airport.",
    website: 'www.flightpathwatch.co.uk',
    favicon: "Flight Path Watch favicon.png",
    altText: "Flight Path Watch website"
  },
  {   
    id: 196,
    position: [40.49523, -3.57337],
    category: Category.CAT1,
    title: "Ecologistas en accion",
    information: "Ecologists in Action is a confederation of environmental groups distributed across towns and cities. We are part of social environmentalism, which understands that environmental problems have their origin in an increasingly globalised model of production and consumption.",
    website: 'www.ecologistasenaccion.org/areas-de-accion/transporte/avion',
    favicon: "Ecologistas en accion favicon.jpg",
    altText: "Ecologistas en accion website"
  },
  {   
    id: 197,
    position: [-8.52281, 179.19785],
    category: Category.CAT1,
    title: "Alofa Tuvalu",
    information: "Because we are all Tuvaluans, since 2005 Alofa Tuvalu contributes to an active global movement against climate change.",
    website: 'www.facebook.com/alofatuvaluofficial',
    favicon: "Alofa Tuvalu favicon.jpg",
    altText: "Alofa Tuvalu facebook group"
  },
  {   
    id: 198,
    position: [46.52183, 6.63270],
    category: Category.CAT1,
    title: "Grandparents pour le climat",
    information: "Our movement was launched to give a voice to grandparents, parents, aunts, uncles, and others concerned about the climate that our descendants will inherit.",
    website: 'www.gpclimat.ch/',
    favicon: "Grandparents pour le climat favicon.png",
    altText: "Grandparents pour le climat facebook group"
  },
  {   
    id: 199,
    position: [47.19039, 1.95438],
    category: Category.CAT1,
    title: "Alternatiba",
    information: "Mouvement citoyen pour le climat et la justice sociale.",
    website: 'alternatiba.eu',
    favicon: "Alternatiba favicon.jpg",
    altText: "Alternatiba website"
  },
  {   
    id: 200,
    position: [47.15047, -1.61055],
    category: Category.CAT1,
    title: "GIGNV - Alternatiba Nantes ",
    information: "Groupe d'intervention des grenouilles non violentes, organisateur d'actions et de formations.",
    website: 'www.facebook.com/GIGNV',
    favicon: "GIGNV favicon.png",
    altText: "GIGNV facebook page"
  },
  {   
    id: 201,
    position: [43.62375, 1.37325],
    category: Category.CAT1,
    title: "CNAAT ",
    information: "Collective Against Air Nuisances in the Toulouse Urban Area.",
    website: 'www.ccnaat.fr',
    favicon: "CNAAT favicon.png",
    altText: "CNAAT website"
  },
  {   
    id: 202,
    position: [49.00676, 2.55182],
    category: Category.CAT1,
    title: "Non au T4",
    information: "Après avoir obtenu l'abandon du Terminal 4 à Roissy, nous demandons la réduction du trafic aérien pour préserver la santé et le climat.",
    website: 'www.facebook.com/NonAuTerminal4',
    favicon: "Non au T4 favicon.jpg",
    altText: "Non au T4 facebook page"
  },
  {   
    id: 203,
    position: [44.82678, -0.71552],
    category: Category.CAT1,
    title: "EPBE - Environnement, Patrimoine Bourg Eysines",
    information: "The association was created  by residents of the town centre who are attached to the heritage of old Eysines and today brings together around a hundred members. All of them wish to preserve the soul and character of the old village.",
    website: 'www.sauvonslebourg.fr',
    favicon: "EPBE favicon.jpg",
    altText: "EPBE website"
  },
  {   
    id: 204,
    position: [50.56688, 3.10464],
    category: Category.CAT1,
    title: "NADA - Non a l'agrandissement de l'aéroport de Lille-Lesquin",
    information: "Association apartisane en lutte contre le projet climaticide d'agrandissement de l'aéroport de Lille.",
    website: 'nadalille.fr',
    favicon: "NADA favicon.png",
    altText: "NADA website"
  },
  {   
    id: 205,
    position: [50.03201, 8.55420],
    category: Category.CAT1,
    title: "BBI - BBI Bündnis der Bürgerinitiativen gegen Flughafenausbau",
    information: "The Alliance of Citizens' Initiatives No Airport Expansion Ban on Night Flights between 10pm and 6am is an alliance of more than 80 citizens' initiatives. The alliance aims to regain and maintain the quality of life of the people living in the Rhine-Main area.",
    website: 'www.flughafen-bi.de/unsereziele.htm',
    favicon: "BBI favicon.jpg",
    altText: "BBI website"
  },
  {   
    id: 206,
    position: [50.21852, 8.55557],
    category: Category.CAT1,
    title: "Initiative gegen Fluglärm im Vordertaunus",
    information: "The citizens' initiatives of Bad Soden, Eschborn, Kelkheim, Liederbach, Schwalbach and Sulzbach have joined forces in the initiative against aircraft noise in the Vordertaunus region.",
    website: 'www.fluglaerm-vordertaunus.de',
    favicon: "Vordertaunus favicon.png",
    altText: "Vordertaunus website"
  },
  {   
    id: 207,
    position: [53.63283, 9.99310],
    category: Category.CAT1,
    title: "BAW Hamburg und Schleswig-Holstein",
    information: "Citizens for the reduction of air traffic burdens in Hamburg and Schleswig-Holstein.",
    website: 'www.baw-fluglaerm.de/ueber-baw.html',
    favicon: "BAW favicon.jpg",
    altText: "BAW website"
  },
  {   
    id: 208,
    position: [50.13288, 8.91698],
    category: Category.CAT1,
    title: "IGF - Against aircraft noise and pollutants",
    information: "Our interest group wants to represent all citizens of the Main-Kinzig district and the city of Hanau who are exposed to aircraft noise and suffer health damage as a result, but also due to the effects of fine dust.",
    website: 'www.igfluglaerm.de',
    favicon: "IGF favicon.jpg",
    altText: "IGF website"
  },
  {   
    id: 209,
    position: [50.00123, 8.27625],
    category: Category.CAT1,
    title: "BISF - Initiative against aircraft noise Mainz",
    information: "Seit der Mitglieder Versammlung vom 15.08.2012 heisst der Verein Initiative gegen Fluglärm Mainz e.",
    website: 'www.fluglaerm-mainz.info',
    favicon: "BISF favicon.png",
    altText: "BISF website"
  },
  {   
    id: 210,
    position: [50.01393, 8.54061],
    category: Category.CAT1,
    title: "BIS - Burgerinitiative Sachsenhausen",
    information: "Burgerinitiative Sachsenhausen",
    website: 'ausbaugegner.info',
    favicon: "BIS Burgerinitiative Sachsenhausen favicon.png",
    altText: "BIS Burgerinitiative Sachsenhausen website"
  },
  {   
    id: 211,
    position: [49.30356, 6.83686],
    category: Category.CAT1,
    title: "BI gegen Flug - Bodenlarm und Umweltverschmutzung",
    information: "The main focus of the BI is the concentration of noise, pollution and risks in Saarland and neighboring Rhineland-Palatinate caused by military training flights.",
    website: 'bifluglaerm.de',
    favicon: "BI gegen Flug favicon.jpg",
    altText: "BI gegen Flug website"
  },
  {   
    id: 212,
    position: [51.41596, 12.22846],
    category: Category.CAT1,
    title: "Bundnis gegen Ausbau Lej",
    information: "We are jointly planning actions and public relations work for climate and health protection at Leipzig/Halle Cargo Airport.",
    website: 'www.buendnislej.com',
    favicon: "Bundnis gegen Ausbau Lej favicon.jpg",
    altText: "Bundnis gegen Ausbau Lej website"
  },
  {   
    id: 213,
    position: [49.49498, 11.07897],
    category: Category.CAT1,
    title: "Fluglarmschutzgemeinschaft Nurnberg und Umgebung",
    information: "We believe that the interests of the airport are currently being given too much consideration and that our needs for a healthy life and housing with an adequate quality of life are not being given enough consideration.",
    website: 'www.fluglaerm-nuernberg.de',
    favicon: "Default favicon.png",
    altText: "Fluglarmschutzgemeinschaft Nurnberg und Umgebung website"
  },
  {   
    id: 214,
    position: [52.28644, 7.96883],
    category: Category.CAT1,
    title: "Flughafen Munster-Osnabruck Ausstieg jetzt",
    information: "We are calling for Münster-Osnabrück Airport (FMO) to be closed down promptly. The airport is a financial bottomless pit.",
    website: 'fmo-ausstieg.jetzt',
    favicon: "Default favicon.png",
    altText: "Flughafen Munster-Osnabruck Ausstieg jetzt website"
  },
  {   
    id: 215,
    position: [51.28413, 6.76135],
    category: Category.CAT1,
    title: "Burger gegen Fluglarm Dusseldorf",
    information: "There is an effective remedy against the hellish noise above the heads of the residents of Düsseldorf Airport.",
    website: 'bgf-ev.de',
    favicon: "Burger gegen Fluglarm Dusseldorf favicon.png",
    altText: "Burger gegen Fluglarm Dusseldorf website"
  },
  {   
    id: 216,
    position: [43.43113, 5.22941],
    category: Category.CAT1,
    title: "Collectif Mistral",
    information: "L'association MISTRAL est une federation d'associations et CIQ qui luttent contre le bruit des avions.",
    website: 'www.facebook.com/collectifmistral',
    favicon: "Collectif Mistral favicon.jpg",
    altText: "Collectif Mistral facebook page"
  },
  {   
    id: 217,
    position: [43.43163, 5.20949],
    category: Category.CAT1,
    title: "CNSAAMP",
    information: "Association Contre les Nuisances Sonores de l'Aeroport Marseille-Provence.",
    website: 'www.facebook.com/groups/cnsaamp2023',
    favicon: "CNSAAMP favicon.jpg",
    altText: "CNSAAMP facebook group"
  },
  {   
    id: 218,
    position: [43.54481, 6.95295],
    category: Category.CAT1,
    title: "Stop aux nuisances sonores et écologiques de l'aeroport Cannes Mandelieu",
    information: "Ce groupe a pour objectif de lutter contre les nuisances sonores et ecologiques crees par les avions qui se posent a l'aeroport de Cannes Mandelieu.",
    website: 'www.facebook.com/groups/290922506947701',
    favicon: "Cannes Mandelieu favicon favicon.jpg",
    altText: "Cannes Mandelieu facebook group"
  },
  {   
    id: 219,
    position: [50.90102, 4.48109],
    category: Category.CAT1,
    title: "VZW Milieusteunpunt Huldenberg",
    information: "VZW Milieusteunpunt Huldenberg heeft tot doel de bescherming van het leefmilieu.",
    website: 'www.facebook.com/VZWmilieusteunpunt',
    favicon: "Milieusteunpunt Huldenberg favicon.png",
    altText: "Milieusteunpunt Huldenberg facebook page"
  },
  {   
    id: 220,
    position: [50.89834, 4.48237],
    category: Category.CAT1,
    title: "Burgerforum Luchthavenregio",
    information: "The Airport Region Citizen Forum advocates for a stable and legally secure framework which leads to sustainable development of the airport, without expansion.",
    website: 'www.facebook.com/burgerforumluchthavenregio',
    favicon: "Burgerforum Luchthavenregio favicon.jpg",
    altText: "Burgerforum Luchthavenregio facebook page"
  },
  {   
    id: 221,
    position: [50.89372, 4.48981],
    category: Category.CAT1,
    title: "AWACSS - Association of Wezembeek-Oppem against Aircraft Contraventions to Silence and Security",
    information: "To restore the quality of life that the inhabitants of Wezembeek-Oppem had before.",
    website: 'www.awacss.be',
    favicon: "AWACSS favicon.jpg",
    altText: "AWACSS website"
  },
  {   
    id: 222,
    position: [50.87358, 4.49203],
    category: Category.CAT1,
    title: "Wake Up Kraainem",
    information: "Against air pollution and the concentration of flights in Kraainem and the east of Brussels.",
    website: 'wakeupkraainem.be',
    favicon: "Wake Up Kraainem favicon.png",
    altText: "Wake Up Kraainem website"
  },
  {   
    id: 223,
    position: [52.32072, 4.73984],
    category: Category.CAT1,
    title: "Recht Op Bescherming Tegen Vliegtuighinder",
    information: "Residents of an airport have the right to a healthy living environment. With your help, we can put an end to the aircraft noise at Schiphol. Support our lawsuit.",
    website: 'www.beschermingtegenvliegtuighinder.nl',
    favicon: "Recht Op Bescherming Tegen Vliegtuighinder favicon.jpg",
    altText: "Recht Op Bescherming Tegen Vliegtuighinder website"
  },
  {   
    id: 224,
    position: [51.95441, 4.43980],
    category: Category.CAT1,
    title: "BTV Rotterdam",
    information: "The BTV-Rotterdam association is committed to combating the nuisance caused by Rotterdam The Hague Airport.",
    website: 'btv-rotterdam.nl',
    favicon: "BTV Rotterdam favicon.png",
    altText: "BTV Rotterdam website"
  },
  {   
    id: 225,
    position: [50.91261, 5.77129],
    category: Category.CAT1,
    title: "Alliantie Tegen Uitbreiding MAA",
    information: "Union of action groups against the expansion of Maastricht Aachen Airport.",
    website: 'stopgroeimaa.nl',
    favicon: "Alliantie Tegen Uitbreiding MAA favicon.jpg",
    altText: "Alliantie Tegen Uitbreiding MAA website"
  },
]



