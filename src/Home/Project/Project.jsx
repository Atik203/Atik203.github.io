import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  const projectVariants = {
    hover: { scale: 1.2 },
  };

  return (
    <div id="project" className="my-20">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-16">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row items-center w-full md:w-4/5 mx-auto lg:w-full justify-center gap-10">
        {/* Project 1 */}
        <motion.div
          className="bg-base-200 shadow-xl h-[480px] md:h-[500px]  rounded-md w-full lg:w-1/3"
          whileHover="hover"
          whileTap="tap"
          variants={projectVariants}
        >
          <div className="box box-1"></div>
          <div className="p-4">
            <h1 className="text-red-500 text-2xl font-bold my-3">ContestHub</h1>
            <p className="text-justify font-base mb-3">
              ContestHub fosters Creativity, Community Engagement, and Seamless
              Contest Management with Admin Control and Multiple Dashboards.
            </p>
            <div className="flex items-center gap-2 md:gap-4 mt-1">
              <a
                href="https://contesthub.surge.sh/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                visit <FaExternalLinkAlt></FaExternalLinkAlt>
              </a>
              <a
                href="https://github.com/Atik203/ContestHub-Client-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Client <FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/Atik203/ContestHub-Server-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Server <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-base-200 shadow-xl h-[480px]  md:h-[500px] rounded-md w-full lg:w-1/3"
          whileHover="hover"
          whileTap="tap"
          variants={projectVariants}
        >
          <div className="box box-2"></div>
          <div className="p-4">
            <h1 className="text-green-500 text-2xl font-bold my-3">
              The Brand Shop
            </h1>
            <p className="text-justify font-base mb-3">
              The Brand Shop is a feature-rich e-commerce web application that
              allows users to explore, purchase, and manage products from
              various brands.
            </p>
            <div className="flex items-center gap-2 md:gap-4 mt-1">
              <a
                href="https://strong-cows.surge.sh/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                visit <FaExternalLinkAlt></FaExternalLinkAlt>
              </a>
              <a
                href="https://github.com/Atik203/The-Brand-Shop-Client-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Client <FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/Atik203/The-Brand-Shop-Server-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Server <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="bg-base-200 shadow-xl h-[480px]  md:h-[500px] rounded-md w-full lg:w-1/3"
          whileHover="hover"
          whileTap="tap"
          variants={projectVariants}
        >
          <div className="box box-3"></div>
          <div className="p-4">
            <h1 className="text-red-500 text-2xl font-bold my-3">
              RestoControl
            </h1>
            <p className="text-justify font-base mb-3">
              RestoControl is an advanced restaurant management system, offering
              an efficient and user-friendly solution for both restaurant owners
              and customers.
            </p>
            <div className="flex items-center gap-2 md:gap-4 mt-1">
              <a
                href="https://restocontrol.surge.sh/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                visit <FaExternalLinkAlt></FaExternalLinkAlt>
              </a>
              <a
                href="https://github.com/Atik203/Restaurant-Management-Client-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Client <FaGithub></FaGithub>
              </a>
              <a
                href="https://github.com/Atik203/Restaurant-Management-Server-Side"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline border-black text-sm text-black hover:text-red-500 hover:bg-white hover:border-red-500"
              >
                Server <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
