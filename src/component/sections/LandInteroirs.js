import React from "react";
import rectangleImg from "../../assets/rectangle.webp";
import calendar from "../../assets/svg-images/calendar.svg";
import smile from "../../assets/svg-images/bx-home-smile.svg";
import outline from "../../assets/svg-images/certificate-outline.svg";
import home from "../../assets/home1.webp";
import kitchen from "../../assets/kitchen.webp";
import bedroom from "../../assets/bed-room.webp";
import livingroom from "../../assets/living-room.webp";
import homeoffice from "../../assets/home-office.webp";

function LandInteroirs() {
  return (
    <div
      className="bg-no-repeat bg-contain`"
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
      <div className="flex justify-between mt-24">
        <div className="bg-white/80 w-80">
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

        <div className="">
          <img className="w-[900px] h-[400px]" src={home} alt="home" />
        </div>
      </div>
      <div>
        <h1 className="text-center font-medium text-4xl mb-[60px]">
          What we do?
        </h1>
        <div className="flex gap-4 justify-center">
          <div>
            <img src={kitchen} alt="kitchen" width={286} />
            <h1 className="text-center mt-8 text-[#4B2A63] text-2xl font-semibold">
              Modular kitchen
            </h1>
          </div>
          <div>
            <img src={bedroom} alt="home" width={286} />
            <h1 className="text-center mt-8 text-[#4B2A63] text-2xl font-semibold">
              Bedroom
            </h1>
          </div>
          <div>
            <img src={livingroom} alt="home" width={286} />
            <h1 className="text-center mt-8 text-[#4B2A63] text-2xl font-semibold">
              Living room
            </h1>
          </div>
          <div>
            <img src={homeoffice} alt="home" width={286} />
            <h1 className="text-center mt-8 text-[#4B2A63] text-2xl font-semibold">
              Home office
            </h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-12">
          <p className="text-center font-normal text-[18px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandInteroirs;
