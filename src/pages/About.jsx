import React from 'react';
import { Eye, Target } from 'lucide-react';
import founderImage from "../assets/Owner/Image.jpeg"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';

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
    text: "The team at DigifyAmerica is fantastic! They took over our social media channels, and the content they create is always on point. Our engagement has never been higher, and our brand feels so much more connected to our customers. If you need top-notch social media management, look no further.",
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
    text: " From the very first call, the DigifyAmerica team was a pleasure to work with. They took the time to understand our business and didn't just sell us a one-size-fits-all plan. They are proactive, constantly bringing new ideas to the table, and they communicate with us every step of the way. It's refreshing to work with a company that truly cares.",
    author: "Jessica L., Miami, FL",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
  {
    text: "DigifyAmerica helped us build a powerful email marketing strategy from the ground up. Their creative campaigns have boosted our lead generation and nurtured our existing customer base. They are experts at what they do, and the results speak for themselves. Our sales pipeline is healthier than ever!",
    author: "Brian S., Seattle, WA",
//     role: "Harborview Realty",
//     image: "/images/person3.jpg",
  },
];
const About = () => {
          const [activeIndex, setActiveIndex] = useState(0);
  return (
          <>
        
 <section className="bg-white px-4 md:px-8 pt-20">
      <div className="container mx-auto max-w-7xl pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* मेन कंटेंट एरिया */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-[600] text-gray-900 leading-tight mb-6">
              Meet Our Founder
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Roger rides his bike the way others do yoga — as a form of meditation. When the wind rushes past him and the world gets loud, that’s exactly when he finds his peace.
              He is a magician when it comes to using motion, speed, and the lens to slow everything down. Riding, camping and photography are more than hobbies for him.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              It is how he processes the world and sees beauty in the chaos. He's got the heart of an adventurer and the soul of a saint — grounded, thoughtful, and always seeking. He is also a proud dog dad to two adorable pups who are basically his shadows. They bring out the softer side of a guy who already has a golden heart.
            </p>
            <a
              href="https://www.linkedin.com/in/roger-brown-48390b14/"
              className="inline-block bg-[#1c75bc] text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-[#1c74bcce] transition duration-300"
            >
              Explore More
            </a>
            
            {/* Vision and Mission Icons */}
           
          </div>
          
          {/* इमेज और ओवरलैपिंग कोटेशन बॉक्स */}
          <div className="order-1 lg:order-2 relative w-full lg:w-auto">
            <img
              src={founderImage}
              alt="Founder Roger Brown"
              className="w-[70vh] h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
       <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
              <Eye className="h-10 w-10 text-[#1c75bc]" />
            </div>
            <h3 className="text-3xl font-[300] text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center">To be the leading digital marketing agency, empowering businesses to achieve extraordinary growth in the digital world.


              </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
              {/* Mission Icon (Target) */}
            <Target className="h-10 w-10 text-[#1c75bc]" />
            </div>
            <h3 className="text-3xl font-[300] text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center">
Our mission is to craft innovative and data-driven digital strategies that connect your brand with the right audience.
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
                    {/* <img
                    //   src={item.image}
                      alt={item.author}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    /> */}
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
    </>
  );
};

export default About;