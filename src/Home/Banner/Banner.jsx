import img from "../../../public/Untitled design.png";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0 justify-around">
      <div className="pl-3 mt-4 md:mt-0 space-y-4">
        <h1 className="font-bold text-2xl lg:text-5xl">
          Hi, I am <br /> Md.Atikur Rahaman
        </h1>
        <h1 className="font-semibold text-base md:text-xl lg:text-3xl">
          <span className="text-red-500 inline-block mr-1">
            <Typewriter
              options={{
                strings: ["Front-End", "MERN Stack", "React"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
          Developer
        </h1>

        <h2 className="text-black text-lg">
          A dedicated and passionate learner, proficient in MERN Stack and
          Front-End development, and specializing in React.
        </h2>
        <div className="flex items-center gap-5">
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
      <div>
        <img src={img} className="w-11/12 mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Banner;
