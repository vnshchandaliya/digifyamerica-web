import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#60bdecb8] bg-opacity-90 shadow-md" : "bg-[#60beec]"
      } text-white`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
         <a href="">
          <img src={logo} alt="logo" className="h-15 w-auto" />
         </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center ">
           <div className="relative group">
  <button className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
    Solutions <ChevronDown className="w-4 h-4" />
  </button>
  <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-white w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Direct Booking Websites</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Digital Marketing</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Email Marketing</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Owner Acquisition Strategy</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Channel Management</a>
  </div>
</div>

            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
                Knowledge <ChevronDown className="w-4 h-4" />
              </button>
               <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-white w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Direct Booking Websites</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Digital Marketing</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Email Marketing</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Owner Acquisition Strategy</a>
    <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Channel Management</a>
  </div>
            </div>

            <a href="#" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Blog</a>

            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
                Our Team <ChevronDown className="w-4 h-4" />
              </button>
               <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-white w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
               <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Direct Booking Websites</a>
               <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Digital Marketing</a>
               <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Email Marketing</a>
               <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Owner Acquisition Strategy</a>
               <a href="#" className="block px-5 py-2 text-sm font-normal hover:bg-[#4e5a61]">Channel Management</a>
          </div>
            </div>

            <a href="#" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Client Center</a>
           <Link to="/connect-with-us" className="bg-[#1c75bc] text-white px-7 py-1 hover:bg-[#1c74bcbb] font-bold text-lg font-exo2">
          Connect
        </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-sky-500 text-white space-y-4 py-4">
            <a href="#" className="block px-4">Solutions</a>
            <a href="#" className="block px-4">Knowledge</a>
            <a href="#" className="block px-4">Blog</a>
            <a href="#" className="block px-4">Our Team</a>
            <a href="#" className="block px-4">Client Center</a>
            <a href="#" className="block px-4 bg-blue-900 py-2 rounded text-center">Connect</a>
          </div>
        )}
      </div>
    </header>
  );
}
