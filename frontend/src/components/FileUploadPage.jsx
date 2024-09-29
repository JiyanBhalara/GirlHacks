import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileInputComponent from "./FileInputComponent"; 
import { motion } from "framer-motion";
import axios from 'axios';

function FileUploadPage() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const navigate = useNavigate();

  const navigateToJobRecommendations = async () => {
    if (jobDescription) {
      const formData = new FormData();
      formData.append("job_description", jobDescription);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/uploadfiles",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );
        navigate("/FileUploadPage"); // Navigate to another page after successful upload
      } catch (error) {
        console.error("Error uploading job description:", error);
        alert("Error uploading job description.");
      }
    } else {
      alert("Please upload a job description first.");
    }
  };

  const handleShowSkillGap = async () => {
    if (jobDescription && resume) {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("job_description", jobDescription);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/uploadfiles",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );
        setShowResumeUpload(true); // Enable display of resume input field and navigate
        navigate("/"); // Navigate to the skill gaps page
      } catch (error) {
        console.error("Error uploading files:", error);
        alert("Error uploading files.");
      }
    } else {
      setShowResumeUpload(true); // Ensure the resume field remains hidden if files are missing
      alert("Please upload both job description and resume files first.");
    }
  };

  return (
    <div className="flex flex-col bg-cover items-center gap-10 bg-skillissue bg-center justify-center min-h-screen ">
      <FileInputComponent
        label="Job Description"
        onFileChange={(file) => setJobDescription(file)}
      />
      {showResumeUpload && (
        <FileInputComponent
          label="Resume"
          onFileChange={(file) => setResume(file)} // Correctly set the resume file
          style={{ display: "block" }} // Conditionally display this input
        />
      )}

      <div className="flex gap-20">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl bg-gradient-to-r from-[#84A9AC] to-[#E4E3E3] border px-4 py-2 text-white"
          onClick={handleShowSkillGap}
        >
          Show Skill Gap
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl bg-gradient-to-r from-[#84A9AC] to-[#E4E3E3] border px-4 py-2 text-white"
          onClick={navigateToJobRecommendations}
        >
          Show Job Recommendations
        </motion.button>
      </div>
    </div>
  );
}

export default FileUploadPage;