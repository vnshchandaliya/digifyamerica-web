import React from 'react';
import { Eye, Target } from 'lucide-react';
import planImage from "../assets/service-vector/digital growth.png"; 
import founderImage from "../assets/Owner/Image.jpeg"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
import PartnerSection from '../components/partnerSection';

const testimonials = [
  {
    text: "DigifyAmerica completely transformed our online presence! We were struggling to get noticed, but their team developed a comprehensive strategy that delivered real results. Our website traffic has skyrocketed, and we've seen a significant increase in leads. Highly recommend their professional and knowledgeable team!",
    author: "Sarah M., Austin, TX",
//     role: "Marketing Director",
//     image: "/images/person1.jpg",
  },
  {
    text: "We hired DigifyAmerica for their SEO services, and it was one of the best decisions we've made. They were meticulous, transparent, and we started seeing our search rankings climb within just a few months. The communication was excellent, and they explained everything in a way that was easy to understand. A true partner in our business growth.",
    author: "David P., Los Angeles, CA",
//     role: "Greybeard Realty",
//     image: "/images/person2.jpg",
  },
  {
    text: "Kevin has been amazing to work with. He didn’t just throw big marketing terms at us — he actually explained what needed to be done in simple language. We started seeing more calls and inquiries within weeks. Super reliable and easy to talk to.",
    author: "Maria R., New York, NY",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
   {
    text: "I can't say enough good things about DigifyAmerica's PPC expertise. Our ad spend was generating very little return before we started working with them. They optimized our campaigns, and now we're seeing an incredible return on investment. The team is data-driven and genuinely committed to our success. A fantastic partner!",
    author: "Kevin J., Chicago, IL",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
  {
    text: "Roger really knows his stuff when it comes to SEO. He spotted things on our website we never noticed, fixed them, and our Google ranking went up in just a couple of months. He checks in regularly, which makes us feel like he actually cares about our business.",
    author: "Jessica L., Miami, FL",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
  {
    text: "Mike really turned around our social media. He has a great eye for what works with our audience and our engagement has gone way up. He also checks in often so we always know what’s going on.",
    author: "Brian S., Seattle, WA",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
];
const About = () => {
          const [activeIndex, setActiveIndex] = useState(0);
  return (
          <div className='bg-[#D2C1B6]'>
     <section className=" px-4 md:px-8 pt-20">
  <div className="container mx-auto max-w-7xl pt-16 pb-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
       <div className="order-1 lg:order-1 relative w-full lg:w-auto">
        <img
        loading="lazy"
          src={planImage}
          alt=""
          className="w-[100vh] h-auto mt-8 rounded-lg   object-cover"
        />
      </div>
   
     
      
      {/* This is the text div.
        It now has the order-2 class for all screens and lg:order-2 to keep it on the right.
      */}
      <div className="order-2 lg:order-2 text-center lg:text-left text-[#234C6A]">
        <h1 className="text-[29px] md:text-[50px]  text-[#1B3C53] fontplayfair">
         Your digital growth partner
        </h1>
        <strong className='font-[500] text-2xl Poppins-font'>Our Story</strong>

        <p className="">
        Headquartered in sunny Florida but digitally present everywhere, Digify America have built reputation by treating clients' growth as primary mission. What drives us is seeing businesses transform through strategic digital presence. Our leadership team built Digify America because we saw too many companies getting generic solutions that looked pretty but failed to deliver results.    </p>
       <strong className='font-[500] text-2xl Poppins-font'>Our Team</strong>
        <p className=''>
        Behind every successful Digify project stands a diverse team of specialists who combine deep technical knowledge with creative vision:    </p>
        <ul className='list-disc ml-10'>
          <li><strong className='font-[500] Poppins-font'>Digital Strategists: </strong>The big-picture thinkers who map your journey from where you are to where you want to be</li>
          <li><strong className='font-[500] Poppins-font'>UX/UI Designers: </strong>Experience architects who create intuitive, engaging digital environments</li>
          <li><strong className='font-[500] Poppins-font'>Full-Stack Developers: </strong>Code craftspeople who build robust, scalable technical solutions</li>
          <li><strong className='font-[500] Poppins-font'>Content Creators:</strong>Storytellers who understand that words and images need to work as hard as your website</li>
          <li><strong className='font-[500] Poppins-font'>SEO Specialists: </strong>Search experts, who know how to make it easy to find your brand.</li>
          <li><strong className='font-[500] Poppins-font'>Analytics Pros:</strong>Data interpreters who translate numbers into actionable insights
What unites us is a shared passion for solving problems. We are the people who get excited about conversion rates, user flows, and elegant code and these elements translate directly to your business success.</li>
        </ul>
      </div>
     
    </div>
  </div>
</section>
 <section className=" px-4 md:px-8 pt-20">
      <div className="container mx-auto max-w-7xl pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          
          <div className="order-2 lg:order-1 text-center lg:text-left text-[#234C6A]">
            <h1 className="text-[29px] md:text-[50px]  text-[#1B3C53] fontplayfair">
             Founder - Roger Brown
            </h1>
            <p className="text-lg  mb-8">
              Roger rides his bike the way others do yoga — as a form of meditation. When the wind rushes past him and the world gets loud, that’s exactly when he finds his peace.
              He is a magician when it comes to using motion, speed, and the lens to slow everything down. Riding, camping and photography are more than hobbies for him.
            </p>
            <p className='text-lg  mb-8'>
              It is how he processes the world and sees beauty in the chaos. He's got the heart of an adventurer and the soul of a saint — grounded, thoughtful, and always seeking. He is also a proud dog dad to two adorable pups who are basically his shadows. They bring out the softer side of a guy who already has a golden heart.
            </p>
            <a
              href="https://www.linkedin.com/in/roger-brown-48390b14/"
              className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg mr-20
             shadow-[0_4px_0px_#456882] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] 
             active:translate-y-[2px] active:shadow-none" >
              Explore More
            </a>
            
          
           
          </div>
          
          <div className="order-1 lg:order-2 relative w-full lg:w-auto">
            <img
            loading="lazy"
              src={founderImage}
              alt="Founder Roger Brown"
              className="w-[70vh] h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
       <section className=" py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
              <Eye className="h-10 w-10 text-[#1c75bc]" />
            </div>
            <h3 className="text-2xl md:text-3xl Poppins-font font-[300] text-white mb-4 text-center ">Our Vision</h3>
            <p className="text-white text-center">To be the leading digital marketing agency, empowering businesses to achieve extraordinary growth in the digital world.


              </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
              {/* Mission Icon (Target) */}
            <Target className="h-10 w-10 text-[#1c75bc]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-[300] Poppins-font text-white mb-4 text-center">Our Mission</h3>
            <p className="text-white text-center">
Our mission is to craft innovative and data-driven digital strategies that connect your brand with the right audience.
            </p>
          </div>
          
        </div>
      </div>
    </section>
       <h1 className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.30rem] 
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
 Our Testimonial
</h1>
     <div className="w-full py-22  pt-41">
      <h1 className='text-center  text-[27px] md:text-[60px] font-[300] mx-1 fontplayfair whitespace-nowrap text-[#1B3C53]'>Hear From Those Who Trust Us</h1>
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
            className="w-full max-w-8xl mx-auto"
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <SwiperSlide
                  key={idx}
                  className={`max-w-md px-6 py-8 rounded-lg shadow-md relative flex flex-col items-center text-center transition-all duration-300 ${
                    isActive
                      ? 'bg-[#234C6A] text-[#fff]'
                      : 'bg-[#456882] text-[#D2C1B6]'
                  }`}
                  style={{ height: 'auto' }}
                >
                  <p className="text-lg leading-relaxed mb-4">“{item.text}”</p>
                  <div className="mt-6">
                    {/* <img
                    //   src={item.image}
                      alt={item.author}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    /> */}
                    <h4 className={`font-semibold ${!isActive ? 'text-white' : 'text-[#D2C1B6]'}`}>
                      {item.author}
                    </h4>
                    <p className={`text-sm ${!isActive ? 'text-gray-400' : 'text-blue-100'}`}>
                      {item.role}
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6  rotate-45"></div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
    
          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6 text-center"></div>
        </div>
         <h1 className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[3rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[11rem] 
'>
  Our partners
</h1>
    <PartnerSection />
    </div>
  );
};

export default About;