import React from 'react'
import { PostItem } from './post/PostItem'

export const Posts = () => {
    return (
        <div className='mx-auto px-8 mt-[80px] md:mt-[112px] md:px-[195px]'>
            {/* title */}
            <div className='flex flex-col justify-between gap-[10px] items-center mb-20'>
                <p className='text-[color:var(--primary-text-color,#23A6F0)] text-center text-sm not-italic font-bold leading-6 tracking-[0.2px]'>Practice Advice</p>
                <h2 className='text-[color:var(--text-color,#252B42)] text-center text-[40px] not-italic font-bold leading-[50px] tracking-[0.2px]'>Featured Posts</h2>
                <p className='text-[color:var(--second-text-color,#737373)] text-center text-sm not-italic font-normal leading-5 tracking-[0.2px] md:w-1/3'>
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className='gird grid-cols-1 gap-[40px] md:grid md:grid-cols-3 md:gap-[10px]'>
                {/* card */}
                <PostItem />
                <PostItem />
                <PostItem />
            </div>

        </div>

    )
}
