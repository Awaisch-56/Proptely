'use client';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import GraphIcon from '@/app/assets/graph-icon.svg';
import Image from 'next/image';

interface GraphProps {
    series: ApexAxisChartSeries;
    categories: string[];
    totalBill: number;
    paidBill: number;
    unpaidBill: number;
}

const Graph: React.FC<GraphProps> = ({ series, categories, totalBill, paidBill, unpaidBill }) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '10%',
                borderRadius: 5,
            },
        },
        grid: {
            show: false,
        },
        xaxis: {
            type: 'category',
            categories: categories,
            axisBorder: { show: true },
            axisTicks: { show: false },
            labels: { show: true },
        },
        yaxis: {
            axisBorder: { show: true },
            axisTicks: { show: false },
            labels: { show: false },
        },
        legend: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                gradientToColors: ['#1D90D8'],
                stops: [0, 100],
            }
        },
        colors: ['#71EDE2'],
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <div className="w-full bg-white rounded-lg shadow-md p-6 relative">
            <div className='flex justify-between'>
                <div>
                    <p className='font-bold text-lg'>Recent Transactions</p>
                    <p className='text-[#BDBDBD]'>Jan 24- Dec 24</p>
                </div>
                <div>
                    <Image src={GraphIcon} alt='graph-icon' width={30} height={30} />
                </div>
            </div>
            <div className="w-[90%]">
                <ApexCharts options={options} series={series} type="bar" height={350} />
            </div>

            <div className="absolute top-20 right-20 flex flex-col items-end gap-2 bg-white rounded ">
                <div>
                    <p className="">Billed</p>
                    <p className="text-[#003A92]">$ {totalBill}</p>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <span className='w-3 h-3 bg-[#71EDE2] rounded'></span>
                        <p className="">Paid</p>
                    </div>
                    <p className="text-[#71EDE2]">$ {paidBill}</p>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <span className='w-3 h-3 bg-[#1D90D8] rounded'></span>
                        <p className="">Unpaid</p>
                    </div>
                    <p className="text-[#1D90D8]">$ {unpaidBill}</p>
                </div>
            </div>
        </div>
    );
};

export default Graph;
