import React from 'react';
import blogImage2 from '../assets/blog-img/social-3408791_1920.jpg';

const BlogTwo = () => {
  return (
    <section className="bg-[#D2C1B6] text-[#234C6A]">
      <div className="container mx-auto px-4 py-12 pt-34 ">
        {/* Inner container for max width and a clean look */}
        <div className=" max-w-4xl mx-auto ">

          <h2 className="text-center text-[40px] font-[300] mx-19 fontplayfair text-[#1B3C53] leading-14 ">
            On-page vs Off-page SEO: What's the Real Difference?
          </h2>
 
          <p className="text-xl leading-relaxed mt-8">
            Way too many people get stuck on this question. They treat on-page and off-page SEO like they are two completely different skill sets, when really, they are just <span className="text-[#1B3C53]">two sides of the same coin.</span>
          </p>

          <p className="mt-4 leading-relaxed">
            Think of it this way: on-page SEO is what you control directly on your website. Off-page SEO? <span className="text-[#1B3C53]">That's your reputation out there in the wild internet.</span> You need both, and honestly, one without the other is pretty useless.
          </p>

          {/* Hero Image */}
          <div className="flex justify-center my-10">
            <img
              src={blogImage2}
              alt="SEO Strategy: On-page vs Off-page"
              className="w-full max-w-4xl h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Section: What is On-page SEO? */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">01.</span> What is On-page SEO?
          </h2>
          <p className="leading-relaxed">
            This is the stuff happening right on your site. Everything from the words on your pages to how fast they load when someone clicks through. <strong className='text-[#1B3C53]'>You are in full control here.</strong>
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Key Components (The "Checklist"):</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Keywords:</strong> Use them where they make sense (headings, content, meta descriptions). If it reads weird, it's over-optimized.
              </li>
              <li>
                <strong>Meta Tags and Titles:</strong> Your first impression in search results. Keep it clear, relevant, and compelling.
              </li>
              <li>
                <strong>Internal Linking:</strong> Help people (and Google) find your great content by linking related pages on your site.
              </li>
              <li>
                <strong>Content Quality:</strong> Write stuff people <strong className='text-white'>actually want to read.</strong> Google's gotten smart about detecting fluff.
              </li>
              <li>
                <strong>Speed & Mobile-First:</strong> If your site is slow or broken on mobile, fix that first. Nothing else matters.
              </li>
            </ul>
          </div>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Section: What is Off-page SEO? */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">02.</span> What is Off-page SEO?
          </h2>
          <p className="leading-relaxed">
            This is where things get interesting because you are <strong className='text-[#1B3C53]'>not in full control anymore.</strong> This is your site's reputation and credibility built by the rest of the internet.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <h3 className="text-xl font-semibold mb-2 text-[#fff]">Key Components (The "Validation"):</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Backlinks:</strong> When another site links to you, it says, "Hey, this page is legit." Quality (from respected sites) beats quantity.
              </li>
              <li>
                <strong>Brand Mentions:</strong> People talking about, writing about, or referencing you—even without a direct link—builds authority.
              </li>
              <li>
                <strong>Social Media:</strong> Drives traffic and engagement, creating opportunities for others to link to your content.
              </li>
              <li>
                <strong>PR and Partnerships:</strong> Getting featured, quoted as an expert, or collaborating—all build external credibility.
              </li>
            </ul>
          </div>
          <p className="leading-relaxed">
            The thing about off-page SEO is you can't just manufacture it. <strong className='text-[#1B3C53]'>You earn it</strong> by consistently putting out good work and building real relationships.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Section: Why you actually need both */}
          <h2 className="text-3xl md:text-4xl font-[300] leading-tight Poppins-font mb-4">
            <span className="text-[#fff] ">03.</span> Why You Actually Need Both
          </h2>
          <p className="leading-relaxed">
            We've seen sites with perfect on-page optimization that barely rank because nobody links to them. We've also seen sites with tons of backlinks that tank because the actual site experience is terrible.
          </p>

          <div className="bg-[#234C6A] p-6 rounded-lg my-6 border-l-4 border-[#fff] text-white">
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong className='text-white'>On-page</strong> gets you ready (a solid foundation).
              </li>
              <li>
                <strong className='text-white'>Off-page</strong> gets you noticed (external validation).
              </li>
            </ul>
          </div>

          <p className="leading-relaxed">
            Miss either piece and you are leaving ranking potential on the table.
          </p>

          <hr className="my-10 border-t-2 border-gray-200" />

          {/* Final Takeaway */}
          <div className="bg-[#234C6A] text-white p-8 rounded-xl mt-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl Poppins-font font-[300] mb-4">The Actual Takeaway</h2>
            <p className="text-lg leading-relaxed">
              Stop overthinking which one to focus on. Start with **on-page** because you can control it. Then work on **off-page** by creating content that's genuinely worth linking to and sharing.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              <strong className='text-white'>SEO is about being genuinely useful and building trust.</strong> The sites that win long-term are the ones people actually want to link to, share, and come back to. Be one of those.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTwo;