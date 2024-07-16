import React from 'react'

import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);
const Piech = () => {

     const data = {
        
       
        labels: ['SC', 'ST', 'OBC', 'GEN','WOMEN','SPECIALLY ABLED'],

        datasets: [
          {
            data: [300, 50, 100, 80,70,10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0','#3C3D99','#4CB140'],
          },
        ],
     };
      

     const options = {
        maintainAspectRatio: false,
        layout: {
            padding: {
              left: 100,
            },
          },
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: 15,
              padding: 20,
              
            },
          },
        },
      };
      return (
       
        <div style={{ width: '900px', height: '400px',margin:'20px',float:'middle'}}>
          <Pie data={data} options={options} />
        </div>
       
      );
    };


export default Piech;
