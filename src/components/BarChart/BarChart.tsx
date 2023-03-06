// import Chart from 'chart.js'
// import BarElement from 'chart.js'
// import CategoryScale  from 'chart.js'
// import LinearScale from 'chart.js'
// import ToolTip from 'chart.js'
// import Legend from 'chart.js'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

import { Bar } from "react-chartjs-2";

import type { ChartData, ChartOptions } from "chart.js";

interface ChartProps {
    options: ChartOptions<"line">;
    data: ChartData<"line">;
    datalist: { num: number, date: string}
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart(props: ChartProps) {
    const {datalist} = props;

    const datalistn = []
    for (var val in datalist){
        let value = datalist[val]['date']
        datalistn.push(value)
    }

    const datalistd = []
    for (var val in datalist){
        let value = datalist[val]['num']
        datalistd.push(value)
    }

    const data = {
        labels: datalistn,
        datasets: [
            {

                data: datalistd,
                backgroundColor: "#266867",
                borderRadius: 10,
                borderSkipped: false,
                barPercentage: 0.5,
            },
        ],
    };

    const options = {
        maintainAspectRatio: true,

        plugins: {
            legend: {
                display: false,
                labels: {
                    fontColor: "blue",
                    fontSize: 70,
                },
            },
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },

                ticks: { color: "#77767A" },
            },
            y: {
                grid: {
                    lineWidth: "4.5",
                    color: "#EDEEF0",
                },
                border: {
                    display: false,
                },

                ticks: { color: "#77767A" },
            },
        },
    };

    return (
        <div>
            <div style={{ padding: "20px", width: "50%" }}>
                <Bar data={data} options={options}></Bar>
            </div>
        </div>
    );
}
