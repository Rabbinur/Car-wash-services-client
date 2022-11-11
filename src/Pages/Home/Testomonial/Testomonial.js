import React from "react";
import image1 from "../../../assets/images/testomonial/img1.png";
import image2 from "../../../assets/images/testomonial/img2.png";
import image3 from "../../../assets/images/testomonial/img3.png";
import image4 from "../../../assets/images/testomonial/img4.png";
import image5 from "../../../assets/icons/quote.svg";
const Testomonial = () => {
  return (
    <div className="mt-36 mb-32">
      <div className="text-center mb-12">
        <p className="text-2xl font-bold  text-orange-600 mb-5"> Testimonial</p>
        <h2 className="text-5xl font-semibold mb-5">What Customer Says</h2>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="  carousel w-full mb-12">
        <div
          id="slider1"
          className="carousel-item relative w-full rounded-box gap-4  flex content-center justify-center"
        >
          <div className="bg-base-100 shadow-xl  p-8 hover:shadow-indigo-500/40 rounded-lg ">
            <div className="flex my-4 ">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={image1}
                    alt="Accesories"
                    className="rounded-full w-14 h-14"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="card-title">Awlad Hossain</h2>
                  <p>Businessman</p>
                </div>
              </div>
              <div className="ml-36">
                <img src={image5} alt="" className="w-12 h-12" />
              </div>
            </div>
            <div className=" items-center mb-3">
              <p>
                There are many variations of passages of Lorem Ipsum <br />{" "}
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which don't{" "}
                <br /> look even slightly believable.
              </p>
            </div>
            <div className=" items-center ">
              <div>
                <p>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-100 shadow-xl p-8 hover:shadow-indigo-500/40 rounded-lg">
            <div className="flex my-4">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={image2}
                    alt="Accesories"
                    className="rounded-full w-14 h-14"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="card-title">Awlad Hossain</h2>
                  <p>Businessman</p>
                </div>
              </div>
              <div className="ml-36">
                <img
                  src={image5}
                  alt=""
                  className="w-12 h-12 text-fuchsia-500"
                />
              </div>
            </div>
            <div className=" items-center mb-3">
              <p>
                There are many variations of passages of Lorem Ipsum <br />{" "}
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which don't{" "}
                <br /> look even slightly believable.
              </p>
            </div>
            <div className=" items-center ">
              <div>
                <p>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slider2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slider2"
          className="carousel-item relative w-full rounded-box gap-4  flex content-center justify-center"
        >
          <div className="bg-base-100 shadow-xl  p-8 hover:shadow-indigo-500/40 rounded-lg ">
            <div className="flex my-4 ">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={image3}
                    alt="Accesories"
                    className="rounded-full w-14 h-14"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="card-title">Awlad Hossain</h2>
                  <p>Businessman</p>
                </div>
              </div>
              <div className="ml-36">
                <img src={image5} alt="" className="w-12 h-12" />
              </div>
            </div>
            <div className=" items-center mb-3">
              <p>
                There are many variations of passages of Lorem Ipsum <br />{" "}
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which don't{" "}
                <br /> look even slightly believable.
              </p>
            </div>
            <div className=" items-center ">
              <div>
                <p>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-100 shadow-xl p-8 hover:shadow-indigo-500/40 rounded-lg">
            <div className="flex my-4">
              <div className="flex">
                <div className="flex items-center">
                  <img
                    src={image4}
                    alt="Accesories"
                    className="rounded-full w-14 h-14"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="card-title">Awlad Hossain</h2>
                  <p>Businessman</p>
                </div>
              </div>
              <div className="ml-36">
                <img
                  src={image5}
                  alt=""
                  className="w-12 h-12 text-fuchsia-500"
                />
              </div>
            </div>
            <div className=" items-center mb-3">
              <p>
                There are many variations of passages of Lorem Ipsum <br />{" "}
                available, but the majority have suffered alteration in some{" "}
                <br /> form, by injected humour, or randomised words which don't{" "}
                <br /> look even slightly believable.
              </p>
            </div>
            <div className=" items-center ">
              <div>
                <p>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                  <span className="icon text-orange-500 text-xl">★</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slider1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slider1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
