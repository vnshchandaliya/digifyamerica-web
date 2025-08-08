import React from 'react'
import img3 from '../../assets/images/img3.jpg';
// import seoIcon from "../assets/images/seo-icon.png"; 
// import contentIcon from "../assets/images/content-icon.png"; 

const DigitalMarketing = () => {
  return (
    <>
     <section
            className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center px-40"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-0"></div>
    
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <h1 className="text-[34px] font-light leading-tight mb-6">
                Drive more traffic, get more direct <br />bookings, and grow your business
              </h1>
              <a
                href="#"
                className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
              >
               LEARN MORE
              </a>
            </div>
          </section>
      <h1 className='pt-10 text-[34px] mx-55  font-thin text-center '>
          our team of vacation rental marketing specialists build multi-channel marketing strategies that deliver results.
          </h1>
           <section className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 max-w-1xl mx-auto px-4">
        increase your digital presence with two foundational elements working hand-in-hand
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2  px-1 md:px-20">
        {/* SEO Column */}
        <div>
          <img
            src="https://www.bluetent.com/wp-content/uploads/2019/04/seo-768x582.png"
            alt="SEO Icon"
            className="mx-auto w-60 h-50 "
          />
          <h3 className="text-[24px] font-semibold text-orange-500 mt-6">SEO</h3>
          <p className="text-[18px] font-medium uppercase text-[#676767] mt-2">
            HELP TRAVELERS FIND YOU ONLINE
          </p>
          <p className="text-[#676767] text-[18px] font-[400] leading-[1.6] italic mt-2 max-w-sm mx-auto">
            Search engine optimization (SEO) is essential: if travelers can’t find your brand, they can’t book your listings. Let our experts navigate the complex and ever-changing world of SEO to improve your search presence and boost website traffic.
          </p>
        </div>

        {/* Content Column */}
        <div>
          <img
            src="https://www.bluetent.com/wp-content/uploads/2019/04/content-768x579.png"
            alt="Content Icon"
            className="mx-auto w-60 h-50"
          />
          <h3 className="text-[24px] font-semibold text-orange-500 mt-6">CONTENT</h3>
         <p className="text-[18px] font-medium uppercase text-[#676767] mt-2">
           STAND OUT FROM THE COMPETITION
          </p>
            <p className="text-[#676767] text-[18px] font-[400] leading-[1.6] italic mt-2 max-w-sm mx-auto">
            Your website needs quality content to thrive. Regular content creation brings your brand to life and makes you a trusted advisor to your guests.
          </p>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 max-w-1xl mx-auto px-4">
       build momentum with finely tuned, targeted ad campaigns
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2  px-1 md:px-20">
        {/* SEO Column */}
        <div>
          <img
            src="https://www.bluetent.com/wp-content/uploads/2019/04/digital-advertising-292x300.png"
            alt="SEO Icon"
            className="mx-auto w-60 h-50 "
          />
          <h3 className="text-[24px] font-semibold text-orange-500 mt-6">DIGITAL ADVERTISING</h3>
          <p className="text-[18px] font-medium uppercase text-[#676767] mt-2">
          GET HIGHLY QUALIFIED TRAFFIC
          </p>
          <p className="text-[#676767] text-[18px] font-[400] leading-[1.6] italic mt-2 max-w-sm mx-auto">
            Our experts will craft results-driven digital advertising campaigns — based on your business goals, location, and competition — to deliver qualified, ready-to-book travelers to your website. </p>
        </div>

        {/* Content Column */}
        <div>
          <img
            src="https://www.bluetent.com/wp-content/uploads/2019/04/social-advertising-300x255.png"
            alt="Content Icon"
            className="mx-auto w-60 h-50"
          />
          <h3 className="text-[24px] font-semibold text-orange-500 mt-6">SOCIAL ADVERTISING</h3>
         <p className="text-[18px] font-medium uppercase text-[#676767] mt-2">
           LEVERAGE THE VAST SOCIAL MEDIA AUDIENCE
          </p>
            <p className="text-[#676767] text-[18px] font-[400] leading-[1.6] italic mt-2 max-w-sm mx-auto">
           A strong social advertising strategy, using both Facebook and Instagram, reaches travelers where they spend their time online and multiplies the effect of your other marketing efforts.</p>
        </div>
      </div>
    </section>
     <div className="text-center max-w-4x4 mx-auto">
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Interested in driving direct bookings and maximizing revenue?
        </p>
        <p className="text-[34px] font-[300] md:text-[34px] text-[#444444] mb-1">
          Bluetent has a package to help with that.
          <br />
          <span className="text-[#53b6e7] font-medium  cursor-pointer">
            introducing: Bluetent’s Digital Marketing Packages
          </span>
          <br /><br />
        </p>
      </div>
    <section className="bg-[#222] text-white py-16 px-4 md:px-10 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-1xl mx-auto">
    {/* Level One */}
    <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
      <h3 className="text-[34px] font-[300] mb-4">Level One</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to jumpstart online success with a
        healthy and diverse digital strategy. This level is a good starting
        point for smaller vacation rental companies or those that simply
        want to maintain their SEO presence. This package can be used as a
        stepping stone for more robust marketing strategies.
      </p>
      <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Build your online ecosystem
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>

    {/* Level Two */}
    <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
       <h3 className="text-[34px] font-[300] mb-4">Level Two</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to attract more travelers into
        their direct booking funnel by improving your SEO positioning while
        increasing website traffic and brand awareness through content
        marketing. Take the next step in your marketing by identifying
        strategies and tactics to improve your search engine presence,
        increase traffic and conversions, and strengthen brand awareness.
      </p>
      <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Expand your online presence
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>

    {/* Level Three */}
   <div className="bg-[#1c1c1c] p-6 rounded-lg text-center hover:bg-[#53b6e7] hover:text-[#fff] transition duration-300">
       <h3 className="text-[34px] font-[300] mb-4">Level Three</h3>
      <p className="text-[#fff] text-[18px] leading-relaxed">
        Designed for businesses looking to distinguish their brand in
        competitive markets. This package is for any brand who is looking
        to be the leader in their market through data-driven strategic
        recommendations. Work with a dedicated Strategic Account Manager to
        execute strategies aimed at increasing occupancy, growing property
        inventory, and strengthening brand loyalty. A supplement to this
        package is access to Rental Insights, powered by LSI Tools — where
        you will discover untapped revenue opportunities to create targeted
        campaigns.
      </p>
       <p className="mt-6 font-semibold text-white text-[22px] leading-[26px]">
        Increase your market advantage
      </p>
      <button className="mt-2 text-[18px] text-[#fff] hover:">
        Learn more →
      </button>
    </div>
  </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-screen-xl mx-auto">
      {/* Left Text Block */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#53b6e7] mb-4 text-center">
          work with an expert.
        </h2>
        <p className="text-[#000000be] text-lg md:text-xl mb-6 mx-20">
          Let's work together to create comprehensive, measurable marketing
          plans to help you thrive from peak season to shoulder season … and back.
        </p>
        <button className="bg-[#1c75bc] hover:bg-blue-700  text-white mx-35 px-10 py-3 rounded-md text-sm font-semibold uppercase transition-all">
          Schedule a Consultation
        </button>
      </div>

      {/* Right Video Block */}
      <div className="w-full md:w-1/2 aspect-video">
       <iframe title="vimeo-player" 
       src="https://player.vimeo.com/video/354673091?h=60949f5cd5" 
       width="640" height="360" frameborder="0" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  
        allowfullscreen></iframe>
      </div>
    </section>

    </>
  )
}

export default DigitalMarketing
