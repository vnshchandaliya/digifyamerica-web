import React from 'react';
import { PlayCircle, Video, Film, MessageSquare, MonitorPlay, TrendingUp, CheckCircle, Lightbulb, Zap, Star } from 'lucide-react';
import heroImage from "../../assets/service-vector/Video files-rafiki.png"

const VideoProduction = () => {
  return (
    <section className="bg-white pt-30">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl pt-16 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[50px] text-[#FAA533] fontplayfair leading-13">
              In a world that won’t sit still, video gets you noticed.
            </h1>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Attention spans are toast in the digital world. Nobody’s reading long paragraphs or zooming in 
              on <o className="text-[#FAA533] "> static graphics.</o>  But hit play on the right video? Suddenly, 
              they are hooked. In the sea of digital pictures, you need <o className="border-2 border-[#FAA533] bg-[#FAA533] text-white uppercase whitespace-nowrap">
               scroll-stopping video </o>  that says something.
            </p>
            <p className='text-lg text-gray-700 mb-8'>
              At Digify America, we create video content that gets people to pause, pay attention, and act. Whether it’s a 60-second brand story, a product demo, or a bite-sized social video, we produce videos that work just as hard as your best sales rep.
            </p>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
             src={heroImage}
              alt="Video Production Illustration"
              className="w-full max-w-[70vh] h-auto rounded-lg  object-cover"
            />
          </div>
        </div>
      </div>
 <h1 className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[9rem] 
'>
        What We Offer
      </h1>
      {/* What We Offer Section */}
      <div className="bg-[#ad9a9a35] py-42 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
            What We Offer
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 text-center mb-10">
            We turn your message into motion with purpose, personality, and polish. Powerful videos that helps your brand move.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Film className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Brand Story Videos</h3>
                <p className="text-gray-700">We script, shoot, and edit cinematic videos that make people connect and remember your name. Let’s tell your story the way it deserves to be told.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Video className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Product Demos & Showcases</h3>
                <p className="text-gray-700">We create videos that highlight features, benefits, and real-world experiences which are perfect for websites, landing pages, and digital ads. Don’t tell them, show them.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Star className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Testimonial & Case Study Videos</h3>
                <p className="text-gray-700">We capture authentic customer stories that turn “maybe” into “let’s do this.” Social proof is proven and better way to earn trust.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <MonitorPlay className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Social Media Shorts & Reels</h3>
                <p className="text-gray-700">Fast, scroll-stopping, thumb-stopping clips built for Instagram, TikTok, Facebook, and YouTube. Short-form, long impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <Lightbulb className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Explainer Videos & How-Tos</h3>
                <p className="text-gray-700">Pushing for sale all the time can be repelling, but informational videos get immediate attention. Solve their queries to get their attention.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FAA533] p-3 rounded-full flex-shrink-0">
                <TrendingUp className="text-[#fff] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-[500] text-gray-900">Video Ads & Campaign Creative</h3>
                <p className="text-gray-700">We craft polished video content for paid campaigns, from strategy to script to final export.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<h1 className='
  absolute 
  text-gray-100 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[4rem] 
  fontplayfair 
 mt-33
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[7rem] 
'>
       Why Digify America?
      </h1>
      {/* Why Digify America? */}
      <div className="py-39 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533]">
            Why Digify America?
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-black text-center mb-8">
            Here’s how we are different:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Start With Strategy: Every video begins with a goal. We build backwards from what you want to achieve.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Get the Message Right: We get to the heart of your brand and communicate it clearly.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Move Fast, But Deliver Quality: Quick turnarounds, no sacrifice on quality.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We Make It Personal: We take time to understand your audience, tone, and voice and reflect that in every frame.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#FAA533] h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Solutions that fit your budget: From reels to premium cinematic edits, we scale to fit your resources.</p>
            </div>
          </div>
           <div className="text-center bg-[#FFF5E1] text-black p-8 md:p-12 mt-30 rounded-xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">
          Let’s Roll.
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          If your content plan doesn’t include video, you are almost invisible in the digital landscape. Let’s change that. You need video content that your audience wants to watch and your competitors wish they had.
        </p>
        {/* <a
          href="#"
          className="inline-block bg-white text-[#1c75bc] font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Schedule a FREE CONSULTATION today!
        </a> */}
      </div>
        </div>
      </div>

      {/* Final CTA Section */}
     
    </section>
  );
};

export default VideoProduction;
