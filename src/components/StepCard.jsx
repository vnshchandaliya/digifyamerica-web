// src/components/StepCard.jsx
import React from 'react';

const StepCard = ({ img, title, desc, price, onClick, isActive, isMulti }) => {
  const handleClick = () => {
    onClick(price);
  };

  return (
    <div
      className={`card w-full sm:w-80 border-2 border-transparent text-center p-6 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFF5E1] transform scale-105' : 'bg-transparent'}`}
      onClick={handleClick}
    >
      <img src={img} alt={title} className="h-20 mx-auto mb-5" />
      <div className="card-title text-xl font-bold mb-3">{title}</div>
      {desc && <div className="card-desc text-gray-600 text-sm">{desc}</div>}
    </div>
  );
};

export default StepCard;