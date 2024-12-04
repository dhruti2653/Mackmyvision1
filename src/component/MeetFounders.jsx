import React from "react";
import FounderCard from "../components/FounderCard";

const foundersData = [
  {
    name: "Priyank Savani",
    role: "CEO",
    image: "../images/kartic-aa.png",
    socials: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/savanipriyank1990",
        icon: "/path/to/bg-fb.svg",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanksavani/",
        icon: "/path/to/bg-ln.svg",
      },
    ],
  },
  {
    name: "Ankur Lakhani",
    role: "CTO",
    image: "../images/bhavntik-aa.png",
    socials: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/lakhani.ankur.7",
        icon: "/path/to/bg-fb.svg",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ankur-lakhani-07a12734/",
        icon: "/path/to/bg-ln.svg",
      },
    ],
  },
];

const MeetFounders = () => {
  return (
    <div className="py-12 px-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Founders</h2>
        <p className="text-lg text-gray-600">
          Meet our main strong pillars of Identixweb
        </p>
      </div>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {foundersData.map((founder, index) => (
          <FounderCard key={index} founder={founder} />
        ))}
      </div>
    </div>
  );
};

export default MeetFounders;
