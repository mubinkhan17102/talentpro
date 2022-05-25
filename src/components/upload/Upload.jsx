import './upload.css'
import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Upload = () => {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [msg, setMsg] = useState('');
  const [up, setUp] = useState('');


  const submit = (e)=>{
    e.preventDefault();
    setUp('Submitting......');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    axios.post('http://localhost:5000/post', formData)
      .then(res=>{
        setUp('');
        setMsg('Post Uploaded Successfully. Go back home.');
      })
      .catch(err=>{
        setUp('');
        setMsg('Something went wrong . Upload again.');
      })
  }

  return (
    <div style={{width:'70%'}}>
      <h3 className='uptitle'>Upload your post</h3>
        {
          up!==''?<p style={{marginTop:'10px'}}>{up}</p>:''
        }
        
        {
          msg!==''?<p style={{marginTop:'10px'}}>{msg}</p>:''
        }
        <form onSubmit={submit} className='uplodform'>
            <div className='lavel' >
              <h4>Enter the title...</h4>
            </div>
            <div className='formcontrole'>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='lavel' >
              <h4>Choose a file..</h4>
            </div>
            <div className='formcontrole'>
              <input type="file"  aria-label="File browser example" name='file' onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
            <input type="submit" className='btn-submit' value="Submit"/>
        </form>
        <button type='button' className='home-btn' onClick={()=>nav('/')}>Go Back Home</button>
    </div>
  )
}

export default Upload