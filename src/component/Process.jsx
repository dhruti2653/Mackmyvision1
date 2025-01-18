import React from "react";

const BoxComponent = () => {
  return (
<div className="max-w-screen-xl mx-auto mt-10 px-4 py-8">
<h2  data-aos="fade-down"
    data-aos-delay="1000" className="text-4xl font-medium text-center mb-3 text-[#025add]">Our Process</h2>

      {/* Main container for the boxes */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 mt-7 items-center sm:justify-between">
      {/* Box 1: Search */}
        <div  data-aos="fade-right"
    data-aos-delay="1000"   
     className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-4 sm:mt-0">
      <div className="group bg-white p-6 w-full sm:w-60 lg:w-52 h-64 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
      <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/quality-focused (1).gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Search</h3>
            <p className="mt-2 text-center text-gray-700 group-hover:text-white">
              Find what you're looking for quickly.
            </p>
          </div>

          {/* Dotted Line */}
          <div  data-aos="fade-up"
    data-aos-delay="1000"className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 2: Concept */}
        <div data-aos="fade-down"
    data-aos-delay="1000" className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div   className="group bg-white p-6 md:w-60 sm:w-72 lg:w-52 h-64 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/innovation.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Concept</h3>
            <p className="mt-2 text-center text-gray-700 group-hover:text-white">
              Creative ideas for building solutions.
            </p>
          </div>

          {/* Dotted Line */}
          <div  data-aos="fade-down"
    data-aos-delay="1000" className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 3: Develop */}
        <div  data-aos="fade-up"
    data-aos-delay="1000" className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div className="group bg-white p-6 md:60 sm:w-72 lg:w-52 h-64 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/web-development.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Develop</h3>
            <p className="mt-2 text-center text-gray-700 group-hover:text-white">
              Developing quality solutions for future.
            </p>
          </div>

          {/* Dotted Line */}
          <div  data-aos="fade-up"
    data-aos-delay="1000"  className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 4: Test */}
        <div  data-aos="fade-left"
    data-aos-delay="1000" className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div className="group bg-white p-6 md:60 sm:w-72 lg:w-52 h-64 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/600-projects.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Test</h3>
            <p className="mt-2 text-center text-gray-700 group-hover:text-white">
              Test our solutions for quality assurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
