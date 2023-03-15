import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from "../../assets/image-6.webp";
import image3 from "../../assets/image-7.webp";
import image4 from "../../assets/image-8.webp";
import image5 from "../../assets/image-9.webp";
import image6 from "../../assets/image-10.webp";

function ImageSlider() {
  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings} className="overflow-hidden">
        <div className=" pl-6">
          <img src={image6} alt="sdfkdn" width={500} height={1000} />
          <h1 className="font-meduim text-2xl my-4">Modern Interior</h1>
          <p className="font normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
        <div className=" pl-6">
          <img src={image2} alt="sdfkdn" />
          <h1 className="font-meduim text-2xl my-4">Exterior Project</h1>
          <p className="font normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
        <div className=" pl-6">
          <img src={image3} alt="sdfkdn" />
          <h1 className="font-meduim text-2xl my-4">Grey Beauty</h1>
          <p className="font normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
        <div className=" pl-6">
          <img src={image4} alt="sdfkdn" />
          <h1 className="font-meduim text-2xl my-4">Role of furnitures</h1>
          <p className="font normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
        <div className=" pl-6">
          <img src={image5} alt="sdfkdn" />
          <h1 className="font-meduim text-2xl my-4">Plantation interior</h1>
          <p className="font normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
