"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Economy",
    children: [
      { title: "Agriculture", path: "/economy/agriculture" },
      { title: "Tech", path: "/economy/tech" },
      { title: "Business", path: "/economy/business" },
      { title: "Manufacturing", path: "/economy/manufacturing" },
      { title: "Invest in Kenya", path: "/economy/invest" }
    ]
  },
  {
    title: "Tourism",
    children: [
      { title: "Safari & Wildlife", path: "/tourism/safari" },
      { title: "Urban Experiences", path: "/tourism/urban" },
      { title: "Beach & Coastline", path: "/tourism/beach" }
    ]
  },
  {
    title: "Fashion",
    children: [
      { title: "Designers and Brands", path: "/fashion/brands" },
      { title: "Traditional wear", path: "/tourism/safari" },
    ]
  },
  {
    title: "Culture",
    children: [
      { title: "Cuisines", path: "/culture/foods" },
      { title: "Ethnic Groups", path: "/culture/ethnic-groups" },
      { title: "Arts & Craft", path: "/culture/arts" },
    ]
  },
  {
    title: "Education",
    children: [
      { title: "Universities & Colleged", path: "/education/universities" },
      { title: "Scholarships", path: "/education/scholarships" },
      { title: "International Schools", path: "/education/international" }
    ]
  },
  {
    title: "Latest News",
    children: [
      { title: "Sports", path: "/news/sports" },
      { title: "Business", path: "/news/business" },
      { title: "Innovation", path: "/news/youth-innovation" },
      { title: "Education", path: "/news/education" }
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className={`absolute inset-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 ${scrolled ? "rounded-lg mx-4" : ""} transition-all duration-500`}></div>
            
            <div className="relative flex items-center justify-between h-16 z-10">
              <Link 
                href="/" 
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors flex items-center"
                aria-label="Go to homepage"
              >
                <span className="font-['Permanent_Marker'] tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-red to-red-500">
                  Welcome<span className="text-white"> to Kenya</span>
                </span>
              </Link>

              {/* Main Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {NAV_ITEMS.map((item) => (
                  <div 
                    key={item.title} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                  >
                    <button 
                      className={`px-4 py-2 text-white hover:text-gray-300 transition-colors font-medium flex items-center ${activeDropdown === item.title ? "text-gray-300" : ""}`}
                    >
                      {item.title}
                      {item.children && (
                        <svg 
                          className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Dropdown */}
                    {item.children && (
                      <div 
                        className={`absolute left-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-sm rounded-md shadow-xl overflow-hidden transition-all duration-300 origin-top transform ${activeDropdown === item.title ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.path || "#"}
                              className="block px-4 py-3 text-white hover:bg-gray-700/50 transition-colors border-l-2 border-transparent hover:border-green-500"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu */}
              <button
                className="lg:hidden text-white focus:outline-none z-50"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-lg shadow-2xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white font-['Permanent_Marker']">KenyaExplorer</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="p-4 overflow-y-auto h-[calc(100%-72px)]">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  {item.children ? (
                    <div className="mb-2">
                      <button
                        className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-gray-800 rounded-md transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        aria-expanded={activeDropdown === item.title}
                      >
                        <span className="font-medium">{item.title}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.title && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-3 animate-fadeIn">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <Link
                                href={child.path || "#"}
                                className="block p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className="block p-3 text-white hover:bg-gray-800 rounded-md transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
              
              <li className="border-t border-gray-800 pt-4 mt-4">
                <Link 
                  href="/about" 
                  className="block p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Kenya
                </Link>
              </li>
              <li>
                <Link 
                  href="/visa" 
                  className="block p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Visa Information
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}