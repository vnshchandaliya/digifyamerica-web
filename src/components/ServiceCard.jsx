import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group relative bg-white p-6 rounded-lg shadow-md mx-10 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Animated Color & Shadow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" style={{ backgroundColor: '#FFF5E1' }}></div>

      {/* Card Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center Poppins-font text-[#EF7722]">
        <div className="flex justify-center transition-all duration-300 ease-in-out transform group-hover:scale-110 mb-4">
          <img loading="lazy" src={image} alt={title} className="w-54 h-54 object-contain" />
        </div>
        <h3 className="text-3xl font-[600] text-center mb-2">
          {title}
        </h3>
        <p className="text-black text-center text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;