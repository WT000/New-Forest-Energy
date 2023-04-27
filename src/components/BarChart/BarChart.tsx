import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, scales } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";
import { ReadingComponentInterface } from "../Reading/Reading";
import { raw } from "@storybook/react";
import { groupBy } from "../../lib/utils/arrays";
import { dateToEpoch } from "../../lib/utils/dates";

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
  showDifference: boolean;
}

export default function BarChart(props: ChartProps) {
  const { rawData, showDifference } = props;

  console.log("----", rawData, showDifference)

  const rawDataByDays = groupBy(rawData, d => dateToEpoch(d.createdAt))

  const groupedValues = []

  rawDataByDays.forEach((value, key) => {
    groupedValues.push(value.at(-1))
  });
  let dates = groupedValues.map(reading => {
    let date = new Date(reading.createdAt);
   

    if(props.dateType == ChartDateType.DayMonth){
      return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`
    }
    else {
      return `${date.toLocaleString('default', { month: 'long'})} ${date.toLocaleString('default', {year: "numeric" }).slice(-2)}`
    }
  })

  let tmpValues = groupedValues.map(reading => reading.value)
  let values = []


  if(showDifference) {
    const firstReading = tmpValues[0]
    for (let i = 1; i < tmpValues.length ; i++) {
      let item = tmpValues[i];
      let difference = 0;
      try{
        difference = item - tmpValues[i - 1]
      }
      catch{ }
      
      values.push(difference)
    }
    dates.shift()
  } else {
    values = tmpValues
  }

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
    var newY = ({...options.scales.y, beginAtZero: false, grace: "2%"})
    options.scales.y = newY
  }

  return (
    <div className="w-full h-[149px] md:w-96 md:h-44">
      <div className="">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}
