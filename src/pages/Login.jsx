import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <>
        <div className="w-full h-screen">
          <img
            className="hidden sm:block absolute w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/6330f8e3-d2af-43a2-9ea5-43b6e67a58e6/NG-en-20221214-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign In</h1>
                {error ? <p className="p-3 bg-red-500 mt-2">{error}</p> : null}
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={handleEmail}
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={handlePassword}
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 p-3 my-6">Sign In</button>
                  <div className="flex items-center justify-between text-sm text-gray-500 ">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p className="py-6">
                    <span className="text-gray-400 ">New to Movie?</span>{" "}
                    <Link to="/signup">Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
