import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r flex flex-col items-center justify-center">
      <h1 className="dark:text-black fixed top-[25%] left-[10%]">
        <span className="text-[15vh] font-['Rejouice_Headline']">SKILL</span>{" "}
        <span className="text-[10vh] font-['Neue_Montreal']">ISSUE</span>
      </h1>
      <h1 className="text-xl fixed top-[43%] left-[10%] font-bold text-soft-teal mb-4">
        Master the Market, Command Your Future
      </h1>
      <p className="text-center text-dark-slate max-w-md fixed top-[60%] left-[10%] font-[Gucci_Sans_Pro_Bold]">
        Welcome to SKILLissue, your one stop shop for tackling skills shortage
        within the workforce. Proprietary to SkillSync, absolute market
        evaluation allows for the recognition of development necessary fields
        and recommendations to foster industry preparedness and promote
        strategic staffing.
      </p>
      <motion.div
        whileHover={{
          scale: 1.1,
          backgroundColor: "#2a9d8f",
          color: "#264653",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-6 bg-dark-slate text-light-teal py-2 px-4 rounded cursor-pointer"
      >
        <button className="w-[7vw]">
          <Link to="/signup" className="block text-center">
            Get Started
          </Link>
        </button>
      </motion.div>
    </div>
  );
}

export default Home;
