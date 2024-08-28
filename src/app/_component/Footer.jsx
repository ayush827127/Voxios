{/* Footer Component */}
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              Voxizo is a digital service agency dedicated to transforming your online presence.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">&copy; 2023 Voxizo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
