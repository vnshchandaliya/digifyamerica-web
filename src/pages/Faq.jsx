import { useState } from "react";

import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import blogImage from "../assets/blog-img/blogs.jpg";

 const faqs = [
  {
    question: "What is Digify America?",
    answer:
      "Digify America is a full-service digital marketing agency based in the USA. We provide global digital marketing solutions that help brands grow through strategic, data-driven online campaigns.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Although we are located in the USA, Digify America works with clients across the globe. Our team is experienced in managing international marketing campaigns tailored to diverse markets and audiences.",
  },
 {
  question: "What services does Digify America offer?",
  answer: (
    
    <div className="text-left">
      We provide a wide range of digital marketing services, including:
      
  <ul className="list-disc ml-5 space-y-1 pt-1">
    
    <li>Search Engine Optimization (SEO)</li>
    <li>Pay-Per-Click (PPC) Advertising</li>
    <li>Social Media Marketing & Management</li>
    <li>Content Marketing</li>
    <li>Email Marketing</li>
    <li>Website Development</li>
    <li>Branding & Creative Services</li>
    <li>Digital Strategy & Consulting</li>
  </ul>
</div>

  ),
},

  {
    question: "Which industries do you specialize in?",
    answer:
      "Digify America works with businesses in multiple industries, including e-commerce, technology, real estate, healthcare, education, finance, hospitality, and more. Our strategies are customized for each industry’s unique needs.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary by service—SEO usually takes 3–6 months, while PPC and social media campaigns can deliver faster results. We continuously optimize campaigns to ensure long-term growth.",
  },
  {
    question: "Do you offer customized digital marketing plans?",
    answer:
      "Absolutely. Every business is different, so we create personalized strategies based on your goals, budget, and target audience.",
  },
  {
    question: "Can you help improve my website’s Google ranking?",
    answer:
      "Yes. Our SEO experts focus on on-page optimization, technical SEO, content strategy, and quality backlinks to improve your website’s search engine ranking and visibility.",
  },
  {
    question: "How do I get started with Digify America?",
    answer:
      "Simply contact us through our website or schedule a free consultation. We will discuss your goals, review your digital presence, and recommend a tailored marketing plan.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track KPIs such as traffic, leads, conversions, engagement, and ROI using advanced analytics tools. You receive transparent, easy-to-understand reports regularly.",
  },
  {
    question: "What makes Digify America different from other agencies?",
    answer:
      "We combine U.S.-based expertise with global execution. Our approach is data-driven, personalized, and results-focused. We prioritize communication, transparency, and long-term partnerships.",
  },
];



const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title>FAQ | Common Questions Answered</title>
<meta name="description" content="Find answers to common questions about our services, pricing, support, and processes." />

    </Helmet>
    <section className="bg-[#D2C1B6] text-[#234C6A]">

      {/* HERO SECTION */}
      <section
        loading="lazy"
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{ backgroundImage: `url(${blogImage})` }}
      >
        <div className="absolute inset-0 bg-[#000000c1] z-10"></div>

        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-center text-[60px] font-[300] fontplayfair text-[#D2C1B6]">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ LIST SECTION */}
       <h1 className='
  absolute 
  text-gray-50 
  font-bold 
  uppercase 
  // Mobile & Small Screens
  text-[1.49rem] 
  fontplayfair 
 mt-21
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2
  whitespace-nowrap 
  // Medium Screens (md)
  md:text-[10rem] 
  
  // Large Screens (lg)
  lg:text-[5rem] 
'>
       Frequently Asked Questions
      </h1>
      <section   className="features-section bg-[#D2C1B6] py-32 px-4 text-center ">
        <h2 className="text-[28px] md:text-[60px] font-[600] fontplayfair  text-[#1B3C53] mb-11">
       FAQ
      </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl p-5 bg-white shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900 text-left">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 cursor-pointer ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
     </>
  );
};

export default FaqSection;
