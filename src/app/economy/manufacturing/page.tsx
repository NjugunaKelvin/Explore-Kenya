'use client'

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const ManufacturingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Manufacturing in Kenya | Kenya Economy</title>
        <meta name="description" content="Overview of Kenya's manufacturing sector, its growth, challenges, and opportunities" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Manufacturing in Kenya</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kenya's manufacturing sector is a key pillar of the Big 4 Agenda, aiming to transform the nation into an industrialized middle-income country.
          </p>
        </div>

        {/* Sector Overview */}
        <div 
          className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Sector Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                Kenya's manufacturing sector contributes approximately 7.5% to GDP and employs over 300,000 people directly. The government aims to increase this contribution to 15% by 2030 through the Manufacturing Pillar of the Big 4 Agenda.
              </p>
              <p className="text-gray-300">
                Key sub-sectors include food processing, beverages, textiles, construction materials, chemicals, and pharmaceuticals. The sector benefits from a skilled workforce, improving infrastructure, and regional market access.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Special Economic Zones</h3>
                  <p className="text-gray-400">Kenya has established SEZs in Athi River, Mombasa, and Kisumu offering tax incentives and streamlined processes for manufacturers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-300">Growth Areas</h3>
                  <p className="text-gray-400">Agro-processing, leather products, textiles, and construction materials are identified as high-growth potential areas.</p>
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
            <h3 className="text-2xl font-bold text-blue-400 mb-2">7.5%</h3>
            <p className="text-gray-400">of GDP contributed by manufacturing</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">15%</h3>
            <p className="text-gray-400">target GDP contribution by 2030</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">300K+</h3>
            <p className="text-gray-400">direct employment in the sector</p>
          </div>
        </div>

        {/* Challenges & Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-red-300">Challenges</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">High cost of electricity and other utilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Competition from cheap imports</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Intermittent raw material supply</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-gray-300">Bureaucracy in business processes</span>
              </li>
            </ul>
          </div>
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Opportunities</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Growing domestic and regional markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Government incentives for local manufacturers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">African Continental Free Trade Area (AfCFTA) access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span className="text-gray-300">Growing demand for Made-in-Kenya products</span>
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
          <h2 className="text-3xl font-semibold mb-6 text-blue-300">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Bidco Africa</h3>
              <p className="text-gray-300 mb-4">
                Started as a small soap manufacturer, Bidco has grown into East Africa's largest consumer goods company with over 400 products exported to 16 countries.
              </p>
              <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-yellow-200 italic">"Our success demonstrates Kenya's potential as a manufacturing hub for Africa." - Vimal Shah, CEO</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Kapa Oil Refineries</h3>
              <p className="text-gray-300 mb-4">
                A leading edible oils manufacturer that has grown from a small operation to supplying products across East and Central Africa.
              </p>
              <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg">
                <p className="text-yellow-200 italic">"Kenya's strategic location gives us access to markets with over 300 million consumers." - Company Spokesperson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;