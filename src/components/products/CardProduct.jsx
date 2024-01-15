import React from 'react'

export const CardProduct = () => {
    return (
        <div className='  md:col-span-1'>
            <img src="src\image\product1.jpg" alt="" />
            <div className='px-6 py-7 flex flex-col gap-[10px] justify-center items-center'>
                <h4 className='w-[131px] text-[color:var(--text-color,#252B42)] text-center text-base not-italic font-bold leading-6 tracking-[0.1px]'>Graphic Design</h4>
                <p className='text-[color:var(--second-text-color,#737373)] text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]'>English Department</p>
                <p className='flex gap-4'>
                    <span className='w-[52px] text-[color:var(--muted-color,#BDBDBD)] text-center text-base not-italic font-bold leading-6 tracking-[0.1px]'>$16.48</span>
                    <span className='w-[45px] text-[color:var(--secondary-color-1,#23856D)] text-center text-base not-italic font-bold leading-6 tracking-[0.1px]'>$6.48</span>
                </p>
                <p className='flex gap-1 justify-center'>
                    <button className='bg-[#23A6F0] w-4 h-4 rounded-full'></button>
                    <button className='bg-[#23856D] w-4 h-4 rounded-full'></button>
                    <button className='bg-[#E77C40] w-4 h-4 rounded-full'></button>
                    <button className='bg-[#252B42] w-4 h-4 rounded-full'></button>
                </p>
            </div>

        </div>
    )
}
