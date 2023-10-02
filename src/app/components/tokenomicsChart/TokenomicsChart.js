import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

const ChartTokenomics = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TokenomicsChart = ({ sendDataToParent }) => {
  const [hoverData, setHoverData] = useState();



  const chartOptions = {
    legend: {
      show: false,
    },
    chart: {
      type: "pie",
    },

    chart: {
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
          const hoveredStage = config.dataPointIndex;
          setHoverData(hoveredStage)
          console.log("Hovered Stage:", hoveredStage);
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {},
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };


  // calling function from parent

  sendDataToParent(hoverData)

  const chartSeries = [68, 12, 10, 9, 1];

  const [chartHover, setChartHover] = useState(false);

  console.log("char hover is", chartHover);

  const handleMouseEnter = (event, chartContext, config) => {
    const hoveredStage = config.dataPointIndex;
    console.log("Hovered Stage:", hoveredStage);
    setChartHover(true);
  };
  const handleMouseLeave = () => {
    setChartHover(false);
  };

  return (
    <div id="chart">
      <ChartTokenomics options={chartOptions} series={chartSeries} type="pie" />
    </div>
  );
};

export default TokenomicsChart;
