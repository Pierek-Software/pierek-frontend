import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Nest.js", "Express", "Koa", "Fastify", "Vanilla"];

export const data = {
  labels,
  datasets: [
    {
      label: "Requests per second",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(30, 41, 59, 1)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
