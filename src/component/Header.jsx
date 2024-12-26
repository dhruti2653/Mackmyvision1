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

          {/* Center: Menu */}
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
              to="/contactpage"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-md space-y-4 py-4">
            <Link to="/" className={`${getLinkClasses("/")} block text-center`}>
              Home
            </Link>
            <Link
              to="/aboutpage"
              className={`${getLinkClasses("/aboutpage")} block text-center`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${getLinkClasses("/services")} block text-center`}
            >
              Services
            </Link>
            <Link
              to="/blogpage"
              className={`${getLinkClasses("/blogpage")} block text-center`}
            >
              Blog
            </Link>
            <Link
              to="/contactpage"
              className={`${getLinkClasses(
                "/contactpage"
              )} block text-center`}
            >
              Contact
            </Link>

            {/* Mobile: Get Support button inside the dropdown */}
            <Link
              to="/contactpage"
              className="block text-center text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 mt-4"
            >
              Get Support
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
