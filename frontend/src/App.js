import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileUploadPage from "./components/FileUploadPage";
import JobRecommendations from "./components/JobRecommendations";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Loader from "./components/Loader";

function App() {
  // Note: Loader() should not be called like this if it's a React component.
  // If Loader is a component, it should be rendered as <Loader /> inside JSX.

  return (
    <Router>
      <div
        className="fixed top-0 w-full h-full flex items-center justify-center text-white bg-[#101010] z-50 gap-2.5"
        id="loader"
      >
        <h3 className="text-[2vw] font-extrabold">Tomorrow's</h3>
        <h3 className="text-[2vw] font-extrabold">Brand,</h3>
        <h3 className="text-[2vw] font-extrabold">Today ™️</h3>
      </div>

      <Loader />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/FileUploadPage" element={<FileUploadPage />} />
        <Route path="/jobRecommendations" element={<JobRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
