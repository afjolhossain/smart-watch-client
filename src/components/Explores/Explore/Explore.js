import React from "react";
import { Link } from "react-router-dom";

const Explore = ({ explore }) => {
  const { _id, productName, pictureLink, price } = explore;
  return (
    <div>
      <div className="card p-6 mx-auto">
        <img className="mx-auto w-6/12 h-6/12" src={pictureLink} alt="" />
        <p>Name: {productName}</p>
        <p>Price: {price} BDT</p>
        <Link to={`/order/${_id}`} className="text-1xl service-btn ">
          See-Details
        </Link>
      </div>
    </div>
  );
};

export default Explore;
