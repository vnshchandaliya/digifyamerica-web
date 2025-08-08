import React, { useEffect, useRef, useState } from "react";
import "./DirectBookingFeatures.css";

const features = [
  {
    title: "Website content",
    desc: "Create a property management page that appeals to current and potential owners.",
    svg: (
//       <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#3399dd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="4" width="18" height="14" rx="2" />
//         <path d="M3 8h18" />
//       </svg>
      <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-25">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg>
</center>

    ),
  },
  {
    title: "Print marketing",
    desc: "With postcards, brochures, and ads, you can create direct mail campaigns that resonate with potential owners.",
    svg: (
    <center> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-25">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
</svg>
</center>

    ),
  },
  {
    title: "Unique projects",
    desc: "Our team can help design any project from vehicle wraps to branded apparel and swag.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-25">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
</center>

    ),
  },
  {
    title: "Email campaigns",
    desc: "Let’s get creative! Design an email journey that educates and informs your homeowners.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-25">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
</center>

    ),
  },
 
 
];
const OwnerAcquisitionStrategy = () => {
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
       <section
                  className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
                  style={{
                    backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/EmailPageHeader.png")`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-0"></div>
          
                  <div className="relative z-10 max-w-5xl">
                    <h3 className="text-xl font-semibold mb-2">Owner Acquisition</h3>
                    <h1 className="text-[34px] font-light leading-tight mb-6">
                              Grow your vacation rental business
                      </h1>
                    <a
                      href="#"
                      className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
                    >
                   Chat with our team!
                    </a>
                  </div>
                </section>
                <h2 className='text-center mt-10 text-[34px] mx-60 font-[300]'>
                    Building rental inventory is the cornerstone for any vacation 
                    rental business. Now more than ever, your business depends on owner 
                    acquisition.</h2>

                  
       <section ref={sectionRef} className="features-section py-16 px-4 mt-15 text-center">
       <div className="mb-10 text-center max-w-4x4 mx-auto">
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Our team of email and digital marketing experts can help!
        </p>
        <p className="text-[34px] md:text-[34px] text-[#53b6e7] font-medium  mx-60">
          With campaigns ranging from brochures to comprehensive website landing pages, we’ll help you leverage your brand. 
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="feature">
            <div className="icon  text-[#1c75bc]">{item.svg}</div>
            <h3 className="text-[#53b6e7] font-semibold mt-4 text-[22px]">{item.title}</h3>
            <p className="text-gray-700 mt-2 text-[16px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <div className="container mx-auto px-4">
    <div className="flex  md:flex-col items-center justify-center gap-6 text-center md:text-left">
      <h2 className="text-xl sm:text-4xl md:text-4xl font-[300] text-[#444]">
        Interested in learning more?

      </h2>
      <a
        href="/Conect-with-us"
        className="bg-[#1c75bc] text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        CHAT WITH OUR TEAM
      </a>
    </div>
  </div>

    </>
  )
}

export default OwnerAcquisitionStrategy
