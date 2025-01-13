import React from 'react';
// import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import heroBg from '../images/hero-bg.png';

const Slider = () => {
  return (
    <section
    id="hero"
    className="relative w-full h-screen bg-cover bg-center overflow-hidden flex items-center"
    style={{ backgroundImage: `url('/images/hero-bg.png')`, backgroundColor: '#025add' }}
  >
  
  
      {/* Particle Background (optional) */}
      <div id="particles-js" className="absolute inset-0">
        <canvas className="w-full h-full"></canvas>
      </div>

      {/* Repulse Circle Background (optional) */}
      <div id="repulse-circle-div" className="absolute inset-0"></div>

      <div className="container mx-auto relative pt-10x px-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-start space-y-6 lg:space-y-0">
          <div className="lg:w-7/12 lg:ml-auto text-white p-8  flex flex-col justify-start items-start">
            <h2
              className="text-2xl lg:text-[45px] font-medium mb-4"
              data-aos="fade-up"
            >
              Delivering Superior Services<br></br>
              <span className="lg:text-[32px] text-[24px] text-indigo-500">IT Solutions.</span>
              <span
                className="ml-2 w-3 h-3 inline-block rounded-full animate-ping bg-indigo-500 "
                data-aos="fade-right"
                data-aos-delay="800"
              >
                .
              </span>
            </h2>
            <p
              className="text-gray-300 mb-8 font-bold"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              You can easily change any design to your own. It is also a  highly<br></br>
              customizable SEO-friendly template.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start text-white pb-7 relative">
      <div className="flex flex-row  items-center space-x-9 md:items-start md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold">
          100<span className="text-blue-500">%</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-2">Customers Satisfaction</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
        <div className="h-1 bg-blue-500 w-1/4"></div>
      </div>
    </div>

            {/* <div
              className="flex space-x-4 mt-10 mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a href="#" className=" hover:text-[#025add] text-indigo-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" hover:text-[#025add] text-indigo-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className=" hover:text-[#025add] text-indigo-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className=" hover:text-[#025add] text-indigo-500">
                <FaInstagram size={20} />
              </a>
            </div> */}

            <div className="flex space-x-4 mt-4 lg:mt-10">
              <a
                href="/support"
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-[#025add] transition"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Get Quotes
              </a>
              <a
                href="/services"
                className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-[#025add] transition"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
