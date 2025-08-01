import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import headervideo from "../../assets/video/headervideo.mp4";
import ssimg from "../../assets/images/img1.jpg"
import stimg from "../../assets/images/img2.jpg"

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
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={headervideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (optional) */}
  <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight max-w-4xl">
      Digital Marketing Solutions for <br className="hidden sm:block" />
      Vacation Rental Professionals
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl">
      eCommerce Platforms and Strategies to Grow Your Online Business
    </p>
    <button className="mt-8 px-6 py-2 border border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
      Watch & Learn
    </button>
  </div>
</section>

    <section className="bg-[#1174c3] py-0 text-white text-center px-4">
      {/* Text Content */}
      <div className="max-w-3x2 mx-auto mb-12 py-20">
        <h2 className="text-[28px] font-semibold sm:text-3xl md:text-4xl  mb-4">
          Everything your business needs, all under one roof <br />
          <span className=" font-sans font-semibold sm:text-3xl md:text-4xl">(or inside one tent)</span>
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
        <img
          src={ssimg}
          alt="Device showcase"
          className="w-[1941]  h-[797] max-w-10xl px-4"
        />
      </div>
    </section>
     <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={stimg}
            alt="Device Mockup"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-35">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1174c3]">
            Direct Booking Websites
          </h2>
          <div className="w-35 h-2   bg-gray-300  my-13 mx-auto md:mx-49" />
          <p className="text-gray-600 text-base font-lg md:text-lg leading-relaxed">
            Increase revenue with our Rezfusion suite of high performance, 
            beautiful, direct booking websites that are built to address the needs 
            of vacation rental companies of all sizes.
          </p>
        </div>
      </div>
    </section>
<Footer />
    </>
  );
}

export default Home;
