// src/components/NavigationButtons.jsx
import React from 'react';

const NavigationButtons = ({ onNext, onPrev, showPrev }) => {
  return (
    <div className="next-step flex justify-center gap-5 mt-10">
      {showPrev && (
        <button
          onClick={onPrev}
          className="bg-indigo-900 text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer"
        >
          ← PREVIOUS
        </button>
      )}
      <button
        onClick={onNext}
        className="bg-indigo-900 text-white border-none py-3 px-8 text-base rounded-lg cursor-pointer"
      >
        ✓ NEXT STEP
      </button>
    </div>
  );
};

export default NavigationButtons;