document.addEventListener("DOMContentLoaded", function () {
  // Specify the configuration items and data for the chart
  var barChart = echarts.init(
    document.getElementById("barChart"),
    globalChartOptions
  );

  var barChartOption = {
    toolbox: {
      ...globalChartOptions.toolbox,
    },
    title: {
      text: "Bar graph",
    },
    xAxis: {
      name: "Type of shirt",
      ...globalChartOptions.xAxis,
      data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
    },
    yAxis: {
      name: "Number of sales",
      ...globalChartOptions.yAxis,
    },
    series: [
      {
        name: "sales",
        type: "bar",
        data: [
          {
            name: "my farm",
            value: 20,
            itemStyle: {
              color: colors.currentFarm,
            },
          },
          5,
          10,
          36,
          10,
          10,
          20,
          {
            name: "my farm",
            value: 20,
            itemStyle: {
              color: colors.currentFarm,
            },
          },
        ],
      },
    ],
    ...globalChartOptions.color,
  };

  // Display the chart using the configuration items and data just specified.
  barChart.setOption(barChartOption);

  //
  // ⚡️⚡️⚡️⚡️ SCATTER PLOT EXAMPLE ⚡️⚡️⚡️⚡️
  //
  var myChartScatter = echarts.init(
    document.getElementById("chartScatter"),
    globalChartOptions
  );
  const chartOption = {
    toolbox: {
      ...globalChartOptions.toolbox,
    },
    title: {
      text: "Scatter Plot",
    },
    xAxis: {
      ...globalChartOptions.xAxis,
      splitLine: {
        lineStyle: {
          color: "#DDE7FD",
        },
      },
      name: "X Axis",
    },

    yAxis: {
      ...globalChartOptions.yAxis,
      splitLine: {
        lineStyle: {
          color: "#DDE7FD",
        },
      },
      name: "Y Axis",
    },
    series: [
      {
        symbolSize: 16,
        symbol: "square",
        data: [[10.0, 8.04]],
        color: colors.currentFarm,
        type: "scatter",
      },
      {
        symbolSize: 16,
        symbol: "square",
        data: [
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: "scatter",
      },
    ],
  };
  myChartScatter.setOption(chartOption);
  // ⚡️⚡️⚡️⚡️ box PLOT EXAMPLE ⚡️⚡️⚡️⚡️
  const boxoption = {
    toolbox: {
      ...globalChartOptions.toolbox,
    },
    title: [
      {
        text: "Box plot",
      },
    ],
    dataset: [
      {
        // prettier-ignore
        source: [
                     [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                     [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                     [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                     [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                     [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
                 ],
      },
      {
        transform: {
          type: "boxplot",
          config: { itemNameFormatter: "expr {value}" },
        },
      },
      {
        fromDatasetIndex: 1,
        fromTransformResult: 1,
      },
    ],

    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      ...globalChartOptions.xAxis,
      type: "category",
      name: "X axis",
    },
    yAxis: {
      ...globalChartOptions.yAxis,
      type: "value",
      name: "Y axis",
    },
    series: [
      {
        itemStyle: {
          color: globalChartOptions.color[0],
          borderColor: colors.currentFarm,
        },
        name: "boxplot",
        type: "boxplot",
        datasetIndex: 1,
      },
      {
        name: "Average",
        type: "scatter",
        symbol: "line",
        datasetIndex: 1,
        symbolSize: 60,
        itemStyle: {
          color: "#17CA9B",
        },
      },
      {
        name: "Current Farm",
        type: "scatter",
        datasetIndex: 1,
        symbolSize: 10,
        symbol: "square",
        itemStyle: {
          color: colors.currentFarm,
        },
      },
    ],
  };
  var boxPlot = echarts.init(
    document.getElementById("chartBox"),
    globalChartOptions
  );
  boxPlot.setOption(boxoption);

  const lineOption = {
    toolbox: {
      ...globalChartOptions.toolbox,
    },
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads"],
    },
    xAxis: {
      ...globalChartOptions.xAxis,
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      name: "day of the week",
    },
    yAxis: {
      ...globalChartOptions.yAxis,
      type: "value",
      name: "Number of ",
    },
    series: [
      {
        name: "Email",
        type: "line",
        symbol: "square",
        symbolSize: 10,
        data: [12, 32, 11, 14, 9, 23, 21],
      },
      {
        name: "Union Ads",
        symbol: "square",
        symbolSize: 10,
        type: "line",
        data: [22, 12, 19, 24, 29, 33, 31],
      },
      {
        name: "Video Ads",
        symbol: "square",
        symbolSize: 10,
        type: "line",
        data: [15, 22, 21, 14, 19, 33, 41],
      },
    ],
  };
  var linePlot = echarts.init(
    document.getElementById("linePlot"),
    globalChartOptions
  );
  linePlot.setOption(lineOption);
});
