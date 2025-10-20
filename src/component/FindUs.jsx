import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full  ">
          <button className="btn join-item bg-white"><FaFacebook/> Facebook</button>
          <button className="btn join-item bg-white"><FaInstagram/> Instagram</button>
          <button className="btn join-item bg-white"><FaTwitter/> Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
