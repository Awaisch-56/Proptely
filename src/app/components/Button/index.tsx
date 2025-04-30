'use client';
import React from 'react';
import Image from 'next/image';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface GenericButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: ButtonVariant;
    showIcon?: boolean;
    iconSrc?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#003A92] text-white',
    secondary: 'bg-[#FFFFFF] text-[#272729] border-[#E7F3F9] rounded-md border-2',
    tertiary: 'bg-[#FFFFFF] text-[#017BC6] border-[#E7F3F9] rounded-md border-2',
};

const Button: React.FC<GenericButtonProps> = ({
    label,
    variant = 'primary',
    showIcon = false,
    iconSrc,
    className = '',
    ...props
}) => {
    const iconSize = 20;

    return (
        <button
            className={`
        inline-flex items-center gap-1 px-4 py-2 rounded-md font-medium 
        transition-all duration-200 focus:outline-none cursor-pointer ${variantStyles[variant]} ${className}
      `}
            {...props}
        >
            {showIcon && iconSrc && (
                <Image src={iconSrc} alt="icon" width={iconSize} height={iconSize} />
            )}
            {label}
        </button>
    );
};

export default Button;
