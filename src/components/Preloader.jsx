import { useEffect, useState } from "react";
import headervideo from "../assets/video/preload.mp4"; 

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5 sec ke baad preloader hide
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#f9f9f9] flex items-center justify-center z-100">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-[50vh] h-[50vh] mx-auto mt-59 object-cover"
      >
        <source src={headervideo} type="video/mp4" />
      </video>

      {/* Overlay color (optional dark effect) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center text / logo */}
      {/* <h1 className="relative text-white text-3xl font-bold animate-pulse">
        Loading...
      </h1> */}
    </div>
  );
}
