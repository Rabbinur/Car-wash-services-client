import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h1>This is CheckOut page</h1>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
