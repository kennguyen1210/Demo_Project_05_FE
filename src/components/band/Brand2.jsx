import React from 'react'

export const Brand2 = () => {
    return (
        <div id="controls-carousel" className="relative md:hidden w-full h-[1300px]" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-full overflow-hidden">
                {/* Item 1 */}
                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src="src\image\product-slide-1.jpg" className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-500 ease-in-out" data-carousel-item="active">
                    <img src="src\image\product-slide-1.jpg" className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            <div id="alert-additional-content-5" className="text-center absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  mx-auto p-4 rounded-lg bg-transparent dark:border-gray-600 dark:bg-gray-800" role="alert">
                <div className="flex flex-col gap-[30px]">
                    <p className='text-[color:var(--light-text-color,#FFF)] text-center text-xl not-italic font-normal leading-[30px] tracking-[0.2px]'>SUMMER 2020</p>
                    <h3 className="text-[color:var(--light-text-color,#FFF)] text-center text-[40px] not-italic font-bold leading-[50px] tracking-[0.2px]">Vita Classic Product</h3>
                </div>
                <div className="mt-2 mb-4 ">
                    <p className='text-[color:var(--light-text-color,#FFF)] text-center text-xl font-light not-italic leading-[30px] tracking-[0.2px]'>More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

                </div>
                <div className='flex flex-col gap-5 items-center justify-start'>
                    <span className='text-[color:var(--light-text-color,#FFF)] text-center text-2xl not-italic font-bold leading-8 tracking-[0.1px]'>$16.48</span>
                    <button type="button" className="text-white bg-[#2DC071] border border-gray-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-[4px] text-xs px-6 py-2 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white">
                        Add to cart
                    </button>
                </div>

            </div>
        </div>
    )
}
