/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function KenyanCuisine() {
  const [activeCategory, setActiveCategory] = useState('traditional');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
    };
    loadAOS();
  }, []);

  // Food categories data
  const foodCategories = {
    traditional: [
      {
        name: "Nyama Choma",
        description: "Kenya's famous grilled meat, often goat or beef, served with kachumbari (fresh tomato and onion salad).",
        images: ["/images/foods/Nyama-Choma.jpg", "/images/foods/Nyama-Choma.jpg"],
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
        images: ["/images/foods/Chapati.jpg", "/images/foods/Chapati.jpg"],
        region: "Nationwide"
      }
    ],
    street: [
      {
        name: "Mutura",
        description: "Kenyan sausage made with meat, blood, and spices, grilled to perfection.",
        images: ["/images/foods/Smocha.jpg", "/images/foods/Smocha.jpg"],
        region: "Nationwide"
      },
      {
        name: "Mahindi Choma",
        description: "Grilled corn on the cob, often seasoned with chili and lime.",
        images: ["/images/foods/mahindi-choma-1.jpg", "/images/foods/mahindi-choma-2.jpg"],
        region: "Nationwide"
      },
      {
        name: "Viazi Karai",
        description: "Deep-fried potatoes in spiced batter, a coastal street food favorite.",
        images: ["/images/foods/viazi-karai-1.jpg", "/images/foods/viazi-karai-2.jpg"],
        region: "Coastal"
      }
    ],
    drinks: [
      {
        name: "Dawa",
        description: "The 'magic potion' cocktail made with vodka, honey, lime, and sugar.",
        images: ["/images/foods/dawa-1.jpg", "/images/foods/dawa-2.jpg"],
        region: "Nationwide"
      },
      {
        name: "Mursik",
        description: "Traditional Kalenjin fermented milk, often stored in special gourds.",
        images: ["/images/foods/mursik-1.jpg", "/images/foods/mursik-2.jpg"],
        region: "Rift Valley"
      },
      {
        name: "Pombe",
        description: "Traditional Kenyan beer made from fermented grains or bananas.",
        images: ["/images/foods/pombe-1.jpg", "/images/foods/pombe-2.jpg"],
        region: "Western"
      }
    ],
    regional: {
      coastal: [
        {
          name: "Biryani",
          description: "Fragrant spiced rice with meat, a Swahili coastal specialty.",
          images: ["/images/foods/biryani-1.jpg", "/images/foods/biryani-2.jpg"]
        },
        {
          name: "Mahamri",
          description: "Coconut-flavored doughnuts, perfect with Swahili coffee.",
          images: ["/images/foods/mahamri-1.jpg", "/images/foods/mahamri-2.jpg"]
        },
        {
          name: "Samaki Wa Kupaka",
          description: "Fish in coconut curry, a Mombasa delicacy.",
          images: ["/images/foods/samaki-wa-kupaka-1.jpg", "/images/foods/samaki-wa-kupaka-2.jpg"]
        }
      ],
      western: [
        {
          name: "Omena",
          description: "Small dried fish, a protein-rich staple in western Kenya.",
          images: ["/images/foods/omena-1.jpg", "/images/foods/omena-2.jpg"]
        },
        {
          name: "Ingokho",
          description: "Traditional chicken dish with indigenous spices.",
          images: ["/images/foods/ingokho-1.jpg", "/images/foods/ingokho-2.jpg"]
        }
      ],
      central: [
        {
          name: "Mukimo",
          description: "Mashed potatoes with greens, a Kikuyu traditional dish.",
          images: ["/images/foods/mukimo-1.jpg", "/images/foods/mukimo-2.jpg"]
        },
        {
          name: "Githeri",
          description: "Boiled maize and beans, a simple but nutritious meal.",
          images: ["/images/foods/githeri-1.jpg", "/images/foods/githeri-2.jpg"]
        }
      ],
      northern: [
        {
          name: "Nyirnyiri",
          description: "Somali-inspired spiced rice with meat and vegetables.",
          images: ["/images/foods/nyirnyiri-1.jpg", "/images/foods/nyirnyiri-2.jpg"]
        },
        {
          name: "Hilib Ari",
          description: "Grilled goat meat, a northern Kenyan specialty.",
          images: ["/images/foods/hilib-ari-1.jpg", "/images/foods/hilib-ari-2.jpg"]
        }
      ]
    }
  };

  // Image slideshow component
  const ImageSlideshow = ({ images }: { images: string[] }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Kenyan Cuisine | Taste the Flavors of Kenya</title>
        <meta name="description" content="Explore the rich and diverse culinary traditions of Kenya, from nyama choma to coastal biryani." />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Video Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden">
          <div className="w-full lg:w-3/4 xl:w-2/3 h-[70vh] relative">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center p-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif" data-aos="fade-up">
                Kenyan Cuisine
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                A flavorful journey through Kenya's diverse culinary traditions
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center -mb-px">
              <button
                onClick={() => { setActiveCategory('traditional'); setActiveRegion(null); }}
                className={`mr-2 py-4 px-4 font-medium text-sm border-b-2 ${activeCategory === 'traditional' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-300 hover:text-white'}`}
              >
                Traditional Dishes
              </button>
              <button
                onClick={() => { setActiveCategory('street'); setActiveRegion(null); }}
                className={`mr-2 py-4 px-4 font-medium text-sm border-b-2 ${activeCategory === 'street' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-300 hover:text-white'}`}
              >
                Street Foods
              </button>
              <button
                onClick={() => { setActiveCategory('drinks'); setActiveRegion(null); }}
                className={`mr-2 py-4 px-4 font-medium text-sm border-b-2 ${activeCategory === 'drinks' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-300 hover:text-white'}`}
              >
                Drinks
              </button>
              <div className="relative group">
                <button
                  onClick={() => { setActiveCategory('regional'); }}
                  className={`mr-2 py-4 px-4 font-medium text-sm border-b-2 ${activeCategory === 'regional' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-300 hover:text-white'}`}
                >
                  Regional Dishes
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-gray-800 rounded-md shadow-lg z-10 hidden group-hover:block">
                  <button
                    onClick={() => setActiveRegion('coastal')}
                    className={`block w-full text-left px-4 py-2 text-sm ${activeRegion === 'coastal' ? 'bg-gray-700 text-yellow-500' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Coastal
                  </button>
                  <button
                    onClick={() => setActiveRegion('western')}
                    className={`block w-full text-left px-4 py-2 text-sm ${activeRegion === 'western' ? 'bg-gray-700 text-yellow-500' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Western
                  </button>
                  <button
                    onClick={() => setActiveRegion('central')}
                    className={`block w-full text-left px-4 py-2 text-sm ${activeRegion === 'central' ? 'bg-gray-700 text-yellow-500' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Central
                  </button>
                  <button
                    onClick={() => setActiveRegion('northern')}
                    className={`block w-full text-left px-4 py-2 text-sm ${activeRegion === 'northern' ? 'bg-gray-700 text-yellow-500' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Northern
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Food Display Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          {activeCategory !== 'regional' && (
            <h2 className="text-3xl font-bold mb-12 text-center font-serif" data-aos="fade-up">
              {activeCategory === 'traditional' && 'Traditional Kenyan Dishes'}
              {activeCategory === 'street' && 'Popular Street Foods'}
              {activeCategory === 'drinks' && 'Kenyan Beverages'}
            </h2>
          )}

          {activeCategory === 'regional' && !activeRegion && (
            <div className="text-center py-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 font-serif">Regional Kenyan Cuisine</h2>
              <p className="text-lg mb-8">Select a region to explore its unique dishes</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.keys(foodCategories.regional).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all transform hover:scale-105"
                  >
                    <h3 className="text-xl font-bold capitalize font-serif">{region}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Display foods based on selected category/region */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              activeCategory !== 'regional'
                ? (foodCategories[activeCategory as keyof typeof foodCategories] as Array<any>)
                : activeRegion
                  ? (foodCategories.regional[activeRegion as keyof typeof foodCategories.regional] as Array<any>)
                  : []
            ).map((food: any, index: number) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ImageSlideshow images={food.images} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-serif">{food.name}</h3>
                  {food.region && food.region !== "Nationwide" && (
                    <span className="inline-block bg-gray-700 text-yellow-500 text-xs px-2 py-1 rounded-full mb-2">
                      {food.region}
                    </span>
                  )}
                  <p className="text-gray-300">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culinary Experience Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 font-serif">More Than Just Food</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Kenyan cuisine is about community, tradition, and celebration. From the nyama choma joints where friends gather,
              to the elaborate Swahili wedding feasts, food is at the heart of Kenyan social life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-serif">Communal Dining</h3>
                <p className="text-gray-300">
                  Many Kenyan meals are served in large shared platters, emphasizing togetherness.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-serif">Seasonal Ingredients</h3>
                <p className="text-gray-300">
                  Traditional dishes follow seasonal harvests, connecting people to the land.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 font-serif">Ceremonial Foods</h3>
                <p className="text-gray-300">
                  Special dishes mark important life events from birth to marriage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 text-center" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-serif">Ready to Taste Kenya?</h2>
            <p className="text-xl mb-8">
              Whether you're visiting Kenya or trying to recreate these dishes at home, the flavors will transport you to the heart of Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-yellow-600 to-red-600 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300">
                Explore Kenyan Restaurants
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition duration-300">
                Kenyan Recipes
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}