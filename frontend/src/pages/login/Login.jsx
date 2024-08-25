import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-400"> Talkster</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
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
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-black"
          >
            {"Don't"} have an account?
          </a>

          <div className="btn btn-block border-gray-300 btn-md max-w-xs">
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
