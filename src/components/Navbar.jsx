import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo/DIGIFY.png"

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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#60bdecb8] bg-opacity-90 shadow-md" : "bg-[#60beec]"
      } text-white`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-15 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center ">
            <div className="relative group">
              <Link to="/Solution/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
                Solutions <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-[#c0baba] w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <Link to="/direct-booking-websites/" className="block px-5 py- text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Direct Booking Websites</Link>
                <Link  to="/digital-marketing/" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Digital Marketing</Link>
                <Link to="/email-marketing/" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Email Marketing</Link>
                <Link to="/owner-acquisition-strategy/" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Owner Acquisition Strategy</Link>
                <Link to ="/boost/" className="block px-5 py-0   text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Channel Management</Link>
                <br />
              </div>

            </div>

            <div className="relative group">
              <Link to="/pricing/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
                 Pricing {/*<ChevronDown className="w-4 h-4" /> */}
              </Link>
              {/* <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-[#c0baba] w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <a href="#" className="block px-5 py- text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Success Stories</a>
                <a href="#" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Testimonials</a>
                <a href="#" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Insider Knowlodge Base</a>
                <a href="#" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Partner</a>
                <a href="#" className="block px-5 py-0   text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Events</a>
                <br />
              </div> */}
            </div>

            <Link to="/blogs/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Blog</Link>

            {/* <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-[18px] font-exo2">
                Our Team <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-14 border-1 border-t-white-500 left-0 bg-[#3f4a4f] text-[#c0baba] w-72 mt-1 shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <a href="#" className="block px-5 py- text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Meet the team</a>
                <a href="#" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]"> join team</a>
                <a href="#" className="block px-5 py-0 text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]">Why Digifymerica ?</a>
                <a href="#" className="block px-5 py-0   text-xs mt-3 font-normal hover:bg-[#4e5a61] hover:text-[#60beec]"></a>
                <br />
              </div>
            </div> */}

            <Link to="/client-center/" className="flex items-center gap-1 font-semibold text-[18px] font-exo2">Client Center</Link>
            <Link to="/connect-with-us/" className="bg-[#1c75bc] text-white px-7 py-1 hover:bg-[#1c74bcbb] font-bold text-lg font-exo2">
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
