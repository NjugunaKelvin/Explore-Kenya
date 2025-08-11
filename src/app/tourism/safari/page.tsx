/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from '@/Components/Navbar/Navbar';

const SafariWildlife = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Enhanced hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Kenya's Untamed Wilderness",
      subtitle: "Where the Circle of Life Unfolds Before Your Eyes",
      description: "Experience the raw beauty of Africa's most iconic landscapes and witness nature's greatest spectacles",
      image: "/images/tourism/h1.jpeg",
      cta: "Plan Your Safari",
      link: "#planning",
      overlay: "rgba(0, 0, 0, 0.7)"
    },
    {
      id: 2,
      title: "The Great Migration",
      subtitle: "Nature's Most Spectacular Event",
      description: "Marvel at over 1.5 million wildebeest crossing the Mara River in a breathtaking display of survival",
      image: "/images/tourism/h2.jpeg",
      cta: "Migration Packages",
      link: "#migration",
      overlay: "rgba(0, 0, 0, 0.7)"
    },
    {
      id: 3,
      title: "Conservation Pioneers",
      subtitle: "Kenya's Wildlife Protection Legacy",
      description: "Discover how Kenya leads Africa in wildlife conservation and community-based protection programs",
      image: "/images/tourism/h3.jpeg",
      cta: "Support Conservation",
      link: "#conservation",
      overlay: "rgba(0, 0, 0, 0.7)"
    }
  ];

  // Auto-rotate slides with pause on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const slider = document.getElementById('hero-slider');
    
    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
      }, 6000);
    };
    
    startInterval();
    
    if (slider) {
      slider.addEventListener('mouseenter', () => clearInterval(interval));
      slider.addEventListener('mouseleave', startInterval);
    }
    
    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('mouseenter', () => clearInterval(interval));
        slider.removeEventListener('mouseleave', startInterval);
      }
    };
  }, [heroSlides.length]);

  const nationalParks = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      location: "Southwest Kenya",
      size: "1,510 km²",
      established: "1961",
      highlight: "Great Migration (July-Oct)",
      description: "The crown jewel of African safari destinations, featuring the highest density of predators in Africa and the spectacular wildebeest river crossings.",
      image: "/images/tourism/maasai-mara.jpeg",
      landscape: "Rolling savannah, acacia woodlands, and the Mara River",
      bestTime: "Year-round, but prime July-October",
      animals: ["Lion", "Cheetah", "Elephant", "Wildebeest", "Zebra", "Hippo", "Crocodile"],
      specialExperience: "Hot air balloon safaris at dawn",
      unesco: true,
      rating: 5
    },
    {
      id: 2,
      name: "Amboseli National Park",
      location: "Southern Kenya",
      size: "392 km²",
      established: "1974",
      highlight: "Elephants with Kilimanjaro views",
      description: "Famous for its large elephant herds and stunning views of Mount Kilimanjaro, Africa's highest peak, just across the border in Tanzania.",
      image: "/images/tourism/amboseli.jpeg",
      landscape: "Open plains, acacia woodland, swamps, and the dried-up Lake Amboseli",
      bestTime: "June-Oct & Jan-Feb (Dry seasons)",
      animals: ["Elephant", "Lion", "Giraffe", "Zebra", "Hippo", "Hyena"],
      specialExperience: "Observation Hill for panoramic views",
      unesco: false,
      rating: 4.5
    },
    {
      id: 3,
      name: "Tsavo East & West",
      location: "Southeastern Kenya",
      size: "13,747 km² (combined)",
      established: "1948",
      highlight: "Red elephants & diverse landscapes",
      description: "One of the world's largest game sanctuaries, famous for its 'red' elephants dusted in volcanic soil and the dramatic Mzima Springs.",
      image: "/images/tourism/tsavo.jpeg",
      landscape: "Semi-arid grasslands, savannah, riverine vegetation, and volcanic hills",
      bestTime: "June-Oct & Jan-Feb",
      animals: ["Elephant", "Rhino", "Lion", "Buffalo", "Giraffe", "Leopard"],
      specialExperience: "Underwater hippo viewing at Mzima Springs",
      unesco: false,
      rating: 4
    },
    {
      id: 4,
      name: "Samburu National Reserve",
      location: "Northern Kenya",
      size: "165 km²",
      established: "1985",
      highlight: "Unique northern species",
      description: "Home to rare species not found in southern parks, including the Grevy's zebra, Somali ostrich, and gerenuk (giraffe-necked antelope).",
      image: "/images/tourism/samburu.jpeg",
      landscape: "Arid scrubland with the Ewaso Ng'iro river providing vital water",
      bestTime: "Year-round",
      animals: ["Grevy's Zebra", "Gerenuk", "Somali Ostrich", "Elephant", "Lion"],
      specialExperience: "Cultural visits to Samburu villages",
      unesco: false,
      rating: 4
    },
    {
      id: 5,
      name: "Lake Nakuru National Park",
      location: "Great Rift Valley",
      size: "188 km²",
      established: "1961",
      highlight: "Flamingo spectacle & rhinos",
      description: "Famous for its millions of flamingos that turn the lake pink, and one of the best places to see both black and white rhinos.",
      image: "/images/tourism/nakuru.jpeg",
      landscape: "Alkaline lake surrounded by wooded grasslands and cliffs",
      bestTime: "Year-round",
      animals: ["Flamingo", "Rhino", "Lion", "Leopard", "Giraffe"],
      specialExperience: "Baboon Cliff viewpoint",
      unesco: true,
      rating: 4
    },
    {
      id: 6,
      name: "Meru National Park",
      location: "Eastern Kenya",
      size: "870 km²",
      established: "1968",
      highlight: "Wild & less visited",
      description: "Made famous by Joy Adamson's book 'Born Free', this lush park offers a more rugged, authentic safari experience with fewer visitors.",
      image: "/images/tourism/meru.jpeg",
      landscape: "Diverse from savannah to riverine forests and swamps",
      bestTime: "June-Sep & Jan-Feb",
      animals: ["Elephant", "Lion", "Cheetah", "Hippo", "Crocodile"],
      specialExperience: "Visit to Elsa the Lioness' grave",
      unesco: false,
      rating: 4
    }
  ];

  // Enhanced wildlife data
  const wildlifeCategories = [
    {
      id: 1,
      name: "The Big Five",
      icon: "🦁",
      description: "Kenya offers some of the best opportunities to see all five of Africa's most iconic animals in their natural habitat.",
      animals: [
        { 
          name: "African Lion", 
          scientific: "Panthera leo", 
          image: "/images/tourism/lion.jpeg", 
          status: "Vulnerable",
          population: "~2,500 in Kenya",
          facts: [
            "Males can weigh up to 250kg",
            "Pride sizes average 15 members in Kenya",
            "Spend 16-20 hours daily resting"
          ]
        },
        { 
          name: "African Leopard", 
          scientific: "Panthera pardus", 
          image: "/images/tourism/leopard.jpeg", 
          status: "Vulnerable",
          population: "~1,000 in Kenya",
          facts: [
            "Most elusive of the Big Five",
            "Can drag prey twice their weight up trees",
            "Mainly nocturnal hunters"
          ]
        },
        { 
          name: "African Elephant", 
          scientific: "Loxodonta africana", 
          image: "/images/tourism/elephant.jpeg", 
          status: "Endangered",
          population: "~35,000 in Kenya",
          facts: [
            "Largest land animal (up to 6,000kg)",
            "Consumes 150-300kg of food daily",
            "Complex social structures led by matriarchs"
          ]
        },
        { 
          name: "African Buffalo", 
          scientific: "Syncerus caffer", 
          image: "/images/tourism/buffalo.jpeg", 
          status: "Least Concern",
          population: "~40,000 in Kenya",
          facts: [
            "Considered the most dangerous of Big Five",
            "Live in herds of 50-500 individuals",
            "Have excellent memory and will retaliate"
          ]
        },
        { 
          name: "Black Rhino", 
          scientific: "Diceros bicornis", 
          image: "/images/tourism/rhino.jpeg", 
          status: "Critically Endangered",
          population: "~800 in Kenya",
          facts: [
            "Smaller but more aggressive than white rhino",
            "Prehensile lip for browsing",
            "Can reach speeds of 55km/h"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Great Migration Stars",
      icon: "🦓",
      description: "The annual migration involves over 2 million animals moving in a continuous cycle through the Serengeti and Maasai Mara ecosystems.",
      animals: [
        { 
          name: "Blue Wildebeest", 
          scientific: "Connochaetes taurinus", 
          image: "/images/tourism/wildbeest.jpeg", 
          status: "Least Concern",
          population: "~1.5 million in migration",
          facts: [
            "Cover 800-1,000km annually",
            "Calving season sees 8,000 born daily",
            "Can run at 80km/h"
          ]
        },
        { 
          name: "Burchell's Zebra", 
          scientific: "Equus quagga burchellii", 
          image: "/images/tourism/zebra.jpg", 
          status: "Near Threatened",
          population: "~300,000 in migration",
          facts: [
            "Stripes are unique like fingerprints",
            "Form protective circles around young",
            "Migrate alongside wildebeest"
          ]
        },
        { 
          name: "Thomson's Gazelle", 
          scientific: "Eudorcas thomsonii", 
          image: "/images/tourism/gazelle.jpg", 
          status: "Least Concern",
          population: "~500,000 in migration",
          facts: [
            "Can reach speeds of 90km/h",
            "Perform 'stotting' jumps when alarmed",
            "Primary prey for cheetahs"
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Kenya's Special Species",
      icon: "🦒",
      description: "These unique animals are found predominantly or exclusively in Kenya and neighboring regions.",
      animals: [
        { 
          name: "Grevy's Zebra", 
          scientific: "Equus grevyi", 
          image: "/images/tourism/grevys-zebra.jpg", 
          status: "Endangered",
          population: "~3,000 worldwide",
          facts: [
            "Largest and most endangered zebra",
            "Narrower stripes than plains zebra",
            "90% population in northern Kenya"
          ]
        },
        { 
          name: "Reticulated Giraffe", 
          scientific: "Giraffa reticulata", 
          image: "/images/tourism/giraffe.jpg", 
          status: "Vulnerable",
          population: "~16,000 worldwide",
          facts: [
            "Most distinct giraffe pattern",
            "Northern Kenya stronghold",
            "18-foot tall adults"
          ]
        },
        { 
          name: "Gerenuk", 
          scientific: "Litocranius walleri", 
          image: "/images/tourism/gerenuk.jpg", 
          status: "Near Threatened",
          population: "Declining",
          facts: [
            "Means 'giraffe-necked' in Somali",
            "Stand on hind legs to browse",
            "Can go without drinking water"
          ]
        },
        { 
          name: "Somali Ostrich", 
          scientific: "Struthio molybdophanes", 
          image: "/images/tourism/somali-ostrich.jpg", 
          status: "Vulnerable",
          population: "Declining",
          facts: [
            "Blue neck and thighs (vs pink in common ostrich)",
            "Fastest running bird (70km/h)",
            "Largest eggs of any bird"
          ]
        }
      ]
    }
  ];

  // Enhanced safari packages
  const safariPackages = [
    {
      id: 1,
      name: "Classic Big Five Safari",
      duration: "7 Days / 6 Nights",
      destinations: ["Maasai Mara", "Lake Nakuru", "Amboseli"],
      price: "From $2,800 per person",
      season: "Year-round",
      groupSize: "2-6 travelers",
      highlights: [
        "3 game drives in Maasai Mara",
        "Rhino tracking in Nakuru",
        "Elephant research visit in Amboseli",
        "Cultural Maasai village visit"
      ],
      accommodations: "Luxury tented camps & lodges",
      image: "/images/tourism/package-1.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Great Migration Special",
      duration: "5 Days / 4 Nights",
      destinations: ["Maasai Mara"],
      price: "From $2,200 per person",
      season: "July-October only",
      groupSize: "2-8 travelers",
      highlights: [
        "Full-day river crossing viewing",
        "Optional balloon safari add-on",
        "Photography specialist guide",
        "Migration pattern briefing"
      ],
      accommodations: "Mobile migration camp",
      image: "/images/tourism/package-2.jpg",
      featured: true
    },
    {
      id: 3,
      name: "Northern Frontier Adventure",
      duration: "10 Days / 9 Nights",
      destinations: ["Samburu", "Laikipia", "Meru"],
      price: "From $4,800 per person",
      season: "Year-round",
      groupSize: "2-4 travelers",
      highlights: [
        "Rare species tracking",
        "Walking safari with armed guard",
        "Community conservancy visits",
        "Night game drives"
      ],
      accommodations: "Boutique eco-lodges",
      image: "/images/tourism/package-3.jpg",
      featured: true
    },
    {
      id: 4,
      name: "Family Safari Adventure",
      duration: "8 Days / 7 Nights",
      destinations: ["Nairobi", "Sweetwaters", "Maasai Mara"],
      price: "From $3,500 per family",
      season: "School holidays",
      groupSize: "Families with children 6+",
      highlights: [
        "Child-friendly game drives",
        "Junior ranger program",
        "Animal orphanage visit",
        "Cultural activities for kids"
      ],
      accommodations: "Family-friendly lodges",
      image: "/images/tourism/package-family.jpg",
      featured: false
    }
  ];

  // Conservation organizations
  const conservationOrgs = [
    {
      id: 1,
      name: "Kenya Wildlife Service",
      logo: "/images/tourism/kws-logo.png",
      focus: "National park management & anti-poaching",
      achievements: "Reduced elephant poaching by 80% since 2013",
      link: "https://www.kws.go.ke"
    },
    {
      id: 2,
      name: "Sheldrick Wildlife Trust",
      logo: "/images/tourism/sheldrick-logo.png",
      focus: "Elephant & rhino orphan rescue",
      achievements: "Raised over 300 orphaned elephants",
      link: "https://www.sheldrickwildlifetrust.org"
    },
    {
      id: 3,
      name: "Lion Guardians",
      logo: "/images/tourism/lion-guardians-logo.png",
      focus: "Human-lion conflict resolution",
      achievements: "Reduced lion killings by 90% in project areas",
      link: "https://www.lionguardians.org"
    },
    {
      id: 4,
      name: "Northern Rangelands Trust",
      logo: "/images/tourism/nrt-logo.png",
      focus: "Community conservancies",
      achievements: "Supports 39 community conservancies",
      link: "https://www.nrt-kenya.org"
    }
  ];

  return (
    <>
      <Head>
        <title>Safari & Wildlife | Kenya's Premier Wildlife Experiences</title>
        <meta name="description" content="Discover Kenya's spectacular wildlife, from the Big Five to the Great Migration. Explore national parks, safari packages, and conservation efforts." />
        <meta name="keywords" content="Kenya safari, Maasai Mara, Great Migration, Big Five, wildlife conservation, African animals" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Urbanist:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        h1, h2, h3, h4 {
          font-family: 'Caprasimo', cursive;
          letter-spacing: 0.03em;
          font-weight: 400;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #121212;
          color: white;
        }
        .subtitle {
          font-family: 'Urbanist', sans-serif;
          font-weight: 600;
        }
        .body-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <Navbar />

      <div className="bg-[#121212] text-white">
        {/* Enhanced Hero Section */}
        <section id="hero-slider" className="relative h-screen min-h-[800px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div 
                className="absolute inset-0"
                style={{ background: slide.overlay }}
              ></div>
              <Image 
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-center px-4 max-w-4xl"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h1 className="text-4xl md:text-6xl font-normal mb-4 text-white tracking-tight">{slide.title}</h1>
                  <p className="text-2xl md:text-3xl mb-4 subtitle text-[#F5C518]">{slide.subtitle}</p>
                  <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto body-text">{slide.description}</p>
                  <Link 
                    href={slide.link}
                    className="inline-block bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg subtitle"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${index === currentSlide ? 'bg-[#F5C518] w-6' : 'bg-white bg-opacity-50 hover:bg-opacity-100'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <button 
              className="text-white animate-bounce"
              onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="introduction" className="py-20 px-4 bg-[#1E1E1E]">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                <span className="text-[#F5C518]">Kenya's</span> Wildlife Kingdom
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                Kenya is a wildlife paradise boasting over 25,000 animal species, including more than 1,000 bird species. 
                As the birthplace of safari, Kenya offers some of the most authentic and diverse wildlife experiences on the planet, 
                from the Great Migration to rare northern species found nowhere else.
              </p>
            </div>
            
            <div 
              className="grid md:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#121212] p-8 rounded-xl border-l-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">🦁</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Iconic Species</h3>
                <p className="text-gray-300 body-text">
                  Kenya protects all of Africa's Big Five and hosts the world's largest concentration of flamingos at Lake Nakuru.
                </p>
              </div>
              <div className="bg-[#121212] p-8 rounded-xl border-l-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Diverse Habitats</h3>
                <p className="text-gray-300 body-text">
                  From snow-capped mountains to coral reefs, Kenya's varied ecosystems support extraordinary biodiversity.
                </p>
              </div>
              <div className="bg-[#121212] p-8 rounded-xl border-l-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Conservation Leader</h3>
                <p className="text-gray-300 body-text">
                  Kenya banned hunting in 1977 and has since pioneered community-based conservation models across Africa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* National Parks Section */}
        <section id="parks" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                Kenya's <span className="text-[#F5C518]">Premier Wildlife</span> Sanctuaries
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                Kenya's protected areas cover approximately 8% of the country's land area. These parks and reserves represent 
                the most successful wildlife conservation areas in Africa, offering unparalleled safari experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nationalParks.map((park, index) => (
                <div 
                  key={park.id}
                  className="relative overflow-hidden rounded-xl shadow-2xl group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-80">
                    <Image 
                      src={park.image}
                      alt={park.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {park.unesco && (
                      <div className="absolute top-4 right-4 bg-[#F5C518] text-[#121212] text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        UNESCO
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{park.name}</h3>
                    <div className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">{park.rating}/5</span>
                      <span className="mx-2">•</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{park.location}</span>
                    </div>
                    <p className="text-gray-200 mb-4 line-clamp-2 body-text">{park.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {park.animals.slice(0, 5).map((animal, index) => (
                        <span key={index} className="bg-black bg-opacity-50 text-white px-3 py-1 text-xs rounded-full">
                          {animal}
                        </span>
                      ))}
                      {park.animals.length > 5 && (
                        <span className="bg-black bg-opacity-50 text-white px-3 py-1 text-xs rounded-full">
                          +{park.animals.length - 5}
                        </span>
                      )}
                    </div>
                    <Link 
                      href={`/tourism/parks/${park.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-[#F5C518] font-medium hover:text-[#e6b800] transition-colors"
                    >
                      Explore Park
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="text-center mt-16"
              data-aos="fade-up"
            >
              <Link 
                href="/tourism/national-parks" 
                className="inline-flex items-center bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg subtitle"
              >
                Discover All 23 National Parks
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section id="wildlife" className="py-20 px-4 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                Meet Kenya's <span className="text-[#F5C518]">Wildlife Stars</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                From the mighty elephants to the elusive leopard, Kenya's wildlife represents some of the most iconic and 
                endangered species on Earth. Learn about their behaviors, habitats, and conservation status.
              </p>
            </div>

            {wildlifeCategories.map((category, catIndex) => (
              <div 
                key={category.id}
                className="mb-20"
                data-aos="fade-up"
                data-aos-delay={catIndex * 100}
              >
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4 text-[#F5C518]">{category.icon}</span>
                  <div>
                    <h3 className="text-3xl font-normal text-white tracking-tight">{category.name}</h3>
                    <p className="text-gray-400 body-text">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.animals.map((animal, animalIndex) => (
                    <div 
                      key={animal.name}
                      className="bg-[#121212] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={animalIndex * 50 + catIndex * 100}
                    >
                      <div className="relative h-64">
                        <Image 
                          src={animal.image}
                          alt={animal.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-xl font-bold text-white">{animal.name}</h4>
                          <p className="text-sm text-gray-300 body-text">{animal.scientific}</p>
                        </div>
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                          animal.status === 'Critically Endangered' ? 'bg-red-600 text-white' :
                          animal.status === 'Endangered' ? 'bg-orange-500 text-white' :
                          animal.status === 'Vulnerable' ? 'bg-[#F5C518] text-[#121212]' : 'bg-green-500 text-white'
                        }`}>
                          {animal.status}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400 body-text">Population in Kenya:</span>
                            <span className="text-sm font-medium text-white body-text">{animal.population}</span>
                          </div>
                          <div className="h-1 bg-[#1E1E1E] rounded-full">
                            <div 
                              className={`h-1 rounded-full ${
                                animal.status === 'Critically Endangered' ? 'bg-red-600' :
                                animal.status === 'Endangered' ? 'bg-orange-500' :
                                animal.status === 'Vulnerable' ? 'bg-[#F5C518]' : 'bg-green-500'
                              }`}
                              style={{ width: animal.status === 'Critically Endangered' ? '20%' : 
                                       animal.status === 'Endangered' ? '40%' : 
                                       animal.status === 'Vulnerable' ? '60%' : '80%' }}
                            ></div>
                          </div>
                        </div>
                        
                        <h5 className="font-bold text-white mb-2 subtitle">Interesting Facts:</h5>
                        <ul className="space-y-2 mb-4">
                          {animal.facts.map((fact, index) => (
                            <li key={index} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-300 text-sm body-text">{fact}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          href={`/wildlife/${animal.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-sm text-[#F5C518] hover:text-[#e6b800] font-medium"
                        >
                          Learn more about {animal.name.split(' ')[0]}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safari Packages Section */}
        <section id="packages" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                <span className="text-[#F5C518]">Tailored</span> Safari Experiences
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                From luxury lodges to adventurous camping safaris, we offer carefully curated packages to suit every 
                traveler's style, budget, and wildlife interests.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safariPackages.map((pkg, index) => (
                <div 
                  key={pkg.id}
                  className={`rounded-xl overflow-hidden shadow-2xl ${pkg.featured ? 'lg:col-span-2' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-64">
                    <Image 
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    {pkg.featured && (
                      <div className="absolute top-4 left-4 bg-[#F5C518] text-[#121212] text-xs font-bold px-3 py-1 rounded-full">
                        Featured Package
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                      <p className="text-[#F5C518] font-medium body-text">{pkg.price}</p>
                    </div>
                  </div>
                  <div className="bg-[#1E1E1E] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-300 body-text">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {pkg.duration}
                      </span>
                      <span className="text-sm text-gray-300 body-text">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {pkg.groupSize}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-white mb-2 subtitle">Destinations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.destinations.map((dest, index) => (
                          <span key={index} className="bg-[#121212] text-gray-300 px-3 py-1 text-sm rounded-full body-text">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-2 subtitle">Highlights:</h4>
                      <ul className="space-y-2">
                        {pkg.highlights.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300 body-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 body-text">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        {pkg.accommodations}
                      </span>
                      <button className="bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-2 px-6 rounded-lg transition-colors duration-300 subtitle">
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="text-center mt-16"
              data-aos="fade-up"
            >
              <Link 
                href="/safari-packages" 
                className="inline-flex items-center bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg subtitle"
              >
                Browse All Safari Packages
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Great Migration Section */}
        <section id="migration" className="py-20 px-4 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
                data-aos="fade-right"
              >
                <Image 
                  src="/images/tourism/migration.jpg"
                  alt="Great Migration in Maasai Mara"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black bg-opacity-60 p-4 rounded-lg">
                    <p className="text-white italic body-text">"The greatest wildlife spectacle on Earth" - National Geographic</p>
                  </div>
                </div>
              </div>
              
              <div 
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                  The <span className="text-[#F5C518]">Great Migration</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mb-8"></div>
                <p className="text-lg text-gray-300 mb-6 body-text">
                  Witness one of nature's most incredible events as over 1.5 million wildebeest, 400,000 zebra, and 
                  200,000 gazelle complete their annual circular migration through the Serengeti and Maasai Mara ecosystems.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#F5C518] rounded-full p-2 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#121212]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 subtitle">River Crossings</h4>
                      <p className="text-gray-300 body-text">
                        The most dramatic moment as herds brave crocodile-infested rivers in chaotic, thrilling crossings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#F5C518] rounded-full p-2 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#121212]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 subtitle">Predator Action</h4>
                      <p className="text-gray-300 body-text">
                        Lions, cheetahs, and hyenas follow the herds, creating unparalleled predator-prey interactions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#F5C518] rounded-full p-2 mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#121212]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 subtitle">Best Viewing Times</h4>
                      <p className="text-gray-300 body-text">
                        July-October: Mara River crossings <br />
                        December-March: Calving season in Serengeti
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/great-migration" 
                  className="inline-flex items-center bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-3 px-8 rounded-lg transition-colors duration-300 subtitle"
                >
                  Migration Safari Packages
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section id="conservation" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                <span className="text-[#F5C518]">Conservation</span> Leadership
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                Kenya has been at the forefront of wildlife conservation in Africa, implementing groundbreaking policies 
                and community-based approaches that have become models for the continent.
              </p>
            </div>

            <div 
              className="grid md:grid-cols-2 gap-12 mb-16"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-[#F5C518] pb-2">Kenya's Conservation Milestones</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-[#F5C518] text-[#121212] font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 subtitle">1977 Hunting Ban</h4>
                      <p className="text-gray-300 body-text">
                        Kenya became the first African country to ban all hunting, shifting focus to photographic tourism.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-[#F5C518] text-[#121212] font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 subtitle">1989 Ivory Burn</h4>
                      <p className="text-gray-300 body-text">
                        President Moi burned 12 tons of ivory, sparking global awareness about the ivory trade.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-[#F5C518] text-[#121212] font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 subtitle">Community Conservancies</h4>
                      <p className="text-gray-300 body-text">
                        Pioneered community-owned conservancies that benefit both wildlife and local people.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-[#F5C518] text-[#121212] font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 subtitle">2016 Ivory Ban</h4>
                      <p className="text-gray-300 body-text">
                        Kenya destroyed its entire ivory stockpile and pushed for global ivory trade bans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-[#1E1E1E] rounded-xl p-8 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-[#F5C518] pb-2">By The Numbers</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#121212] p-6 rounded-lg">
                    <div className="text-[#F5C518] text-4xl font-bold mb-2">80%</div>
                    <p className="text-gray-300 body-text">Reduction in elephant poaching since 2013</p>
                  </div>
                  <div className="bg-[#121212] p-6 rounded-lg">
                    <div className="text-[#F5C518] text-4xl font-bold mb-2">160+</div>
                    <p className="text-gray-300 body-text">Community conservancies protecting wildlife</p>
                  </div>
                  <div className="bg-[#121212] p-6 rounded-lg">
                    <div className="text-[#F5C518] text-4xl font-bold mb-2">35,000</div>
                    <p className="text-gray-300 body-text">Elephants currently in Kenya (up from 16,000 in 1989)</p>
                  </div>
                  <div className="bg-[#121212] p-6 rounded-lg">
                    <div className="text-[#F5C518] text-4xl font-bold mb-2">800+</div>
                    <p className="text-gray-300 body-text">Black rhinos (2nd largest population after Namibia)</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="mb-16"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-8 text-white text-center border-b border-[#F5C518] pb-2">Key Conservation Organizations</h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {conservationOrgs.map((org, index) => (
                  <div 
                    key={org.id}
                    className="bg-[#1E1E1E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-4 rounded-lg w-32 h-24 flex items-center justify-center">
                        <Image 
                          src={org.logo}
                          alt={org.name}
                          width={120}
                          height={80}
                          className="object-contain max-h-16"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white text-center mb-2">{org.name}</h4>
                    <p className="text-gray-400 text-sm text-center body-text mb-3">{org.focus}</p>
                    <p className="text-[#F5C518] text-sm text-center font-medium mb-4 body-text">{org.achievements}</p>
                    <Link 
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm text-white bg-[#F5C518] hover:bg-[#e6b800] py-2 px-4 rounded transition-colors subtitle"
                    >
                      Visit Website
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="bg-gradient-to-r from-[#1E1E1E] to-[#121212] rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative border border-[#F5C518]"
              data-aos="fade-up"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#F5C518] rounded-full opacity-10"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#F5C518] rounded-full opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">How You Can Help Protect Kenya's Wildlife</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#121212] bg-opacity-30 p-6 rounded-lg">
                    <div className="text-[#F5C518] text-3xl mb-3">🌿</div>
                    <h4 className="text-xl font-bold text-white mb-2 subtitle">Travel Responsibly</h4>
                    <ul className="text-gray-300 space-y-2 text-sm body-text">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Choose eco-certified lodges and operators</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Maintain safe distances from wildlife</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Follow park rules and guide instructions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#121212] bg-opacity-30 p-6 rounded-lg">
                    <div className="text-[#F5C518] text-3xl mb-3">💚</div>
                    <h4 className="text-xl font-bold text-white mb-2 subtitle">Support Conservation</h4>
                    <ul className="text-gray-300 space-y-2 text-sm body-text">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Donate to reputable wildlife organizations</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Adopt an elephant or rhino orphan</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Purchase from conservation-focused brands</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#121212] bg-opacity-30 p-6 rounded-lg">
                    <div className="text-[#F5C518] text-3xl mb-3">📢</div>
                    <h4 className="text-xl font-bold text-white mb-2 subtitle">Spread Awareness</h4>
                    <ul className="text-gray-300 space-y-2 text-sm body-text">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Share Kenya's conservation stories</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Educate others about wildlife threats</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F5C518] mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Advocate against ivory and rhino horn trade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section id="planning" className="py-20 px-4 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <div 
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-5xl font-normal mb-6 text-white tracking-tight">
                Planning Your <span className="text-[#F5C518]">Kenyan Safari</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F5C518] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed body-text">
                Everything you need to know to prepare for an unforgettable wildlife experience in Kenya, from when to visit 
                to what to pack and how to stay safe.
              </p>
            </div>

            <div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              data-aos="fade-up"
            >
              <div className="bg-[#121212] p-8 rounded-xl border-t-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-4 text-white">When to Visit</h3>
                <ul className="text-gray-300 space-y-3 body-text">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Great Migration: July-October</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dry seasons: Jan-Feb & Jun-Oct</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Birding: Nov-Apr (migrant species)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#121212] p-8 rounded-xl border-t-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">🧳</div>
                <h3 className="text-xl font-bold mb-4 text-white">What to Pack</h3>
                <ul className="text-gray-300 space-y-3 body-text">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Neutral-colored clothing</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Binoculars & camera equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sunscreen, hat & sunglasses</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sturdy walking shoes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#121212] p-8 rounded-xl border-t-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">💉</div>
                <h3 className="text-xl font-bold mb-4 text-white">Health & Safety</h3>
                <ul className="text-gray-300 space-y-3 body-text">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Malaria prophylaxis recommended</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Yellow fever vaccination certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Follow guide instructions at all times</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comprehensive travel insurance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#121212] p-8 rounded-xl border-t-4 border-[#F5C518] hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-[#F5C518] text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-4 text-white">Cultural Tips</h3>
                <ul className="text-gray-300 space-y-3 body-text">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ask permission before photographing people</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Respect local customs and traditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Learn basic Swahili greetings</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F5C518] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Support local artisans and businesses</span>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="bg-[#121212] rounded-xl p-12 text-center relative overflow-hidden border border-[#F5C518]"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-[url('/images/tourism/map-pattern.png')] opacity-5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">Ready for Your Kenyan Safari Adventure?</h3>
                <p className="text-xl mb-8 max-w-3xl mx-auto body-text text-gray-300">
                  Contact our safari experts to plan your perfect wildlife experience in Kenya. We'll help you choose the right parks, 
                  accommodations, and activities based on your interests and budget.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-[#F5C518] text-[#121212] px-8 py-3 rounded-lg font-bold hover:bg-[#e6b800] transition-colors subtitle"
                  >
                    Contact Our Safari Experts
                  </Link>
                  <Link 
                    href="/safari-faq" 
                    className="border-2 border-[#F5C518] px-8 py-3 rounded-lg font-bold hover:bg-[#1E1E1E] transition-colors subtitle"
                  >
                    Safari FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#1A1A1A] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Kenya Wildlife</h3>
                <p className="text-[#CCCCCC] body-text">
                  Comprehensive resource on Kenya's wildlife and safari experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Quick Links</h3>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li><Link href="#" className="hover:text-[#F5C518] transition-colors">Kenya Wildlife Service</Link></li>
                  <li><Link href="#" className="hover:text-[#F5C518] transition-colors">National Parks Directory</Link></li>
                  <li><Link href="#" className="hover:text-[#F5C518] transition-colors">Safari Operators</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Contact</h3>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@kenyawildlife.co.ke</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#F5C518] pt-8 text-center text-[#CCCCCC] body-text">
              <p>© {new Date().getFullYear()} Kenya Wildlife Portal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SafariWildlife;