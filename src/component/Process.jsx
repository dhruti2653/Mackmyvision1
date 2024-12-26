// import { FaSearch, FaCog, FaCode, FaClipboardList } from 'react-icons/fa';

const BoxComponent = () => {
  return (
    <div className="container mx-auto mt-10 px-4 py-8">
      <h2 className="text-4xl font-medium text-center mb-3 text-[#025add]">Our Process</h2>

      {/* Main container for the boxes */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 mt-7 items-center sm:justify-between">
        {/* Box 1: Search */}
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
          <div className="group bg-white p-6 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/quality-focused (1).gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>


            </div>
            <h3 className="text-center text-xl font-semibold">Search</h3>
            <p className="mt-2 text-center text-gray-700">Find what you're looking for quickly.</p>
          </div>

          {/* Dotted Line */}
          <div className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 2: Concept */}
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div className="group bg-white p-6 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/innovation.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Concept</h3>
            <p className="mt-2 text-center text-gray-700">Creative ideas for building solutions.</p>
          </div>

          {/* Dotted Line */}
          <div className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 3: Develop */}
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div className="group bg-white p-6 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/web-development.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Develop</h3>
            <p className="mt-2 text-center text-gray-700">Developing quality solutions for the future.</p>
          </div>

          {/* Dotted Line */}
          <div className="hidden sm:block w-full sm:w-auto">
            <span className="text-gray-500 text-xl">..................</span>
          </div>
        </div>

        {/* Box 4: Test */}
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6 mt-6 sm:mt-0">
          <div className="group bg-white p-6 rounded-lg border-2 border-blue-500 shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-10px]">
            <div className="flex justify-center mb-4">
              <div className="border-2 p-4 border-gray-300 rounded-full shadow-xl">
                <img
                  src="../images/600-projects.gif"
                  alt="Bold Image"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-semibold">Test</h3>
            <p className="mt-2 text-center text-gray-700">Test our solutions for quality assurance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
