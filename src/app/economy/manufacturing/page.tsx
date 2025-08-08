/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';

// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
    <div className="bg-gray-50">
      <Head>
        <title>Manufacturing in Kenya | Kenya's Industrial Hub</title>
        <meta name="description" content="Discover Kenya's vibrant manufacturing sector, investment opportunities, and key industries driving East Africa's economy" />
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
              src="/images/manufacturing/kenya-factory.jpg" // Replace with your image path
              alt="Manufacturing in Kenya"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 
                className="text-4xl md:text-5xl font-bold text-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Manufacturing in Kenya
              </h1>
            </div>
          </div>

          <p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Kenya stands as East Africa's industrial powerhouse, with manufacturing contributing <span className="font-semibold text-blue-600">10%</span> to GDP and employing over <span className="font-semibold text-blue-600">300,000</span> people. From world-famous tea to cutting-edge automotive assembly, Kenya's diverse manufacturing sector offers unique opportunities for investors while supporting tourism through locally made souvenirs and agro-products.
          </p>
        </section>

        {/* What Kenya Makes Section */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Kenya's Manufacturing Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food & Beverages */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/kenya-tea.jpg" // Replace with your image
                  alt="Kenyan tea production"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Food & Beverages</h3>
                <p className="text-gray-600">
                  Kenya is the world's <span className="font-semibold">3rd largest tea exporter</span> and a major coffee producer. The sector also includes dairy products, sugar processing, and fruit concentrates shipped globally.
                </p>
              </div>
            </div>

            {/* Textiles & Apparel */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/textiles.jpg" // Replace with your image
                  alt="Kenyan textile industry"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Textiles & Apparel</h3>
                <p className="text-gray-600">
                  Kenya exports <span className="font-semibold">$400M+</span> in apparel annually under AGOA. The sector produces uniforms, leather goods, and traditional fabrics like kikois that make perfect souvenirs.
                </p>
              </div>
            </div>

            {/* Building Materials */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/construction.jpg" // Replace with your image
                  alt="Construction materials"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Building Materials</h3>
                <p className="text-gray-600">
                  Kenya produces <span className="font-semibold">6M+ tons</span> of cement annually, along with steel, roofing tiles, and glass - fueling the country's construction boom and skyline transformation.
                </p>
              </div>
            </div>

            {/* Automotive */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/automotive.jpg" // Replace with your image
                  alt="Vehicle assembly in Kenya"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Automotive & Machinery</h3>
                <p className="text-gray-600">
                  Major brands assemble buses, trucks, and motorbikes locally. Kenya's automotive industry grew by <span className="font-semibold">12%</span> last year, with potential in electric vehicles.
                </p>
              </div>
            </div>

            {/* Consumer Goods */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/consumer-goods.jpg" // Replace with your image
                  alt="Kenyan consumer goods"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Consumer Goods</h3>
                <p className="text-gray-600">
                  From popular soap brands to cooking oils and emerging electronics assembly, Kenya serves both domestic and regional markets with quality products.
                </p>
              </div>
            </div>

            {/* Special Economic Zones */}
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/manufacturing/sez.jpg" // Replace with your image
                  alt="Special Economic Zone"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Special Economic Zones</h3>
                <p className="text-gray-600">
                  Modern industrial parks in Athi River, Naivasha, and Mombasa offer <span className="font-semibold">tax incentives</span>, world-class infrastructure, and streamlined processes for manufacturers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20 bg-blue-50 rounded-xl p-8">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Kenya's Manufacturing Milestones
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="text-center p-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">$1B+</div>
              <h3 className="text-xl font-semibold mb-2">AGOA Apparel Exports</h3>
              <p className="text-gray-600">
                Kenya exports textiles worth over $400M annually to the US under AGOA, with cumulative exports exceeding $1 billion since 2000.
              </p>
            </div>

            <div 
              className="text-center p-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">30+</div>
              <h3 className="text-xl font-semibold mb-2">EPZ Companies</h3>
              <p className="text-gray-600">
                Export Processing Zones host over 30 major manufacturers employing 50,000+ Kenyans, with 70% being women.
              </p>
            </div>

            <div 
              className="text-center p-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">12%</div>
              <h3 className="text-xl font-semibold mb-2">Annual Growth</h3>
              <p className="text-gray-600">
                The automotive sector grew by 12% last year, while agro-processing expands at 8% annually.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Opportunities for Investors
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="border-l-4 border-blue-500 pl-6 py-2"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold mb-3">Regional Market Access</h3>
              <p className="text-gray-600">
                Kenya provides duty-free access to <span className="font-semibold">300 million consumers</span> through the East African Community and COMESA trade blocs. The African Continental Free Trade Area (AfCFTA) expands this to 1.3 billion people.
              </p>
            </div>

            <div 
              className="border-l-4 border-blue-500 pl-6 py-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-3">Government Incentives</h3>
              <p className="text-gray-600">
                <span className="font-semibold">10-year tax holidays</span>, duty-free imports of machinery, and VAT exemptions available in Special Economic Zones and Export Processing Zones.
              </p>
            </div>

            <div 
              className="border-l-4 border-blue-500 pl-6 py-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold mb-3">High-Growth Sectors</h3>
              <p className="text-gray-600">
                Renewable energy equipment, pharmaceuticals, <span className="font-semibold">agro-processing</span>, and construction materials show strong potential with government support.
              </p>
            </div>

            <div 
              className="border-l-4 border-blue-500 pl-6 py-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold mb-3">Skilled Workforce</h3>
              <p className="text-gray-600">
                Kenya's <span className="font-semibold">50,000+</span> engineering graduates annually provide a talent pool for technical manufacturing roles at competitive wages.
              </p>
            </div>
          </div>

          <div 
            className="mt-12 bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Success Story: Bidco Africa</h3>
            <p className="text-gray-700 mb-4">
              Starting with a single cooking oil brand, Bidco now operates <span className="font-semibold">22 manufacturing lines</span> across East Africa, exporting to 16 countries with annual revenues exceeding $500M.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
              View More Success Stories
            </button>
          </div>
        </section>

        {/* Key Organizations */}
        <section className="mb-20">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Key Organizations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://kam.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              data-aos="zoom-in"
            >
              <div className="relative h-16 w-16 mb-4">
                <Image
                  src="/images/logos/kam-logo.png" // Replace with actual logo
                  alt="KAM Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-blue-700">Kenya Association of Manufacturers</h3>
            </a>

            <a 
              href="https://epzakenya.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="relative h-16 w-16 mb-4">
                <Image
                  src="/images/logos/epza-logo.png" // Replace with actual logo
                  alt="EPZA Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-blue-700">Export Processing Zones Authority</h3>
            </a>

            <a 
              href="https://kirdi.go.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="relative h-16 w-16 mb-4">
                <Image
                  src="/images/logos/kirdi-logo.png" // Replace with actual logo
                  alt="KIRDI Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-blue-700">Kenya Industrial Research Institute</h3>
            </a>

            <a 
              href="https://brand.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="relative h-16 w-16 mb-4">
                <Image
                  src="/images/logos/kenya-export-logo.png" // Replace with actual logo
                  alt="Kenya Export Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-blue-700">Kenya Export Promotion Agency</h3>
            </a>
          </div>
        </section>

        {/* Challenges & Future Outlook */}
        <section className="mb-20 bg-gray-100 rounded-xl p-8">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Challenges & Future Outlook
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-xl font-bold mb-4 text-red-600">Current Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>High energy costs averaging $0.15/kWh compared to $0.07 in Ethiopia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Competition from cheap imports, especially from Asia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Skills gap in advanced manufacturing technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Access to affordable financing for local manufacturers</span>
                </li>
              </ul>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4 text-green-600">Future Outlook</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Expansion of <span className="font-semibold">renewable energy</span> manufacturing (solar panels, wind turbines)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Growth in <span className="font-semibold">agro-processing</span> and value addition for export</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Development of <span className="font-semibold">automotive</span> and <span className="font-semibold">e-mobility</span> ecosystems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Increased <span className="font-semibold">automation</span> and Industry 4.0 adoption</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Government's Big 4 Agenda</h3>
            <p className="text-gray-700">
              Manufacturing is a pillar of Kenya's development plan, targeting to <span className="font-semibold">double industrial contribution</span> to GDP by 2025 through:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-blue-600 font-bold mb-2">Food Security</div>
                <div className="text-sm">Agro-processing expansion</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-blue-600 font-bold mb-2">Affordable Housing</div>
                <div className="text-sm">Local materials production</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-blue-600 font-bold mb-2">Universal Healthcare</div>
                <div className="text-sm">Pharmaceutical manufacturing</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-blue-600 font-bold mb-2">Digital Economy</div>
                <div className="text-sm">Electronics assembly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts for Tourists */}
        <section className="mb-12">
          <h2 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            data-aos="fade-up"
          >
            Did You Know? (For Tourists)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400"
              data-aos="flip-left"
            >
              <div className="text-yellow-500 text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold mb-3">Your Tea Probably Came Through Kenya</h3>
              <p className="text-gray-600">
                Kenya processes tea for many international brands. The tea you drink abroad may have been blended or packed in Mombasa, the world's largest tea auction center.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="text-green-500 text-4xl mb-4">👜</div>
              <h3 className="text-xl font-bold mb-3">Authentic Leather Souvenirs</h3>
              <p className="text-gray-600">
                Kenya-made leather goods like sandals and handbags are popular with tourists. Look for "Made in Kenya" tags at markets in Nairobi and coastal towns.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-400"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="text-blue-500 text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold mb-3">Locally Assembled Buses</h3>
              <p className="text-gray-600">
                Many buses you'll ride on safari or between cities are assembled in Kenya by companies like Kenya Vehicle Manufacturers and Associated Vehicle Assemblers.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="bg-blue-700 text-white rounded-xl p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Kenya's Manufacturing Potential?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're an investor, business partner, or curious visitor, Kenya's industrial sector offers exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Investment Authority
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
              Download Sector Report
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Kenya Manufacturing Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ManufacturingKenya;