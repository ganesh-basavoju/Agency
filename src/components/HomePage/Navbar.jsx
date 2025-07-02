import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.onscroll=()=>{setIsServicesOpen(false)};
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen,isServicesOpen]);

  return (
    <div className="bg-transparent text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-yellow-400 hover:text-yellow-500 transition duration-300">
          Agency Services
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <span className="hover:text-yellow-400 cursor-pointer transition duration-300">
              Services
            </span>
            {isServicesOpen && (
              <div className="fixed w-[90%] h-[300px] left-11 right-0 top-16 bg-gray-900 rounded-b-3xl shadow-2xl p-8 animate-fadeIn " onMouseLeave={() => setIsServicesOpen(false)} >
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-4">E-Commerce</h3>
                   <Link to="/shopify" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 relative">
                  Shopify  
                 
                 </Link>
                    <Link to="/magento" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Magento
                    </Link>
                    <Link to="/bigcommerce" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      BigCommerce
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-4">Development</h3>
                    <Link to="/web-development" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Web Development
                    </Link>
                    <Link to="/mobile-apps" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Mobile Apps
                    </Link>
                    <Link to="/ai-ml" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      AI & ML
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-4">Marketing</h3>
                    <Link to="/fb-ads" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      FB Ads
                    </Link>
                    <Link to="/google-ads" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Google Ads
                    </Link>
                    <Link to="/organic-growth" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Organic Growth
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-4">Design & Media</h3>
                    <Link to="/video-editing" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Video Editing
                    </Link>
                    <Link to="/posters-design" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300">
                      Posters Design
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none hover:text-yellow-500 transition duration-300"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-start p-6 md:hidden z-50 overflow-y-scroll">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-yellow-400 hover:text-yellow-500 transition duration-300 mb-6"
          >
            <X size={30} />
          </button>

          {/* Mobile Menu Links */}
          <h1 className="text-3xl text-yellow-300 hover:text-yellow-400 transition duration-300 mb-4 cursor-no-drop "draggable  >Agency.com</h1>
          <Link to="/" className="text-2xl hover:text-yellow-400 transition duration-300 mb-4" onClick={() => setIsOpen(false)}>
            Home
          </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-2xl hover:text-yellow-400 transition duration-300 mb-4 "
            >
              Services
            </button>

          {/* Services Dropdown in Mobile */}
          <div className="w-full">
          
            {isServicesOpen && (
              <div className="pl-4">
                <div>
                  <h3 className="text-yellow-400 font-bold mb-2">E-Commerce</h3>
                  <Link to="/shopify" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Shopify
                  </Link>
                  <Link to="/magento" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Magento
                  </Link>
                  <Link to="/bigcommerce" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    BigCommerce
                  </Link>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold mb-2">Development</h3>
                  <Link to="/web-development" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Web Development
                  </Link>
                  <Link to="/mobile-apps" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Mobile Apps
                  </Link>
                  <Link to="/ai-ml" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    AI & ML
                  </Link>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold mb-2">Marketing</h3>
                  <Link to="/fb-ads" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    FB Ads
                  </Link>
                  <Link to="/google-ads" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Google Ads
                  </Link>
                  <Link to="/organic-growth" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Organic Growth
                  </Link>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-bold mb-2">Design & Media</h3>
                  <Link to="/video-editing" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Video Editing
                  </Link>
                  <Link to="/posters-design" className="block hover:text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-lg transition duration-300 mb-2">
                    Posters Design
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="text-2xl hover:text-yellow-400 transition duration-300 mb-4" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="text-2xl hover:text-yellow-400 transition duration-300 mb-4" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;