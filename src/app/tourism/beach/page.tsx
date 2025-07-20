/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const BeachCoastline = () => {
  return (
    <>
      <Head>
        <title>Kenya's Beaches & Coastline | Tropical Paradise</title>
        <meta name="description" content="Discover Kenya's stunning Indian Ocean coastline with pristine beaches, coral reefs, and Swahili culture" />
      </Head>

      <div className="min-h-screen bg-[#121212] text-white">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] flex items-center justify-center bg-[url('/images/beach-hero.jpg')] bg-cover bg-center"
          data-aos="fade-in"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4" data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kenya's Coastline</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">White sand beaches, turquoise waters, and rich Swahili heritage</p>
          </div>
        </section>

        {/* Beaches Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-[#4FC3F7] pb-2 inline-block" data-aos="fade-up">Coastal Paradises</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diani Beach */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <img src="/images/diani.jpg" alt="Diani Beach" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Diani Beach</h3>
                <p className="mb-4">Voted Africa's leading beach destination with powdery white sand and clear waters.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Water sports hub</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Luxury resorts</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Colobus monkey conservation</li>
                </ul>
              </div>
            </div>

            {/* Watamu */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/watamu.jpg" alt="Watamu" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Watamu</h3>
                <p className="mb-4">Part of the Malindi-Watamu Marine Reserve with excellent snorkeling and diving.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Turtle conservation</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Bio-Ken Snake Farm</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Gede Ruins nearby</li>
                </ul>
              </div>
            </div>

            {/* Lamu Archipelago */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <img src="/images/lamu-archipelago.jpg" alt="Lamu Archipelago" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Lamu Archipelago</h3>
                <p className="mb-4">A cluster of islands preserving centuries-old Swahili culture.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Car-free Lamu Town</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Traditional dhow sailing</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Annual Lamu Cultural Festival</li>
                </ul>
              </div>
            </div>

            {/* Malindi */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <img src="/images/malindi.jpg" alt="Malindi" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Malindi</h3>
                <p className="mb-4">Historic coastal town with Italian influences and beautiful beaches.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Vasco da Gama Pillar</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Malindi Marine Park</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Italian cuisine</li>
                </ul>
              </div>
            </div>

            {/* Kilifi */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/kilifi.jpg" alt="Kilifi" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Kilifi</h3>
                <p className="mb-4">Relaxed coastal town known for its creek and bohemian vibe.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Distant Relatives eco-lodge</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Mnarani ruins</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Kite surfing</li>
                </ul>
              </div>
            </div>

            {/* Shimoni */}
            <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <img src="/images/shimoni.jpg" alt="Shimoni" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#F4A300]">Shimoni</h3>
                <p className="mb-4">Gateway to the Kisite-Mpunguti Marine Park and Pemba Channel.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Dolphin watching</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Shimoni slave caves</li>
                  <li className="flex items-center"><span className="text-[#4FC3F7] mr-2">✓</span> Deep sea fishing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marine Life Section */}
        <section className="py-16 px-4 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Marine Wonders</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right">
                <img src="/images/coral-reef.jpg" alt="Coral Reef" className="rounded-lg shadow-lg w-full" />
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-2xl font-bold mb-4 text-[#4FC3F7]">Coral Reefs & Marine Parks</h3>
                <p className="mb-4">Kenya's coastline is protected by several marine parks and reserves with vibrant coral reefs.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Malindi and Watamu Marine Parks - oldest in Africa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Kisite-Mpunguti Marine Park - dolphin sightings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Mombasa Marine Park - easily accessible reef</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Diani-Chale Marine Reserve - diverse ecosystems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
              <div className="md:order-2" data-aos="fade-left">
                <img src="/images/swahili-culture.jpg" alt="Swahili Culture" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="md:order-1" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-2xl font-bold mb-4 text-[#4FC3F7]">Swahili Culture</h3>
                <p className="mb-4">The coast is the heart of Kenya's Swahili heritage with unique traditions.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Swahili architecture with ornate doors and balconies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Taarab music - blend of Arabic and African styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Swahili cuisine with coconut, spices, and seafood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Annual Lamu and Mombasa cultural festivals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-[#1E1E1E] p-8 rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#F4A300]">When to Visit the Coast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">Best Weather</h3>
                <p>December to March: Hot and dry with calm seas perfect for beach activities and diving.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">Shoulder Season</h3>
                <p>July to October: Cooler temperatures and fewer crowds, though seas can be rougher.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">Rainy Seasons</h3>
                <p>April-June (long rains) and November (short rains) bring lush vegetation but some activities may be limited.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">Special Events</h3>
                <p>Plan around the Lamu Cultural Festival (November) and Mombasa Carnival (November).</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BeachCoastline;