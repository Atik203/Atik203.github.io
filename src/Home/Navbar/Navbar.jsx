import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a to="home" className="font-bold">
          Home
        </a>
      </li>
      <li>
        <ScrollLink
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="service"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          About Me
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          Contact Me
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div id="home" className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a
          id="#home"
          className="cursor-pointer text-red-400 text-2xl font-bold"
        >
          ATIKUR
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-bold">{links}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
