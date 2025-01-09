import React from "react";

const ResponsiveSection = () => {
  const sections = [
    {
      image: "../images/web-development.jpg", // Replace with your image
      title: "Web Development",
      content: "We help companies with unique and comprehensive web development services tailored to their specific needs. Our solutions are designed to empower businesses with innovative, user-friendly, and scalable websites. From concept to execution, we ensure seamless functionality and modern design. We focus on creating exceptional digital experiences that enhance user engagement. Let us help you connect with your clients and achieve your business goals effectively.",
    },
    {
      image: "../images/app-development.avif", // Replace with your image
      title: "Mobile App Development",
      content: "We provide user-friendly, interactive, and feature-rich mobile app development services tailored to your needs. Our team specializes in crafting apps that deliver seamless performance and exceptional user experiences. From concept to deployment, we ensure your app stands out in a competitive digital landscape. We focus on innovation, scalability, and functionality to support your business growth. Empower your digital journey with mobile solutions designed for success.",
    },
    {
      image: "../images/data-Science.png", // Replace with your image
      title: "Data Science",
      content: "Data science development involves analyzing and extracting valuable insights from complex datasets. Our expertise lies in leveraging advanced tools like Python, R, and machine learning algorithms. We help businesses uncover patterns, trends, and opportunities hidden within their data. From predictive modeling to data visualization, we deliver actionable solutions. Transform your decision-making process with data-driven strategies tailored to your goals.",
    },
    {
      image: "../images/web-design.jpg", // Replace with your image
      title: "Web Design",
      content: "Web design focuses on crafting visually appealing and highly interactive interfaces for websites. We specialize in creating user-friendly layouts that ensure an intuitive and seamless user experience. From responsive designs to modern aesthetics, we bring creativity and functionality together. Our approach emphasizes accessibility, performance, and alignment with your brand identity. Elevate your online presence with web designs tailored to engage and inspire your audience.",
    },
  ];

  return (
    <section className="text-black py-10 relative">
      <div className="sticky mt-10 items-center justify-center text-center px-7 lg:px-44">
        <div className="mb-5">
          <h2 className="text-4xl font-medium mb-3 text-[#025add]">
            Our Services
          </h2>
        </div>
        <p className="text-gray-600 text-xl">
          At MakeMyVision, we specialize in delivering cutting-edge technology solutions tailored to your business needs.
          Our expertise spans web and mobile app development, cloud services, and IT consulting.
          Partner with us to transform your vision into reality with reliable and scalable solutions.
        </p>
      </div>

      <div className="container lg:mt-16 mt-5 mx-auto px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-10 mb-10 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Left Column: Image */}
            <div className={`flex justify-center items-center ${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-contain transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div
              className={`flex flex-col justify-center ${
                index % 2 === 0 ? "order-2" : "order-1"
              } transition-all duration-300 ease-in-out hover:border-2 hover:border-blue-500 hover:shadow-lg p-5 rounded-md`}
            >
              <h2 className="text-3xl font-bold  text-center text-blue-500 mb-4 relative group">
                {section.title}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300"></span>
              </h2>
              <p className="text-gray-600 text-xl">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveSection;
