import React, { useState } from 'react';

// Data for different technology categories
const frontendTechnologies = [
  { name: "HTML", imgSrc: "../images/html-1.svg" },
  { name: "CSS", imgSrc: "../images/css3.png" },
  { name: "JavaScript", imgSrc: "../images/js.webp" },
  { name: "React", imgSrc: "../images/react-native.svg" },
  { name: "Tailwind", imgSrc: "../images/Tailwind.png" },
  { name: "Bootstrap", imgSrc: "../images/Bootstrap.svg" },
  // { name: "Vue.js", imgSrc: "../images/vue-js.png" },
  // { name: "Angular", imgSrc: "../images/angular.png" }
];

const backendTechnologies = [
  // { name: "PHP", imgSrc: "../images/php.svg" },
  { name: "Node.js", imgSrc: "../images/node-js.svg" },
  { name: "Python", imgSrc: "../images/python.svg" },
  { name: "Kotlin", imgSrc: "../images/kotlin.png" },
  // { name: "Laravel", imgSrc: "../images/laravel.svg" },
  { name: "Java", imgSrc: "../images/java.svg" },
  // { name: "Express.js", imgSrc: "../images/12.svg" }
];

const databaseTechnologies = [
  { name: "MySQL", imgSrc: "../images/mysql.svg" },
  // { name: "PostgreSQL", imgSrc: "../images/postgre-sql.svg" },
  // { name: "MongoDB", imgSrc: "../images/mongo-db.svg" },
  { name: "Firebase", imgSrc: "../images/firebase.svg" },
  // { name: "DynamoDB", imgSrc: "../images/dynamo-db.svg" }
];

const infrastructureTechnologies = [
  { name: "AWS", imgSrc: "../images/amazon-web-services.svg" },
  { name: "Google Cloud", imgSrc: "../images/google-cloud.svg" },
  { name: "Microsoft Azure", imgSrc: "../images/microsoft-azure.svg" },
  { name: "Digital Ocean", imgSrc: "../images/digital-ocean.svg" },
  // { name: "Selenium", imgSrc: "../images/selenium.svg" }
];

const TechnologiesUsed = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const technologiesToShow = {
    frontend: frontendTechnologies,
    backend: backendTechnologies,
    database: databaseTechnologies,
    infrastructure: infrastructureTechnologies
  }[activeTab];

  return (
    <div className="container w-full overflow-hidden mx-auto px-4 mt-16 mb-9">
      <div  className="text-center">
        <h2  data-aos="fade-down"
    data-aos-delay="1000" className="text-3xl md:text-4xl font-semibold text-blue-600 mb-3">
          Our Technology
        </h2>
        <h3  data-aos="fade-down"
    data-aos-delay="1000" className="text-xl md:text-2xl font-medium mb-4">
          Technologies Used for Web Development
        </h3>
        <p  data-aos="fade-up"
    data-aos-delay="1000" className="text-gray-600 text-sm px-8 md:text-xl mb-8">
          Web Development requires implementation of the latest technologies, tools, and applications that streamline the prototyping, development, designing, and testing processes.
        </p>
      </div>

      {/* Tabs */}
      <ul data-aos="fade-right"
    data-aos-delay="1000" className="flex justify-center mb-6 lg:mx-0 px-0 space-x-4 md:space-x-28 border-b-2 border-gray-200 ">
        {['frontend', 'backend', 'database', 'infrastructure'].map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer text-lg  md:text-xl font-medium pb-2 ${
              activeTab === tab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </li>
        ))}
      </ul>

      {/* Technology Grid */}
      <div data-aos="fade-left"
    data-aos-delay="1000" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 lg:grid-cols-6 gap-6">
        {technologiesToShow.map((tech) => (
          <div key={tech.name} className="text-center">
            <div className="flex justify-center items-center p-3 border-2 border-gray-200 rounded-lg shadow-md">
              <img
                src={tech.imgSrc}
                alt={tech.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
              />
            </div>
            <h4 className="mt-2 text-base  sm:text-lg font-medium">{tech.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesUsed;
