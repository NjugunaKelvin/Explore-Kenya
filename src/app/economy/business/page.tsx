/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Business in Kenya | Kenya Economy</title>
        <meta name="description" content="Overview of Kenya's business environment, entrepreneurship, and commercial landscape" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">Business in Kenya</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kenya boasts one of the most dynamic business environments in Africa, with Nairobi serving as the region's commercial hub.
          </p>
        </div>

        {/* Business Landscape */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-300">Business Landscape</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                Kenya has established itself as East Africa's economic powerhouse with a diverse business sector ranging from multinational corporations to vibrant SMEs. Nairobi is home to regional headquarters of major international companies and a thriving startup ecosystem.
              </p>
              <p className="text-gray-300">
                The World Bank's 2020 Ease of Doing Business report ranked Kenya 56th globally, making it one of Africa's most business-friendly nations. Key advantages include a skilled English-speaking workforce, improving infrastructure, and access to regional markets.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-purple-300">Nairobi International Financial Centre</h3>
                  <p className="text-gray-400">Positioning Nairobi as a financial services hub for Eastern and Central Africa.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-300">Silicon Savannah</h3>
                  <p className="text-gray-400">Konza Technopolis aims to be Africa's leading technology hub.</p>
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
          <h2 className="text-3xl font-semibold mb-6 text-purple-300">Key Business Sectors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Financial Services</h3>
              <p className="text-gray-400">Kenya is a leader in mobile money with M-Pesa, and Nairobi hosts the Nairobi Securities Exchange, one of Africa's largest.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-3">Technology & Innovation</h3>
              <p className="text-gray-400">Home to over 200 tech startups, Kenya is Africa's Silicon Savannah with thriving fintech, agritech, and e-commerce sectors.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Retail & Trade</h3>
              <p className="text-gray-400">A growing middle class has spurred expansion of supermarkets, malls, and e-commerce platforms across the country.</p>
            </div>
          </div>
        </div>

        {/* Business Environment */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Ease of Doing Business</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span className="text-gray-300">Ranked 3rd in Africa for ease of doing business</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span className="text-gray-300">Online business registration through eCitizen platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span className="text-gray-300">Relatively straightforward process for foreign investors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span className="text-gray-300">Strong legal framework protecting investments</span>
              </li>
            </ul>
          </div>
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Entrepreneurship</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Vibrant SME sector contributing 40% of GDP</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Numerous incubators and accelerators supporting startups</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Government programs like Youth Fund and Uwezo Fund</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Growing venture capital and angel investor presence</span>
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
          <h2 className="text-3xl font-semibold mb-6 text-purple-300">Business Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Safaricom</h3>
              <p className="text-gray-300 mb-4">
                From a struggling telecom to East Africa's most profitable company, Safaricom revolutionized mobile money with M-Pesa and continues to innovate.
              </p>
              <div className="bg-purple-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-purple-200 italic">"Our success is built on understanding and serving Kenyan needs while thinking globally." - Peter Ndegwa, CEO</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Twiga Foods</h3>
              <p className="text-gray-300 mb-4">
                This agri-tech startup has transformed food distribution in Kenya using mobile technology, serving over 100,000 retailers across the country.
              </p>
              <div className="bg-purple-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-purple-200 italic">"Kenya's tech-savvy population and innovative spirit made our business model possible." - Grant Brooke, Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;