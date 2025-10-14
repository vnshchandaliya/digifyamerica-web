import React from 'react'
import Html from "../assets/partnerIcons/html.png";
import Css from "../assets/partnerIcons/css.png";
import Js from "../assets/partnerIcons/javascript.png";
import ReactLogo from "../assets/partnerIcons/react.png";
import Tailwind from "../assets/partnerIcons/tailwindcss.png";
import NodeJs from "../assets/partnerIcons/nodeJs.png";
import MogoDb from "../assets/partnerIcons/MogoDb.png";
import Php from "../assets/partnerIcons/PHP.png";
import Wordpress from "../assets/partnerIcons/WordPress.png"


const PartnerSection = () => {
  return (
    <>
    
      <section className="py-31 px-4  text-center">
        
      <h2 className="relative text-center pt-18 text-[29px] md:text-[50px] font-[300] mx-1 fontplayfair text-[#1B3C53] whitespace-nowrap">
        Our partners:
      </h2>
      <br /><br />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        <img src={Html} alt="LiveRez" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Css} alt="YesBookit" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Js} alt="Escapia" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={ReactLogo} alt="Track" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Tailwind} alt="Barefoot" className="mx-auto h-12 md:h-16 object-contain" />
        <img src={NodeJs} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={MogoDb} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Php} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
        <img src={Wordpress} alt="RNS" className="mx-auto h-12 md:h-30 object-contain" />
      </div>
    </section>
    </>
  )
}

export default PartnerSection
