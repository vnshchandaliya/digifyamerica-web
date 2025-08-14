// src/components/ServiceCard.jsx

import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md   mx-10">
          
      <div className="flex justify-center transition-transform transform hover:scale-120 mb-4">
        <img src={image} alt={title} className="w-54 h-54 object-contain" />
      </div>
      <h3 className="text-xl font-[400] text-center mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;