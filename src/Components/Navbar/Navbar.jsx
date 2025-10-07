import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import gitLogo from '../../assets/gitHubLOgo.png'
const Navbar = () => {
    const link = (
      <>
        <NavLink
          to={"/"}
          className=" font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#632EE3] to-[#9F62F2]"
        >
          Home
        </NavLink>
        <NavLink
          to={"/apps"}
          className="font-medium text-lg ml-[32px] mr-[32px]"
        >
          Apps
        </NavLink>
        <NavLink to={"/installations"} className="font-medium text-lg">
          Instalations
        </NavLink>
      </>
    );
    
    return (
      <div className="navbar bg-base-100 shadow-sm px-[80px] py-[19px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <NavLink to={"/"} className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#632EE3] to-[#9F62F2] flex items-center">
            <img className='h-10 w-10 mr-1' src={logoImg} alt="Image Of Logo" /> HERO.IO
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/ArifulIslam016" className="text-white btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">
            {" "}
            <img src={gitLogo} alt="" />
            Contribute
          </a>
        </div>
      </div>
    );
};

export default Navbar;