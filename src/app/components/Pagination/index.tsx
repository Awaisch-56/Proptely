"use client";
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const GenericPagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - (maxPagesToShow - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`text-sm px-2 w-8 h-8 rounded ${
            i === currentPage
              ? "bg-gray-200 text-black"
              : "text-gray-500 hover:bg-gray-200 hover:text-black"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="ellipsis" className="text-sm leading-8 px-1">
          ...
        </span>
      );
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`text-sm px-2 w-8 h-8 rounded ${
            totalPages === currentPage
              ? "bg-gray-200 text-black"
              : "text-gray-500 hover:bg-gray-200 hover:text-black"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-[#003A92] text-white rounded px-2 py-1 text-xs disabled:opacity-70"
      >
        &#8592;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#003A92] text-white rounded px-2 py-1 text-xs disabled:opacity-70"
      >
        &#8594;
      </button>
    </div>
  );
};

export default GenericPagination;
