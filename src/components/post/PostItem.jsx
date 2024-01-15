import React from 'react'

export const PostItem = () => {
    return (
        <div class=" col-span-1 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='relative'>
                <a href="#">
                    <img class="" src="src\image\post_image.png" alt="" />
                </a>
                <span className='px-4 py-2 absolute z-10 top-[20px] left-[20px] rounded-lg font-bold leading-6 text-white bg-red-500'>New</span>
            </div>
            <div class="p-7">
                <p className='flex gap-5 mb-4'>
                    <a href="" className='text-[#737373] text-xs not-italic font-normal leading-4 tracking-[0.2px]'>Google</a>
                    <a href="" className='text-[#737373] text-xs not-italic font-normal leading-4 tracking-[0.2px]'>Trending</a>
                    <a href="" className='text-[#737373] text-xs not-italic font-normal leading-4 tracking-[0.2px]'>New</a>
                </p>
                <a href="#">
                    <h5 class="mb-2 w-[247px] text-[color:var(--text-color,#252B42)] text-xl not-italic font-normal leading-[30px] tracking-[0.2px]">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 w-60 text-[color:var(--second-text-color,#737373)] text-sm not-italic font-normal leading-5 tracking-[0.2px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <p className='flex justify-between my-5'>
                    <span className='flex gap-2'>
                        <svg className='text-[#23A6F0] w-4 h-4 shrink-0' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                        <span className='text-[color:var(--second-text-color,#737373)] text-xs not-italic font-normal leading-4 tracking-[0.2px]'>
                            22 April 2021
                        </span>
                    </span>
                    <a className='flex gap-2'>
                        <svg className='text-[#23856D] w-4 h-[14.667px]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
                        </svg>
                        <span className='text-[color:var(--second-text-color,#737373)] text-xs not-italic font-normal leading-4 tracking-[0.2px]'>10 comments</span>
                    </a>
                </p>
                <span href="#" class="inline-flex items-center py-2 text-sm font-medium text-center text-black  ">
                    Learn more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
