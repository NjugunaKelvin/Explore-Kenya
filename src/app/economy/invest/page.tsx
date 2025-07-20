/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const InvestPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Invest in Kenya | Kenya Economy</title>
        <meta name="description" content="Opportunities and information for investing in Kenya's growing economy" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Invest in Kenya</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kenya offers one of Africa's most attractive investment destinations with a strategic location, skilled workforce, and growing economy.
          </p>
        </div>

        {/* Why Invest */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Why Invest in Kenya?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                Kenya is East Africa's largest economy and a gateway to the wider COMESA and EAC markets with over 300 million consumers. The country offers political stability, a progressive legal framework, and strong economic growth averaging 5-6% annually.
              </p>
              <p className="text-gray-300">
                With improving infrastructure, a tech-savvy population, and government incentives for investors, Kenya presents diverse opportunities across sectors like manufacturing, technology, agriculture, and financial services.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Economic Growth</h3>
                  <p className="text-gray-400">Consistent GDP growth averaging 5-6% annually over the past decade.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-300">Financial Hub</h3>
                  <p className="text-gray-400">Nairobi is East Africa's financial center with 43 licensed commercial banks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Highlights */}
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Investment Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-3">Strategic Location</h3>
              <p className="text-gray-400">Gateway to EAC and COMESA markets with over 300 million consumers.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Incentives</h3>
              <p className="text-gray-400">Tax holidays, investment allowances, and SEZ benefits for qualifying investors.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Skilled Workforce</h3>
              <p className="text-gray-400">English-speaking, tech-savvy labor pool with competitive wage rates.</p>
            </div>
          </div>
        </div>

        {/* Key Sectors */}
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Key Investment Sectors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Manufacturing</h3>
              <p className="text-gray-400">Government aims to increase manufacturing to 15% of GDP by 2030.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-3">Agribusiness</h3>
              <p className="text-gray-400">Opportunities in processing, storage, and export of agricultural products.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Technology</h3>
              <p className="text-gray-400">"Silicon Savannah" with thriving fintech, e-commerce, and innovation hubs.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Infrastructure</h3>
              <p className="text-gray-400">Massive projects in transport, energy, and smart cities underway.</p>
            </div>
          </div>
        </div>

        {/* Investment Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Investment Process</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span className="text-gray-300">Identify investment opportunity and conduct feasibility study</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span className="text-gray-300">Register business with Registrar of Companies</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span className="text-gray-300">Obtain necessary licenses and permits</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span className="text-gray-300">Register with Kenya Investment Authority for incentives</span>
              </li>
            </ol>
          </div>
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Incentives</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">10-year corporate tax holiday for Special Economic Zones</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Investment deduction allowance up to 150%</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">VAT exemptions on certain capital equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Double taxation agreements with 13 countries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">100% ownership allowed for foreign investors</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div 
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Investment Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">General Electric Africa</h3>
              <p className="text-gray-300 mb-4">
                GE chose Nairobi as its Africa headquarters, investing over $150 million in healthcare, transportation, and energy projects across the continent.
              </p>
              <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-blue-200 italic">"Kenya's skilled workforce, infrastructure, and regional connectivity made it the ideal hub for our Africa operations." - GE Africa CEO</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Google Africa</h3>
              <p className="text-gray-300 mb-4">
                Google established its first Africa product development center in Nairobi, tapping into Kenya's tech talent to build solutions for African markets.
              </p>
              <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-blue-200 italic">"Nairobi's vibrant tech ecosystem and engineering talent were key factors in our decision." - Google Africa VP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Resources */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mt-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Investment Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">Kenya Investment Authority</h3>
              <p className="text-gray-300 mb-4">
                The government agency responsible for promoting and facilitating investment in Kenya.
              </p>
              <a href="https://invest.go.ke" className="text-blue-400 hover:underline">invest.go.ke</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Kenya Trade Network Agency</h3>
              <p className="text-gray-300 mb-4">
                Provides trade facilitation services including import/export documentation.
              </p>
              <a href="https://www.kentrade.go.ke" className="text-blue-400 hover:underline">kentrade.go.ke</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestPage;