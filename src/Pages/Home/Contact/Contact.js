import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-black mb-32 py-24 mt-32 flex content-between justify-evenly">
      <div className="text-white flex items-center justify-center ">
        <div className="   mr-5">
          <span>
            <FaCalendarAlt className="text-2xl"></FaCalendarAlt>
          </span>
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="text-white flex items-center justify-center ">
        <div className="   mr-5">
          <span className="text-2xl">
            <FaPhoneAlt></FaPhoneAlt>
          </span>
        </div>
        <div>
          <p>Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="text-white flex items-center justify-center ">
        <div className="   mr-5">
          <span>
            <FaMapMarkerAlt className="text-2xl"></FaMapMarkerAlt>
          </span>
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
