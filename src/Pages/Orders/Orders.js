import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  //for data load

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]); //user email change hole data pick krbe
  return (
    <div>
      <h4>this is orders page</h4>
      <h2 className="text-5xl">You have {orders.length} orders</h2>
    </div>
  );
};

export default Orders;
