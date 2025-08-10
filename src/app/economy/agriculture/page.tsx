/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AgricultureKenya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      <Head>
        <title>Agriculture in Kenya | Economic Backbone</title>
        <meta name="description" content="Comprehensive overview of Kenya's agricultural sector - from traditional farming to modern agribusiness, policy frameworks, and technological innovations" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Urbanist:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        h1, h2, h3, h4 {
          font-family: 'Caprasimo', cursive;
          letter-spacing: 0.03em;
          font-weight: 400;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .subtitle {
          font-family: 'Urbanist', sans-serif;
          font-weight: 600;
        }
        .body-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <div 
            className="relative h-96 w-full overflow-hidden rounded-lg mb-8"
            data-aos="fade-in"
          >
            <div className="absolute inset-0 bg-[url('/images/agri/tea-farm.jpg')] bg-cover bg-center opacity-90"></div>
            <div className="absolute inset-0 bg-[#121212] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h1 
                  className="text-5xl md:text-6xl font-normal text-white mb-4 tracking-tight"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Kenya's Agricultural Landscape
                </h1>
                <h2 
                  className="text-3xl md:text-4xl subtitle text-white"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Feeding the Nation, Powering the Economy
                </h2>
              </div>
            </div>
          </div>

          <p 
            className="text-lg body-text text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Agriculture remains the <span className="font-semibold text-[#F5C518]">backbone of Kenya's economy</span>, contributing <span className="font-semibold">34% of GDP</span> and employing <span className="font-semibold">over 40%</span> of the workforce. From smallholder farms to large-scale tea plantations, Kenya's diverse agricultural sector continues to evolve.
          </p>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Economic Powerhouse
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">GDP Contribution</h3>
              <p className="text-gray-300 body-text mb-4">
                Agriculture accounts for approximately 34% of Kenya's GDP, with the sector growing at an average of 4.5% annually.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                <p className="text-gray-400">[GDP Growth Chart]</p>
              </div>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Employment</h3>
              <p className="text-gray-300 body-text mb-4">
                Over 40% of Kenya's total workforce and 70% of rural employment comes from agriculture.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                <p className="text-gray-400">[Employment Breakdown Infographic]</p>
              </div>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Export Earnings</h3>
              <p className="text-gray-300 body-text mb-4">
                Agricultural products account for 65% of Kenya's total export earnings, with tea, coffee, and horticulture leading.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center">
                <p className="text-gray-400">[Export Value Chart]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Key Agricultural Sectors
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          {/* Tea */}
          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/agri/tea-picking.jpg')] bg-cover bg-center"></div>
            </div>
            <div>
              <h3 className="text-3xl font-normal mb-4 text-white">Tea Production</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya is the world's largest exporter of black tea, producing over 500,000 metric tons annually. The sector employs over 3 million people directly and indirectly.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Regions:</span> Kericho, Nandi, Murang'a</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Export Value:</span> $1.2 billion annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Challenges:</span> Climate change, low prices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Horticulture */}
          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/agri/flower-farm.jpg')] bg-cover bg-center"></div>
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-normal mb-4 text-white">Horticulture</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya is Africa's leading exporter of cut flowers and a major supplier of fresh produce to European markets.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Products:</span> Roses, French beans, avocados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Export Value:</span> $1.1 billion annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Challenges:</span> EU regulations, air freight costs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dairy */}
          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/agri/dairy-farm.jpg')] bg-cover bg-center"></div>
            </div>
            <div>
              <h3 className="text-3xl font-normal mb-4 text-white">Dairy Sector</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya has the most developed dairy industry in East Africa, producing over 5.2 billion liters of milk annually.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Regions:</span> Rift Valley, Central Kenya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Market Value:</span> $1.5 billion annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Challenges:</span> Feed costs, milk preservation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regional Variations */}
        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Agricultural Regions
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Highlands</h3>
              <p className="text-gray-300 body-text mb-6">
                Fertile volcanic soils ideal for tea, coffee, and dairy farming.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">[Highlands Map]</p>
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>1200-2500mm annual rainfall</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Large-scale commercial farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Main crops: Tea, coffee, dairy</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Coastal</h3>
              <p className="text-gray-300 body-text mb-6">
                Tropical climate suitable for fruits and irrigated agriculture.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">[Coastal Map]</p>
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>800-1200mm annual rainfall</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Smallholder systems dominate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Main crops: Coconuts, cashews, mangoes</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Arid & Semi-Arid</h3>
              <p className="text-gray-300 body-text mb-6">
                Pastoralism and drought-resistant crops dominate these regions.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">[Arid Lands Map]</p>
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Less than 500mm annual rainfall</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Pastoral livestock systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Main activities: Livestock, drought crops</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modern Innovations */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Agricultural Innovation
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Digital Agriculture</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya is leading Africa in agricultural technology adoption:
              </p>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">M-Farm</h4>
                    <p className="text-gray-400">Connects farmers directly to markets via SMS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">iCow</h4>
                    <p className="text-gray-400">Livestock management platform with 1M+ users</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">Twiga Foods</h4>
                    <p className="text-gray-400">AI-powered food distribution platform</p>
                  </div>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Climate-Smart Farming</h3>
              <p className="text-gray-300 body-text mb-6">
                Innovations helping farmers adapt to climate change:
              </p>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">Drip Irrigation</h4>
                    <p className="text-gray-400">Water-efficient systems for arid regions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">Greenhouse Tech</h4>
                    <p className="text-gray-400">Protected farming increasing yields 5x</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">Solar Solutions</h4>
                    <p className="text-gray-400">Solar-powered irrigation and cooling</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Policy */}
        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Policy & Institutions
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center subtitle">
                <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Key Policies
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Agricultural Sector Transformation Strategy", focus: "2019-2029 Growth Plan", url: "#" },
                  { name: "Big Four Agenda", focus: "Food Security Pillar", url: "#" },
                  { name: "Climate-Smart Agriculture Strategy", focus: "Climate Adaptation", url: "#" },
                  { name: "National Irrigation Policy", focus: "Water Resource Management", url: "#" }
                ].map((policy, index) => (
                  <div
                    key={index}
                    className="bg-[#121212] p-4 rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h4 className="font-bold text-white subtitle">{policy.name}</h4>
                    <p className="text-sm text-[#CCCCCC] body-text">{policy.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center subtitle">
                <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Major Institutions
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Ministry of Agriculture", focus: "Policy & Regulation", url: "#" },
                  { name: "KALRO", focus: "Agricultural Research", url: "#" },
                  { name: "Agriculture Finance Corporation", focus: "Farmer Financing", url: "#" },
                  { name: "Tea Board of Kenya", focus: "Tea Sector Regulation", url: "#" }
                ].map((institution, index) => (
                  <a
                    key={index}
                    href={institution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#121212] p-4 rounded-lg hover:bg-[#2A2A2A] transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h4 className="font-bold text-white subtitle">{institution.name}</h4>
                    <p className="text-sm text-[#CCCCCC] body-text">{institution.focus}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Future of Kenyan Agriculture
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Opportunities</h3>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Agro-processing:</span> Adding value to raw agricultural products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Export expansion:</span> New markets in Asia and Middle East</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Youth engagement:</span> Tech-savvy young farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Organic farming:</span> Growing global demand</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Challenges</h3>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Climate change:</span> Erratic weather patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Land fragmentation:</span> Shrinking farm sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Input costs:</span> Rising fertilizer and fuel prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Post-harvest losses:</span> Up to 40% of produce</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="bg-gradient-to-r from-[#1E1E1E] to-[#121212] text-white rounded-2xl p-12 text-center border border-[#F5C518]"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-normal mb-6 tracking-tight">Explore Kenya's Agricultural Potential</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto body-text text-gray-300">
            From farm to table, Kenya's agricultural sector offers diverse opportunities for investment, innovation, and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="bg-[#F5C518] text-[#121212] px-8 py-3 rounded-lg font-bold hover:bg-[#e6b800] transition-colors subtitle"
            >
              Investment Opportunities
            </a>
            <a 
              href="#" 
              className="border-2 border-[#F5C518] px-8 py-3 rounded-lg font-bold hover:bg-[#1E1E1E] transition-colors subtitle"
            >
              Research & Data
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Kenya Agriculture</h3>
              <p className="text-[#CCCCCC] body-text">
                Comprehensive resource on Kenya's agricultural sector - from policy to practice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Quick Links</h3>
              <ul className="space-y-2 text-[#CCCCCC] body-text">
                <li><a href="#" className="hover:text-[#F5C518] transition-colors">Ministry of Agriculture</a></li>
                <li><a href="#" className="hover:text-[#F5C518] transition-colors">Agricultural Statistics</a></li>
                <li><a href="#" className="hover:text-[#F5C518] transition-colors">Research Institutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#F5C518] pb-2 subtitle">Contact</h3>
              <ul className="space-y-2 text-[#CCCCCC] body-text">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@kenyaagriculture.co.ke</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#F5C518] pt-8 text-center text-[#CCCCCC] body-text">
            <p>© {new Date().getFullYear()} Kenya Agriculture Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgricultureKenya;