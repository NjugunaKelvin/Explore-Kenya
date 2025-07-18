/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Designer = {
  id: string;
  name: string;
  brand: string;
  description: string;
  specialty: string;
  location: string;
  image: string;
  website?: string;
  instagram?: string;
  established?: number;
  awards?: string[];
  story?: string;
  signatureStyle?: string;
  featuredIn?: string[];
};

type Brand = {
  id: string;
  name: string;
  category: string;
  description: string;
  headquarters: string;
  image: string;
  website?: string;
  stockists?: string[];
  sustainability?: string[];
  founder?: string;
  materials?: string[];
  pressFeatures?: string[];
};

const FashionDesigners = () => {
  const [activeTab, setActiveTab] = useState<'designers' | 'brands'>('designers');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeature, setSelectedFeature] = useState<'history' | 'materials' | 'events'>('history');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Sample data for Kenyan designers
  const designers: Designer[] = [
    {
      id: '1',
      name: 'Wambui Mukenyi',
      brand: 'Wedding dresses',
      description: 'Pioneer of Kenyan fashion blending traditional African aesthetics with contemporary design.',
      specialty: 'Contemporary African Fashion',
      location: 'Nairobi',
      image: '/images/fashion/wambuiMukenyi.jpg',
      website: 'https://kikoromeo.com',
      instagram: '@kikoromeo',
      established: 1996,
      awards: ['Africa Fashion Awards', 'Kenya Top 40 Under 40'],
      story: "Founded in 1996, KikoRomeo (meaning 'Adam's Apple' in Swahili) was among Kenya's first contemporary fashion brands. Ann McCreath pioneered the concept of 'Afro-chic' by incorporating traditional fabrics like kikoy and kanga into modern silhouettes.",
      signatureStyle: "Bold prints, architectural silhouettes, and cultural storytelling through textiles",
      featuredIn: ["Vogue Africa", "CNN African Voices", "Forbes Africa"]
    },
    {
      id: '2',
      name: 'Patricia Mbela',
      brand: 'Poisa',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/poisa.jpg',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
    {
      id: '3',
      name: 'Ann McCreath',
      brand: 'KokoRomeo',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/ann.png',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
    {
      id: '4',
      name: 'Sally Karago',
      brand: 'Poisa',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/sally.jpg',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
    {
      id: '5',
      name: 'John Kaveke',
      brand: 'The Gentleman',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/john.jpg',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
    {
      id: '6',
      name: 'Mohamed Awale',
      brand: 'Poisa',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/poisa.jpg',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
    {
      id: '7',
      name: 'Akinyi Odongo',
      brand: 'Poisa',
      description: 'Sustainable luxury brand known for innovative textile treatments and bold designs.',
      specialty: 'Fashion & Jewellery',
      location: 'Nairobi',
      image: '/images/fashion/poisa.jpg',
      instagram: '@poisakenya',
      established: 2013,
      story: "Poisa ('to spoil' in Swahili) challenges fast fashion by creating limited edition collections using organic cotton, recycled materials, and natural dyes. Mbela collaborates with women's groups to preserve traditional weaving techniques.",
      signatureStyle: "Fluid draping, unexpected cutouts, and textured fabrics",
      featuredIn: ["Elle South Africa", "Arise Magazine", "BBC Africa"]
    },
  ];

  // Sample data for Kenyan brands
  const brands: Brand[] = [
    {
      id: '1',
      name: 'Vivo',
      category: 'Women Wear',
      description: "East Africa’s leading women’s fashion brand, offering stylish, comfortable, and proudly African clothing",
      headquarters: 'Nairobi',
      image: '/images/fashion/vivo.png',
      website: 'https://vivofashiongroup.com/',
      sustainability: ['Fair Trade Certified', 'Upcycled Materials'],
      founder: "Wandia Gichuru and Ann Marie Burugu",
      materials: ["Recycled brass", "Bone", "Reclaimed wood"],
      pressFeatures: ["The New York Times", "Forbes 30 Under 30", "The Guardian"]
    },
    {
      id: '2',
      name: 'KikoRomeo',
      category: 'Heritage Fashion',
      description: 'A pioneering Kenyan heritage brand redefining African fashion through sustainability, craftsmanship, and timeless design',
      headquarters: 'Nairobi',
      image: '/images/fashion/kikoRomeo.png',
      website: 'https://kikoromeo.com',
      sustainability: ['Fair Trade Certified', 'Upcycled Materials'],
      founder: "Ella Peinovich, Gwendolyn Floyd, and Catherine Mahugu",
      materials: ["Recycled brass", "Bone", "Reclaimed wood"],
      pressFeatures: ["The New York Times", "Forbes 30 Under 30", "The Guardian"]
    },
    {
      id: '3',
      name: 'Enda',
      category: 'Performance Footwear',
      description: 'Africa’s first performance running shoe brand, proudly designed and made in Kenya to celebrate the country’s running heritage.',
      headquarters: 'Nairobi',
      image: '/images/fashion/enda.png',
      website: 'https://ke.endasportswear.com/',
      sustainability: ['Empowers 200+ Maasai women', 'Carbon-neutral production'],
      materials: ["Locally sourced fabrics", "Glass beads", "Recycled rubber"],
      pressFeatures: ["National Geographic", "Vogue Italia", "Runner's World"]
    },
    {
      id: '4',
      name: 'Wazawazi',
      category: 'Afro‑centric Luxury Accessories',
      description: 'Africa’s first performance running shoe brand, proudly designed and made in Kenya to celebrate the country’s running heritage.',
      headquarters: 'Nairobi',
      image: '/images/fashion/wazawazi.jpg',
      website: 'https://wazawazi.co.ke',
      sustainability: ['Empowers 200+ Maasai women', 'Carbon-neutral production'],
      founder: 'Chebet Mutai',  
      materials: ["Locally sourced fabrics", "Glass beads", "Recycled rubber"],
      pressFeatures: ["Financial Times", "Vogue Italia", "Financial Times"]
    },
    {
      id: '5',
      name: 'Zuri Kenya',
      category: 'Ethical Womenswear',
      description: 'Bold wax-print dresses ethically made in Kenya, empowering local artisans through every stitch.',
      headquarters: 'Nairobi',
      image: '/images/fashion/zuri.png',
      website: 'https://shopzuri.com',
      sustainability: ['Empowers 200+ Maasai women', 'Carbon-neutral production'],
      materials: ["Heritage Textile", "Cotton", "Recycled rubber"],
      pressFeatures: ["National Geographic", "Vogue Italia", "Financial Times"]
    },
    {
      id: '6',
      name: 'Chillimango',
      category: 'Afro‑Urban Streetwear',
      description: 'Africa’s first performance running shoe brand, proudly designed and made in Kenya to celebrate the country’s running heritage.',
      headquarters: 'Nairobi',
      image: '/images/fashion/chillimango.png',
      website: 'https://shopzuri.com',
      sustainability: ['Empowers 200+ Maasai women', 'Carbon-neutral production'],
      founder: 'Njeri Gikera',
      materials: ["Heritage Textile", "Cotton", "Recycled rubber"],
      pressFeatures: ["National Geographic", "Vogue Italia", "Financial Times"]
    },
    {
      id: '7',
      name: 'Sandstorm',
      category: 'Bags',
      description: 'Africa’s first performance running shoe brand, proudly designed and made in Kenya to celebrate the country’s running heritage.',
      headquarters: 'Nairobi',
      image: '/images/fashion/sandstorm.png',
      website: 'https://shopzuri.com',
      sustainability: ['Empowers 200+ Maasai women', 'Carbon-neutral production'],
      founder: 'Mark Stephenson',
      materials: ["Heritage Textile", "Cotton", "Recycled rubber"],
      pressFeatures: ["National Geographic", "Vogue Italia", "Financial Times"]
    },
  ];

  // Industry facts
  const industryFacts = [
    "Kenya's textile industry employs over 50,000 people directly",
    "Nairobi Fashion Week attracts designers from 15+ African countries",
    "Export of Kenyan fashion goods grew by 27% in the last 5 years",
    "Over 60% of Kenyan designers incorporate sustainable practices",
    "Mombasa hosts East Africa's largest textile market"
  ];

  // Filter items based on search term
  const filteredDesigners = designers.filter(designer =>
    designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    designer.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    designer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Kenyan Fashion | Designers, Brands & Industry Insights</title>
        <meta name="description" content="Discover Kenya's vibrant fashion scene - from emerging designers to established brands, sustainable practices, and cultural influences shaping African fashion." />
      </Head>

      <Navbar />

      <main className="bg-gray-50 text-gray-900 min-h-screen">
        {/* Hero Video Section */}
        <section className="relative h-[80vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/fashion.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
              data-aos="fade-up"
            >
              The Pulse of Kenyan Fashion
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Where tradition meets innovation in Africa's design capital
            </p>
          </div>
        </section>

        {/* Quick Facts Marquee */}
        <div className="bg-amber-600 text-white py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {industryFacts.map((fact, index) => (
              <span key={index} className="mx-8 text-sm md:text-base inline-block">
                ✦ {fact} ✦
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('designers')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'designers'
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Designers
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'brands'
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Brands
              </button>
              <div className="ml-auto flex items-center px-4">
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          {activeTab === 'designers' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDesigners.map((designer, index) => (
                  <div
                    key={designer.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index % 3 * 100}
                  >
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={designer.image}
                        alt={`${designer.name} - ${designer.brand}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{designer.name}</h3>
                          <p className="text-amber-300 font-medium">{designer.brand}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-gray-600">{designer.specialty}</p>
                          <p className="text-sm text-gray-500">{designer.location}</p>
                        </div>
                        {designer.established && (
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            Est. {designer.established}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4">{designer.description}</p>
                      
                      {designer.story && (
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-gray-900 mb-1">Brand Story</h4>
                          <p className="text-sm text-gray-600">{designer.story.substring(0, 120)}...</p>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {designer.awards && designer.awards.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Awards</h4>
                            <div className="flex flex-wrap gap-1">
                              {designer.awards.map((award, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                                  {award}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {designer.featuredIn && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Featured In</h4>
                            <p className="text-xs text-gray-600">{designer.featuredIn.join(', ')}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {designer.website && (
                          <a
                            href={designer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center"
                          >
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            Website
                          </a>
                        )}
                        {designer.instagram && (
                          <a
                            href={`https://instagram.com/${designer.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center"
                          >
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredDesigners.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-gray-700">No designers found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBrands.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index % 3 * 100}
                  >
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                          <p className="text-amber-300">{brand.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <p className="text-gray-600">{brand.headquarters}</p>
                        {brand.founder && (
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            Founded by {brand.founder.split(',')[0]}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4">{brand.description}</p>
                      
                      {brand.materials && (
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Materials</h4>
                          <div className="flex flex-wrap gap-1">
                            {brand.materials.map((material, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {brand.sustainability && brand.sustainability.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Sustainability</h4>
                            <div className="flex flex-wrap gap-1">
                              {brand.sustainability.map((item, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {brand.pressFeatures && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Featured In</h4>
                            <p className="text-xs text-gray-600">{brand.pressFeatures.join(', ')}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        {brand.website && (
                          <a
                            href={brand.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            Visit Brand
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredBrands.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-gray-700">No brands found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </>
          )}
        </section>

        {/* Kenyan Fashion Deep Dive */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              Kenya's Fashion Ecosystem
            </h2>
            
            {/* Feature Tabs */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setSelectedFeature('history')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    selectedFeature === 'history'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  History & Heritage
                </button>
                <button
                  onClick={() => setSelectedFeature('materials')}
                  className={`px-4 py-2 text-sm font-medium ${
                    selectedFeature === 'materials'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Materials & Techniques
                </button>
                <button
                  onClick={() => setSelectedFeature('events')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    selectedFeature === 'events'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Events & Shows
                </button>
              </div>
            </div>
            
            {/* Feature Content */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              {selectedFeature === 'history' && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-4">Roots & Evolution</h3>
                    <p className="text-gray-700 mb-4">
                      Kenyan fashion draws from over 40 ethnic communities, each with distinct textile traditions. 
                      The Maasai's vibrant shukas, the Swahili's intricate kanga patterns, and the Kikuyu's 
                      leatherwork have all influenced contemporary designers.
                    </p>
                    <p className="text-gray-700 mb-6">
                      The modern industry emerged in the 1990s when designers like Ann McCreath (KikoRomeo) 
                      began blending these traditions with global trends. Today, Nairobi is East Africa's 
                      fashion capital, hosting Africa's second-largest fashion week.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Key moment: 2009 - First Nairobi Fashion Week
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="/images/fashion/traditional.jpg"
                      alt="Traditional Kenyan textiles"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="text-sm">Maasai artisans demonstrating traditional beadwork techniques</p>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFeature === 'materials' && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-4">Sustainable Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      Kenyan designers are pioneering eco-conscious fashion using:
                    </p>
                    <ul className="mb-6 space-y-2">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span><strong>Organic cotton</strong> from Nyanza province</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span><strong>Recycled plastic</strong> transformed into bags and accessories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span><strong>Natural dyes</strong> from turmeric, avocado pits, and coffee</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span><strong>Upcycled kiondos</strong> (traditional baskets) as handbag frames</span>
                      </li>
                    </ul>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                      <p className="text-sm text-amber-700">
                        "Our grandmothers practiced sustainability before it was trendy. We're just building on that wisdom." 
                        <span className="block font-medium mt-1">- Wambui Mukenyi, Designer</span>
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative h-48">
                      <img
                        src="/images/fashion/cotton.jpg"
                        alt="Organic cotton"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-48">
                      <img
                        src="/images/fashion/dyes.jpg"
                        alt="Natural dyes"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-48">
                      <img
                        src="/images/fashion/recycled.jpg"
                        alt="Recycled materials"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-48">
                      <img
                        src="/images/fashion/beadwork2.jpg"
                        alt="Beadwork"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {selectedFeature === 'events' && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-4">Fashion Calendar</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900">Nairobi Fashion Week</h4>
                        <p className="text-sm text-gray-600">March • 60+ designers • Trade shows</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Lamu Fashion Festival</h4>
                        <p className="text-sm text-gray-600">August • Swahili-inspired collections</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Maasai Mara Luxury Safari Show</h4>
                        <p className="text-sm text-gray-600">October • Conservation-themed runway</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Kenya Design Week</h4>
                        <p className="text-sm text-gray-600">November • Emerging talent showcase</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Did you know?</strong> Nairobi Fashion Week attracts buyers from over 20 countries.
                      </p>
                      <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                        View event photos →
                      </a>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="/images/fashion/fashionWeek.jpg"
                      alt="Nairobi Fashion Week runway"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium">Nairobi Fashion Week 2023</p>
                        <p className="text-xs">Photo by James Muchiri</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Designer Spotlight Carousel */}
        <section className="py-16 bg-gray-900 text-white px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              Designer Spotlights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="relative h-48">
                  <img
                    src="/images/fashion/designer.jpg"
                    alt="Designer at work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Eco-Chic Revolution</h3>
                  <p className="text-gray-300 mb-4">
                    How young designers are redefining sustainability with mushroom leather and pineapple fiber fabrics.
                  </p>
                  <a href="#" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Read feature →
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="relative h-48">
                  <img
                    src="/images/fashion/beadwork.jpg"
                    alt="Beadwork artisan"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Beads to Runway</h3>
                  <p className="text-gray-300 mb-4">
                    The Maasai women collective supplying high fashion brands while preserving cultural heritage.
                  </p>
                  <a href="#" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Read feature →
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="relative h-48">
                  <img
                    src="/images/fashion/nomad.jpg"
                    alt="Tech in fashion"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Digital Nomads</h3>
                  <p className="text-gray-300 mb-4">
                    Kenyan designers leveraging blockchain for authenticity and 3D printing for zero-waste production.
                  </p>
                  <a href="#" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Read feature →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore Kenyan Fashion?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Whether you're a buyer, journalist, or fashion enthusiast, connect with Kenya's vibrant design community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Kenyan Designers
              </a>
              <a
                href="/fashion-map"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fashion Hotspots Map
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FashionDesigners;

