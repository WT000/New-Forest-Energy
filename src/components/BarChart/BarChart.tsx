import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ReadingComponentInterface } from "../Reading/Reading";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface ChartProps {
  rawData: ReadingComponentInterface[];
}

export default function BarChart(props: ChartProps) {
  const { rawData } = props;

  let dates = rawData.map(reading => {
    let date = reading.createdAt;
    console.log(date.getDate())
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`
  })

  let values = rawData.map(reading => reading.value)

  const data = {
    labels: dates,
    datasets: [
      {
        data: values,
        backgroundColor: "#266867",
        borderRadius: 5,
        borderSkipped: false,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    type: "bar",
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        border: {
          display: false,
        },

        ticks: { color: "#77767A" },
      },
      y: {
        grid: {
          lineWidth: 4,
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
    <div className="w-full h-[149px] md:w-96 md:h-44">
      <div className="">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}
