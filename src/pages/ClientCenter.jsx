// src/components/ClientCenter.jsx
import React from "react";
import { FaHeartbeat, FaHandshake, FaLightbulb } from "react-icons/fa";

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
          
    <section className="py-12 px-4 text-center bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-light mb-12">
        Welcome to the DigifyAmerica Client Center
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-lg transition">
          <FaHeartbeat className="text-blue-500 text-5xl mb-4" />
          <h3 className="font-bold text-lg mb-2">SUPPORT</h3>
          <p className="text-gray-600 text-sm">
            Looking for help with your channel management or direct booking website?
          </p>
        </div>

        {/* Card 2 - highlighted */}
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Billing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-700 bg-opacity-70"></div>
          <FaHandshake className="text-white text-5xl mb-4 relative z-10" />
          <h3 className="font-bold text-lg mb-2 text-white relative z-10">BILLING</h3>
          <p className="text-white text-sm relative z-10">
            Have a question about an invoice or want to make a payment online?
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-sm hover:shadow-lg transition">
          <FaLightbulb className="text-blue-500 text-5xl mb-4" />
          <h3 className="font-bold text-lg mb-2">KNOWLEDGE BASE</h3>
          <p className="text-gray-600 text-sm">
            Dive into our Insider Knowledge Base for helpful tips from our team of experts!
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-700 italic text-sm md:text-base">
        If you need to submit a support request, please go to{" "}
        <a href="" className="text-orange-500 font-medium">support.www.digifymerica.com</a>.
      </p>
    </section>
    </>
  );
};

export default ClientCenter;
