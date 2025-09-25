// src/components/NavigationButtons.jsx
import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const NavigationButtons = ({ onNext, onPrev, showPrev }) => {
  return (
    <div className="next-step flex justify-center gap-5 mt-10">
      {showPrev && (
        <button
          onClick={onPrev}
          className="bg-[#FAA533] flex Poppins-font text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer"
        >
          <FaArrowLeftLong className='mt-1' /> &nbsp; PREVIOUS
        </button>
      )}
      <button
        onClick={onNext}
        className="bg-[#FAA533] flex Poppins-font text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer uppercase"
      >
         <FaCheck className='mt-1' /> &nbsp; next step
      </button>
    </div>
  );
};

export default NavigationButtons;