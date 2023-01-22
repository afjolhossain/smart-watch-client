import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://smart-watch-servers.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-auto text-center ">
      <div className="w-2/4 mx-auto">
        <p className="text-red-500">OUR PRODUCT</p>
        <p>
          Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem
          elementum Sed congue nisl dolor Sed.
        </p>
      </div>
      {services.length === 0 ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-2 p-4 text-center">
          {services.slice(0, 3).map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </div>
      )}
      <Link className="text-red-400 text-center text-2xl" to="/explores">
        See More
      </Link>
    </div>
  );
};

export default Services;
