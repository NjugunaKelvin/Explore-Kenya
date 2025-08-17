/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import Image from 'next/image';

const TraditionalWear = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Kenyan Traditional Attire | Cultural Identity Through Fabric</title>
        <meta name="description" content="Explore the rich tapestry of Kenyan traditional wear across ethnic communities" />
      </Head>

      <style jsx global>{`
        h1, h2, h3 { font-family: 'Caprasimo', cursive; }
        h4, h5 { font-family: 'Urbanist', sans-serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .text-accent { color: #F5C518; }
        .border-accent { border-color: #F5C518; }
      `}</style>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen max-h-[800px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/kenya-wear-hero.jpg"
              alt="Kenyan traditional wear collage"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="container mx-auto px-6 relative z-10" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              Threads of <span className="text-accent">Identity</span>
            </h1>
            <h4 className="text-2xl md:text-3xl font-light mb-8 max-w-2xl">
              How Kenya's diverse communities express heritage through traditional attire
            </h4>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            <p className="text-lg max-w-xl">
              From the Maasai shúkà to Swahili kanzu, each garment tells a story of culture, status, and belonging.
            </p>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl mb-6">
                More Than <span className="text-accent">Clothing</span>
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl">
                Kenyan traditional wear serves as visual communication - indicating age, marital status, social standing, and ethnic identity through colors, patterns, and accessories.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="border-t-2 border-accent pt-6" data-aos="fade-up">
                <h3 className="text-2xl mb-4">Ceremonial Importance</h3>
                <p>
                  Rites of passage like circumcision, weddings, and elder ceremonies require specific attire that changes with each life stage.
                </p>
              </div>
              <div className="border-t-2 border-accent pt-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-2xl mb-4">Daily vs. Special</h3>
                <p>
                  While modernization has changed everyday wear, traditional attire remains mandatory for cultural events and celebrations.
                </p>
              </div>
              <div className="border-t-2 border-accent pt-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl mb-4">National Pride</h3>
                <p>
                  During national holidays, Kenyans proudly wear ethnic attire to celebrate the country's cultural diversity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethnic Attire */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl text-center mb-16" data-aos="fade-up">
              Regional <span className="text-accent">Variations</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div data-aos="fade-right">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/maasai-attire-detail.jpg"
                    alt="Maasai warriors in traditional shúkà"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-3xl mb-4">Maasai <span className="text-accent">Shúkà</span></h3>
                <div className="w-16 h-1 bg-accent mb-6"></div>
                <p className="mb-4">
                  The iconic red-checkered cloth wrapped around the body represents bravery and protection. Warriors wear darker colors while elders transition to lighter shades.
                </p>
                <p>
                  Intricate beadwork carries specific meanings - red for warrior blood, white for peace, blue for sky/water, and green for land.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2" data-aos="fade-left">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/swahili-attire-detail.jpg"
                    alt="Swahili traditional wear"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <div className="lg:order-1" data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-3xl mb-4">Coastal <span className="text-accent">Elegance</span></h3>
                <div className="w-16 h-1 bg-accent mb-6"></div>
                <p className="mb-4">
                  The Swahili kanzu (men's tunic) and buibui (women's cloak) reflect Arab influences, while kanga cloth features Swahili proverbs in beautiful calligraphy.
                </p>
                <p>
                  Coastal brides wear elaborate henna patterns and gold jewelry, with the number of bangles indicating family wealth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fabric & Materials */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl text-center mb-4" data-aos="fade-up">
              Traditional <span className="text-accent">Textiles</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <div data-aos="fade-up">
                <h4 className="text-xl mb-3 text-accent">Kitenge</h4>
                <p>
                  Vibrant wax-print fabric used across East Africa, with each pattern often carrying hidden meanings or commemorating events.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-xl mb-3 text-accent">Kanga</h4>
                <p>
                  Light cotton pairs with Swahili sayings, traditionally given as gifts during weddings, births, and funerals.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-xl mb-3 text-accent">Animal Skins</h4>
                <p>
                  Historically used by pastoralist communities like the Samburu, with different animals indicating status and age groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Adaptation */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl mb-6" data-aos="fade-up">
              <span className="text-accent">Contemporary</span> Interpretations
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>
            
            <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              <p className="text-xl mb-8">
                Kenyan designers are reimagining traditional elements for global audiences while preserving cultural significance:
              </p>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl mb-2 text-accent">Runway Collections</h4>
                  <p>
                    High-fashion adaptations of Maasai beadwork and Turkana necklaces featured in international shows.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 text-accent">Corporate Wear</h4>
                  <p>
                    Kitenge-print blazers and dresses becoming acceptable business attire nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TraditionalWear;