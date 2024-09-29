/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import LogoLink from "./Logolink";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Signup successful:", response.data.message);
      navigate("/signin"); // Redirecting to SignIn page
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  // const handleLogin = () =>{
  //     navigate('/login');
  // }

  return (
    <section className="bg-gradient-to-r from-[#84A9AC] via-[#E4E3E3] to-[#3B6978]">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute left-[4%] top-[4%] w-40 mr-2" // Ensure the container scales with the image
      >
        <LogoLink />
      </motion.div>
      <h1 className="dark:text-white absolute left-[44%]">
          <span className="text-[50px] font-['Rejouice_Headline']">SKILL</span>{" "}
          <span className="text-[30px] font-['Neue_Montreal']">ISSUE</span>
        </h1>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 max-w-md">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-[#84A9AC] to-[#E4E3E3] dark:border-[#3B6978]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  placeholder="My name is..."
                  className="bg-gray-50 border border-[#E4E3E3] text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-white dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[gray-50] border border-[#E4E3E3] text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-white dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-[#E4E3E3] text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-white dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-[#E4E3E3] text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-white dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full text-black bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-black">
                Already have an account?{" "}
                <Link
                  to={"/SignIn"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
