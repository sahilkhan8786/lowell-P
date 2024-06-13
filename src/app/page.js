import Appeal from '@/components/Appeal'
import Details from '@/components/Details'
import Header from '@/components/Header'
import List from '@/components/List'
import VideoPlayer from '@/components/VideoPlayer'
import React from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <Details />
      <List />
      <h2 className='text-center text-4xl uppercase py-4 font-semibold'> All Videos</h2>
      <VideoPlayer videoId={'zwsc1rVdPxA'} />
      <VideoPlayer videoId={'zwsc1rVdPxA'} />
      <VideoPlayer videoId={'zwsc1rVdPxA'} />
      <VideoPlayer videoId={'zwsc1rVdPxA'} />
      <Appeal />
    </>
  )
}
