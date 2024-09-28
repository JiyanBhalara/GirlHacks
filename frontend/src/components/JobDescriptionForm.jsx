import React, { useState } from 'react';
import { motion } from 'framer-motion';

function JobDescriptionForm() {
    const [jobDescription, setJobDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Job Description:', jobDescription);
        alert('Form submitted! Check the console for the job description.');
    };

    // Animation variants for the button
    const buttonVariants = {
        hover: {
            scale: 1.1, // Scales the button to 110% on hover
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        },
        tap: {
            scale: 0.9 // Scales the button to 90% on click
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="block text-gray-700 text-xl font-bold mb-2">Job Description Form</h2>
                <label htmlFor="jobDescription" className="block text-gray-700 text-sm font-bold mb-2">
                    Job Description:
                </label>
                <textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={e => setJobDescription(e.target.value)}
                    placeholder="Enter the job description here"
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                >
                    Submit
                </motion.button>
            </form>
        </div>
    );
}

export default JobDescriptionForm;
