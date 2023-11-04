import React from "react";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-2 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <FcHome
                size={32}
                className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              />
            </span>
            <h1 className=" text-xl font-semibold p-3 text-blue-900 ">
              MyHome
            </h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              About
            </NavLink>
            <NavLink
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Project
            </NavLink>
            <NavLink
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              className={({ isActive }) =>
                isActive ? "text-red-700" : "text-green-700"
              }
            >
              Service
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
