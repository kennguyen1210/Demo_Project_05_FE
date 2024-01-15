import React from 'react'
import { CardProduct } from './products/CardProduct'

export const ShopCart2 = () => {
    return (
        <div className='mx-auto w-full px-8 md:px-[195px]'>
            <div className='py-[80px] '>
                <div className='mb-12 flex flex-col justify-center items-center text-center'>
                    <p className='text-[color:var(--second-text-color,#737373)] md:w-auto w-1/2 text-xl not-italic font-normal leading-[30px] tracking-[0.2px]'>Featured Products</p>
                    <h3 className=' md:w-auto w-1/2 text-[color:var(--text-color,#252B42)] text-2xl not-italic font-bold leading-8 tracking-[0.1px]'>BESTSELLER PRODUCTS</h3>
                    <p className='text-[color:var(--second-text-color,#737373)] md:w-auto w-1/2 text-sm not-italic font-normal leading-5 tracking-[0.2px]'>Problems trying to resolve the conflict between </p>
                </div>
                <div className='md:px-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 md:mb-20'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <div className='md:px-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
        </div>
    )
}
