import {Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';


const VideoEditingPortfolio = () => {



    const InstaVideos=[
        "https://www.instagram.com/reel/DGpMIhUTLHy/?utm_source=ig_web_copy_link",
        "https://www.instagram.com/reel/DGn64WNvyOZ/?utm_source=ig_web_copy_link",
        "https://www.instagram.com/reel/DGn2R6dyIHW/?utm_source=ig_web_copy_link",
        "https://www.instagram.com/reel/DGQjoiGPncM/?utm_source=ig_web_copy_link"
    ];

  return (
    <div className="-mt-20 bg-black text-white min-h-screen px-6 md:px-12 py-16 relative">

      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="https://videos.pexels.com/video-files/3129902/3129902-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-transparent opacity-50"></div>
        </div>
        

      
      {/* Hero Section */}
      <div className="relative text-center max-w-4xl mx-auto mt-30 mb-16 z-40">
        <h1 className="text-4xl md:text-5xl font-bold">Professional Video Editing Services</h1>
        <p className="text-gray-400 mt-4">We specialize in high-quality video editing, from promotional content to cinematic storytelling.</p>
      </div>
      
      {/* Portfolio Section */}
      <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-30">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div 
            key={item}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-40 bg-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold">Editing Project {item}</h3>
            <p className="text-gray-400 mt-2">High-quality video edits tailored for your brand and business needs.</p>
          </motion.div>
        ))}
      </div>
      
      {/* Instagram Video Editing Section */}
      <div className="relative mt-16 text-center z-30">
        <h2 className="text-3xl font-bold mb-6">Instagram Video Editing</h2>
        <p className="text-gray-400">We craft engaging and visually striking Instagram videos that captivate audiences and enhance social media presence. Our team ensures every edit aligns with the latest trends and brand aesthetics to maximize engagement. </p>
        
        {/* Grid for Instagram Video Embeds */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 z-30">
            {InstaVideos.map((el,ind)=>{
             return  <InstagramEmbed
               key={ind}
                url={el}
                maxWidth={500}
                hideCaption={false}
                />
            })}
            
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="relative mt-16 text-center z-30">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((item) => (
            <motion.div 
              key={item}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="relative text-gray-300 italic"> `{"Exceptional video editing services that brought our vision to life!"}`</p>
              <div className="flex items-center justify-center mt-4">
                <Star className="text-yellow-400" />
                <Star className="text-yellow-400" />
                <Star className="text-yellow-400" />
                <Star className="text-yellow-400" />
                <Star className="text-yellow-400" />
              </div>
              <p className="text-gray-500 mt-2">- Client Name</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="relative mt-16 text-center z-30">
        <h2 className="text-3xl font-bold">Ready to Transform Your Videos?</h2>
        <p className="text-gray-400 mt-2">Lets create stunning visuals together. Get in touch today!</p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-white transition-all duration-300">Get a Free Consultation</button>
      </div>
    </div>
  );
};

export default VideoEditingPortfolio;
