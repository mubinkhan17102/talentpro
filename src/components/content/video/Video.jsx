import React from 'react'
import './video.css';
import tiktok from '../../../asset/video/tiktok.mp4'
import Reaction from '../reaction/Reaction';

const Video = () => {
  return (
    <div className='videoreaction'>
        <video src={tiktok} width={300} height={600} controls autoplay></video>
        <Reaction/>
    </div>
  )
}

export default Video