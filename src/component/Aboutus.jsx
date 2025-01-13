import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ImageColumn = () => {

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); // Initialize AOS with options if necessary
    AOS.refresh(); // Refresh AOS when needed after dynamic changes
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:mt-24 mt-10 items-center gap-16 px-6 lg:px-16 overflow-hidden">
      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left lg:pl-10 pl-0">
        <h2 className="text-4xl font-medium text-[#025add] mb-4">About Us</h2>
        <h3 className="lg:text-3xl text-xl font-medium mb-4">
          Manage conversations with leads and customers at scale
        </h3>
        <p className="text-gray-600 mb-6">
          MakeMyVision infotech was founded to deliver technology solutions that positively impacted businesses, versus just technology solutions that were technically excellent but may not have delivered on the key business objectives.
        </p>

        <div className="flex flex-col md:flex-col w-full items-start text-black pb-7 relative">
          {/* Header and Percentage */}
          <div className="flex w-full justify-between items-center mb-4">
            <h1 className="text-xl md:text-1xl font-bold">Project success percentage rate</h1>
            <p className="text-xl md:text-2xl font-semibold">75%</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 rounded-full h-4 relative">
            <div
              className="bg-blue-500 h-4 rounded-full progress-animated"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        <div className="aos-init aos-animate mt-5" data-aos="fade-up">
          <a
            href="/aboutpage"
            className="btn_primary inline-flex items-center gap-2 px-6 py-3 text-white text-base font-medium rounded-lg 
                       bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
                       shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <FaArrowRight className="text-lg" /> Our AboutUs
          </a>
        </div>
      </div>

      {/* SVG Section */}
      <div className="custom-svg-wrapper-1 px-5">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 687 673"
          className="w-full h-auto"
        >
          <g className="hidden md:block floating-element" data-aos="fade-up" data-aos-delay="500">
            <circle className="custom-svg-fill-color-secondary" fill="#4F4BFC" cx="589" cy="216" r="27" />
            <circle fill="#FFF" cx="588.5" cy="216.5" r="24.5" />
          </g>

          <g className="hidden lg:block floating-element" data-aos="fade-up" data-aos-delay="700">
            <circle className="custom-svg-fill-color-secondary" fill="#4F4BFC" cx="128" cy="609" r="17" />
            <circle fill="#FFF" cx="127.69" cy="609.31" r="15.43" />
          </g>

          <g
            opacity="0.7"
            className="floating-element"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <circle className="custom-svg-fill-color-primary" fill="#0088CC" cx="148" cy="64.5" r="14.5" />
            <circle fill="#FFF" cx="148.27" cy="64.77" r="13.16" />
          </g>

          <linearGradient id="SVGID_1_" className="custom-svg-linear-gradient" gradientUnits="userSpaceOnUse" x1="507.8588" y1="461.6467" x2="171.5928" y2="125.3807">
            <stop offset="0" style={{ stopColor: "#5349FF" }} />
            <stop offset="1" style={{ stopColor: "#0088CC" }} />
          </linearGradient>

          <g className="appear-animation animated appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700">
            <path
              fill="url(#SVGID_1_)"
              opacity="0.2"
              d="M252,64c26.24-11.75,48.83-15.22,67-18c14.48-2.22,21.72-3.33,32-3c9.04,0.29,37.99,1.59,66,21c9.9,6.86,16.05,13.46,24,22c4.57,4.91,15.33,16.93,30,41c5.64,9.25,18.4,31.03,31,62c12.24,30.1,18.27,53.97,22,69c7.74,31.18,12.66,51,13,79c0.36,29.73-4.65,52.49-7,62c-4.51,18.26-9.8,39.64-25,62c-21.92,32.23-51.17,46.98-77,60c-16.86,8.5-34.6,17.24-60,20c-22.47,2.44-40.04-0.98-50-3c-10.59-2.15-35.39-8.17-62-25c-30.2-19.1-46.48-41.85-62-64c-33.11-47.26-45.37-92.3-50-113c-8.73-39.06-8.09-71.09-7-88c1.52-23.61,4.05-57.78,23-96c5.29-10.68,14.58-29.02,33-48C215.85,80.47,239.52,69.59,252,64z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ImageColumn;
