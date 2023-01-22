import React from "react";
import "./ddNewItems.css";

const AddNewItems = () => {
  const handleAddservices = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const pictureLink = e.target.pictureLink.value;
    const price = e.target.price.value;
    const details = e.target.details.value;

    const suplierName = e.target.suplierName.value;
    const services = {
      productName,
      pictureLink,
      price,
      details,

      suplierName,
    };

    fetch("https://smart-watch-servers.onrender.com /services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Services successfuly Added");
          e.target.reset();
        }
      });
  };

  return (
    <div className="NewItemContainer">
      <h1 className="text-center text-4xl mt-10">Add A New Items</h1>
      <form onSubmit={handleAddservices} className="from ">
        <input type="text" name="productName" placeholder="Product Name" />
        <input type="text" name="pictureLink" placeholder="Pictute Live Link" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="details" placeholder="Details" />

        <input type="text" name="suplierName" placeholder="Supplier Name, " />
        <button type="submit">Add-Services-item</button>
      </form>
    </div>
  );
};

export default AddNewItems;
