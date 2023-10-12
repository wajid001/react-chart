import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { getRandom } from '../utils/genrateRandomNumber'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      intersect: false,
      callbacks: {
        label: (context: any) => {
          let label = ''
          if (context.parsed.y) {
            label = context.parsed.y + '%'
          }
          return label
        },

        item: (context: any) => {
          const itemTooltip = document.createElement('div')
          itemTooltip.innerHTML = '<button>Click Me</button>'
          return itemTooltip
        },
      },
    },
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandom(-1000, 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export default function LineChart() {
  return <Line options={options} data={data} />
}
