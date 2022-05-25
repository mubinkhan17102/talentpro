import React, { useEffect, useState } from 'react'
import './reaction.css';
import {FcLike,FcComments,FcShare} from 'react-icons/fc'
import axios from 'axios';

const Reaction = (props) => {
  const id = props.id;
  console.log(id);
  const [like, setLike] = useState(0);
  useEffect(()=>{
    axios.get(`http://localhost:5000/like/${id}`)
    .then(res=>{
      setLike(res.data.totallike);
    }).catch(err=>{
      console.log(err);
    })
  },[])

  const addLike = ()=>{
    setLike(like+1);
    const formdata = new FormData();
    formdata.append('id',id);
    formdata.append('like',like);
    axios.post('http://localhost:5000/like', formdata)
    .then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className='reaction'>
        <div className='like' onClick={addLike}>
            <FcLike/>
            <p>{like}</p>
        </div>
        <div className='like'>
          <FcComments/>
          <p>{10}</p>
        </div>
        <div className='like'>
          <FcShare/>
          <p>{10}</p>
        </div>
    </div>
  )
}

export default Reaction