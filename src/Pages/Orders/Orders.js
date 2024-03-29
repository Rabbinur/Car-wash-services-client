import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  //for data load

  useEffect(() => {
    fetch(`https://car-wash-server.vercel.app/orders?email=${user?.email}`, {
      //jwt
      headers: {
        authorization: `Bearer ${localStorage.getItem("carwashToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]); //user email change hole data pick krbe

  //for delete with id
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure,you want  to cancel this order"
    );

    if (proceed) {
      fetch(`https://car-wash-server.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("carwashToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://car-wash-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("carwashToken")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //ekta status update
          //remainig
          const remaining = orders.filter((odr) => odr._id !== id);
          //order theke approving find
          const approving = orders.find((odr) => odr._id === id);
          //setup status
          approving.status = "Approved";

          //set approved
          const newOrders = [...remaining, approving];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h4>this is orders page</h4>
      <h2 className="text-5xl">You have {orders.length} orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
