import React from 'react'; import { Title, Meta } from "react-head";
import blogImage5 from '../assets/blog-img/social-media-7213158_1920.png';

const BlogFive = () => {
  return (
    <>
    <Title>How to Create a Strong Brand Voice | Branding Guide</Title>
<Meta name="description" content="Understand how to define and maintain a consistent brand voice across websites, social media and marketing content." />

    <section className="bg-[#D2C1B6] text-[#234C6A]">
      <div className="container mx-auto px-4 py-12 pt-34 ">
        {/* Inner container for max width and a clean look */}
        <div className=" max-w-4xl mx-auto ">
          <h2 className="text-center text-[40px] font-[300] mx-19 fontplayfair text-[#1B3C53] leading-14 ">
            How to Define Your Brand Voice for Social Media
          </h2>
          <br />

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <img 
              src={blogImage5}
              alt="Brand Voice for Social Media" 
              className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg" 
            />
          </div>

          <p className="text-xl leading-relaxed ">
            Most brands sound <span className="text-[#1B3C53]">exactly the same</span> on social media. Overly enthusiastic, emoji-heavy, trying way too hard to be relatable. It's exhausting to read.
          </p>

          <p className="mt-4 leading-relaxed">
            Here's the thing: your brand already has a voice. You need to figure out what it <strong className='text-[#1B3C53]'>actually is</strong> instead of copying whatever seems to be working for everyone else. Let’s make your brand sound human, not like a corporate parrot.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 1: Start with who's listening */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">01.</span> Start with who's listening
          </h2>
          <p className="leading-relaxed">
            You can't figure out how to talk until you know who you are talking to. Who <strong className='text-[#1B3C53]'>actually follows</strong> you? What do they care about? How do they talk when they are being themselves online?
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Audience Check:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>A skincare brand on TikTok sounds different from a B2B company on LinkedIn.</li>
              <li>Adapt your tone to the culture of the platform and the user.</li>
            </ul>
          </div>

          <p className="leading-relaxed">
            Once you understand who's on the other end, you can stop guessing and start connecting.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 2: Figure out your actual personality */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">02.</span> Figure out your actual personality
          </h2>
          <p className="leading-relaxed">
            If your brand walked into a room, what would people notice first? Pick three to five words that describe your personality. Not what you want to be—what you <strong className='text-[#1B3C53]'>actually are.</strong>
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Personality Traits:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className='text-white'>Witty?</strong> Professional? Irreverent? Warm?</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            <strong className='text-[#1B3C53]'>Example:</strong> Two brands post about coffee. One says: "We came. We saw. We caffeinated." The other says: "Powering your productivity, one cup at a time." Same product, totally different energy.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 3: Look at what's already working */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">03.</span> Look at what's already working (or not)
          </h2>
          <p className="leading-relaxed">
            Go through your top-performing posts. What do they have in common? Are they funny? Helpful? Vulnerable? Your audience is already telling you what resonates. You only have to pay attention.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Actionable Insight:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Analyze your data to see which tones (e.g., direct, advisory, funny) perform best.</li>
              <li>Study brands you admire to understand what makes their voice distinct, not to copy it.</li>
            </ul>
          </div>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 4: Write it down (seriously) */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">04.</span> Write it down (seriously)
          </h2>
          <p className="leading-relaxed">
            This matters, especially if multiple people post for your brand. Without guidelines, your social channels will sound inconsistent.
          </p>
          
          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Document Your Voice:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className='text-white'>Tone basics:</strong> (e.g., confident but not arrogant)</li>
              <li><strong className='text-white'>Do's and Don'ts:</strong> (e.g., We use humor, we don't use sarcasm)</li>
              <li><strong className='text-white'>Real examples:</strong> Show examples of posts that nail your voice.</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            Be consistent enough so that people recognize you, but not so rigid that you can't adapt.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 5: Adjust for the platform (but stay yourself) */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">05.</span> Adjust for the platform (but stay yourself)
          </h2>
          <p className="leading-relaxed">
            You don't talk the same way at a work meeting as you do with friends, but you are still recognizably you. <strong className='text-[#1B3C53]'>Same principle for platforms.</strong>
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Adaptation vs. Identity Loss:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Twitter rewards quick wit.</li>
              <li>Instagram wants visual storytelling.</li>
              <li>LinkedIn expects thoughtful expertise.</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            Adapt your tone without losing what makes you distinct.
          </p>
          
          <hr className="my-10 border-t-2 border-gray-200" />
          
          {/* Point 6: Stop trying to sound "professional" */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">06.</span> Stop trying to sound "professional"
          </h2>
          <p className="leading-relaxed">
            People don't follow logos. They follow people—or brands that at least remember they are run by humans. Drop the corporate-speak and talk like a real person would.
          </p>
          
          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#1B3C53] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Humanize Your Brand:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Reply to comments.</li>
              <li>Show personality.</li>
              <li>Admit when you mess up.</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            That stuff builds trust way faster than perfectly polished marketing copy ever will.
          </p>

          {/* Conclusion */}
          <div className="bg-[#234C6A] text-white p-8 rounded-xl mt-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">The Final Word</h2>
            <p className="text-lg leading-relaxed">
              Your brand voice is basically <strong className='text-white'>body language for the internet.</strong> It’s how people recognize you before they even see your name. When you nail it, everything gets easier.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Stop overthinking it. Listen to your people, be honest about who you are, and show up consistently.
            </p>
            <h3 className="text-2xl font-[500] mt-8 text-[#fff]">Ready to find the voice that cuts through the noise?</h3>
          </div>
        </div>
      </div>
    </section>
    </> 
  )
}

export default BlogFive;