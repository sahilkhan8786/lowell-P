'use client'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import VimeoPlayer from './VimeoPlayer'
import thumb from '@/img.jpg'

export default function VideoPlayer({ url, thumbnail }) {
    const [isPlaying, setIsPlaying] = useState(false);
    function playerhandler() {
        setIsPlaying(true);
    }

    return (
        <secion className='flex flex-col gap-2 bg-white px-2 py-4 mb- w-full' >
            <p className='text-center uppercase font-bold text-xl text-gray-500'>Video 1-TITLE OF VIDEO HERE</p>

            {
                isPlaying ? (
                    <VimeoPlayer url={url} />
                ) :
                    (
                        <div className='relative h-[500px]'>
                            <Image onClick={playerhandler} src={'https://img.freepik.com/free-vector/cartoon-school-bus-children-with-flat-design_23-2147840786.jpg?size=626&ext=jpg'} priority fill className='absolute cursor-pointer' alt='thumbnail'></Image>
                            <Image onClick={playerhandler} src={thumb} priority fill className='absolute cursor-pointer' alt='thumbnail'></Image>
                        </div>
                    )
            }


        </secion>

    )
}

