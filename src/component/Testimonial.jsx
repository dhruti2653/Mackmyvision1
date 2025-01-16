import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sivay Sensor",
      photo: "/images/sivaysensor.jpeg",
      text: "“Working with MackMyVision to design our website for Sivay Sensor was a fantastic experience. Their team delivered a seamless, modern, and highly functional site that perfectly reflects our brand. The design is both visually appealing and user-friendly across all devices. We couldn’t be happier with the results!”",
    },
    {
      name: "First Care Clinic",
      photo: "/images/firstcare.png",
      text: "“We partnered with MackMyVision to redesign our website for First Care Clinic, and the experience was exceptional. Their team delivered a modern, user-friendly design that perfectly represents our brand and services. The responsiveness and professionalism of their team exceeded our expectations. Highly recommended!”",
    },
    {
      name: "Maruti Nandan",
      photo: "/images/marutinandan.jpeg",
      text: "“Partnering with MackMyVision to revamp our website for Maruti Nandan Survey was a fantastic experience. Their team delivered a modern, user-friendly website that aligns perfectly with our brand. The professionalism, attention to detail, and timely delivery exceeded our expectations. We highly recommend MackMyVision for any web design project!”",
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

  return (
    <section className="bg-blue-100 py-10 overflow-hidden">
      <h2
        data-aos="fade-left"
        data-aos-delay="1000"
        className="text-4xl font-medium text-center text-[#025add] mb-4"
      >
        Testimonial
      </h2>
      <h2
        data-aos="fade-right"
        data-aos-delay="1000"
        className="text-center text-3xl font-semibold mb-6 relative"
      >
        Our Customers Love Us. Here’s Why.
        <hr
          data-aos="fade-up"
          data-aos-delay="1000"
          className="border-2 border-blue-600 w-32 mx-auto mt-2"
        />
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
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 object-contain"
                  />
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="text-xl font-semibold"
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    className="mt-3 text-gray-600 italic"
                  >
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex justify-center mt-6"
      >
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
