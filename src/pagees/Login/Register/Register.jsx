import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // ..
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center pt-8 font-bold text-xl">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            {/* photo url */}
            <label className="label font-bold">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />
            {/* email */}
            <label className="label font-bold">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            <label className="label font-bold">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="mt-6 text-center font-bold text-base-300">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                {" "}
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
