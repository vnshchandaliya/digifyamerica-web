import { FaFacebook, FaVimeo, FaLinkedin, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <a
        href="/Conect-with-us"
        className="bg-[#1c75bc] text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-[#1c74bcce] transition duration-300"
      >
        Contact Our Team
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              Give us a call: +1 786 224 2280!
            </button>
            <p>
              34990 Emerald Coast Pkwy, Suite 300,<br />Destin, FL 32541
            </p>
          </div>

          {/* Column 2 */}
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              We're Hiring!
            </button> */}
            <p>
              Happy people make great things. We are always looking for the
              work hard, play hard type to join our team.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            {/* <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
              Sign Up
            </button> */}
            <p>
              Stay up-to-date on digital news and the latest happenings with our newsletter.
            </p>
            <ul className="mt-4 space-y-1 text-sm underline text-white/90">
              <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
              <li><a href="#">Your California Privacy Choices</a></li>
              <li><a href="#">Data Privacy Protection Statement</a></li>
              <li><a href="#">Travel Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-white/80">
          <p>
           2025 Copyright © & Powered by Digify America
          </p>
          <div className="mt-4 flex justify-center gap-5 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            {/* <FaVimeo className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaGoogle className="hover:text-white cursor-pointer" /> */}
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </>
  );
}
