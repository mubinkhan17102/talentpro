import React, { useState } from 'react'
import './registration.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('password', password);
    console.log(name, username, password);
    console.log(formData);
    axios.post('http://localhost:5000/auth/register/', formData)
    .then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <>
      <div style={{width:'70%'}}>
        <h3 className='uptitle'>Register Here</h3>
        <form onSubmit={submit} className='uplodform'>
          <div className='lavel' >
            <h4>Enter Your Name...</h4>
          </div>
          <div className='formcontrole'>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='lavel' >
            <h4>Enter the Username...</h4>
          </div>
          <div className='formcontrole'>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div className='lavel' >
            <h4>Enter the Password...</h4>
          </div>
          <div className='formcontrole'>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <input type="submit" className='btn-submit' value="Submit"/>
        </form>
        <button type='button' className='home-btn' onClick={()=>navigation('/')}>Go Back Home</button>
      </div>
    </>
  )
}

export default Registration