import { FaHandshake, FaClipboardList, FaFileInvoiceDollar } from 'react-icons/fa';

const NextSteps = () => {
  return (
    <div className="container mx-auto px-4 py-8  pb-20">
      <div className="section-heading text-center mb-8">
        <h2 className="text-3xl font-semibold">So What Next?</h2>
      </div>

      {/* Responsive Flex Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Box 1 */}
        <div className="next-design-one w-full md:w-1/3 flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
          <div className="next-icon mb-4">
            <FaHandshake className="text-blue-500 w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Connect with Us</h4>
          <p>
            Reach out to us to discuss your project vision and start the journey towards innovative solutions and impactful results.
          </p>
        </div>

        {/* Box 2 */}
        <div className="next-design-two w-full md:w-1/3 flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
          <div className="next-icon mb-4">
            <FaClipboardList className="text-blue-500 w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Requirement Analysis</h4>
          <p>
            We’ll analyze your requirements in detail, ensuring we understand your goals and craft a tailored plan for success.
          </p>
        </div>

        {/* Box 3 */}
        <div className="next-design-three w-full md:w-1/3 flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
          <div className="next-icon mb-4">
            <FaFileInvoiceDollar className="text-blue-500 w-12 h-12" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Final Project Estimate</h4>
          <p>
            Receive a comprehensive project estimate based on detailed analysis, outlining the scope, costs, and timelines for your approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
