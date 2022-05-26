import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './content.css';
import Posts from './posts/Posts';

const Content = (props) => {
  const {login} = props;
  const [posts , setPosts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/post')
      .then(res=>{
        setPosts(res.data);
      })
      .catch(err=>{
        console.log(err);
    });
  }, []);

  return (
    <div className='content'>
      {posts.map((post)=><Posts post={post} login={login} key={post._id}/>)}
      {posts.length === 0 ?<p>Please upload some post or wait for the server</p>:'' }
    </div>
  )
}

export default Content