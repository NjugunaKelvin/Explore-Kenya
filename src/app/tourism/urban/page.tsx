/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const UrbanExperiences = () => {
  return (
    <>
      <Head>
        <title>Urban Experiences in Kenya | City Life & Culture</title>
        <meta name="description" content="Explore Kenya's vibrant cities from Nairobi's nightlife to Mombasa's historic streets" />
      </Head>

      <div className="min-h-screen bg-[#121212] text-white">
        {/* Hero Section */}
        <section 
          className="relative h-[70vh] flex items-center justify-center bg-[url('/images/urban-hero.jpg')] bg-cover bg-center"
          data-aos="fade-in"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4" data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Urban Kenya</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">Discover the vibrant city life, culture, and modern attractions</p>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-[#B61C1C] pb-2 inline-block" data-aos="fade-up">Kenya's Urban Centers</h2>

          <div className="space-y-16">
            {/* Nairobi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
              <div>
                <img src="/images/nairobi.jpg" alt="Nairobi" className="rounded-lg shadow-lg w-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#F4A300]">Nairobi</h3>
                <p className="mb-4">The capital city known as "The Green City in the Sun" blends modern skyscrapers with wildlife experiences.</p>
                <div className="space-y-2">
                  <p className="font-semibold">Top Experiences:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nairobi National Park (wildlife with city skyline)</li>
                    <li>Karen Blixen Museum (Out of Africa history)</li>
                    <li>Maasai Market (authentic crafts and souvenirs)</li>
                    <li>Westlands nightlife and dining scene</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mombasa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="md:order-2">
                <img src="/images/mombasa.jpg" alt="Mombasa" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-[#F4A300]">Mombasa</h3>
                <p className="mb-4">Kenya's coastal gem with a rich Swahili heritage and bustling port city energy.</p>
                <div className="space-y-2">
                  <p className="font-semibold">Top Experiences:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Old Town with its winding alleys and carved doors</li>
                    <li>Fort Jesus (UNESCO World Heritage Site)</li>
                    <li>Nyali and Bamburi beaches</li>
                    <li>Haller Park wildlife sanctuary</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kisumu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="200">
              <div>
                <img src="/images/kisumu.jpg" alt="Kisumu" className="rounded-lg shadow-lg w-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#F4A300]">Kisumu</h3>
                <p className="mb-4">The principal city of western Kenya on the shores of Lake Victoria.</p>
                <div className="space-y-2">
                  <p className="font-semibold">Top Experiences:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dunga Hill Camp for lakeside views and fresh fish</li>
                    <li>Kisumu Impala Sanctuary</li>
                    <li>Kibuye Market for local crafts</li>
                    <li>Ndere Island National Park</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Highlights */}
        <section className="py-16 px-4 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Urban Culture & Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Food */}
              <div className="bg-[#252525] p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold mb-4 text-[#4FC3F7]">Urban Cuisine</h3>
                <p className="mb-4">Kenyan cities offer diverse culinary scenes blending traditional and international flavors.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Nyama Choma (grilled meat) joints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Swahili seafood dishes in Mombasa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>International fine dining in Nairobi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Street food like mutura (sausage) and mandazi</span>
                  </li>
                </ul>
              </div>

              {/* Art */}
              <div className="bg-[#252525] p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-[#4FC3F7]">Arts & Music</h3>
                <p className="mb-4">Kenya's urban centers are hubs for creative expression.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Nairobi National Museum and art galleries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Kenyan hip hop (genge) and Benga music scenes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Annual Koroga Festival music event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>GoDown Arts Centre for contemporary art</span>
                  </li>
                </ul>
              </div>

              {/* Shopping */}
              <div className="bg-[#252525] p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-bold mb-4 text-[#4FC3F7]">Shopping & Markets</h3>
                <p className="mb-4">From modern malls to vibrant open-air markets.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Two Rivers Mall - East Africa's largest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Maasai Markets for authentic crafts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>City Market Nairobi for fresh produce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F4A300] mr-2">•</span>
                    <span>Bombolulu Workshops for disability-made crafts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UrbanExperiences;