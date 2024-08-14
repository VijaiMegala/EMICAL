import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Graph({ amt, totalInterest }) {
  const data = {
    labels: ['Principal Amount', 'Interest'],
    datasets: [
      {
        label: 'Amount Distribution',
        data: [amt, totalInterest],
        backgroundColor: ['#d1fae5', '#48bb78'], 
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ₹${tooltipItem.raw}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="graphContainer">
      <Doughnut data={data} options={options} />
    </div>
  );
}
