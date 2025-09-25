// src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps, totalPrice }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  const clampedProgress = Math.max(9, progressPercentage);

  return (
    <div className="sticky-wrapper sticky top-31 z-20 p-2 sm:p-4">
      <div className="progress-bar-pricing bg-gray-200 h-8 rounded-full relative mb-10">
        <div
          className="progress-fill-pricing  bg-[#FAA533] h-full rounded-full relative transition-all duration-1000 ease-in-out"
          style={{ width: `${clampedProgress}%` }}
        >
          <div className="price-circle absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24 bg-[#FAA533] rounded-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-400 ease-in-out Poppins-font sm:w-16 sm:h-16 sm:text-base">
            ${totalPrice.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;