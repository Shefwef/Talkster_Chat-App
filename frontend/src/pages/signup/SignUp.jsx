import React from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-red-400"> Talkster</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full input input-bordered border border-gray-300 max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-black"
          >
            Already have an account?
          </Link>

          <button
            type="submit"
            className="btn btn-block border-gray-300 btn-md max-w-xs"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading -spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
