import React from 'react'
import { NavLink } from './link/NavLink'

export const DesktopNav = () => {
    return (
        <nav className=" hidden static md:w-auto md:block bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className=" flex items-center mx-auto p-4 justify-between gap-3">
                <div className='w-[145px] mx-[80px] md:mx-[20px]'>
                    <span className='text-[color:var(--text-color,#252B42)] text-2xl not-italic font-bold leading-8 tracking-[0.1px]'>BrandName</span>
                </div>
                <div className="hidden w-full z-10  md:block md:w-auto">
                    <ul className="flex flex-col justify-center items-center font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink item={{ content: "Home", link: "#" }} />
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-2 rounded hover:text-gray-700 text-[color:var(--second-text-color,#737373)] text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                            </svg></button>
                            {/* Dropdown menu */}
                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <NavLink item={{ content: "Home", link: "#" }} />
                                    <NavLink item={{ content: "Home", link: "#" }} />
                                    <NavLink item={{ content: "Home", link: "#" }} />
                                </ul>
                            </div>
                        </li>
                        <li> <NavLink item={{ content: "Home", link: "#" }} /></li>
                        <li> <NavLink item={{ content: "Home", link: "#" }} /></li>
                        <li> <NavLink item={{ content: "Home", link: "#" }} /></li>


                    </ul>
                </div>
                <div className='hidden w-full md:block md:w-auto'>
                    {/* icon user */}
                    <ul className="flex flex-col justify-center items-center font-medium p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#23A6F0] w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span className='text-[color:var(--primary-color,#23A6F0)] cursor-pointer hover:text-blue-500  text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]' >Login</span>
                            <span className='text-[#23A6F0] mx-1 font-bold'> / </span>
                            <span className='text-[color:var(--primary-color,#23A6F0)] cursor-pointer hover:text-blue-500 text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]'>Register</span>
                        </li>
                        <li >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-[#23A6F0] w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </li>
                        <li className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#23A6F0] w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className='text-[#23A6F0] ml-2'> 1 </span>
                        </li>
                        <li className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#23A6F0] w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <span className='text-[#23A6F0] ml-2'> 1 </span>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
