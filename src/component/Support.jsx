import React, { useState } from "react";

const ClientSupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to an API or server
  };

  return (
    <div className="client-support-form min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-[#025add] mb-8">
          Client Support Form
        </h2>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Fields */}
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="form-group md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md w-full sm:w-auto hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Google Map Embed or India Map Image */}
      <div className="map-container mt-16 w-full " style={{ position: "relative", paddingBottom: "40.25%" }}>
        {/* Google Maps Embed (example for India) */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.387973656992!2d73.16454031496398!3d22.307158885318557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cfd888fba3%3A0x2e2360e00e947611!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635202567639!5m2!1sen!2sin"
          width="100%"
          height="70%"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
          allowFullScreen
          loading="lazy"
          className="px-10 -pb-40"
        ></iframe>
      </div>
    </div>
  );
};

export default ClientSupportForm;
