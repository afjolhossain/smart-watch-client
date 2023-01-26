import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Purchase.css";

import { authContext } from "../Context/UserContext";

const Purchase = () => {
  const { user } = useContext(authContext);
  const { id } = useParams();

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const productName = form.productName.value;
    const email = user?.email || "unregistred";
    const phone = form.phone.value;
    const comment = form.comment.value;

    const order = {
      services: id,
      customer: name,
      productName,
      email,
      phone,
      comment,
    };
    fetch("https://smart-watch-website-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form
        onSubmit={handlePlaceOrder}
        className=" text-center bg-red-300 w-9/12 mx-auto mt-12	"
      >
        <p className="p-6">Order Your Product</p>
        <div className="grid md:grid-cols-2 gap-y-4 sm:grid-cols-1 p-6">
          <input
            className="w-11/12 h-10 mx-auto "
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="FIrst Name"
            readOnly
            required
          />
          <input
            className="w-11/12 h-10 mx-auto "
            type="text"
            name="productName"
            placeholder="Product name"
            required
          />
          <input
            className="w-11/12 h-10 mx-auto "
            type="Email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="email"
            required
          />
          <input
            className="w-11/12 h-10 mx-auto "
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <textarea
          className="w-10/12  max-h-20 mt-6	"
          name="comment"
          placeholder="Your Comment Optional"
        ></textarea>
        <br />
        <input
          className="w-3/12 h-10 mx-auto mb-6 mt-4 order-btn "
          type="submit"
          value="Order"
        />
      </form>
    </div>
  );
};

export default Purchase;
