import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 py-16 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 md:px-12">
        {/* Company Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg"
              onClick={() => navigate("/about_us")}>About Us</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg">Press Release</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg"
              onClick={() => navigate('/terms&conditions')}>Terms & Condition</a>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Account</h3>
          <div className="flex flex-col gap-3">
            <a href="#" onClick={() => navigate('/login')}
              className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg">Login</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg">Membership Inquiry</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg">Track Your Progress</a>
          </div>
        </div>

        {/* Member Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Member</h3>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg"
              onClick={() => navigate('/faqs')}>FAQ's</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg"
              onClick={() => navigate('/contact_us')}>Contact Us</a>
            <a href="#" className="hover:underline hover:opacity-100 opacity-80 transition duration-200 font-semibold text-lg"
              onClick={() => navigate('/gallary')}>Events & Gallery</a>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap justify-center gap-6 items-center md:justify-start">
          <a href="#" className="p-3 rounded-full bg-white text-gray-900 hover:text-blue-600 hover:bg-white hover:scale-110 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white text-gray-900 hover:text-blue-600 hover:bg-white hover:scale-110 transition duration-300">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white text-gray-900 hover:text-blue-600 hover:bg-white hover:scale-110 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white text-gray-900 hover:text-blue-600 hover:bg-white hover:scale-110 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white text-gray-900 hover:text-red-600 hover:bg-white hover:scale-110 transition duration-300">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" text-center py-6">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
