import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price } = service;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      message,
    };
    //for validation
    if (phone.length > 10) {
      alert("Phone number should be 11 or longer");
    } else {
    }

    //fetching  data from server side mongodb
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }

        console.log(data);
      })
      .then((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <div className="text-center">
          <h2 className="text-4xl">You are about order : {title}</h2>
          <h4 className="text-3xl">Product Price : {price}</h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-secondary w-full "
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-bordered input-secondary w-full "
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-secondary h-24 w-full mt-4"
          placeholder="your message"
        ></textarea>
        <input className="btn" type="submit" value="Place your Order" />
      </form>
    </div>
  );
};

export default CheckOut;
