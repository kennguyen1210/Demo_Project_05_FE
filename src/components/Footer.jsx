import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-28 px-8'>
            <div className='flex md:px-48 flex-col py-10 md:flex-row md:justify-between bg-[#FAFAFA]'>
                <p className='text-[color:var(--text-color,#252B42)] text-2xl not-italic font-bold leading-8 tracking-[0.1px]'>
                    Bandage
                </p>
                <p className='flex gap-4 md:px-5 mt-5 md:mt-0'>
                    <img src="src\image\facebook.png" alt="" className='w-6 h-6 ' />
                    <img src="src\image\instagram.jpg" alt="" className='w-6 h-6 ' />
                    <img src="src\image\twitter.png" alt="" className='w-6 h-6 ' />
                </p>
            </div>
            <div className='flex flex-col justify-between gap-7 md:gap-0 md:px-48 md:flex-row my-12'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]'>Company Info</h3>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]'>Company Info</h3>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]'>Company Info</h3>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]'>Company Info</h3>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[color:var(--text-color,#252B42)] text-base not-italic font-bold leading-6 tracking-[0.1px]'>Company Info</h3>
                    <form>
                        <div className="flex">
                            <input type="text" className=" text-sm text-gray-900 bg-gray-50  rounded-l-md border border-gray-300 outline-none" placeholder="Your email" required />
                            <button type="button" className="text-sm font-medium h-full rounded-r-md text-white bg-[#23A6F0] border hover:bg-blue-300 border-blue-500 py-3 px-4">
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <p className='text-sm not-italic font-bold leading-6 text-[#737373]'>About Us</p>
                </div>
            </div>
            <div className='bg-[#FAFAFA] flex justify-center text-center md:justify-start py-6 md:w-auto md:px-48'>
                <p className='w-2/3 md:w-auto text-[color:var(--second-text-color,#737373)] text-sm not-italic font-bold leading-6 tracking-[0.2px]'>Made With Love By Finland All Right Reserved </p>
            </div>
        </div>
    )
}
