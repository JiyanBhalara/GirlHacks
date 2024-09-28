import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUploadPage from './components/FileUploadPage';
import JobRecommendations from './components/JobRecommendations';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} /> 
                <Route path="/" element={<FileUploadPage />} />
                <Route path="/jobRecommendations" element={<JobRecommendations />} />
            </Routes>
        </Router>
    );
}

export default App;
