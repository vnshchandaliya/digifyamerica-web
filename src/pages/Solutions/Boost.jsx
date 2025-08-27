import React, { useEffect, useRef, useState } from "react";
import "./DirectBookingFeatures.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./FlipSection.css"; // for perspective + flip animation


const cards = [
  {
    title: "DIY to Boost™",
    number: 18,
    suffix: "%",
    subtitle: "Increase in online booking revenue",
    image: "https://www.bluetent.com/wp-content/uploads/2019/05/GettyImages-636668316.jpg",
  },
  {
    title: "Other channel manager to Boost™",
    number: 11,
    suffix: "x",
    subtitle: "Increase in reservations in the first month",
    image: "https://www.bluetent.com/wp-content/uploads/2019/05/GettyImages-636668316.jpg",
  },
  {
    title: "New to Boost™",
    number: 50,
    suffix: "%",
    subtitle: "Increase in Airbnb revenue YOY",
    image: "https://www.bluetent.com/wp-content/uploads/2019/05/GettyImages-636668316.jpg",
  },
];
const features = [
  {
//     title: "Website content",
    desc: "Detailed, accurate, and fully branded listings that rank higher.",
    svg: (
//       <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#3399dd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="4" width="18" height="14" rx="2" />
//         <path d="M3 8h18" />
//       </svg>
      <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

</center>

    ),
  },
  {
//     title: "Print marketing",
    desc: "Custom pricing and availability settings based on booking window.",
    svg: (
    <center> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


</center>

    ),
  },
  {
//     title: "Unique projects",
    desc: "From implementation to success, we’re here to help.",
    svg: (
     <center>
           <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="0.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-14 h-14"
  >
    <path d="M3 12a9 9 0 0 1 18 0" />
    <rect x="2" y="13" width="4" height="8" rx="2" />
    <rect x="18" y="13" width="4" height="8" rx="2" />
  </svg>
</center>

    ),
  },
  {
//     title: "Email campaigns",
    desc: "Custom pricing and availability settings by date.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>

</center>

    ),
  },
  {
//     title: "Email campaigns",
    desc: "Easy tools to increase pricing.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

</center>

    ),
  },
 
 
];
const cardsTwo = [
  {
    id: 1,
    title: "1. COORDINATION",
    image: "https://www.bluetent.com/wp-content/uploads/2018/01/careersheader2.jpg",
    description:
      "We'll help coordinate content, branding, and integration with your existing tools.",
  },
  {
    id: 2,
    title: "2. IMPLEMENTATION",
    image: "https://www.bluetent.com/wp-content/uploads/2018/01/careersheader2.jpg",
    description:
      "Our team ensures a smooth and timely implementation of all direct booking features.",
  },
  {
    id: 3,
    title: "3. GO LIVE!",
    image: "https://www.bluetent.com/wp-content/uploads/2018/01/careersheader2.jpg",
    description:
      "Launch your upgraded site and start seeing real-time bookings and improved ROI.",
  },
];
const Boost = () => {
          const sectionRef = useRef();
                    
                      useEffect(() => {
                        const observer = new IntersectionObserver(
                          entries => {
                            entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                sectionRef.current.classList.add("animate-icons");
                                observer.disconnect();
                              }
                            });
                          },
                          { threshold: 0.2 }
                        );
                    
                        observer.observe(sectionRef.current);
                        return () => observer.disconnect();
                      }, []);
  return (
    <>
      {/* Header Section */}
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
        style={{
          backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/BoostPageHeader.png")`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-0"></div>

        <div className="relative z-10 max-w-5xl">
          <img
            className="w-200"
            src="https://www.bluetent.com/wp-content/uploads/2019/10/BoostTM_White_Rez.png"
            alt="Boost Logo"
          />
          <h1 className="text-[34px] font-light leading-tight mb-6">
            Better technology, more bookings
          </h1>
          <a
            href="#"
            className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            Chat with our team!
          </a>
        </div>
      </section>
       <section className="w-full px-4 py-0 pt-20">
      <div className="max-w-6xl  mx-auto">
        <img
          src="https://www.bluetent.com/wp-content/uploads/2021/06/channels_2021.png"
          alt="Marketing Visual"
          className="w-[1574] h-auto rounded-lg  object-cover"
        />
        <br /><br />
         <a
        href="/Conect-with-us"
        className="bg-[#1c75bc] mx-[68vh]  text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        CHAT WITH OUR TEAM
      </a>
      </div>
    </section>
   
    <div className="mx-auto border-t-1 border-solid border-[#676767] w-50 mt-23 "></div>
      {/* Cards Section */}
      <section className="py-16 bg-white">
                 <div className="mb-10 text-center max-w-4x4 mx-auto">
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Using another channel manager, manually listing, or brand new?
        </p>
        <p className="text-[28px] md:text-[28px] text-[#53b6e7] font-medium  mx-60">
Rezfusion Boost™ drives more bookings, but don’t take our word for it.
        </p>
      </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <div
                ref={ref}
                key={index}
                className="group rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Image Background */}
                <div
  className="h-[350px] bg-cover bg-center relative transition-transform duration-700 rounded-xl"
  style={{
    backgroundImage: `url(${card.image})`,
  }}
>
  {/* Overlay */}
<div className="absolute inset-0 bg-[#0000006f] group-hover:bg-transparent transition-all duration-500 z-0 rounded-xl"></div>     
  {/* Content */}
  <div className="relative z-10 flex flex-col justify-end h-full text-white p-6 transition-transform duration-500 group-hover:scale-105">
    <h3 className="text-xl font-bold transition-transform duration-300 group-hover:scale-110">
      {card.title}
    </h3>
    <p className="text-3xl font-bold text-sky-300 transition-transform duration-300 group-hover:scale-110">
      <CountUp end={card.number} duration={2} />{card.suffix}
    </p>
    <p className="text-sm opacity-90 transition-transform duration-300 group-hover:scale-110">
      {card.subtitle}
    </p>
  </div>
</div>

              </div>
            );
          })}
        </div>
      </section>
         <div className="mx-auto border-t-1 border-solid border-[#676767] w-50 mt-23 "></div>

          <section ref={sectionRef} className="features-section py-16 px-4 mt-15 text-center">
       <div className="mb-10 text-center max-w-4x4 mx-auto">
        <p className="
         mb-1">
          Exclusive, high-performance tools & a team to back you up.
        </p>
        <p className="text-[28px] md:text-[28px] text-[#53b6e7] font-[400]  mx-60">
          Acquire new guests and drive more revenue – and stay in control of your brand, pricing rules, and more.
          </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="feature">
            <div className="icon  text-[#1c75bc]">{item.svg}</div>
            <h3 className="text-[#53b6e7] font-semibold mt-4 text-[22px]">{item.title}</h3>
            <p className="text-gray-700 mt-2 text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
     <section className="py-16 bg-white">
          <h1 className="text-center font-[300] text-4xl text-[#444] pb-15">Getting Started is Easy</h1>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
       {cardsTwo.map((card) => (
  <div key={card.id} className="flip-card  group hover:scale-105 transition-transform duration-500">
    <div className="flip-card-inner">
      
      {/* Front */}
      <div
        className="flip-card-front bg-cover  bg-center flex items-center justify-center text-white text-xl font-bold"
        style={{ backgroundImage: `url(${card.image})` }}
      >
     <h2 className="text-white text-2xl font-bold drop-shadow-2xl">{card.title}</h2>
      </div>

      {/* Back with same image */}
      <div
        className="flip-card-back text-white p-6 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${card.image})` }}
      >
       <p className="text-lg  bg-opacity-50 p-3 rounded-md drop-shadow-6xl font-medium">
          {card.description}
        </p>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
    </>
  );
};

export default Boost;
