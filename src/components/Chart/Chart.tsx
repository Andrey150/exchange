import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import {useSelector} from "react-redux";
import {IRootReducer} from "../../types/types";

import styles from './Chart.module.scss';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


interface ChartProps {}

export const Chart: FC<ChartProps> = () => {

  const amountsArray = useSelector((state:IRootReducer) => state.amount.amounts);
  const datesArray = useSelector((state:IRootReducer) => state.date.dateDays);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Exchange rate change',
      },
    },
  };

  const labels = datesArray;

  const data = {
    labels,
    datasets: [
      {
        label: 'Course',
        data: amountsArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };


  return <Line options={options} data={data} className={styles.Chart}/>;
};

