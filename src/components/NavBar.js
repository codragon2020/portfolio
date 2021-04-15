import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-green-600 relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            >
              Jason McGinthy
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent inline-block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/project"
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/post"
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                >
                  Blog Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                >
                  About Me!
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
