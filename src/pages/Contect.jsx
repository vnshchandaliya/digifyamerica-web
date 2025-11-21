import { useState } from "react";
import emailjs from "@emailjs/browser";
// useNavigate hook ko import karein
import { useNavigate } from 'react-router-dom'; 

const Connect = () => {
  // useNavigate hook ko initialize karein
  const navigate = useNavigate(); 

  const initialFormState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_lq2ng3r",     // EmailJS service ID
      "template_b2yd829",    // EmailJS template ID
      formData,
      "cRSuTQZ-JIDCuwin0"         // EmailJS user ID (public key)
    )
    .then((result) => {
      console.log("Email successfully sent!", result.text);
      setFormSubmitted(true); // Step 1: Thank You Modal dikhega
      setFormData(initialFormState); // Form reset

      // Step 2: 3 seconds (3000ms) ke baad Home Page par redirect
      setTimeout(() => {
        navigate('/'); // Home page ka path
      }, 3000); 

    }, (error) => {
      console.error("Email sending failed:", error);
      alert("Something went wrong, please try again.");
    });
  };

  // <--- UPDATED: ThankYouMessage ko Modal ke roop mein design kiya gaya hai
  const ThankYouMessage = () => (
    // Modal Overlay: Poori screen ko cover karega (fixed inset-0), black/dark background dega
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        {/* Modal Content: Center mein dikhega, white background, shadow aur rounded corners */}
        <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-8 text-center text-[#234C6A]">
            <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
            <p className="text-lg mb-4">We have received your message and will get back to you shortly.</p>
            <p className="text-sm text-gray-500">Redirecting to the home page in a moment...</p>
        </div>
    </div>
  );
  // ---> UPDATED

  return (
    <div className="bg-[#D2C1B6] text-[#234C6A] min-h-screen font-sans antialiased">
      {/* Agar formSubmitted true hai toh modal dikhega, div ke andar nahi */}
      {formSubmitted && <ThankYouMessage />} 
      
      {/* Baki page content, agar formSubmitted true hai toh yeh content modal ke neeche dikhega */}
      
      {/* Main Form/Page Layout */}
      <section
        className="relative h-96 lg:h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url('https://www.bluetent.com/wp-content/uploads/2014/02/blue-header-gather-e1458234243768.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#D2C1B6] Poppins-font">
            Let's connect!
          </h2>
          <p className="text-lg md:text-xl font-light">
            We want to find solutions that fit your business needs.
          </p>
        </div>
      </section>

      <h1 className='absolute text-gray-100 font-bold uppercase text-[3rem] fontplayfair mt-29 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap md:text-[10rem] lg:text-[11rem]'>
        Get in Touch
      </h1>

      <div className="container mx-auto px-4 py-46 sm:px-6 lg:px-8">
        <div id="contact-form" className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[29px] md:text-[50px] sm:text-3xl font-light fontplayfair text-[#1B3C53] leading-relaxed">
            Tell us a little bit about your vacation rental business and one of our team of experts will be in touch shortly.
          </p>
        </div>

        {/* FormSubmitted true hone par form ab yahan nahi dikhega, bas content chalta rahega */}
        {!formSubmitted && (
          <div className="bg-white mx-auto rounded-xl shadow-md overflow-hidden max-w-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold Poppins-font mb-6">How can we help you?</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#1B3C53]">First Name</label>
                  <div className="mt-1">
                    <input type="text" id="firstName" name="fname" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3" placeholder="Enter your first name" onChange={handleChange} value={formData.fname} required/>
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#1B3C53]">Last Name</label>
                  <div className="mt-1">
                    <input type="text" id="lastName" name="lname" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3" placeholder="Enter your last name" onChange={handleChange} value={formData.lname} required/>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1B3C53]">Email</label>
                  <div className="mt-1">
                    <input type="email" id="email" name="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3" placeholder="Enter your email" onChange={handleChange} value={formData.email} required/>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1B3C53]">Phone Number</label>
                  <div className="mt-1">
                    <input type="tel" id="phone" name="phone" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3" placeholder="Enter your phone number" onChange={handleChange} value={formData.phone} required/>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#1B3C53]">Message</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" className="block w-full border-[gray-300] rounded-md shadow-sm focus:ring-[#1B3C53] focus:border-[#1B3C53] sm:text-sm p-3" placeholder="Tell us about your project..." onChange={handleChange} value={formData.message} required/>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#234C6A] text-white px-20 py-2 rounded-lg font-bold text-lg ml-20
                           shadow-[0_4px_0px_#456882] 
                           transform transition-all duration-200 
                           hover:translate-y-[-3px] hover:shadow-[0_6px_0px_#D2C1B6] 
                           active:translate-y-[2px] active:shadow-none"
              >
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