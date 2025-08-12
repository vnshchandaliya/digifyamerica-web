import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import headervideo from "../../assets/video/HeaderVideo.mp4";
import webdevimg from "../../assets/service-vector/webDev.png"
import Seoimg from "../../assets/service-vector/seo.png"
import graphicimg from "../../assets/service-vector/graphic.png"
import smmimg from "../../assets/service-vector/socialMedia.png"
import bradingimg from "../../assets/service-vector/brading.png"
import videoimg from "../../assets/service-vector/Video files-rafiki.png"



function Home() {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-28 left-0 w-full h-full object-cover"
  >
    <source src={headervideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (optional) */}
  <div className="absolute top-0 bg-[#00000092] left-0 w-full h-full  bg-opacity-40"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 pt-50 text-center text-white">
    <h1 className="text-3xl pt-4 sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight max-w-4xl">
      Fueling Digital Growth with <br className="hidden sm:block" />
      Bold Ideas & Smart Data
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl">
      DigifyAmerica isn’t just another digital marketing agency—we’re your growth partner in a hyperconnected world.
    </p>
    <button className="mt-40 px-6  py-2 border border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
      Watch & Learn
    </button>
  </div>
</section>

    <section className="bg-[#1174c3] py-0 text-white text-center px-4">
      {/* Text Content */}
      <div className="max-w-3x2 mx-auto mb-12 py-20">
        <h2 className="text-[28px] font-semibold sm:text-3xl md:text-4xl  mb-4">
          Everything your business needs, all under one roof. <br />
          {/* <span className=" font-sans font-semibold sm:text-3xl md:text-4xl">(or inside one tent)</span> */}
        </h2>
        <p className="text-2xl sm:text-[25px] font-[400] mb-6 opacity-[0.8]">
          Reaching travelers at every stage of their journey takes more than<br/> an
          awesome website, it takes a complete digital ecosystem.
        </p>
        <button className="border border-white text-white px-7 py-4 text-sm uppercase font-medium hover:bg-white hover:text-[#1174c3] transition">
          Connect with our experts
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        {/* <img
          src={ssimg}
          alt="Device showcase"
          className="w-[1941]  h-[797] max-w-10xl px-4"
        /> */}
      </div>
    </section>
     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={webdevimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Web Development
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
            Don’t keep your website as a digital business card but your hardest-working employee.
          </p>
        </div>
      </div>
    </section>

     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
       

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Search Engine Optimization (SEO)
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Boost website visibility, drive organic traffic, and rank higher on search engine results
           pages.
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={Seoimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section>

     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={graphicimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Graphic & Logo Design
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Your visual identity speaks before you do. Our design team creates:
          </p>
        </div>
      </div>
    </section>

     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
       

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Social Media Marketing
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
           Social Media Marketing boosts brand visibility, engagement, and sales through targeted
             strategies.
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={smmimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section>
<section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={bradingimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Branding
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
          Empowering brands with bold strategies, digital innovation, and creative storytelling that
                            drives lasting impact
          </p>
        </div>
      </div>
    </section>
     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
       

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Video Production
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
          Video production brings stories to life through creative filming, editing, and impactful
                            visual storytelling techniques.  
          </p>
        </div>
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={videoimg}
            alt="Device Mockup"
            className="max-w-[60vh] h-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
