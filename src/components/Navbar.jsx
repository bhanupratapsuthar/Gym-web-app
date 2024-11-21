import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/membership+plan', text: 'Membership' },
        { to: '/blogs', text: 'Blogs' },
        { to: '/store', text: 'Store' },
        { to: '/login', text: 'Login' }
    ];

    return (
        <div className="w-full">
            <nav className="bg-black px-4 md:px-6 fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center h-[87px]">
                        {/* Logo */}
                        <NavLink to='/' className="flex-shrink-0">
                            <img src="../logo.jpeg" alt="Logo" className="h-12 w-auto" />
                        </NavLink>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) => `
                                        text-xl font-semibold text-white 
                                        hover:border-b-2 hover:scale-110 
                                        transition duration-200 ease-in
                                        ${isActive ? 'border-b-2' : ''}
                                    `}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`
                            md:hidden absolute top-[87px] left-0 right-0 
                            bg-black border-t border-gray-800
                            transition-all duration-300 ease-in-out
                            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                        `}
                    >
                        <div className="flex flex-col space-y-4 px-4 py-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={toggleMenu}
                                    className={({ isActive }) => `
                                        text-xl font-semibold text-white 
                                        hover:bg-gray-800 p-2 rounded-lg
                                        transition duration-200 ease-in
                                        ${isActive ? 'bg-gray-800' : ''}
                                    `}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-[87px]"></div>
        </div>
    );
};

export default Navbar;