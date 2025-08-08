/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';

// AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TechnologyKenya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Technology in Kenya | Africa's Silicon Savannah</title>
        <meta name="description" content="Discover Kenya's thriving tech ecosystem - from M-Pesa's mobile money revolution to cutting-edge startups and investment opportunities in Africa's innovation hub" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div 
            className="relative h-96 w-full overflow-hidden rounded-lg mb-8"
            data-aos="fade-in"
          >
            <Image
              src="/images/tech/nairobi-skyline.jpg" // Replace with your image
              alt="Nairobi tech hub"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h1 
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Technology in Kenya
                </h1>
                <h2 
                  className="text-2xl md:text-3xl font-semibold text-yellow-300"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Africa's Silicon Savannah
                </h2>
              </div>
            </div>
          </div>

          <p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Kenya has emerged as <span className="font-semibold text-purple-600">East Africa's undisputed tech powerhouse</span>, pioneering mobile money with M-Pesa and nurturing over <span className="font-semibold text-purple-600">200 startups</span> in Nairobi's thriving ecosystem. With <span className="font-semibold text-purple-600">87% internet penetration</span> and a young, tech-savvy population, Kenya leads Africa in fintech innovation, digital transformation, and tech talent development.
          </p>
        </section>

        {/* Key Sectors Section */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Kenya's Thriving Tech Sectors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fintech */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
              data-aos="fade-up"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/m-pesa.jpg" // Replace with your image
                  alt="M-Pesa mobile money"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Fintech Revolution</h3>
                </div>
                <p className="text-gray-600">
                  Home to <span className="font-semibold">M-Pesa</span> (used by 80% of adults), Kenya processes <span className="font-semibold">$50B+</span> annually in mobile money - more than Western Union globally. The sector includes:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Digital lenders like Branch and Tala</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Payment platforms (Pesapal, DPO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Blockchain solutions (BitPesa)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* E-commerce */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/e-commerce.jpg" // Replace with your image
                  alt="E-commerce in Kenya"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">E-commerce Boom</h3>
                </div>
                <p className="text-gray-600">
                  Kenya's online shopping market grows at <span className="font-semibold">25% annually</span>, fueled by mobile payments and logistics innovation:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Pan-African platforms (Jumia, Glovo)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Last-mile delivery solutions (Sendy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>B2B marketplaces (Twiga Foods)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Agri-tech */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/agri-tech.jpg" // Replace with your image
                  alt="Agri-tech solutions"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Agri-tech Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Tech is transforming Kenya's <span className="font-semibold">agriculture sector</span> (25% of GDP) through:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Farm management apps (iCow, FarmDrive)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Drone-based crop monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Digital marketplaces (M-Farm)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Health-tech */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
              data-aos="fade-up"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/health-tech.jpg" // Replace with your image
                  alt="Health tech in Kenya"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">Health-tech Solutions</h3>
                </div>
                <p className="text-gray-600">
                  Kenya's <span className="font-semibold">health-tech sector</span> bridges healthcare gaps with:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Telemedicine platforms (MyDaktari)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>EHR systems (AfyaPro)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>AI diagnostics (LindaWazi)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ed-tech */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/ed-tech.jpg" // Replace with your image
                  alt="Education technology"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-700">Ed-tech Advancement</h3>
                </div>
                <p className="text-gray-600">
                  Digital learning solutions address Kenya's <span className="font-semibold">education challenges</span>:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>E-learning platforms (Eneza, Kytabu)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Digital literacy programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>STEM education tools</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ICT Infrastructure */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/ict-infrastructure.jpg" // Replace with your image
                  alt="ICT infrastructure"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-700">ICT Infrastructure</h3>
                </div>
                <p className="text-gray-600">
                  Kenya's <span className="font-semibold">digital backbone</span> includes:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>5 undersea fiber optic cables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>4G coverage in 96% of populated areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Major data centers (IXAfrica, Africa Data Centres)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Kenya's Tech Milestones
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              data-aos="zoom-in"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">2007</div>
              <h3 className="text-xl font-semibold mb-2">M-Pesa Launch</h3>
              <p className="text-gray-600">
                World's first successful mobile money platform launched by Safaricom, now with 51M users across 7 countries.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">200+</div>
              <h3 className="text-xl font-semibold mb-2">Active Startups</h3>
              <p className="text-gray-600">
                Nairobi hosts Africa's 3rd largest startup ecosystem after Lagos and Cape Town.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">2010</div>
              <h3 className="text-xl font-semibold mb-2">iHub Founded</h3>
              <p className="text-gray-600">
                Africa's pioneer tech hub has incubated 150+ companies raising over $40M in funding.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">$1B+</div>
              <h3 className="text-xl font-semibold mb-2">Startup Funding</h3>
              <p className="text-gray-600">
                Kenyan tech startups attracted over $1 billion in investment since 2015.
              </p>
            </div>
          </div>

          <div 
            className="mt-12 bg-white rounded-xl p-8 shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Success Story: Twiga Foods</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/3 h-48">
                <Image
                  src="/images/tech/twiga-foods.jpg" // Replace with your image
                  alt="Twiga Foods"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Starting in 2014 as a mobile-based food distribution platform, Twiga Foods now:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Serves <span className="font-semibold">10,000+ vendors</span> daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Raised <span className="font-semibold">$100M+</span> in funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Expanded to <span className="font-semibold">3 countries</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Reduces food prices by <span className="font-semibold">10-15%</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Why Invest in Kenya's Tech Sector?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-500"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">Government Support</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">Konza Technopolis</span> - $14.5B smart city project with tax incentives</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">Digital Economy Blueprint</span> prioritizing tech infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">Startup Act</span> providing legal framework for tech entrepreneurs</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Market Advantages</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">English-speaking</span> tech talent at competitive rates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">87% mobile penetration</span> with 59M+ mobile subscriptions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><span className="font-semibold">Gateway</span> to 300M+ East African market</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-bold mb-3 text-green-600">High-Growth Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cloud computing services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cybersecurity solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>AI and big data analytics</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-bold mb-3 text-yellow-600">Funding Landscape</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Active VC firms (Novastar, Acumen)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Corporate innovation programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Government matching funds</span>
                </li>
              </ul>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-bold mb-3 text-indigo-600">Talent Pool</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>50,000+ tech graduates annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Ranked #1 in Africa for developer skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Growing AI/ML expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Organizations */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Key Tech Organizations & Hubs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://ihub.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
            >
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">iHub</h3>
                <p className="text-gray-600 text-sm">Africa's pioneer tech innovation hub since 2010</p>
              </div>
            </a>

            <a 
              href="https://konza.go.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Konza Technopolis</h3>
                <p className="text-gray-600 text-sm">Kenya's $14.5B smart city of the future</p>
              </div>
            </a>

            <a 
              href="https://icta.go.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">ICT Authority</h3>
                <p className="text-gray-600 text-sm">Government agency driving digital transformation</p>
              </div>
            </a>

            <a 
              href="https://nailab.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Nailab</h3>
                <p className="text-gray-600 text-sm">Leading startup accelerator program</p>
              </div>
            </a>

            <a 
              href="https://moringaschool.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Moringa School</h3>
                <p className="text-gray-600 text-sm">Premier coding bootcamp training developers</p>
              </div>
            </a>

            <a 
              href="https://kendb.or.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Kenya Digital Economy</h3>
                <p className="text-gray-600 text-sm">Government digital transformation blueprint</p>
              </div>
            </a>
          </div>
        </section>

        {/* Challenges & Future Outlook */}
        <section className="mb-20 bg-gray-100 rounded-2xl p-12">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Challenges & The Road Ahead
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Current Challenges
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Digital Divide</h4>
                    <p className="text-gray-600">
                      Urban areas enjoy 35Mbps average speeds while rural regions struggle with 2Mbps, with 22% of Kenyans still offline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Cybersecurity Threats</h4>
                    <p className="text-gray-600">
                      Kenya suffers 5.4M cyberattacks monthly, with mobile money systems being prime targets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Funding Gaps</h4>
                    <p className="text-gray-600">
                      Early-stage startups face a "valley of death" with only 12% securing Series A funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Future Outlook
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">5G & Fiber Expansion</h4>
                    <p className="text-gray-600">
                      Safaricom's 5G rollout and Last Mile Fiber project aim to connect 5M more Kenyans by 2025.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AI & Big Data</h4>
                    <p className="text-gray-600">
                      Nairobi's AI research labs and data centers position Kenya as Africa's analytics hub.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Smart Cities</h4>
                    <p className="text-gray-600">
                      Konza Technopolis Phase 1 completion in 2024 will create 17,000 tech jobs and $1B in investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="mt-12 bg-white rounded-xl p-8 shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Kenya's Digital Superhighway</h3>
            <p className="text-gray-700 mb-6">
              The government's <span className="font-semibold">Digital Economy Blueprint</span> targets:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-purple-600 font-bold mb-2">100% Coverage</div>
                <div className="text-sm">Universal broadband access by 2030</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold mb-2">1M Jobs</div>
                <div className="text-sm">In digital economy by 2025</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-bold mb-2">Paperless Govt</div>
                <div className="text-sm">80% of services digitized</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="mb-12">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-purple-800"
            data-aos="fade-up"
          >
            Tech in Kenya: Did You Know?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-purple-400 transform hover:-translate-y-2 transition-transform"
              data-aos="flip-left"
            >
              <div className="text-purple-500 text-5xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4">Cashless Society</h3>
              <p className="text-gray-600">
                Over <span className="font-semibold">80% of Kenyan adults</span> use mobile money regularly. You can pay for everything from street food to hospital bills via M-Pesa - no wallet needed!
              </p>
            </div>

            <div 
              className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 transform hover:-translate-y-2 transition-transform"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="text-yellow-500 text-5xl mb-6">🦁</div>
              <h3 className="text-xl font-bold mb-4">Silicon Savannah</h3>
              <p className="text-gray-600">
                Nairobi's nickname combines tech innovation with Kenya's wildlife heritage. The <span className="font-semibold">iHub</span> building even has a lion sculpture in its courtyard!
              </p>
            </div>

            <div 
              className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-400 transform hover:-translate-y-2 transition-transform"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="text-blue-500 text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4">5G Pioneer</h3>
              <p className="text-gray-600">
                Kenya was <span className="font-semibold">among the first</span> African countries to test 5G in 2021. Safaricom now offers 5G in major cities with speeds up to 700Mbps.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6">Join Kenya's Tech Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're an investor, entrepreneur, or tech professional, Kenya's Silicon Savannah offers unparalleled opportunities in Africa's most dynamic digital economy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Explore Investment Opportunities
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-purple-500 transition-colors">
              Connect With Tech Hubs
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Kenya Technology Guide. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyKenya;