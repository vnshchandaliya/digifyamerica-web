import React from 'react'; import { Title, Meta } from "react-head";


const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group relative bg-[#234C6A] p-6 rounded-lg shadow-md mx-10 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Animated Color & Shadow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" style={{ backgroundColor: '#FFF5E1' }}></div>

      {/* Card Content Wrapper */}
      
      <div className="relative z-10 flex flex-col items-center Poppins-font ">
        <div className="flex justify-center transition-all duration-300 ease-in-out transform group-hover:scale-110 mb-2">
          <img loading="lazy" src={image} alt={title} className="w-74 h-74 object-contain" />
        </div>
        <h3 className="text-2xl font-[600] text-center mb-2 text-[#D2C1B6] group-hover:text-black">
          {title}
        </h3>
        <p className="text-white text-center text-[18px] group-hover:text-black">
          {description}
        </p>
      </div>
    
    </div>
  );
};

export default ServiceCard;