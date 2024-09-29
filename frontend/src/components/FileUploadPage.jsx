import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileInputComponent from "./FileInputComponent"; // Adjust the import path as necessary

function FileUploadPage() {
  const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const navigate = useNavigate();

  const navigateToJobRecommendations = () => {
    if (jobDescriptionFile) {
      navigate("/jobRecommendations");
    } else {
      alert("Please upload a job description first.");
    }
  };

  const handleShowSkillGap = () => {
    if (jobDescriptionFile && resumeFile) {
      setShowResumeUpload(true); // Enable display of resume input field and navigate
      navigate("/skillGaps"); // Navigate to the skill gaps page
    } else {
      setShowResumeUpload(true); // Ensure the resume field remains hidden if files are missing
      alert("Please upload both job description and resume files first.");
    }
  };

  return (
    <div className="flex flex-col bg-cover items-center gap-10 bg-[#181C14] justify-center min-h-screen ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute left-[4%] top-[4%] w-40 mr-2"
      >
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-[#181C14] dark:text-white"
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </motion.div>
      <FileInputComponent
        label="Job Description"
        onFileChange={(file) => setJobDescriptionFile(file)}
      />
      {showResumeUpload && (
        <FileInputComponent
          label="Resume"
          onFileChange={(file) => setResumeFile(file)}
          style={{ display: "block" }} // Conditionally display this input
        />
      )}

      <div className="flex gap-20">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-400 border px-4 py-2 text-white"
          onClick={handleShowSkillGap}
        >
          Show Skill Gap
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-400 border px-4 py-2 text-white"
          onClick={navigateToJobRecommendations}
        >
          Show Job Recommendations
        </motion.button>
      </div>
    </div>
  );
}

export default FileUploadPage;
