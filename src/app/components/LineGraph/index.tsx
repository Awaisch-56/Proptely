'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Image from 'next/image';
import GraphIcon from '@/app/assets/graph-icon.svg';
import IncomeIcon from '@/app/assets/icon.svg';
import ExpenseIcon from '@/app/assets/expense.svg';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ApexAxisOnlyProps {
    categories1: string[];
    incomeData: any;
    expenseData: any;
}

const ApexAxisOnly: React.FC<ApexAxisOnlyProps> = ({ categories1, incomeData, expenseData }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const baseChartOptions = (color: string): ApexOptions => ({
        chart: {
            height: 150,
            type: 'line',
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        colors: [color],
        dataLabels: { enabled: false },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            width: 3,
        },
        markers: { size: 0 },
        grid: { show: false },
        xaxis: {
            categories: categories1,
            axisBorder: { show: true, color: '#EFF5F8' },
            axisTicks: { show: false },
            labels: { show: false },
        },
        yaxis: {
            labels: {
                show: false,
                formatter: (value: number) => `$${value}`,
            },
            axisBorder: { show: true, color: '#EFF5F8' },
            axisTicks: { show: false },
        },
        tooltip: { enabled: true },
    });

    return (
        <div className="bg-white p-4 rounded-lg shadow w-full max-w-3xl mx-auto">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="font-bold text-lg">Financials Snapshot</p>
                </div>
                <div>
                    <Image src={GraphIcon} alt="graph-icon" width={30} height={30} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-col">
                    <div className="flex items-center justify-between gap-5">
                        <div className='felx-col'>
                            <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <p>Income</p>
                                <Image src={IncomeIcon} alt='icon' />
                            </div>
                            <div className="text-base font-semibold text-[#71EDE2]">$25,000</div>
                        </div>
                        {isClient && (
                            <ApexChart
                                options={baseChartOptions('#71EDE2')}
                                series={[{ name: 'Income', data: incomeData }]}
                                type="line"
                                height={150}
                            />
                        )}
                    </div>

                    <div className="flex items-center justify-between gap-5">
                        <div className='flex-col'>
                            <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <p>Expense</p>
                                <Image src={ExpenseIcon} alt='icon' />
                            </div>
                            <div className="text-base font-semibold ">$12,000</div>
                        </div>
                        {isClient && (
                            <ApexChart
                                options={baseChartOptions('#ED1111')}
                                series={[{ name: 'Expense', data: expenseData }]}
                                type="line"
                                height={150}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApexAxisOnly;
