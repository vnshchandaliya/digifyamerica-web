import { FaFacebook, FaVimeo, FaLinkedin, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin" ;


export default function Footer() {
  return (
    <>
      {/* Connect Section */}
     <section className="bg-white py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
      <h2 className="text-xl sm:text-4xl md:text-2xl font-semibold text-[#1c75bc]">
        Connect with Us!
      </h2>
      <Link
        to="/connect-with-us/"
        className="bg-[#1c75bc] text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-[#1c74bcce] transition duration-300"
      >
        Contact Our Team
      </Link>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              Give us a call: +1 786 224 2280
            </button>
            <p>contact@digifyamerica.com</p>
            <br />
            <p>
              34990 Emerald Coast Pkwy, Suite 300,<br />Destin, FL 32541
            </p>
            <div className="mt-4 flex  gap-5 text-[30px]">
          <a href="https://www.facebook.com/people/Digify-America/61574315640630/"><FaFacebook className="hover:text-white cursor-pointer" /></a>
            {/* <FaVimeo className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaGoogle className="hover:text-white cursor-pointer" /> */}
            <a href="https://www.instagram.com/digifyamerica/"><FaInstagram className="hover:text-white cursor-pointer" /></a>
          </div>
          </div>

          {/* Column 2 */}
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <h2 className="text-[22px]">Information</h2>
             <ul className="mt-4 space-y-1 text-sm underline text-white/90">
              <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="/Terms-&-Conditions/">Terms & Conditions</Link></li>
              <li><Link to="/24/7-Support/">24/7 Support</Link></li>
              {/* <li><a href="#">Travel Partners</a></li> */}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              Sign Up
            </button> */}
           <div className="map-container">
                 <iframe
                   src={mapSrc}
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen={true}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Google Maps Location"
                 ></iframe>
               </div>
          
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-white/80">
          <p>
           2025 Copyright © & Powered by Digify America
          </p>
          
        </div>
      </footer>
    </>
  );
}
