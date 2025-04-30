'use client';
import TabsSection from '@/app/components/TabSection';
import Dropdown from '@/app/components/Dropdown';
import React, { useState } from 'react';
import DonutChart from '@/app/components/CircularGraph';
import ApexAxisOnly from '@/app/components/LineGraph';
import GenericProgressBars from '@/app/components/Progressbar';
import Image from 'next/image';
import GraphIcon from '@/app/assets/graph-icon.svg';
import DonutChart2 from '@/app/components/CircularGraph2';
import { GenericTable, TableColumn } from '@/app/components/Table';
import TableIcon from '@/app/assets/Table.svg';
import EditIcon from '@/app/assets/Edit.svg';
import dynamic from 'next/dynamic';

const Graph = dynamic(() => import('@/app/components/Graph'), { ssr: false });

const series = [
    {
        name: 'Progress',
        data: [30, 60, 45, 80, 55, 70, 40, 90, 30, 10, 39, 60],
    },
];

const billPercentage = [
    { bill: 'Paid', percentage: 20 },
    { bill: 'Unpaid', percentage: 35 },
    { bill: 'Paid', percentage: 20 },

];

const billPercent = [
    { bill: 'Paid', percentage: 75 },
];

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const categories1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const incomeData = [null, null, 50, 61, 49, 62, 79, null, 100]
const expenseData = [null, 60, 55, 45, 40, 38, 45, 40, null]

const progressItems = [
    { label: 'Plumbing', value: 70, color: '#63DFD4' },
    { label: 'Electrical', value: 45, color: '#017BC6' },
    { label: 'Joinery', value: 90, color: '#1D90D8' },
];

const progressItems1 = [
    { label: 'Plumbing', value: 70, color: '#63DFD4' },
    { label: 'Electrical', value: 45, color: '#63DFD4' },
    { label: 'Joinery', value: 90, color: '#63DFD4' },
];

const rentDetails = [
    { label: "Rent Type", value: "" },
    { label: "Security Deposit", value: "AED 0.0" },
    { label: "Market Value", value: "AED 0.0" },
    { label: "Threshold Value", value: "AED 0.0" },
    { label: "Rent Per Square Foot", value: "AED 0.0" },
    { label: "Actual Rent Value", value: "AED 0.0" },
];

const unitInformation = [
    { label: "Owner", value: "Manohar Lahori" },
    { label: "Property", value: "My Propety" },
    { label: "Unit Tags", value: "" },
    { label: "Unit Size", value: "N/A" },
    { label: "Assigned to", value: "" },
    { label: "Unit No", value: "2" },
    { label: "Unit Type", value: "Hotel" },
    { label: "Unit Category", value: "Commercial" },
    { label: "Status", value: "Vacant" },
    { label: "Property", value: "My Propety" },
    { label: "Unit Tags", value: "" },
    { label: "Unit Size", value: "N/A" },
    { label: "Assigned to", value: "" },
    { label: "Unit No", value: "2" },
    { label: "Unit Type", value: "Hotel" },
    { label: "Unit Category", value: "Commercial" },
    { label: "Status", value: "Vacant" },

];

type RentData = {
    name: string;
    status: string;
    startDate: string;
    endDate: string;
    rent: string;
};

type CommissionData = {
    name: string;
    amount: string;
    commissionDetails: string;
    status: string;
    totalAmount: string;
};

const data: RentData[] = [
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2024",
        endDate: "09-12-2025",
        rent: "20,000.00",
    },
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2023",
        endDate: "09-12-2024",
        rent: "20,000.00",
    },
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2024",
        endDate: "09-12-2025",
        rent: "20,000.00",
    },
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2023",
        endDate: "09-12-2024",
        rent: "20,000.00",
    },
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2024",
        endDate: "09-12-2025",
        rent: "20,000.00",
    },
    {
        name: "John Thomas",
        status: "Active",
        startDate: "10-12-2023",
        endDate: "09-12-2024",
        rent: "20,000.00",
    }
];

const columns: TableColumn<RentData>[] = [
    { key: "name", label: "Name", icon: TableIcon },
    {
        key: "status", label: "Status", icon: TableIcon, render: (value) => (
            <span className="rounded bg-[#70EDE2] px-2 py-1 text-xs font-medium text-white">
                {value}
            </span>
        ),
    },
    { key: "startDate", label: "Start Date", icon: TableIcon },
    { key: "endDate", label: "End Date", icon: TableIcon },
    { key: "rent", label: "Rent", icon: TableIcon },
];

const columns2: TableColumn<CommissionData>[] = [
    { key: "name", label: "Name", icon: TableIcon },
    { key: "amount", label: "Amount", icon: TableIcon },
    { key: "commissionDetails", label: "Commission Details", icon: TableIcon },
    {
        key: "status",
        label: "Status",
        icon: TableIcon,
        render: (value) => {
            const statusColorMap: Record<string, string> = {
                Paid: "bg-[#70EDE2]",
                Unpaid: "bg-[#FFDE2199]",
                Hold: "bg-[#BDBDBD]",
                "Bad Debt": "bg-[#ED1111]",
                Overdue: "bg-[#ED1111]",
            };

            const bgColor = statusColorMap[value] || "bg-gray-200";

            return (
                <span className={`rounded px-2 py-1 text-xs font-medium text-white ${bgColor}`}>
                    {value}
                </span>
            );
        },
    },

    { key: "totalAmount", label: "Amount", icon: TableIcon },
];

