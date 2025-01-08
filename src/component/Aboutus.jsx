import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ImageColumn = () => {
  const images = [
    { src: "../images/discover-2.jpg", alt: "Discover 2", size: "small", position: "top" },
    { src: "../images/discover-4.jpg", alt: "Discover 5", size: "large", position: "right" }, // Large image
    { src: "../images/about.avif", alt: "Discover 3", size: "small", position: "bottom" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:mt-24 mt-10  items-center gap-16 px-6 lg:px-16 overflow-hidden ">
      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left lg:pl-10 pl-0 ">
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
  <h1 className="text-xl md:text-1xl font-bold">
    Project success percentage rate
  </h1>
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

        <div className="aos aos-init aos-animate mt-5" data-aos="fade-up">
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

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:pl-5 pl-0  items-center relative">
        {/* Render Images */}
        {images.map((image, index) => {
          let imageClasses = "w-40 h-40"; // Default for small images
          let additionalClasses = "";

          if (image.position === "right") {
            imageClasses = "w-80 h-80 "; // Large image size
            additionalClasses = "z-10"; // Bring it to the front
          } else if (image.position === "top") {
            additionalClasses = "absolute hidden md:block lg:bottom-18 lg:translate-x-1/2 bottom-10 right-0 transform lg:right-auto z-20"; // Adjusted for responsive top position
          } else if (image.position === "bottom") {
            additionalClasses = "absolute hidden md:block lg:top-24 lg:-translate-x-1/2 top-40 left-0 transform lg:left-auto z-10"; // Adjusted for responsive bottom position
          }

          return (
            <figure
              key={index}
              className={` relative overflow-hidden rounded-lg group ${imageClasses} ${additionalClasses}`}
            >
              <a href={image.src} className="block">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-125"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default ImageColumn;
