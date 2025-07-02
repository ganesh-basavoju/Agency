import  { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "SMMA Silver",
    price: "₹14,999",
    features: [
      "Video Editing - 20 Reels",
      "Posters - 15",
      "Facebook Ads",
      "Social Media Management",
      "Organic Growth (3 months)",
      "Google Ads (if required)",
    ],
  },
  {
    title: "SMMA Gold",
    price: "₹18,999",
    features: [
      "Video Editing - 30 Reels",
      "Posters - 25",
      "Facebook Ads",
      "Social Media Management",
      "Organic Growth (3 months)",
      "Google Ads (if required)",
    ],
  },
  {
    title: "SMMA Platinum",
    price: "₹22,999",
    features: [
      "Video Editing - 40 Reels",
      "Posters - 35",
      "Facebook Ads",
      "Social Media Management",
      "Organic Growth (3 months)",
      "Google Ads (if required)",
    ],
  },
];

const Combos = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 ,x:index%2===0?-100:100,},
        {
          opacity: 1,
          x:0,
          y: 0,
          duration: 1,
          delay:index*0.2,
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
    <div ref={sectionRef} className="py-12 bg-black text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Our Exclusive Packs</h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-900 rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Title & Price */}
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {service.title}
              </h3>
              <p className="text-xl font-bold text-yellow-500 mb-4">{service.price}</p>

              {/* Features List */}
              <ul className="text-gray-300 text-sm space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    ✅ <span className="ml-2 text-start">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                className="mt-6 w-full px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 cursor-crosshair"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Combos;
