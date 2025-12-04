import { FaFacebook, FaVimeo, FaLinkedin, FaGoogle, FaInstagram ,  FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import TrustpilotWidget from "./TrustpilotWidget";
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin";


export default function Footer() {
  return (
    <>
      {/* Connect Section */}
      <section className="bg-[#D2C1B6] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <h1 className="text-xl sm:text-4xl md:text-2xl Poppins-font text-[#2E2E2E]">
              Connect with Us!
            </h1>
            <HashLink
              to="/connect-with-us/#contact-form"
              className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg 
             shadow-[0_4px_0px_#456882] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] 
             active:translate-y-[2px] active:shadow-none"
            >
              Contact Our Team
            </HashLink>
            {/* <Link
        to="/connect-with-us/"
        className="bg-[#1c75bc] text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-[#1c74bcce] transition duration-300"
      >
        Contact Our Team
      </Link> */}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#1B3C53] text-white Poppins-font px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left">
          {/* Column 1 */}
          <div>
           <a href="tel:+1 7862242280"> <button className="mb-4 px-6 py-2 border border-[#D2C1B6] font-semibold hover:bg-[#FFF5E1] hover:text-black transition">
              Give us a call: +1 786 224 2280
            </button></a>
            <br />
            <button className="mb-1  py-2  font-semibold ">

              <a
                href="https://wa.me/14482381683?text=Hello!%20I%20want%20to%20grow%20my%20business%20online.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500  text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </button>

            <p><a href="mailto:contact@digifyamerica.com">contact@digifyamerica.com</a> </p>
            <br />
            <p>
              34990 Emerald Coast Pkwy, Suite 300,<br />Destin, FL 32541
            </p>
            <div className="mt-4 flex  gap-5 text-[30px] md:mx-0 mx-22">
              <a href="https://www.facebook.com/people/Digify-America/61574315640630/"><FaFacebook className="hover:text-blue-500 cursor-pointer" /></a>
                
              <a href="https://www.instagram.com/digifyamerica/"><FaInstagram className="hover:text- cursor-pointer" /></a>
              <a
                href="https://wa.me/14482381683?text=Hello!%20I%20want%20to%20grow%20my%20business%20online.%20Please%20guide%20me."> <FaWhatsapp className="hover:text-green-500 cursor-pointer"/> </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Services</h2>
            <ul className="mt-4 space-y-1 text-sm underline text-white/90">
              <li><Link to="/web-designing/">Websites Development</Link></li>
              <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
              <li><Link to="/graphic-design/">Graphic Design</Link></li>
              <li><Link to="/social-media-marketing/">Social Media Marketing</Link></li>
               <li><Link to="/branding/">Branding</Link></li>
               <li><Link to="/video-production/">Video Production</Link></li>
            </ul>
          </div>
           <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Company</h2>
            <ul className="mt-4 space-y-1 text-sm underline text-white/90">
              <li><Link to="/about-us/">About</Link></li>
              <li><Link to="/pricing/">Pricing</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/24/7-Support/">24/7 Support</Link></li>
              <li><HashLink
              to="/connect-with-us/#contact-form"
              
            >
              Contact
            </HashLink></li>
            </ul>
            
          </div>
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Legal</h2>
            <ul className="mt-4 space-y-1 text-sm underline text-white/90">
              <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="/Terms-&-Conditions/">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
  {/* Our Location Heading */}
<div className="w-full text-left max-w-7xl mx-auto mt-10 px-6">
  <h2 className="text-[24px] font-semibold text-white">Our Location</h2>
</div>

{/* Full Width Map */}
<div className="w-full mt-4">
  <iframe
    src={mapSrc}
    className="w-[100%] h-72 md:h-96 md:w-[400%] lg:h-[200px]"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Location"
  ></iframe>
</div>

</div>
        </div>
        <div className="p-6">

          <TrustpilotWidget />
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 border-t-3 border-[#D2C1B6] pt-6 text-center text-sm text-white/80">
          <p>
            2025 Copyright © & Powered by <a href="digifyamrica.com"> Digify America</a>
          </p>

        </div>
      </footer>
    </>
  );
}
