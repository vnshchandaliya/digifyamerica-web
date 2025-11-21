// src/pages/Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../assets/blog-img/blogs.jpg";
import blogImage1 from "../assets/blog-img/seo-7397379_1920.png";
import blogImage2 from "../assets/blog-img/social-3408791_1920.jpg";
import blogImage3 from "../assets/blog-img/business-man-3157759_1920.jpg";
import blogImage4 from "../assets/blog-img/email-3249062_1920.png";
import blogImage5 from "../assets/blog-img/social-media-7213158_1920.png";

const blogs = [
  {
    slug: "/modern-seo-best-practices",
    category: "SEO",
    title: "On-page vs off-page SEO: What's the real difference? ",
    desc: "Way too many people get stuck on this question. They treat on-page and off-page SEO like they are two completely different skill sets, when really, they are just two sides of the same coin. ",
    date: "October 29, 2025",
    image: blogImage1,
  },
  {
    slug: "/social-media-campaigns",
    category: "social media",
    title: "The psychology behind viral social media campaigns ",
    desc: "Some videos or memes explode across the internet leaving us wonder, why that one? Why do some posts rack up millions of views overnight while others simply vanish? The secret has less to do with algorithms and more to do with human psychology. ",
 date: "October 29, 2025",
    image: blogImage2,
  },
  {
    slug: "/optimize-ad-performance",
    category: "ad performance",
    title: "How to use data to optimize ad performance  ",
    desc: "Data. It’s the word every marketer throws around, but few actually use effectively. The truth is, data is like a GPS for your marketing campaigns—without it, you are just driving around hoping you will end up somewhere profitable.  ",
 date: "October 29, 2025",
    image: blogImage3,
  },
  {
    slug: "/email-subject",
    category: "email",
    title: "How to write email subject lines that get clicked",
    desc: "People spend days perfecting their email copy, tweaking designs, A/B testing buttons and then slap on whatever subject line comes to mind first. That subject line is literally the only thing standing between your carefully crafted email and the trash folder. If it doesn't work, nothing else gets a chance to. ",
 date: "October 29, 2025",
    image: blogImage4,
  },
  {
    slug: "/brand-voice",
    category: "branding",
    title: "How to define your brand voice for social media ",
    desc: "It's exhausting to read and even worse to be the person writing it. Here's the thing: your brand already has a voice. You need to figure out what it actually is instead of copying whatever seems to be working for everyone else.  ",
 date: "October 29, 2025",
    image: blogImage5,
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#D2C1B6]  text-[#234C6A] pt-30">
      {/* Hero Section */}
      <section loading="lazy"
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(${blogImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] z-10"></div>
        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-center  text-[60px] font-[300] mx-19 fontplayfair text-[#D2C1B6]">Our Blogs</h1>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-10 px-6 ">
       
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`${blog.slug}`}
              className="bg-[#234C6A] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition block"
            >
              <img
              
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-[#FFF5E1] text-[#000] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold mb-2 text-[#D2C1B6]">{blog.title}</h3>
                <p className="text-white text-sm mb-3">{blog.desc}</p>
                <p className="text-gray-400 text-xs">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Blogs;
