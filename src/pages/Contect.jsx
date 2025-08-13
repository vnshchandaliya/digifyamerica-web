import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import React from 'react';
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.6639184723094!2d-86.42497132497604!3d30.38889990216947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88914355b8e4facd%3A0x3ed931f656e0623d!2s34990%20Emerald%20Coast%20Pkwy%20%23300%2C%20Destin%2C%20FL%2032541%2C%20USA!5e0!3m2!1sen!2sin!4v1755020767237!5m2!1sen!2sin" ;


const Connect = () => {

 
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );

  return (
    // Main container for the entire page, with a light gray background and responsive padding.
    <div className="bg-gray-100 min-h-screen font-sans antialiased text-gray-800">
      
    
      <section 
        className="relative h-96 lg:h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('https://www.bluetent.com/wp-content/uploads/2014/02/blue-header-gather-e1458234243768.jpg  ')`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
        
        <div className="relative z-20 max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Let's connect!
          </h2>
          <p className="text-lg md:text-xl font-light">
            We want to find solutions that fit your business needs.
          </p>
        </div>
      </section>

      {/* Main Form container, centered and responsive. */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Form header text. */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl sm:text-2xl font-light leading-relaxed">
            Tell us a little bit about your vacation rental business and one of our team of experts will be in touch shortly.
          </p>
        </div>

      
        <div className="bg-white mx-auto rounded-xl shadow-md overflow-hidden max-w-3xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-6">How can we help you?</h2>
          
        
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">
              
              {/* First Name Input */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              
              {/* Last Name Input */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              {/* Phone Number Input */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Message Textarea. It spans across both columns on desktop. */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
            </div>
            
            {/* The radio button section from the previous request. */}
            {/* <div className="space-y-4 pt-6">
              <label className="flex items-start">
                <input 
                  type="radio" 
                  name="inquiry-type" 
                  className="mt-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" 
                />
                <span className="ml-3 text-sm text-gray-700">
                  I am a property management company looking for a new solution.
                </span>
              </label>
              <label className="flex items-start">
                <input 
                  type="radio" 
                  name="inquiry-type" 
                  className="mt-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" 
                />
                <span className="ml-3 text-sm text-gray-700">
                  I am an existing Property Manager looking for customer support.
                </span>
              </label>
            </div> */}
            
            {/* Submit button with responsive styling. */}
            <button
              type="submit"
              className="w-full mt-8 bg-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-sm hover:bg-blue-700 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* The footer section, identical to the previous version. */}
      
    </div>
  );
};



export default Connect;
