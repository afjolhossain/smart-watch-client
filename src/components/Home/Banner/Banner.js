import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg flex items-center flex-wrap  justify-center">
      <div className="text-white details">
        <p className="text-6xl">
          Watch Provide Service <br /> Our Busines
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elit
          eiusmod tempor incididunt
        </p>
        <Link to="/explores">
          <button className="btn-banner ml-10">Discober More</button>
        </Link>
      </div>

      <div>
        <img
          className="lg:w-full md:w-6/12 "
          src="https://themesfamily.com/tm/baki/assets/img/watch/slide2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
