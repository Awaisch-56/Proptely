'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Home from '@/app/assets/Home.svg';
import Vector from '@/app/assets/Vector.svg';
import Frame from '@/app/assets/Frame.svg';
import Contact from '@/app/assets/Contacts.svg';
import Invoice from '@/app/assets/Invoice.svg';
import Management from '@/app/assets/facility-management.svg';
import Bank from '@/app/assets/Bank.svg';
import Shop from '@/app/assets/shop.svg';
import Graph from '@/app/assets/graph.svg';
import Report from '@/app/assets/report.svg';
import Chat from '@/app/assets/ChatText.svg';
import Note from '@/app/assets/note.svg';
import Search from '@/app/assets/searching.svg';
import ROUTES from '@/constant/routes';


interface SubItem {
    label: string;
    path: string;
}

interface MenuItem {
    name: string;
    icon: string;
    subItems?: SubItem[];
}

const menuItems: MenuItem[] = [
    {
        name: 'Home',
        icon: Home,
        subItems: [
            { label: 'Dashboard', path: '' },
            { label: 'Activity', path: '' },
            { label: 'Updates', path: '' },
        ],
    },
    {
        name: 'Analytics',
        icon: Vector,
        subItems: [
            { label: 'Overview', path: '' },
            { label: 'Reports', path: '' },
            { label: 'Performance', path: '' },
        ],
    },
    {
        name: 'Portfolio',
        icon: Frame,
        subItems: [
            { label: 'Properties', path: ROUTES.PROPERTIES },
            { label: 'Units', path: ROUTES.UNITS },
            { label: 'Parkings', path: '' },
        ],
    },
    {
        name: 'Contacts',
        icon: Contact,
        subItems: [
            { label: 'All Contacts', path: '' },
            { label: 'Owner', path: '' },
            { label: 'Tenant', path: ROUTES.TENANTS },
            { label: 'Vendor', path: '' },
            { label: 'Agents', path: '' },

        ],
    },
    {
        name: 'Invoice',
        icon: Invoice,
        subItems: [
            { label: 'All Lease', path: ROUTES.ALL_LEASE },
            { label: 'Draft', path: ROUTES.DRAFTS },
            { label: 'Active', path: '' },
            { label: 'Completed', path: '' },

        ],
    },
    {
        name: 'Management',
        icon: Management,
        subItems: [
            { label: 'Tasks', path: '' },
            { label: 'Teams', path: '' },
            { label: 'Schedules', path: '' },
        ],
    },
    {
        name: 'Bank',
        icon: Bank,
        subItems: [
            { label: 'Accounts', path: '' },
            { label: 'Transactions', path: '' },
            { label: 'Statements', path: '' },
        ],
    },
    {
        name: 'Shop',
        icon: Shop,
        subItems: [
            { label: 'Products', path: '' },
            { label: 'Orders', path: '' },
            { label: 'Customers', path: '' },
        ],
    },
    {
        name: 'Graph',
        icon: Graph,
        subItems: [
            { label: 'Sales Graph', path: '' },
            { label: 'User Graph', path: '' },
            { label: 'Growth Graph', path: '' },
        ],
    },
    {
        name: 'Report',
        icon: Report,
        subItems: [
            { label: 'Monthly Reports', path: '' },
            { label: 'Yearly Reports', path: '' },
        ],
    },
    {
        name: 'Messages',
        icon: Chat,
        subItems: [
            { label: 'Inbox', path: '' },
            { label: 'Sent', path: '' },
            { label: 'Drafts', path: '' },
        ],
    },
    {
        name: 'Note',
        icon: Note,
        subItems: [
            { label: 'My Notes', path: '' },
            { label: 'Create Note', path: '' },
        ],
    },
    {
        name: 'Search',
        icon: Search,
        subItems: [
            { label: 'Search Users', path: '' },
            { label: 'Search Properties', path: '' },
        ],
    },
];


const Sidebar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>('Portfolio');


    return (
        <div className="h-[100%] flex relative w-60">
            <div className="w-20 bg-blue-50 flex flex-col items-center py-4 rounded-tr-2xl rounded-br-2xl relative">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="relative flex flex-col items-center w-full my-2"
                    >
                        <button
                            onClick={() => {
                                const isAlreadyActive = activeItem === item.name;
                                setActiveItem(isAlreadyActive ? null : item.name);
                            }}
                            className={`w-12 h-12 flex items-center justify-center rounded-md hover:bg-blue-100 ${activeItem === item.name ? 'bg-blue-200' : ''
                                }`}
                        >
                            <Image src={item.icon} alt={item.name} width={24} height={24} />
                        </button>
                        {item.subItems && activeItem === item.name && (
                            <div className="absolute left-20 top-3/2 transform -translate-y-1/2 bg-white  rounded-md overflow-hidden min-w-[150px]">
                                <div className="px-4 py-2 font-semibold text-[#003A92]">{item.name}</div>
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        href={subItem.path}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:font-bold whitespace-nowrap"
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
