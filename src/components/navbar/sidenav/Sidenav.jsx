import React from 'react'
import './sidenav.css';
import {useNavigate} from 'react-router-dom';
const Sidenav = () => {
  const nav = useNavigate();
  return (
    
    <div>
      <button 
        type='button'
        className='btnupload'
        onClick={()=>nav('/upload')}
      >
         + Upload
      </button>
      <button
       type='button'
       className='btnlogin'
       >
         Login
      </button>
    </div>
  )
}

export default Sidenav