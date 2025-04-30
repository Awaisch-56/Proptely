"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/logo.svg';
import InputField from '../InputField';
import SearchIcon from '@/app/assets/search.svg';
import SettingIcon from '@/app/assets/setting.svg';
import NotificationIcon from '@/app/assets/Notification.svg';
import UserIcon from '@/app/assets/User.svg';

const Navbar: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <nav className="w-full bg-[#E7F3F9] py-2">
      <div className=" flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <div>
            <Image src={logo} alt="Logo" width={120} height={40} />
          </div>
          <InputField
            name="username"
            value={text}
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            iconSrc={SearchIcon}
            className='w-100'
            required
          
          />
        </div>
        <div className="gap-10 hidden md:flex">
          <div className="w-px h-10 bg-[#282B2E]"></div>
          <Image src={SettingIcon} alt='setting-icon' />
          <Image src={NotificationIcon} alt='notification-icon' />
          <div className="w-px h-10 bg-[#282B2E]"></div>
          <div className='flex gap-5'>
            <Image src={UserIcon} alt='notification-icon' />
            <div className='flex flex-col'>
              <span className='font-bold'>Alex Jonhson</span>
              <span className=''>Admin</span>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
