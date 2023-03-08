import React from "react";
import rectangleImg from "../../assets/rectangle.webp";
import calendar from "../../assets/svg-images/calendar.svg";
import smile from "../../assets/svg-images/bx-home-smile.svg";
import outline from "../../assets/svg-images/certificate-outline.svg";
import home from "../../assets/home1.webp";

function LandInteroirs() {
  return (
    <div
      className="bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${rectangleImg})` }}
    >
      <h1 className="text-4xl font-medium mt-36 text-center">
        Why LAND Interiors
      </h1>
      <div className="flex  grid-cols-3 max-w-2xl mx-auto mt-24 justify-between">
        <div>
          <div className="flex justify-center">
            <img src={calendar} alt="icon" />
          </div>
          <p className="font-normal text-center mt-6 text-[18px]">
            50 days or we <br /> pay you rent
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={smile} alt="icon" />
          </div>
          <p className="font-normal mt-6 text-center text-[18px]">
            1500+happy
            <br />
            customers
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={outline} alt="icon" />
          </div>
          <p className="font-normal text-center mt-6 text-[18px]">
            300+ design
            <br />
            experties
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white/80 w-80  absolute right-[500px]">
          <div className="m-auto max-w-[180px] text-center ">
            <p>Make your dream interior in</p>
            <p>3 easy steps</p>
            <h2>Explore</h2>
            <p>Explore more than just modular design ideas with our experts.</p>
            <h2>Design</h2>
            <p>
              Complete the designs with painting, flooring and other decor
              solutions
            </p>
            <h2>Move-in</h2>
            <p>
              Move in with ease, with our hassle-free civil work and
              installation services.
            </p>
          </div>
        </div>

        <div className="w-[900px] h-[200px] ml-[500px]">
          <img className="w-[900px] h-[400px]" src={home} alt="home" />
        </div>
      </div>
    </div>
  );
}

export default LandInteroirs;
