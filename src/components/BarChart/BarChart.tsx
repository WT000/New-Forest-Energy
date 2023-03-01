// import Chart from 'chart.js'
// import BarElement from 'chart.js'
// import CategoryScale  from 'chart.js'
// import LinearScale from 'chart.js'
// import ToolTip from 'chart.js'
// import Legend from 'chart.js'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

import { Bar } from "react-chartjs-2";

import type { ChartData, ChartOptions } from "chart.js";

interface LineProps {
    options: ChartOptions<"line">;
    data: ChartData<"line">;
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thurs", "Friday", "Saturday"],
        datasets: [
            {
                label: "369",
                data: [3, 6, 8.7, 7, 8, 5],
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
