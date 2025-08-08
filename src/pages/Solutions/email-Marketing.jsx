import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';

const testimonials = [
  {
    text: "If you're the type of property manager who wants support in critical areas...",
    author: "John Doe",
    role: "Marketing Director",
    image: "/images/person1.jpg",
  },
  {
    text: "From the shopping cart abandonment tool... streamlined way to transport your web presence to past and future guests’ inboxes.",
    author: "Caleb Hofheins",
    role: "Greybeard Realty",
    image: "/images/person2.jpg",
  },
  {
    text: "Matt was in charge of my email campaigns... thank you for your investment in our company.",
    author: "Reilly McGregor",
    role: "Harborview Realty",
    image: "/images/person3.jpg",
  },
   {
    text: "Matt was in charge of my email campaigns... thank you for your investment in our company.",
    author: "Reilly McGregor",
    role: "Harborview Realty",
    image: "/images/person3.jpg",
  },
];
// import img3 from '../../assets/images/img3.jpg';
const EmailMarketing = () => {
           const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <section
                  className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
                  style={{
                    backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/EmailPageHeader.png")`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-0"></div>
          
                  <div className="relative z-10 max-w-5xl">
                    <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
                    <h1 className="text-[34px] font-light leading-tight mb-6">
                     Earn high ROI with email tools and expert strategy made for vacation rental professionals.
                    </h1>
                    <a
                      href="#"
                      className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
                    >
                     LEARN MORE
                    </a>
                  </div>
                </section>
                <div className="text-center max-w-4x4 mx-auto pt-10">
        <p className="text-[34px] font-[600] md:text-[28px] text-[#53b6e7] mb-1">
          Get more leads, send better emails, and drive more direct bookings.
        </p>
          <span className="text-[#444] text-[24px] font-medium  cursor-pointer">
           Bluetent’s email marketing solutions are designed to increase revenue <br/>
           at every stage of the traveler journey.
          </span>
          <br /><br />

      </div>
       <section className="w-full px-4 py-0">
      <div className="max-w-2xl mx-auto">
        <img
          src="https://www.bluetent.com/wp-content/uploads/2019/04/Email-Graphic.png"
          alt="Marketing Visual"
          className="w-full h-auto rounded-lg  object-cover"
        />
      </div>
    </section>
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-[34px] font-light text-gray-800 mb-12">
          DIY to fully managed:<br />
          <span className="">email solutions for every vacation rental business</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3 text-left mx-24">
          {/* Box 1 */}
          <div className="p-6 hover:bg-blue-100 rounded-2xl">
            <h3 className="text-[24px] font-[600] text-[#f09b2d] mb-2">
              ATTRACT & ENGAGE LEADS
            </h3>
            <p className="text-gray-700 text-[18px] leading-relaxed">
              Fully integrated with your Rezfusion website, our email solutions are designed to capture the attention of website visitors, make powerful first impressions, and build your brand.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 hover:bg-blue-100 rounded-2xl">
            <h3 className="text-[24px] font-[600] text-[#f09b2d] mb-2">
              SEND BETTER EMAILS
            </h3>
            <p className="text-gray-700 text-[18px] leading-relaxed">
              Our email tools make it easy to create beautiful, branded email campaigns that look great on every device – helping you engage travelers throughout their journey.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-6 hover:bg-blue-100 rounded-2xl">
            <h3 className="text-[24px] font-[600] text-[#f09b2d] mb-2">
              TARGET TRAVELERS
            </h3>
            <p className="text-gray-700 text-[18px] leading-relaxed">
              Intelligent lead segmentation gives you the ability to send targeted, personalized, and meaningful messages that drive revenue – from nurturing leads to turning one-time visitors into lifelong guests
            </p>
          </div>
        </div>
      </div>
    </section>
     <div className="w-full py-12 bg-white">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={40}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-6xl mx-auto"
      >
        {testimonials.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <SwiperSlide
              key={idx}
              className={`max-w-md px-6 py-8 rounded-lg shadow-md relative flex flex-col items-center text-center transition-all duration-300 ${
                isActive
                  ? 'bg-blue-700 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
              style={{ height: 'auto' }}
            >
              <p className="text-lg leading-relaxed mb-4">“{item.text}”</p>
              <div className="mt-6">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h4 className={`font-semibold ${!isActive ? 'text-gray-500' : 'text-white'}`}>
                  {item.author}
                </h4>
                <p className={`text-sm ${!isActive ? 'text-gray-400' : 'text-blue-100'}`}>
                  {item.role}
                </p>
              </div>
              {isActive && (
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-700 rotate-45"></div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination mt-6 text-center"></div>
    </div>

     <div className="text-center max-w-4x4 mx-auto">
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Interested in driving direct bookings and maximizing revenue?
        </p>
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Bluetent has a package to help with that.
          <br />
          <span className="text-[#53b6e7] font-medium  cursor-pointer">
            
Bluetent’s Digital Marketing Packages
          </span>
          <br /><br />
        </p>
      </div>
    <section className="bg-[#222] text-white py-16 px-4 md:px-10 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-1xl mx-auto">
    {/* Level One */}
    <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
      <h3 className="text-[34px] font-[300] mb-4">Level One</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to jumpstart online success with a
        healthy and diverse digital strategy. This level is a good starting
        point for smaller vacation rental companies or those that simply
        want to maintain their SEO presence. This package can be used as a
        stepping stone for more robust marketing strategies.
      </p>
      <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Build your online ecosystem
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>

    {/* Level Two */}
    <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
       <h3 className="text-[34px] font-[300] mb-4">Level Two</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to attract more travelers into
        their direct booking funnel by improving your SEO positioning while
        increasing website traffic and brand awareness through content
        marketing. Take the next step in your marketing by identifying
        strategies and tactics to improve your search engine presence,
        increase traffic and conversions, and strengthen brand awareness.
      </p>
      <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Expand your online presence
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>

    {/* Level Three */}
   <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
       <h3 className="text-[34px] font-[300] mb-4">Level Three</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to distinguish their brand in
        competitive markets. This package is for any brand who is looking
        to be the leader in their market through data-driven strategic
        recommendations. Work with a dedicated Strategic Account Manager to
        execute strategies aimed at increasing occupancy, growing property
        inventory, and strengthening brand loyalty. A supplement to this
        package is access to Rental Insights, powered by LSI Tools — where
        you will discover untapped revenue opportunities to create targeted
        campaigns.
      </p>
       <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Increase your market advantage
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>
  </div>
</section>

    </>
  )
}

export default EmailMarketing
