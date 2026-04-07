import React from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import FindUs from "../../components/FindUs/FindUs";
import Ads from "./Ads/Ads";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialIcons></SocialIcons>
      <FindUs></FindUs>
      <Ads></Ads>
    </div>
  );
};

export default RightAside;
