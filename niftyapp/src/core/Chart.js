import React, { useEffect, useState } from "react";
import Bottomnav from "./Bottomnav";
import { Select } from "semantic-ui-react";
import { getData } from "../chartHelper/chartapicall";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Company data",
    },
  },
  
  scales: {
    y: {
      // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 3000,
    },
  },
};



const data = {
  labels :["jan","feb","mar"],
  datasets: [
    {
      label: "company",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const companyOptions = [
  {
    key: "1",
    value: "ashok",
    text: "ashok",
  },
  {
    key: "2",
    value: "cipla",
    text: "cipla",
  },
  {
    key: "3",
    value: "eichermot",
    text: "eichermot",
  },
  {
    key: "4",
    value: "tatasteel",
    text: "tatasteel",
  },
  {
    key: "6",
    value: "reliance",
    text: "reliance",
  },
];

const Chart = () => {
  
  const [chartData,setChartData] = useState({});
  let dates = [];
  let highvalues = [];

const apidata = () => {
  setChartData({
    labels :dates,
    datasets: [
    {
      label: "company",
      data: highvalues,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
  })
}


  getData().then((response) => {
    console.log(response.data);
   response.data.dates.map((ele)=>{
    return dates.push(ele);
  })
   response.data.stocks.map((ele)=>{
       return highvalues.push(ele.High);
  })
  
    data.labels = dates
    data.datasets[0].data = highvalues;
  });
  
//getting data from api


useEffect(() => {
       apidata();
  }, []);

  return (
    <div>
      <Bottomnav />
      <div className="col-md-4"></div>
      <div className="container mt-3">
        <Select placeholder="Select" options={companyOptions} />
        <div className="row">
          <div className="col-md-12">
            <Line options={options} data={data} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
