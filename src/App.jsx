import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Connect from './pages/Contect.jsx';
import Navbar from './components/Navbar.jsx';
import DirectBookingwebsites from './pages/Solutions/direct-booking-websites.jsx';
import Solutions from './pages/Solutions/Solutions.jsx';
import Footer from './components/Footer.jsx';
import DigitalMarketing from './pages/Solutions/Digital-Marketing.jsx';
import EmailMarketing from './pages/Solutions/email-Marketing.jsx';
import OwnerAcquisitionStrategy from './pages/Solutions/Owner-Acquisition-Strategy.jsx';
import Boost from './pages/Solutions/Boost.jsx';
import Pricing from './pages/Pricing.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ClientCenter from './pages/clientCenter.jsx';
import About from './pages/About.jsx';
import WebDevelopment from './pages/Services/WebDevelopment.jsx';
import SeoService from './pages/Services/SeoService.jsx';
import GraphicDesign from './pages/Services/graphicDesign.jsx';
import SocialMedia from './pages/Services/socialMedia.jsx';
import BrandingSection from './pages/Services/brandingSection.jsx';
import VideoProduction from './pages/Services/videoProduction.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import TermsConditions from './pages/Terms&Conditions.jsx';
import Support from './pages/Support.jsx';



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="/Solution/" element={<Solutions />} />
        <Route path="/web-designing/" element={<WebDevelopment />} />
        <Route path="/search-engine-optimization/" element={<SeoService />} />
        <Route path="/graphic-design/" element={<GraphicDesign />} />
        <Route path="/social-media-marketing/" element={<SocialMedia />} />
        <Route path="/branding/" element={<BrandingSection />} />
        <Route path="/video-production/" element={<VideoProduction />} />
        <Route path="/digital-marketing/" element={<DigitalMarketing />} />
        <Route path="/direct-booking-websites/" element={<DirectBookingwebsites />} />
        <Route path="/email-marketing/" element={<EmailMarketing />} />
        <Route path="/owner-acquisition-strategy/" element={<OwnerAcquisitionStrategy />} />
        <Route path="/pricing/" element={<Pricing />} />
        <Route path="/boost/" element={<Boost />} />
        <Route path="/blogs/" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="/client-center/" element={<ClientCenter />} />
        <Route path="/connect-with-us/" element={<Connect />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/Terms-&-Conditions/" element={<TermsConditions />} />
        <Route path="/24/7-Support/" element={<Support />} />


      </Routes>
      <Footer />
    </>
  );
};

export default App;
