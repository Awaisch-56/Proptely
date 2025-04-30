'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
    label: string;
    options: string[];
    onSelect?: (option: string) => void;
    className?: string;
    className2?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect, className = '', className2 = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-4 rounded cursor-pointer"
            >
                {label}
                <FaChevronDown size={12} className="ml-2" />
            </button>

            {isOpen && (
                <div className={` ${className2} w-full absolute right-0 mt-2 z-10 cursor-pointer`}>
                    <ul className="flex flex-col">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="w-full px-4  cursor-pointer"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
