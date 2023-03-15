import React from "react";
import image from "../../assets/image-23.webp";
import image2 from "../../assets/image-24.webp";
import image3 from "../../assets/image-25.webp";
import image4 from "../../assets/image-26.webp";
import image5 from "../../assets/image-27.webp";
import image6 from "../../assets/image-28.webp";
import Button from "../button/Button";

function Interior() {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
          <img className="mb-4" src={image2} alt="image not found" />
          <img src={image3} alt="image not found" />
        </div>
        <div>
          <img className="h-full" src={image} alt="image not found" />
        </div>
        <div>
          <div className="h-2/4 pb-4">
            <img className=" h-full" src={image4} alt="image not found" />
          </div>
          <div className="h-2/4" >
            <img  className="h-full" src={image5} alt="image not found" />
          </div>
        </div>
        <div>
          <img className="h-full" src={image6} alt="image not found" />
        </div>
      </div>
      <div className="w-full max-w-xl mx-auto mt-[30px] mb-12">
        <p className="text-center font-normal text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim
        </p>
      </div>

      <div className="flex justify-center">
        <Button title="View all" />
      </div>
    </div>
  );
}

export default Interior;
