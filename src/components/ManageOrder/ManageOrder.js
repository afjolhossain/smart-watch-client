import React, { useContext, useEffect, useState } from "react";
import AllOrders from "../allOrders/AllOrders";
import { authContext } from "../Context/UserContext";

const ManageOrder = () => {
  const { user } = useContext(authContext);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDeleteButton = (id) => {
    const proceed = window.confirm(
      "Are you sure? You want to delete this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  return (
    <div className="mb-10">
      <p className="text-center py-6">YOUR ALL ORDER</p>
      <table className="table-fixed m-auto md:w-11/12 sm:w-8/12 ">
        <thead>
          <tr className="bg-purple-200 h-12 text-2xl   ">
            <th>Picture</th>
            <th>Product-Name</th>
            <th>Price</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Comment</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <AllOrders
              key={order._id}
              order={order}
              handleDeleteButton={handleDeleteButton}
            ></AllOrders>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
