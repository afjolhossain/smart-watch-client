import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const AllOrders = ({ order, handleDeleteButton }) => {
  const { _id, services, customer, productName, email, phone, comment } = order;
  const [servicesId, setServicesId] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000 /services/${services}`)
      .then((res) => res.json())
      .then((data) => setServicesId(data));
  }, [services]);

  return (
    <tr className=" text-center bg-red-200 ">
      <td>
        <img className="w-3/12 mx-auto" src={servicesId.pictureLink} alt="" />
      </td>
      <td>{productName}</td>
      <td>BDT {servicesId.price}</td>
      <td>{email}</td>
      <td>{customer}</td>
      <td>{phone}</td>
      <td>{comment}</td>
      <td>
        <button onClick={() => handleDeleteButton(_id)}>
          <TrashIcon className="w-8 h-8 mx-auto text-red-700"></TrashIcon>
        </button>
      </td>
    </tr>
  );
};

export default AllOrders;
