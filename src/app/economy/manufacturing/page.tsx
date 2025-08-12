/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer/Footer';

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
    <div className="bg-[#121212] text-white">
      <Head>
        <title>Manufacturing in Kenya | Industrial Growth Hub</title>
        <meta name="description" content="Explore Kenya's manufacturing sector - key industries, investment opportunities, and the country's role as East Africa's industrial powerhouse" />
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
            <div className="absolute inset-0 bg-[url('/images/manufacturing/landing.webp')] bg-cover bg-center opacity-90"></div>
            <div className="absolute inset-0 bg-[#121212] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h1 
                  className="text-5xl md:text-6xl font-normal text-white mb-4 tracking-tight"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Kenya's Industrial Revolution
                </h1>
                <h2 
                  className="text-3xl md:text-4xl subtitle text-white"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  East Africa's Manufacturing Powerhouse
                </h2>
              </div>
            </div>
          </div>

          <p 
            className="text-lg body-text text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Manufacturing contributes <span className="font-semibold text-[#F5C518]">10% of Kenya's GDP</span>, employing <span className="font-semibold">over 300,000 Kenyans</span> across diverse sectors from agro-processing to automotive assembly.
          </p>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Industrial Impact
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
                Manufacturing accounts for approximately 10% of Kenya's GDP, with the sector growing at an average of 8% annually.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/manufacturing/GDP.jpg" 
                  alt="Manufacturing GDP Growth Chart"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Employment</h3>
              <p className="text-gray-300 body-text mb-4">
                Over 300,000 direct jobs in manufacturing, with 3x multiplier effect in related sectors.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/manufacturing/jobs.jpg" 
                  alt="Manufacturing Employment Breakdown"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Export Earnings</h3>
              <p className="text-gray-300 body-text mb-4">
                Manufactured goods account for 35% of Kenya's total exports, with textiles and processed foods leading.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/manufacturing/exports.jpg" 
                  alt="Manufactured Exports Value Chart"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
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
              Key Manufacturing Sectors
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/manufacturing/agro.jpg" 
                alt="Agro-processing factory in Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-normal mb-4 text-white">Agro-Processing</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya is the world's 3rd largest tea exporter and processes coffee, dairy, fruits, and vegetables for local and export markets.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Products:</span> Tea, coffee, dairy, fruit concentrates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Export Value:</span> $2.3 billion annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Major Players:</span> KCC, Kakuzi, Del Monte</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/manufacturing/textile.jpg" 
                alt="Textile factory in Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-normal mb-4 text-white">Textiles & Apparel</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya exports over $400M annually under AGOA, producing uniforms, leather goods, and traditional fabrics.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Products:</span> AGOA garments, leather goods, kikoi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Export Value:</span> $400 million annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Major Hubs:</span> Athi River EPZ, Mombasa</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-8 mb-16 items-center"
            data-aos="fade-up"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/manufacturing/automotive.jpg" 
                alt="Automotive assembly plant in Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-normal mb-4 text-white">Automotive & Machinery</h3>
              <p className="text-gray-300 body-text mb-6">
                Growing at 12% annually, Kenya assembles buses, trucks, and motorbikes with potential in electric vehicle production.
              </p>
              <ul className="space-y-3 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Key Products:</span> Buses, trucks, motorbikes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Annual Output:</span> 5,000+ vehicles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span><span className="font-semibold">Major Players:</span> KVM, Thika, Mobius Motors</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Industrial Zones
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Nairobi & Athi River</h3>
              <p className="text-gray-300 body-text mb-6">
                Automotive, food processing, pharmaceuticals, and light manufacturing in Export Processing Zones.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/nairobi.jpg" 
                  alt="Nairobi Industrial Zones Map"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Over 50% of Kenya's manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Best infrastructure connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Major EPZ facilities</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Mombasa</h3>
              <p className="text-gray-300 body-text mb-6">
                Heavy industries, steel production, and port-related manufacturing activities.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/mombasa.jpg" 
                  alt="Mombasa Industrial Zones Map"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Port access advantages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Steel and cement production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Oil refining capacity</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#121212] p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Kisumu & Eldoret</h3>
              <p className="text-gray-300 body-text mb-6">
                Agro-processing hubs for western Kenya's agricultural output.
              </p>
              <div className="h-48 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/ek.jpg" 
                  alt="Western Kenya Industrial Zones Map"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <ul className="space-y-2 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Sugar milling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Dairy processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2">•</span>
                  <span>Grain milling</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Investment Advantages
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Strategic Location</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya serves as the gateway to East Africa with access to 300 million consumers through trade blocs.
              </p>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">EAC Access</h4>
                    <p className="text-gray-400">Duty-free access to 180M East Africans</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">AGOA Benefits</h4>
                    <p className="text-gray-400">Duty-free access to US market</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white subtitle mb-1">Port Connectivity</h4>
                    <p className="text-gray-400">Mombasa port serves 6 countries</p>
                  </div>
                </li>
              </ul>
            </div>

            <div 
              className="bg-[#1E1E1E] p-8 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Government Incentives</h3>
              <p className="text-gray-300 body-text mb-6">
                Kenya offers attractive packages for manufacturers:
              </p>
              <ul className="space-y-4 text-gray-300 body-text">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">10-year tax holidays</span> for Special Economic Zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Duty-free import</span> of manufacturing equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Investment allowances</span> up to 100%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Simplified licensing</span> through eCitizen</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Industrial Success Stories
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-[#121212] p-6 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Bidco Africa</h3>
              <p className="text-gray-300 body-text mb-4">
                From a single cooking oil brand to 22 manufacturing lines across East Africa, exporting to 16 countries with $500M+ revenue.
              </p>
              <div className="h-40 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/bidco.jpg" 
                  alt="Bidco Africa Manufacturing Facility"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-[#F5C518] text-sm subtitle">Consumer Goods • Regional Expansion</div>
            </div>

            <div 
              className="bg-[#121212] p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Kaluworks</h3>
              <p className="text-gray-300 body-text mb-4">
                East Africa's largest steel manufacturer producing 100,000+ tons annually, supplying regional construction projects.
              </p>
              <div className="h-40 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/kaluworks.jpg" 
                  alt="Kaluworks Steel Plant"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-[#F5C518] text-sm subtitle">Steel Manufacturing • Construction</div>
            </div>

            <div 
              className="bg-[#121212] p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-[#F5C518] pb-2">Kenya Vehicle Manufacturers</h3>
              <p className="text-gray-300 body-text mb-4">
                Assembling 5,000+ vehicles annually including buses for public transport and safari tourism.
              </p>
              <div className="h-40 bg-[#2A2A2A] rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src="/images/manufacturing/kvm.png" 
                  alt="KVM Vehicle Assembly Line"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-[#F5C518] text-sm subtitle">Automotive • Local Assembly</div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 
              className="text-4xl font-normal mr-6 text-white tracking-tight"
              data-aos="fade-up"
            >
              Future of Manufacturing
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
                  <span><span className="font-semibold">Electric vehicles:</span> Local assembly potential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Pharmaceuticals:</span> Regional vaccine production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Renewable energy:</span> Solar panel manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Agro-processing:</span> Value addition for exports</span>
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
                  <span><span className="font-semibold">Energy costs:</span> High electricity tariffs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Raw materials:</span> Import dependence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Competition:</span> Cheap imports from Asia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-3 text-xl">→</span>
                  <span><span className="font-semibold">Skills gap:</span> Technical workforce development</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section 
          className="bg-gradient-to-r from-[#1E1E1E] to-[#121212] text-white rounded-2xl p-12 text-center border border-[#F5C518]"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-normal mb-6 tracking-tight">Join Kenya's Industrial Transformation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto body-text text-gray-300">
            Explore investment opportunities, partnerships, or discover Kenyan-made products that showcase our industrial capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="bg-[#F5C518] text-[#121212] px-8 py-3 rounded-lg font-bold hover:bg-[#e6b800] transition-colors subtitle"
            >
              Investor Guide
            </a>
            <a 
              href="#" 
              className="border-2 border-[#F5C518] px-8 py-3 rounded-lg font-bold hover:bg-[#1E1E1E] transition-colors subtitle"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ManufacturingKenya;