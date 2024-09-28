import React from 'react';
import FileInputComponent from './FileInputComponent';  // Adjust the import path as necessary


function FileUploadPage() {

    const handleFileReceived = (file) => {
        // Process the file for backend uploading, etc.
        console.log("File received:", file);
        // Add your logic to handle the file here
        return file
    };

    

    return (
        <div className="flex flex-col items-center gap-10 justify-center min-h-screen">
            <FileInputComponent label="Job Description" onFileChange={handleFileReceived} />
            <FileInputComponent label="Resume" onFileChange={handleFileReceived}/>
        </div>
    );
}

export default FileUploadPage;
