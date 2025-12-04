import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import headervideo from "../../assets/video/HeaderVideo - Made with Clipchamp.mp4";
import herovideo from "../../assets/video/HeaderVideo.webm";
import webdevimg from "../../assets/service-vector/webDev.png"
// import ssimg from "../../assets/service-vector/5666022-removebg-preview"
import Seoimg from "../../assets/service-vector/seo.png"
import graphicimg from "../../assets/service-vector/graphic.png"
import smmimg from "../../assets/service-vector/socialMedia.png"
import bradingimg from "../../assets/service-vector/brading.png"
import videoimg from "../../assets/service-vector/videoPro.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ServiceCard from "../../components/ServiceCard";
import founderImage from "../../assets/service-vector/hand-drawn-digital-natives-illustration.png";
import DirectbookingIcons from '../../components/DirectbookingIcons';
import projectOne from '../../assets/project-img/project1.jpg'
import projectTwo from '../../assets/project-img/project2.jpg'
import projectThree from '../../assets/project-img/project3.jpg'
import projectFour from '../../assets/project-img/project4.jpg'
import projectFive from '../../assets/project-img/project5.jpg'
import projectsix from '../../assets/project-img/project6.jpg'
import projectsevan from '../../assets/project-img/project7.jpg'
import Projects from '../Projects';
import { HashLink } from 'react-router-hash-link';
import { Title, Meta } from "react-head";


