import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandingStrategy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    // Text Animation: Fade & Slide Up
    gsap.fromTo(
      text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Video Animation: Fade & Scale In
    gsap.fromTo(
      video,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col-reverse gap-1.5 lg:flex-row items-center justify-center w-full mb-10 bg-black px-6 lg:px-16 py-16"
    >
      {/* Left Section: Text Content */}
      <div ref={textRef} className="w-full lg:w-1/2 space-y-4">
        <span className="text-4xl">✨ 💎 🌀</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          BRANDING STRATEGY
        </h1>
        <p className="text-lg text-gray-400 max-w-lg">
          Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on your website.
        </p>
        <button  className="mt-6 px-6 py-3 font-bold text-lg rounded-lg bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white shadow-lg hover:opacity-90 transition-all cursor-pointer ">
        See Portfolio
        </button>
      </div>
     

      {/* Right Section: Video */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div ref={videoRef} className="relative w-full max-w-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-xl"
          >
            <source src="https://cdn.pixabay.com/video/2019/06/17/24497-344562750_large.mp4" type="video/mp4" />
          </video>
          {/* Play Button Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <span className="text-white text-3xl">▶️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingStrategy;
