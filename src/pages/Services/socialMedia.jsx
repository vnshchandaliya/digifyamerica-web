import React from 'react'; import { Title, Meta } from "react-head";
import { CheckCircle, MessageSquare, CalendarDays, Edit, Users, TrendingUp, BarChart2, Star, Sparkles } from 'lucide-react';
import heroImage from "../../assets/service-vector/socialMedia.png"
const SocialMedia = () => {
  return (
    <>
    <Title>Social Media Marketing | Grow Your Brand Organically</Title>
<Meta name="description" content="Increase your reach and engagement with our social media marketing services for Facebook, Instagram, LinkedIn, YouTube & more." />

  <section className="bg-[#D2C1B6] pt-30 text-[#234C6A] ">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
             <h1 className="text-center text-[29px] md:text-[50px] whitespace-nowrap  font-[300] mx-1 fontplayfair text-[#1B3C53]">
              Social Media Marketing
            </h1>
            <p className="text-lg  mb-8">
              Posting random pics of your vacation rental with five hashtags and hoping for a miracle is not a strategy. Algorithm changes frequently and your social media need to grow up. You need a plan, engagement, analytics, and optimization. A mix of these can turn likes into leads, followers into loyal customers, and your channels into mini marketing space.
            </p>
            <p className='text-lg  mb-8'>
              At Digify America, we treat social media like a business tool. Whether you are looking to boost bookings, or building a brand, we help you stop wasting time and start building momentum.
            </p>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImage}
              alt="Social Media Marketing Illustration"
              className="w-[100vh] h-auto rounded-lg  object-cover"
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
  text-[2.70rem] 
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
      </p>
      {/* What We Offer Section */}
      <div className=" py-42 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center pt-5 whitespace-nowrap text-[29px] md:text-[50px] font-[300] mx-19 fontplayfair text-[#1B3C53]">
            What We Offer
          </h2>
          <p className="max-w-4xl mx-auto text-lg  text-center mb-10">
            Here’s what you need for digital success and what we deliver:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <MessageSquare className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Platform-Specific Strategy</h3>
                <p className="">Every channel is a different maze. What works on Instagram dies on LinkedIn. We tailor strategies for each platform—Facebook, Instagram, LinkedIn, TikTok, Pinterest, and beyond.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <CalendarDays className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Content Calendar Creation</h3>
                <p className="">Get rid of last-minute panic of “what should we post today?”. We build strategic, engaging, pre-approved content calendars that balance promos, personality, and performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <Edit className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Visual & Copy Creation</h3>
                <p className="">To stand out in crowd you need scroll-stopping graphics with captions that sound like you. We build a brand tone that stays consistent post after post.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <Users className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Community Management</h3>
                <p className="">Replying to comments, handling DMs, dealing with trolls or spams – we handle it all. Your followers want connection and not scripted responses.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <TrendingUp className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Social Media Advertising</h3>
                <p className="">Boosted posts are not a strategy. We create paid campaigns that are targeted, data-backed, and optimized to drive clicks, leads, and conversions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#1B3C53] p-3 rounded-full flex-shrink-0">
                <BarChart2 className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-[#1B3C53]">Insights & Reporting that makes sense</h3>
                <p className="">We won’t spam you with complex reports. We share real numbers, what worked, what didn’t, and what will do next.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<p className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2rem] 
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
      </p>
      {/* Why Digify America? */}
      <div className="py-40 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-center whitespace-nowrap pt-5 text-[29px] md:text-[50px] font-[300] mx-1 fontplayfair text-[#1B3C53]">
            Why Digify America?
          </h3>
          <p className="max-w-4xl mx-auto text-lg  text-center mb-8">
            Anyone can toss up content. But very few agencies take the time to actually understand your business, your voice, and your goals. Here’s how we are different:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1B3C53] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="">We Customize Everything: Your brand has a personality. We bring it out in every post, visual, and hashtag.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1B3C53] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="">We Mix Creativity + Strategy: Your feed should look good and perform.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1B3C53] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="">We Move Fast: Need a campaign ready by tomorrow? We have already started.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1B3C53] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="">We Know Your Industry: We have worked with travel brands, small businesses, and startups—we know what works and why.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#1B3C53] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="">We Stay Accessible: You don’t need to send reminders to get a reply. We are here whenever you need us.</p>
            </div>
          </div>
           <div className="text-center bg-[#1B3C53] text-white p-8 md:p-12 mt-30 rounded-xl shadow-2xl">
        <h4 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">
          Let’s Get Social—Strategically
        </h4>
        <p className="max-w-3xl mx-auto text-lg mb-6">
         <o className="border-2 border-[#D2C1B6] bg-[#D2C1B6] text-black uppercase " >Social media is powerful growth tool.</o> Let’s build you a custom social media strategy that connects, converts, and grows with your business.
        </p>
        {/* <a
          href="#"
          className="inline-block bg-white text-blue-600 font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Schedule a FREE CONSULTATION today!
        </a> */}
      </div>
        </div>
      </div>
      
      {/* Final CTA Section */}
     
    </section>
    </>
  );
};

export default SocialMedia;
