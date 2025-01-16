import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageColumn = () => {

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
    AOS.refresh();
  }, []);

  const circles = [
    { id: 1, className: "bg-blue-600", cx: 0, cy: -200, r: 17, innerClassName: "bg-white", innerRadius: 15 },
    { id: 2, className: "bg-blue-400", cx: 250, cy: -50, r: 13 },
    { id: 3, className: "bg-blue-400", cx: 80, cy: 300, r: 23, innerClassName: "bg-white", innerRadius: 19 },
    { id: 4, className: "bg-blue-800 ", cx: -250, cy: 200, r: 10 },
  ];


  return (
    <div
    data-aos="fade-up"
    data-aos-delay="1000"
    className="flex flex-col lg:flex-row mt-10 items-center gap-16 px-6 lg:px-16 overflow-hidden">
      {/* Content Section */}
      <div 
       data-aos="fade-right"
       data-aos-delay="1500" className="lg:w-1/2 text-center lg:text-left lg:pl-10">
        <h2 className="text-4xl font-medium text-[#025add] mb-4">About Us</h2>
        <h3 className="lg:text-3xl text-xl font-medium mb-4">
          Manage conversations with leads and customers at scale
        </h3>
        <p className="text-gray-600 mb-6">
          MakeMyVision Infotech was founded to deliver technology solutions that positively impacted businesses, versus
          just technology solutions that were technically excellent but may not have delivered on the key business
          objectives.
        </p>
        <div className="flex flex-col w-full items-start text-black pb-7">
          <div className="flex w-full justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Project success percentage rate</h1>
            <p className="text-xl font-semibold">75%</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div data-aos="fade-up">
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

      {/* SVG and Image Section */}
      <div 
       data-aos="fade-left"
       data-aos-delay="1500"
       className="relative flex justify-center items-center w-full h-screen lg:w-1/2">
        {/* Outer Border */}
        <div className="absolute w-[80%] h-[70%] lg:w-[480px] lg:h-[400px] rounded-full border-[20px] border-[#025ADD] shadow-xl"></div>

        {/* Image */}
        <div className="relative w-[75%] h-[65%] lg:w-[460px] lg:h-[380px] overflow-hidden rounded-full transition-transform duration-500 hover:scale-95">
          <img
            src="../images/about8.webp"
            alt="Decorative"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Circles */}
        {circles.map((circle) => (
          <div
            key={circle.id}
            className={`absolute ${circle.className} rounded-full animate-outward`}
            style={{
              width: `${circle.r * 3}px`,
              height: `${circle.r * 3}px`,
              left: `calc(50% + ${circle.cx}px)`,
              top: `calc(40% + ${circle.cy}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {circle.innerRadius && (
              <div
                className={`absolute ${circle.innerClassName} rounded-full`}
                style={{
                  width: `${circle.innerRadius * 3}px`,
                  height: `${circle.innerRadius * 3}px`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageColumn;
