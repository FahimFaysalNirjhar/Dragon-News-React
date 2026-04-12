import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialIcons = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-xl">Login with</h1>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full ">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn btn-primary btn-outline w-full ">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
