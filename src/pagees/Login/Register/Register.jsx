import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center pt-8 font-bold text-xl">
          Register your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            {/* photo url */}
            <label className="label font-bold">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />
            {/* email */}
            <label className="label font-bold">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            <label className="label font-bold">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="mt-6 text-center font-bold text-base-300">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                {" "}
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
