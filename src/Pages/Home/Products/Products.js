import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  //load products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [noOfElements, setNoOfElements] = useState(6);
  const loadMore = () => {
    setNoOfElements(noOfElements + noOfElements);
    console.log("clicked");
  };
  const slice = products.slice(0, noOfElements);
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-2xl font-bold  text-orange-600 mb-5">
          {" "}
          Popular Products
        </p>
        <h2 className="text-5xl font-semibold mb-5">Browse Our Products</h2>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {slice.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
      <div className="mb-36 mt-7 text-center">
        <button
          onClick={() => {
            loadMore();
          }}
          className="btn btn-outline btn-secondary"
        >
          {" "}
          More options
        </button>
      </div>
    </div>
  );
};

export default Products;
