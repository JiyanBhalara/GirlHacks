import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from 'axios';

function FileInputComponent({ label, onFileChange }) {
  const [file, setFile] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files;
    handleFileSelection(newFiles);
  };

  const handleFileChange = (e) => {
    const newFiles = e.target.files;
    handleFileSelection(newFiles);
  };

  const handleFileSelection = (newFiles) => {
    if (newFiles.length > 0) {
      if (!file) {
        // Check if a file has already been uploaded
        const newFile = newFiles[0];
        const fileData = {
          url: URL.createObjectURL(newFile),
          name: newFile.name,
          type: newFile.type,
        };
        setFile(fileData);
        onFileChange(newFile); // Call the callback with the actual file object
      } else {
        alert(
          "A file is already uploaded. Please remove the existing file to upload another."
        );
      }
    }
  };

  const handlePreviewClick = () => {
    setPreviewFile(file);
  };

  const handleClosePreview = () => {
    axios.post()
    setPreviewFile(null);
  };

  const removeFile = () => {
    URL.revokeObjectURL(file.url); // Clean up the object URL
    setFile(null);
    setPreviewFile(null);
    onFileChange(null); // Call the callback with null to indicate no file is selected
  };

  const fileIcon = () => {
    return (
      file &&
      (file.type.startsWith("image")
        ? "🖼️"
        : file.type === "application/pdf"
        ? "📄"
        : file.type.startsWith("text")
        ? "📃"
        : "🗂️")
    );
  };
  
  const filePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="w-full h-auto object-cover"
        />
      );
    } else if (file.type === "application/pdf") {
      return (
        <iframe
          src={file.url}
          title={file.name}
          className="w-full h-48"
        ></iframe>
      );
    } else if (file.type.startsWith("text")) {
      return (
        <object
          data={file.url}
          type="text/plain"
          width="100%"
          height="200"
          className="border rounded"
        >
          <iframe src={file.url} title={file.name}></iframe>
        </object>
      );
    }
    return <span>{file.name}</span>;
  };

  return (
    <div className="p-6 w-full max-w-lg mx-auto bg-gradient-to-l from-mid-grey via-light-grey to-dark-grey rounded-xl shadow-md space-y-4">
      <div className="space-y-2">
        <div
          onDragOver={handleDragOver}
          onDrop={handleFileDrop}
          className="border-2 border-dashed bg-gradient-to-b from-dark-teal via-mid-teal to-light-teal border-[#204051] text-white rounded-md p-6 text-center cursor-pointer"
        >
          Drag and drop {label} here, or click to select files
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id={`${label.replace(/\s+/g, "-").toLowerCase()}-input`}
          accept="image/*,.pdf,text/plain"
        />
        <label
          htmlFor={`${label.replace(/\s+/g, "-").toLowerCase()}-input`}
          className="block w-full text-center bg-gradient-to-l from-light-grey via-dark-grey to-mid-grey hover:bg-dark-grey active:bg-mid-grey text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out"
        >
          Browse files
        </label>
        {file && (
          <div className="p-2 border rounded-md flex justify-between items-center">
            <span onClick={handlePreviewClick} className="cursor-pointer">
              {fileIcon()}
            </span>
            <span className="truncate">{file.name}</span>
            <button onClick={removeFile} className="text-red-500">
              Remove
            </button>
          </div>
        )}
      </div>
      {previewFile && (
        <div className="fixed inset-0 bg-[#3B6978] overflow-y-auto h-full w-full p-5">
          <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold truncate">{previewFile.name}</h4>
              <button
                onClick={handleClosePreview}
                className="bg-[#204051] text-white rounded-full p-2"
              >
                <IoClose className="text-lg" />
              </button>
            </div>
            <div className="mt-3">{filePreview(previewFile)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileInputComponent;