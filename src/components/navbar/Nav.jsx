import React from 'react'
import Search  from './searchbar/Search'
import Sidenav from './sidenav/Sidenav'
import './nav.css'
import {useNavigate} from 'react-router-dom'

const Nav = (props) => {
  const {login,changeToken,changeLogin} = props;
  const naigation = useNavigate();
  return (
    <div className='nav'>
        <div className='container'>
            <div className='nav_brand'>
                <h2 onClick={()=>naigation('/')} style={{cursor:'pointer'}}>TaskShare</h2>
            </div>
            <Search/>
            <Sidenav login={login} changeToken={changeToken} changeLogin={changeLogin}/>
        </div>
    </div>
  )
}

export default Nav