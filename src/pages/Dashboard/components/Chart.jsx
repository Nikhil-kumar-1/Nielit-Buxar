import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
        datasets: [
          {
            
            label: "Total Candidates",
            data: [500, 1500, 1900, 600, 0],
            backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(255, 159, 64, 0.4)'
                    ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
            borderWidth: 1,
            barThickness: 90, 
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 500
            }
          },
      
            x: {
              grid: {
                display: false, 
              },
            }
            
        },

      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart
