import React from 'react';
import dynamic from 'next/dynamic';


const ReactPlayer =  dynamic(()=>import('react-player/vimeo'),{ssr:false});

const VimeoPlayer = ({ url }) => {
  return (
    <div className='player-wrapper '>
      <ReactPlayer
        url={url}
        className='react-player'
        width='100%'
        height='100%'
        controls={true}
        playing={true}
      />
    </div>
  );
};

export default VimeoPlayer;
