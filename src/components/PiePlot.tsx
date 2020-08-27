import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Windouws", "Mac", "Linux"],
  datasets: [
    {
      data: [90, 7, 3],
      backgroundColor: ["#4169e1", "#ff1493", "#FFCES6"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCES6"],
      borderColor: ["transparent", "transparent", "transparent"],
    },
  ],
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PiePlot;
