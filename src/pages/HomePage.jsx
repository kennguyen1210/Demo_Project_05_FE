import React from 'react'
import { Header } from '../components/Header'
import { Brand } from '../components/band/Brand'
import { BandDesktop } from '../components/band/BandDesktop'
import { ShopCart } from '../components/ShopCart'
import { ShopCart2 } from '../components/ShopCart2'
import { Brand2 } from '../components/band/Brand2'
import { BrandDesktop2 } from '../components/band/BrandDesktop2'
import { Brand3 } from '../components/band/Brand3'
import { Posts } from '../components/Posts'
import { Footer } from '../components/Footer'

export const HomePage = () => {
    return (

        <div className='container mx-auto'>
            <Header />
            <Brand />
            <BandDesktop />
            <ShopCart />
            <ShopCart2 />
            <Brand2 />
            <BrandDesktop2 />
            <Brand3 />
            <Posts />
            <Footer />
        </div>

    )
}
