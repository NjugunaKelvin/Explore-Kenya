/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Navbar from "@/Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const media = {
    heroVideo: "/videos/Kenya.mp4",
    heroPoster: "/images/hero-poster.jpg",
    mpesaImage: "/images/home/Mpesa.jpg",
    destinations: [
      "/images/home/MaasaiMara.jpg",
      "/images/home/diani.jpg",
      "/images/home/Mtkenya.jpg"
    ]
  };

  return (
    <div className="bg-white text-black">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={media.heroPoster}
          >
            <source src={media.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-800 to-orange-800 bg-clip-text text-transparent"
            data-aos="fade-down"
          >
            Discover Kenya
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-800 font-medium"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Where nature meets innovation
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Begin Exploration
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          Kenya Unveiled
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Wildlife Sanctuary",
              description: "Home to the iconic Maasai Mara and the Great Migration",
              border: "border-gray-200"
            },
            {
              title: "Innovation Hub",
              description: "Birthplace of mobile money with M-Pesa revolutionizing finance",
              border: "border-gray-200"
            },
            {
              title: "Cultural Mosaic",
              description: "Over 40 ethnic groups with rich traditions and heritage",
              border: "border-gray-200"
            },
            {
              title: "Scenic Landscapes",
              description: "From snow-capped mountains to pristine coastal beaches",
              border: "border-gray-200"
            },
            {
              title: "Agricultural Power",
              description: "World-renowned for tea, coffee, and fresh produce",
              border: "border-gray-200"
            },
            {
              title: "Athletic Excellence",
              description: "Producing world-record holding long-distance runners",
              border: "border-gray-200"
            }
          ].map((fact, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border ${fact.border} hover:border-gray-400 transition-all`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          Key Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Safari Adventures",
              description: "Witness the Big Five in their natural habitat"
            },
            {
              title: "Cultural Tours",
              description: "Engage with local communities and traditions"
            },
            {
              title: "Beach Getaways",
              description: "Relax on pristine Indian Ocean beaches"
            },
            {
              title: "Urban Exploration",
              description: "Discover Nairobi's vibrant art and food scene"
            }
          ].map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl h-48 bg-black"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div 
            className="lg:w-1/2"
            data-aos="fade-right"
          >
            <img
              src={media.mpesaImage}
              alt="M-Pesa mobile money"
              className="w-full rounded-xl shadow-lg border border-gray-200"
            />
          </div>
          <div 
            className="lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Financial Innovation
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              M-Pesa revolutionized mobile banking, creating economic opportunities for millions across Africa. This Kenya-born innovation demonstrates the country's capacity for technological leadership.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold">50M+</h4>
                <p className="text-sm text-gray-600">Users</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold">$1B+</h4>
                <p className="text-sm text-gray-600">Daily Transactions</p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="flex justify-between items-end mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-aos="fade-up"
          >
            Must-Visit Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maasai Mara",
              image: media.destinations[0],
              caption: "The ultimate safari destination",
              location: "Wildlife Reserve"
            },
            {
              name: "Diani Beach",
              image: media.destinations[1],
              caption: "Pristine white sand beaches",
              location: "Coastal Region"
            },
            {
              name: "Mount Kenya",
              image: media.destinations[2],
              caption: "Africa's second highest peak",
              location: "Central Highlands"
            }
          ].map((destination, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl h-96"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                    <p className="text-gray-300">{destination.caption}</p>
                  </div>
                  <span className="text-xs bg-black/50 px-2 py-1 rounded text-gray-300">{destination.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}