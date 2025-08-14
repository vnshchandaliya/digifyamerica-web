import { useState } from "react";


const Connect = () => { 
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
                    onChange={(e)=>setFirstName(e.target.value)}
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
                     onChange={(e)=>setLastName(e.target.value)}
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
                     onChange={(e)=>setEmail(e.target.value)}
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
                    id="phone"
                    name="phone"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                    placeholder="Enter your phone number"
                     onChange={(e)=>setPhone(e.target.value)}
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
                     onChange={(e)=>setPhone(e.target.value)}
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
