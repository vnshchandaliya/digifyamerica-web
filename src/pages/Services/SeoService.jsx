import React from 'react';
import { Bolt, Layout, Smartphone, MousePointer2, CheckCircle, BarChart2, MessageSquare, MapPin, Search, Rocket } from 'lucide-react';
import heroImage from "../../assets/service-vector/seo.png"
const SeoService = () => {
  return (
    <section className="bg-white pt-30">
      {/* Top Section: Text and Image in a grid */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[50px] text-[#FAA533] fontplayfair leading-13">
              Search Engine Optimization (SEO)
            </h1>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Imagine Google is like a huge library with <o className="text-[#FAA533] "> billions of books</o>  (websites). When someone wants to find information, they ask the librarian (Google) a question. The librarian then looks through all the books and shows the person the best ones first. SEO is like making your book (website) really good so the librarian recommends it to people.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              If your website shows up higher in search engines, the more people visit your website. <o className="border-2 border-[#FAA533] bg-[#FAA533] text-white uppercase whitespace-nowrap" > SEO helps Google understand</o>  that your business is the best choice when people search for what you offer.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              // Local file path ko hata diya gaya hai aur iski jagah ek placeholder image URL ka upyog kiya gaya hai.
              src={heroImage}
              alt="SEO - Search Engine Optimization"
              className="w-full max-w-[70vh] h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="bg-[#ad9a9a35] py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">

          {/* Why SEO is Important */}
          <div className="bg-[#FFF5E1] p-8 md:p-12 rounded-xl shadow-lg mb-16">
            <h2 className="text-3xl font-[300] text-black mb-6 text-center Poppins-font">
              Why is SEO Important?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0" />
                <p className="text-lg text-gray-700">People find you when they need you</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0" />
                <p className="text-lg text-gray-700">It's like having a 24/7 helper</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0" />
                <p className="text-lg text-gray-700">It builds trust.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0" />
                <p className="text-lg text-gray-700">It lasts longer than Ads.</p>
              </div>
            </div>
          </div>
          <h1 className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-20
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[8rem] 
'>
            What We Offer
          </h1>
          {/* What We Do Best */}
          <section className="mb-16 py-28">
            <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
              What We Offer
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-10">
              At Digify America, our <o className="text-[#FAA533] "> SEO services </o> help businesses of all sizes rise. We use methods that are effective and lasting. We focus on what works, skip what doesn’t, and tailor every move to your goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                  <BarChart2 className="text-[#fff] h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] text-gray-900">Technical SEO Excellence</h3>
                  <p className="text-gray-700">We fix it all - site speed, design, mobile responsiveness, and crawlability. Google loves clean, structured sites and we make your website shine in the crowd. </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                  <MessageSquare className="text-[#fff] h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] text-gray-900">Content that Connects</h3>
                  <p className="text-gray-700">We create and optimize content that educates, inspires, and ranks. Think blogs that answer customer queries and product descriptions that do more than fill space.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-[#fff] h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] text-gray-900">Local SEO for Real-World Impact</h3>
                  <p className="text-gray-700">We optimize your Google Business Profile, manage citations, and implement location-based strategies that bring in nearby customers. Own your neighborhood.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                  <Rocket className="text-[#fff] h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-[500] text-gray-900">Real Metrics, Real Results</h3>
                  <p className="text-gray-700">We track Organic traffic, conversion rates, keyword rankings, and revenue attribution to give you reports that show your SEO success and plan your next move.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why SEO with Digify America? */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16">
            <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
              Why Digify America?
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-8">
              We don’t sell rankings, we build sustainable growth. Here’s why clients pick us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-700">We build for humans first, algorithms second</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-700">We align SEO with your business goals and not just traffic goals</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-700">We stay on top of algorithm updates, so you don’t have to</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-700">We are budget-friendly but performance-obsessed</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-8">
              <o className="text-[#FAA533] "> **Lasting Results:**</o>  Paid advertising stops working when you stop paying but <o className="border-2 border-[#FAA533] bg-[#FAA533] text-white uppercase whitespace-nowrap" >  SEO builds lasting value.</o> The rankings and authority you build today continue working for your business months and years down the road. It's an investment in your company's future.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <o className="text-[#FAA533] "> **Competitive Advantage:**</o>  By consistently appearing at the top of search results, your business becomes a recognized name. Customers trust businesses that show on top of search engines and this means more leads, bookings, and sales.
            </p>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="  text-[30px] font-[300] Poppins-font text-[#FAA533] text-center">
              Our Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FFF5E1] p-6 rounded-lg shadow-md border-t-4 border-[#FAA533]">
                <p className="italic text-black">"One of our vacation rental clients increased their bookings by **200% in just 10 months**."</p>
              </div>
              <div className="bg-[#FFF5E1] p-6 rounded-lg shadow-md border-t-4 border-[#FAA533]">
                <p className="italic text-black">"A B2B service company we worked with now generates **60% of their leads** through organic search. This allowed them to cut down on paid advertising."</p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-[#FFF5E1] text-black p-8 md:p-12 rounded-xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">
              Are you ready to be found by the right people?
            </h2>
            <p className="max-w-3xl mx-auto text-lg mb-6">
              Your customers are searching for you right now. The question is: Will they find you, or will they find your competition? Every day you delay SEO is another day of lost opportunities.
            </p>
            <p className="max-w-3xl mx-auto text-lg mb-8">
              Your audience is searching. Let’s make sure they find you.
            </p>
            {/* <a
              href="#"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get a FREE CONSULTATION today!
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoService;
