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
import image5 from '@/assets/final-5.jpg'
import image6 from '@/assets/final-6.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <Details />
      <List />
      <h2 className='text-center text-4xl uppercase py-4 font-semibold'> All Videos</h2>
      <VideoPlayer
        url={'https://player.vimeo.com/video/962918624'}
        title={'Commercial 1 by Jon Tester and Washington'} thumbnail={image1} />
      <VideoPlayer
        url={'https://player.vimeo.com/video/962930573'}
        title={'Commercial 2 by Jon Tester and Washington'} thumbnail={image2} />
      <VideoPlayer
        url={'https://player.vimeo.com/video/962930825'}
        title={'Commercial 3 by Jon Tester and Washington'} thumbnail={image3} />
      <VideoPlayer
        url={'https://player.vimeo.com/video/962930688'}
        title={'Commercial 4 by Jon Tester and Washington'} thumbnail={image4} />
      <VideoPlayer
        url={'https://player.vimeo.com/video/970544250'}
        title={'Commercial 5 by Jon Tester and Washington'} thumbnail={image5} />
      <VideoPlayer
        url={'https://player.vimeo.com/video/970544004'}
        title={'Commercial 6 by Jon Tester and Washington'} thumbnail={image6} />
      <Appeal />
    </>
  )
}
