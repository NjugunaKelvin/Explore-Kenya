"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./navData"; // Contains all navigation items data
import DropDown from "./DropDown"; // Desktop dropdown navigation component
import MobileMenu from "./MobileMenu"; // Mobile menu component (appears on small screens)

/**
 * Main navigation bar component that renders both desktop and mobile menus.
 * The desktop view shows a dropdown navigation, while mobile shows a hamburger menu.
 */
export default function Navbar() {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Main navigation container */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Home link - always visible */}
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors flex items-center"
            aria-label="Go to homepage"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Explore Kenya
            </span>
          </Link>

          {/* Desktop navigation - hidden on mobile */}
          <DropDown items={NAV_ITEMS} />

          {/* Mobile menu button - only visible on small screens */}
          <button
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Hamburger menu icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay - slides in from side when activated */}
      <MobileMenu
        items={NAV_ITEMS}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}