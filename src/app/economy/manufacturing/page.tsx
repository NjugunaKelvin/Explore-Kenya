/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ManufacturingKenya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Manufacturing in Kenya | Kenya's Industrial Hub</title>
        <meta name="description" content="Discover Kenya's vibrant manufacturing sector, investment opportunities, and key industries driving East Africa's economy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Urbanist:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center relative">
          <div 
            className="relative h-[70vh] w-full overflow-hidden rounded-2xl mb-8"
            data-aos="fade-in"
          >
            {/* Hero Image - Replace with actual Kenyan factory/manufacturing image */}
            <Image
              src="/images/manufacturing/kenya-industrial-hero.jpg"
              alt="Kenya's Manufacturing Sector"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-caprasimo"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{textShadow: '0 4px 12px rgba(0,0,0,0.6)'}}
              >
                Kenya's Industrial Revolution
              </h1>
              <p 
                className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-plus-jakarta"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                East Africa's manufacturing powerhouse contributing <span className="font-semibold text-yellow-300">10% to GDP</span> and employing over <span className="font-semibold text-yellow-300">300,000 Kenyans</span> across diverse sectors.
              </p>
              <div className="mt-8" data-aos="fade-up" data-aos-delay="700">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-urbanist">
                  Explore Opportunities
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12 relative z-10 px-4" data-aos="fade-up">
            <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 font-urbanist">10%</div>
              <div className="text-white text-sm font-plus-jakarta">of Kenya's GDP</div>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 font-urbanist">300K+</div>
              <div className="text-white text-sm font-plus-jakarta">Direct Jobs</div>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 font-urbanist">$1B+</div>
              <div className="text-white text-sm font-plus-jakarta">AGOA Exports</div>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 font-urbanist">8%</div>
              <div className="text-white text-sm font-plus-jakarta">Annual Growth</div>
            </div>
          </div>
        </section>

        {/* Key Sectors Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-white mb-4 font-caprasimo"
              data-aos="fade-up"
            >
              Key Manufacturing Sectors
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up"></div>
            <p 
              className="text-gray-300 max-w-3xl mx-auto text-lg font-plus-jakarta"
              data-aos="fade-up"
            >
              Kenya's diversified industrial base serves both domestic and regional markets while creating unique products that support our tourism sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Agro-Processing */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/agro-processing.jpg" // Replace with actual image
                  alt="Agro-processing in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Agro-Processing</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Kenya is the world's <span className="font-semibold text-yellow-300">3rd largest tea exporter</span> and processes coffee, dairy, fruits, and vegetables for local and export markets.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Tea</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Coffee</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Dairy</span>
                </div>
              </div>
            </div>

            {/* Textiles & Apparel */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/textiles-apparel.jpg" // Replace with actual image
                  alt="Textiles and apparel in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Textiles & Apparel</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Exports over <span className="font-semibold text-yellow-300">$400M annually</span> under AGOA, producing uniforms, leather goods, and traditional fabrics popular with tourists.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">AGOA</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Leather</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Kikoi</span>
                </div>
              </div>
            </div>

            {/* Automotive & Machinery */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/automotive-kenya.jpg" // Replace with actual image
                  alt="Automotive assembly in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Automotive & Machinery</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Growing at <span className="font-semibold text-yellow-300">12% annually</span>, Kenya assembles buses, trucks, and motorbikes with potential in electric vehicle production.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">EVs</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Buses</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Motorbikes</span>
                </div>
              </div>
            </div>

            {/* Construction Materials */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/construction-materials.jpg" // Replace with actual image
                  alt="Construction materials in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Construction Materials</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Produces <span className="font-semibold text-yellow-300">6M+ tons</span> of cement annually along with steel, roofing, and glass to fuel Kenya's infrastructure boom.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Cement</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Steel</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Glass</span>
                </div>
              </div>
            </div>

            {/* Pharmaceuticals */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/pharmaceuticals.jpg" // Replace with actual image
                  alt="Pharmaceutical manufacturing in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Pharmaceuticals</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Local production of medicines and medical supplies meets <span className="font-semibold text-yellow-300">60% of domestic demand</span> with capacity to serve East Africa.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Medicines</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Vaccines</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Equipment</span>
                </div>
              </div>
            </div>

            {/* Special Economic Zones */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-yellow-400/30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/sez-kenya.jpg" // Replace with actual image
                  alt="Special Economic Zones in Kenya"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-urbanist">Special Economic Zones</h3>
                </div>
                <p className="text-gray-300 font-plus-jakarta">
                  Industrial parks in Athi River, Naivasha, and Mombasa offer <span className="font-semibold text-yellow-300">tax incentives</span> and modern infrastructure for manufacturers.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">EPZs</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Tax Holidays</span>
                  <span className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-xs font-urbanist">Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold text-white mb-4 font-caprasimo"
              data-aos="fade-up"
            >
              Why Invest in Kenya?
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up"></div>
            <p 
              className="text-gray-300 max-w-3xl mx-auto text-lg font-plus-jakarta"
              data-aos="fade-up"
            >
              Kenya offers unparalleled advantages for manufacturers looking to access African markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategic Location */}
            <div 
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              data-aos="fade-right"
            >
              <div className="flex items-start mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-urbanist">Strategic Location</h3>
                  <p className="text-gray-300 font-plus-jakarta">
                    Kenya serves as the gateway to East Africa with access to <span className="font-semibold text-yellow-300">300 million consumers</span> through the EAC and COMESA trade blocs, plus the <span className="font-semibold text-yellow-300">1.3 billion</span> African Continental Free Trade Area.
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/manufacturing/africa-map.jpg" // Replace with actual image
                  alt="Kenya's strategic location in Africa"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Incentives & Support */}
            <div 
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              data-aos="fade-left"
            >
              <div className="flex items-start mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-urbanist">Incentives & Support</h3>
                  <p className="text-gray-300 font-plus-jakarta">
                    Kenya offers <span className="font-semibold text-yellow-300">10-year tax holidays</span>, duty-free imports of machinery, VAT exemptions, and streamlined licensing through the <span className="font-semibold text-yellow-300">Ease of Doing Business</span> reforms.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="text-yellow-400 font-bold text-xl mb-1 font-urbanist">10 Years</div>
                  <div className="text-white text-sm font-plus-jakarta">Tax Holiday</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="text-yellow-400 font-bold text-xl mb-1 font-urbanist">100%</div>
                  <div className="text-white text-sm font-plus-jakarta">Duty-Free Machinery</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="text-yellow-400 font-bold text-xl mb-1 font-urbanist">0%</div>
                  <div className="text-white text-sm font-plus-jakarta">Withholding Tax</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                  <div className="text-yellow-400 font-bold text-xl mb-1 font-urbanist">56 Days</div>
                  <div className="text-white text-sm font-plus-jakarta">Business Registration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-700/10 rounded-2xl p-8 border border-yellow-400/20">
            <h3 
              className="text-2xl font-bold text-white mb-6 text-center font-caprasimo"
              data-aos="fade-up"
            >
              Kenyan Manufacturing Success Stories
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Bidco */}
              <div 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all"
                data-aos="fade-up"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/manufacturing/bidco-factory.jpg" // Replace with actual image
                    alt="Bidco Africa factory"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-urbanist">Bidco Africa</h4>
                <p className="text-gray-300 text-sm font-plus-jakarta">
                  From a single cooking oil brand to <span className="font-semibold text-yellow-300">22 manufacturing lines</span> across East Africa, exporting to 16 countries with $500M+ revenue.
                </p>
              </div>
              
              {/* Kaluworks */}
              <div 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/manufacturing/kaluworks.jpg" // Replace with actual image
                    alt="Kaluworks factory"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-urbanist">Kaluworks</h4>
                <p className="text-gray-300 text-sm font-plus-jakarta">
                  East Africa's largest steel manufacturer producing <span className="font-semibold text-yellow-300">100,000+ tons</span> annually, supplying regional construction projects.
                </p>
              </div>
              
              {/* Kenya Vehicle Manufacturers */}
              <div 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/manufacturing/kvm-buses.jpg" // Replace with actual image
                    alt="KVM buses"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-urbanist">Kenya Vehicle Manufacturers</h4>
                <p className="text-gray-300 text-sm font-plus-jakarta">
                  Assembling <span className="font-semibold text-yellow-300">5,000+ vehicles</span> annually including buses for public transport and safari tourism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Map */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl font-bold text-white mb-4 font-caprasimo"
              data-aos="fade-up"
            >
              Kenya's Industrial Landscape
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up"></div>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-6 font-urbanist" data-aos="fade-right">
                  Key Manufacturing Hubs
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start" data-aos="fade-right">
                    <div className="bg-yellow-400 rounded-full p-1 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white font-urbanist">Nairobi & Athi River</h4>
                      <p className="text-gray-300 font-plus-jakarta">
                        Automotive, food processing, pharmaceuticals, and light manufacturing in Export Processing Zones.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start" data-aos="fade-right" data-aos-delay="100">
                    <div className="bg-yellow-400 rounded-full p-1 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white font-urbanist">Mombasa</h4>
                      <p className="text-gray-300 font-plus-jakarta">
                        Heavy industries, steel production, and port-related manufacturing activities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                    <div className="bg-yellow-400 rounded-full p-1 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white font-urbanist">Kisumu & Eldoret</h4>
                      <p className="text-gray-300 font-plus-jakarta">
                        Agro-processing hubs for western Kenya's agricultural output including sugar and dairy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start" data-aos="fade-right" data-aos-delay="300">
                    <div className="bg-yellow-400 rounded-full p-1 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white font-urbanist">Naivasha</h4>
                      <p className="text-gray-300 font-plus-jakarta">
                        Emerging industrial zone with geothermal energy powering manufacturing plants.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/images/manufacturing/kenya-industrial-map.jpg" // Replace with actual map image
                  alt="Kenya's industrial map"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* For Tourists Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl font-bold text-white mb-4 font-caprasimo"
              data-aos="fade-up"
            >
              Kenyan Products for Visitors
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up"></div>
            <p 
              className="text-gray-300 max-w-3xl mx-auto text-lg font-plus-jakarta"
              data-aos="fade-up"
            >
              Discover authentic Kenyan-made products that make perfect souvenirs and gifts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kenyan Tea */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all"
              data-aos="fade-up"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/kenyan-tea-souvenirs.jpg" // Replace with actual image
                  alt="Kenyan tea products"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-urbanist">Kenyan Tea & Coffee</h3>
                <p className="text-gray-300 mb-4 font-plus-jakarta">
                  Take home world-famous Kenyan tea brands or specialty coffee from highland farms. Look for <span className="font-semibold text-yellow-300">KTDA-marked</span> products.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-urbanist">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Best found at: Nairobi Duty Free, Kericho Tea Shops
                </div>
              </div>
            </div>

            {/* Handicrafts */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/kenyan-handicrafts.jpg" // Replace with actual image
                  alt="Kenyan handicrafts"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-urbanist">Handicrafts & Textiles</h3>
                <p className="text-gray-300 mb-4 font-plus-jakarta">
                  Authentic <span className="font-semibold text-yellow-300">Maasai beadwork</span>, kikoi fabrics, and wooden carvings support local artisans. Look for <span className="font-semibold text-yellow-300">fair trade</span> certifications.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-urbanist">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Best found at: Maasai Market, Kazuri Beads
                </div>
              </div>
            </div>

            {/* Beauty Products */}
            <div 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-64">
                <Image
                  src="/images/manufacturing/kenyan-beauty.jpg" // Replace with actual image
                  alt="Kenyan beauty products"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-urbanist">Natural Beauty Products</h3>
                <p className="text-gray-300 mb-4 font-plus-jakarta">
                  Kenyan-made skincare using <span className="font-semibold text-yellow-300">organic ingredients</span> like aloe vera, macadamia oil, and African black soap from local manufacturers.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-urbanist">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Best found at: Healthy U, Nakumatt Supermarkets
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12 text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-caprasimo">Join Kenya's Industrial Transformation</h2>
          <p className="text-gray-900 text-xl mb-8 max-w-3xl mx-auto font-plus-jakarta">
            Explore investment opportunities, partnerships, or discover authentic Kenyan products during your visit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors font-urbanist">
              Download Investor Guide
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors font-urbanist">
              Contact Our Team
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4 font-urbanist">Kenya Manufacturing</h3>
              <p className="text-gray-400 font-plus-jakarta">
                Driving industrial growth and creating employment opportunities across East Africa.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 font-urbanist">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Investment Authority</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Sector Reports</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Manufacturers Directory</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 font-urbanist">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Policy Documents</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Research & Data</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-plus-jakarta">Training Programs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 font-urbanist">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 font-plus-jakarta">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 700 123 456
                </li>
                <li className="flex items-center text-gray-400 font-plus-jakarta">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@manufacturing.go.ke
                </li>
                <li className="flex items-center text-gray-400 font-plus-jakarta">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nairobi, Kenya
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 font-plus-jakarta">
            © {new Date().getFullYear()} Kenya Manufacturing Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManufacturingKenya;