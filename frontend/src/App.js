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
