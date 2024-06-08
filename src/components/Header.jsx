import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className='w-full relative'>

            <div className='relative w-full  h-[300px] sm:h-[400px] lg:h-[600px] '>
                <Image src={'/flag.webp'} alt='American Flag' className='absolute top-0 left-0 opacity-90' fill />
            </div>
            <div className='absolute top-1/3 left-0 w-full flex items-center justify-center flex-col gap-2'>
                <h1 className='text-3xl sm:text-5xl font-semibold bg-white/85 px-3 py-3 text-center'>Welcome to Jon Tester</h1>
                <p className=' font-bold text-6xl shadow-lg bg-white/85 px-3 py-3'>The&nbsp;Truth</p>
                <p className='shadow-lg px-2 py-3 text-xl flex flex-col gap-2 justify-between items-center bg-red-700 text-white'>
                    <span className='text-center'>
                        The Tester does T.V. and Radio Ads
                        The more he lies
                    </span>

                    <span>Decieves Montana Voters</span>
                </p>
            </div>
        </header>
    )
}
