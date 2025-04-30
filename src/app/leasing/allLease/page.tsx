'use client';
import TabsSection from '@/app/components/TabSection';
import Dropdown from '@/app/components/Dropdown';
import React, { useState } from 'react';
import GenericProgressBars from '@/app/components/Progressbar';
import Image from 'next/image';
import GraphIcon from '@/app/assets/graph-icon.svg';
import { GenericTable, TableColumn } from '@/app/components/Table';
import TableIcon from '@/app/assets/Table.svg';
import EditIcon from '@/app/assets/Edit.svg';
import DeleteIcon from '@/app/assets/Trash.svg';
import ViewIcon from '@/app/assets/view.svg';
import dynamic from 'next/dynamic';

const Graph = dynamic(() => import('@/app/components/Graph'), { ssr: false });

const series = [
    {
        name: 'Progress',
        data: [30, 60, 45, 80, 55, 70, 40, 90, 30, 10, 39, 60],
    },
];

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const progressItems1 = [
    { label: 'Plumbing', value: 70, color: '#63DFD4' },
    { label: 'Electrical', value: 45, color: '#63DFD4' },
    { label: 'Joinery', value: 90, color: '#63DFD4' },
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

];

type CommissionData = {
    name: string;
    amount: string;
    Scheduledon: string;
    dueOn: string;
    status: string;
    totalAmount: string;
    action: string;
};

type AttachedDocumentData = {
    documentName: string;
    issueDate: string;
    expiryDate: string;
    files: string;
    actions: string;
};

const columns2: TableColumn<CommissionData>[] = [
    { key: "name", label: "Name", icon: TableIcon },
    { key: "amount", label: "Amount", icon: TableIcon },
    { key: "Scheduledon", label: "Scheduled On", icon: TableIcon },
    { key: "dueOn", label: "Due On", icon: TableIcon },

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
    {
        key: "action",
        label: "Actions",
        icon: TableIcon,
        render: () => (
            <div className="flex items-center gap-2">
                <Image src={EditIcon} alt="Edit" width={20} height={20} />
                <Image src={ViewIcon} alt="View" width={20} height={20} />
            </div>
        ),
    }
];

const data2: CommissionData[] = [
    {
        name: "John Thomas",
        amount: "5000",
        Scheduledon: "09-12-2025",
        dueOn: "09-12-2025",
        status: "Paid",
        totalAmount: "20,000.00",
        action: " "
    },
    {
        name: "John Thomas",
        amount: "5000",
        Scheduledon: "09-12-2025",
        dueOn: "09-12-2025",
        status: "Unpaid",
        totalAmount: "20,000.00",
        action: " "
    },
    {
        name: "John Thomas",
        amount: "5000",
        Scheduledon: "09-12-2025",
        dueOn: "09-12-2025",
        status: "Hold",
        totalAmount: "20,000.00",
        action: " "
    },
];

const columns3: TableColumn<AttachedDocumentData>[] = [
    { key: "documentName", label: "Name", icon: TableIcon },
    { key: "issueDate", label: "Amount", icon: TableIcon },
    { key: "expiryDate", label: "Amount", icon: TableIcon },
    { key: "files", label: "Amount", icon: TableIcon },

    {
        key: "actions",
        label: "Actions",
        icon: TableIcon,
        render: () => (
            <div className="flex items-center gap-2">
                <Image src={EditIcon} alt="Edit" width={20} height={20} />
                <Image src={DeleteIcon} alt="View" width={20} height={20} />
            </div>
        ),
    }
];

const data3: AttachedDocumentData[] = [
    {
        documentName: "John Thomas",
        issueDate: "17-Dec-2024",
        expiryDate: "31-Dec-2024",
        files: "IMG_9811",
        actions: "",
    },

];


const Data = [
    { title: "Contract Value", value: "1.1m", desc: "Total expected income from lease", color: "text-[#003A92]" },
    { title: "Rent Income", value: "1.1m", desc: "Amount billed in defined period", color: "text-[#003A92]" },
    { title: "Received", value: "111,111", desc: "Amount received during defined period", color: "text-[#71EDE2]" },
    { title: "Receivable", value: "111,111", desc: "Amount still due during the defined period", color: "text-[#39A8ED]" },
    { title: "Unearned", value: "111,111", desc: "Balance during the defined period", color: "text-[#ED1111]" },
    { title: "Upcoming Invoices", value: "1.1m", desc: "Schedules invoices in defined period", color: "text-[#003A92]" },
    { title: "Liability", value: "111,111", desc: "Any amount held towards tenants", color: "text-[#ED1111]" },
    { title: "Overdues", value: "111,111", desc: "Delayed invoices during the defined period", color: "text-[#ED1111]" },
];

function AllLease() {
    const [selectedLabel, setSelectedLabel] = useState('Action');

    const handleActionSelect = (selectedOption: string) => {
        console.log('Selected Action:', selectedOption);
        setSelectedLabel(selectedOption);
    };


    return (
        <div className="w-full">
            <div className="flex justify-between items-center py-5">
                <div className="flex flex-col gap-2">
                    <span className="font-bold">Tenant Name | Property | Unit No</span>
                    <div className="flex items-center gap-3">
                        <span>Lease Status</span>
                        <span className="px-1 bg-[#BDBDBD] text-white rounded">Draft</span>
                    </div>
                </div>

                <Dropdown
                    label={selectedLabel}
                    options={['Action', 'Delete', 'View']}
                    onSelect={handleActionSelect}
                />
            </div>

            <TabsSection />

            <div className="mt-5">
                <div className="flex justify-between mb-7">
                    <div className="flex items-center">
                        <p className="font-bold text-lg">Rental Snapshot</p>
                    </div>
                    <div>
                        <Image src={GraphIcon} alt="graph-icon" width={30} height={30} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Data.map((item, idx) => (
                        <div key={idx} className="border-[#83CFFF] border-2 rounded-lg p-4 bg-white">
                            <h3 className={`text-sm font-semibold ${item.color}`}>{item.title}</h3>
                            <p className="text-xs mb-2">{item.desc}</p>
                            <p className="text-xl font-bold text-gray-800">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='w-[65%]'>
                    <div className='mt-3'>
                        <Graph
                            series={series}
                            categories={categories}
                            totalBill={10000}
                            paidBill={7000}
                            unpaidBill={3000}
                        />
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
                        <div className='flex gap-10'>
                            <div className='w-full'>
                                <p className='text-md mb-2 font-bold'>Commission from Owner</p>
                                <GenericProgressBars progressData={progressItems1} />
                            </div>
                            <div className='w-full'>
                                <p className='text-md mb-2 font-bold'>Commission from Tenant</p>
                                <GenericProgressBars progressData={progressItems1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[35%]'>
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
            <div className='bg-white  w-full mt-5'>
                <h1 className="mb-5 text-md font-bold">Scheduled Invoices</h1>
                <GenericTable columns={columns2} data={data2} />
            </div>

            <div className='bg-white  w-full mt-5'>
                <h1 className="mb-5 text-md font-bold">Attached Documents</h1>
                <GenericTable columns={columns3} data={data3} />
            </div>

        </div>


    );
}

export default AllLease;
