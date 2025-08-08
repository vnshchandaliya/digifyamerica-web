import React from 'react'

const Solutions = () => {
  return (
    <>
       <h1 className="text-center pt-35 text-[34px] text-[#000] font-[300] mx-59">
          More than 850 professional vacation rental brands – from large to small <br/> – have trusted Bluetent to grow their online business. How can we help YOUR business?
        </h1>
         {/* Section 1 */}
      <section className="bg-white py-16 px-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[38px] font-[300] text-[#f09b2d]">
             Homeowner Acquisition
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
             Attract — and retain — homeowners with proven, cost-effective strategies from our team of experts.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2022/03/owner_acq_web.jpg"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white py-1 px-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2014/04/sre_website_sm.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[38px] font-[300] text-[#f09b2d]">
             Direct Booking Websites
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
                    Increase revenue with our Rezfusion suite of high performance, beautiful, direct booking websites that are built to address the needs of vacation rental companies of all sizes.
              </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-16 px-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[38px] font-[300] text-[#f09b2d]">
              Channel Management
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
              Book more guests with Rezfusion Boost, The best-in-class connection to the online travel agencies that matter.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2019/03/Channel-Management.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
       <section className="bg-white py-1 px-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2019/03/DM-graphics.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[38px] font-[300] text-[#f09b2d]">
             Digital Marketing

            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
                    Increase website traffic, strengthen brand loyalty, and broaden your digital footprint with a full complement of strategic digital marketing services.
                      </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-16 px-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[38px] font-[300] text-[#f09b2d]">
              Email Marketing
            </span>
            <p className="text-[#676767] text-[18px] font-[400] leading-relaxed">
             Get more leads and drive more direct bookings with email marketing tools and services designed specifically for professional vacation rental managers.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src="https://www.bluetent.com/wp-content/uploads/2019/03/Email-Popup-e1647376530468.png"
              alt="Device Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-white ">
  <div className="container mx-auto ">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
      <a
        href="/Conect-with-us"
        className="bg-[#1c75bc] text-[12px] text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Discover Solutions
      </a>
    </div>
  </div>
</section>
    </>
  )
}

export default Solutions
