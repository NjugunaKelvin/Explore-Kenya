/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

type FoodItem = {
  name: string;
  description: string;
  images: string[];
  region?: string;
};

type FoodCategory = {
  [key: string]: FoodItem[];
};

const KenyanCuisine = () => {
  const [activeCategory, setActiveCategory] = useState('traditional');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Food data
  const foodData: {
    traditional: FoodItem[];
    street: FoodItem[];
    drinks: FoodItem[];
    regional: {
      [key: string]: FoodItem[];
    };
  } = {
    traditional: [
      {
        name: "Nyama Choma",
        description: "Kenya's famous grilled meat, often goat or beef, served with kachumbari (fresh tomato and onion salad).",
        images: ["/images/foods/Nyama-Choma.jpg"],
        region: "Nationwide"
      },
      {
        name: "Ugali",
        description: "A staple food made from maize flour, served with vegetables, meat, or fish stews.",
        images: ["/images/foods/Ugali.jpg", "/images/foods/Chapati.jpg"],
        region: "Nationwide"
      },
      {
        name: "Sukuma Wiki",
        description: "Healthy collard greens sautéed with onions and tomatoes, often served with ugali.",
        images: ["/images/foods/sukumawiki.jpg"],
        region: "Nationwide"
      },
      {
        name: "Pilau",
        description: "Fragrant spiced rice dish often served with meat during special occasions.",
        images: ["/images/foods/Pilau.jpg"],
        region: "Nationwide"
      },
      {
        name: "Chapati",
        description: "Flaky, layered flatbread that's a staple in Kenyan households.",
        images: ["/images/foods/Chapati.jpg"],
        region: "Nationwide"
      },
      {
        name: "Githeri",
        description: "Nutritious mix of boiled maize and beans, a simple but filling meal.",
        images: ["/images/foods/Githeri.jpg"],
        region: "Central"
      }
    ],
    street: [
      {
        name: "Mutura",
        description: "Kenyan sausage made with meat, blood, and spices, grilled to perfection.",
        images: ["/images/foods/mutura1.jpg"],
        region: "Nationwide"
      },
      {
        name: "Mahindi Choma",
        description: "Grilled corn on the cob, often seasoned with chili and lime.",
        images: ["/images/foods/mahindiChoma.jpg"],
        region: "Nationwide"
      },
      {
        name: "Viazi Karai",
        description: "Deep-fried potatoes in spiced batter, a coastal street food favorite.",
        images: ["/images/foods/viaziKarai.jpg"],
        region: "Coastal"
      },
      {
        name: "Smocha",
        description: "Sausage and egg sandwich, a popular quick bite in urban areas.",
        images: ["/images/foods/Smocha.jpg"],
        region: "Urban"
      }
    ],
    drinks: [
      {
        name: "Chai",
        description: "Kenyan tea with milk, often spiced with ginger or cardamom.",
        images: ["/images/drinks/chai1.jpg"],
        region: "Nationwide"
      },
      {
        name: "Dawa",
        description: "The 'magic potion' cocktail made with vodka, honey, lime, and sugar.",
        images: ["/images/drinks/dawa1.jpg"],
        region: "Nationwide"
      },
      {
        name: "Mursik",
        description: "Traditional Kalenjin fermented milk, often stored in special gourds.",
        images: ["/images/foods/mursik1.jpg"],
        region: "Rift Valley"
      },
      {
        name: "Muratina",
        description: "Traditional Kenyan beer made from fermented grains or bananas.",
        images: ["/images/drinks/muratina1.jpg"],
        region: "Central"
      }
    ],
    regional: {
      coastal: [
        {
          name: "Biryani",
          description: "Fragrant spiced rice with meat, a Swahili coastal specialty.",
          images: ["/images/foods/biryani.jpg"]
        },
        {
          name: "Mahamri",
          description: "Coconut-flavored doughnuts, perfect with Swahili coffee.",
          images: ["/images/foods/mahamri.jpg"]
        }
      ],
      western: [
        {
          name: "Omena",
          description: "Small dried fish, a protein-rich staple in western Kenya.",
          images: ["/images/foods/omena.jpg"]
        }
      ],
      central: [
        {
          name: "Mukimo",
          description: "Mashed potatoes with greens, a Kikuyu traditional dish.",
          images: ["/images/foods/mukimo2.jpg"]
        }
      ],
      northern: [
        {
          name: "Nyirnyiri",
          description: "Somali-inspired spiced rice with meat and vegetables.",
          images: ["/images/foods/nyirnyir.png"]
        }
      ]
    }
  };

  // Get current food items based on selection
  const getCurrentFoodItems = () => {
    if (activeCategory !== 'regional') {
      return foodData[activeCategory as 'traditional' | 'street' | 'drinks'];
    }
    return activeRegion ? foodData.regional[activeRegion] : [];
  };

  // Image slideshow component
  const FoodImage = ({ images }: { images: string[] }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}
      </div>
    );
  };

  // Category buttons
  const CategoryButton = ({
    name,
    label,
    isDropdown = false
  }: {
    name: string;
    label: string;
    isDropdown?: boolean;
  }) => (
    <div className="relative">
      <button
        onClick={() => {
          setActiveCategory(name);
          if (name !== 'regional') setActiveRegion(null);
          setIsMenuOpen(false);
        }}
        className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
          activeCategory === name
            ? 'border-amber-500 text-amber-500'
            : 'border-transparent text-gray-300 hover:text-white'
        }`}
      >
        {label}
        {isDropdown && (
          <span className="ml-1 inline-block transform translate-y-0.5">▾</span>
        )}
      </button>
    </div>
  );

  // Region buttons for mobile
  const RegionButton = ({ region }: { region: string }) => (
    <button
      onClick={() => {
        setActiveRegion(region);
        setIsMenuOpen(false);
      }}
      className={`px-4 py-2 text-sm w-full text-left ${
        activeRegion === region
          ? 'bg-gray-700 text-amber-500'
          : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      {region.charAt(0).toUpperCase() + region.slice(1)}
    </button>
  );

  return (
    <>
      <Head>
        <title>Kenyan Cuisine | Taste the Flavors of Kenya</title>
        <meta name="description" content="Explore the rich and diverse culinary traditions of Kenya" />
      </Head>

      <Navbar />

      <main className="bg-gray-950 text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/food.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-serif"
              data-aos="fade-up"
            >
              Kenyan Cuisine
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A flavorful journey through Kenya's diverse culinary traditions
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <nav className="sticky top-0 z-30 bg-gray-900 shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center">
              <CategoryButton name="traditional" label="Traditional Dishes" />
              <CategoryButton name="street" label="Street Foods" />
              <CategoryButton name="drinks" label="Beverages" />
              <div className="relative group">
                <CategoryButton name="regional" label="Regional Specialties" isDropdown />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-gray-800 rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {Object.keys(foodData.regional).map(region => (
                    <button
                      key={region}
                      onClick={() => {
                        setActiveCategory('regional');
                        setActiveRegion(region);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        activeRegion === region
                          ? 'bg-gray-700 text-amber-500'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {region.charAt(0).toUpperCase() + region.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center py-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-600 hover:text-white hover:border-white"
              >
                <span className="mr-2">Menu</span>
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-2 shadow-lg">
                <CategoryButton name="traditional" label="Traditional Dishes" />
                <CategoryButton name="street" label="Street Foods" />
                <CategoryButton name="drinks" label="Beverages" />
                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-gray-400 mb-1">Regional:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {Object.keys(foodData.regional).map(region => (
                      <RegionButton key={region} region={region} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Food Display Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          {/* Section Title */}
          {activeCategory !== 'regional' ? (
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif"
              data-aos="fade-up"
            >
              {activeCategory === 'traditional' && 'Traditional Kenyan Dishes'}
              {activeCategory === 'street' && 'Popular Kenyan Street Foods'}
              {activeCategory === 'drinks' && 'Kenyan Beverages'}
            </h2>
          ) : !activeRegion ? (
            <div className="text-center py-8" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                Regional Kenyan Cuisine
              </h2>
              <p className="text-lg mb-6">Select a region to explore its unique dishes</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {Object.keys(foodData.regional).map(region => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-all hover:scale-105"
                  >
                    <h3 className="font-medium capitalize">
                      {region.charAt(0).toUpperCase() + region.slice(1)}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-8" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                {activeRegion.charAt(0).toUpperCase() + activeRegion.slice(1)} Cuisine
              </h2>
              <button
                onClick={() => setActiveRegion(null)}
                className="text-sm text-amber-500 hover:text-amber-400 flex items-center"
              >
                <span className="mr-1">←</span> Back to regions
              </button>
            </div>
          )}

          {/* Food Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentFoodItems().map((food, index) => (
              <div
                key={`${food.name}-${index}`}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index % 3 * 100}
              >
                <FoodImage images={food.images} />
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 font-serif">{food.name}</h3>
                    {food.region && food.region !== "Nationwide" && (
                      <span className="inline-block bg-gray-800 text-amber-500 text-xs px-2 py-1 rounded-full">
                        {food.region}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Context Section */}
        <section className="py-16 bg-gray-900 px-4">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-serif">
              The Culture Behind Kenyan Cuisine
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-center">
              Kenyan food is more than sustenance—it's a vibrant part of the country's cultural fabric, 
              reflecting its diverse communities and traditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-3 font-serif">Communal Traditions</h3>
                <p className="text-gray-300">
                  Many Kenyan meals are served family-style, with shared dishes at the center. 
                  From ugali eaten with hands to nyama choma shared among friends, 
                  dining is a social experience.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-3 font-serif">Seasonal & Local</h3>
                <p className="text-gray-300">
                  Traditional dishes follow seasonal harvests and local availability. 
                  Coastal cuisine features coconut and seafood, 
                  while highland areas rely on grains and vegetables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4" data-aos="fade-up">
          <div className="max-w-2xl mx-auto text-center bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
              Experience Kenyan Flavors
            </h2>
            <p className="text-lg mb-6">
              Whether you're visiting Kenya or cooking at home, these flavors will transport you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Kenyan Recipes
              </button>
              <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-lg font-medium transition-colors">
                Find Kenyan Restaurants
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default KenyanCuisine;