import React, { useState } from "react";
import logo from "../../assets/svg-images/logo.svg";
import menu from "../../assets/svg-images/menuicon.svg";

function Header() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div class="text-gray-400 bg-[#F8F8F8] py-14 body-font">
      <div className="flex justify-between items-center mr-8">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} alt="logo" />
        </a>
        <div className="md:flex gap-28 hidden ">
          <p className="text-xl font-medium text-[#451A64]">
            Join as Design Expert
          </p>
          <p className="text-xl font-medium text-[#451A64]">
            Partner with LAND Interiors
          </p>
        </div>
        <div onClick={handleClick} className="md:hidden block">
          <img src={menu} alt="menuIcon" />
        </div>
      </div>
      {show ? (
        <div className=" flex justify-center md:hidden ">
          <ul className="md:flex gap-16 text-[#000000] block">
            <li>About</li>
            <li>Projects</li>
            <li>Studio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : null}
      <div className=" md:flex justify-center hidden ">
          <ul className="md:flex gap-16 text-[#000000] block">
            <li>About</li>
            <li>Projects</li>
            <li>Studio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  );
}

export default Header;
