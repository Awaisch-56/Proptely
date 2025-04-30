'use client';
import React from 'react';

interface ProgressItem {
  label: string;
  value: number; 
  color?: string; 
}

interface GenericProgressBarsProps {
  progressData: ProgressItem[];
}

const GenericProgressBars: React.FC<GenericProgressBarsProps> = ({ progressData }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      {progressData.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <div className="text-xs font-medium text-gray-700">{item.label}</div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: `${item.value}%`,
                backgroundColor: item.color || '#017BC6', 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenericProgressBars;
