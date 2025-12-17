import React from 'react';import { Helmet } from "react-helmet-async"; 
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Pagination module is removed

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// 'swiper/css/pagination' is removed
import CoastalDream from '../assets/project-img/project1.jpg'
import NewVillaOne from '../assets/project-img/project2.jpg'
import NewVillaThree from '../assets/project-img/project4.jpg'
import SawgrassPointe from '../assets/project-img/project5.jpg'
import templateOne from '../assets/project-img/project6.jpg'
import templateTwo from '../assets/project-img/project7.jpg'
import newvillaTwo from '../assets/project-img/project3.jpg'
import newvilla from '../assets/project-img/project8.png'



const projects = [
  {
    title: 'Coastal Dream Rentals',
    link: 'https://www.coastaldreamrentals.com/',
    // tag: 'Villa Rental Website',
    image: CoastalDream,
    alt: 'Coastal Dream Rentals Website',
  },
  {
    image:NewVillaOne,
    title: 'Seaview Sanctuary',
    link: 'https://newvilla1.mydesign.blog/',
    // tag: 'Single Villa Website',
    alt: 'New Villa 1 Website',
  },
  {
    image: NewVillaThree,
    title: 'Lakeside Eco cabins',
    link: 'https://newvilla3.mydesign.blog/',
    // tag: 'Single Villa Website',
    alt: 'New Villa 3 Website',
  },
  {
    image: SawgrassPointe,
    title: 'My Sawgrass Pointe',
    link: 'https://mysawgrasspointe.com/',
    // tag: 'Single Villa Website',
    alt: 'My Sawgrass Pointe Website',
  },
  {
    image: templateOne,
    title: 'Villa One',
    link: 'https://template1.mycreativewebsite.com/',
    // tag: 'Villa Rental Website',
    alt: 'template1 Website',
  },
  {
    image: templateTwo,
    title: 'Vacation Dreams',
    link: 'https://template2.mycreativewebsite.com/',
    // tag: 'Villa Rental Website',
    alt: 'My Sawgrass Pointe Website',
  },
  {
    image: newvillaTwo,
    title: 'Modern Riverside Lodge',
    link: 'https://newvilla2.mydesign.blog/',
    // tag: 'Single Villa Website',
    alt: 'My Sawgrass Pointe Website',
  },
   {
    image: newvilla,
    title: 'Beach Property',
    link: 'https://newvilla2.mydesign.blog/',
    // tag: 'Single Villa Website',
    alt: 'Beach Property',
  },
];

const Projects = () => {
  return (
    <div id="case" className="py-20 text-white ">
      <div className="container mx-auto px-4 mt-5">
            <h6 className=" relative text-center pt-29 text-[60px] font-[300] mx-1 fontplayfair text-[#1B3C53] whitespace-nowrap">My Projects</h6>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16">
          
          {/* Title Section (unchanged) */}
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          // Pagination prop and module have been removed
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                    
                <div
                  className="project-card bg-[#234C6A] p-6 rounded-2xl border border-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg- hover:shadow-xl"
                >
                  <div className="text-3xl font-bold mb-2 text-white">{project.title}</div>
                  <div className="text-lg text-white mb-2">{project.tag}</div>
                  {/* <p className="text-[#D2C1B6] text-[20px] mb-4 truncate">{project.link}</p> */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-auto rounded-xl transition-transform duration-300 transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;