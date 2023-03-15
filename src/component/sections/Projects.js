import React from "react";
import rectangle2Img from "../../assets/rectangle2.png";
import Button from "../button/Button";
import image from "../../assets/image-1.webp";
import image1 from "../../assets/image-5.webp";
import image2 from "../../assets/image-3.webp";
import image3 from "../../assets/image-4.webp";
import ImageSlider from "../slider/ImageSlider";
import Interior from "../interior/Interior";

function Projects() {
  return (
    <div
      className="bg-no-repeat m-0  pt-72"
      style={{ backgroundImage: `url(${rectangle2Img})` }}
    >
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img src={image} alt="image not found" />
            <img className="mt-4" src={image1} alt="image not found" />
          </div>
          <div>
            <img src={image3} alt="image not found" />
            <img className="mt-4" src={image2} alt="image not found" />
          </div>
        </div>
        <div className="bg-white/80 p-20">
          <h2 className="text-center font-medium text-4xl text-[#241330]">
            Our Projects
          </h2>
          <p className="text-[18px] font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </p>
          <p className="text-[18px] font-normal text-center my-8">
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla
          </p>
          <Button title="View all" />
        </div>
      </div>
      <div>
        <h1 className="font-meduim text-4xl mb-[60px]">Blogs</h1>
        <ImageSlider />
        <div className="flex justify-center mt-16 mb-20">
          <Button title="View all" />
        </div>
      </div>
      <div>
        <h1 className="font-medium text-4xl text-center mb-12">Our Interior Design Products</h1>
        <Interior/>
      </div>
    </div>
  );
}

export default Projects;
