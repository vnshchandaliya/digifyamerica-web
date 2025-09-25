import { useState } from "react";

const Connect = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: ""
  });

  // Naya state variable form submit hone ka track rakhne ke liye
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Double-check this URL. It should match your backend's address.
       const response = await fetch("https://digifyamerica-backend.onrender.com/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });


        if (response.ok) {
            setFormSubmitted(true);
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Connection error:", error);
        alert("An error occurred. Check browser console.");
    }
};

  // Thank You message component
  const ThankYouMessage = () => (
    <div className="bg-white mx-auto rounded-xl shadow-md overflow-hidden max-w-3xl p-6 sm:p-8">
      <h2 className="text-lg font-semibold mb-6 text-center">Thank You!</h2>
      <p className="text-center">
        Your message has been sent successfully. We will be in touch shortly.
      </p>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased text-gray-800">
      <section
        className="relative h-96 lg:h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('https://www.bluetent.com/wp-content/uploads/2014/02/blue-header-gather-e1458234243768.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#FAA533] Poppins-font">
            Let's connect!
          </h2>
          <p className="text-lg md:text-xl font-light">
            We want to find solutions that fit your business needs.
          </p>
        </div>
      </section>
<h1 className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-29
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[11rem] 
'>
 Get in Touch
</h1>
      <div className="container mx-auto px-4 py-46 sm:px-6 lg:px-8 bg-[#ad9a9a35]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl sm:text-3xl font-light fontplayfair text-[#FAA533] leading-relaxed">
            Tell us a little bit about your vacation rental business and one of our team of experts will be in touch shortly.
          </p>
        </div>
        
        {/* Form ya Thank You message ko conditionally render karein */}
        {formSubmitted ? (
          <ThankYouMessage />
        ) : (
          <div className="bg-[#FFF5E1] mx-auto rounded-xl shadow-md overflow-hidden max-w-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold Poppins-font    mb-6">How can we help you?</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#FAA533]">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="firstName"
                      name="fname"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                      placeholder="Enter your first name"
                      onChange={handleChange}
                      value={formData.fname}
                      required
                    />
                </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#FAA533]">
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="lastName"
                      name="lname"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                      value={formData.lname}
                      required
                    />
                </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FAA533]">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#FAA533]">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                    />
                </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#FAA533]">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full border-[gray-300] rounded-md shadow-sm focus:ring-[#FAA533] focus:border-[#FAA533] sm:text-sm p-3"
                      placeholder="Tell us about your project..."
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#FAA533] text-white px-60 py-2 rounded-lg font-bold text-lg ml-20
                     shadow-[0_4px_0px_#c97f25] 
                     transform transition-all duration-200 
                     hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#0B6FA6] 
                     active:translate-y-[2px] active:shadow-none">
                SUBMIT
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;