// src/pages/Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../assets/blog-img/blogs.jpg";
import blogImage1 from "../assets/blog-img/blog1.jpg";
import blogImage2 from "../assets/blog-img/pexels-mikhail-nilov-7988079.jpg";
import blogImage3 from "../assets/blog-img/pexels-diva-plavalaguna-6937667.jpg";
import blogImage4 from "../assets/blog-img/pexels-tobias-dziuba-319638-927629.jpg";
import blogImage5 from "../assets/blog-img/pexels-mikhail-nilov-6981024.jpg";

const blogs = [
  {
    slug: "/modern-seo-best-practices",
    category: "SEO",
    title: "Modern SEO best practices for small and medium businesses",
    desc: "If you are still stuffing keywords into invisible footers, writing blog posts for 'Google robots'...",
    date: "August 7, 2025",
    image: blogImage1,
  },
  {
    slug: "/your-website-is-boring",
    category: "Web Design",
    title: "Your website is boring: Here’s how to fix that before visitors bounce",
    desc: "Welcome to the hard truth: if your website doesn’t grab attention in three seconds or less...",
    date: "August 7, 2025",
    image: blogImage2,
  },
  {
    slug: "/psychology-of-branding",
    category: "Branding",
    title: "The Psychology of Branding: Why your logo is only 10% of the story",
    desc: "Your logo is important because it’s a visual signature, a symbol, a badge...",
    date: "August 7, 2025",
    image: blogImage3,
  },
  {
    slug: "/social-media-that-sells",
    category: "Social Media",
    title: "Social Media that sells: Here's how you can also turn Likes into Leads",
    desc: "The vanity metrics are fun until you realize your 1,000 likes are not paying the bills...",
    date: "August 7, 2025",
    image: blogImage4,
  },
  {
    slug: "/digital-first-impressions",
    category: "Web Design",
    title: "Digital first impressions: What your homepage says about your business in 3 seconds or less",
    desc: "Digital first impressions: What your homepage says about your business in 3 seconds or less...",
    date: "August 7, 2025",
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
