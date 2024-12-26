import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Servicess = () => {
  return (
    <div className="container mx-auto lg:mt-16 mt-0 px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Heading */}
        <div className="col-span-1">
          <h2 className="text-2xl md:text-4xl font-medium">
            Options To Fit Your Business Needs
          </h2>
          <hr className="border-2 border-blue-600 w-52 mt-4" />
        </div>

        {/* Column 2: Paragraph */}
        <div className="col-span-1 space-y-6 lg:pr-8 pr-0 font-medium">
          <p className="text-base md:text-lg text-gray-700">
            <span className="font-medium text-4xl text-gray-800">O</span>ur approach to technology strategy, security, and support means that no matter what your business needs are, we’ve got you covered.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            With three service tiers to choose from, you have some flexibility in services you get from us, but you will always get some level of our core offerings.
          </p>
        </div>

        {/* Column 3: Popular Options */}
        <div className="col-span-1">
          <h4 className="text-3xl font-medium mb-4">Popular Options</h4>
          <ul className="list-none pl-0">
            <li className="flex gap-6 mb-1">
              <span className="text-blue-500 text-3xl ">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-lg font-medium text-gray-700">Advanced Backup</span>
            </li>
            <li className="flex gap-6 mb-1">
              <span className="text-blue-500 text-3xl ">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-lg font-medium text-gray-700">Disaster Recovery</span>
            </li>
            <li className="flex gap-6 mb-1">
              <span className="text-blue-500 text-3xl ">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-lg font-medium text-gray-700">Email and Online Security Services</span>
            </li>
            <li className="flex gap-6 mb-1">
              <span className="text-blue-500 text-3xl ">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-lg font-medium text-gray-700">Third Party/Vendor Management</span>
            </li>
            <li className="flex gap-6 mb-1">
              <span className="text-blue-500 text-3xl ">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-lg font-medium text-gray-700">Technology and Security Employee Training</span>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicess;
