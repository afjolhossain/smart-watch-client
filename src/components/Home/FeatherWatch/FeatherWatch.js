import React from "react";
import "./FeatherWatch.css";

const FeatherWatch = () => {
  return (
    <div className="text-center my-12 container mx-auto">
      <h1 className="text-red-400 font-bold text-3xl">AMAZING FEATURE</h1>
      <p className="leading-7">
        Lorem elementum Sed congue nisl dolorSed congue nisl dolor <br /> Lorem
        elementum Sed congue nisl dolor Sed.
      </p>

      <div className="grid md:grid-cols-3 h-full mx-auto sm:grid-cols-1  my-20">
        <div className="grid-rows-3 m-auto">
          <div className="feather leading-5">
            <h1 className="text-2xl">Notification view</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
          <div className="feather">
            <h1>Secure Data</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
          <div className="feather">
            <h1>Creative Design</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
        </div>
        <div>
          <img
            className="img"
            src="https://themesfamily.com/tm/baki/assets/img/watch/feature.png"
            alt=""
          />
        </div>
        <div className="grid-rows-3 m-auto">
          <div className="feather">
            <h1>Life Time Service</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
          <div className="feather">
            <h1>Cloud Storage</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
          <div className="feather">
            <h1>Pixel Perfect</h1>
            <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatherWatch;
