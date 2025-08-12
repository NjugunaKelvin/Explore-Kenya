/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BusinessKenya = () => {
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
        <title>Business in Kenya | Economic Hub of East Africa</title>
        <meta name="description" content="Comprehensive guide to doing business in Kenya - currency, regulations, investment opportunities, and economic landscape" />
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
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-5xl md:text-6xl font-normal text-white mb-6 tracking-tight">
                Business Landscape <span className="text-[#F5C518]">in Kenya</span>
              </h1>
              <p className="text-xl body-text text-gray-300 mb-8 leading-relaxed">
                Kenya serves as East Africa's economic hub with a <span className="font-semibold">diversified economy</span>, robust financial sector, and strategic trade connections. The Kenyan Shilling (KES) is the official currency, with $1 ≈ KES 150 (2024).
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#F5C518]">
                  <div className="text-2xl font-bold text-white mb-1">1.2%</div>
                  <div className="text-sm text-gray-400 body-text">Inflation Rate</div>
                </div>
                <div className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#F5C518]">
                  <div className="text-2xl font-bold text-white mb-1">5.6%</div>
                  <div className="text-sm text-gray-400 body-text">GDP Growth</div>
                </div>
                <div className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#F5C518]">
                  <div className="text-2xl font-bold text-white mb-1">#56</div>
                  <div className="text-sm text-gray-400 body-text">Ease of Business</div>
                </div>
              </div>
              <button className="bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] font-bold py-3 px-8 rounded-lg transition-colors subtitle">
                Currency Converter
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-96" data-aos="fade-left">
              <Image
                src="/images/business/currency.jpg"
                alt="Kenyan currency and business"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Economic Overview */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-white mb-4" data-aos="fade-up">
              Kenya's Economic Pillars
            </h2>
            <div className="w-32 h-1 bg-[#F5C518] mx-auto mb-6" data-aos="fade-up"></div>
            <p className="text-xl body-text text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
              Kenya's economy rests on four main sectors that contribute to its <span className="text-[#F5C518]">$110 billion GDP</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Agriculture",
                desc: "34% of GDP, tea, coffee, horticulture",
                icon: "🌱",
                color: "bg-green-900/30"
              },
              {
                title: "Manufacturing",
                desc: "10% of GDP, food processing, textiles",
                icon: "🏭",
                color: "bg-blue-900/30"
              },
              {
                title: "Services",
                desc: "47% of GDP, finance, tourism, IT",
                icon: "💼",
                color: "bg-purple-900/30"
              },
              {
                title: "Trade",
                desc: "9% of GDP, regional hub, Mombasa port",
                icon: "🛒",
                color: "bg-amber-900/30"
              }
            ].map((sector, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${sector.color} backdrop-blur-sm`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-gray-300 body-text">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Currency & Banking Section */}
        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-normal text-white mb-6">
                Kenyan <span className="text-[#F5C518]">Currency & Banking</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#F5C518] pl-4">
                  <h3 className="text-2xl font-bold text-white mb-2 subtitle">Kenyan Shilling (KES)</h3>
                  <p className="text-gray-300 body-text">
                    The official currency since 1966, issued by the Central Bank of Kenya. Current denominations include coins (1, 5, 10, 20 shillings) and notes (50, 100, 200, 500, 1000 shillings).
                  </p>
                </div>
                <div className="border-l-4 border-[#F5C518] pl-4">
                  <h3 className="text-2xl font-bold text-white mb-2 subtitle">Banking System</h3>
                  <p className="text-gray-300 body-text">
                    Kenya has 39 commercial banks with mobile money (M-Pesa) revolutionizing financial inclusion. Over 75% of adults have access to formal financial services.
                  </p>
                </div>
                <div className="border-l-4 border-[#F5C518] pl-4">
                  <h3 className="text-2xl font-bold text-white mb-2 subtitle">Forex Regulations</h3>
                  <p className="text-gray-300 body-text">
                    Liberal exchange regime with no restrictions on foreign currency accounts. The shilling floats freely against major currencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96" data-aos="fade-left">
              <Image
                src="/images/business/banks.jpg"
                alt="Kenyan banking system"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-normal text-white mb-12 text-center" data-aos="fade-up">
            Doing Business in Kenya
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden" data-aos="fade-up">
              <div className="relative h-48">
                <Image
                  src="/images/business/reg.jpg"
                  alt="Company registration"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Starting a Business</h3>
                <ul className="space-y-3 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Registration through eCitizen portal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Average 14 days to incorporate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Minimum capital: KES 100,000 for foreigners</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-48">
                <Image
                  src="/images/business/tax.jpg"
                  alt="Taxation in Kenya"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Taxation</h3>
                <ul className="space-y-3 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Corporate tax: 30% (25% for SMEs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>VAT: 16% standard rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Withholding tax: 3-20%</span>
                  </li> 
                </ul>
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-48">
                <Image
                  src="/images/business/invest.jpg"
                  alt="Investment opportunities"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Investment Incentives</h3>
                <ul className="space-y-3 text-gray-300 body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>10-year tax holidays in SEZs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>100% investment deduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Duty-free import of machinery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-normal mr-6 text-white tracking-tight" data-aos="fade-up">
              Key Business Sectors
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F5C518] to-transparent" data-aos="fade-up"></div>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Financial Technology",
                desc: "Kenya is Africa's fintech leader with M-Pesa processing over $50B annually",
                stats: "400+ fintech startups",
                image: "/images/business/fintech.jpg"
              },
              {
                title: "Renewable Energy",
                desc: "90% of Kenya's electricity comes from renewables (geothermal, wind, solar)",
                stats: "$5B investment pipeline",
                image: "/images/business/energy.jpg"
              },
              {
                title: "Digital Economy",
                desc: "Growing BPO sector with 50,000+ professionals serving global clients",
                stats: "$1B annual revenue",
                image: "/images/business/digital.jpg"
              }
            ].map((sector, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                data-aos="fade-up"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-3xl font-normal text-white mb-4">{sector.title}</h3>
                  <p className="text-gray-300 body-text mb-6">{sector.desc}</p>
                  <div className="bg-[#1E1E1E] inline-block px-4 py-2 rounded-lg border border-[#F5C518]/30">
                    <span className="text-[#F5C518] font-bold">{sector.stats}</span>
                  </div>
                </div>
                <div className={`relative h-64 md:h-96 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <h2 className="text-4xl font-normal text-white mb-12 text-center" data-aos="fade-up">
            Business Support Institutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Kenya Investment Authority",
                role: "Investment facilitation",
                logo: "/images/business/kenvest.jpg"
              },
              {
                name: "Central Bank of Kenya",
                role: "Monetary policy & banking",
                logo: "/images/business/cbk.png"
              },
              {
                name: "Kenya Revenue Authority",
                role: "Tax administration",
                logo: "/images/business/kra.jpg"
              },
              {
                name: "Kenya National Chamber of Commerce",
                role: "Business advocacy",
                logo: "/images/business/kncci.jpg"
              }
            ].map((institution, index) => (
              <div 
                key={index}
                className="bg-[#121212] p-6 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-20 w-full mb-4">
                  <Image
                    src={institution.logo}
                    alt={institution.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{institution.name}</h3>
                <p className="text-gray-400 body-text">{institution.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section 
          className="bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-12 text-center border border-[#F5C518]/30"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-normal text-white mb-6">Ready to Do Business in Kenya?</h2>
          <p className="text-xl body-text text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with our team of experts to navigate Kenya's vibrant business environment and capitalize on emerging opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#F5C518] hover:bg-[#e6b800] text-[#121212] px-8 py-3 rounded-lg font-bold transition-colors subtitle">
              Contact Investment Desk
            </button>
            <button className="border-2 border-[#F5C518] hover:bg-[#1E1E1E] px-8 py-3 rounded-lg font-bold transition-colors subtitle">
              Download Business Guide
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-12">
            {/* Made By Section - Compact */}
<section className="py-8 text-center border-t border-[#333]">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex items-center space-x-4">
        <span className="text-gray-400 body-text text-sm">Developed by</span>
        <a 
          href="https://njuguna-kelvin.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#F5C518] hover:text-white transition-colors font-medium"
        >
          Njuguna Kelvin
        </a>
      </div>
      
      <div className="flex items-center justify-center space-x-4 pt-1">
        <a 
          href="https://www.linkedin.com/in/njuguna-kelvin/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#F5C518] transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        
        <a 
          href="https://instagram.com/zenith.vin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#F5C518] transition-colors"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        
        <a 
          href="https://x.com/NjugunaVin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#F5C518] transition-colors"
          aria-label="X"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
      </footer>
    </div>
  );
};

export default BusinessKenya;