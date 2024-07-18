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
    position: [38.89504, -77.03654],
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
    favicon: 'Parafield favicon.jpg',
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
    favicon: 'CAGELFA favicon.jpg',
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
    favicon: "Stop aux nuisances de l'aéroport de Charleroi favicon.png",
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
  }
]