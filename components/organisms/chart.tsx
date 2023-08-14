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

const values = [
  { name: "Nest.js", rps: 30001 },
  { name: "Fastify", rps: 49720 },
  { name: "Koa", rps: 38819 },
  { name: "Express", rps: 11244 },
  { name: "Vanilla", rps: 70203 },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const data = {
  labels: values.map((value) => value.name),
  datasets: [
    {
      label: "Requests per second",
      data: values.map((value) => value.rps),
      backgroundColor: "rgba(30, 41, 59, 1)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
