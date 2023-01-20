import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { _id, productName, pictureLink, price } = service;
  return (
    <div>
      <div className="card p-6 mx-auto">
        <img className="mx-auto" src={pictureLink} alt="" />
        <p>Name: {productName}</p>
        <p>Price: {price} BDT</p>
        <Link to={`/order/${_id}`} className="text-1xl service-btn mt-12">
          See-Details
        </Link>
      </div>
    </div>
  );
};

export default Service;
