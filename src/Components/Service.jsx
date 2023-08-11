import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../Assest/3.jpg";
import img2 from "../Assest/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Service = () => {
  return (
    <>
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          interval={1000}
          showThumbs={false}
        >
          <div>
            <img src={img1} alt="Item1" />
            <p className="legend">Full Stact </p>
          </div>

          <div>
            <img src={img2} alt="Item2" />
            <p className="legend">Service</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Service;
