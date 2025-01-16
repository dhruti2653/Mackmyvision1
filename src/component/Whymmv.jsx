import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WhyVasundhara = () => {
  const cards = [
    {
      
      title: "Innovation",
      description:
        "We believe in innovating and meeting customer needs in every project.",
      bgColor: "bg-[#ffe5d3]",
      imgSrc: "../images/innovations.gif",
      imgAlt: "Innovation Icon",
    },
    {
      title: "Quality-Focused",
      description:
        "We consistently focus on quality over quantity - that also makes us credible as a software company.",
      bgColor: "bg-green-100",
      imgSrc: "../images/quality-focused.gif",
      imgAlt: "Quality-Focused Icon",
    },
    {
      title: "Value for Money",
      description:
        "Vasundhara provides services at affordable and competitive rates with fast delivery.",
      bgColor: "bg-purple-100",
      imgSrc: "../images/value-for-money.gif",
      imgAlt: "Value for Money Icon",
    },
  ];

  const getBorderColor = (index) => {
    const colors = ["#ffd1b1", "#84f2cc", "#b5c4ff"]; // Define your border colors
    return colors[index % colors.length]; // Cycles through colors
  };

  return (
    <div className="container mx-auto lg:mb-10 mb-0 p-6">
      {/* Title Section */}
      <div data-aos="fade-down"
    data-aos-delay="1000" className="flex justify-center mb-8">
        <button
          type="button"
          className="bg-blue-500 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          <span>Why MakeMyVision</span>
        </button>
      </div>

      {/* Arrow Images Section */}
      <div  className="flex justify-between items-center lg:h-40">
  <img 
  data-aos="fade-right"
    data-aos-delay="1000"
    src="/images/6.png"
    className="hidden lg:block lg:max-w-full lg:pl-20 pl-0 h-auto object-contain transform hover:scale-110 transition-transform duration-300"
    alt="Arrow Six"
  />
  <img 
  data-aos="fade-up"
  data-aos-delay="1000"
    src="/images/5.png"
    className="hidden lg:block lg:max-w-7 h-32 object-contain transform hover:scale-110 transition-transform duration-300"
    alt="Arrow Five"
  />
  <img
    data-aos="fade-left"
    data-aos-delay="1000"
    src="/images/4.png"
    className="hidden lg:block lg:max-w-full h-auto lg:pr-20 pr-0 object-contain transform hover:scale-110 transition-transform duration-300"
    alt="Arrow Four"
  />
</div>




      {/* Content Section */}
      <div className="text-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cards.map((card, index) => {
      // Determine AOS effect based on the index
      const aosEffect =
        index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left";

      return (
        <div
          key={index}
          data-aos={aosEffect} // Assign the AOS effect here
          className={`p-6 rounded-lg shadow-lg border-2 ${card.bgColor} hover:shadow-xl transition-shadow duration-300`}
          style={{ borderColor: getBorderColor(index) }}
        >
          <div className="flex justify-center">
            <div className="p-3 mt-2 rounded-xl -rotate-12 shadow-md transform hover:rotate-0 transition-transform duration-300">
              <img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-lg font-bold">{card.title}</h4>
            <p className="mt-3 text-[16px] text-gray-600">{card.description}</p>
          </div>
        </div>
      );
    })}
  </div>

  {/* View All Button */}
  <div
    data-aos="fade-up"
    data-aos-delay="1000"
    className=" mt-10"
  >
    <a
      href="/aboutpage"
      className="btn_primary inline-flex items-center gap-2 px-6 py-3 text-white text-base font-medium rounded-lg 
                 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
                 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <FaArrowRight className="text-lg" /> More on Why MakeMyVision?
    </a>
  </div>
</div>

    </div>
  );
};

export default WhyVasundhara;
