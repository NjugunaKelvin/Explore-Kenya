/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const TechPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Technology in Kenya | Kenya Economy</title>
        <meta name="description" content="Overview of Kenya's thriving technology sector, innovations, and digital transformation" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">Technology in Kenya</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kenya has earned the nickname "Silicon Savannah" as one of Africa's leading technology and innovation hubs.
          </p>
        </div>

        {/* Tech Landscape */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-300">Technology Landscape</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                Kenya's tech scene has grown exponentially since the launch of M-Pesa in 2007. Today, Nairobi hosts numerous tech hubs, incubators, and over 200 active startups. The government's Vision 2030 identifies technology as a key economic pillar.
              </p>
              <p className="text-gray-300">
                Konza Technopolis, a $14.5 billion smart city project, aims to position Kenya as Africa's technology leader. The country also boasts one of the continent's highest mobile penetration rates and internet access levels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-300">M-Pesa Revolution</h3>
                  <p className="text-gray-400">The mobile money platform processes more transactions than Western Union globally.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Konza Technopolis</h3>
                  <p className="text-gray-400">Dubbed "Africa's Silicon Savannah", this smart city will host tech companies, universities, and residential areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Sectors */}
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-300">Key Technology Sectors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Fintech</h3>
              <p className="text-gray-400">Kenya leads Africa in mobile money with over 70% adult population using mobile payment platforms.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">AgriTech</h3>
              <p className="text-gray-400">Innovations like Twiga Foods and iCow are transforming agriculture through technology.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-purple-400 mb-3">E-commerce</h3>
              <p className="text-gray-400">Platforms like Jumia and Copia are revolutionizing retail with digital solutions.</p>
            </div>
          </div>
        </div>

        {/* Tech Ecosystem */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Digital Infrastructure</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Three submarine cables providing high-speed internet</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">National fiber optic backbone covering major towns</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">4G coverage in all urban areas, expanding 5G rollout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-gray-300">Government digital services through eCitizen platform</span>
              </li>
            </ul>
          </div>
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Innovation Hubs</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">iHub - Nairobi's pioneering tech incubator</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Nailab - Focused on early-stage startups</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Google Launchpad Africa - Supporting growth-stage startups</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Norrsken East Africa - Impact tech hub</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div 
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-300">Tech Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">M-Pesa</h3>
              <p className="text-gray-300 mb-4">
                Launched in 2007 by Safaricom, M-Pesa has become the world's most successful mobile money platform, processing billions of dollars monthly and serving over 50 million customers across Africa.
              </p>
              <div className="bg-green-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-green-200 italic">"M-Pesa demonstrated Kenya's ability to leapfrog traditional banking infrastructure with innovative solutions." - Michael Joseph, Former Safaricom CEO</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Ushahidi</h3>
              <p className="text-gray-300 mb-4">
                Born during Kenya's 2008 post-election violence, this crowdsourcing platform has been used globally for crisis mapping and has spawned numerous other civic tech solutions.
              </p>
              <div className="bg-green-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-green-200 italic">"Ushahidi shows how Kenyan tech can solve local problems with global applications." - Erik Hersman, Co-founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mt-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-300">Future Outlook</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Konza Technopolis</h3>
              <p className="text-gray-300 mb-4">
                This $14.5 billion smart city project aims to create 17,000 direct jobs by 2030 and position Kenya as a global technology leader. Phase one includes a data center, university, and residential areas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Digital Economy Blueprint</h3>
              <p className="text-gray-300 mb-4">
                The government's plan aims to digitize all public services, expand digital skills training, and increase internet access to 100% of the population by 2030.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPage;