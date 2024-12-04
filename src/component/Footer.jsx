import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-14 text-white px-4 md:px-32">
      {/* Top Section - Logo and Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-8">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="../images/logo1.jpeg" alt="Logo" className="h-12 w-24" />
          </Link>
          <Link to="/">
            <h1 className="text-2xl font-semibold">
              Make<span className="text-blue-600">My</span>Vision
            </h1>
          </Link>
        </div>
        {/* Right - Newsletter Text and Input */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-x-6 justify-end items-right w-full">
          {/* Left Side - Text */}
          <div className="flex text-xl items-center font-medium mb-2 md:mb-0">Signup Our Newsletter</div>

          {/* Right Side - Form */}
          <form className="flex mt-2 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-64 md:w-80 text-black focus:outline-none"
            />
            <button className="p-3 bg-blue-500 hover:bg-blue-600 font-medium rounded-r-md">Go!</button>
          </form>
        </div>
      </div>

      {/* Middle Section - 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-7 pt-8 pb-4">
        {/* Column 1 - Detail Part - 50% Width (spans 3 columns on larger screens) */}
        <div className="col-span-1 md:col-span-3">
          <p className="text-xl text-gray-400">
            We are committed to providing exceptional services in medical care and more.
          </p>
        </div>

        {/* Column 2 - Home and Services Columns for Mobile View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:col-span-2">
          <div className="col-span-1">
            <ul className="space-y-2 list-none">
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/aboutpage" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/contactpage" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2 list-none">
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/service1" className="text-gray-400 hover:text-white">Service 1</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/service2" className="text-gray-400 hover:text-white">Service 2</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/service3" className="text-gray-400 hover:text-white">Service 3</a>
              </li>
              <li className="relative pl-4 space-x-1">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400">→</span>
                <a href="/service4" className="text-gray-400 hover:text-white">Service 4</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 - Social Icons */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col space-y-4">
            <a href="https://www.facebook.com/?_rdr" className="flex items-center space-x-2 text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <span className="text-sm">Facebook</span>
            </a>
            <a href="https://www.google.com/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faGoogle} size="lg" />
              <span className="text-sm">Google</span>
            </a>
            <a href="https://in.linkedin.com/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://in.linkedin.com/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <span className="text-sm">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="pb-16 flex justify-start">
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[16px] text-gray-400">
              <strong>Address:</strong> 123 Street, City, Country
            </p>
          </div>
          <div>
            <p className="text-[16px] text-gray-400">
              <strong>Phone:</strong> +1 234 567 890
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Links */}
      <div className="flex flex-col md:flex-row justify-between border-t border-gray-600 py-4">
        {/* Left side - Copyright */}
        <div className="text-sm text-gray-400">
          <p> Copyright © 2024 . MakeMyVision Technology | All Rights Reserved.</p>
        </div>

        {/* Right side - Links (Terms of Use, Privacy Policy) */}
        <div className="text-sm text-gray-400 text-right mt-2 md:mt-0">
          <p>
            <a href="#" className="hover:text-blue-600">Terms of use</a>
            |
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
