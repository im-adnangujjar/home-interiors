import React from "react";
import Logo from "../../assets/svg-images/logo.svg";
import { ReactComponent as Fbicon } from "../../assets/svg-images/fb-icon.svg";
import { ReactComponent as Insta } from "../../assets/svg-images/insta-icon.svg";
import { ReactComponent as Twicon } from "../../assets/svg-images/tw-icon.svg";
import { ReactComponent as Inicon } from "../../assets/svg-images/in-icon.svg";
import { ReactComponent as Yticon } from "../../assets/svg-images/yt-icon.svg";

function Footer() {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="pb-14 max-w-7xl hidden flex-col justify-center w-full mx-auto pr-6 md:flex">
        <div className="flex gap-6 flex-wrap justify-between  w-full pt-14">
          <div className="w-full max-w-[419px]">
            <img src={Logo} alt="logo" />
            <p className="font-normal text-[18px] ml-6 my-8 text-[#3D3D3D] ">
              We introduce our selves as LAND Interior and Architectural Design
              Consultancy – one of the best interior designers in Chennai.
              Chennai Luxury Interior and Architectural Design Consultancy has
              challenged the conventional way of interior designing and given
              new dimensions to the art of interior designing.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-[18px] font-semibold text-[#4F4F4F]">
              WHAT WE DO
            </h2>
            <ul className="mt-16 whitespace-nowrap text-[#4F4F4F]">
              <li className="text-[18px] font-medium leading-7 ">
                interior Design
              </li>
              <li className="text-[18px] font-medium leading-7 ">Kitchen</li>
              <li className="text-[18px] font-medium leading-7 ">Ceiling</li>
              <li className="text-[18px] font-medium leading-7 ">Bedroom</li>
              <li className="text-[18px] font-medium leading-7 ">Smart Home</li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-[18px] font-semibold text-[#4F4F4F]">
              Get in touch
            </h2>
            <ul className="mt-14 text-[#4F4F4F]">
              <li className="text-[18px] font-medium  leading-7 ">
                landinteriors@gmail.com
              </li>
              <li className="text-[18px] font-medium ">+91 98987 65656</li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div>
            <ul className="flex gap-20 justify-end mr-10">
              <li className="text-black text-[18px]">About</li>
              <li className="text-black text-[18px]">Projects</li>
              <li className="text-black text-[18px]">Studio</li>
              <li className="text-black text-[18px]">Blog</li>
              <li className="text-black text-[18px]">Contact</li>
            </ul>
          </div>
          <div className=" flex gap-2 items-center mt-3 ml-6">
            <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
              <div className="bg-white w-7  h-7 flex justify-center items-center">
                <Fbicon />
              </div>
            </div>
            <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
              <div className="bg-white w-7  h-7 flex justify-center items-center">
                <Inicon />
              </div>
            </div>
            <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
              <div className="bg-white w-7  h-7 flex justify-center items-center">
                <Twicon />
              </div>
            </div>
            <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
              <div className="bg-white w-7  h-7 flex justify-center items-center">
                <Yticon />
              </div>
            </div>
            <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
              <div className="bg-white w-9  h-9 flex justify-center items-center">
                <Insta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center p-6">
        <div>
          <div className="w-28 flex ml-16">
            <img src={Logo} alt="logo" />
          </div>

          <ul className="mt-4 text-[#4F4F4F]">
            <li className="text-[18px] font-medium  leading-7 text-center ">
              landinteriors@gmail.com
            </li>
            <li className="text-[18px] font-medium text-center ">
              +91 98987 65656
            </li>
          </ul>
        </div>
        <div className=" flex gap-2 items-center mt-3">
          <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
            <div className="bg-white w-7  h-7 flex justify-center items-center">
              <Fbicon />
            </div>
          </div>
          <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
            <div className="bg-white w-7  h-7 flex justify-center items-center">
              <Inicon />
            </div>
          </div>
          <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
            <div className="bg-white w-7  h-7 flex justify-center items-center">
              <Twicon />
            </div>
          </div>
          <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
            <div className="bg-white w-7  h-7 flex justify-center items-center">
              <Yticon />
            </div>
          </div>
          <div className="bg-[#E5E5E5] rounded-md w-12 h-12 flex justify-center items-center ">
            <div className="bg-white w-9  h-9 flex justify-center items-center">
              <Insta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
