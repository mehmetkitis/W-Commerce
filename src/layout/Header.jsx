import { AlignRight, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='h-[1170px]'>
            <div className='h-[532px]'>
                <div className='flex justify-between m-0 '>
                    <p className='font-bold '>Bandage</p>
                    <div className='flex gap-10 '>
                        <User />
                        <Search />
                        <ShoppingCart />
                        <AlignRight />
                    </div>
                </div>
                <div className='flex flex-col mt-24 gap-10 font-semibold text-[#737373] text-4xl justify-between'>
                    <button>Home</button>
                    <button>Product</button>
                    <button>Pricing</button>
                    <button>Contact</button>
                </div>
            </div>

            <div className='bg-productImg1 h-[638px] bg-no-repeat mt-10 w-[414px]'>
                <p className='text-white text-5xl pt-48'>GROCERIES DELIVERY</p>
                <p className='text-white text-[1.8rem] m-8'>We know how large objects will act, but things on a small scale.</p>
                <button className='bg-sky-500 text-white p-2 font-semibold pr-7 pl-7 rounded-md'>Start Now</button>
            </div >
        </div>

    )
}

export default Header
