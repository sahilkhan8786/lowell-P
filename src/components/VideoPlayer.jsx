'use client'
import React, { Suspense } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import VideoLoader from './loaders/VideoLoader'

export default function VideoPlayer({ videoId }) {
    return (
        <secion className='flex flex-col gap-2 bg-white px-2 py-4 mb-4' >
            <p className='text-center uppercase font-bold text-xl text-gray-500'>Video 1-TITLE OF VIDEO HERE</p>
            <Suspense fallback={<VideoLoader />}>

                <YouTube videoId={videoId} className=' w-full h-full' />
            </Suspense>
        </secion>

    )
}
