import React from 'react'
import Html from "../assets/partnerIcons/html.png";
import Css from "../assets/partnerIcons/css.png";
import Js from "../assets/partnerIcons/javascript.png";
import ReactLogo from "../assets/partnerIcons/react.png";
import Tailwind from "../assets/partnerIcons/tailwindcss.png";
import Vite from "../assets/partnerIcons/vitelogo.png";
import Bootsrap from "../assets/partnerIcons/Bootstrap.png";
import Php from "../assets/partnerIcons/PHP.png";
import Wordpress from "../assets/partnerIcons/WordPress.png"


const PartnerSection = () => {
  return (
    <>
    
      <section className="py-31 px-4 bg-[#ad9a9a35] text-center">
        
      <h2 className="relative text-center pt-10 text-[60px] font-[300] mx-19 fontplayfair text-[#FAA533] whitespace-nowrap">
        Our partners:
      </h2>
      <br /><br />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        <img src={Html} alt="LiveRez" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Css} alt="YesBookit" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Js} alt="Escapia" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={ReactLogo} alt="Track" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Tailwind} alt="Barefoot" className="mx-auto h-12 md:h-16 object-contain" />
        <img src={Vite} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Bootsrap} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Php} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Wordpress} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
      </div>
    </section>
    </>
  )
}

export default PartnerSection
