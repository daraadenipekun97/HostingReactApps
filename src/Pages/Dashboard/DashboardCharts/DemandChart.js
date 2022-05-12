import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["March", 660, 1120],
  ["April", 1030, 540],
  ["May", 1000, 440],
  ["June", 500, 1040],
];

export const options = {
  //   title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  // chartArea: { width: "100%" },

  series: {
    0: { color: "#023E8A" },
    1: { color: "#D8A9AD" },
  },
};

function DemandChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      loader={<p>Loading Chart...</p>}
    />
  );
}

export default DemandChart;
