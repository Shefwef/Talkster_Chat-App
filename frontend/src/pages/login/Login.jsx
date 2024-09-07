import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-400"> Talkster</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-black"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block border-gray-300 btn-md max-w-xs"
              disabled={loading}
            >
              {loading ? (
                <span className=" loading loading - spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
