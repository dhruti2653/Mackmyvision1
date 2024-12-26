import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // React Icons

const Contactdetail = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Title and Description Section */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-4xl font-medium text-[#025add] mb-4">Our Direction</h2>
        <h2 className="text-3xl font-bold mb-4 leading-tight">
          Get in touch with us. We love talking about digital strategy
        </h2>
        <p className="text-gray-700 text-xl">
          So, make the decision to move forward. Commit your decision to paper, just to bring it into focus. Then, go for it!
        </p>
      </div>

      {/* Image and Contact Details Section */}
      <div className="flex flex-col lg:flex-row lg:pr-16 pr-0 lg:items-center mb-12">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="../images/contact.png" // Replace with your image URL
            alt="Our Direction"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Contact Details Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:pl-16 pl-0 lg:mt-0">
          <div className="contact_informaion_content aos-init aos-animate" data-aos="slide-right">
            <ul className="contact-info-links space-y-6">
              <li>
                <div className="info-box p-4 bg-white shadow-md rounded-lg flex flex-col space-y-4">
                  <div className="box flex items-center space-x-4">
                    <div className="info-icon-box">
                      <FiMapPin size={30} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                    </div>
                  </div>
                  <div className="text">
                    <a
                      href="https://www.google.com/maps/place/Codeline+Infotech/@21.2136994,72.8851651,15z/data=!4m5!3m4!1s0x0:0x4fa4fd1fcc62c6cc!8m2!3d21.2136672!4d72.8850348"
                      target="_blank"
                      className="text-black text-xl"
                    >
                      - 316 Anupam Business Hub, Yogi Chowk Road, Opp. Vijay Nagar, Surat, Gujarat 395006
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="info-box p-4 bg-white shadow-md rounded-lg flex flex-col space-y-4">
                  <div className="box flex items-center space-x-4">
                    <div className="info-icon-box">
                      <FiMail size={30} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Send a Mail</h4>
                    </div>
                  </div>
                  <div className="text">
                    <a href="mailto:info@codelineinfotech.com" className="text-black text-xl">
                      info@codelineinfotech.com
                    </a>
                  </div>
                  <div className="text -mt-2">
                    <a href="mailto:info@codelineinfotech.com" className="text-black text-xl">
                      info@codelineinfotech.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="info-box p-4 bg-white shadow-md rounded-lg flex flex-col space-y-4">
                  <div className="box flex items-center space-x-4">
                    <div className="info-icon-box">
                      <FiPhone size={30} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-2xl">Make a Call</h4>
                    </div>
                  </div>
                  <div className="text">
                    <a href="tel:9904647575" className="text-black text-xl">
                      +91 81550 17575
                    </a>
                  </div>
                  <div className="text">
                    <a href="tel:9904647575" className="text-black text-xl">
                      +91 81550 17575
                    </a>
                    <p className="text-sm text-gray-700 mt-2">Mon - Fri: 09.00 to 18.00</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactdetail;
