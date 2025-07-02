import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sindhu",
    role: "CEO, Tech Solutions",
    comment:
      "Agency Services transformed our business! Their expertise in e-commerce and marketing helped us achieve a 200% increase in sales. Highly recommended!",
    image: "https://cdn.pixabay.com/photo/2022/05/24/06/23/indian-face-7217718_960_720.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Founder, Creative Studio",
    comment:
      "The team at Agency Services is incredibly talented. They delivered our mobile app on time and within budget. We couldn't be happier with the results!",
    image: "https://cdn.pixabay.com/photo/2024/11/22/13/20/man-9216455_1280.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Owner, Fashion Boutique",
    comment:
      "The posters and designs created by Agency Services are stunning. They perfectly captured our brand's essence. Thank you!",
    image: "https://cdn.pixabay.com/photo/2024/06/28/18/47/business-8859960_1280.jpg",
  },
];

export default function WebDesignDevelopment() {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section ref={testimonialsRef} className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-12">Testimonials</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6">
            <div className="relative bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="absolute top-[-20px] left-10 w-6 h-6 bg-gray-800 rotate-45"></div>
              <p className="text-gray-300 italic">`{testimonial.comment}`</p>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
