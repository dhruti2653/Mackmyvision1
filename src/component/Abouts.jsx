import React from "react";

const CustomPostItem = ({ title, description, image, link }) => {
  return (
    <div
      className="custom-posts--item w-full sm:w-1/2 lg:w-1/3 p-4 group"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <a
        href={link}
        className="custom-posts--link block relative overflow-hidden rounded-lg"
      >
        {/* Image Section Above the Title */}
        <div className="custom-posts--thumb relative h-64">
          <img
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt={title}
          />
        </div>

   

        {/* Content Section */}
        <div
          className="custom-posts--content absolute inset-0 flex flex-col justify-end bg-gradient-to-t 
          from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          {/* Title */}
          {/* <h3 className="custom-posts--title text-xl font-semibold text-white mb-2">
            {title}
          </h3> */}

          {/* Description */}
          <p className="text-xl text-gray-100 mb-4">{description}</p>

          {/* Call-to-Action */}
          {/* <span
            className="link-more text-blue-500 font-medium inline-flex items-center group-hover:underline"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span> */}
        </div>
      </a>
      {/* Title Section Below the Image */}
   <div className="py-2 border-2 border-t-0 rounded-lg">
          <h3 className="custom-posts--title text-xl font-semibold text-center  text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
            {title}
          </h3>
        </div>
    </div>
  );
};

const HoverEffectGrid = () => {
  const posts = [
    {
      title: "Hira patel",
      description:
        "See why FieldEdge is the trusted solution for thousands of businesses across the nation.",
      image:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg",
      link: "https://fieldedge.com/field-service-software/",
    },
    {
      title: "mahi korat",
      description:
        "Simplify tasks with FieldEdge's powerful scheduling tools.",
      image:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-2.jpg",
      link: "https://fieldedge.com/scheduling/",
    },
    {
      title: "rahi patel",
      description:
        "Deliver excellent service and keep your customers happy.",
      image:
        "https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg",
      link: "https://fieldedge.com/field-service-software/",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-14">
      <div className="flex flex-wrap -mx-4">
        {posts.map((post, index) => (
          <CustomPostItem
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HoverEffectGrid;
