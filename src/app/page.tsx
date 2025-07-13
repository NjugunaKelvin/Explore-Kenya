/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  const media = {
    heroVideo: "/videos/Kenya.mp4",
    heroPoster: "/images/hero-poster.jpg",
    mpesaImage: "/images/home/Mpesa.jpg",
    destinations: [
      "/images/home/MaasaiMara.jpg",
      "/images/home/diani.jpg",
      "/images//home/Mtkenya.jpg"
    ]
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={media.heroPoster}
          >
            <source src={media.heroVideo} type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">
            This Is Kenya
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-2xl mb-8 text-gray-300">
            A Land of Beauty, Culture, and Opportunity
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-emerald-500/20">
            Explore Now
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What You Probably Didn't Know About Kenya
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              emoji: "🦒",
              title: "Home to the Maasai Mara",
              description: "Hosts the Great Wildebeest Migration, one of the Seven Natural Wonders of Africa",
              bg: "bg-amber-900/20",
              border: "border-amber-800"
            },
            {
              emoji: "🏃",
              title: "Running Nation",
              description: "Producing some of the world's best long-distance runners for decades",
              bg: "bg-blue-900/20",
              border: "border-blue-800"
            },
            {
              emoji: "🌍",
              title: "Cradle of Mankind",
              description: "Some of the oldest human fossils were discovered in Turkana",
              bg: "bg-emerald-900/20",
              border: "border-emerald-800"
            },
            {
              emoji: "☕",
              title: "Coffee Origin",
              description: "Kenyan AA coffee is among the world's most sought-after specialty coffees",
              bg: "bg-purple-900/20",
              border: "border-purple-800"
            },
            {
              emoji: "📱",
              title: "Tech Hub",
              description: "M-Pesa, the world's first mobile money service, was invented here",
              bg: "bg-fuchsia-900/20",
              border: "border-fuchsia-800"
            },
            {
              emoji: "🌋",
              title: "Volcanic Lakes",
              description: "Lake Nakuru transforms pink with millions of flamingos seasonally",
              bg: "bg-red-900/20",
              border: "border-red-800"
            }
          ].map((fact, index) => (
            <div 
              key={index} 
              className={`${fact.bg} p-6 rounded-xl border ${fact.border} hover:border-white/50 transition-all hover:scale-[1.02]`}
            >
              <span className="text-4xl mb-3 block">{fact.emoji}</span>
              <h3 className="text-xl font-bold mb-2 text-white">{fact.title}</h3>
              <p className="text-gray-400">{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-900/30 to-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Explore Kenya
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Tourism",
              icon: "🌍",
              description: "Discover breathtaking landscapes and wildlife",
              color: "from-amber-500 to-amber-600",
              bgImage: "bg-[url('/images/tourism-bg.jpg')]"
            },
            {
              title: "Culture",
              icon: "🎭",
              description: "Rich traditions and diverse communities",
              color: "from-purple-500 to-purple-600",
              bgImage: "bg-[url('/images/culture-bg.jpg')]"
            },
            {
              title: "Economy",
              icon: "💼",
              description: "Africa's growing economic powerhouse",
              color: "from-emerald-500 to-emerald-600",
              bgImage: "bg-[url('/images/economy-bg.jpg')]"
            },
            {
              title: "Education",
              icon: "🎓",
              description: "Leading universities and research",
              color: "from-blue-500 to-blue-600",
              bgImage: "bg-[url('/images/education-bg.jpg')]"
            },
            {
              title: "Fashion",
              icon: "👗",
              description: "Vibrant textiles and modern designers",
              color: "from-fuchsia-500 to-fuchsia-600",
              bgImage: "bg-[url('/images/fashion-bg.jpg')]"
            }
          ].map((category, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl h-48 ${category.bgImage} bg-cover bg-center`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl mb-3">{category.icon}</span>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-gray-200">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={media.mpesaImage}
              alt="M-Pesa mobile money"
              className="w-full rounded-xl shadow-2xl border border-gray-800 hover:border-emerald-500 transition-all"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-emerald-500 font-medium mb-2 block">Innovation Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">M-Pesa</span> - Revolutionizing Finance
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Kenya's groundbreaking mobile money service that transformed banking for millions. 
              M-Pesa allows users to deposit, withdraw, transfer money, and pay for goods and 
              services easily with a mobile device.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="font-bold text-emerald-400">50M+</h4>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="font-bold text-emerald-400">2007</h4>
                <p className="text-sm text-gray-400">Launch Year</p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Discover More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-t from-gray-900/30 to-black">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Top Destinations
          </h2>
          <button className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-sm">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maasai Mara",
              image: media.destinations[0],
              caption: "Witness the spectacular Great Migration",
              location: "Narok County"
            },
            {
              name: "Diani Beach",
              image: media.destinations[1],
              caption: "Pristine white sands and turquoise waters",
              location: "Kwale County"
            },
            {
              name: "Mount Kenya",
              image: media.destinations[2],
              caption: "Africa's second highest mountain",
              location: "Central Kenya"
            }
          ].map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-96">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                    <p className="text-gray-300">{destination.caption}</p>
                  </div>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded text-gray-300">{destination.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}