import React, { Suspense, lazy ,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Preloader from "./components/Preloader.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos';

// ✅ Lazy imports (only pages)
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const Connect = lazy(() => import("./pages/Contect.jsx"));

const DigitalMarketing = lazy(() => import("./pages/Solutions/Digital-Marketing.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));

const BlogOne = lazy(() => import("./pages/modern-seo-best-practices.jsx"));
const BlogTwo = lazy(() => import("./pages/your-website-is-boring.jsx"));
const BlogThree = lazy(() => import("./pages/psychology-of-branding.jsx"));
const BlogFour = lazy(() => import("./pages/social-media-that-sells.jsx"));
const BlogFive = lazy(() => import("./pages/digital-first-impressions.jsx"));

const WebDevelopment = lazy(() => import("./pages/Services/WebDevelopment.jsx"));
const SeoService = lazy(() => import("./pages/Services/SeoService.jsx"));
const GraphicDesign = lazy(() => import("./pages/Services/graphicDesign.jsx"));
const SocialMedia = lazy(() => import("./pages/Services/socialMedia.jsx"));
const BrandingSection = lazy(() => import("./pages/Services/brandingSection.jsx"));
const VideoProduction = lazy(() => import("./pages/Services/videoProduction.jsx"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsConditions = lazy(() => import("./pages/Terms&Conditions.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true,     // Animate once per scroll
    });
  }, []);
  return (
    <>
    <Preloader />
      <ScrollToTop />
      <Navbar />

      {/* ✅ Suspense wraps ALL routes */}
      <Suspense fallback={<div className="flex justify-center items-center h-screen text-xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />

          {/* Services */}
          <Route path="/web-designing/" element={<WebDevelopment />} />
          <Route path="/search-engine-optimization/" element={<SeoService />} />
          <Route path="/graphic-design/" element={<GraphicDesign />} />
          <Route path="/social-media-marketing/" element={<SocialMedia />} />
          <Route path="/branding/" element={<BrandingSection />} />
          <Route path="/video-production/" element={<VideoProduction />} />

          {/* Solutions */}
          <Route path="/digital-marketing/" element={<DigitalMarketing />} />

          {/* Other Pages */}
          <Route path="/pricing/" element={<Pricing />} />
          <Route path="/blogs/" element={<Blogs />} />

          {/* Blog Single Pages */}
          <Route path="/modern-seo-best-practices" element={<BlogOne />} />
          <Route path="/your-website-is-boring" element={<BlogTwo />} />
          <Route path="/psychology-of-branding" element={<BlogThree />} />
          <Route path="/social-media-that-sells" element={<BlogFour />} />
          <Route path="/digital-first-impressions" element={<BlogFive />} />

          <Route path="/connect-with-us/" element={<Connect />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions/" element={<TermsConditions />} />
          <Route path="/24/7-support/" element={<Support />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
