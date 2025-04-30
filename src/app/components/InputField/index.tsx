import Image from 'next/image';
import React from 'react';

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  iconSrc?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  required = false,
  className = '',
  iconSrc,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}

      <div className="relative">
        {iconSrc && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Image src={iconSrc} alt="icon" className="w-5 h-5 object-contain" />
          </div>
        )}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`px-5 py-1 bg-white rounded-md focus:outline-none border border-[#EFF5F8] focus:ring-0 ${iconSrc ? 'pl-10' : ''
            } ${className}`}
        />
      </div>
    </div>
  );
};

export default InputField;
