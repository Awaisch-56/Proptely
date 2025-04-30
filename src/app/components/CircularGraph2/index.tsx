'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface billPercent {
  bill: string;
  percentage: number;
}

interface DonutChartProps {
  billPercent: billPercent[];
}

const DonutChart2: React.FC<DonutChartProps> = ({ billPercent }) => {
  const getColorBybill = (bill: string) => {
    switch (bill.toLowerCase()) {
      case 'paid':
        return '#71EDE2';
      case 'unpaid':
        return '#003A92';
      default:
        return '#cccccc';
    }
  };

  const data = {
    labels: billPercent.map((item) => item.bill),
    datasets: [
      {
        data: billPercent.map((item) => item.percentage),
        backgroundColor: billPercent.map((item) => getColorBybill(item.bill)),
        hoverBackgroundColor: billPercent.map((item) => getColorBybill(item.bill)),
        borderWidth: 0,
        cutout: '90%',
      },
    ],
  };

  const total = billPercent.reduce((acc, item) => acc + item.percentage, 0);
  const centerText = `${total.toFixed(0)}%`;


  const options = {
    responsive: false,
    maintainAspectRatio: false,
    rotation: -265,
    circumference: 310,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-[150px] h-[150px] mx-auto">
      <Doughnut data={data} options={options} width={150} height={150} />
      <div className="absolute inset-0 flex items-center justify-center ">
        <span className="text-[26px] font-bold text-[#71EDE2]">{centerText}</span>
      </div>
    </div>
  );
};

export default DonutChart2;
