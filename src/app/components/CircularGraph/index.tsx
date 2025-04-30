'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Image from 'next/image';
import GraphIcon from '@/app/assets/graph-icon.svg';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BillPercentage {
  bill: string;
  percentage: number;
}

interface DonutChartProps {
  billPercentage: BillPercentage[];
}

const DonutChart: React.FC<DonutChartProps> = ({ billPercentage }) => {
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
    labels: billPercentage.map((item) => item.bill),
    datasets: [
      {
        data: billPercentage.map((item) => item.percentage),
        backgroundColor: billPercentage.map((item) => getColorBybill(item.bill)),
        hoverBackgroundColor: billPercentage.map((item) => getColorBybill(item.bill)),
        borderWidth: 0,
        cutout: '85%',
      },
    ],
  };

  const total = billPercentage.reduce((acc, item) => acc + item.percentage, 0);
  const centerText = `${total.toFixed(0)}%`;


  const options = {
    responsive: false,
    maintainAspectRatio: false,
    rotation: -145,
    circumference: 290,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <span className='w-5 h-5 bg-[#71EDE2] rounded'></span>
          <p className='font-bold text-lg'>Occupancy Stats</p>
        </div>
        <div>
          <Image src={GraphIcon} alt='graph-icon' width={30} height={30} />
        </div>
      </div>

      <div className="relative w-[150px] h-[150px] mx-auto">
        <Doughnut data={data} options={options} width={150} height={150} />
        <div className="absolute inset-0 flex items-center justify-center ">
          <span className="text-[26px] font-bold text-[#71EDE2]">{centerText}</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
