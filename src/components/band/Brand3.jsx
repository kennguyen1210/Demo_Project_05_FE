import React from 'react'

export const Brand3 = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row md:gap-[30px] md:justify-center'>
            <div className='h-[682px]'>
                <img src="src\image\asian-woman-man.png" alt="" className='object-cover h-full' />
            </div>
            <div className='flex flex-col justify-center items-center md:items-start gap-[30px]'>
                <div className="flex flex-col gap-[30px]">
                    <p className='text-[color:var(--muted-text-color,#BDBDBD)] text-center md:text-left text-base not-italic font-bold leading-6 tracking-[0.1px]'>SUMMER 2020</p>
                    <h3 className="w-[303.479px] h-[140.499px] md:w-auto md:h-auto text-[color:var(--text-color,#252B42)] text-center text-[40px] not-italic font-bold leading-[50px] tracking-[0.2px]">Part of the Neural Universe</h3>
                </div>
                <div className="mt-2 mb-4 text-left w-1/2 ">
                    <p className='md:w-[376px] text-center md:text-left text-[color:var(--second-text-color,#737373)] text-xl not-italic font-normal leading-[30px] tracking-[0.2px]'>We know how large objects will act, but things on a small scale.</p>
                </div>
                <div className='md:flex md:gap-5 items-center md:justify-start'>

                    <button type="button" className="bg-blue-600 mb-4 hover:bg-blue-400 md:mb-0 md:bg-[#2DC071] flex flex-col items-center gap-2.5 px-10 py-[15px] rounded-[5px] text-[color:var(--light-text-color,#FFF)] text-center text-sm not-italic font-bold leading-[22px] tracking-[0.2px] md:hover:bg-green-700">
                        Add to cart
                    </button>
                    <button type='button' className='text-blue-600 border-blue-600 hover:text-white md:text-[color:var(--success-color,#2DC071)] text-center text-sm not-italic font-bold leading-[22px] tracking-[0.2px] flex flex-col items-center gap-2.5 border md:border-[color:var(--success-color,#2DC071)] px-10 py-[15px] rounded-[5px] border-solid hover:bg-gray-200 md:hover:text-green-900'>
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}
