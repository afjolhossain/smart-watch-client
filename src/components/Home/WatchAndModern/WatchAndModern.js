import React from "react";
import "./WatchAndModern.css";

const WatchAndModern = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-10 sm:grid-cols-1 p-5 px-10 bg-slate-50  ">
      <div className="py-16 text-container">
        <h1 className=" text-4xl px-6">
          Unique And Mordern Design Download Watch
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          reprehenderit, voluptas a, sint tenetur.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Porro reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          reprehenderit, voluptas a, sint tenetur.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Porro reprehenderit.
        </p>
      </div>
      <div>
        <img
          className="p-6 m-auto"
          src="https://themesfamily.com/tm/baki/assets/img/watch/slide2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WatchAndModern;
