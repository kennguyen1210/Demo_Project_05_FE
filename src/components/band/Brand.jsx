import React from 'react'

export const Brand = () => {
    return (

        <div id="controls-carousel" className="relative md:hidden w-full h-[640px]" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-full overflow-hidden  md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src="src\image\product-slide-1.jpg" className="absolute object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-500 ease-in-out" data-carousel-item="active">
                    <img src="src\image\product-slide-1.jpg" className="absolute object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
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
                <div className="flex justify-center">
                    <h3 className="text-center text-[color:var(--light-text-color,#FFF)]  text-[40px] not-italic font-bold leading-[50px] tracking-[0.2px]">Black Friday</h3>
                </div>
                <div className="mt-2 mb-4 text-base text-gray-50 dark:text-gray-300">
                    More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                </div>

                <button type="button" className="text-gray-50  bg-blue-600  border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white">
                    Get Start
                </button>

            </div>
        </div>
    )
}
