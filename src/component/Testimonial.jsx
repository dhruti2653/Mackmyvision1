import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Steve H.",
      photo: "/images/testo-1.jpg",
      text: "“Honest, hard-working, great graphical taste, morals. Everything you wish to find in a freelancer. One of the best I have ever worked with.”",
    },
    {
      name: "Moaz A.",
      photo: "/images/testo-3.jpg",
      text: "“They are the best game developer; they over-delivered! Very satisfied with the quality of work and professionalism. Highly recommend.”",
    },
    {
      name: "Anna B.",
      photo: "/images/testo-2.jpg",
      text: "“Absolutely amazing experience. Professional and on time. Would recommend to anyone! Very satisfied with the quality of work and professionalism. Highly recommend.”",
    },
    {
      name: "John D.",
      photo: "/images/testo-4.jpg",
      text: "“Great communication and great results. I am a repeat customer! Very satisfied with the quality of work and professionalism. Highly recommend.”",
    },
    {
      name: "Sara K.",
      photo: "/images/testo-6.jpg",
      text: "“Very satisfied with the quality of work and professionalism. Highly recommend. Very satisfied with the quality of work and professionalism. Highly recommend.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  // Manual navigation to the previous/next testimonial
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-blue-100 py-10">
      <h2 className="text-4xl font-medium text-center text-[#025add] mb-4">
        Testimonial
      </h2>
      <h2 className="text-center text-3xl font-semibold mb-6 relative">
  Our Customers Love Us. Here’s Why.
  <hr className="border-2 border-blue-600 w-32 mx-auto mt-2" />
</h2>


      <div className="relative max-w-3xl mx-auto overflow-hidden">
        {/* Testimonial Container */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-4"
              style={{ width: "100%" }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="mt-3 text-gray-600 italic">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

  
    </section>
  );
};

export default Testimonial;
