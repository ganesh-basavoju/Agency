import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const button = buttonRef.current;

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

    gsap.fromTo(
      button,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen flex flex-col justify-end items-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2024/02/02/198918-909322169_large.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-4xl pb-16">
        {/* Logo */}
        <div className="bg-white px-6 py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 mb-6">
          <span className="text-black font-bold text-lg">🌟 Agency xyz</span>
        </div>

        {/* Heading */}
        <h1 ref={textRef} className="text-5xl md:text-6xl font-extrabold text-white uppercase tracking-wide leading-tight">
          The Services <br /> We Offer
        </h1>

        {/* Subtext */}
        <p ref={textRef} className="text-lg text-gray-300 mt-4 max-w-lg mx-auto">
          We are an award-winning design agency that enables brands to make their mark in history.
        </p>

        {/* Call-to-Action Button */}
        <button
          ref={buttonRef}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          WORK WITH US
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
