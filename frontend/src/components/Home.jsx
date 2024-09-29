import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r flex flex-col items-center justify-center">
        <h1 className="dark:text-black fixed top-[30%] left-[10%]">
          <span className="text-[13vh] font-['Rejouice_Headline']">SKILL</span>{" "}
          <span className="text-[8vh] font-['Neue_Montreal']">ISSUE</span>
        </h1>
      <h1 className="text-xl font-bold text-soft-teal mb-4">Master the Market, Command Your Future</h1>
      <p className="text-center text-dark-slate max-w-md">
        Welcome to SKILLissue, your solution for addressing workforce skill gaps. By leveraging
        comprehensive market data, SkillSync identifies areas needing development and provides
        tailored recommendations to enhance industry readiness and empower strategic hiring.
      </p>
      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: "#2a9d8f", color: "#264653" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-6 bg-dark-slate text-light-teal py-2 px-4 rounded cursor-pointer"
      >
        <Link to="/signup" className="block text-center">
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
