import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const serviceRefs = useRef([]);
  serviceRefs.current = [];

  // Services data
  const services = [
    { title: "Website Development", desc: "Modern and responsive websites for businesses." },
    { title: "App Development", desc: "Custom mobile applications for Android & iOS." },
    { title: "Video Editing", desc: "High-quality video editing for content creators." },
    { title: "Marketing", desc: "Effective digital marketing strategies." },
    { title: "Ads Running", desc: "Targeted ad campaigns for maximum reach." },
    { title: "Graphic Designing", desc: "Creative and professional graphic designs." },
  ];

  useEffect(() => {
    serviceRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
         { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 },
        {
          opacity: 1,
          x:0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black text-white text-center py-16 px-4">
      {/* Vibrant Heading */}
      <h2 className="text-4xl font-bold">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="group bg-gray-900 p-8 rounded-xl shadow-lg text-left border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:border-yellow-400 hover:shadow-yellow-500/40 cursor-pointer relative overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            {/* Service Title */}
            <h3 className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-gray-400 mt-4">{service.desc}</p>

            {/* Hover Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-110 transition-transform duration-300">
                {"See Portfolio -->"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
