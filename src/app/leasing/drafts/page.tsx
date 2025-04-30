'use client';
import React, { useState } from "react";
import Button from "@/app/components/Button";
import PlusIcon from '@/app/assets/Plus.svg';
import Dropdown from "@/app/components/Dropdown";
import Image from "next/image";
import DeleteIcon from "@/app/assets/Trash.svg";

const Drafts: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState('Select Tenants');

  const handleActionSelect = (selectedOption: string) => {
    console.log('Selected Action:', selectedOption);
    setSelectedLabel(selectedOption);
  };

  return (
    <div>

      <div className="flex justify-between items-center py-5">
        <div className="flex flex-col gap-2">
          <span className="font-bold">Draft Tenant Lease</span>
          <div>
            <span className="text-md text-[#003A92] font-bold">New Tenant</span>
          </div>
        </div>
        <Button
          label="Contact"
          variant="primary"
          showIcon={true}
          iconSrc={PlusIcon}
        />
      </div>

      <div className="flex gap-3">

        <div className="lg:col-span-2 space-y-6 w-[70%]">
          <div className="bg-white border-[#EFF5F8] border-3 rounded p-4 space-y-4 pb-10">
            <span className="font-bold text-md">Tenant</span>
            <div className="mt-5">
              <span className="text-md">Select Tenants</span>
              <Dropdown
                label={selectedLabel}
                options={['Select Tenants', 'Delete', 'View']}
                onSelect={handleActionSelect}
                className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
              />
            </div>

          </div>

          <div className="bg-white border-[#EFF5F8] border-3 rounded p-4 space-y-4 pb-10 ">
            <span className="font-bold text-md">Properties</span>
            <div className="mt-4">
              <Dropdown
                label={selectedLabel}
                options={['Select Properties', 'Delete', 'View']}
                onSelect={handleActionSelect}
                className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
              />
              <Dropdown
                label={selectedLabel}
                options={['Select Units', 'Delete', 'View']}
                onSelect={handleActionSelect}
                className='border-[#EFF5F8] border-2 w-full py-1 rounded-md mt-5'
                className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
              />
            </div>

          </div>

          <div className="bg-white border-[#EFF5F8] border-3 rounded p-6 ">
            <span className="font-bold text-md">Duration</span>
            <div className="flex flex-col gap-7 mt-6 pb-5">
              <label><input type="checkbox" /> Long Term Lease</label>
              <label><input type="checkbox" /> Short Term Lease</label>
            </div>
          </div>

          <div className="bg-white border-[#EFF5F8] border-3 rounded p-4 space-y-4 pb-5 ">
            <span className="font-bold text-md">Payment Schedule</span>

            <div className="mt-10 flex gap-5 w-full">
              <div className="w-full">
                <span className="text-md">Invoice Category</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
              <div className="w-full">
                <span className="text-md">Recurring Cycle</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select Units', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
            </div>
            <div className="mt-10 flex gap-5 w-full">
              <div className="w-full">
                <span className="text-md">Recurring Cycle</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
              <div className="w-full">
                <span className="text-md">Scheduled On</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select Units', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
            </div>

            <div className="mt-10 flex gap-5 w-full">
              <div className="w-full">
                <span className="text-md">Gross Amount with Tax</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
              <div className="w-full">
                <span className="text-md">Invoice to</span>
                <Dropdown
                  label={selectedLabel}
                  options={['Select Units', 'Delete', 'View']}
                  onSelect={handleActionSelect}
                  className='border-[#EFF5F8] border-2 w-full py-1 rounded-md'
                  className2=" border-[#EFF5F8] border-2 bg-[#E7F3F9]"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                label="Save Payment"
                variant="tertiary"
                showIcon={false}
              />
            </div>

          </div>

        </div>

        <div className="w-[30%]">
          <div className="bg-white border-[#EFF5F8] border-2 rounded p-4 space-y-4 pb-10">
            <span className="font-bold text-md">Lease Information</span>
            <div className="mt-5">
              <span className="text-md">Tenants</span>
            </div>
          </div>
          <div className="bg-white border-[#EFF5F8] border-2 rounded p-4 space-y-4 pb-10">
            <div className="mt-5 flex justify-between px-4">
              <span className="text-md">Property</span>
              <span className="text-md text-[#ED1111]">Reset</span>
            </div>
          </div>
          <div className="bg-white border-[#EFF5F8] border-2 rounded p-4 space-y-4 pb-10">
            <span className="text-md mt-3">Unit(s)</span>
            <div className="mt-5 flex justify-between px-4">
              <span className="text-md">123</span>
              <Image src={DeleteIcon} alt="delete-icon" width={20} height={20} />
            </div>
            <div className="mt-5 flex justify-between px-4">
              <span className="text-md">456</span>
              <Image src={DeleteIcon} alt="delete-icon" width={20} height={20} />
            </div>
            <div className="mt-5 flex justify-between px-4">
              <span className="text-md">789</span>
              <Image src={DeleteIcon} alt="delete-icon" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drafts;
