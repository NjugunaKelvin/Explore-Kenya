/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/Components/Navbar/Navbar';

const TopDestinations = () => {
  // Enhanced destinations data with more categories and details
  const destinations = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      category: "Wildlife",
      image: "/images/maasai-mara-wide.jpg",
      shortDesc: "The world-famous wildlife spectacle of the Great Migration",
      longDesc: "The Maasai Mara is Kenya's crown jewel of wildlife destinations, offering unparalleled game viewing throughout the year. The reserve is part of the larger Mara-Serengeti ecosystem that hosts the spectacular Great Migration from July to October when over 1.5 million wildebeest, zebras and gazelles cross the Mara River in dramatic fashion. Beyond the migration, the Mara boasts exceptional populations of lions, leopards, cheetahs, and all other members of the Big Five.",
      highlights: [
        { icon: "🦓", text: "Great Migration river crossings (July-Oct)" },
        { icon: "🦁", text: "Exceptional big cat sightings year-round" },
        { icon: "🎈", text: "Hot air balloon safaris at sunrise" },
        { icon: "👑", text: "Cultural visits to authentic Maasai villages" }
      ],
      bestTime: [
        { period: "Jul-Oct", note: "Great Migration season" },
        { period: "Jan-Feb", note: "Calving season, predator action" },
        { period: "Nov-Dec", note: "Fewer crowds, good rates" }
      ],
      travelTips: [
        "Stay at least 3 nights to fully experience the reserve",
        "Combine with Lake Nakuru or Amboseli for diversity",
        "Early morning game drives offer best sightings"
      ],
      relatedPages: [
        { name: "Safari Packages", link: "/safari-wildlife" },
        { name: "Migration Guide", link: "/safari-wildlife#migration" }
      ]
    },
    {
      id: 2,
      name: "Diani Beach",
      category: "Beach",
      image: "/images/diani-wide.jpg",
      shortDesc: "Pristine white sands and turquoise waters of Kenya's best beach",
      longDesc: "Regularly voted among Africa's top beaches, Diani's 17km stretch of powdery white sand and crystal-clear waters offers the perfect tropical getaway. The coral reef just offshore provides excellent snorkeling and diving opportunities, while the nearby Shimba Hills National Reserve offers safari experiences. Diani has developed into a complete beach destination with luxury resorts, beachfront villas, and a vibrant dining scene while maintaining its natural beauty.",
      highlights: [
        { icon: "🏝️", text: "Kisite-Mpunguti Marine Park snorkeling" },
        { icon: "🐬", text: "Dolphin watching and deep sea fishing" },
        { icon: "⛵", text: "Traditional dhow sailing trips" },
        { icon: "🛒", text: "40+ restaurants and beach bars" }
      ],
      bestTime: [
        { period: "Jan-Mar", note: "Hottest months, perfect beach weather" },
        { period: "Jul-Oct", note: "Cooler but still excellent conditions" },
        { period: "Avoid", note: "Apr-May (rainy season)" }
      ],
      travelTips: [
        "Combine with a safari for the ultimate Kenya experience",
        "Try kitesurfing at Kinondo or swimming with whale sharks",
        "Visit the Colobus Conservation center"
      ],
      relatedPages: [
        { name: "Beach Resorts", link: "/beaches-coastline" },
        { name: "Coastal Activities", link: "/beaches-coastline#activities" }
      ]
    },
    {
      id: 3,
      name: "Nairobi",
      category: "Urban",
      image: "/images/nairobi-wide.jpg",
      shortDesc: "Africa's only capital with a national park within city limits",
      longDesc: "Kenya's vibrant capital offers a unique blend of urban energy and wildlife encounters. Nairobi National Park, just 7km from the city center, provides game drives with a skyline backdrop. The city boasts excellent museums, a thriving arts scene, and some of Africa's best dining options. Karen Blixen's former home, the Giraffe Centre, and elephant orphanage make Nairobi much more than just a transit point for safaris.",
      highlights: [
        { icon: "🦒", text: "Giraffe Centre and Sheldrick Elephant Orphanage" },
        { icon: "🖼️", text: "Nairobi National Museum and art galleries" },
        { icon: "🛒", text: "Maasai Market for authentic crafts" },
        { icon: "🍴", text: "Thriving culinary scene from street food to fine dining" }
      ],
      bestTime: [
        { period: "Year-round", note: "Consistent temperatures" },
        { period: "Jan-Feb", note: "Driest months" },
        { period: "Jul-Aug", note: "Coolest months" }
      ],
      travelTips: [
        "Spend at least 2 days to experience Nairobi properly",
        "Take a guided walking tour of the city center",
        "Visit Karura Forest for nature in the city"
      ],
      relatedPages: [
        { name: "City Guide", link: "/urban-experiences" },
        { name: "Nairobi Attractions", link: "/urban-experiences#nairobi" }
      ]
    },
    {
      id: 4,
      name: "Amboseli National Park",
      category: "Wildlife",
      image: "/images/amboseli-wide.jpg",
      shortDesc: "Iconic views of Kilimanjaro with massive elephant herds",
      longDesc: "Amboseli's flat plains create the perfect stage for Africa's highest mountain, Kilimanjaro, which forms a breathtaking backdrop to wildlife viewing. The park is famous for its large elephant populations and researchers have studied these elephants for decades. Five different habitats range from dried-up lake beds to wetlands, each supporting different wildlife. Observation Hill offers panoramic views across the entire ecosystem.",
      highlights: [
        { icon: "🐘", text: "Some of Africa's largest elephant herds" },
        { icon: "🏔️", text: "Spectacular views of Mount Kilimanjaro" },
        { icon: "🦩", text: "Enormous flocks of birds in the wetlands" },
        { icon: "👥", text: "Cultural visits to Maasai communities" }
      ],
      bestTime: [
        { period: "Jun-Oct", note: "Dry season, best wildlife viewing" },
        { period: "Nov-Dec", note: "Short rains, lush scenery" },
        { period: "Jan-Feb", note: "Hot but good for photography" }
      ],
      travelTips: [
        "Stay at least 2 nights for best Kilimanjaro views",
        "Early morning is best for photography",
        "Visit the Amboseli Elephant Research Project"
      ],
      relatedPages: [
        { name: "Safari Lodges", link: "/safari-wildlife" },
        { name: "Elephant Experiences", link: "/safari-wildlife#elephants" }
      ]
    },
    {
      id: 5,
      name: "Lamu Archipelago",
      category: "Beach",
      image: "/images/lamu-wide.jpg",
      shortDesc: "Ancient Swahili culture meets pristine beaches",
      longDesc: "The Lamu Archipelago offers a journey back in time to traditional Swahili life. Lamu Old Town, a UNESCO World Heritage Site, is Kenya's oldest continually inhabited settlement with architecture dating back to the 12th century. With no cars on the islands, transportation is by donkey or dhow. The archipelago combines rich history with beautiful beaches and a relaxed pace of life that has attracted visitors for decades.",
      highlights: [
        { icon: "🏛️", text: "UNESCO-listed Lamu Old Town" },
        { icon: "⛵", text: "Traditional dhow sailing excursions" },
        { icon: "🏝️", text: "Shelly Beach and other pristine shores" },
        { icon: "🎉", text: "Lamu Cultural Festival (November)" }
      ],
      bestTime: [
        { period: "Jul-Oct", note: "Coolest months, best for exploration" },
        { period: "Jan-Feb", note: "Warm but comfortable" },
        { period: "Avoid", note: "Apr-May (rainy season)" }
      ],
      travelTips: [
        "Allow at least 3 days to experience Lamu properly",
        "Take a dhow trip to neighboring islands",
        "Visit the Lamu Museum and Swahili House Museum"
      ],
      relatedPages: [
        { name: "Coastal Culture", link: "/beaches-coastline" },
        { name: "Island Hopping", link: "/beaches-coastline#islands" }
      ]
    },
    {
      id: 6,
      name: "Mount Kenya",
      category: "Adventure",
      image: "/images/mount-kenya-wide.jpg",
      shortDesc: "Africa's second highest peak with equatorial glaciers",
      longDesc: "Mount Kenya's rugged peaks and diverse ecosystems make it one of Africa's most rewarding trekking destinations. The mountain has three main peaks - Batian, Nelion and Point Lenana (the latter accessible to trekkers). Seven distinct ecological zones range from rainforest to alpine desert, each with unique flora and fauna. The mountain is sacred to local communities and forms the heart of Kenya's water catchment system.",
      highlights: [
        { icon: "⛰️", text: "Trek to Point Lenana (4,985m)" },
        { icon: "❄️", text: "Equatorial glaciers (retreating)" },
        { icon: "🌿", text: "Unique alpine vegetation" },
        { icon: "🐘", text: "Elephants and buffalo in lower zones" }
      ],
      bestTime: [
        { period: "Jan-Feb", note: "Driest months, best conditions" },
        { period: "Jul-Oct", note: "Cooler but good for climbing" },
        { period: "Avoid", note: "Apr-May (rainy season)" }
      ],
      travelTips: [
        "Allow 4-5 days for the summit trek",
        "Acclimatize properly to avoid altitude sickness",
        "Hire an experienced guide through registered companies"
      ],
      relatedPages: [
        { name: "Trekking Guides", link: "/adventure" },
        { name: "Mountain Lodges", link: "/adventure#mountains" }
      ]
    }
  ];


  return (
    <>
    <Navbar />
      <Head>
        <title>Top Destinations in Kenya | Ultimate Travel Guide</title>
        <meta name="description" content="Discover Kenya's most spectacular destinations - from world-famous safaris to pristine beaches and vibrant cities. Expert travel guide with detailed information." />
        <meta name="keywords" content="Kenya top destinations, Maasai Mara, Diani Beach, Nairobi travel, Lamu Island, Mount Kenya, Amboseli, Kenya tourism" />
      </Head>

      <div className="min-h-screen bg-[#121212] text-gray-100">
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/kenya-hero-parallax.jpg')] bg-cover bg-center bg-fixed"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#F4A300]">Kenya's</span> Ultimate Destinations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From world-famous wildlife reserves to hidden coastal gems, discover the very best of Kenya's diverse landscapes and experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/safari-wildlife" className="bg-[#B61C1C] hover:bg-[#9E1919] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Safari Destinations
              </Link>
              <Link href="/beaches-coastline" className="bg-[#4FC3F7] hover:bg-[#3AA8D8] text-[#121212] font-bold py-3 px-6 rounded-lg transition duration-300">
                Beach Getaways
              </Link>
              <Link href="/urban-experiences" className="bg-[#F4A300] hover:bg-[#E69500] text-[#121212] font-bold py-3 px-6 rounded-lg transition duration-300">
                Urban Adventures
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-[#F4A300]">Kenya</span> Tops Bucket Lists
            </h2>
            <div className="w-24 h-1 bg-[#B61C1C] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Kenya offers an unparalleled diversity of experiences packed into one compact destination. Within a single trip, you can witness the Great Migration, relax on pristine beaches, explore vibrant cities, and trek through equatorial glaciers - all while experiencing Kenya's famous hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1E1E1E] p-6 rounded-xl border-l-4 border-[#F4A300]">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-[#F4A300] mr-2">✈️</span> Easy Accessibility
              </h3>
              <p className="text-gray-300">
                Multiple international flights daily to Nairobi, with good domestic connections to all major destinations. Visa-on-arrival available for most nationalities.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border-l-4 border-[#4FC3F7]">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-[#4FC3F7] mr-2">🌍</span> Diverse Experiences
              </h3>
              <p className="text-gray-300">
                Unique combination of wildlife, beaches, culture and adventure all within relatively short distances. Perfect for multi-center holidays.
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border-l-4 border-[#B61C1C]">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-[#B61C1C] mr-2">🏆</span> Award-Winning
              </h3>
              <p className="text-gray-300">
                Repeatedly recognized by World Travel Awards as Africa's leading safari and beach destination. Home to world-famous reserves and resorts.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Filter and Grid */}
        <section className="py-16 px-4 bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore <span className="text-[#F4A300]">Kenya's</span> Highlights
              </h2>
              <div className="w-24 h-1 bg-[#B61C1C] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Discover Kenya's most spectacular destinations across all categories
              </p>
              
            </div>

            {/* Destination Cards - New Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {destinations.map(destination => (
                <div 
                  key={destination.id}
                  className="bg-[#121212] rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <div className="flex justify-between items-end">
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            destination.category === "Wildlife" ? "bg-[#B61C1C]" :
                            destination.category === "Beach" ? "bg-[#4FC3F7]" :
                            destination.category === "Urban" ? "bg-[#F4A300] text-[#121212]" :
                            "bg-purple-600"
                          }`}>
                            {destination.category}
                          </span>
                          <h3 className="text-2xl font-bold mt-2">{destination.name}</h3>
                        </div>
                        <Link href={`/destinations/${destination.id}`} className="text-[#F4A300] hover:underline">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-lg mb-4">{destination.shortDesc}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-[#F4A300] mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {destination.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-xl mr-2">{highlight.icon}</span>
                            <span>{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#4FC3F7] mb-2">Best Time to Visit</h4>
                        <ul className="space-y-2">
                          {destination.bestTime.map((time, i) => (
                            <li key={i} className="flex">
                              <span className="text-[#F4A300] mr-2">•</span>
                              <span><strong>{time.period}:</strong> {time.note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-[#4FC3F7] mb-2">Travel Tips</h4>
                        <ul className="space-y-2">
                          {destination.travelTips.map((tip, i) => (
                            <li key={i} className="flex">
                              <span className="text-[#F4A300] mr-2">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {destination.relatedPages && (
                      <div className="mt-6 pt-4 border-t border-[#2A2A2A]">
                        <h4 className="font-bold text-[#B61C1C] mb-2">Related Pages</h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.relatedPages.map((page, i) => (
                            <Link 
                              key={i} 
                              href={page.link}
                              className="text-sm px-3 py-1 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-full transition"
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="bg-[#1E1E1E] rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Plan Your <span className="text-[#F4A300]">Perfect</span> Kenya Trip
                </h2>
                <div className="w-24 h-1 bg-[#B61C1C] mb-6"></div>
                <p className="text-lg mb-6">
                  Kenya offers endless possibilities for travel experiences. Whether you want to focus on wildlife, beaches, culture or adventure - or combine them all - our expert planners can help create your ideal itinerary.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#F4A300] text-xl mr-3">✓</div>
                    <div>
                      <h3 className="font-bold">Personalized Itineraries</h3>
                      <p className="text-gray-300">Tailored to your interests, budget and travel style</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#F4A300] text-xl mr-3">✓</div>
                    <div>
                      <h3 className="font-bold">Local Expertise</h3>
                      <p className="text-gray-300">Our Kenyan team knows the best places and times to visit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#F4A300] text-xl mr-3">✓</div>
                    <div>
                      <h3 className="font-bold">Seamless Logistics</h3>
                      <p className="text-gray-300">We handle all transfers, flights and accommodations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#121212] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Quick Trip Builder</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Trip Type</label>
                    <select className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2">
                      <option>Safari & Wildlife</option>
                      <option>Beach Holiday</option>
                      <option>Cultural Experience</option>
                      <option>Adventure</option>
                      <option>Combination</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <select className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2">
                      <option>3-5 days</option>
                      <option>1 week</option>
                      <option>10 days</option>
                      <option>2 weeks</option>
                      <option>3+ weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Travel Dates</label>
                    <input type="text" placeholder="Flexible or specific dates" className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2" />
                  </div>
                  <button className="w-full bg-[#F4A300] hover:bg-[#E69500] text-[#121212] font-bold py-3 px-4 rounded-lg transition duration-300">
                    Get Personalized Recommendations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#121212] to-[#B61C1C]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience <span className="text-[#F4A300]">Kenya</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start planning your dream trip with our expert travel consultants today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#F4A300] hover:bg-[#E69500] text-[#121212] font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Contact Our Experts
              </Link>
              <Link href="/inspiration" className="bg-transparent hover:bg-[#1E1E1E] border-2 border-[#F4A300] text-[#F4A300] font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Get Travel Inspiration
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopDestinations;