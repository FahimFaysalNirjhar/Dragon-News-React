import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-xl">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn join-item bg-white justify-start text-base-300">
          <FaFacebook className="text-[#1877F2]" />
          Facebook
        </button>
        <button className="btn join-item bg-white justify-start text-base-300">
          <FaTwitter className="text-[#1DA1F2]" />
          Twitter
        </button>
        <button className="btn join-item bg-white justify-start text-base-300">
          <FaInstagram className="text-[#E1306C]" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
