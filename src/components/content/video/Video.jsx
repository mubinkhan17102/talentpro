import React from 'react'
import './video.css';
import Reaction from '../reaction/Reaction';

const Video = (props) => {
  let url = props.video;
  let id = props.id;
  let login = props.login;
  url = `http://localhost:5000/${url}`;
  return (
    <div className='videoreaction'>
        <video src={url} width={300} height={600} controls></video>
        <Reaction id = {id} login={login}/>
    </div>
  )
}

export default Video