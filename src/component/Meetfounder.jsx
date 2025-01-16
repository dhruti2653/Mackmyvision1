import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const MeetFounders = () => {
  const founders = [
    {
      name: "Priyank Savani",
      position: "CEO",
      imgSrc:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      backgroundImage: "../images/founders-bg.png",
    },
    {
      name: "Ankur Lakhani",
      position: "CTO",
      imgSrc:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      backgroundImage: "../images/founders-bg.png",
    },
    {
      name: "Ankur Lakhani",
      position: "CTO",
      imgSrc:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg",
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      backgroundImage: "../images/founders-bg.png",
    },
  ];

  return (
    <div className="meet-founders mt-10 px-5 lg:mt-16">
        {/* Heading */}
        <h2  data-aos="fade-down"
    data-aos-delay="1000" className="text-3xl font-medium  text-[#025add] text-center lg:mb-36">
          Meet Our Founders
        </h2>
      <div className="container mx-auto px-4">

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {founders.map((founder, index) => {
    // Determine the AOS effect based on the index
    const aosEffect =
      index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left";

    return (
      <div
        key={index}
        data-aos={aosEffect} // Assign AOS effect here
        className="founders relative mt-32 lg:mt-0 rounded-3xl h-[360px] p-5 py-12 shadow-xl hover:shadow-2xl flex flex-col items-center"
        style={{
          backgroundImage: `url(${founder.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          {/* Founder Image with Hexagon Shape */}
          <div className="founders-img mb-4 w-60 h-64 -mt-[155px] relative overflow-hidden">
            <img
              src={founder.imgSrc}
              alt={founder.name}
              className="w-full h-full object-cover shadow-md"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>

          {/* Founder Details */}
          <div className="founders-detail mt-7 text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              {founder.name}
            </h3>
            <h4 className="text-xl mt-2 text-gray-500">{founder.position}</h4>

            {/* Social Links */}
            <div className="founder-social items-center justify-center mt-4 flex gap-4">
              <a
                href={founder.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl border-8 border-white bg-blue-600 transition duration-300"
              >
                <FaFacebookF className="text-white text-3xl" />
              </a>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl border-8 border-white bg-blue-700 transition duration-300"
              >
                <FaLinkedinIn className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default MeetFounders;
