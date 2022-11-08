import React from "react";
import "./ProductsCard.css";
const ProductsCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="">
      <div className="card w-96  bg-base-100 shadow-xl products  ">
        <figure className="px-10 pt-10 ">
          <img src={img} alt="Shoes" className="rounded-xl  " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            <span className="icon text-orange-500 text-xl">★</span>
            <span className="icon text-orange-500 text-xl">★</span>
            <span className="icon text-orange-500 text-xl">★</span>
            <span className="icon text-orange-500 text-xl">★</span>
            <span className="icon text-orange-500 text-xl">★</span>
          </p>
          <p className="text-xl font-semibold text-rose-600 mb-3"> ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
