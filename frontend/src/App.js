import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FileUploadPage from "./components/FileUploadPage";
import JobRecommendations from "./components/JobRecommendations";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Contact_us from "./components/Contact_us";
import Login from "./components/Login";
import LogoLink from "./components/Logolink";

function App() {
  return (
    <Router className='relative'>
      <Loader />
      <div className="bg-gradient-to-r text-white">
        <nav className="relative flex justify-between items-center p-4">
          <div className="absolute top-[5%]">
            <LogoLink />
          </div>

          <div className="flex gap-10 fixed top-[7%] right-[10%]">
            <Link to="/" className="text-lg absolute right-[10%] mr-60 text-black font-bold font-['Rejouice_Headline']">
              Home
            </Link>
            <Link to="/contact_us" className="absolute right-[5%] mx-2 w-40 text-lg text-black font-bold font-['Rejouice_Headline']">
              Contact Us
            </Link>
            <button className="absolute bg-gradient-to-l from-teal-400 to-gray-500 rounded-xl w-auto px-2 py-1">
              <Link to="/login" className="mx-2 text-lg font-bold text-black  font-['Rejouice_Headline']">
                Login
              </Link>
            </button>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/FileUploadPage" element={<FileUploadPage />} />
        <Route path="/jobRecommendations" element={<JobRecommendations />} />
      </Routes>
      <footer className="fixed bottmo-0 bg-deep-teal text-center p-4 text-light-teal">
        © 2024 SkillSync. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
