import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Explore from "./Explore/Explore";

const Explores = () => {
  const [explores, setExplore] = useState([]);

  useEffect(() => {
    fetch("https://smart-watch-website-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setExplore(data));
  }, []);
  return (
    <>
      <div className="m-auto text-center w-2/4">
        <p className="text-red-500 mt-10">OUR PRODUCT</p>
        <p>
          Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem
          elementum Sed congue nisl dolor Sed.
        </p>
      </div>
      {explores.length === 0 ? (
        <BeatLoader color="#36d7b7" className="text-center" />
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-4 p-4 text-center">
          {explores.map((explore) => (
            <Explore explore={explore} key={explore._id}></Explore>
          ))}
        </div>
      )}
    </>
  );
};

export default Explores;
