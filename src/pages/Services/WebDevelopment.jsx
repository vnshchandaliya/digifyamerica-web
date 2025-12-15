import React from 'react';import { Helmet } from "react-helmet-async"; 

import { Bolt, Layout, Smartphone, MousePointer2 } from 'lucide-react';
import heroImage from "../../assets/service-vector/webDev.png"
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <>
    <Helmet>
    <title>Website Development | Fast, Responsive & Modern Websites</title>
<meta name="description" content="We build responsive, SEO-friendly, and high-performance websites that convert more customers." />

    </Helmet>
    <section className="bg-[#D2C1B6] pt-30 text-[#234C6A]">
      {/* Top Section: Text and Image in a grid */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left ">
             <h1 className='text-center whitespace-nowrap  text-[27px] md:text-[50px] font-[300] mx-1 fontplayfair text-[#1B3C53]'>
              Web Design & <br /> Application Development
            </h1>
            <br />
            <p className="text-lg text-[#234C6A] mb-8">
              Let your website be your Best Salesperson
              With the right representation your website 
              should be your hardest-working employee. So, if your website is still a 
              static <Link to={"/about-us"} className='text-[#1B3C53] font-bold'>“About Us”</Link>  page and a phone number, your business is getting ignored. In the digital world, your website is your storefront, brand ambassador, and top-performing sales rep only if it's built the right way.
            </p>
            <p className='text-lg text-[#234C6A] mb-8'>
              Digital presence is about owning your space and turning passive visitors into loyal 
              customers. At Digify America, we create custom  web solutions that work harder for you. <br />
             <o className="border-2 border-[#1B3C53] bg-[#234C6A] text-white uppercase whitespace-nowrap" > 
              Our design and development  </o> approach is centered around strategy,<o className="text-[#1B3C53] font-bold "> performance </o>, and 
             <o className="text-[#1B3C53] font-bold"> user behavior.  </o> Every element is designed to guide, engage, and convert. And everything we build is 
              optimized for a seamless experience across all devices.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImage}
              alt="Web Development and Design"
              className=" w-[100vh] h-auto rounded-lg  object-cover"
            />
          </div>
        </div>
      </div>

      <p className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.50rem] 
  fontplayfair 
 mt-30
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
      </p>
      {/* Other Sections */}
      <div className=" py-42 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Fast, Functional & Built to Scale Section */}
          <div className="mb-16">
            <h2 className='text-center whitespace-nowrap  text-[29px] md:text-[50px] font-[300] mx-15 fontplayfair text-[#1B3C53]'>
              What We Offer
            </h2>
            <p className="max-w-4xl mx-auto text-lg  text-center mb-8">
              A <o className="text-[#1B3C53] font-bold ">beautiful website</o>  that loads like a snail is worse than no website. We focus on performance from day one. That means fast load times, clean code, intuitive navigation, and functionality that scales with your business. We also specialize in custom web applications tailored to your operations like <o className="text-[#1B3C53] font-bold "> calendar booking systems</o>  to
               <o className="border-2 border-[#1B3C53] bg-[#234C6A] text-white uppercase whitespace-nowrap" > user dashboards </o>  and client portals. If it lives online and solves a problem, we can build it. 
            </p>
            <p className="max-w-4xl mx-auto text-lg  text-center">
              Our development process is collaborative and agile. We work with you to define goals, map user journeys, and build solutions that exceed expectations.
            </p>
          </div>

          {/* "What we build" and Feature List */}
          <div className="mb-16">
            <h3 className="  text-[20px] font-[300] Poppins-font text-[#1B3C53]">Your website should be Fast, Functional & Built to Scale. What we build:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#234C6A] mb-8">
              <li className="flex items-start gap-2">
                <Bolt className="text-[#fff] h-6 w-6 flex-shrink-0" />
                <span >High-converting business websites</span>
              </li>
              <li className="flex items-start gap-2">
                <Bolt className="text-[#fff] h-6 w-6 flex-shrink-0" />
                <span>Custom web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <Bolt className="text-[#fff] h-6 w-6 flex-shrink-0" />
                <span>Content management systems (CMS)</span>
              </li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm md:text-base font-medium mt-8">
              <div className="flex items-center gap-2 bg-[#456882] p-4 rounded-lg shadow-sm border-2 border-[#234C6A] hover:shadow-xl transform duration-300">
                <Layout className="text-[#d12863] h-5 w-5" />
                <span>Conversion-focused</span>
              </div>
              <div className="flex items-center gap-2 bg-[#456882] p-4 rounded-lg shadow-sm border-2 border-[#234C6A] hover:shadow-xl transform duration-300">
                <Bolt className="text-orange-500 h-5 w-5" />
                <span>Lightning-fast</span>
              </div>
              <div className="flex items-center gap-2 bg-[#456882] p-4 rounded-lg shadow-sm  border-2 border-[#234C6A] hover:shadow-xl transform duration-300">
                <Smartphone className="text-[#1c75bc] h-5 w-5" />
                <span>Mobile-friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-[#456882] p-4 rounded-lg shadow-sm  border-2 border-[#234C6A] hover:shadow-xl transform duration-300">
                <MousePointer2 className="text-purple-500 h-5 w-5" />
                <span>Intuitive-design</span>
              </div>
            </div>
          </div>
<p className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[1.82rem] 
  fontplayfair 
 mt-29
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[8rem] 
'>
       Why Digify America?
      </p>
          {/* Websites designed with the user in mind Section */}
          <div className="mb-16 py-39">
            <h3 className="text-center whitespace-nowrap  text-[29px] md:text-[50px] font-[300] mx-1 fontplayfair text-[#1B3C53]">
              Why Digify America?
            </h3>
            <p className="max-w-4xl mx-auto text-lg  text-center mb-8">
              People don’t read websites. They scan them, scroll them, and leave if they can’t 
              figure out where to click. We make sure they don’t leave. <o className="text-[#1B3C53] font-bold "> Our UX/UI design philosophy</o>  is built on 
              human behavior. <br /> <o className="border-2 border-[#1B3C53] bg-[#234C6A] text-white uppercase whitespace-nowrap" > We design 
                websites </o> 
               with the user in mind.......always.
            </p>
            <h3 className="  text-[20px] font-[300] Poppins-font text-[#1B3C53]">Our design approach includes:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <li className="flex items-start gap-2">
                <MousePointer2 className="text-[#1B3C53] h-6 w-6 flex-shrink-0" />
                <span>Clear, concise messaging</span>
              </li>
              <li className="flex items-start gap-2">
                <MousePointer2 className="text-[#1B3C53] h-6 w-6 flex-shrink-0" />
                <span>Strong visual hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <MousePointer2 className="text-[#1B3C53] h-6 w-6 flex-shrink-0" />
                <span>Responsive layouts that adapt to every screen</span>
              </li>
              <li className="flex items-start gap-2">
                <MousePointer2 className="text-[#1B3C53] h-6 w-6 flex-shrink-0" />
                <span>Accessibility-first thinking</span>
              </li>
              <li className="flex items-start gap-2">
                <MousePointer2 className="text-[#1B3C53] h-6 w-6 flex-shrink-0" />
                <span>Interactive elements that guide users naturally</span>
              </li>
            </ul>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-[#1B3C53] text-[#fff] p-8 md:p-12 rounded-xl shadow-2xl">
            <h4 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">
              Are you ready to build something better?
            </h4>
            <p className="max-w-3xl mx-auto text-lg mb-6">
              If your current website is slowing you down, confusing your visitors, or boring, we can fix that. Digify America brings the technical muscle, creative flair, and strategic clarity needed to turn your online presence into your most valuable business asset.
            </p>
            <p className="max-w-3xl mx-auto text-lg mb-8">
              We build custom experiences that work for your audience, your brand, and your goals. Let’s build something that performs, converts, and grows with you.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WebDevelopment;
