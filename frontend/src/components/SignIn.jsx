import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { setAuthenticated } from "./utils/auth";

import { gsap } from "gsap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formRef = useRef(); // Ref for the form container to animate

  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { scale: 0 }, // Start from zero scale
      { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" } // Animate to full scale
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      setAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/FileUploadPage");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <section className="bg-gradient-to-r]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <h1 className="dark:text-black">
          <span className="text-[50px] font-['Rejouice_Headline']">SKILL</span>{" "}
          <span className="text-[30px] font-['Neue_Montreal']">ISSUE</span>
        </h1>

        <div ref={formRef} className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-[#3B6978] to-[#E4E3E3] dark:border-[#223d46]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:gray-900">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-[#E4E3E3] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-black dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-[#E4E3E3] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#84A9AC] dark:border-[#E4E3E3] dark:placeholder-[#3B6978] dark:text-black dark:focus:ring-[#E4E3E3] dark:focus:border-[#3B6978]"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full text-black bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:[#3B6978]"
              >
                Sign in
              </button>
              <p className="text-sm font-semibold text-black">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
