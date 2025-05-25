// app/api/trips/route.js

export async function GET() {
  const trips = [
    {
      id: "flexi",
      name: "Flexi Trip With Tuk Tuk and Driver",
      triptype: "flexible",
      price: 70,
      pricePer: "day/vehicle",
      shortDescription:
        "Plan your own route and pace — perfect for digital nomads and adventurers who value freedom.",
      longDescription:
        "The Flexible Trip is designed for travelers who want to craft their own Sri Lankan journey. Rent a tuk-tuk per day and choose where to go, when to stop, and how fast you move. Whether you're exploring ancient ruins, remote surf spots, or hidden mountain trails, this option puts you in control. Includes full support, documentation, and route suggestions if needed.",
      image: "/flexiTripTukProduct.png",
      currency: "€",
    },
    {
      id: "4",
      name: "4 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 4,
      pricePer: "trip",
      shortDescription:
        "An unforgettable 4-day escape with a tuk-tuk and local driver — perfect for travelers short on time but big on adventure.",
      longDescription:
        "Make the most of your time in Sri Lanka with this compact, experience-packed 4-day tuk-tuk journey. Starting in Colombo, you'll explore handpicked highlights — from coastal towns and cultural treasures to scenic countryside routes. Your friendly local driver takes care of the road while you soak in the views, taste authentic food, and discover hidden gems. Ideal for solo travelers, couples, or small groups looking for a stress-free, immersive getaway with all the support you need.",
      image: "/4DayTripProduct.png ",
      currency: "€",
      routes: [
        {
          label: "South & West (Dec – Apr)",
          season: "December–April",
          direction: "South & West",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Climb the iconic Sigiriya Rock Fortress 🏯",
                "Visit Pidurangala Rock for stunning views 🏞️",
                "Explore local village life and safari at Minneriya 🐘 (optional)",
              ],
            },
            {
              day: 2,
              title: "Sigiriya to Kandy",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Kandy",
              highlights: [
                "Temple of the Tooth (Sri Dalada Maligawa) 🛕",
                "Scenic Kandy Lake 🏞️",
                "Cultural Dance Show and local markets 💃",
              ],
            },
            {
              day: 3,
              title: "Kandy to Nuwara Eliya (by train)",
              distance: "Train ride",
              travelTime: "4 hrs approx",
              stay: "Nuwara Eliya",
              highlights: [
                "One of the most beautiful train rides in the world 🚂",
                "Gregory Lake 🌊",
                "Strawberry farms and tea plantations 🍓🍃",
                "British-style town architecture 🏡",
              ],
            },
            {
              day: 4,
              title: "Nuwara Eliya to Negombo / Airport Drop",
              distance: "180 km",
              travelTime: "5 hrs",
              stay: "Drop-off",
              highlights: [
                "Visit a tea factory 🍵",
                "See waterfalls on the way 💧",
                "Return via scenic mountain roads 🏞️",
                "Drop-off at Negombo or Bandaranaike Airport (CMB) ✈️",
              ],
            },
          ],
        },
        {
          label: "East Coast (May – Sept)",
          season: "May–September",
          direction: "East Coast",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Climb the Sigiriya Rock Fortress (UNESCO) 🏯",
                "Sunset hike to Pidurangala Rock 🌄",
                "Optional: Village Safari or Minneriya National Park 🐘",
              ],
            },
            {
              day: 2,
              title: "Sigiriya to Trincomalee",
              distance: "110 km",
              travelTime: "2.5 hrs",
              stay: "Trincomalee",
              highlights: [
                "Relax at Nilaveli or Uppuveli Beach 🏖️",
                "Visit Koneswaram Temple 🛕",
                "Explore Fort Frederick 🏰",
                "Optional: Hot springs or snorkel at Pigeon Island 🐠",
              ],
            },
            {
              day: 3,
              title: "Trincomalee to Polonnaruwa",
              distance: "120 km",
              travelTime: "2.5 hrs",
              stay: "Polonnaruwa",
              highlights: [
                "Explore the Ancient City of Polonnaruwa (UNESCO) 🏛️",
                "Visit Gal Vihara, Royal Palace, and Sacred Quadrangle 🗿",
                "Bike or tuk tuk through ancient ruins 🚴",
              ],
            },
            {
              day: 4,
              title: "Polonnaruwa to Colombo or Airport (CMB)",
              distance: "200 km",
              travelTime: "5 hrs",
              stay: "Drop-off",
              highlights: [
                "Scenic drive through countryside 🌾",
                "Optional stop for local lunch or handicraft shopping 🛍️",
                "Drop-off at Bandaranaike Airport (CMB) or Colombo hotel ✈️",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "7",
      name: "7 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 7,
      pricePer: "trip",
      shortDescription:
        "A week-long island adventure starting in Colombo — ride worry-free with our expert local support.",
      longDescription:
        "Experience the ultimate freedom of exploring Sri Lanka over 7 unforgettable days. Start your journey in Colombo and cruise along coastal roads, through tea plantations, and into lush jungle landscapes. We provide reliable tuk-tuks, full support, and suggested routes so you can focus on the adventure. Ideal for first-time visitors looking for a week of exploration without stress.",
      image: "/editedtriptukProduct.png",
      currency: "€",
      routes: [
        {
          label: "South & West (Dec – Apr)",
          season: "December–April",
          direction: "South & West",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Sigiriya Rock Fortress 🏯",
                "Pidurangala Rock Viewpoint 🌄",
                "Optional: Village Safari or Minneriya National Park 🐘",
              ],
            },
            {
              day: 2,
              title: "Sigiriya to Kandy",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Kandy",
              highlights: [
                "Temple of the Tooth 🛕",
                "Kandy Lake 🏞️",
                "Cultural Dance Show and Local Markets 💃",
              ],
            },
            {
              day: 3,
              title: "Kandy to Nuwara Eliya (by Train)",
              distance: "Train ride",
              travelTime: "4 hrs approx",
              stay: "Nuwara Eliya",
              highlights: [
                "Gregory Lake 🌊",
                "Strawberry Farms 🍓",
                "Tea Plantations and British-style charm 🍃🏡",
              ],
            },
            {
              day: 4,
              title: "Nuwara Eliya to Ella (by Train)",
              distance: "Train ride",
              travelTime: "3.5 hrs",
              stay: "Ella (Night 1 of 2)",
              highlights: [
                "Continue scenic hill country journey 🚂",
                "Relax & enjoy the views 🌄",
              ],
            },
            {
              day: 5,
              title: "Explore Ella",
              distance: "",
              travelTime: "",
              stay: "Ella (Night 2 of 2)",
              highlights: [
                "Little Adam’s Peak Hike ⛰️",
                "Ravana Waterfall 💧",
                "Ella Rock Hiking 🥾",
                "Sri Lankan Cooking Class 🍛",
                "Ayurveda Massage 💆",
              ],
            },
            {
              day: 6,
              title: "Ella to Udawalawe Safari – Then to Tangalle",
              distance: "",
              travelTime: "",
              stay: "Tangalle",
              highlights: [
                "Early morning Udawalawe National Park Safari 🐘",
                "See elephants and wildlife 🦅",
                "Drive to Tangalle Beach 🏖️",
              ],
            },
            {
              day: 7,
              title: "Tangalle to Mirissa – Galle – Colombo/Negombo",
              distance: "",
              travelTime: "",
              stay: "Drop-off",
              highlights: [
                "Visit Coconut Tree Hill 🌴",
                "Explore Galle Fort (UNESCO) 🏰",
                "Drive to Colombo or Negombo for drop-off ✈️",
              ],
            },
          ],
        },
        {
          label: "East Coast (May – Sept)",
          season: "May–September",
          direction: "East Coast",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Arrival and transfer to Sigiriya 🚕",
                "Optional sunset at Pidurangala Rock 🌄",
                "Relax and prepare for the journey ahead 🛌",
              ],
            },
            {
              day: 2,
              title: "Sigiriya to Kandy",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Kandy (Night 1 of 2)",
              highlights: [
                "Morning climb to Sigiriya Rock Fortress 🏯",
                "Visit Dambulla Cave Temple 🛕",
                "Scenic drive to Kandy 🚗",
              ],
            },
            {
              day: 3,
              title: "Explore Kandy",
              distance: "",
              travelTime: "",
              stay: "Kandy (Night 2 of 2)",
              highlights: [
                "Visit the sacred Temple of the Tooth 🛕",
                "Walk around Kandy Lake 🌊",
                "Cultural Dance Show 💃",
                "Optional: Botanical Gardens or Local Markets 🪴🛍️",
              ],
            },
            {
              day: 4,
              title: "Kandy to Polonnaruwa",
              distance: "140 km",
              travelTime: "3.5 hrs",
              stay: "Polonnaruwa",
              highlights: [
                "Drive through scenic countryside 🌾",
                "Explore part of the Ancient City of Polonnaruwa 🏛️",
                "Sunset by Parakrama Samudra lake 🌅",
              ],
            },
            {
              day: 5,
              title: "Polonnaruwa to Trincomalee",
              distance: "120 km",
              travelTime: "2.5 hrs",
              stay: "Trincomalee (Night 1 of 2)",
              highlights: [
                "Morning visit to more ancient sites (optional) 🗿",
                "Drive to the East Coast 🚙",
                "Relax at Nilaveli or Uppuveli Beach 🏖️",
              ],
            },
            {
              day: 6,
              title: "Explore Trincomalee",
              distance: "",
              travelTime: "",
              stay: "Trincomalee (Night 2 of 2)",
              highlights: [
                "Visit Koneswaram Temple & Fort Frederick 🛕🏰",
                "Optional: Snorkeling at Pigeon Island or Boat Ride 🐠🛶",
                "Chill beach day & seafood dinner 🍤",
              ],
            },
            {
              day: 7,
              title:
                "Trincomalee to Sigiriya – Then Drive to Colombo or Airport",
              distance:
                "Trincomalee to Sigiriya: 2.5 hrs, Sigiriya to Colombo/Airport: 4.5 hrs",
              travelTime: "7 hrs total approx",
              stay: "Drop-off",
              highlights: [
                "Early morning departure from Trincomalee 🌅",
                "Optional: Quick stop or breakfast in Sigiriya 🥞",
                "Continue to Colombo or Bandaranaike Airport (CMB) ✈️",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "12",
      name: "12 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 12,
      pricePer: "trip",
      shortDescription:
        "Two weeks of immersive travel across Sri Lanka’s top destinations and hidden gems.",
      longDescription:
        "Take your time to dive deep into the heart of Sri Lanka. Our 12 Day Trip covers a curated route across coastlines, highlands, cultural heritage sites, and nature reserves. You’ll have ample time to relax, explore, and even get off the beaten path. With a tuk-tuk as your trusty ride and our team behind you, it’s the perfect mix of freedom and support for the curious traveler.",
      image: "/12DayTripProduct.png",
      currency: "€",
      routes: [
        {
          label: "South & West (Dec – Apr)",
          season: "December–April",
          direction: "South & West",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Arrival and transfer to Sigiriya",
                "Relax and enjoy the surroundings",
              ],
            },
            {
              day: 2,
              title: "Explore Sigiriya",
              stay: "Sigiriya",
              highlights: [
                "Sigiriya Rock Fortress 🏯",
                "Pidurangala Rock Viewpoint 🌄",
                "Optional: Village Safari or Minneriya National Park 🐘",
              ],
            },
            {
              day: 3,
              title: "Sigiriya to Kandy",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Kandy",
              highlights: [
                "Temple of the Tooth 🛕",
                "Kandy Lake 🏞️",
                "Local markets & Cultural Dance Show 💃",
              ],
            },
            {
              day: 4,
              title: "Kandy to Nuwara Eliya (by Scenic Train)",
              stay: "Nuwara Eliya",
              highlights: [
                "Gregory Lake 🌊",
                "Tea plantations 🍃",
                "Strawberry Farms 🍓",
                "British colonial charm 🏡",
              ],
            },
            {
              day: 5,
              title: "Nuwara Eliya to Ella (by Scenic Train)",
              travelTime: "3.5 hrs",
              stay: "Ella",
              highlights: [
                "Iconic hill country views 🚞",
                "Relax on arrival in Ella",
              ],
            },
            {
              day: 6,
              title: "Explore Ella",
              stay: "Ella",
              highlights: [
                "Little Adam’s Peak Hike 🥾",
                "Nine Arches Bridge 🌉",
                "Ella Rock (optional) 🏞️",
                "Ravana Waterfall 💧",
                "Cooking Class / Ayurveda Massage 🍲💆",
              ],
            },
            {
              day: 7,
              title: "Ella to Udawalawe",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Udawalawe",
              highlights: [
                "Relaxing drive to Udawalawe",
                "Optional evening safari or hotel leisure time",
              ],
            },
            {
              day: 8,
              title: "Morning Safari – Udawalawe to Mirissa",
              distance: "150 km",
              travelTime: "3.5 hrs",
              stay: "Mirissa",
              highlights: [
                "Early morning Udawalawe National Park Safari 🐘",
                "Spot elephants & wildlife",
                "Drive to Mirissa Beach 🏖️",
              ],
            },
            {
              day: 9,
              title: "Relax in Mirissa",
              stay: "Mirissa",
              highlights: [
                "Whale Watching (seasonal) 🐋",
                "Beach time & surfing 🏄",
                "Visit Coconut Tree Hill 🌴",
                "Parrot Rock viewpoint 🪺",
              ],
            },
            {
              day: 10,
              title: "Mirissa to Galle – Explore – Return to Mirissa",
              stay: "Mirissa",
              highlights: [
                "Day trip to Galle Fort (UNESCO) 🏰",
                "Explore colonial streets, cafes, and museums",
                "Sunset at Galle ramparts 🌅",
              ],
            },
            {
              day: 11,
              title: "Mirissa to Colombo/Negombo via Coastline",
              distance: "160 km",
              travelTime: "3.5 hrs",
              stay: "Colombo or Negombo",
              highlights: [
                "Scenic coastal drive 🚗",
                "Optional stop in Hikkaduwa or Bentota 🏖️",
              ],
            },
            {
              day: 12,
              title: "Departure",
              highlights: [
                "Relaxed morning ☀️",
                "Drop-off at airport or hotel ✈️",
              ],
            },
          ],
        },
        {
          label: "East Coast (May – Sept)",
          season: "May–September",
          direction: "East Coast",
          days: [
            {
              day: 1,
              title: "Airport Pickup – Colombo to Sigiriya",
              distance: "170 km",
              travelTime: "4.5 hrs",
              stay: "Sigiriya",
              highlights: [
                "Arrival in Sri Lanka and drive to Sigiriya",
                "Optional: Sunset at Pidurangala Rock 🌄",
                "Rest and prepare for your East Coast journey",
              ],
            },
            {
              day: 2,
              title: "Sigiriya to Trincomalee",
              distance: "110 km",
              travelTime: "2.5 hrs",
              stay: "Trincomalee",
              highlights: [
                "Visit Sigiriya Rock Fortress 🏯",
                "Scenic drive to Trincomalee 🚗",
                "Relax at Nilaveli or Uppuveli Beach 🏖️",
              ],
            },
            {
              day: 3,
              title: "Explore Trincomalee",
              stay: "Trincomalee",
              highlights: [
                "Koneswaram Temple & Fort Frederick 🛕",
                "Optional: Snorkeling at Pigeon Island or hot springs 🐠♨️",
                "Enjoy a beach day and seafood dinner 🍤",
              ],
            },
            {
              day: 4,
              title: "Trincomalee to Pasikuda",
              distance: "110 km",
              travelTime: "2.5 hrs",
              stay: "Pasikuda",
              highlights: [
                "Coastal drive south 🚗",
                "Check in and relax at the beach 🏖️",
                "Calm shallow waters, ideal for swimming 🌊",
              ],
            },
            {
              day: 5,
              title: "Explore Pasikuda",
              stay: "Pasikuda",
              highlights: [
                "Relax by the sea 🌅",
                "Optional cycling tour to nearby fishing villages 🚴",
                "Fresh seafood and beach sunset 🍤🌇",
              ],
            },
            {
              day: 6,
              title: "Pasikuda to Polonnaruwa",
              distance: "90 km",
              travelTime: "2 hrs",
              stay: "Polonnaruwa",
              highlights: [
                "Ancient City of Polonnaruwa (UNESCO) 🏛️",
                "Explore ruins, temples, and royal baths 🕍",
                "Sunset by Parakrama Samudra Lake 🌅",
              ],
            },
            {
              day: 7,
              title: "Polonnaruwa to Kandy",
              distance: "140 km",
              travelTime: "3.5 hrs",
              stay: "Kandy",
              highlights: [
                "Scenic countryside drive 🚗",
                "Temple of the Tooth 🛕",
                "Kandy Lake & local shops 🏞️🛍️",
                "Cultural Dance Show 💃",
              ],
            },
            {
              day: 8,
              title: "Kandy to Ella (by Train)",
              travelTime: "6 hrs",
              stay: "Ella",
              highlights: [
                "Scenic hill country train journey 🚆",
                "Pass tea plantations & waterfalls 🍃🌊",
                "Relax on arrival in Ella",
              ],
            },
            {
              day: 9,
              title: "Explore Ella",
              stay: "Ella",
              highlights: [
                "Hike Little Adam’s Peak or Ella Rock 🥾",
                "Visit Ravana Waterfall 💧",
                "Local cafes or Sri Lankan cooking class ☕🍛",
              ],
            },
            {
              day: 10,
              title: "Ella to Udawalawe",
              distance: "90 km",
              travelTime: "2.5 hrs",
              stay: "Udawalawe",
              highlights: [
                "Scenic drive through southern hills 🚗",
                "Optional afternoon safari or Elephant Transit Home 🐘",
              ],
            },
            {
              day: 11,
              title: "Udawalawe to Mirissa",
              distance: "120 km",
              travelTime: "3.5 hrs",
              stay: "Mirissa",
              highlights: [
                "Morning Udawalawe Safari 🐘",
                "Drive to south coast",
                "Relax on Mirissa Beach 🏖️",
              ],
            },
            {
              day: 12,
              title: "Mirissa to Colombo / Airport Drop-off",
              distance: "170 km",
              travelTime: "4.5 hrs",
              highlights: [
                "Optional stop at Galle Fort or Coconut Tree Hill 🏰🌴",
                "Drop-off at Colombo or CMB Airport ✈️",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "20",
      name: "20 Day Trip With Tuk Tuk and Driver",
      triptype: "prepland",
      price: 70 * 20,
      pricePer: "trip",
      shortDescription:
        "The ultimate Sri Lankan journey — perfect for explorers who want to see it all, at their own pace.",
      longDescription:
        "Our 20 Day Trip is the most complete way to experience Sri Lanka by tuk-tuk. From surfing the south coast to hiking in the Hill Country and discovering UNESCO World Heritage sites in the north, you’ll have the time and flexibility to do it all. Ideal for adventurous couples, long-term travelers, or creators looking to document an incredible journey. Includes route plans, full guidance, and 24/7 assistance.",
      image: "/20DayTripTukTuk.png",
      currency: "€",
    },
  ];

  return Response.json(trips);
}
