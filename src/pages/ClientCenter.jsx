import React from 'react'; import { Title, Meta } from "react-head";
import { FaHeartbeat, FaHandshake, FaLightbulb } from 'react-icons/fa';

// icons के लिए react-icons library को install करें:
// npm install react-icons

const ClientCenter = () => {
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
                    <h3 className="text-xl font-semibold mb-2">CLIENT CENTER</h3>
                    <h1 className="text-[34px] font-light leading-tight mb-6">How can we help?
                      </h1>
                    {/* <a
                      href="#"
                      className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
                    >
                     LEARN MORE
                    </a> */}
                  </div>
                </section>
    
    <section className="py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-light mb-12 text-gray-700">
        Welcome to the DigifyAmerica Client Center
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {/* Card 1 */}
         <div className="relative flex flex-col items-center justify-center p-6 py-10 px-10 pt-36 rounded-lg  overflow-hidden transition-all duration-300 group bg-white ">
          
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-105 group-hover:scale-100 "
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)', // यहाँ अपनी image URL डालें
            }}
          ></div>

          <div className="absolute inset-0 bg-[#1c74bcc3] bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

          {/* Card content */}
          <FaHeartbeat className="text-blue-500 group-hover:text-white text-[60px] mb-4 relative z-10 transition-colors duration-300" />
          <h3 className="font-[600] text-[24px] mb-2 text-[#444] group-hover:text-white relative z-10 transition-colors duration-300">
            SUPPORT</h3>
          <p className="text-gray-600 group-hover:text-white text-[18px] relative z-10 transition-colors duration-300">
            Looking for help with your channel management or direct booking website?
          </p>
        </div>

        {/* Card 2 */}
       
        <div className="relative flex flex-col items-center justify-center p-6 py-10 px-10 pt-36  rounded-lg  overflow-hidden transition-all duration-300 group bg-white">
          
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-105 group-hover:scale-100"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)', // यहाँ अपनी image URL डालें
            }}
          ></div>

        
          <div className="absolute inset-0 bg-[#1c74bcc3] bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

          {/* Card content */}
          <FaHandshake  className="text-blue-500 group-hover:text-white text-[60px] mb-4 relative z-10 transition-colors duration-300" />
          <h3 className="font-[600] text-[24px] mb-2 text-[#444] group-hover:text-white relative z-10 transition-colors duration-300">
               BILLING</h3>
          <p className="text-gray-600 group-hover:text-white text-[18px] relative z-10 transition-colors duration-300">
           Have a question about an invoice or want to make a payment online?
          </p>
        </div>

        {/* Card 3 */}
         <div className="relative flex flex-col items-center justify-center p-6 py-10 px-10 pt-35 rounded-lg  overflow-hidden transition-all duration-300 group bg-white">
          
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-105 group-hover:scale-100"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)', // यहाँ अपनी image URL डालें
            }}
          ></div>

        
           <div className="absolute inset-0 bg-[#1c74bcc3] bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

          {/* Card content */}
          <FaLightbulb  className="text-blue-500 group-hover:text-white text-[60px] mb-4 relative z-10 transition-colors duration-300" />
          <h3 className="font-[600] text-[24px] mb-2 text-[#444] group-hover:text-white relative z-10 transition-colors duration-300">
           KNOWLEDGE BASE</h3>
          <p className="text-gray-600 group-hover:text-white text-[18px] relative z-10 transition-colors duration-300">
          Dive into our Insider Knowledge Base for helpful tips from our team of experts!
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-black italic text-[34px] md:text-[25px]">
        If you need to submit a support request, please go to{" "}
        <a href="https://support.www.digifymerica.com" className="text-blue-500 font-medium hover:underline">
          support.www.digifymerica.com
        </a>.
      </p>
    </section>
    </>
  );
};

export default ClientCenter;
