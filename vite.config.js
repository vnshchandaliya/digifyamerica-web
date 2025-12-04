import React from "react";

export default function Hero() {
  return (
    <section 
      className="w-full h-[90vh] relative bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6">
        
        {/* FORM CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Find Accessible <br /> Homes To Rent
          </h1>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for a location"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <select className="border p-3 rounded-lg w-full">
              <option>No Min</option>
            </select>

            <select className="border p-3 rounded-lg w-full">
              <option>No Max</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <select className="border p-3 rounded-lg w-full">
              <option>Category</option>
            </select>

            <select className="border p-3 rounded-lg w-full">
              <option>Bedroom</option>
            </select>
          </div>

          <select className="border p-3 rounded-lg w-full mb-4">
            <option>City</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Search Result
          </button>
        </div>

      </div>
    </section>
  );
}
