import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profitability"],
  ["Jan", 1000, 400, 100],
  ["Feb", 1170, 460, 500],
  ["March", 660, 1120, 300],
  ["April", 1030, 540, 1000],
  ["May", 1000, 440, 700],
  ["June", 1000, 400, 500],
  ["July", 1170, 460, 300],
  ["Aug", 660, 1120, 100],
  ["Sept", 1030, 540, 1000],
  ["Oct", 1000, 440, 600],
  ["Nov", 500, 1040, 200],
  ["Dec", 500, 1040, 700],
];
export const options = {
  //   title: "Population of Largest U.S. Cities",
  // chartArea: { width: "100%" },
  isStacked: true,
  legend: { position: "bottom" },

  series: {
    0: { color: "#023E8A" },
    1: { color: "#48CAE4" },
    2: { color: "#48CAE4" },
  },

  //   hAxis: {
  //     title: "Total Population",
  //     minValue: 0,
  //   },
  //   vAxis: {
  //     title: "City",
  //   },
};

function ProfitabilityChart() {
  return <Chart chartType="BarChart" width="100%" height="300px" data={data} options={options} />;
}

export default ProfitabilityChart;
