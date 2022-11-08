import React from "react";
import "./CoreFeatures.css";
import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/Wrench.svg";
import img4 from "../../../assets/icons/group.svg";
import img5 from "../../../assets/icons/person.svg";
import img6 from "../../../assets/icons/Wrench.svg";
const CoreFeature = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="text-center mb-12">
        <p className="text-2xl font-bold  text-orange-600 mb-5">
          {" "}
          Core Features
        </p>
        <h2 className="text-5xl font-semibold mb-5">Why Choose Us</h2>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-5 mb-12">
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img4} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img5} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
        <div className="team-icons card w- bg-base-100 shadow-xl">
          <figure>
            <img src={img6} alt="team" className="py-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Expert Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
