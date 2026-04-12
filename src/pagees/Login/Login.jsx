import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { SignedIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(e.target, email, password);
    SignedIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`${user.email} Login Successfully`);
        navigate(`${location.state ? location.state : "/"}`);
        // ...
      })
      .catch((error) => {
        let message = "";

        switch (error.code) {
          case "auth/user-not-found":
            message = "No account found with this email ❌";
            break;

          case "auth/wrong-password":
            message = "Incorrect password ❌";
            break;

          case "auth/invalid-email":
            message = "Invalid email format ❌";
            break;

          case "auth/invalid-credential":
            message = "Email or password is incorrect ❌";
            break;

          case "auth/too-many-requests":
            message = "Too many attempts. Try again later ⏳";
            break;

          case "auth/network-request-failed":
            message = "Network error. Check your internet 🌐";
            break;

          default:
            message = "Login failed. Try again!";
        }

        setError(message);
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
                required
              />
              <label className="label font-bold">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
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
