import React from "react";

const HistorySection = () => {
  const historyData = [
    {
      service: "Web Development",
      content: [
        "We help companies with unique and comprehensive web development services tailored to their specific needs. Our solutions are designed to empower businesses with innovative, user-friendly, and scalable websites. From concept to execution, we ensure seamless functionality and modern design.",
        "We focus on creating exceptional digital experiences that enhance user engagement. Let us help you connect with your clients and achieve your business goals effectively.",
      ],
      gif: "../images/web-development.gif", // Replace with the actual path to the GIF
    },
    {
      service: "Mobile App Development",
      content: [
        "We provide user-friendly, interactive, and feature-rich mobile app development services tailored to your needs. Our team specializes in crafting apps that deliver seamless performance and exceptional user experiences.",
        "From concept to deployment, we ensure your app stands out in a competitive digital landscape. We focus on innovation, scalability, and functionality to support your business growth. Empower your digital journey with mobile solutions designed for success.",
      ],
      gif: "../images/mobile-app-development.gif", // Replace with the actual path to the GIF
    },
    {
      service: "Data Science Development",
      content: [
        "Data science development involves analyzing and extracting valuable insights from complex datasets. Our expertise lies in leveraging advanced tools like Python, R, and machine learning algorithms. We help businesses uncover patterns, trends, and opportunities hidden within their data.",
        "From predictive modeling to data visualization, we deliver actionable solutions. Transform your decision-making process with data-driven strategies tailored to your goals.",
      ],
      gif: "../images/data-science-development.gif", // Replace with the actual path to the GIF
    },
    {
      service: "Web Design Developers",
      content: [
        "Web design focuses on crafting visually appealing and highly interactive interfaces for websites. We specialize in creating user-friendly layouts that ensure an intuitive and seamless user experience.",
        "From responsive designs to modern aesthetics, we bring creativity and functionality together. Our approach emphasizes accessibility, performance, and alignment with your brand identity. Elevate your online presence with web designs tailored to engage and inspire your audience.",
      ],
      gif: "../images/web-design.gif", // Replace with the actual path to the GIF
    },
  ];

  return (
    <section className="text-black py-10 relative">
      <div className="container mx-auto px-4 flex">
        {/* Left Column */}
        <div className="sticky top-20 w-1/3">
          <div className="mb-5">
            <h2 className="text-4xl font-medium mb-3 text-[#025add]">
              Our Services
            </h2>
          </div>
          <p className="text-gray-600 text-xl">
            At MakeMyVision, we specialize in delivering cutting-edge technology
            solutions tailored to your business needs. From software development
            to digital transformation, we empower your growth with innovative
            strategies. Partner with us to transform your vision into reality with
            reliable and scalable solutions.
          </p>
        </div>

        {/* Right Column */}
        <div className="overflow-y-scroll h-[80vh] w-2/3 pl-10">
          {historyData.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-5 border-l-4 pl-5 mb-10 ${
                index % 2 === 0 ? "border-blue-500" : "border-gray-500"
              }`}
            >
              {/* GIF */}
              <img
                src={item.gif}
                alt={item.service}
                className="w-16 h-16 object-contain"
              />

              {/* Service Content */}
              <div>
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  {item.service}
                </div>
                {item.content.map((text, idx) =>
                  idx === 1 ? (
                    <blockquote
                      key={idx}
                      className="italic text-gray-400 border-l-2 pl-4 my-4"
                    >
                      {text}
                    </blockquote>
                  ) : (
                    <p key={idx} className="mb-4">
                      {text}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
