const globalChartOptions = {
  // Global palette:
  color: [
    "#C6D8FC",
    "#1D2F53",
    "#1E4089",
    "#1E52BF",
    "#1D62F4",
    "#5689F7",
    "#8EB0F9",
    "#C6D8FC",
  ],
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    containLabel: true,
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: "#D9D9D9", // Custom color for the y-axis
      },
    },
    textStyle: {
      fontFamily: "Figtree",
      textColor: "#000",
      fontSize: 18,
    },
    axisLabel: {
      fontSize: 18,
      color: "#56637E",
    },
    nameTextStyle: {
      fontSize: 18,
      color: "#8E97A9", // Custom color for the x-axis name
    },
    nameLocation: "center",
    nameGap: 60,
  },
  yAxis: {
    nameLocation: "center",
    fontSize: 18,
    nameGap: 60,
    title: {
      textStyle: {
        fontSize: 18,
        fontFamily: "Figtree",
        textColor: "#000",
      },
    },
    axisLine: {
      fontSize: 18,
      lineStyle: {
        color: "#D9D9D9", // Custom color for the y-axis
      },
    },
    axisLabel: {
      fontSize: 18,
      color: "#56637E",
    },
    nameTextStyle: {
      fontSize: 18,
      color: "#8E97A9", // Custom color for the x-axis name
    },
  },
  legend: {
    borderRadius: 8,
    borderColor: "#C6D8FC",
    borderWidth: 1,
    padding: 16,
    textStyle: {
      fontSize: 18,
      fontFamily: "Figtree",
      textColor: "#56637E",
    },
  },
  title: {
    textStyle: {
      fontFamily: "Figtree",
      fontWeight: "normal",
      fontSize: 36,
      color: "#1D62F4",
    },
  },
  itemStyle: {
    borderRadius: [4, 4, 0, 0],
  },
  textStyle: {
    fontFamily: "DM Sans",
  },
  series: {
    type: "bar",
    color: "#C6D8FC",
  },
};

const colors = {
  currentFarm: "#1D62F4",
};
