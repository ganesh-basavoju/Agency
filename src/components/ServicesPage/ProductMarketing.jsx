import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductMarketing = () => {
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse   md:flex-row gap-8 items-center">
        <div>
         <span className="text-4xl text-center mb-6">✨ 💎 🌀</span>
          <h2 className="text-3xl md:text-5xl mt-2.5 text-cen font-extrabold leading-tight text-white">
            PRODUCT   MARKETING
          </h2>
          <p className="mt-4 text-gray-300 text-lg text-justify lg:text-pretty">
            
            Yes, product marketing includes Facebook Ads, Google Ads, influencer
            marketing, email campaigns, and other promotional strategies that
            help position a product in the market and drive sales.
          </p>
          <ul className="mt-6 space-y-3 text-lg text-gray-300">
            <li className="flex items-center">✅ <span className="ml-2">Digital Ads: Facebook Ads, Google Ads, Instagram Ads</span></li>
            <li className="flex items-center">✅ <span className="ml-2">SEO & Content Marketing: Blog posts, landing pages</span></li>
            <li className="flex items-center">✅ <span className="ml-2">Social Media Campaigns: Organic & paid promotions</span></li>
            <li className="flex items-center">✅ <span className="ml-2">Influencer Marketing: Collaborating with influencers</span></li>
            <li className="flex items-center">✅ <span className="ml-2">Email Marketing: Newsletters, promotional emails</span></li>
            <li className="flex items-center">✅ <span className="ml-2">Video Marketing: Product demos, testimonials</span></li>
          </ul>
          <button  className="mt-6 px-6 py-3 font-bold text-lg rounded-lg bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white shadow-lg hover:opacity-90 transition-all cursor-pointer">
        See Portfolio
        </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <video
            src="https://cdn.pixabay.com/video/2019/09/04/26537-357886155_large.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full h-[300px] object-cover shadow-lg"
          />
          <video
            src="https://cdn.pixabay.com/video/2023/05/24/164381-830461330_large.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full h-[270px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductMarketing;
