/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';
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
    <div className="bg-[#121212] text-white">
      <Head>
        <title>Kenyan Tech Ecosystem | Africa's Digital Frontier</title>
        <meta name="description" content="Comprehensive guide to Kenya's technology landscape - from M-Pesa's global impact to emerging startups, training programs, and investment opportunities in Africa's most dynamic tech hub" />
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
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div 
            className="relative h-96 w-full overflow-hidden rounded-lg mb-8"
            data-aos="fade-in"
          >
            <Image
              src="/images/tech/nairobi-skyline.webp"
              alt="Nairobi tech hub skyline at sunset"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-[#121212] opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h1 
                  className="text-5xl md:text-6xl font-normal text-white mb-4 tracking-tight"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Kenya's Tech Revolution
                </h1>
                <h2 
                  className="text-3xl md:text-4xl subtitle text-[#F5C518]"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Building Africa's Digital Future
                </h2>
              </div>
            </div>
          </div>

          <p 
            className="text-lg body-text text-white max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Kenya has transformed from <span className="font-semibold text-[#00A8E8]">mobile money pioneer</span> to <span className="font-semibold text-[#00A8E8]">continental tech leader</span>, with over <span className="font-semibold">500 active startups</span> and <span className="font-semibold">$2B+ in tech investments</span> since 2015. With <span className="font-semibold">87% mobile penetration</span> and a <span className="font-semibold">young, tech-savvy population</span>, Kenya is rewriting Africa's digital narrative.
          </p>
        </section>

        {/* Quick Navigation */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="#companies" 
              className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#F5C518] hover:bg-[#2A2A2A] transition-colors"
              data-aos="fade-up"
            >
              <h3 className="font-bold text-white subtitle">Key Companies</h3>
            </a>
            <a 
              href="#careers" 
              className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#E63946] hover:bg-[#2A2A2A] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="font-bold text-white subtitle">Career Paths</h3>
            </a>
            <a 
              href="#ecosystem" 
              className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#00A8E8] hover:bg-[#2A2A2A] transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-white subtitle">Ecosystem Map</h3>
            </a>
            <a 
              href="#resources" 
              className="bg-[#1E1E1E] p-4 rounded-lg border-l-4 border-[#2A9D8F] hover:bg-[#2A2A2A] transition-colors"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="font-bold text-white subtitle">Learning Resources</h3>
            </a>
          </div>
        </section>

        {/* Core Tech Companies */}
        <section id="companies" className="mb-20">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight border-b-2 border-[#F5C518] pb-4"
            data-aos="fade-up"
          >
            Kenya's Tech Powerhouses
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Safaricom */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#00A8E8]"
              data-aos="fade-up"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/safaricom-hq.jpg"
                  alt="Safaricom headquarters in Nairobi"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#00A8E8] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Safaricom & M-PESA</h3>
                </div>
                <p className="text-[#CCCCCC] body-text mb-4">
                  The backbone of Kenya's digital economy, processing <span className="font-semibold text-[#F5C518]">$50B+ annually</span> through mobile money. Beyond payments, they now offer:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span><span className="font-semibold">Fuliza</span> - $1B+ in overdraft services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span><span className="font-semibold">M-Shwari</span> - Digital banking with 30M+ users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span><span className="font-semibold">5G Network</span> - Covering 17 counties</span>
                  </li>
                </ul>
                <a 
                  href="https://www.safaricom.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#00A8E8] hover:text-[#F5C518] transition-colors subtitle"
                >
                  Visit Safaricom →
                </a>
              </div>
            </div>

            {/* Twiga Foods */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#2A9D8F]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/twiga-delivery.jpg"
                  alt="Twiga Foods delivery in action"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#2A9D8F] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Twiga Foods</h3>
                </div>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Revolutionizing food distribution with <span className="font-semibold text-[#F5C518]">AI-powered logistics</span> connecting 140,000+ vendors to farmers. Their impact:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li className="flex items-start">
                    <span className="text-[#2A9D8F] mr-2">•</span>
                    <span>Reduces food prices by <span className="font-semibold">10-15%</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A9D8F] mr-2">•</span>
                    <span>Processes <span className="font-semibold">10,000+ orders</span> daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A9D8F] mr-2">•</span>
                    <span>Raised <span className="font-semibold">$100M+</span> in funding</span>
                  </li>
                </ul>
                <a 
                  href="https://www.twiga.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#2A9D8F] hover:text-[#F5C518] transition-colors subtitle"
                >
                  Visit Twiga Foods →
                </a>
              </div>
            </div>

            {/* Andela */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#E63946]"
              data-aos="fade-up"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/andela-office.jpg"
                  alt="Andela Nairobi office workspace"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#E63946] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Andela Kenya</h3>
                </div>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Building Africa's <span className="font-semibold text-[#F5C518]">elite engineering talent</span> through intensive training and global placements. Key facts:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span><span className="font-semibold">1,500+</span> Kenyan developers trained</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span>Partners include <span className="font-semibold">Google, Microsoft</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span><span className="font-semibold">No degree required</span> - skills-based hiring</span>
                  </li>
                </ul>
                <a 
                  href="https://andela.com/kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#E63946] hover:text-[#F5C518] transition-colors subtitle"
                >
                  Visit Andela Kenya →
                </a>
              </div>
            </div>

            {/* Africa's Talking */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#F5C518]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/africas-talking.jpg"
                  alt="Africa's Talking team working"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Africa's Talking</h3>
                </div>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Powering <span className="font-semibold text-[#F5C518]">communication APIs</span> for developers across Africa. Their infrastructure enables:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span><span className="font-semibold">100M+ SMS</span> monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>USSD services for <span className="font-semibold">major banks</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Voice & payments APIs</span>
                  </li>
                </ul>
                <a 
                  href="https://africastalking.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#F5C518] hover:text-[#00A8E8] transition-colors subtitle"
                >
                  Visit Africa's Talking →
                </a>
              </div>
            </div>
          </div>

          {/* More Companies */}
          <div className="mt-12">
            <h3 className="text-3xl font-normal mb-6 text-white border-b border-[#2A9D8F] pb-2" data-aos="fade-up">
              Other Key Players
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Cellulant", category: "Fintech", url: "https://www.cellulant.io" },
                { name: "Tala", category: "Digital Lending", url: "https://tala.co.ke" },
                { name: "Branch", category: "Mobile Banking", url: "https://branch.co.ke" },
                { name: "Jumia Kenya", category: "E-commerce", url: "https://www.jumia.co.ke" },
                { name: "Sendy", category: "Logistics Tech", url: "https://sendy.co.ke" },
                { name: "Copia Global", category: "B2C E-commerce", url: "https://copia.co.ke" },
                { name: "Zumi", category: "SME E-commerce", url: "https://www.zumi.ke" },
                { name: "Pezesha", category: "SME Financing", url: "https://pezesha.com" }
              ].map((company, index) => (
                <a
                  key={index}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E1E1E] p-4 rounded-lg hover:bg-[#2A2A2A] transition-colors border-l-2 border-[#00A8E8]"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <h4 className="font-bold text-white subtitle">{company.name}</h4>
                  <p className="text-sm text-[#CCCCCC] body-text">{company.category}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Career Pathways */}
        <section id="careers" className="mb-20">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight border-b-2 border-[#E63946] pb-4"
            data-aos="fade-up"
          >
            Launching Your Tech Career
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Andela Learning Community */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#00A8E8]"
              data-aos="fade-up"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/andela-learning.jpg"
                  alt="Andela Learning Community session"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white subtitle mb-3">Andela Learning Community</h3>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Free tech training programs with pathways to employment:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text mb-4">
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span><span className="font-semibold">6-month</span> intensive programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span>Focus on <span className="font-semibold">JavaScript, Python</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A8E8] mr-2">•</span>
                    <span><span className="font-semibold">1,000+</span> Kenyans trained annually</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#2A2A2A] text-[#00A8E8] px-3 py-1 rounded-full text-sm body-text">No Degree Required</span>
                  <span className="bg-[#2A2A2A] text-[#00A8E8] px-3 py-1 rounded-full text-sm body-text">Remote Options</span>
                  <span className="bg-[#2A2A2A] text-[#00A8E8] px-3 py-1 rounded-full text-sm body-text">Job Placement</span>
                </div>
                <a 
                  href="https://andela.com/alc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#00A8E8] hover:text-[#F5C518] transition-colors subtitle"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Ajira Digital */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#F5C518]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/ajira-digital.jpg"
                  alt="Ajira Digital training session"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white subtitle mb-3">Ajira Digital Program</h3>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Government initiative to create <span className="font-semibold text-[#F5C518]">1M digital jobs</span> by 2030:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text mb-4">
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span><span className="font-semibold">Free training</span> in digital skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span>Focus on <span className="font-semibold">freelancing platforms</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5C518] mr-2">•</span>
                    <span><span className="font-semibold">300+</span> training centers nationwide</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#2A2A2A] text-[#F5C518] px-3 py-1 rounded-full text-sm body-text">Government Backed</span>
                  <span className="bg-[#2A2A2A] text-[#F5C518] px-3 py-1 rounded-full text-sm body-text">All Counties</span>
                  <span className="bg-[#2A2A2A] text-[#F5C518] px-3 py-1 rounded-full text-sm body-text">Stipend Available</span>
                </div>
                <a 
                  href="https://ajiradigital.go.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#F5C518] hover:text-[#00A8E8] transition-colors subtitle"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Moringa School */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#E63946]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/tech/moringa-school.jpg"
                  alt="Moringa School coding class"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white subtitle mb-3">Moringa School</h3>
                <p className="text-[#CCCCCC] body-text mb-4">
                  Premier <span className="font-semibold text-[#F5C518]">coding bootcamp</span> with 85% job placement rate:
                </p>
                <ul className="space-y-2 text-[#CCCCCC] body-text mb-4">
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span><span className="font-semibold">5-month</span> intensive programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span>Focus on <span className="font-semibold">full-stack development</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E63946] mr-2">•</span>
                    <span><span className="font-semibold">Income share</span> agreements available</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#2A2A2A] text-[#E63946] px-3 py-1 rounded-full text-sm body-text">Career Switch</span>
                  <span className="bg-[#2A2A2A] text-[#E63946] px-3 py-1 rounded-full text-sm body-text">Hands-on Projects</span>
                  <span className="bg-[#2A2A2A] text-[#E63946] px-3 py-1 rounded-full text-sm body-text">Industry Partners</span>
                </div>
                <a 
                  href="https://moringaschool.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#E63946] hover:text-[#F5C518] transition-colors subtitle"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* More Training Programs */}
          <div className="mt-12">
            <h3 className="text-3xl font-normal mb-6 text-white border-b border-[#2A9D8F] pb-2" data-aos="fade-up">
              Additional Learning Opportunities
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { 
                  name: "AkiraChix", 
                  description: "Women in tech training", 
                  url: "https://akirachix.com",
                  focus: "Female Developers"
                },
                { 
                  name: "KamiLimu", 
                  description: "Tech mentorship program", 
                  url: "https://kamlimu.com",
                  focus: "University Students"
                },
                { 
                  name: "eMobilis", 
                  description: "Mobile tech academy", 
                  url: "https://emobilis.ac.ke",
                  focus: "Android Development"
                },
                { 
                  name: "Meltwater Entrepreneurial School", 
                  description: "Tech entrepreneurship", 
                  url: "https://meltwater.org",
                  focus: "Startup Founders"
                },
                { 
                  name: "PLP Africa", 
                  description: "Developer training", 
                  url: "https://powerlearnproject.org",
                  focus: "Blockchain & Web3"
                },
                { 
                  name: "LakeHub", 
                  description: "Western Kenya tech hub", 
                  url: "https://lakehub.co.ke",
                  focus: "Regional Opportunities"
                }
              ].map((program, index) => (
                <a
                  key={index}
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E1E1E] p-4 rounded-lg hover:bg-[#2A2A2A] transition-colors border-l-2 border-[#F5C518]"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <h4 className="font-bold text-white subtitle">{program.name}</h4>
                  <p className="text-sm text-[#CCCCCC] body-text mb-2">{program.description}</p>
                  <span className="text-xs bg-[#2A2A2A] text-[#F5C518] px-2 py-1 rounded-full body-text">{program.focus}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Map */}
        <section id="ecosystem" className="mb-20 bg-gradient-to-br from-[#1A1A1A] to-[#1E1E1E] rounded-2xl p-12">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight"
            data-aos="fade-up"
          >
            Kenya's Tech Ecosystem Map
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hubs */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center subtitle">
                <svg className="w-8 h-8 mr-3 text-[#00A8E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Innovation Hubs
              </h3>
              <div className="space-y-4">
                {[
                  { name: "iHub", location: "Nairobi", focus: "General Tech", url: "https://ihub.co.ke" },
                  { name: "Nailab", location: "Nairobi", focus: "Startup Incubation", url: "https://nailab.co.ke" },
                  { name: "LakeHub", location: "Kisumu", focus: "Western Kenya", url: "https://lakehub.co.ke" },
                  { name: "Metta", location: "Nairobi", focus: "Entrepreneurship", url: "https://mettacenter.com" },
                  { name: "Swahilipot Hub", location: "Mombasa", focus: "Coastal Region", url: "https://swahilipot.co.ke" }
                ].map((hub, index) => (
                  <a
                    key={index}
                    href={hub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#121212] p-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white subtitle">{hub.name}</h4>
                        <p className="text-sm text-[#CCCCCC] body-text">{hub.location} • {hub.focus}</p>
                      </div>
                      <span className="text-[#00A8E8]">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Investors */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center subtitle">
                <svg className="w-8 h-8 mr-3 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Investors & Accelerators
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Novastar Ventures", focus: "Early Stage", url: "https://novastarventures.com" },
                  { name: "Acumen Fund", focus: "Social Impact", url: "https://acumen.org" },
                  { name: "Village Capital", focus: "Fintech", url: "https://vilcap.com" },
                  { name: "Chandaria Capital", focus: "Growth Stage", url: "https://chandariacapital.com" },
                  { name: "Savannah Fund", focus: "Seed Stage", url: "https://savannah.vc" }
                ].map((investor, index) => (
                  <a
                    key={index}
                    href={investor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#121212] p-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white subtitle">{investor.name}</h4>
                        <p className="text-sm text-[#CCCCCC] body-text">{investor.focus}</p>
                      </div>
                      <span className="text-[#F5C518]">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Government Initiatives */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center subtitle">
                <svg className="w-8 h-8 mr-3 text-[#2A9D8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Government Programs
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Konza Technopolis", focus: "Smart City Project", url: "https://konza.go.ke" },
                  { name: "Kenya Digital Economy", focus: "National Blueprint", url: "https://digital.go.ke" },
                  { name: "JKUAT Tech Park", focus: "University Innovation", url: "https://jkuat.ac.ke" },
                  { name: "Kenyatta University STIC", focus: "Research & Development", url: "https://ku.ac.ke" },
                  { name: "ICT Authority", focus: "Digital Infrastructure", url: "https://icta.go.ke" }
                ].map((program, index) => (
                  <a
                    key={index}
                    href={program.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#121212] p-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white subtitle">{program.name}</h4>
                        <p className="text-sm text-[#CCCCCC] body-text">{program.focus}</p>
                      </div>
                      <span className="text-[#2A9D8F]">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Resources */}
        <section id="resources" className="mb-20">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight border-b-2 border-[#2A9D8F] pb-4"
            data-aos="fade-up"
          >
            Essential Tech Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Learning */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#00A8E8]"
              data-aos="fade-up"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#00A8E8] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Free Learning Platforms</h3>
                </div>
                <ul className="space-y-3 text-[#CCCCCC] body-text">
                  <li>
                    <a href="https://www.alxafrica.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8E8] transition-colors flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span><span className="font-semibold">ALX Africa</span> - Free tech courses with career support</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8E8] transition-colors flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span><span className="font-semibold">Udemy Free Courses</span> - Limited-time free tech classes</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8E8] transition-colors flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span><span className="font-semibold">Coursera Financial Aid</span> - Free access to premium courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8E8] transition-colors flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span><span className="font-semibold">FreeCodeCamp</span> - Project-based coding curriculum</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Job Portals */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#F5C518]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#F5C518] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Tech Job Portals</h3>
                </div>
                <ul className="space-y-3 text-[#CCCCCC] body-text">
                  <li>
                    <a href="https://www.brightermonday.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span><span className="font-semibold">BrighterMonday</span> - Kenya's largest job board</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fuzu.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span><span className="font-semibold">Fuzu</span> - Career development platform</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kazi.connect" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span><span className="font-semibold">KaziConnect</span> - Tech-specific opportunities</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.angellist.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span><span className="font-semibold">AngelList</span> - Startup jobs with equity options</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Communities */}
            <div 
              className="bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-[#E63946]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E63946] p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white subtitle">Tech Communities</h3>
                </div>
                <ul className="space-y-3 text-[#CCCCCC] body-text">
                  <li>
                    <a href="https://www.meetup.com/Nairobi-Developers-Meetup" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition-colors flex items-start">
                      <span className="text-[#E63946] mr-2">•</span>
                      <span><span className="font-semibold">Nairobi Dev Meetup</span> - 10,000+ members</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.python.or.ke" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition-colors flex items-start">
                      <span className="text-[#E63946] mr-2">•</span>
                      <span><span className="font-semibold">Python Kenya</span> - Largest Python community</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://gdg.community.dev/gdg-nairobi" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition-colors flex items-start">
                      <span className="text-[#E63946] mr-2">•</span>
                      <span><span className="font-semibold">GDG Nairobi</span> - Google Developer Group</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/DevCK" target="_blank" rel="noopener noreferrer" className="hover:text-[#E63946] transition-colors flex items-start">
                      <span className="text-[#E63946] mr-2">•</span>
                      <span><span className="font-semibold">DevCK</span> - Largest Facebook tech group</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Events Calendar */}
        <section className="mb-20 bg-[#1E1E1E] rounded-2xl p-12">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight"
            data-aos="fade-up"
          >
            Upcoming Tech Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nairobi Tech Week",
                date: "October 15-17, 2023",
                location: "Nairobi",
                description: "Largest tech conference in East Africa with 5,000+ attendees",
                url: "https://nairobitechweek.com"
              },
              {
                name: "Pivot East",
                date: "November 3, 2023",
                location: "Virtual",
                description: "Premier startup pitching competition with $100K in prizes",
                url: "https://pivoteast.com"
              },
              {
                name: "DevFest Kenya",
                date: "December 2, 2023",
                location: "Multiple Cities",
                description: "Annual developer festival organized by GDG Kenya",
                url: "https://devfestkenya.com"
              },
              {
                name: "Africa Fintech Summit",
                date: "February 8-9, 2024",
                location: "Nairobi",
                description: "Bringing together fintech leaders from across Africa",
                url: "https://africafintechsummit.com"
              },
              {
                name: "SheHacks Kenya",
                date: "March 15-17, 2024",
                location: "Nairobi",
                description: "Women in tech hackathon and career fair",
                url: "https://shehacks.co.ke"
              },
              {
                name: "Jamfest Africa",
                date: "April 5-7, 2024",
                location: "Nairobi",
                description: "Music tech and creative coding festival",
                url: "https://jamfest.africa"
              }
            ].map((event, index) => (
              <a
                key={index}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] p-6 rounded-lg hover:bg-[#1E1E1E] transition-colors border-l-4 border-[#00A8E8]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-white subtitle mb-2">{event.name}</h3>
                <p className="text-[#F5C518] body-text mb-3">{event.date} • {event.location}</p>
                <p className="text-[#CCCCCC] body-text mb-4">{event.description}</p>
                <span className="text-[#00A8E8] font-semibold subtitle">Learn More →</span>
              </a>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <h2 
            className="text-4xl font-normal text-center mb-12 text-white tracking-tight border-b-2 border-[#2A9D8F] pb-4"
            data-aos="fade-up"
          >
            Kenyan Tech Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-[#1E1E1E] rounded-xl p-8 shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-white subtitle mb-4">M-Pesa: From Kenya to the World</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-1/3 h-48">
                  <Image
                    src="/images/tech/mpesa-global.jpg"
                    alt="M-Pesa global expansion map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-[#CCCCCC] body-text mb-4">
                    What began as a simple mobile money transfer service in 2007 has become a global financial inclusion phenomenon:
                  </p>
                  <ul className="space-y-2 text-[#CCCCCC] body-text">
                    <li className="flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span>Now serves <span className="font-semibold">51M users</span> across 7 countries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span>Processes <span className="font-semibold">$314B annually</span> (20% of Kenya's GDP)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span>Inspired <span className="font-semibold">similar systems</span> worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00A8E8] mr-2">•</span>
                      <span>Enabled <span className="font-semibold">96% financial inclusion</span> in Kenya</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              className="bg-[#1E1E1E] rounded-xl p-8 shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-white subtitle mb-4">Ushahidi: Crisis Tech Gone Global</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-1/3 h-48">
                  <Image
                    src="/images/tech/ushahidi-team.jpg"
                    alt="Ushahidi team working"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-[#CCCCCC] body-text mb-4">
                    Born during Kenya's 2008 post-election violence, this crowdsourcing platform has been used in:
                  </p>
                  <ul className="space-y-2 text-[#CCCCCC] body-text">
                    <li className="flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span><span className="font-semibold">160+ countries</span> for crisis mapping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span>Major disasters like <span className="font-semibold">Haiti earthquake</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span>Elections monitoring <span className="font-semibold">worldwide</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F5C518] mr-2">•</span>
                      <span>Now an <span className="font-semibold">open-source</span> global standard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="bg-gradient-to-r from-[#00A8E8] to-[#2A9D8F] text-white rounded-2xl p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-normal mb-6 uppercase tracking-tight">Ready to Join Kenya's Tech Movement?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto body-text">
            Whether you're looking to launch a career, start a business, or invest in Africa's most dynamic tech ecosystem, Kenya offers unparalleled opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#careers" 
              className="bg-[#121212] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1E1E1E] transition-colors subtitle"
            >
              Explore Career Paths
            </a>
            <a 
              href="#ecosystem" 
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-[#00A8E8] transition-colors subtitle"
            >
              Discover the Ecosystem
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#2A9D8F] pb-2 subtitle">Kenyan Tech</h3>
              <p className="text-[#CCCCCC] body-text">
                Your comprehensive guide to technology innovation in Kenya - from startups to career opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#2A9D8F] pb-2 subtitle">Quick Links</h3>
              <ul className="space-y-2 text-[#CCCCCC] body-text">
                <li><a href="#companies" className="hover:text-[#F5C518] transition-colors">Key Companies</a></li>
                <li><a href="#careers" className="hover:text-[#F5C518] transition-colors">Career Paths</a></li>
                <li><a href="#ecosystem" className="hover:text-[#F5C518] transition-colors">Ecosystem Map</a></li>
                <li><a href="#resources" className="hover:text-[#F5C518] transition-colors">Learning Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#2A9D8F] pb-2 subtitle">Contact</h3>
              <ul className="space-y-2 text-[#CCCCCC] body-text">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@kenyantech.co.ke</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+254 700 123456</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider border-b border-[#2A9D8F] pb-2 subtitle">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#CCCCCC] hover:text-[#F5C518] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-[#CCCCCC] hover:text-[#F5C518] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-[#CCCCCC] hover:text-[#F5C518] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2A9D8F] pt-8 text-center text-[#CCCCCC] body-text">
            <p>© {new Date().getFullYear()} Kenyan Tech Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyKenya;