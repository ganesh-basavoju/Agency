
import Combos from "../components/HomePage/Combos";
import Portfolio from "../components/HomePage/portofolio";
import Testimonials from "../components/HomePage/Testimonials";
import OurServices from "../components/HomePage/OurServices";
import Hero from "../components/HomePage/Hero";
import WhyChooseUs from "../components/HomePage/ WhyChooseUs";


const Home=()=>{
  return (
    <div className="bg-black  text-white  min-h-screen -mt-20">
      <Hero/>
      <Combos/>
      <OurServices/>
      <Portfolio/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
};

export default Home;
