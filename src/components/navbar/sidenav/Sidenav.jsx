import React from 'react'
import './sidenav.css';
import {useNavigate} from 'react-router-dom';
const Sidenav = (props) => {
  const {login,changeToken,changeLogin} = props;
  const nav = useNavigate();

  const logout = ()=>{
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    changeToken('');
    changeLogin(false);
    nav('/')
  }

  return (
    
    <div>
      <button 
        type='button'
        className='btnupload'
        onClick={()=>nav('/upload')}
      >
         + Upload
      </button>
      {login === false?
        <>
          <button
          type='button'
          className='btnlogin'
          onClick={()=>nav('/login')}
          >
            Login
          </button>
          <button
          type='button'
          className='btnlogin'
          onClick={()=>nav('/register')}
          >
            Register
          </button>
        </>
        : <button
            type='button'
            className='btnlogin'
            onClick={logout}
            >
              Logout
          </button>
      }
    </div>
  )
}

export default Sidenav