// src/component/Navbar.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#03228f] to-[#0e73e4] text-white px-6 py-4 md:flex md:justify-between items-center">
      {/* Left side: Address, Phone, and Email in a single column on mobile, row on larger screens */}
      <div className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center">
        <div className="flex items-center space-x-2 text-lg">
          <FaMapMarkerAlt />
          <span>1234 Main St, City, Country</span>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <FaPhoneAlt />
          <span>+123 456 7890</span>
        </div>
        {/* <div className="flex items-center space-x-2 text-lg">
          <FaEnvelope />
          <span>info@example.com</span>
        </div> */}
      </div>

      {/* Right side: Social Icons */}
      <div className="flex justify-center space-x-4 mt-4 md:mt-0 text-xl">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