const data2: CommissionData[] = [
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Paid",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Unpaid",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Hold",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Bad Debt",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Overdue",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Paid",
        totalAmount: "20,000.00",
    },
    {
        name: "John Thomas",
        amount: "5000",
        commissionDetails: "09-12-2025",
        status: "Unpaid",
        totalAmount: "20,000.00",
    },

];

function Units() {
    const [selectedLabel, setSelectedLabel] = useState('Action');

    const handleActionSelect = (selectedOption: string) => {
        console.log('Selected Action:', selectedOption);
        setSelectedLabel(selectedOption);
    };


    return (
        <div className="w-full">
            <div className="flex justify-between items-center px-5 py-5">
                <div className="flex flex-col gap-2">
                    <span className="font-bold">Unit No</span>
                    <div className="flex items-center gap-3">
                        <span>Status</span>
                        <span className="px-1 bg-[#70EDE2] text-white rounded">Vacant</span>
                    </div>
                </div>

                <Dropdown
                    label={selectedLabel}
                    options={['Action', 'Delete', 'View']}
                    onSelect={handleActionSelect}
                    className='bg-[#003A92] text-white py-2 px-2 '
                    className2='bg-[#003A92] py-4 mt-3 gap-2'
                />
            </div>

            <TabsSection />

            <div className='flex gap-3 mt-5'>
                <div className='w-[70%]'>
                    <div className='mt-3'>
                        <Graph
                            series={series}
                            categories={categories}
                            totalBill={10000}
                            paidBill={7000}
                            unpaidBill={3000}
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow w-full border-2 border-[#EFF5F8] mt-3">
                        <p className="font-bold text-lg p-4">Rent/Sale Details</p>
                        <table className="w-full text-sm text-gray-900">
                            <tbody>
                                {rentDetails.map((item, index) => (
                                    <tr key={index} className="border-b border-[#EFF5F8]">
                                        <td className="px-4 py-3">{item.label}</td>
                                        <td className="px-5 py-3 ">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow w-full mt-3'>
                        <h1 className="mb-3 text-xl font-bold">Lease History</h1>
                        <GenericTable columns={columns} data={data} />
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow w-full mt-3'>
                        <h1 className="mb-7 text-xl font-bold">Commission Details</h1>
                        <h1 className="mb-3  text-md font-bold">Tenant Commission</h1>
                        <GenericTable columns={columns2} data={data2} />

                        <div className='mt-10'>
                            <h1 className="mb-3 text-md font-bold">Owner Commission</h1>
                            <GenericTable columns={columns2} data={data2} />
                        </div>
                    </div>
                </div>

                <div className='w-[30%]'>

                    <div className='flex flex-col gap-2 mt-3'>
                        <ApexAxisOnly
                            categories1={categories1}
                            incomeData={incomeData}
                            expenseData={expenseData}
                        />

                        <DonutChart billPercentage={billPercentage} />
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow w-full mt-3">
                        <div className="flex justify-between mb-7">
                            <div className="flex items-center">
                                <p className="font-bold text-lg">Facility Management</p>
                            </div>
                            <div>
                                <Image src={GraphIcon} alt="graph-icon" width={30} height={30} />
                            </div>
                        </div>
                        <GenericProgressBars progressData={progressItems} />
                        <div className="flex items-center mt-10 justify-between">
                            <p className="font-bold text-md">Completion Status</p>
                            <DonutChart2 billPercent={billPercent} />
                        </div>
                    </div>


                    <div className="bg-white p-4 rounded-lg shadow w-full mt-3">
                        <div className="flex justify-between mb-7">
                            <div className="flex items-center">
                                <p className="font-bold text-lg">Commission Snapshot</p>
                            </div>
                            <div>
                                <Image src={GraphIcon} alt="graph-icon" width={30} height={30} />
                            </div>
                        </div>
                        <GenericProgressBars progressData={progressItems1} />
                    </div>


                    <div className="bg-white rounded-lg shadow w-full mt-3">
                        <div className="flex justify-between p-4">
                            <div className="flex items-center">
                                <p className="font-bold text-lg ">Unit Information</p>
                            </div>
                            <div>
                                <Image src={EditIcon} alt="graph-icon" width={30} height={30} />
                            </div>
                        </div>
                        <table className="w-full text-sm text-gray-900">
                            <tbody>
                                {unitInformation.map((item, index) => (
                                    <tr key={index} className="border-b border-[#EFF5F8]">
                                        <td className="px-4 py-3">{item.label}</td>
                                        <td className="px-3 py-3 ">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Units;
