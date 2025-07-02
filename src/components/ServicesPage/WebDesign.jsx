import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebDesignDevelopment() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-6 md:px-16 flex flex-col-reverse md:flex-row-reverse items-center gap-10">
      <div ref={textRef} className="md:w-1/2 text-left">
        <h2 className="text-5xl font-bold mb-6">WEB DESIGN & DEVELOPMENT</h2>
        <p className="text-lg mb-4">🚀 Elevate your brand with cutting-edge web solutions!</p>
        <ul className="space-y-3 text-lg">
          <li>✅ <strong>Custom Websites</strong> – Unique, fast, and user-friendly designs</li>
          <li>✅ <strong>Responsive Design</strong> – Pixel-perfect experience on all devices</li>
          <li>✅ <strong>SEO-Optimized</strong> – Rank higher and get more traffic</li>
          <li>✅ <strong>E-Commerce Development</strong> – Scalable, high-converting stores</li>
          <li>✅ <strong>Performance & Security</strong> – Speed, safety, and seamless UX</li>
          <li>✅ <strong>Web Apps</strong> – Interactive, dynamic, and high-performance</li>
        </ul>
         <button  className="mt-6 px-6 py-3 font-bold text-lg rounded-lg bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white shadow-lg hover:opacity-90 transition-all cursor-pointer">
          See Portfolio
        </button>
      </div>
      <div ref={videoRef} className="md:w-1/2">
        <video
          src="https://cdn.pixabay.com/video/2023/05/17/163491-827845629_large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
