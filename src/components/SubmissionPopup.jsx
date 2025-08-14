import React, { useEffect } from 'react';

const SubmissionPopup = ({ isOpen, onClose, onReload }) => {
  useEffect(() => {
    // This effect runs only when the popup becomes visible
    if (isOpen) {
      // Set a timer to automatically close the popup and reload the page after 3 seconds
      const timer = setTimeout(() => {
        onClose();   // Close the popup
        onReload();  // Reload the page
      }, 3000); // 3000 milliseconds = 3 seconds

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, onReload]); // Dependencies for useEffect

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
        {/* You can remove the close button, or keep it as an option for the user */}
        <button
          onClick={onReload} // This button will also trigger a reload
          className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmissionPopup;