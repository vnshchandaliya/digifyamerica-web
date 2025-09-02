import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import headervideo from "../../assets/video/HeaderVideo.mp4";
import herovideo from "../../assets/video/HeaderVideo.webm";
import webdevimg from "../../assets/service-vector/webDev.png"
import Seoimg from "../../assets/service-vector/seo.png"
import graphicimg from "../../assets/service-vector/graphic.png"
import smmimg from "../../assets/service-vector/socialMedia.png"
import bradingimg from "../../assets/service-vector/brading.png"
import videoimg from "../../assets/service-vector/Video files-rafiki.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ServiceCard from "../../components/ServiceCard";
import founderImage from "../../assets/images/img9.jpg"; 
import DirectbookingIcons from '../../components/DirectbookingIcons';
import projectOne from '../../assets/project-img/project1.jpg'
import projectTwo from '../../assets/project-img/project2.jpg'
import projectThree from '../../assets/project-img/project3.jpg'
import projectFour from '../../assets/project-img/project4.jpg'
import projectFive from '../../assets/project-img/project5.jpg'
import projectsix from '../../assets/project-img/project6.jpg'
import projectsevan from '../../assets/project-img/project7.jpg'



const services = [
 {
    image: webdevimg,
    title: 'Web Development',
    description: "Don't keep your website as a digital business card but your hardest-working employee."
  },
  {
    image: Seoimg,
    title: 'Search Engine Optimization (SEO)',
    description: "Boost website visibility, drive organic traffic, and rank higher on search engine results pages."
  },
  {
    image: graphicimg,
    title: 'Graphic & Logo Design',
    description: "Your visual identity speaks before you do. Our design team creates:"
  },
   {
    image: smmimg,
    title: 'Social Media Marketing ',
    description: "Social Media Marketing boosts brand visibility, engagement, and sales through targeted strategies."
  },
   {
    image: bradingimg,
    title: 'Branding',
    description: "Empowering brands with bold strategies, digital innovation, and creative storytelling that drives lasting impactYour visual identity speaks before you do. Our design team creates:"
  },
   {
    image: videoimg,
    title: 'Video production',
    description: "Video production brings stories to life through creative filming, editing, and impactful visual storytelling techniques."
  },
  // Add more services here
];

const projects = [
  {
    id: 1,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://www.coastaldreamrentals.com/',
    image: projectOne
  },
  {
    id: 2,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://newvilla1.mydesign.blog/',
    image: projectTwo
  },
  {
    id: 3,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://newvilla2.mydesign.blog/',
    image: projectThree
  },
  {
    id: 4,
    title: 'Property Peoject',
    description: 'website',
    link: 'https://newvilla3.mydesign.blog/',
    image: projectFour
  },
  {
    id: 5,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://mysawgrasspointe.com/',
    image: projectFive
  },
  {
    id: 6,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://template1.mycreativewebsite.com/',
    image: projectsix
  },
  {
    id: 7,
    title: 'Property Peoject',
    description: 'Website',
    link: 'https://template2.mycreativewebsite.com/',
    image: projectsevan
  },
  // Add more projects here
];
const projectsPerPage = 2;

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
 <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/images/hero-thumbnail.jpg"
  className="absolute top-28 left-0 w-full h-full object-cover"
>
  <source  loading="lazy" src={headervideo} type="video/mp4" />
  <source  loading="lazy" src={herovideo} type="video/webm" />
</video>


  {/* Overlay (optional) */}
  <div className="absolute top-0 bg-[#00000092] left-0 w-full h-full  bg-opacity-40"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 pt-50 text-center text-white">
    <h1  className="text-3xl pt-4 sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight max-w-4xl">
      Fueling Digital Growth with <br className="hidden sm:block" />
      Bold Ideas & Smart Data
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl">
      DigifyAmerica isn’t just another digital marketing agency—we’re your growth partner in a hyperconnected world.
    </p>
    {/* <button className="mt-40 px-6  py-2 border border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
      Watch & Learn
    </button> */}
  </div>
</section>

    <section className="bg-[#1174c3] py-0 text-white text-center px-4">
      {/* Text Content */}
      <div className="max-w-3x2 mx-auto mb-12 py-20">
        <h2 className="text-[28px] font-semibold sm:text-3xl md:text-4xl  mb-4">
          Everything your business needs, all under one roof. <br />
          {/* <span className=" font-sans font-semibold sm:text-3xl md:text-4xl">(or inside one tent)</span> */}
        </h2>
        <p className="text-2xl sm:text-[25px] font-[400] mb-6 opacity-[0.8]">
          Reaching travelers at every stage of their journey takes more than<br/> an
          awesome website, it takes a complete digital ecosystem.
        </p>
        <Link to="/connect-with-us/" className="border border-white text-white px-7 py-4 text-sm uppercase font-medium hover:bg-white hover:text-[#1174c3] transition">
          Connect with our experts
        </Link>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        {/* <img
          src={ssimg}
          alt="Device showcase"
          className="w-[1941]  h-[797] max-w-10xl px-4"
        /> */}
      </div>
    </section>
    <section className="bg-white px-4 md:px-8 pt-20">
          <div className="container mx-auto max-w-7xl pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <p className='text-[18px]'>Why Choose Us</p>
                <h1 className="text-4xl md:text-5xl font-[300] text-gray-900 leading-tight mb-6">
                Beyond regular marketing plan

                </h1>
                <p className='font-[400]'>Customization at Our Core</p>
                <p className="text-lg text-gray-700 mb-8">
                 Every business has its own needs so why should the digital strategy be same? We reject the one-size-fits-all approach that plagues our industry. Instead:   </p>
                 <ul>
                  <li className=''> <strong className='font-[500]'>We start from scratch:</strong> Every strategy begins with a blank canvas, not a template </li> 
                  <li className=''><strong className='font-[500]'>We immerse ourselves:</strong> Understanding your business becomes our obsession</li>
                  <li className=''><strong className='font-[500]'>We build for your audience:</strong> Solutions designed specifically for the people you need to reach</li>
                  <li className=''><strong className='font-[500]'>We align with your goals:</strong> KPIs that match your actual business objectives, not vanity metrics
We design solutions for your specific challenges and opportunities and not the recycled strategies from previous clients.</li>
                 </ul>
               
              </div>
              
              
              <div className="order-1 lg:order-2 relative w-full lg:w-auto">
                <img
                  src={founderImage}
                  alt="Founder Roger Brown"
                  loading="lazy"
                  className="w-[70vh] h-auto rounded-lg  object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <DirectbookingIcons />
     <h1 className="text-center pt-20 text-[40px] text-[#000] font-[300] mx-59">
        Our Services
        </h1>
   <section className="py-12 px-4 ">
      <div className="container mx-auto">
        {/*
          This is the line you need to change.
          'grid-cols-1' for mobile, and 'md:grid-cols-2' for medium and larger screens.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
      {/* <h1 className="text-center pt-20 text-[40px] text-[#000] font-[300] mx-59">
        Our Services
        </h1> */}
     {/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={webdevimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

        
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Web Development
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
            Don’t keep your website as a digital business card but your hardest-working employee.
          </p>
        </div>
      </div>
    </section> */}

     {/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Search Engine Optimization (SEO)
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Boost website visibility, drive organic traffic, and rank higher on search engine results
           pages.
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={Seoimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section> */}

     {/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={graphicimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

        
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Graphic & Logo Design
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Your visual identity speaks before you do. Our design team creates:
          </p>
        </div>
      </div>
    </section> */}

     {/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Social Media Marketing
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Social Media Marketing boosts brand visibility, engagement, and sales through targeted
             strategies.
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={smmimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section> */}
{/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={bradingimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Branding
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
          Empowering brands with bold strategies, digital innovation, and creative storytelling that
                            drives lasting impact
          </p>
        </div>
      </div>
    </section> */}
     {/* <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Video Production
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
          Video production brings stories to life through creative filming, editing, and impactful
                            visual storytelling techniques.  
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={videoimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section> */}
    <section className="py-12 ">
      <div className="container mx-auto px-4 relative overflow-hidden">
        <h2 className="text-center mb-10 text-[34px] text-[#000] font-[300] mx-59">My Projects</h2>
        
        {/* Carousel Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * (100 / projectsPerPage)}%)` }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#000000ae] bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-center">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-center">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#1c75bc] hover:bg-[#1c74bcfe] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 p-4 ">
          <button
            onClick={prevSlide}
            className="p-5 bg-white rounded-full shadow-md z-10 hover:bg-gray-200"
          >
          <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 bg-white rounded-full shadow-md z-10 hover:bg-gray-200"
          >
           <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
