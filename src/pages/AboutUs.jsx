// import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSlider from "../components/HomePage/HeroSlider";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none", // Ensures it animates once per scroll
        },
      });
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-16 lg:px-24">
      <HeroSlider></HeroSlider>
        
      </div>
    )
};

export default AboutUs;
