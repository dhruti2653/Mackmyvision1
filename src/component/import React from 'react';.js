import React from 'react';

const CustomPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'See what FieldEdge can do for your business!',
      excerpt: 'See why FieldEdge is the trusted solution for thousands of businesses across the nation.',
      imgSrc:
        'https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-1.jpg',
      link: 'https://fieldedge.com/field-service-software/',
    },
    {
      id: 2,
      title: 'Already using another field service software?',
      excerpt: 'See why FieldEdge is the trusted solution for thousands of businesses across the nation.',
      imgSrc:
        'https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/photo/custom-post-thumb-2.jpg',
      link: 'https://fieldedge.com/switch-to-fieldedge/',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="group relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={100 + index * 100}
          >
            <a href={post.link} className="block">
              {/* Thumbnail */}
              <div className="overflow-hidden">
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

                {/* Act Now Button */}
                <div className="mt-4 text-blue-500 font-semibold group-hover:underline flex items-center">
                  Act Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPosts;
