// src/pages/Blogs.jsx
import React from 'react';
import { blogPosts } from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  return (
    <>
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/EmailPageHeader.png")`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-5xl px-4 md:px-8 lg:px-40">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-6">
            Our Blogs
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 relative z-20 mt-[-50px] md:mt-[-100px] overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(250px, auto)]">
            {/* यह लाइन सभी ब्लॉग कार्ड को automatically generate करेगी */}
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
// import React from 'react'
// import { useParams, Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

// import blogImage1 from '../assets/blog-img/blog1.jpg';
// import blogImage2 from '../assets/blog-img/pexels-mikhail-nilov-7988079.jpg';
// import blogImage3 from '../assets/blog-img/pexels-diva-plavalaguna-6937667.jpg';
// import blogImage4 from '../assets/blog-img/pexels-tobias-dziuba-319638-927629.jpg';
// import blogImage5 from '../assets/blog-img/pexels-mikhail-nilov-6981024.jpg';
// import BlogOne from './modern-seo-best-practices';
// import BlogTwo from './your-website-is-boring';
// import BlogThree from './psychology-of-branding';
// import BlogFour from './social-media-that-sells';
// import BlogFive from './digital-first-impressions';

// <Routes>
//         <Route path="/blogs/modern-seo-best-practices/" element={<BlogOne />} />
//         <Route path="/blogs/your-website-is-boring/" element={<BlogTwo/>}/>
//         <Route path="/blogs/psychology-of-branding/" element={<BlogThree />}/>
//         <Route path="/blogs/social-media-that-sells/" element={<BlogFour />}/>
//         <Route path="/blogs/digital-first-impressions/" element={<BlogFive />}/>
//         </Routes>

// const Blogs = () => {
//   return (
//     <>
//     <section
//         className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
//         style={{
//           backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/EmailPageHeader.png")`,
//         }}
//       >
//         <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
//         <div className="relative z-20 max-w-5xl px-4 md:px-8 lg:px-40">
//           {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Owner Acquisition</h3> */}
//           <h1 className="text-3xl md:text-4xl lg:text-[44px] font-light leading-tight mb-6">
//             Our Blogs
//           </h1>
//           {/* <a
//             href="#"
//             className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
//           >
//             Chat with our team!
//           </a> */}
//         </div>
//       </section>
//      <div className="bg-gray-100 relative z-20 mt-[-50px] md:mt-[-100px] overflow-x-hidden">
//       <div className="container mx-auto px-4 md:px-8 lg:px-40">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(250px, auto)]">
//       <Link to="/modern-seo-best-practices/" >
//        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden  transition-shadow">
//       <img
//         className="h-48 w-full object-cover"
//         src={blogImage1}
//         alt="SEO blog"
//       />
//       <div className="p-4">
//         <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
//           SEO
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-gray-800">
//           Modern SEO best practices for small and medium businesses
//         </h3>
//         <p className="mt-1 text-gray-600 text-sm">
//           If you are still stuffing keywords into invisible footers, writing blog posts for “Google robots”...
//         </p>
//         <p className="text-gray-400 text-xs mt-3">August 7, 2025</p>
//       </div>
//     </div>
//     </Link>
//     <Link to="/your-website-is-boring/">
//     <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden  transition-transform">
//       <img
//         className="h-48 w-full object-cover"
//         src={blogImage2}
//         alt="Web Design blog"
//       />
//       <div className="p-4">
//         <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
//           Web Design
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-gray-800">
//           Your website is boring: Here’s how to fix that before visitors bounce
//         </h3>
//         <p className="mt-1 text-gray-600 text-sm">
//          Welcome to the hard truth: if your website doesn’t grab attention in three seconds or less, it’s already lost...
//         </p>
//         <p className="text-gray-400 text-xs mt-3">August 7, 2025</p>
//       </div>
//     </div>
//     </Link>
//     <Link to="/blogs/psychology-of-branding/">
//     <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden  transition-transform">
//       <img
//         className="h-48 w-full object-cover"
//         src={blogImage3}
//         alt="Web Design blog"
//       />
//       <div className="p-4">
//         <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
//           Web Design
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-gray-800">
//         The Psychology of Branding: Why your logo is only 10% of the story
//         </h3>
//         <p className="mt-1 text-gray-600 text-sm">
//           Your logo is important because it’s a visual signature, a symbol, a badge
//         </p>
//         <p className="text-gray-400 text-xs mt-3">August 7, 2025</p>
//       </div>
//     </div>
//     </Link>
//     <Link to="/blogs/social-media-that-sells/">
//     <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden  transition-transform">
//       <img
//         className="h-48 w-full object-cover"
//         src={blogImage4}
//         alt="Web Design blog"
//       />
//       <div className="p-4">
//         <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
//           Web Design
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-gray-800">
//    Social Media that sells: Here's how you can also turn Likes into Leads
//         </h3>
//         <p className="mt-1 text-gray-600 text-sm">
//           The vanity metrics are fun until you realize your 1,000 likes are not paying the bills
//         </p>
//         <p className="text-gray-400 text-xs mt-3">August 7, 2025</p>
//       </div>
//     </div>
//     </Link>
//     <Link to="/blogs/digital-first-impressions/">
//     <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden  transition-transform">
//       <img
//         className="h-48 w-full object-cover"
//         src={blogImage5}
//         alt="Web Design blog"
//       />
//       <div className="p-4">
//         <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
//           Web Design
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-gray-800">
//         Digital first impressions: What your homepage says about your business in 3 seconds or less
//         </h3>
//         <p className="mt-1 text-gray-600 text-sm">
//          Digital first impressions: What your homepage says about your business in 3 seconds or less
//         </p>
//         <p className="text-gray-400 text-xs mt-3">August 7, 2025</p>
//       </div>
//     </div>
//     </Link>
   
   
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Blogs
