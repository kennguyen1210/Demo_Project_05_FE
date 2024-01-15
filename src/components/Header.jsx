import React, { useState } from 'react'
import { DesktopNav } from './DesktopNav';
import { Brand } from './band/Brand';
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='mb-2 md:mb-0' >
                {/* container */}
                <DesktopNav />
                <nav className='mx-auto  md:px-5 w-full pt-9 md:hidden md:static'>
                    {/* logo */}
                    <div className='px-4 flex gap-2 items-center justify-between'>
                        <div className='w-[130px]'>
                            <span className='text-[color:var(--text-color,#252B42)] text-xl not-italic font-bold leading-8 tracking-[0.1px]'>BrandName</span>
                        </div>
                        {/* navigate */}
                        <div className='flex justify-start items-center gap-4'>
                            <div className='md:hover:text-blue-600'>
                                <svg className='w-6 h-6 shrink-0 ' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                </svg>
                            </div>

                            <div className='md:hover:text-blue-600 '>
                                <svg className='w-6 h-6 shrink-0' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                </svg>
                            </div>

                            <button className='' data-collapse-toggle="navbar-hamburger">
                                <svg className='w-6 h-6 shrink-0' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='hidden w-full transition-all duration-700 py-[98px] md:hidden' id='navbar-hamburger'>
                        <ul className=" left-0 duration-500 w-full flex flex-col items-center justify-center gap-4">
                            <li><a href="" className='text-[color:var(--second-text-color,#737373)] text-center text-3xl not-italic font-normal leading-[45px] tracking-[0.2px]' >Home</a></li>
                            <li><a href="" className='text-[color:var(--second-text-color,#737373)] text-center text-3xl not-italic font-normal leading-[45px] tracking-[0.2px]' >Home</a></li>
                            <li><a href="" className='text-[color:var(--second-text-color,#737373)] text-center text-3xl not-italic font-normal leading-[45px] tracking-[0.2px]' >Home</a></li>
                            <li><a href="" className='text-[color:var(--second-text-color,#737373)] text-center text-3xl not-italic font-normal leading-[45px] tracking-[0.2px]' >Home</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>


    )
}