const services = [
  {
    image: webdevimg,
    title: 'Web Development',
    description: "Don't keep your website as a digital business card but your hardest-working employee.",
    link :"web-designing/"
  },
  {
    image: Seoimg,
    title: 'Search Engine Optimization (SEO)',
    description: "Boost website visibility, drive organic traffic, and rank higher on search engine results pages.",
    link :  "search-engine-optimization/"
  },
  {
    image: graphicimg,
    title: 'Graphic & Logo Design',
    description: "Your visual identity speaks before you do. Our design team creates:",
    link : "graphic-design/"
  },
   {
    image: bradingimg,
    title: 'Branding',
    description: "If you want them even more minimal, more professional, or more punchy, just tell me the vibe you want." ,
    link :"branding/"
  },
  {
    image: smmimg,
    title: 'Social Media Marketing ',
    description: "Social Media Marketing boosts brand visibility, engagement, and sales through targeted strategies.",
    link :"social-media-marketing/"
  },
 
  {
    image: videoimg,
    title: 'Video production',
    description: "Video production that brings your story to life with powerful visuals." ,
    link: "video-production/"
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
    <Title>Digify America - Home</Title>
      <Meta
        name="description"
        content="Digital marketing, branding, and web development services in the USA. Boost your business with Digify America."
      />
    <div className='bg-[#D2C1B6]'>

      <section className="relative w-full h-screen  overflow-hidden">
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
          <source loading="lazy" src={headervideo} type="video/mp4" />
          <source loading="lazy" src={herovideo} type="video/webm" />
        </video>


        {/* Overlay (optional) */}
        <div className="absolute top-0 bg-[#00000058]  backdrop-blur-[2px] left-0 w-full h-full  bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 pt-50 text-center text-[#FFF5E1]">
          <h1 className="text-3xl pt-4 fontplayfair sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight max-w-4xl">
            Fueling <strong className='text-[#456882]'>Digital Growth</strong> with <br className="hidden sm:block" />
            <strong className='text-[#456882]'>Bold Ideas</strong>  & Smart Data
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl text-[#] ">
            DigifyAmerica isn’t just another digital marketing agency—we’re your growth partner in a hyperconnected world.
          </p>
          {/* <button className="mt-40 px-6  py-2 border border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
      Watch & Learn
    </button> */}
        </div>
      </section>

      <section className="bg-[#D2C1B6] py-0 text-[#1B3C53] text-center px-4 ">
        {/* Text Content */}
        <div className="max-w-3x2  mb-12 py-20">
          <h2 className="text-[28px]  font-semibold sm:text-3xl md:text-5xl  mb-4 fontplayfair">
            Everything your business needs, all under one roof. <br />
            {/* <span className=" font-sans font-semibold sm:text-3xl md:text-4xl">(or inside one tent)</span> */}
          </h2>
          <p className="text-2xl sm:text-[25px] font-[400] mb-6 opacity-[0.8]">
            Reaching travelers at every stage of their journey takes more than<br /> an
            awesome website, it takes a complete digital ecosystem.
          </p>
          <HashLink
            to="/connect-with-us/#contact-form"
            className="bg-[#234C6A] text-white px-5 py-2 rounded-lg font-bold text-lg 
             shadow-[0_4px_0px_#456882] 
             transform transition-all duration-200 
             hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#1B3C53] 
             active:translate-y-[2px] active:shadow-none"
          >
            Connect with our experts
          </HashLink>
        </div>

        {/* Image */}
        {/* <div className="flex justify-center">
        <img
          src={ssimg}
          alt="Device showcase"
          className="w-[141]  h-[797] max-w-2xl "
        />
      </div> */}
      </section>
      <p className='
  absolute 
  text-gray-50
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.60rem] 
  fontplayfair 
 mt-40
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[10rem] 
'>
        Why Choose Us
      </p>
      <section className="bg-[#D2C1B6] px-4 md:px-8 pt-50">
        <div className="container mx-auto max-w-7xl pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


            <div className="order-2 lg:order-1 text-center lg:text-left text-[#234C6A]">
              <h3 className="text-[28px]  font-semibold sm:text-3xl md:text-5xl  mb-4 fontplayfair">Why Choose Us : Beyond regular marketing plan</h3>
              {/* <h1 className="text-4xl md:text-5xl font-[300] text-gray-900 leading-tight mb-6">
              
                </h1> */}
              <p>In a world where everyone claims to be <o className='text-[#1B3C53] font-bold'>"innovative"</o>  and <o className=" font-bold text-[#1B3C53]">"cutting-edge,"</o> what truly sets Digify America apart? It's not just what we do but how we do it. </p>
              <br />
              <p className='font-bold Poppins-font'>Customization at Our Core</p>
              <p className=" ">
                Every business has its own needs so why should the digital strategy be same? We reject the one-size-fits-all approach that plagues our industry. Instead:   </p>
              <ul className='list-disc ml-10'>
                <li className=''> <strong className='font-[500] Poppins-font'>We start from scratch:</strong> Every strategy begins with a blank canvas, not a template </li>
                <li className=''><strong className='font-[500] Poppins-font'>We immerse ourselves:</strong> Understanding your business becomes our obsession</li>
                <li className=''><strong className='font-[500] Poppins-font'>We build for your audience:</strong> Solutions designed specifically for the people you need to reach</li>
                <li className=''><strong className='font-[500] Poppins-font'>We align with your goals:</strong> KPIs that match your actual business objectives, not vanity metrics
                  We design solutions for your specific challenges and opportunities and not the recycled strategies from previous clients.</li>
              </ul>

            </div>


            <div className="order-1 lg:order-2 relative w-full lg:w-auto">
              <img
                src={founderImage}
                alt=""
                loading="lazy"
                className="w-[100vh] h-auto rounded-lg  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <p className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[2.40rem] 
  fontplayfair 
 mt-21
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[8rem] 
'>
        Website Features
      </p>
      <DirectbookingIcons />
      <p className='
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
       Services
      </p>

      <section className="py-12 px-4 pt-49">
        <h5 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#1B3C53]">
          Our Services
        </h5>
        <br />
        <div className="container mx-auto">
          {/*
          This is the line you need to change.
          'grid-cols-1' for mobile, and 'md:grid-cols-2' for medium and larger screens.
        */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index ) => (
              <Link to ={service.link}>
              <ServiceCard
                key={index}

                image={service.image}
                title={service.title}
                description={service.description}
              />
               </Link>
            ))}
          </div>
        </div>
      </section>
      <p className='
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
        Projects
      </p>
      <Projects />

    </div>
    </>
  );
}

export default Home;
