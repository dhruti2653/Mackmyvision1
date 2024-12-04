import React from "react";

const FounderCard = ({ founder }) => {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-white to-pink-100 p-6 rounded-2xl shadow-lg">
      {/* Hexagonal Image */}
      <div className="relative w-40 h-40 mb-4 hexagon">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover rounded-[10%]"
        />
      </div>
      {/* Name & Role */}
      <h3 className="text-xl font-semibold text-gray-800">{founder.name}</h3>
      <h4 className="text-md text-gray-600">{founder.role}</h4>
      {/* Social Icons */}
      <div className="flex mt-4 space-x-4">
        {founder.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.platform}
            className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full hover:shadow-lg"
          >
            <img src={social.icon} alt={social.platform} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FounderCard;
