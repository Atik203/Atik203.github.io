import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover hover:text-red-500">
          <ScrollLink
            to="#home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </ScrollLink>
        </a>
        <a>
          <ScrollLink
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:underline hover:text-red-500"
          >
            Services
          </ScrollLink>
        </a>
        <a className="link link-hover hover:text-red-500">
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </ScrollLink>
        </a>
        <a className="link link-hover hover:text-red-500">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </ScrollLink>
        </a>
        <a className="link link-hover hover:text-red-500">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </ScrollLink>
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-row lg:grid-flow-col items-center justify-center gap-4">
          <div className="">
            <h2 className="text-base font-bold">
              Email:{" "}
              <span>
                {" "}
                <a
                  href="mailto:atikurrahaman0305@gmail.com"
                  className="font-semibold hover:underline hover:text-red-500 cursor-pointer"
                >
                  atikurrahaman0305@gmail.com
                </a>
              </span>{" "}
            </h2>
          </div>
          <div className="">
            <h2 className="text-base font-bold ">
              Phone:{" "}
              <span>
                <a
                  href="tel:+8801723383575"
                  className="font-semibold hover:underline hover:text-red-500 cursor-pointer"
                >
                  +8801723383575
                </a>
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-4xl justify-center font-bold">
            <a
              href="https://github.com/Atik203"
              rel="noreferrer"
              target="_blank"
              className="hover:text-purple-500 hover:bg-white rounded-full border-none"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/atikur-rahaman-203cba/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#0077b5] hover:bg-white"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <h1>Location: Dhaka,Bangladesh</h1>
      </nav>
      <aside>
        <p>
          Copyright &copy; 2024 - All right reserved by{" "}
          <span className="link-hover hover:text-red-500">
            Md.Atikur Rahaman
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
