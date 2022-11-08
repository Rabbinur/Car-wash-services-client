import React from "react";
import "./Services.css";

import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5 p-3 services">
      <figure>
        <img src={img} alt="oil" className="rounded-lg" />
      </figure>
      <div className="card-body  mb-3">
        <div className="flex justify-between items-end  ">
          <div className="">
            <h2 className="card-title font-bold text-lg">{title}</h2>
            <p className="text-2xl text-orange-600 font-semibold">
              {" "}
              Price: ${price}
            </p>
          </div>

          <div>
            <button className="text-2xl text-orange-600 font-semibold">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
