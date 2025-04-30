import React from "react";
import Image from "next/image";

export type TableColumn<T> = {
  key: keyof T;
  label: string;
  icon?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type GenericTableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

export function GenericTable<T extends Record<string, any>>({
  columns,
  data,
}: GenericTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border-2 border-[#B5DEF2]">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="text-left text-xs font-semibold uppercase text-gray-700">
          <tr>
            {columns.map((col, index) => (
              <th
                key={String(col.key)}
                className={`px-6 py-3 border-r-4 ${
                  index === columns.length - 1 ? "border-none" : "border-[#B5DEF2]"
                }`}
              >
                <div className="flex items-center gap-2">
                  {col.label}
                  {col.icon && (
                    <Image
                      src={col.icon}
                      alt={`${col.label} icon`}
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 1 ? "bg-white" : "bg-[#E7F3F9]"}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={String(col.key)}
                  className={`px-6 py-4 whitespace-nowrap border-r-4 ${
                    colIndex === columns.length - 1 ? "border-none" : "border-[#B5DEF2]"
                  }`}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]?.toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
