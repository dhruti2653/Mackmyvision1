import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <>
      <div className="web-review service-height flex flex-wrap justify-center mt-10 z-30 overflow-hidden">
        {/* Title Section */}
        <div 
          data-aos="fade-down"
          data-aos-delay="1000"
          className="flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-medium mb-3 text-[#025add]">
            Our Services
          </h2>
          <p className="text-xl lg:px-10 text-gray-600">
            As one of the leading software development companies, we at MakeMyVision have a diverse range of services for our clients, where we operate in these core areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-32 sm:gap-10 md:gap-20 px-6 w-full max-w-[1440px] mx-auto">
          {/* First Service */}
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="lg:-mt-10">
            <div className="service-box lg:mt-36 mt-8 w-full max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
              <div className="service-tech-box mt-10 bg-pink-100 p-6 rounded-lg relative border-2 border-pink-200">
                <div className="flex justify-center absolute -top-8 left-0 right-0 mx-auto">
                  <div className="tech-icon bg-pink-200 p-4 rounded-xl -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <img
                      src="../images/web-development.gif"
                      alt="web-development"
                      width="60"
                      height="60"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="service-text mt-16 text-center">
                  <h4 className="text-xl font-semibold sm:text-lg md:text-xl lg:text-2xl">
                    Web Development
                  </h4>
                  <p className="mt-3 text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base">
                    We help companies with unique and comprehensive web development services that empower you and your clients.
                  </p>
                  <a
                    className="learn-more mt-3 inline-block text-blue-500 hover:text-blue-700 text-sm md:text-base"
                    href="/services">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Service */}
          <div
            data-aos="fade-left"
            data-aos-delay="1000">
            <div className="service-box mt-20 w-full max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl">
              <div className="service-tech-box bg-[#ffe4c2] p-6 rounded-lg relative border-2 border-[#fcd09a]">
                <div className="flex justify-center absolute -top-8 left-0 right-0 mx-auto">
                  <div className="tech-icon bg-[#fcd09a] p-4 rounded-xl -rotate-12 hover:rotate-0">
                    <img
                      src="../images/mobile-app-development.gif"
                      alt="mobile-app-development"
                      width="60"
                      height="60"
                      className="wh-auto"
                    />
                  </div>
                </div>
                <div className="service-text mt-16 text-center">
                  <h4 className="text-xl font-semibold sm:text-lg md:text-xl lg:text-2xl">
                    Mobile App Development
                  </h4>
                  <p className="mt-3 text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base">
                    We can assist you with user-friendly, interactive, and feature-rich mobile app development services to enable your digital growth.
                  </p>
                  <a
                    className="learn-more mt-3 inline-block text-blue-500 hover:text-blue-700 text-sm sm:text-xs md:text-base"
                    href="/services">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third and Fourth Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-96 sm:gap-10 px-6 w-full max-w-[1440px] mx-auto md:gap-44">
          {/* Third Service */}
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="service-box w-full max-w-sm mx-auto rounded-lg mt-20 shadow-lg hover:shadow-xl">
            <div className="service-tech-box bg-purple-100 p-6 rounded-lg relative border-2 border-purple-200">
              <div className="flex justify-center absolute -top-8 left-0 right-0 mx-auto">
                <div className="tech-icon bg-purple-200 p-4 rounded-xl -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="../images/game-development.gif"
                    alt="game-development"
                    width="60"
                    height="60"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div className="service-text mt-12 text-center">
                <h4 className="text-xl font-semibold">Data Science Development</h4>
                <p className="mt-3 text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base">
                  Data science development focuses on analyzing and extracting insights from data using tools like Python, R, and machine learning algorithms.
                </p>
                <a
                  className="learn-more mt-3 inline-block text-blue-500 hover:text-blue-700"
                  href="/services">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Fourth Service */}
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="service-box w-full max-w-sm mx-auto mt-20 rounded-lg shadow-lg hover:shadow-xl">
            <div className="service-tech-box bg-green-100 p-6 rounded-lg pb-12 relative border-2 border-green-200">
              <div className="flex justify-center absolute -top-8 left-0 right-0 mx-auto">
                <div className="tech-icon bg-green-200 p-4 rounded-xl -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="../images/hire-offshore-developers.gif"
                    alt="hire-offshore-developers"
                    width="60"
                    height="60"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div className="service-text mt-12 text-center">
                <h4 className="text-xl font-semibold">Web Design Developers</h4>
                <p className="mt-3 text-sm text-gray-600 sm:text-xs md:text-sm lg:text-base">
                  Web design focuses on creating visually appealing and user-friendly interfaces for websites, ensuring a seamless user experience.
                </p>
                <a
                  className="learn-more mt-3 inline-block text-blue-500 hover:text-blue-700"
                  href="/services">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex justify-center items-center mt-7">
          <a
            href="/services"
            className="btn_primary inline-flex items-center gap-2 px-6 py-3 text-white text-base font-medium rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaArrowRight className="text-lg" /> Our Services
          </a>
        </div>
      </div>
    </>
  );
};

export default OurServices;
