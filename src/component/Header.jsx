import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle menu on small screens
  const location = useLocation(); // Get the current location

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? "text-blue-600 font-semibold" // Active link style
      : "text-gray-700 hover:text-blue-600"; // Default link style
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <div className="flex items-center space-x-1">
            <Link to="/">
              <img src="../images/logo.png" alt="Logo" className="h-14 w-20" />
            </Link>
            <Link to="/">
              <h1 className="text-2xl font-semibold text-gray-800">
                Make<span className="text-blue-600">My</span>Vision
              </h1>
            </Link>
          </div>

          {/* Center: Menu for Desktop */}
          <nav className="hidden font-medium text-xl sm:flex space-x-8">
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link to="/aboutpage" className={getLinkClasses("/aboutpage")}>
              About
            </Link>
            <Link to="/services" className={getLinkClasses("/services")}>
              Services
            </Link>
            <Link to="/contactpage" className={getLinkClasses("/contactpage")}>
              Contact
            </Link>
          </nav>

          {/* Right: Button (Always visible) */}
          <div className="hidden sm:flex">
            <Link
              to="/support"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu} // Toggle menu on button click
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Slide-in for small screens) */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#0e2336] shadow-lg z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between px-4 py-4 bg-[#0e2336]">
            <div className="flex items-center lg:hidden">
              <Link to={"/"} className="flex items-center">
                <img
                  src="../images/logo.jpeg"
                  alt="Logo"
                  className="h-16 w-16 rounded-full"
                />
                <span className="ml-3 text-lg font-medium lg:text-xl text-white">
                  Maruti Nandan
                </span>
              </Link>
            </div>

            <button
              onClick={toggleMenu} // Close menu when clicked
              className="text-xl text-white focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-start px-6 mt-6 space-y-4 text-lg font-medium">
            <Link
              to="/"
              className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
                location.pathname === "/" ? "text-[#F76B00]" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/aboutpage"
              className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
                location.pathname === "/aboutpage" ? "text-[#F76B00]" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
                location.pathname === "/services" ? "text-[#F76B00]" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contactpage"
              className={`w-full py-2 hover:text-[#F76B00] hover:underline ${
                location.pathname === "/contactpage" ? "text-[#F76B00]" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
