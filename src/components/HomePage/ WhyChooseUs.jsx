import  { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const featuresRef = useRef([]);

  useEffect(() => {
    featuresRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
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

  const features = [
    { title: "Expert Team", description: "Our team consists of experienced professionals in web development, app development, and digital marketing." },
    { title: "Affordable Pricing", description: "We provide cost-effective solutions without compromising quality." },
    { title: "Fast Delivery", description: "We ensure timely project completion with top-notch efficiency." },
    { title: "24/7 Support", description: "Our dedicated support team is available around the clock for any assistance." },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-yellow-400">SuprAgency</span>?</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          We offer high-quality digital solutions tailored to your business needs. Here’s what sets us apart:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={(el) => (featuresRef.current[index] = el)} 
              className="flex items-start  space-x-4 opacity-0"
            >
            <div>
              <CheckCircle className="text-yellow-400 w-12 h-12" />
             </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
