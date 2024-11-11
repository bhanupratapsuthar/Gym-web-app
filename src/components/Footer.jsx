import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div
            className="static bottom-0 bg-zinc-900  w-screen h-[350px]
        flex flex-row justify-evenly pt-[75px] uppercase">
            <div >
                <h3 className="text-white font-bold text-2xl mb-2">Company</h3>
                <div className="flex flex-col gap-2 ">
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg"
                        onClick={() => navigate("/about_us")}>About Us</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg">Press Release</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg"
                        onClick={() => navigate('/terms&conditions')}>Terms & Condition</a>
                    <a href="#"></a>
                </div>
            </div>
            <div>
                <h3 className="text-white font-bold text-2xl mb-2">Account</h3>
                <div className="flex flex-col gap-2 ">
                    <a
                        href="#"
                        onClick={() => navigate('/login')}
                        className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg">
                        Login</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg">Membership Inquary</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg">Track Your Progress</a>
                    <a href="#"></a>
                </div>
            </div>
            <div>
                <h3 className="text-white font-bold text-2xl mb-2">Member</h3>
                <div className="flex flex-col gap-2 ">
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg"
                        onClick={() => navigate('/faqs')}>FAQ's</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg"
                        onClick={() => navigate('/contact_us')}>Contact Us</a>
                    <a href="#" className="text-white opacity-50 hover:opacity-100 hover:scale-110 transition duration-200 ease-in-out font-bold text-lg"
                        onClick={() => navigate('/gallary')}>Events & Gallery</a>
                </div>
            </div>

            <div className="flex flow-row gap-x-4">
                {/* icons */}
                <div>
                    <FaInstagram size={40} className="text-white border-2 rounded-full p-2 opacity-55 hover:opacity-100 hover:scale-125 transition duration-200 ease-linear" />
                </div>
                <div>
                    <FaFacebookF size={40} className="border-2 text-white rounded-full p-2 opacity-55 hover:opacity-100 hover:scale-125 transition duration-200 ease-linear" />
                </div>
                <div>
                    <FaLinkedin size={40} className="text-white border-2 rounded-full p-2 opacity-55 hover:opacity-100 hover:scale-125 transition duration-200 ease-linear" />
                </div>
                <div>
                    <FaTwitter size={40} className="text-white border-2 rounded-full p-2 opacity-55 hover:opacity-100 hover:scale-125 transition duration-200 ease-linear" />
                </div>
                <div >
                    <FaYoutube size={40} className="text-white border-2 rounded-full p-2 opacity-55 hover:opacity-100 hover:scale-125 transition duration-200 ease-linear" />
                </div>



            </div>

        </div>
    )
}

export default Footer;