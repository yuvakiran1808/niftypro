import React from "react";
import Bottomnav from "./Bottomnav";
import { Select } from "semantic-ui-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Company data',
      },
    
    
    },
      animations: {
        tension: {
          duration: 2000,
          easing: 'easeOutCubic',
          from: 1,
          to: 0,
          loop: false
        }
      },
    scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 17855
        }
    }
  };
  
  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',"Aug","Sep","Oct","Nov","Dec"];
  
const data = {
    labels,
    datasets: [
      {
        label: 'company',
        data: [400,3000,4000,2000,300,3000,5000,300,4500,600,700,5000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const companyOptions = [
    {
        key : "1",
        value : "ASHOKLEY",
        text: "ASHOKLEY"
    },
    {
        key : "2",
        value : "CIPLA",
        text: "CIPLA"
    },
    {
        key : "3",
        value : "EICHERMOT",
        text: "EICHERMOT"
    },
    {
        key : "4",
        value : "TATASTEEL",
        text: "TATASTEEL"
    },
    {
        key : "6",
        value : "RELIANCE",
        text: "RELIANCE"
    },
]
  
const Chart = ()=>{
    return(
        <div>
            <Bottomnav />
            <div className="col-md-4">
            </div>
            <div className="container mt-3">
            <Select placeholder='Select' options={companyOptions} />
                <div className="row">
                    <div className="col-md-12">
                    <Line options={options} data={data} />;
                    </div>
                </div>
            </div>

        </div>
    )

}


export default Chart;