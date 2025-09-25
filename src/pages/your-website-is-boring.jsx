import React from 'react'
import blogImage2 from '../assets/blog-img/pexels-mikhail-nilov-7988079.jpg';
const BlogTwo = () => {
  return (
    <>
          <div className="prose max-w-4xl mx-auto text-black pt-30">
         <h2 className="text-center  text-[40px] font-[300] mx-19 fontplayfair text-[#FAA533] leading-14  ">
        Your website is boring: Here’s how to fix that before visitors bounce
      </h2>
      
      {/* Hero Image */}
      <div className="flex justify-center mb-10">
        <img 
          src={blogImage2}
          alt="Web Design" 
          className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg" 
        />
      </div>
      
      <p className="text-xl leading-relaxed text-black">
        You have got a website. Great! So does your neighbor’s cat. But is it actually doing anything?
      </p>
      
      <p className="mt-4 leading-relaxed">
        <o className="text-[#FAA533]">Welcome to the hard truth:</o> if your website doesn’t grab attention in three seconds or less, it’s already lost. 
        Let’s break down how you can transform your snoozefest of a site into a 
        <o className="border-2 border-[#FAA533] bg-[#FAA533] text-white uppercase whitespace-nowrap" > high-performance conversion machine </o> —without needing to learn code or sacrifice your sanity. And yes, Digify America can do all of this for you (without judging your current homepage).
      </p>
      
      <hr className="my-10 border-t-2 border-gray-200" />
      
      <h2 className="text-3xl md:text-4xl font-[300] text-black leading-tight Poppins-font mb-4">
          <span className="text-[#FAA533] ">01.</span> Visual design that doesn’t make eyes bleed
      </h2>
      <p className="leading-relaxed">
        You don’t need to be Picasso, but your website needs to look good. Visitors judge your credibility in milliseconds based on aesthetics alone. That means no clashing colors, Comic Sans fonts, or layout choices inspired by 2003.
      </p>
      
      <div className="bg-[#FFF5E1] p-6 rounded-lg my-6 border-l-4 border-[#FAA533]">
        <h3 className="text-xl font-semibold mb-2 text-[#FAA533]">Fixes:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Whitespace is your best friend.</strong> Stop cramming everything into the top of the page like you are packing for a guilt trip.</li>
          <li><strong>Consistent fonts and colors.</strong> Two fonts max. Three colors max. Keep it attractive, not distracting.</li>
          <li><strong>Visual hierarchy.</strong> Headlines need to be big and bold. Subheads smaller. Buttons should pop. Everything should guide the eye, not confuse it.</li>
          <li><strong>High-quality images.</strong> Use crisp, relevant visuals that relate to your message.</li>
        </ul>
      </div>
      
      <p className="leading-relaxed">
        <strong className='text-[#FAA533]'>How Digify America helps:</strong> Our design team knows exactly how to make your brand look sharp without going overboard. We design websites people want to look at and stay on.
      </p>

      <hr className="my-10 border-t-2 border-gray-200" />
      
     <h2 className="text-3xl md:text-4xl font-[300] text-black leading-tight  Poppins-font mb-4">
          <span className="text-[#FAA533] ">02.</span> Messaging that doesn’t sound like a robot
      </h2>
      <p className="leading-relaxed">
        People are not confused, they are bored. And most websites sound like they were written by a sentient PowerPoint slide.
      </p>
      
      <div className="bg-[#FFF5E1] p-6 rounded-lg my-6 border-l-4 border-[#FAA533]">
        <h3 className="text-xl font-semibold mb-2 text-[#FAA533]">Fixes:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Say what you do—in plain English.</strong> If someone can’t figure out what your business offers in 5 seconds, you have already lost them.</li>
          <li><strong>Benefits over features.</strong> Nobody cares that your product is “powered by AI.” They want to know how it solves their problem.</li>
          <li><strong>Tone that reflects your brand.</strong> Are you serious, playful or luxury? Pick a vibe and stick with it.</li>
          <li><strong>Strong calls to action.</strong> Don’t just say “Submit.” Say “Get Your Free Quote” or “Start Your Transformation.” Guide the user like you want them to do something.</li>
        </ul>
      </div>
      <p className="leading-relaxed">
        <strong className='text-[#FAA533]'>How Digify America helps:</strong> We craft messaging that’s conversational, clear, and aligned with your voice. We tell your brand story like a human and not a legal disclaimer.
      </p>
      
      <hr className="my-10 border-t-2 border-gray-200" />

       <h2 className="text-3xl md:text-4xl font-[300] text-black leading-tight  Poppins-font mb-4">
          <span className="text-[#FAA533] ">03.</span> Performance tweaks that make you lightning fast
      </h2>
      <p className="leading-relaxed">
        Even if your site looks great and reads like a dream, it won’t matter if it loads slower. Think of this as a Porsche stuck in traffic.
      </p>
      
            <div className="bg-[#FFF5E1] p-6 rounded-lg my-6 border-l-4 border-[#FAA533]">
            <h3 className="text-xl font-semibold mb-2 text-[#FAA533]">Tips:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Compress your images.</strong> Large image files are the #1 killer of load speed. Optimize them before uploading.</li>
          <li><strong>Limit unnecessary scripts and plugins.</strong> Every fancy thing you add comes with a performance price tag.</li>
          <li><strong>Use a content delivery network (CDN).</strong> It delivers your site faster to users around the globe.</li>
          <li><strong>Responsive design.</strong> Mobile is not optional, it’s the default. Your site should work like magic on every screen size.</li>
        </ul>
      </div>
      <p className="leading-relaxed">
        <strong className='text-[#FAA533]'>How Digify America helps:</strong> We don’t just design pretty pages—we engineer them for speed. We handle all the behind-the-scenes optimizations so your users don’t bounce before the page even loads.
      </p>
      
      <hr className="my-10 border-t-2 border-gray-200" />
      
     <h2 className="text-3xl md:text-4xl font-[300] text-black leading-tight  Poppins-font mb-4">
        Final Touches: Analytics, UX, and a little bit of soul
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li> <strong className='text-[#FAA533]'>Track what matters.</strong> Set up Google Analytics to see where people drop off.</li>
        <li> <strong className='text-[#FAA533]'>Keep forms short.</strong> Every extra field is a reason to quit.</li>
        <li> <strong className='text-[#FAA533]'>Test, tweak, repeat.</strong> Even small changes like button placement or headline wording can mean big results.</li>
      </ul>
      <p className="leading-relaxed mt-4">
        And here’s the kicker: Your website is not a one-and-done thing. It’s a living part of your brand. It should evolve with you, respond to data, and always aim to delight your visitors.
      </p>

      <div className="bg-[#FFF5E1] text-black p-8 rounded-xl mt-16 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl Poppins-font  font-[00] mb-4">How Digify America can help</h2>
        <p className="text-lg leading-relaxed">
          We turn boring websites into beautiful, high-converting digital machines. Whether you need a full redesign, performance tune-up, or a complete brand voice overhaul—we are your people. We make websites that are impossible to ignore.
        </p>
        <h3 className="text-2xl font-[500] mt-8 text-[#FAA533]">Stop losing visitors. Start turning them into customers.</h3>
      </div>
    </div>
    </>
  )
}

export default BlogTwo
