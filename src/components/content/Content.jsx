import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './content.css';
import Posts from './posts/Posts';

const Content = () => {
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
      {posts.map((post)=><Posts post={post} key={post._id}/>)}
    </div>
  )
}

export default Content