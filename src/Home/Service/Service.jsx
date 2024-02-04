import React from "react";

const Service = () => {
  return (
    <div id="service">
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Services
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Frontend Service 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-700 text-justify">
                  Create visually stunning and responsive websites that adapt
                  seamlessly to various screen sizes and devices.
                </p>
              </div>
            </div>
            {/* Frontend Service 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">React Development</h3>
                <p className="text-gray-700 text-justify">
                  Build modern and dynamic user interfaces using React, a
                  powerful JavaScript library for frontend development.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  MERN Stack Development
                </h3>
                <p className="text-gray-700 text-justify">
                  Full-stack development using MongoDB, Express.js, React, and
                  Node.js. Building scalable and robust web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
