import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo/4343.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false); // New state for mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#60bdecb8] bg-opacity-90 shadow-md" : "bg-[#60beec]"} text-white`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
                  <nav className="hidden md:flex space-x-6 items-center">
            {/* Desktop Solutions Dropdown */}
            <Link to="/about-us/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">About</Link>
            <div className="relative group">
              <div className="flex items-center gap-1 font-semibold text-[18px] font-exo2 cursor-pointer">
                Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute top-14 border-t border-white-500 left-0 bg-[#3f4a4f] text-[#c0baba] w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <Link to="/web-designing/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Websites Development</Link>
                <Link to="/search-engine-optimization/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Search Engine Optimization</Link>
                <Link to="/graphic-design/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Graphic Design</Link>
                <Link to="/social-media-marketing/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Social Media Marketing</Link>
                <Link to="/branding/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Branding</Link>
                <Link to="/video-production/" className="block px-5 py-2 text-xs font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Video Production</Link>
              </div>
            </div>
            <Link to="/pricing/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Pricing</Link>
            <Link to="/blogs/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Blog</Link>
            {/* <Link to="/client-center/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Client Center</Link> */}
            <Link to="/connect-with-us/" className="bg-[#1c75bc] text-white px-7 py-1 hover:bg-[#1c74bcbb] font-bold text-lg font-exo2">Contact us</Link>
          
          </nav>
         


          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-sky-500 text-white space-y-2 py-4">
            {/* Mobile Solutions Dropdown */}
            <div>
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 font-semibold text-left"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${solutionsDropdownOpen ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="bg-[#3f4a4f] text-[#c0baba] py-2">
                  <Link to="/direct-booking-websites/" className="block px-8 py-2 text-sm hover:bg-[#4e5a61] hover:text-[#60beec]">Direct Booking Websites</Link>
                  <Link to="/digital-marketing/" className="block px-8 py-2 text-sm hover:bg-[#4e5a61] hover:text-[#60beec]">Digital Marketing</Link>
                  <Link to="/email-marketing/" className="block px-8 py-2 text-sm hover:bg-[#4e5a61] hover:text-[#60beec]">Email Marketing</Link>
                  <Link to="/owner-acquisition-strategy/" className="block px-8 py-2 text-sm hover:bg-[#4e5a61] hover:text-[#60beec]">Owner Acquisition Strategy</Link>
                  <Link to="/boost/" className="block px-8 py-2 text-sm hover:bg-[#4e5a61] hover:text-[#60beec]">Channel Management</Link>
                </div>
              </div>
            </div>
            <Link to="/pricing/" className="block px-4 py-2">Pricing</Link>
            <Link to="/blogs/" className="block px-4 py-2">Blog</Link>
            <Link to="/client-center/" className="block px-4 py-2">Client Center</Link>
            <Link to="/connect-with-us/" className="block mx-4 mt-2 bg-blue-900 py-2 rounded text-center">Connect</Link>
          </div>
        )}
      </div>
    </header>
  );
}