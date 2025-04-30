'use client';
import React, { useState } from 'react';
import Button from '@/app/components/Button';
import DownloadIcon from '@/app/assets/download.svg';
import Image from 'next/image';
import { GenericTable, TableColumn } from '@/app/components/Table';
import TableIcon from '@/app/assets/Table.svg';
import GraphIcon from '@/app/assets/graph-icon.svg';
import InputField from '@/app/components/InputField';
import SearchIcon from '@/app/assets/search.svg';
import EditIcon from '@/app/assets/EditIcon.svg';
import ViewIcon from '@/app/assets/view.svg';
import GenericPagination from '@/app/components/Pagination';

type PropertyData = {
  id: string;
  property: string;
  tags: string;
  size: string;
  numberUnits: string;
  managementFee: string;
  stage: string;
  assignedto: string;
  action: string;
};

const Properties: React.FC = () => {
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalItems = 50;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: TableColumn<PropertyData>[] = [
    { key: "id", label: "ID", icon: TableIcon },
    { key: "property", label: "Property", icon: TableIcon },
    { key: "tags", label: "Tags", icon: TableIcon },
    { key: "size", label: "Size", icon: TableIcon },
    { key: "numberUnits", label: "No of Units", icon: TableIcon },
    { key: "managementFee", label: "Management Fees", icon: TableIcon },
    { key: "stage", label: "Stage", icon: TableIcon },
    { key: "assignedto", label: "Assigned To", icon: TableIcon },
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

  const data: PropertyData[] = [
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    },
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    },
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    }, {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    }
    , {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    },
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    },
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    },
    {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    }, {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    }
    , {
      id: '16231',
      property: 'UPRES31',
      tags: '',
      size: '1500.0',
      numberUnits: '',
      managementFee: '',
      stage: '',
      assignedto: 'mq ar, Mark Jason',
      action: ''
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5">
        <div>
          <span className="font-bold text-lg">Properties</span>
        </div>
        <div className='flex gap-3'>
          <Image src={DownloadIcon} alt='download-icon' width={40} height={40} />
          <Button
            label="Import Properties"
            variant="primary"
            showIcon={false}
          />
          <Button
            label="Add Properties"
            variant="primary"
            showIcon={false}
          />
        </div>
      </div>
      <div className='bg-white p-4  w-full mt-3'>
        <div className='flex justify-between mb-5'>
          <div className='flex gap-3'>
            <p className="text-md">All</p>
            <p className="text-md">Residental</p>
            <p className="text-md">Commercial</p>
            <p className="text-md">Co Living</p>
          </div>
          <div className='flex gap-3 items-center'>
            <InputField
              name="username"
              value={text}
              placeholder="Search"
              onChange={(e) => setText(e.target.value)}
              iconSrc={SearchIcon}
              className='py-2'
              required
            />
            <Image src={GraphIcon} alt="graph-icon" width={40} height={40} />
            <Button
              label="Edit Column"
              variant="secondary"
              showIcon={false}
            />

            <Button
              label="Clear"
              variant="secondary"
              showIcon={false}
            />
          </div>
        </div>
        <GenericTable columns={columns} data={data} />
        <div
          className={`flex mt-5`}
        >
          <div>
            <p className='text-xs'>
              Displaying Units {((currentPage - 1) * itemsPerPage) + 1} -{" "}
              {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} in total
            </p>
          </div>
          <div className='flex-1'>
            <GenericPagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Properties;
