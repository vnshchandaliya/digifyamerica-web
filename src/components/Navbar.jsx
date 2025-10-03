import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Monitor,
  Brush,
  Camera,
  Globe,
  Share2,
  PenTool,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/dfm-Logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const location = useLocation();

  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  // 1. Navbar Background Logic (on scroll)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

 
  useEffect(() => {
    if (mobileMenuOpen) {
     
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      
      <header
        className={`fixed w-full h-30 top-0 z-50 transition-all duration-300 ${mobileMenuOpen || isScrolled
            ? "bg-[#456882] backdrop-blur-sm bg-opacity-90 shadow-md"
            : "bg-[#1B3C53] "
          } text-white`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5 text-white">
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-30 items-center flex-1">
              <Link to="/about-us/" className="font-semibold text-[20px] ml-15">About</Link>
              {/* Dropdown */}
              <div className="relative group">
                <button className="inline-flex items-center gap-1 font-semibold text-[20px] cursor-pointer">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className="absolute left-0 top-[70px] w-[900px] bg-[#234C6A] text-[#D2C1B6] shadow-lg
                               opacity-0 invisible group-hover:visible group-hover:opacity-100
                               transition-all duration-200 z-50 p-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/web-designing/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd] hover:text-[#000]">
                      <Monitor className="w-7 h-7 " /><span>Websites Development</span>
                    </Link>
                    <Link to="/search-engine-optimization/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd] hover:text-[#000]">
                      <Globe className="w-6 h-6 " /><span>Search Engine Optimization</span>
                    </Link>
                    <Link to="/graphic-design/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd] hover:text-[#000]">
                      <Brush className="w-6 h-6 " /><span>Graphic Design</span>
                    </Link>
                    <Link to="/social-media-marketing/" className="flex items-center gap-3 p-3  rounded hover:bg-[#ddd] hover:text-[#000]">
                      <Share2 className="w-6 h-6 " /><span>Social Media Marketing</span>
                    </Link>
                    <Link to="/branding/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd] hover:text-[#000]">
                      <PenTool className="w-6 h-6 " /><span>Branding</span>
                    </Link>
                    <Link to="/video-production/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd] hover:text-[#000]">
                      <Camera className="w-6 h-6 " /><span>Video Production</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/blogs/" className="font-semibold text-[20px]">Blog</Link>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0 mx-6">
              <Link to="/">
                <img src={logo} alt="logo" className="h-22 w-auto" />
              </Link>
            </div>

            {/* Right side Desktop */}
            <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
              <Link
                to="/connect-with-us/"
                className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg mr-20 shadow-[0_4px_0px_#456882] transform transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] active:translate-y-[2px] active:shadow-none"
              >
                Contact Us
              </Link>
              <Link
                to="/pricing/"
                className="bg-[#234C6A] text-white px-5 py-2 rounded-lg 
                font-bold text-lg shadow-[0_4px_0px_#456882] transform transition-all 
                duration-200 hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] active:translate-y-[2px] 
                active:shadow-none"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ⭐ 2. THE MOBILE MENU (Outside the header to fix z-index overlap) */}
      <div
        className={`fixed top-0 right-0 h-full min-w-full bg-[#1B3C53] text-[#D2C1B6] transform transition-transform duration-300 ease-in-out z-[999] ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMobileMenu}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3 px-6">
          {/* Link Close Fix */}
          <Link to="/about-us/" className="py-2" onClick={closeMobileMenu}>About</Link>

          {/* Dropdown Button */}
          <div>
            <button
              onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              className="flex items-center justify-between w-full py-2 font-semibold"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {solutionsDropdownOpen && (
              <div className="ml-4 border-l border-gray-400 pl-4 space-y-3">
                {/* Dropdown Links Close Fix */}
                <Link to="/web-designing/" className="block" onClick={closeMobileMenu}>Websites Development</Link>
                <Link to="/search-engine-optimization/" className="block" onClick={closeMobileMenu}>SEO</Link>
                <Link to="/graphic-design/" className="block" onClick={closeMobileMenu}>Graphic Design</Link>
                <Link to="/social-media-marketing/" className="block" onClick={closeMobileMenu}>Social Media Marketing</Link>
                <Link to="/branding/" className="block" onClick={closeMobileMenu}>Branding</Link>
                <Link to="/video-production/" className="block" onClick={closeMobileMenu}>Video Production</Link>
              </div>
            )}
          </div>

          <Link to="/pricing/" className="py-2" onClick={closeMobileMenu}>Pricing</Link>
          <Link to="/blogs/" className="py-2" onClick={closeMobileMenu}>Blog</Link>

          <div className="mt-4 space-y-2 border-t border-gray-500 pt-4">
            <p className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" /> info@example.com
            </p>
            <Link to="/connect-with-us/" className="block mt-3 bg-[#234C6A] text-white px-5 py-2 rounded-lg 
                font-bold text-lg shadow-[0_4px_0px_#456882] transform transition-all 
                duration-200 hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] active:translate-y-[2px] 
                active:shadow-none" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}