import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = () => {
  useEffect(() => {
    var options = {
      series: [
        {
          name: "100K",
          data: [5],
        },
        {
          name: "1M",
          data: [0],   
        },
        {
          name: "10M",
          data: [0],
        },
      ],
      chart: {
        toolbar: {
            show: false,
          },
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      xaxis: {
        categories: ["April", "May", "June"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetX: 40,
      },
    };

    var chart = new ApexCharts(document.querySelector("#barChart"), options);
    chart.render();
  }, []);

  return <div id="barChart" />;
};

export default BarChart;
