import React from "react";
import Class from "../../../assets/class.png";
import Swimming from "../../../assets/swimming.png";
import Playground from "../../../assets/playground.png";

const Ads = () => {
  return (
    <div className="bg-base-200 p-3 space-y-5">
      <h1 className="font-bold text-xl">Q-Zone</h1>
      <div>
        <img src={Swimming} alt="" />
        <img src={Class} alt="" className="w-full h-auto" />
        <img src={Playground} alt="" />
      </div>
    </div>
  );
};

export default Ads;
