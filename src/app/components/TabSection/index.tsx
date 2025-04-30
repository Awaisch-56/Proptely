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
    <div className="w-full flex overflow-x-auto bg-[#E9F0F5]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-shrink-0 px-2 py-2 md:px-4 md:py-3 text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
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
