import React, { useEffect, useRef, useState } from "react";
import "./DirectBookingFeatures.css";
import img3 from '../../assets/images/img3.jpg';
import Footer from "../../components/Footer";

const features = [
  {
    title: "Stunning homepages",
    desc: "Make a great first impression!",
    svg: (
//       <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#3399dd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="4" width="18" height="14" rx="2" />
//         <path d="M3 8h18" />
//       </svg>
      <center><svg xmlns="http://www.w3.org/2000/svg"  width="64" height="64" fill="none" stroke="#1c75bc" viewBox="0 0 24 24" stroke-width="0.7"  class="size-20" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg></center>

    ),
  },
  {
    title: "Favorites",
    desc: "It’s easy for travelers to save and share properties they love.",
    svg: (
    <center> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></center>

    ),
  },
  {
    title: "Map view",
    desc: "Traveler-centric search experience.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg></center>

    ),
  },
  {
    title: "Enhanced sharing",
    desc: "Allow your visitors to share gorgeous emails...",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg></center>

    ),
  },
  {
    title: "Blog, activities, and events pages",
    desc: "Supercharge your content marketing to boost SEO.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg></center>

    ),
  },
  {
    title: "Booking Abandonment Capture",
    desc: "Don’t lose a potential booking guest...",
    svg: (
     <center> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg></center>

    ),
  },
  {
    title: "Fast, secure, and responsive",
    desc: "Fully PCI & GDPR compliant and looks great on every device.",
    svg: (
     <center><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="#1c75bc" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg></center>

    ),
  },
  {
    title: "Easy to update / add pages",
    desc: "No coding required with our intuitive content platforms.",
    svg: (
      <center><svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#1c75bc" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
        <rect x="2" y="2" width="20" height="20" rx="2" />
      </svg></center>
    ),
  },
];

const DirectBookingwebsites = () => {
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
      {/* <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
        style={{
          backgroundImage: `url(${img3})`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-0"></div>

        <div className="relative z-10 max-w-3xl">
          <h3 className="text-xl font-semibold mb-2">Rezfusion Web</h3>
          <h1 className="text-[34px] font-light leading-tight mb-6">
            Industry-leading, direct-booking <br /> powerhouse websites
          </h1>
          <a
            href="#"
            className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            Chat with our team
          </a>
        </div>
      </section> */}

      {/* <h1 className="text-center pt-10 text-[28px] text-[#53b6e7] font-[600]">
        Drive more direct bookings with our software-integrated website platforms built <br /> specifically for vacation rental professionals.
      </h1> */}

      {/* Section 1 */}
      {/* <section className="bg-white py-16 px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[24px] font-semibold text-[#f09b2d]">
              SHOWCASE YOUR PROPERTIES
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
              Optimize your data easily and beautifully, highlighting details that engage travelers.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2022/09/Exclusive-Bluetent-Custom-Websites-for-Vacation-Rental-Companies.jpg"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}

      {/* Section 2 */}
      {/* <section className="bg-white py-1 px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2019/05/Take-control-of-your-property-data-e1657124929894.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[24px] font-semibold text-[#f09b2d]">
              INSPIRE TRUST
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
              We’re mobile-friendly, responsive, and fully PCI compliant. Our exceptionally secure platforms create more than 370 million in bookings for professionals each year.
            </p>
          </div>
        </div>
      </section> */}

      {/* Section 3 */}
      {/* <section className="bg-white py-16 px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[24px] font-semibold text-[#f09b2d]">
              ENGAGE YOUR GUESTS
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
              Optimize your website to connect with travelers through compelling design and seamless booking.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2019/05/Attract-travelers-e1657124973694.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}

     <section ref={sectionRef} className="features-section py-16 px-4 text-center">
      <h2 className="text-[28px] md:text-4xl font-[400]  text-[#53b6e7] mb-12">
        High-performance direct booking website features
      </h2>
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
     {/* <section className="bg-[#53b6e7] text-white py-19 px-4 mx-60">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Three levels of Rezfusion web:
        </h2>
        <p className="text-lg md:text-xl mb-12 font-normal">
          Bluetent offers website solutions to address the needs of any vacation rental brand, regardless of size.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          <div>
            <h3 className="text-[24px] font-bold mb-2 leading-[1.5]">CLOUD</h3>
            <p className="text-[18px] font-[400]">Feature-packed,<br />quick-launch solution</p>
          </div>
          <div>
            <h3 className="text-[24px] font-bold mb-2 leading-[1.5]">PRO</h3>
            <p className="text-[18px] font-[400]">Next-level,<br />fully branded solution</p>
          </div>
          <div>
            <h3 className="text-[24px] font-bold mb-2 leading-[1.5]">CUSTOM</h3>
            <p className="ttext-[18px] font-[400]">Tailor-made,<br />uniquely configured solution</p>
          </div>
        </div>

        <h4 className="text-[34px] font-light mb-2 leading-[1.5]">
          which option fits YOUR brand?
        </h4>

        <button className="border-4 border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-sky-500 transition duration-300">
          Schedule a demo
        </button>
      </div>
    </section> */}
    {/* <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-[300] mb-10">
        Our software partners:
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        <img src="https://www.bluetent.com/wp-content/uploads/2020/06/streamline2020-2048x339.png" alt="LiveRez" className="mx-auto h-12 md:h-16 object-contain" />
        <img src="https://www.bluetent.com/wp-content/uploads/2020/06/RNS.png" alt="YesBookit" className="mx-auto h-12 md:h-12 object-contain" />
        <img src="https://www.bluetent.com/wp-content/uploads/2020/06/YBI-Transparent.png" alt="Escapia" className="mx-auto h-12 md:h-16 object-contain" />
        <img src="https://www.bluetent.com/wp-content/uploads/2020/06/YBI-Transparent.png" alt="Track" className="mx-auto h-12 md:h-16 object-contain" />
        <img src="https://www.bluetent.com/wp-content/uploads/2019/11/Escapia_Logo_Full_Color_on_Light.png" alt="Barefoot" className="mx-auto h-12 md:h-16 object-contain" />
        <img src="https://www.bluetent.com/wp-content/uploads/2020/06/track-e1593212345782.png" alt="RNS" className="mx-auto h-12 md:h-16 object-contain" />
      </div>
    </section> */}
    
    </>
  );
};

export default DirectBookingwebsites;
