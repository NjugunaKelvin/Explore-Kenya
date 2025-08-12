/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '@/Components/Footer/Footer';

const InvestKenya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="bg-[#121212] text-white overflow-x-hidden">
      <Head>
        <title>Invest in Kenya | Gateway to East Africa</title>
        <meta name="description" content="Kenya offers unparalleled investment opportunities with strategic location, growing economy, and investor-friendly policies. Discover why global investors choose Kenya." />
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

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section with Video Background */}
        <section className="mb-20 relative h-screen min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/images/invest/kenya.jpg')] bg-cover bg-center opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
          <div className="relative z-10 text-center px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-normal text-white mb-6">
              <span className="text-[#F5C518]">Invest</span> in Kenya
            </h1>
            <h2 className="text-2xl md:text-3xl subtitle text-white mb-8 max-w-3xl mx-auto">
              East Africa's most dynamic economy with <span className="text-[#F5C518]">high-growth opportunities</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-4 px-10 rounded-lg text-lg transition-colors subtitle">
                Download Investment Profile
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors subtitle">
                Speak to Our Team
              </button>
            </div>
          </div>
          
        </section>

        {/* Why Kenya Section */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-white mb-4" data-aos="fade-up">
              Why <span className="text-[#F5C518]">Kenya?</span>
            </h2>
            <div className="w-24 h-1 bg-[#F5C518] mx-auto mb-6" data-aos="fade-up"></div>
            <p className="text-xl body-text text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
              Kenya offers international investors unique advantages in Africa's fastest-growing region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Strategic Gateway",
                desc: "Access to 300M+ consumers through EAC and COMESA trade blocs"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Economic Growth",
                desc: "Consistent 5-6% annual GDP growth with stable macroeconomic policies"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Investor Protections",
                desc: "Strong legal framework with bilateral investment treaties and IP protection"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Diverse Economy",
                desc: "Opportunities across sectors from tech to manufacturing to infrastructure"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Skilled Workforce",
                desc: "Young, educated English-speaking population with technical skills"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: "Global Connectivity",
                desc: "Direct flights to 50+ international destinations and modern ports"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#1E1E1E] p-8 rounded-xl hover:border hover:border-[#F5C518]/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 body-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="mb-28">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-normal mr-6 text-white tracking-tight" data-aos="fade-up">
              Priority <span className="text-[#F5C518]">Investment Sectors</span>
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent" data-aos="fade-up"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Infrastructure",
                desc: "$62B needed in roads, railways, ports and energy projects under Vision 2030",
                image: "/images/invest/road.jpg",
                stats: ["Public-Private Partnerships", "10-15% ROI", "20-year concessions"]
              },
              {
                title: "Technology & Innovation",
                desc: "Africa's Silicon Savannah with 200+ tech startups and $1B+ annual investment",
                image: "/images/invest/tech.jpg",
                stats: ["30% growth in VC funding", "Tax incentives", "Digital talent pool"]
              },
              {
                title: "Manufacturing",
                desc: "Special Economic Zones offer 10-year tax holidays for export-oriented industries",
                image: "/images/invest/manufacturing.jpg",
                stats: ["$1B AGOA exports", "Duty-free imports", "Low-cost labor"]
              },
              {
                title: "Renewable Energy",
                desc: "90% renewable energy mix with potential in geothermal, wind and solar projects",
                image: "/images/invest/energy.jpg",
                stats: ["Feed-in tariffs", "20-year PPAs", "400MW geothermal potential"]
              }
            ].map((sector, index) => (
              <div 
                key={index}
                className="group relative h-96 rounded-xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-[#121212]/70 z-10"></div>
                <Image
                  src={sector.image}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{sector.title}</h3>
                  <p className="text-gray-300 body-text mb-4">{sector.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.stats.map((stat, i) => (
                      <span key={i} className="bg-[#F5C518]/10 text-[#F5C518] px-3 py-1 rounded-full text-sm body-text">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Process */}
        <section className="mb-28 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-white mb-4" data-aos="fade-up">
              The <span className="text-[#F5C518]">Investment Journey</span>
            </h2>
            <div className="w-24 h-1 bg-[#F5C518] mx-auto mb-6" data-aos="fade-up"></div>
            <p className="text-xl body-text text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
              Kenya offers streamlined processes for foreign investors through the Kenya Investment Authority
            </p>
          </div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-16 top-1/2 h-1 w-[calc(100%-8rem)] bg-gray-600 -translate-y-1/2" data-aos="fade"></div>
            
            <div className="space-y-16 md:space-y-0">
              {[
                {
                  step: "1",
                  title: "Investment Proposal",
                  desc: "Submit project details to Kenya Investment Authority for evaluation and approval",
                  icon: (
                    <svg className="w-8 h-8 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  step: "2",
                  title: "Business Registration",
                  desc: "Incorporate your company through eCitizen portal (average 7 days)",
                  icon: (
                    <svg className="w-8 h-8 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  step: "3",
                  title: "Licenses & Permits",
                  desc: "Obtain necessary sector-specific licenses through single window system",
                  icon: (
                    <svg className="w-8 h-8 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  step: "4",
                  title: "Implementation",
                  desc: "KenInvest provides aftercare services including site selection support",
                  icon: (
                    <svg className="w-8 h-8 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="md:flex items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 relative z-20">
                    <div className="w-16 h-16 rounded-full bg-[#F5C518] flex items-center justify-center mx-auto md:mx-0 mb-4 md:mb-0">
                      <div className="w-14 h-14 rounded-full bg-[#F5C518] border-4 border-[#121212] flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className={`md:flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 body-text">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Testimonials */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-white mb-4" data-aos="fade-up">
              What <span className="text-[#F5C518]">Investors Say</span>
            </h2>
            <div className="w-24 h-1 bg-[#F5C518] mx-auto mb-6" data-aos="fade-up"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Kenya's skilled workforce and strategic location made it the perfect choice for our African headquarters.",
                name: "Sarah Johnson",
                title: "CEO, TechGlobal Africa",
                image: "/images/invest/p.jpg"
              },
              {
                quote: "The incentives in Special Economic Zones reduced our startup costs by 30% compared to other markets.",
                name: "Michael Chen",
                title: "MD, Orient Manufacturing",
                image: "/images/invest/p.jpg"
              },
              {
                quote: "We've achieved 25% annual growth in Kenya thanks to the thriving middle class consumer market.",
                name: "Amina Sow",
                title: "CFO, ConsumerGoods Africa",
                image: "/images/invest/p.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#1E1E1E] p-8 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl text-[#F5C518] mb-4">"</div>
                <p className="text-gray-300 body-text italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm body-text">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Incentives */}
        <section className="mb-28">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-normal mr-6 text-white tracking-tight" data-aos="fade-up">
              Investor <span className="text-[#F5C518]">Incentives</span>
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent" data-aos="fade-up"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <div className="bg-[#1E1E1E] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Tax Benefits
                </h3>
                <ul className="space-y-4 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">10-year tax holiday</span> for Special Economic Zones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">150% deduction</span> for R&D expenditure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">0% withholding tax</span> on dividends for EPZ enterprises</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1E1E1E] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Financial Incentives
                </h3>
                <ul className="space-y-4 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">100% foreign ownership</span> allowed in most sectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">No restrictions</span> on foreign currency accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Guaranteed repatriation</span> of profits and capital</span>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="bg-[#1E1E1E] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Trade Benefits
                </h3>
                <ul className="space-y-4 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Duty-free access</span> to US under AGOA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Duty-free imports</span> of manufacturing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">EAC Common Market</span> with 180M consumers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1E1E1E] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Investor Protections
                </h3>
                <ul className="space-y-4 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Bilateral investment treaties</span> with 45+ countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">International arbitration</span> recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-3 text-xl">→</span>
                    <span><span className="font-semibold">Strong IP laws</span> with WTO compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-16 text-center border border-[#F5C518]/30 mb-16">
          <h2 className="text-4xl font-normal text-white mb-6" data-aos="fade-up">
            Ready to Invest in <span className="text-[#F5C518]">Kenya's Future?</span>
          </h2>
          <p className="text-xl body-text text-gray-300 max-w-3xl mx-auto mb-8" data-aos="fade-up">
            Our dedicated investment team will guide you through every step of establishing and growing your business in Kenya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up">
            <button className="bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] px-10 py-4 rounded-lg font-bold text-lg transition-colors subtitle">
              Schedule Consultation
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors subtitle">
              Download Full Guide
            </button>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default InvestKenya;