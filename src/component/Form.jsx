import React from 'react';

const Form = () => {
  // Function to validate phone number input
  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  };

  return (
    <div className="container mx-auto px-4 pb-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <span className="text-4xl font-medium text-[#025add]">Contact Us</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold">
          Need assistance? Please fill the form
        </h2>
      </div>

      {/* Form Wrapper */}
      <div className="bg-gray-100 w-full shadow-md rounded-lg p-8  mx-auto">
        <form className="space-y-6">
          {/* Grid for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name Input */}
            <input
              type="text"
              className="form-input border border-gray-400 rounded-md px-4 py-3 focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all"
              placeholder="Name"
              required
              aria-label="Name"
            />
            {/* Email Input */}
            <input
              type="email"
              className="form-input border border-gray-400 rounded-md px-4 py-3 focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all"
              placeholder="Email"
              required
              aria-label="Email"
            />
            {/* Phone Input */}
            <input
              type="tel"
              className="form-input border border-gray-400 rounded-md px-4 py-3 focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all"
              placeholder="Phone"
              required
              aria-label="Phone"
              onInput={handlePhoneInput} // Restrict input to numbers only
            />
          </div>

          {/* Message Textarea */}
          <textarea
            className="form-textarea border border-gray-400 rounded-md px-4 py-3 focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all w-full"
            rows="6"
            placeholder="Message"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <span>Send Message</span>
              <svg
                className="ml-3"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_59_253)">
                  <path
                    d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M9.83594 20.8889L9.83594 0"
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_59_253">
                    <rect
                      width="21.3333"
                      height="20"
                      fill="white"
                      transform="translate(20) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
