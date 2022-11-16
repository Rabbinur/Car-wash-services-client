import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  //load sevices data
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  const [noOfElements, setNoOfElements] = useState(6);
  const loadMore = () => {
    setNoOfElements(noOfElements + noOfElements);
    console.log("clicked");
  };
  const slice = services.slice(0, noOfElements);
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-2xl font-bold  text-orange-600 mb-5"> Service</p>
        <h2 className="text-5xl font-semibold mb-5">Our Service Area</h2>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {slice.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mb-36 mt-7 text-center">
        <button
          onClick={() => loadMore()}
          className="btn btn-outline btn-secondary"
        >
          {" "}
          More options
        </button>
      </div>
    </div>
  );
};

export default Services;
