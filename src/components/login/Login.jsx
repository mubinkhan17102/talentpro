import React, { useState } from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const {login, changeToken , changeLogin} = props; 
  const navigation = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    axios.post('http://localhost:5000/auth/login', formdata)
    .then(res=>{
      changeToken(res.data.token);
      localStorage.setItem('login', true);
      localStorage.setItem('token', res.data.token);
      changeLogin(true);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
      <div style={{width:'70%'}}>
        <h3 className='uptitle'>Login Here</h3>
        {login===true?<p>You are Logedin. Go to the previous page.</p>:''}
        <form onSubmit={submit} className='uplodform'>
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

export default Login