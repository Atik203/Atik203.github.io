import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaSchool, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="my-24">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-8">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-5">
        <div className="md:w-1/2">
          {/* Your introduction text goes here */}
          <h1 className="text-justify text-lg text-gray-700">
            Hello, I'm Md. Atikur Rahaman, a dedicated second-year Computer
            Science and Engineering student at United International University.
            Passionate about technology, I've cultivated strong foundations in
            MERN stack development. Proficient in React, I specialize in
            crafting dynamic and responsive user interfaces to enhance the
            overall user experience.
          </h1>
          <h1 className="text-xl font-bold my-3">Experience</h1>
          <h3 className="font-semibold">Web Development Journey</h3>
          <p className="text-justify">
            Over the past six months, I have immersed myself in the field of web
            development, focusing on building practical skills and gaining
            hands-on experience. Through self-directed learning and project
            work, I have achieved the following:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Completed several web development projects using technologies such
              as HTML, CSS, JavaScript, React, MongoDB, Express.js and Node.js.
            </li>
            <li>
              Developed proficiency in the MERN (MongoDB, Express.js, React,
              Node.js) stack.
            </li>
            <li>
              Designed and implemented responsive and user-friendly web
              interfaces.
            </li>
            <li>
              Practiced Git for version control and collaboration on projects.
            </li>
          </ul>
          <div className="flex items-center mt-4 gap-5">
            <div>
              <a
                href="https://drive.google.com/uc?export=download&id=1TTRCL_RE_VAyPM-QHafumBI5YFoXKO6L"
                rel="noreferrer"
                download
                className="btn bg-red-500 text-white border-none text-lg font-semibold hover:text-black hover:bg-gray-300"
              >
                Resume{" "}
                <span className="text-bold text-xl">
                  <FiDownload></FiDownload>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-4xl font-bold">
              <a
                href="https://github.com/Atik203"
                rel="noreferrer"
                target="_blank"
                className="hover:text-purple-500"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
                rel="noreferrer"
                target="_blank"
                className="hover:text-[#0077b5]"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-center">Education</h1>
          <VerticalTimeline lineColor={"red"}>
            <VerticalTimelineElement
              className=""
              contentStyle={{
                background: "rgb(241 245 249)",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="01/2023 - Present"
              iconStyle={{ background: "rgb(241 245 249)", color: "black" }}
              icon={<FaUniversity></FaUniversity>}
              dateClassName="date-style"
            >
              <h3 className="vertical-timeline-element-title text-lg">
                Bsc in Computer Science and Engineering
              </h3>
              <h4 className="text-base text-gray-700">
                United International University
              </h4>
              <p>Dhaka, Bangladesh</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{
                background: "rgb(241 245 249)",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="06/2018 - 11/2020"
              iconStyle={{ background: "rgb(241 245 249)", color: "black" }}
              icon={<FaSchool></FaSchool>}
              dateClassName="date-style-2"
            >
              <h3 className="vertical-timeline-element-title">
                Higher Secondary Certificate
              </h3>
              <h4 className="text-base text-gray-700">
                Birshreshtha Munshi Abdur Rouf Public College
              </h4>
              <p>Dhaka, Bangladesh</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
