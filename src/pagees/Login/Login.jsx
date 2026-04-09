import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center pt-8 font-bold text-xl">
            Login your account
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold">Email address</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label font-bold">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="mt-6 text-center font-bold text-base-300">
                Dont’t Have An Account ?{" "}
                <Link className="text-secondary" to="/auth/register">
                  {" "}
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
