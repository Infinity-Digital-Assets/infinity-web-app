import React from "react";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = () => {
  const chartOptions = {
    legend: {
      show: false,
    },
    chart: {
      type: "pie",
    },
    labels: [
      "Post fund raising token available for sale",
      "Property Management",
      "Stage III",
      "Stage II",
      "Stage I",
    ],
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

  const chartSeries = [68, 12, 10, 9, 1];

  return (
    <div id="chart">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="pie"
        />
    </div>
  );
};

export default ApexChart;
