import React, { useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';
import axios from "axios";

// Get Chart Data from myBudget.json file
export const getChartData = () => {
  return axios({
    method: "get",
    url: "http://localhost:3001/budget",
  });
};

const PieChart = () => {
    const [chart, setChart] = useState({
        title: [],
        budget: [],
    });

const getData = () => {
    getChartData().then((res) => {
        setChart({
            ...chart,
            title: res.data.myBudget.map((data) => {
                return data.title;
            }),
            budget: res.data.myBudget.map((data) => {
                return data.budget;
            }),
        });
    });
};

useEffect(() => {
    getData();
}, []);

const {title, budget } = chart;
const data = {
    labels: title,
    datasets: [
      {
        data: budget,
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(253, 107, 25)",
          "rgb(88, 80, 141)",
          "rgb(188, 80, 144)",
          "rgb(255, 99, 97)",
          "rgb(0, 63, 92)",
          "rgb(180, 198, 240)",
        ],
      },
    ],
  };

  const options = {};

  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
};



/*class PieChartComponent extends Component {
    
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            labels: ['Under 18', 'Age 18', 'Age 55'],
            datasets: [{
                data: [2000, 3000, 2000],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    }

    render() {
        return (
            <div>
                <h1>ChartJS</h1>
                <Pie 
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    />
                    <br />
            </div>
        )
    }
}*/
export default PieChart;
