import React from 'react';
import { Bar } from 'react-chartjs-2';

function SkillChart({ skills }) {
  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Required Skills',
        data: skills.map(() => 1), // Simple count 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  return <Bar data={data} />;
}

export default SkillChart;