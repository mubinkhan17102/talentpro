import React from 'react'
import Video from '../video/Video'
import './post.css'

const Posts = () => {
  return (
    <div className='post'>
      <div className='avator'>
        <img 
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/16a5d4e1f7d9b251b0a1a2a52e623040~c5_100x100.jpeg?x-expires=1653400800&x-signature=ZXr7MghJvpnllZZ8O9Pi138DW%2BQ%3D" alt=""
        className='userimage'
         />
      </div>
      <div className='postdetails'>
        <div className='user_details'>
          <h4>username</h4>
          <h4>name</h4>
        </div>
        <h3 className='title'>This is the post title</h3>
        <div className='hashtag'>
          <span>#hastag</span><span>#hastag</span><span>#hastag</span>
          <span>#hastag</span><span>#hastag</span><span>#hastag</span>
        </div>
        <Video/>
      </div>
      <hr />
    </div>
  )
}

export default Posts