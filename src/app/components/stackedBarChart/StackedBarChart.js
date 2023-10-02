import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StackedBarChart = () => {
  const chartOptions = {
    series: [
      {
        name: "100K",
        data: [2, 2, 2],
        color: "#4FD3CC",
        
      },
      {
        name: "1M",
        data: [0, 15, 15],
        color: "#AD00FF",
      },
      {
        name: "2M",
        data: [0, 0, 15],
        color: "#4F009E",
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
          },
        },
      },
    },
    stroke: {
      show: false,
    },

    xaxis: {
      categories: ["April", "May", "June"],
      labels: {
        formatter: function (val) {
          return val + "";
        },
        style: {
          fontSize: "15px",
          fontWeight: "600",
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      offsetX: 40,
    },
  };

  return (
    <div id="chart">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={chartOptions.chart.height}
      />
    </div>
  );
};

export default StackedBarChart;
