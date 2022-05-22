import React from 'react'
import './sidenav.css';

const Sidenav = () => {
  return (
    <div>
      <button 
        type='button'
        className='btnupload'
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