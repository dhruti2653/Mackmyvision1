import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/aboutpage");
  };

  return (
    <div className="container mx-auto px-4 lg:py-16 py-8">
    

      {/* Sub-header */}
      <p className="text-center text-3xl font-medium mb-4 text-gray-700">
        <span className="text-blue-600 text-bold">We Create</span> Awesome Stuff
      </p>

      {/* Description */}
      <p className="text-center text-lg text-gray-700 mb-10 px-4 lg:px-20">
        We are a <span className="text-blue-600 font-semibold">Creative Team</span> located in Gujarat, India. We just started with a single head, and now we have an experienced team, as well as partnerships with some amazing brands.
      </p>

      {/* Row for Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Vision Box */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          {/* GIF */}
          <div className="w-24 h-24 mr-4 flex-shrink-0">
            <img
              src="../images/our-vision.gif"
              alt="Our Vision"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Content */}
          <div>
            <h4 className="text-3xl font-medium text-gray-800">
              Our <span className="text-blue-600">Vision</span>
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              Our aim is to empower your business through our knowledge and experiences. We strive to let your brand spread worldwide through WebMint Infotech.
            </p>
          </div>
        </div>

        {/* Mission Box */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          {/* GIF */}
          <div className="w-24 h-24 mr-4 flex-shrink-0">
            <img
              src="../images/our-mission.gif"
              alt="Our Mission"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Content */}
          <div>
            <h4 className="text-3xl font-medium text-gray-800">
              Our <span className="text-blue-600">Mission</span>
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              We are fueled by creativity and positivity. We outperform our own goals year to year and let our work speak. We aim to change people's lives.
            </p>
          </div>
        </div>

        {/* Client Support Box */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
          {/* Video */}
          <div className="w-24 h-24 mr-4 flex-shrink-0">
          <img
              src="../images/client-suport-1.gif"
              alt="Client Suport"
              className="w-full h-full object-contain"
            />



          </div>
          {/* Content */}
          <div>
            <h4 className="text-3xl font-medium text-gray-800">
              Client <span className="text-blue-600">Support</span>
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              We work hard to make our clients happy. We have a dedicated and experienced support team for fast and easy responses to solve client queries.
            </p>
          </div>
        </div>
      </div>

      {/* Learn More Button
      <div className="text-center mt-10">
        <button
          onClick={handleLearnMoreClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default AboutUs;
