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


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Solution/" element={ <Solutions />} />
       <Route path="/digital-marketing/" element={<DigitalMarketing /> } />
        <Route path="/direct-booking-websites/" element={<DirectBookingwebsites />} />
        <Route path ="/email-marketing/" element ={<EmailMarketing />}/>
        <Route path="/owner-acquisition-strategy/" element={<OwnerAcquisitionStrategy/>}/>
        <Route path="/pricing/" element ={<Pricing />}/>
        <Route path="/boost/" element={<Boost />}/>
        <Route path="/blogs/" element= {<Blogs />}/>
        <Route path="/blogs/:slug" element= {<BlogPostPage />}/>
        <Route path="/client-center/" element={<ClientCenter />}/>
        <Route path="/connect-with-us/" element={<Connect />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
