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
      <VideoPlayer url={'https://player.vimeo.com/video/962918624'}/>
      <VideoPlayer url={'https://player.vimeo.com/video/962930573'}/>
      <VideoPlayer url={'https://player.vimeo.com/video/962930825'}/>
      <VideoPlayer url={'https://player.vimeo.com/video/962930688'}/>
      <Appeal />
    </>
  )
}
