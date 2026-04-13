import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router"; // 👈 fix this
import { AuthContext } from "../../Provider/AuthProvider";

const SocialIcons = () => {
  const { signInWithGoogle, signInWithGitHub } = use(AuthContext);
  const navigate = useNavigate(); // 👈 add this

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`${user.displayName} Login Successfully ✅`);
        navigate("/"); // 👈 fix this
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGitHubLogin = () => {
    signInWithGitHub()
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`${user.displayName} Login Successfully ✅`);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="space-y-5">
      <h1 className="font-bold text-xl">Login with</h1>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary btn-outline w-full"
        >
          <FcGoogle /> Login with Google
        </button>
        <button
          onClick={handleGitHubLogin}
          className="btn btn-primary btn-outline w-full"
        >
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
