// src/components/NavigationButtons.jsx
import React from 'react';import { Helmet } from "react-helmet-async"; 
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const NavigationButtons = ({ onNext, onPrev, showPrev }) => {
  return (
    <div className="next-step flex justify-center gap-5 mt-10">
      {showPrev && (
        <button
          onClick={onPrev}
          className="bg-[#234C6A] flex Poppins-font text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer"
        >
          <FaArrowLeftLong className='mt-1' /> &nbsp; Previous
        </button>
      )}
      <button
        onClick={onNext}
        className="bg-[#234C6A] flex Poppins-font text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer"
      >
         <FaCheck className='mt-1' /> &nbsp; Next Step
      </button>
    </div>
  );
};

export default NavigationButtons;