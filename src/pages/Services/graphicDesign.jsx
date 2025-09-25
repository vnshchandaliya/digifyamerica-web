import React from 'react';
import { Palette, Brush, Briefcase, FileText, Monitor, CheckCircle, Star, Sparkles } from 'lucide-react';
import heroImage from "../../assets/service-vector/graphic.png"

const GraphicDesign = () => {
  return (
    <section className="bg-[#ad9a9a35] font-inter pt-30 ">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[50px] text-[#FAA533] fontplayfair leading-13">
              Good design doesn’t just look nice but also work hard.
            </h1>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              If your logo was made in PowerPoint and your graphics are picked from stock photo album, it’s time 
              to level up.<o className="border-2 border-[#FAA533] bg-[#FAA533] text-white uppercase whitespace-nowrap"
               > Our teams create design systems</o> that are bold, clear, and unmistakably yours.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              Your Brand starts with a feeling and we make sure people feel it. Before a word is spoken, your brand is already telling a story. At Digify America, we specialize in <o className="text-[#FAA533] "> crafting powerful</o> visual identities that match your voice. It’s about timeless creative that connects, converts, and stays consistent from business cards to browser tabs.
            </p>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImage}
              alt="Graphic & Logo Design"
              className="w-full max-w-[70vh] h-auto rounded-lg  object-cover"
            />
          </div>
        </div>
      </div>
 <h1 className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[9rem] 
'>
        What We Offer
      </h1>
      {/* What We Offer Section */}
      <div className="bg-gray-50 py-44 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
            What We Offer
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-10">
            Here’s what our design team brings to the table:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Star className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Holiday Rental & Travel Brand Visuals</h3>
                <p className="text-gray-700">We specialize in visual packages for vacation rentals: property logos, branded welcome guides, booking graphics, and digital ads designed to convert clicks into guests.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Brush className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Custom Logo Design</h3>
                <p className="text-gray-700">We create logos that are memorable, meaningful, and flexible enough to live everywhere, from mobile app icon to website banner.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Palette className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Brand Identity Systems</h3>
                <p className="text-gray-700">Be it colors, fonts, imagery or tone, everything is laid out in a brand book so your message stays clear and easy to recognize everywhere.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <FileText className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Marketing Collateral Design</h3>
                <p className="text-gray-700">We design brochures, business cards, event signage, menus, posters—anything and everything with your business logo on it.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Monitor className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Digital Graphics & Social Media Kits</h3>
                <p className="text-gray-700">From Instagram stories to website banners and email headers, we create consistent, clickable, and on-brand visuals. This helps build a strong online presence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<h1 className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[7rem] 
'>
       Why Digify America?
      </h1>
      {/* Why Digify America? */}
      <div className="py-40 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
            Why Digify America?
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-8">
            There’s no shortage of<o className="text-[#FAA533] "> “designers”</o> online—but most will hand you a logo and disappear. We don’t vanish after the first draft. And we never, ever deliver anything that doesn’t represent your brand like a pro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Listen First: Your brand has a personality. We help uncover it and turn it into visual language.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Customize Everything: No recycled icons. No font crimes. Just design that fits your brand story.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Move Fast & Smart: Need something yesterday? Our workflow is agile and keeps you ahead of competition.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Think Long-Term: Every design choice is made with scalability, usability, and growth in mind.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Stay Affordable: Flexibility to pick the services you need and tailor a package that works for your budget.</p>
            </div>
          </div>

           {/* Final CTA Section */}
          <div className="text-center bg-[#FFF5E1] text-black p-8 md:p-12 mt-30 rounded-xl shadow-2xl">
           <h2 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">
          Ready to be a brand people remember?
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Let’s bring your brand to life with designs that boost business.
        </p>
            <p className="max-w-3xl mx-auto text-lg mb-8">
              Your audience is searching. Let’s make sure they find you.
            </p>
            {/* <a
              href="#"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get a FREE CONSULTATION today!
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
