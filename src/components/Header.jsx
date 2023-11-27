import React from 'react';
import { FaMedium } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='px-6'>

        <div className='flex items-center justify-between mt-4'>

            <div className='flex gap-6'>
                <FaMedium className='text-5xl text-blue-500'/>
                {/* search box for md */}
                <input type='text' placeholder='Search' className='hidden md:block bg-gray-50 rounded-full px-16 text-xl border-none outline-none'/>
                <CiSearch className='hidden md:block absolute text-3xl top-[1.6rem] left-28'/>
            </div>

            

            <div className='flex gap-6 md:gap-8 items-center'>
                <FaPen className='hidden md:block text-2xl text-blue-500'/>
                <CiSearch className='text-3xl text-gray-800 md:hidden'/>
                <IoIosNotificationsOutline className='text-3xl text-gray-800'/>
                <MdAccountCircle className='text-4xl text-blue-500'/>
            </div>

        </div>

        <div className='border-b absolute top-[4.5rem] md:top-[5rem] left-0 w-screen'></div>
    </div>
  )
}

export default Header