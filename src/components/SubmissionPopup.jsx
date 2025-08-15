import React, { useEffect } from 'react';

const SubmissionPopup = ({ isOpen, onClose, onReload }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose(); 
        window.location.href = '/'; 
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-sm w-full">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center justify-center">
          <span className="mr-2">🎉</span> Thank You!
        </h3>
        <p className="text-gray-700 mb-6">Your submission was successful. We'll be in touch soon!</p>
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
        </div>
        <button
          onClick={() => (window.location.href = '/')} // Button click par bhi home page par redirect karein
          className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmissionPopup;