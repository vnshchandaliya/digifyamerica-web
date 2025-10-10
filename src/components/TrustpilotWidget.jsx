import React, { useEffect } from "react";
import trustLogo from "../assets/logo/trustpilot_icon.png";

const TrustpilotWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://www.trustpilot.com/review/digifyamerica.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
    >
      
      <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl shadow-md p-2 sm:p-1 text-center w-[85%] sm:w-[60%] md:w-[40%] lg:w-[14%] mx-auto border border-gray-200 cursor-pointer flex flex-col items-center justify-center">
        {/* 🔹 Trustpilot Logo */}
        <p className="text-black ml-2">Leave us a review</p>
        <div className="flex justify-center items-center">
          <img
            src={trustLogo}
            alt="Trustpilot Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-34 object-contain"
          />
        </div>

        {/* 🔹 Embedded Trustpilot Widget */}
        <div
          className="trustpilot-widget w-full mt-1"
          data-locale="en-US"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="5e84c52dcab47a0001d27d19"
          data-style-height="22px"
          data-style-width="100%"
          data-theme="light"
        ></div>
      </div>
    </a>
  );
};

export default TrustpilotWidget;
