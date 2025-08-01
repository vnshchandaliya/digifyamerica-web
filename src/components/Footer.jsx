import { FaTwitter, FaVimeo, FaLinkedin, FaGoogle, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-12">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
            give us a call 970-704-3240!
          </button>
          <p>218 E Valley Rd, Suite 205<br />Carbondale, CO 81623</p>
        </div>

        {/* Column 2 */}
        <div>
          <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
            We're Hiring!
          </button>
          <p>
            Happy people make great things. We are always looking for the
            work hard, play hard type to join our team.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <button className="mb-4 px-6 py-2 border border-white font-semibold hover:bg-white hover:text-black transition">
            Sign Up
          </button>
          <p>
            Stay up-to-date on digital news and the latest happenings with our newsletter.
          </p>
          <ul className="mt-4 space-y-1 text-sm underline text-white/90">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Your California Privacy Choices</a></li>
            <li><a href="#">Data Privacy Protection Statement</a></li>
            <li><a href="#">Travel Partners</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-white/80">
        <p>
          Copyright © 2025 Blue Tent Marketing, LLC. All rights reserved. <br />
          Rezfusion and ResCMS are trademarks of Blue Tent Marketing, LLC.
        </p>
        <div className="mt-4 flex justify-center gap-5 text-xl">
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaVimeo className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
          <FaGoogle className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
