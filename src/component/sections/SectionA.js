import React from "react";
import home from "../../assets/home.webp";
import Button from "../button/Button";

function SectionA() {
  return (
    <div className="lg:grid-cols-2 grid grid-cols-1  relative">
      <div className="">
        <img className="h-[500px] lg:w-[600px] w-full " src={home} alt="home" />
      </div>
      <div className=" bg-white/80 absolute lg:left-[32%] left-[5%] right-[5%] sm:left-[10%]   sm:right-[10%]  lg:bottom-20 bottom-0 px-10 xl-px-40  py-16">
        <h2 className="font-normal text-3xl text-center">
          Get personalised home interiors
        </h2>
        <p className="text-5xl font-semibold text-center">in just 50 days</p>
        <div className="flex justify-center mt-11">
          <Button title="SPEAK WITH A ONLINE CONSULTANT" />
        </div>
      </div>
    </div>
  );
}

export default SectionA;
