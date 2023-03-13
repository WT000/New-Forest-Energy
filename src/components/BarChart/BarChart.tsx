import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";
import { ReadingComponentInterface } from "../Reading/Reading";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export enum ChartDateType {
  DayMonth = "DayMonth",
  MonthYear = "MonthYear"
};

interface ChartProps {
  rawData: ReadingComponentInterface[];
  beginAtZero: boolean;
  dateType: ChartDateType;
  unitOfMeasure: string;
}

export default function BarChart(props: ChartProps) {
  const { rawData } = props;

  let dates = rawData.map(reading => {
    let date = reading.createdAt;
    console.log(date.getDate())
    

    if(props.dateType == ChartDateType.DayMonth){
      return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`
    }
    else {
      return `${date.toLocaleString('default', { month: 'long'})} ${date.toLocaleString('default', {year: "numeric" }).slice(-2)}`
    }
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
      tooltip: {
        callbacks: {
            label: function(context) {
                if(props.unitOfMeasure){
                  let label = context.dataset.label || '';

                  if (context.parsed.y !== null) {
                      label += `${context.parsed.y} ${props.unitOfMeasure}`
                  }
                  return label;
                }
            }
        }
    }
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
          lineWidth: 2,
          color: "#EDEEF0",
        },

        border: {
          display: false,
        },

        ticks: { color: "#77767A" },
      },
    },
  };

  if(props.beginAtZero == false){
    //Ignore error
    options.scales.y = {...options.scales.y, beginAtZero: false, grace: "2%"}
  }

  return (
    <div className="w-full h-[149px] md:w-96 md:h-44">
      <div className="">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}
