import Image from 'next/image'
import React, { Suspense } from 'react'
import ImageLoader from './loaders/ImageLoader'

export default function Header() {
    return (
        <header className='w-full relative '>

            <div className='relative w-full  h-[300px] sm:h-[400px] lg:h-[600px] '>
                <Suspense fallback={<ImageLoader />}>
                    <Image src={'https://img.freepik.com/free-photo/metallic-montana-state-flag-montana-flag-background-metallic-texture_559531-11410.jpg?t=st=1718274041~exp=1718277641~hmac=92c508a28ed929f46b1d291aed01273096be7bf32b4fc441e542925913606c53&w=1380'}
                        alt='American Flag'
                        className='absolute top-0 left-0 opacity-90'
                        fill
                        priority
                    />
                </Suspense>
            </div>
            <div className='absolute top-1/3 left-0 w-full flex items-center justify-center flex-col gap-2'>
                <h1 className='text-3xl sm:text-5xl font-semibold bg-white/85 px-3 py-3 text-center'>Welcome to </h1>
                <p className=' font-bold text-5xl shadow-lg bg-white/85 px-3 py-3'>The&nbsp;Truth</p>
                <h1 className='text-3xl sm:text-5xl font-semibold bg-white/85 px-3 py-3 text-center'>About JON&nbsp;TESTER </h1>
                <p className='shadow-lg px-2 py-3 text-xs sm:text-xl flex flex-col gap-2 justify-between items-center bg-red-700 text-white'>
                    <span className='text-center'>
                        False statements and lies being put forth by Jon Tester and the Washington Lobbyist designed to specifically to deceive you the Montana voters!

                    </span>

                    <span className='text-xl text-center'>Decieves Montana Voters</span>
                </p>
            </div>
        </header>
    )
}
