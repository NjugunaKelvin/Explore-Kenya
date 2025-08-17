'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-require-imports */
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import Image from 'next/image';

const TraditionalWear = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Kenyan Traditional Wear | Cultural Heritage</title>
        <meta name="description" content="Explore the vibrant traditional wear of Kenya's diverse ethnic communities" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Urbanist:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        h1, h2, h3, h4 {
          font-family: 'Caprasimo', cursive;
        }
        .underline-yellow {
          border-bottom: 2px solid #FACC15;
          display: inline;
          padding-bottom: 2px;
        }
        .text-yellow {
          color: #FACC15;
        }
      `}</style>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 
            className="text-5xl md:text-6xl mb-6"
            data-aos="fade-down"
          >
            The <span className="text-yellow">Vibrant</span> Threads of Kenya
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Traditional wear in Kenya is more than just clothing - it's a living tapestry of identity, heritage, and cultural pride woven through generations.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl mb-6">
                <span className="underline-yellow">Cultural Fabric</span> of the Nation
              </h2>
              <p className="mb-4 text-lg font-light">
                Kenyan traditional attire serves as a visual language, communicating everything from ethnic identity to social status and life milestones.
              </p>
              <p className="text-lg font-light">
                From the <span className="text-yellow">bold reds</span> of the Maasai to the <span className="text-yellow">intricate beadwork</span> of the Turkana, each community has developed distinctive styles that reflect their environment, values, and history.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/kenya-ethnic-groups.jpg" 
                  alt="Kenyan ethnic groups in traditional wear"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ethnic Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl mb-12 text-center" data-aos="fade-down">
            <span className="underline-yellow">Diversity in Dress</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Maasai */}
            <div 
              className="bg-gray-800 p-6 rounded-lg"
              data-aos="flip-up"
            >
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="/images/maasai-attire.jpg" 
                  alt="Maasai traditional wear"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2 text-yellow">Maasai Shúkà</h3>
              <p className="font-light">
                The iconic red checkered cloth wrapped around the body, complemented by elaborate beadwork that indicates age and social status.
              </p>
            </div>

            {/* Kikuyu */}
            <div 
              className="bg-gray-800 p-6 rounded-lg"
              data-aos="flip-up"
              data-aos-delay="100"
            >
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="/images/kikuyu-attire.jpg" 
                  alt="Kikuyu traditional wear"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2 text-yellow">Kikuyu Style</h3>
              <p className="font-light">
                Modern Kikuyu attire often features colorful kitenge fabrics, while historically they wore leather garments and adorned themselves with brass earrings.
              </p>
            </div>

            {/* Swahili */}
            <div 
              className="bg-gray-800 p-6 rounded-lg"
              data-aos="flip-up"
              data-aos-delay="200"
            >
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="/images/swahili-attire.jpg" 
                  alt="Swahili traditional wear"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2 text-yellow">Swahili Coastal</h3>
              <p className="font-light">
                The kanzu for men and buibui for women, often paired with kanga cloth featuring proverbs in Swahili calligraphy.
              </p>
            </div>
          </div>
        </section>

        {/* Materials & Symbolism */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/kenyan-beadwork.jpg" 
                  alt="Kenyan beadwork"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-3xl mb-6">
                <span className="underline-yellow">Materials & Meaning</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-yellow">Beadwork</h3>
                  <p className="font-light">
                    Intricate bead patterns in specific colors tell stories - red for bravery, white for peace, blue for energy, and green for land.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-yellow">Kitenge & Kanga</h3>
                  <p className="font-light">
                    These printed fabrics carry proverbs and messages, serving as a form of non-verbal communication among women.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-yellow">Animal Skins</h3>
                  <p className="font-light">
                    Historically used by pastoralist communities, different skins indicated warrior status or hunting prowess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="mb-20 bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl mb-8 text-center" data-aos="fade-down">
            <span className="underline-yellow">Wear for Occasion</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="text-center p-4"
              data-aos="zoom-in"
            >
              <div className="text-4xl mb-4 text-yellow">👰</div>
              <h3 className="text-xl mb-2">Weddings</h3>
              <p className="font-light">
                Elaborate beadwork and special fabrics mark marital transitions in many communities.
              </p>
            </div>
            <div 
              className="text-center p-4"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="text-4xl mb-4 text-yellow">🎉</div>
              <h3 className="text-xl mb-2">Festivals</h3>
              <p className="font-light">
                Cultural festivals showcase the most vibrant and symbolic attire.
              </p>
            </div>
            <div 
              className="text-center p-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-4xl mb-4 text-yellow">🏛️</div>
              <h3 className="text-xl mb-2">National Holidays</h3>
              <p className="font-light">
                Madaraka Day and Mashujaa Day see Kenyans proudly wear traditional attire.
              </p>
            </div>
          </div>
        </section>

        {/* Modern Influence */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 text-center" data-aos="fade-down">
            <span className="underline-yellow">Traditional Meets Contemporary</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="text-lg mb-4 font-light">
                Kenyan designers are reimagining traditional elements for global runways, creating fusion styles that honor heritage while embracing modernity.
              </p>
              <p className="text-lg font-light">
                The <span className="text-yellow">shúkà</span> inspires high fashion, <span className="text-yellow">kitenge</span> becomes couture gowns, and traditional beadwork adorns contemporary accessories.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/modern-kenyan-fashion.jpg" 
                  alt="Modern Kenyan fashion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center" data-aos="fade-up">
          <h2 className="text-3xl mb-6">
            More Than <span className="text-yellow">Fabric</span> Deep
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light mb-8">
            Kenyan traditional wear represents the living, breathing culture of diverse communities - each thread telling a story, each color holding meaning, each style preserving identity.
          </p>
          <div className="relative h-64 w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <Image 
              src="/images/kenya-cultural-diversity.jpg" 
              alt="Kenya's cultural diversity"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TraditionalWear;