import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileInputComponent from "./FileInputComponent"; // Adjust the import path as necessary


function FileUploadPage() {
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const navigate = useNavigate();

  const navigateToJobRecommendations = () => {
    navigate("/jobRecommendations");
  };

  return (
    <div className="flex flex-col bg-cover items-center gap-10 justify-center min-h-screen ">
      <FileInputComponent label="Job Description" onFileChange={() => {}} />
      {showResumeUpload && (
        <FileInputComponent label="Resume" onFileChange={() => {}} />
      )}

      <div className="flex gap-20">
        <button
          className="rounded border px-4 py-2 bg-blue-500 text-white"
          onClick={() => setShowResumeUpload(true)}
        >
          Show Skill Gap
        </button>
        <button
          className="rounded border px-4 py-2 bg-blue-500 text-white"
          
          onClick={navigateToJobRecommendations}
        >
          Show Job Recommendations
        </button>
      </div>
    </div>
  );
}

export default FileUploadPage;
