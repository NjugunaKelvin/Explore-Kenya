/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';

const AgriculturePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Navbar />
      <Head>
        <title>Agriculture in Kenya | Kenya Economy</title>
        <meta name="description" content="Overview of Kenya's agricultural sector, its importance, challenges, and innovations" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Agriculture in Kenya</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agriculture is the backbone of Kenya's economy, contributing significantly to GDP, employment, and food security.
          </p>
        </div>

        {/* Sector Overview */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Sector Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                Agriculture accounts for about 34% of Kenya's GDP and employs more than 40% of the total population. The sector contributes over 65% of Kenya's export earnings through products like tea, coffee, cut flowers, and fresh produce.
              </p>
              <p className="text-gray-300">
                Kenya's diverse climate allows for cultivation of various crops including tropical fruits in coastal areas, tea in highlands, and drought-resistant crops in arid regions. The government's Big 4 Agenda prioritizes food security and agricultural transformation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-yellow-300">Global Leader</h3>
                  <p className="text-gray-400">World's largest exporter of black tea and a major exporter of cut flowers to Europe.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-300">Innovation Hub</h3>
                  <p className="text-gray-400">Pioneering agricultural technologies like M-Kulima and iCow apps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">34%</h3>
            <p className="text-gray-400">of GDP contributed by agriculture</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">40%+</h3>
            <p className="text-gray-400">of workforce employed in agriculture</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">65%</h3>
            <p className="text-gray-400">of export earnings from agricultural products</p>
          </div>
        </div>

        {/* Main Crops & Products */}
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Main Agricultural Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-green-400 mb-3">Tea</h3>
              <p className="text-gray-400">Kenya is the world's largest exporter of black tea, producing about 10% of global supply.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Horticulture</h3>
              <p className="text-gray-400">Cut flowers, fruits and vegetables earn over $1 billion annually, mainly exported to Europe.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Coffee</h3>
              <p className="text-gray-400">High-quality Arabica coffee from regions like Nyeri and Kirinyaga is prized globally.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-red-400 mb-3">Livestock</h3>
              <p className="text-gray-400">Dairy is Kenya's largest agricultural sub-sector by value, with 4 billion liters produced annually.</p>
            </div>
          </div>
        </div>

        {/* Challenges & Innovations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <h2 className="text-2xl font-semibold mb-4 text-red-300">Challenges</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Climate change and unpredictable weather patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">High cost of farm inputs and limited access to credit</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Post-harvest losses estimated at 30-40% of production</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Fragmented land ownership and small farm sizes</span>
              </li>
            </ul>
          </div>
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Innovations</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Mobile-based solutions like M-Kulima and iCow providing extension services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Drip irrigation and greenhouse technologies improving yields</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Contract farming models linking smallholders to markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Agri-tech startups improving supply chains (Twiga Foods, Apollo Agriculture)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Government Initiatives */}
        <div 
          className="bg-gray-800 rounded-xl p-8 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Government Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Big 4 Agenda - Food Security</h3>
              <p className="text-gray-300 mb-4">
                The government aims to achieve 100% food security by 2022 through initiatives like subsidized fertilizer, irrigation projects, and support for value addition.
              </p>
              <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-yellow-200 italic">"Our focus is on moving from subsistence to commercial agriculture through modernization and value addition." - Ministry of Agriculture</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">Agricultural Transformation</h3>
              <p className="text-gray-300 mb-4">
                Programs like the National Agricultural Rural Inclusivity Project (NARIP) aim to increase productivity, improve market access, and build resilience to climate change.
              </p>
              <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-yellow-200 italic">"We're investing in value chains for maize, dairy, rice, and potatoes to boost incomes and food security." - Agricultural Cabinet Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturePage;