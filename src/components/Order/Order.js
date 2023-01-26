import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Orders.css";

const Order = () => {
  const { id } = useParams();
  const [service, setServics] = useState({});
  useEffect(() => {
    const url = `https://smart-watch-website-server.vercel.app/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServics(data));
  }, [id]);

  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center items-center p-16">
        <div className="mx-auto">
          <img src={service.pictureLink} alt="" />
        </div>
        <div className="mx-auto">
          <p>Name: {service.productName}</p>
          <p>Details: {service.details}</p>
          <p>Price: {service.price}BDT</p>
          <p>Quality: {service.productQuality}</p>
          <p>Made-In: {service.suplierName}</p>
          <NavLink to={`/purchase/${id}`}>
            <button id="buy-now-btn">BUY-NOW</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Order;
