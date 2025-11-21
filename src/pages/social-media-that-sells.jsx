import React from 'react';
import blogImage4 from '../assets/blog-img/email-3249062_1920.png';

const BlogFour = () => {
  return (
    <section className="bg-[#D2C1B6] text-[#234C6A]">
      <div className="container mx-auto px-4 py-12 pt-34 ">
        {/* Inner container for max width and a clean look */}
        <div className=" max-w-4xl mx-auto ">
          <h2 className="text-center text-[40px] font-[300] mx-19 fontplayfair text-[#1B3C53] leading-14">
            How to Write Email Subject Lines That Get Clicked
          </h2>
          <br />

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <img
              src={blogImage4}
              alt="Email Subject Line Optimization"
              className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <p className="text-xl leading-relaxed ">
            People spend days perfecting their email copy, tweaking designs, A/B testing buttons, and then slap on whatever subject line comes to mind first. That subject line is <span className="text-[#1B3C53]">literally the only thing</span> standing between your carefully crafted email and the trash folder.
          </p>

          <p className="mt-4 leading-relaxed">
            If it doesn't work, nothing else gets a chance to. Let's talk about what actually makes people click.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 1: Just be clear about it */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">01.</span> Just be clear about it
          </h2>
          <p className="leading-relaxed">
            Your subject line isn't the place to showcase your creative writing skills. People want to know what you are offering in about two seconds.
          </p>
          <p className="leading-relaxed">
            <strong className='text-[#1B3C53]'>Shorter is almost always better.</strong> Aim for 50 characters or less. Choose clarity over trying to sound clever.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 ">Example of Clarity:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>"Your Exclusive Opportunity to Maximize ROI" (Bad)</li>
              <li>"<strong className='text-white'>Save 20%</strong> on your next order" (Good - I know exactly why I should care.)</li>
            </ul>
          </div>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 2: Tell me what I'm getting */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">02.</span> Tell me what I'm getting
          </h2>
          <p className="leading-relaxed">
            Every person opening their inbox is asking the same thing: <strong className='text-[#1B3C53]'>what's in this for me?</strong> Answer that question immediately.
          </p>
          
          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 ">Examples that work:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>"Get your free 7-day marketing planner"</li>
              <li>"<strong className='text-white'>3 SEO tips</strong> that actually moved the needle for us"</li>
              <li>"Early access starts now (just for you)"</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            That's the point: you know exactly what's inside before clicking.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 3: Make them curious (but don't lie) */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">03.</span> Make them curious (but don't lie)
          </h2>
          <p className="leading-relaxed">
            Curiosity works, but you can't be manipulative. <strong className='text-[#1B3C53]'>"You won't BELIEVE what happened!!!"</strong> might get clicks once, but it destroys trust when the email is just a sale.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 ">Hint at value without overselling:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>"The one strategy we almost kept to ourselves"</li>
              <li>"Why most people mess this up (and how to fix it)"</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            You are creating a knowledge gap that makes the reader want to fill it. That's different from clickbait.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Point 4: Personalization is relevance */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">04.</span> Personalization is relevance
          </h2>
          <p className="leading-relaxed">
            Using someone's first name is fine, but <strong className='text-[#1B3C53]'>real personalization is about relevance.</strong> If I abandoned a cart, send me something about that. If I'm a small business owner, segment your content.
          </p>
          
          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 ">Examples of True Relevance:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>"Still interested in those running shoes?" (after I browsed them)</li>
              <li>"Marketing tools for teams under 10 people"</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            That actually feels like you know me, not just my name.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />
          
          {/* Point 5: Numbers work because our brains are lazy */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">05.</span> Numbers work because our brains are lazy
          </h2>
          <p className="leading-relaxed">
            Our brains prefer organized, predictable information. When you say <strong className='text-[#1B3C53]'>"5 Ways to Improve Your ROI,"</strong> people know exactly what they are signing up for.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 ">Specificity catches attention:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>"Top 3 trends we are seeing in 2025"</li>
              <li>"Save 15% (ends Sunday)"</li>
            </ul>
          </div>
          <p className="leading-relaxed">
            Specificity cuts through vagueness. "Check out our new stuff" tells me nothing. "3 new features you asked for" tells me everything.
          </p>
          
          <hr className="my-10 border-t-2 border-gray-200" />
          
          {/* Point 6: Test it */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">06.</span> Test it, because you don't know your audience
          </h2>
          <p className="leading-relaxed">
            You can't predict with certainty what subject line will perform best. Sometimes the one you think is brilliant tanks. Sometimes the boring one crushes it.
          </p>
          <p className="leading-relaxed">
            That's why you **test**. Send version A to 10% of your list, version B to another 10%, and send the winner to everyone else. After a few campaigns, patterns will emerge.
          </p>
          
          <hr className="my-10 border-t-2 border-gray-200" />
          
          {/* Point 7: Don't sound desperate */}
          <h2 className="text-3xl md:text-4xl font-[300] Poppins-font leading-tight mb-4">
            <span className="text-[#fff] ">07.</span> Don't sound desperate (or spammy)
          </h2>
          <p className="leading-relaxed">
            All caps, multiple exclamation points, words like "FREE!!!" or "ACT NOW!!!"— these don't make people excited. They make your email look like spam, and spam filters hate this stuff.
          </p>
          <p className="leading-relaxed">
            Write like a normal conversation because <strong className='text-[#1B3C53]'>confidence and calm beat urgency and panic every time.</strong>
          </p>

          {/* Conclusion */}
          <div className="bg-[#234C6A] text-white p-8 rounded-xl mt-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-[300] Poppins-font mb-4">The Bottom Line</h2>
            <p className="text-lg leading-relaxed">
              Your subject line needs to make someone curious enough to click without feeling tricked. Keep it short. Make the value obvious. Don't overthink it, but definitely <strong className='text-white'>don't underthink it either.</strong>
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The best subject line in the world won't save a mediocre email. But a mediocre subject line will absolutely kill a great one.
            </p>
            <h3 className="text-2xl font-[500] mt-8 text-[#fff]">Ready to boost your open rates?</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogFour;