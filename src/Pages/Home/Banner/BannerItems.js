import React from "react";
import "./BannerItems.css";
const BannerItems = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable
          <br /> Price for car
          <br />
          servicing
        </h1>
      </div>
      <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 w-2/5 -mt-15 top-2/4">
        <p className="text-xl font-normal text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-2/5 mt-24 top-2/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-secondary">Button</button>
      </div>
      <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
