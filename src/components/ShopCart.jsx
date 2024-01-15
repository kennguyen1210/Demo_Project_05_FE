import React from 'react'

export const ShopCart = () => {
    return (
        <div className='mx-auto px-8 md:px-[195px]'>
            <div className='py-[80px] '>
                <div className='mb-12 flex flex-col justify-center items-center text-center'>
                    <h3 className='text-[color:var(--text-color,#252B42)] w-1/2  md:w-auto text-2xl not-italic font-bold leading-8 tracking-[0.1px]'>EDITORS PICK</h3>
                    <p className='text-[color:var(--second-text-color,#737373)] w-1/2 md:w-auto text-center text-sm not-italic font-normal leading-5 tracking-[0.2px]'>Problems trying to resolve the conflict between </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <div className='relative md:col-span-2 h-[500px] md:w-auto md:h-auto'>
                        <img src="src\image\men.jpg" alt="" className=' h-full md:max-w-full ' />
                        <span className='absolute z-10 top-3/4 left-[30px] px-16 py-3 text-center text-base not-italic font-bold leading-6 tracking-[0.1px] bg-white'>Men</span>
                    </div>
                    <div className='relative  md:col-span-1 h-[500px] md:w-auto md:h-auto'>
                        <img src="src\image\women.png" alt="" className=' w-full h-full md:max-w-full ' />
                        <span className='absolute top-3/4 left-[30px] px-10 py-2 text-center text-base not-italic font-bold leading-6 tracking-[0.1px] bg-white'>Men</span>
                    </div>
                    <div className=' md:col-span-1 flex flex-col gap-2'>
                        <div className='relative h-[242px] md:w-auto md:h-auto'>
                            <img src="src\image\access.png" alt="" className=' w-full h-full md:max-w-full ' />
                            <span className='absolute top-3/4 left-[30px] px-10 py-2 text-center text-base not-italic font-bold leading-6 tracking-[0.1px] bg-white'>Men</span>
                        </div>
                        <div className='relative h-[242px] md:w-auto md:h-auto'>
                            <img src="src\image\kids.png" alt="" className=' w-full h-full md:max-w-full ' />
                            <span className='absolute top-3/4 left-[30px] px-10 py-2 text-center text-base not-italic font-bold leading-6 tracking-[0.1px] bg-white'>Men</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
