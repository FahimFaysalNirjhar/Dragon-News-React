import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { SignedIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(e.target, email, password);
    SignedIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`{user} Login Successfully`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center pt-8 font-bold text-xl">
            Login your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold">Email address</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label font-bold">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
