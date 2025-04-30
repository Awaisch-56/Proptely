'use client';
import React, { useState } from 'react';

const tabs = [
  'Overview',
  'Financials',
  'Tickets',
  'Work Orders',
  'Attachments',
  'Listing',
  'Communication',
  'Legal',
  'Notes',
  'Inspections',
];

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  return (
    <div className="w-full flex items-center bg-[#E9F0F5]   ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-full px-4 py-3 text-sm font-bold font-medium transition-all ${
            activeTab === tab
              ? 'bg-[#003F86] text-white rounded-t-md'
              : 'text-[#83CFFF]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsSection;
