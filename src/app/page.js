import Appeal from '@/components/Appeal'
import Details from '@/components/Details'
import Header from '@/components/Header'
import List from '@/components/List'
import VideoPlayer from '@/components/VideoPlayer'
import React from 'react'
import image1 from '@/assets/final-1.jpg'
import image2 from '@/assets/final-2.jpg'
import image3 from '@/assets/final-3.jpg'
import image4 from '@/assets/final-4.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <Details />
      <List />
      <h2 className='text-center text-4xl uppercase py-4 font-semibold'> All Videos</h2>
      <VideoPlayer url={'https://player.vimeo.com/video/962918624'} title={'Voted for Border WALL'} thumbnail={image1} />
      <VideoPlayer url={'https://player.vimeo.com/video/962930573'} title={'Puts Montana First'} thumbnail={image2} />
      <VideoPlayer url={'https://player.vimeo.com/video/962930825'} title={'He’s working with Border Patrol to control Fentanyl in Montana'} thumbnail={image3} />
      <VideoPlayer url={'https://player.vimeo.com/video/962930688'} title={'More and more lies, save MONTANA'} thumbnail={image4} />
      <Appeal />
    </>
  )
}
