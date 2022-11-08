import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const TeamCarousel = ({ team }) => {
  const { picture, name, Team_id, about, prev, next } = team;

  return (
    <div
      id={`team${Team_id}`}
      className="carousel-item relative w-full rounded-box gap-4"
    >
      <div className="card w-96 bg-base-100 shadow-xl shadow  hover:shadow-indigo-500/40 ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Accesories" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <div className="card-actions mt-2">
            <>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaFacebook></FaFacebook>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaLinkedin></FaLinkedin>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaInstagram></FaInstagram>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaTwitter></FaTwitter>
                </a>
              </span>
            </>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Accesories" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <div className="card-actions">
            <>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaFacebook></FaFacebook>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaLinkedin></FaLinkedin>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaInstagram></FaInstagram>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaTwitter></FaTwitter>
                </a>
              </span>
            </>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Accesories" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{about}</p>
          <div className="card-actions">
            <>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaFacebook></FaFacebook>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaLinkedin></FaLinkedin>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  <FaInstagram></FaInstagram>
                </a>
              </span>
              <span className="icon text-orange-500 text-xl">
                <a href="">
                  {" "}
                  <FaTwitter></FaTwitter>
                </a>
              </span>
            </>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#team${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#team${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default TeamCarousel;
