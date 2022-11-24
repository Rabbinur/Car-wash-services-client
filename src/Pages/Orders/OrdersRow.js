import React, { useEffect, useState } from "react";

const OrdersRow = ({ order }) => {
  const { _id, serviceName, phone, price, customer, email, service } = order;

  //getting service all details
  const [orderService, setOrderService] = useState({});

  //data load for all image same as checkout
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  //for delete with id
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure,you want  to cancel this order"
    );

    if (proceed) {
      fetch(
        `http://localhost:5000/orders/${id}`,

        {
          method: "DELETE",
        }
      );
    }
  };
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrdersRow;
