import React from 'react';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Pagination module is removed

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// 'swiper/css/pagination' is removed

const projects = [
  {
    title: 'Property Project',
    link: 'https://www.coastaldreamrentals.com/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project1.jpg',
    alt: 'Coastal Dream Rentals Website',
  },
  {
    title: 'Property Project',
    link: 'https://newvilla1.mydesign.blog/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project2.jpg',
    alt: 'New Villa 1 Website',
  },
  {
    title: 'Property Project',
    link: 'https://newvilla3.mydesign.blog/',
    tag: 'Villa Rental Landing page',
    image: 'src/assets/project-img/project4.jpg',
    alt: 'New Villa 3 Website',
  },
  {
    title: 'Property Project',
    link: 'https://mysawgrasspointe.com/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project5.jpg',
    alt: 'My Sawgrass Pointe Website',
  },
  {
    title: 'Property Project',
    link: 'https://template1.mycreativewebsite.com/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project6.jpg',
    alt: 'My Sawgrass Pointe Website',
  },
  {
    title: 'Property Project',
    link: 'https://template2.mycreativewebsite.com/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project7.jpg',
    alt: 'My Sawgrass Pointe Website',
  },
  {
    title: 'Property Project',
    link: 'https://newvilla2.mydesign.blog/',
    tag: 'Villa Rental Website',
    image: 'src/assets/project-img/project3.jpg',
    alt: 'My Sawgrass Pointe Website',
  },
];

const Projects = () => {
  return (
    <div id="case" className="py-20 text-white bg-[#ad9a9a35]">
      <div className="container mx-auto px-4 mt-4">
            <h2 className=" relative text-center pt-20 text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533] whitespace-nowrap">My Projects</h2>
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
                  className="project-card bg-[#FFF5E1] p-6 rounded-2xl border border-white transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg- hover:shadow-xl"
                >
                  <div className="text-3xl font-bold mb-2 text-black">{project.title}</div>
                  <div className="text-lg text-black mb-2">{project.tag}</div>
                  <p className="text-[#ff9408] text-[20px] mb-4 truncate">{project.link}</p>
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