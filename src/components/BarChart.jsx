import { useEffect } from "react";
import Chart from "chart.js/auto";
export default function Bar({
  labels,
  chartName,
  dataArr,
  id,
  className,
  axis,
}) {
  const bgColors = ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
    bdColors = ["rgb(75, 192, 192)", "rgb(255, 99, 132)"];
  const data = {
    labels: labels,
    axis: axis,
    datasets: [
      {
        // label: chartName,
        data: dataArr,
        backgroundColor: bgColors,
        borderColor: bdColors,
        borderWidth: 1,
      },
    ],
  };
  const options =
    axis == "x"
      ? {
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 100,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }
      : {
          indexAxis: "y",
        };
  const config = {
    type: "bar",
    data: data,
    options: options,
  };
  useEffect(() => {
    const canva = document.getElementById(chartName);
    const chart = new Chart(canva, config);
    return () => {
      chart.destroy();
    };
  });
  return (
    <div id={id} className={className}>
      <canvas id={chartName}></canvas>
    </div>
  );
}
