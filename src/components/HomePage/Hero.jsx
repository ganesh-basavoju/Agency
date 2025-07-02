import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4  overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="https://cdn.pixabay.com/video/2018/07/04/17075-278405107_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0  bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mt-10 md:mt-20 text-white w-full max-w-4xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Your One-Stop Agency for Digital Solutions
        </h1>
        <p className="mt-4 mb-6 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          We provide top-tier services in website development, app development,
          video editing, marketing, ad campaigns, and graphic designing.
        </p>
        <Link 
          to="/services" 
          className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore Services
        </Link>
      </div>

      {/* Slider Section */}
      <div className="relative z-10 w-full max-w-5xl mt-6 px-4">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
