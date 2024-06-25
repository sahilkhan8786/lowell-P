'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import VimeoPlayer from './VimeoPlayer'
import { FaPlay } from "react-icons/fa";
export default function VideoPlayer({ url, thumbnail, title }) {
    const [isPlaying, setIsPlaying] = useState(false);
    function playerhandler() {
        setIsPlaying(true);
    }

    return (
        <section className='flex flex-col gap-2 bg-white px-2 py-4 mb- w-full relative ' onClick={playerhandler}>
            <div className='size-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <span className='w-full h-full rounded-full text-white flex items-center justify-center border-2 cursor-pointer'>
                    <FaPlay className='text-4xl pl-2 hover:scale-150 transition-all ' />
                </span>
            </div>
            <p className='text-center uppercase font-bold text-xl text-gray-500'>{title}</p>
            {isPlaying ? (
                <VimeoPlayer url={url} />
            ) : (
                <Image src={thumbnail} priority className='w-full cursor-pointer ' alt='thumbnail' />
            )}
        </section>


    )
}

