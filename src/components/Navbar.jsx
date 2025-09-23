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
import { Link } from "react-router-dom";
import logo from "../assets/logo/Your paragraph text-1 (1).png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full h-30 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#ffffff77] backdrop-blur-sm bg-opacity-90 shadow-md" : "bg-[#FFF5E1]"
      } text-white`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 text-black">
          {/* Left side links (Desktop) */}
          <nav className="hidden md:flex space-x-30 items-center flex-1">
            <Link to="/about-us/" className="font-semibold text-[20px] ml-15">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1 font-semibold text-[20px] cursor-pointer">
                Services
                <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
              </button>

              {/* Mega Menu Dropdown (Desktop) */}
              <div
                className="absolute left-0 top-[70px] w-[900px] bg-[#FFF5E1] text-[#EF7722] shadow-lg 
                           opacity-0 invisible group-hover:visible group-hover:opacity-100 
                           transition-all duration-200 z-50 p-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link to="/web-designing/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <Monitor className="w-7 h-7 text-[#2E2E2E]" />
                    <span>Websites Development</span>
                  </Link>
                  <Link to="/search-engine-optimization/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <Globe className="w-6 h-6 text-[#2E2E2E]" />
                    <span>Search Engine Optimization</span>
                  </Link>
                  <Link to="/graphic-design/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <Brush className="w-6 h-6 text-[#2E2E2E]" />
                    <span>Graphic Design</span>
                  </Link>
                  <Link to="/social-media-marketing/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <Share2 className="w-6 h-6 text-[#2E2E2E]" />
                    <span>Social Media Marketing</span>
                  </Link>
                  <Link to="/branding/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <PenTool className="w-6 h-6 text-[#2E2E2E]" />
                    <span>Branding</span>
                  </Link>
                  <Link to="/video-production/" className="flex items-center gap-3 p-3 rounded hover:bg-[#ddd]">
                    <Camera className="w-6 h-6 text-[#2E2E2E]" />
                    <span>Video Production</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <Link to="/pricing/" className="font-semibold text-[20px]">
              Pricing
            </Link> */}
            <Link to="/blogs/" className="font-semibold text-[20px]">
              Blog
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0 mx-6">
            <Link to="/">
              <img src={logo} alt="logo" className="h-25 w-auto" />
            </Link>
          </div>

          {/* Right side contact info + button (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
            <div className="flex items-center space-x-6">
              {/* <p className="text-lg font-medium flex items-center gap-1">
                <Phone className="w-5 h-5" /> <span>+91 98765 43210</span>
              </p>
              <p className="text-lg font-medium flex items-center gap-1">
                <Mail className="w-5 h-5" /> <span>info@example.com</span>
              </p> */}
            </div>
            <Link
  to="/connect-with-us/"
  className="bg-[#FAA533] text-white px-5 py-2 rounded-lg font-bold text-lg mr-20
             shadow-[0_4px_0px_#c97f25] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#0B6FA6] 
             active:translate-y-[2px] active:shadow-none"
>
  Contact Us
</Link>
       <Link
  to="/pricing/"
  className="bg-[#FAA533] text-white px-5 py-2 rounded-lg font-bold text-lg 
             shadow-[0_4px_0px_#c97f25] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#0B6FA6] 
             active:translate-y-[2px] active:shadow-none"
>
 Free  Estimate
</Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu (Right Slide Drawer) */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-[#FFF5E1] text-[#EF7722] transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Btn */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-3 px-6">
            <Link to="/about-us/" className="py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className="flex items-center justify-between w-full py-2 font-semibold"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    solutionsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {solutionsDropdownOpen && (
                <div className="ml-4 border-l border-gray-400 pl-4 space-y-2">
                  <Link to="/web-designing/" className="block">Websites Development</Link>
                  <Link to="/search-engine-optimization/" className="block">SEO</Link>
                  <Link to="/graphic-design/" className="block">Graphic Design</Link>
                  <Link to="/social-media-marketing/" className="block">Social Media Marketing</Link>
                  <Link to="/branding/" className="block">Branding</Link>
                  <Link to="/video-production/" className="block">Video Production</Link>
                </div>
              )}
            </div>

            <Link to="/pricing/" className="py-2" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/blogs/" className="py-2" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 border-t border-gray-500 pt-4">
              <p className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" /> info@example.com
              </p>
              <Link
                to="/connect-with-us/"
                className="block mt-3 bg-[#FAA533] py-2 rounded text-center font-bold"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
