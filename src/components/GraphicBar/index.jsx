import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { GraphicDefault } from '../GraphicDefault';

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
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Framework graphics cards',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: [15, 42, 80, 97, 87, 125, 200],
      backgroundColor: 'rgb(20, 153, 194)',
      borderColor: 'rgb(20, 153, 194)',
    },
    {
      label: "Angular",
      data: [27, 73, 100, 40, 90, 115, 145],
      backgroundColor: 'rgb(221, 0, 49)',
      borderColor: 'rgb(221, 0, 49)',
    },
    {
      label: "Vue",
      data: [55, 80, 77, 75, 135, 150, 175],
      backgroundColor: 'rgb(66, 211, 146)',
      borderColor: 'rgb(66, 211, 146)',
    },
  ],
};

export function GraphicBar() {
  return (
    <GraphicDefault>
      <Bar options={options} data={data} />
    </GraphicDefault> 
  ) 
}
