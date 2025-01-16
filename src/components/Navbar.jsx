import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../redux/slices/authSlice";
import CartIcon from "./CartIcon";
import logo from "../pictures/GymLogo.webp"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearAuth());
        navigate("/login");
    };

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/membership+plan', text: 'Membership' },
        { to: '/blogs', text: 'Blogs' },
        { to: '/store', text: 'Store' },
        ...(isLoggedIn
            ? []
            : [
                  { to: '/login', text: 'Login' },
                  { to: '/signup', text: 'Signup' },
              ]),
    ];

    const handleGoToCart = () => {
            navigate("/cart");
    }

    return (
        <div className="w-full">
            <nav className="bg-black px-4 md:px-6 fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center h-[87px]">
                        {/* Logo */}
                        <NavLink to="/" className="flex-shrink-0">
                            <img src={logo} alt="Logo" className="w-20 h-20 rounded-full object-cover" />
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

                            {/* Cart Icon */}
                            <button
                                    onClick={handleGoToCart}
                                    className="text-white hover:scale-110 transition duration-200 ease-in">
                                    <CartIcon />
                            </button>

                            {/* Profile Dropdown */}
                            {isLoggedIn && (
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="text-xl font-semibold text-white hover:scale-110 transition duration-200 ease-in"
                                    >
                                        Profile
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                            <button
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    navigate("/dashboard");
                                                }}
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                    handleLogout();
                                                }}
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            {/* Cart Icon for Mobile */}
                            <NavLink 
                                to="/cart" 
                                className="text-white"
                            >
                                <CartIcon />
                            </NavLink>
                            <button
                                onClick={toggleMenu}
                                className="text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
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

                            {/* Profile Dropdown for Mobile */}
                            {isLoggedIn && (
                                <>
                                <NavLink
                                    to={"/dashboard"}
                                    onClick={toggleMenu}
                                    className={({ isActive }) => `
                                        text-xl font-semibold text-white 
                                        hover:bg-gray-800 p-2 rounded-lg
                                        transition duration-200 ease-in
                                        ${isActive ? 'bg-gray-800' : ''}
                                    `}
                                >
                                        Dashboard
                                    </NavLink>

                                    <NavLink
                                    to={"/login"}
                                    onClick={() => {
                                                    setIsOpen(false);
                                                    handleLogout();
                                                }}
                                    className={({ isActive }) => `
                                        text-xl font-semibold text-white 
                                        hover:bg-gray-800 p-2 rounded-lg
                                        transition duration-200 ease-in
                                    `}
                                >
                                        Logout
                                    </NavLink>
                                </>
                            )}
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