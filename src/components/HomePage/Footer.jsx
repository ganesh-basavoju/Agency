import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white">Our Company</h2>
            <p className="mt-2 text-sm">
              We provide top-notch web solutions to help businesses grow online. 
              Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500">Services</a></li>
              <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-white">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-yellow-500 text-lg"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-500 text-lg"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-500 text-lg"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-500 text-lg"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
